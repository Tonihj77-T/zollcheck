// === App State ===
let state = {
    xp: 0,
    level: 1,
    dailyQuizCount: 0,
    quizCorrect: 0,
    quizStreak: 0,
    currentQuestion: 0,
    products: [],
    currentCategory: null,
    simRole: null,
    simScenarioIndex: 0,
    simMeters: {
        jobs: 50,
        prices: 50,
        trade: 50,
        treasury: 50
    }
};

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    updateUI();
    loadQuiz();
    loadLexikon();
    renderProducts();
    
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('SW registered'))
            .catch(err => console.log('SW registration failed:', err));
    }
});

// === State Management ===
function loadState() {
    const saved = localStorage.getItem('zollcheck_state');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
}

function saveState() {
    localStorage.setItem('zollcheck_state', JSON.stringify(state));
}

function addXP(amount) {
    state.xp += amount;
    
    // Check for level up
    const levels = [0, 100, 300, 600, 1000, 1500, 2000];
    for (let i = levels.length - 1; i >= 0; i--) {
        if (state.xp >= levels[i]) {
            state.level = i + 1;
            break;
        }
    }
    
    saveState();
    updateUI();
}

function updateUI() {
    // XP Badge
    document.getElementById('xp-display').textContent = `${state.xp} XP`;
    
    // Level info
    const levels = [0, 100, 300, 600, 1000, 1500, 2000];
    const levelNames = ['Zoll-Neuling', 'Handels-Lehrling', 'Import-Export-Kenner', 'Wirtschafts-Profi', 'Handels-Experte', 'Zoll-Meister', 'Zoll-Legende'];
    const currentLevelXP = levels[state.level - 1] || 0;
    const nextLevelXP = levels[state.level] || levels[levels.length - 1];
    const progress = ((state.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    
    const levelText = document.querySelector('.level-text');
    if (levelText) {
        levelText.textContent = `Level ${state.level} • ${levelNames[state.level - 1]}`;
    }
    
    const xpBarFill = document.getElementById('xp-bar-fill');
    if (xpBarFill) {
        xpBarFill.style.width = `${Math.min(progress, 100)}%`;
    }
    
    const currentXPEl = document.getElementById('current-xp');
    if (currentXPEl) {
        currentXPEl.textContent = state.xp;
    }
    
    // Daily challenge progress
    const dailyProgress = document.getElementById('daily-progress');
    if (dailyProgress) {
        dailyProgress.style.width = `${(state.dailyQuizCount / 3) * 100}%`;
    }
    const dailyCount = document.getElementById('daily-count');
    if (dailyCount) {
        dailyCount.textContent = Math.min(state.dailyQuizCount, 3);
    }
    
    // Quiz stats
    const quizCorrect = document.getElementById('quiz-correct');
    if (quizCorrect) {
        quizCorrect.textContent = state.quizCorrect;
    }
    const quizStreak = document.getElementById('quiz-streak');
    if (quizStreak) {
        quizStreak.textContent = state.quizStreak;
    }
    
    // Globalization index
    updateGlobIndex();
}

// === Navigation ===
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // Show target screen
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }
    
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.screen === screenId);
    });
    
    // Reset simulator when leaving
    if (screenId !== 'screen-simulator') {
        resetSimulator();
    }
}

// === Quiz ===
let shuffledQuestions = [];

function loadQuiz() {
    shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
    state.currentQuestion = 0;
    showQuestion();
}

function showQuestion() {
    const quizCard = document.getElementById('quiz-card');
    const feedback = document.getElementById('quiz-feedback');
    
    quizCard.classList.remove('hidden');
    feedback.classList.add('hidden');
    
    if (state.currentQuestion >= shuffledQuestions.length) {
        shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
        state.currentQuestion = 0;
    }
    
    const q = shuffledQuestions[state.currentQuestion];
    document.getElementById('quiz-question').textContent = q.question;
    
    const answersContainer = document.getElementById('quiz-answers');
    answersContainer.innerHTML = q.answers.map((answer, i) => `
        <button class="answer-btn" onclick="checkAnswer(${i})">${answer}</button>
    `).join('');
}

function checkAnswer(index) {
    const q = shuffledQuestions[state.currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = index === q.correct;
    
    // Disable all buttons
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // Update stats
    if (isCorrect) {
        state.quizCorrect++;
        state.quizStreak++;
        state.dailyQuizCount++;
        addXP(5 + (state.quizStreak > 3 ? 2 : 0)); // Bonus for streak
    } else {
        state.quizStreak = 0;
    }
    saveState();
    updateUI();
    
    // Show feedback after short delay
    setTimeout(() => {
        showFeedback(isCorrect, q.explanation);
    }, 800);
}

function showFeedback(isCorrect, explanation) {
    const quizCard = document.getElementById('quiz-card');
    const feedback = document.getElementById('quiz-feedback');
    
    quizCard.classList.add('hidden');
    feedback.classList.remove('hidden');
    
    const icon = document.getElementById('feedback-icon');
    icon.textContent = isCorrect ? '✓' : '✗';
    icon.className = `feedback-icon ${isCorrect ? 'correct' : 'wrong'}`;
    
    document.getElementById('feedback-text').textContent = isCorrect ? 'Richtig!' : 'Leider falsch';
    document.getElementById('feedback-explanation').textContent = explanation;
}

function nextQuestion() {
    state.currentQuestion++;
    showQuestion();
}

// === Haushalt / Products ===
function showProductModal() {
    document.getElementById('product-modal').classList.remove('hidden');
    document.getElementById('product-select').classList.add('hidden');
    state.currentCategory = null;
}

function hideProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
}

function selectCategory(category) {
    state.currentCategory = category;
    const products = productsDB[category];
    
    const container = document.getElementById('product-select');
    container.innerHTML = products.map(p => `
        <div class="product-option" onclick="addProduct('${p.id}')">
            <span style="font-size: 24px">${p.emoji}</span>
            <div>
                <strong>${p.name}</strong>
                <div style="font-size: 12px; color: #718096">${p.origin}</div>
            </div>
        </div>
    `).join('');
    
    container.classList.remove('hidden');
}

function addProduct(productId) {
    const product = productsDB[state.currentCategory].find(p => p.id === productId);
    if (product && !state.products.find(p => p.id === productId)) {
        state.products.push(product);
        addXP(10);
        saveState();
        renderProducts();
    }
    hideProductModal();
}

function renderProducts() {
    const container = document.getElementById('products-list');
    
    if (state.products.length === 0) {
        container.innerHTML = '<p class="empty-state">Noch keine Produkte erfasst.<br>Füge dein erstes Produkt hinzu!</p>';
        return;
    }
    
    container.innerHTML = state.products.map(p => `
        <div class="product-item" onclick="showProductDetail('${p.id}')">
            <span class="product-emoji">${p.emoji}</span>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-origin">🌍 ${p.origin}</div>
            </div>
            <span class="product-arrow">→</span>
        </div>
    `).join('');
    
    updateGlobIndex();
}

function updateGlobIndex() {
    // Calculate based on number of products and their origins
    const uniqueCountries = new Set(state.products.map(p => p.origin));
    const index = Math.min(100, state.products.length * 12 + uniqueCountries.size * 5);
    
    const indexEl = document.getElementById('glob-index');
    if (indexEl) {
        indexEl.textContent = `${index}%`;
    }
}

function showProductDetail(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('detail-product-name').textContent = `${product.emoji} ${product.name}`;
    
    const routeHTML = product.route.map((step, i) => `
        <div class="route-step">
            <span>${step.flag} ${step.place}</span>
        </div>
        ${i < product.route.length - 1 ? '<div class="route-arrow">↓</div>' : ''}
    `).join('');
    
    const content = document.getElementById('product-detail-content');
    content.innerHTML = `
        <div class="detail-map">
            <h4>🗺️ Herkunft & Route</h4>
            ${routeHTML}
            <div style="margin-top: 12px; font-size: 13px; opacity: 0.8">
                📏 Gesamtstrecke: ${product.distance}
            </div>
        </div>
        
        <div class="detail-section">
            <h4>💰 Preisaufschlüsselung</h4>
            <div class="price-row">
                <span>Herstellung</span>
                <span>${product.price.production.toFixed(2)} €</span>
            </div>
            <div class="price-row">
                <span>Transport</span>
                <span>${product.price.transport.toFixed(2)} €</span>
            </div>
            <div class="price-row">
                <span>Zoll</span>
                <span>${product.price.tariff.toFixed(2)} €</span>
            </div>
            <div class="price-row">
                <span>Verkaufspreis</span>
                <span>${product.price.retail.toFixed(2)} €</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h4>📋 Zoll-Info</h4>
            <p style="font-size: 14px">${product.tariffNote}</p>
        </div>
        
        <div class="detail-section" style="background: #FFF5F5; border-left: 3px solid #FF6B6B;">
            <h4>⚡ Was wäre wenn?</h4>
            <p style="font-size: 14px">${product.scenario}</p>
        </div>
    `;
    
    document.getElementById('product-detail-modal').classList.remove('hidden');
}

function hideProductDetail() {
    document.getElementById('product-detail-modal').classList.add('hidden');
}

// === Lexikon ===
function loadLexikon() {
    renderLexikon(lexikonEntries);
}

function renderLexikon(entries) {
    const container = document.getElementById('lexikon-list');
    container.innerHTML = entries.map(entry => `
        <div class="lexikon-item" onclick="showLexikonDetail('${entry.term}')">
            <h4>${entry.term}</h4>
            <p>${entry.definition}</p>
        </div>
    `).join('');
}

function filterLexikon() {
    const query = document.getElementById('lexikon-search').value.toLowerCase();
    const filtered = lexikonEntries.filter(e => 
        e.term.toLowerCase().includes(query) || 
        e.definition.toLowerCase().includes(query)
    );
    renderLexikon(filtered);
}

function showLexikonDetail(term) {
    const entry = lexikonEntries.find(e => e.term === term);
    if (!entry) return;
    
    const container = document.getElementById('lexikon-list');
    container.innerHTML = `
        <div class="lexikon-detail">
            <button class="back-btn" onclick="loadLexikon()" style="margin-bottom: 16px">← Zurück</button>
            <h3>${entry.term}</h3>
            <p>${entry.definition}</p>
            <div class="example">
                <div class="example-label">🎯 Beispiel</div>
                <p style="margin: 0">${entry.example}</p>
            </div>
        </div>
    `;
    
    // Award XP for reading
    addXP(3);
}

// === Simulator ===
function startSimulator(role) {
    state.simRole = role;
    state.simScenarioIndex = 0;
    state.simMeters = { jobs: 50, prices: 50, trade: 50, treasury: 50 };
    
    document.getElementById('sim-intro').classList.add('hidden');
    document.getElementById('sim-game').classList.remove('hidden');
    
    showSimScenario();
}

function showSimScenario() {
    const scenarios = simulatorScenarios[state.simRole];
    
    if (state.simScenarioIndex >= scenarios.length) {
        showSimResults();
        return;
    }
    
    const scenario = scenarios[state.simScenarioIndex];
    const container = document.getElementById('sim-game');
    
    let metersHTML = '';
    if (state.simRole === 'minister') {
        metersHTML = `
            <div class="sim-header">
                <div class="sim-meters">
                    <div class="meter">
                        <span class="meter-label">👷 Arbeitsplätze</span>
                        <div class="meter-bar"><div class="meter-fill green" style="width: ${state.simMeters.jobs}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">🛒 Verbraucherpreise</span>
                        <div class="meter-bar"><div class="meter-fill yellow" style="width: ${state.simMeters.prices}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">🤝 Handelsbeziehungen</span>
                        <div class="meter-bar"><div class="meter-fill blue" style="width: ${state.simMeters.trade}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">💰 Staatskasse</span>
                        <div class="meter-bar"><div class="meter-fill green" style="width: ${state.simMeters.treasury}%"></div></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = `
        ${metersHTML}
        <div class="sim-scenario">
            <h4>Situation ${state.simScenarioIndex + 1}/${scenarios.length}</h4>
            <p><strong>${scenario.title}</strong></p>
            <p>${scenario.text}</p>
        </div>
        <div class="sim-choices">
            ${scenario.choices.map((choice, i) => `
                <button class="choice-btn" onclick="makeChoice(${i})">${choice.text}</button>
            `).join('')}
        </div>
    `;
}

function makeChoice(choiceIndex) {
    const scenario = simulatorScenarios[state.simRole][state.simScenarioIndex];
    const choice = scenario.choices[choiceIndex];
    
    // Apply effects
    if (choice.effects) {
        Object.entries(choice.effects).forEach(([key, value]) => {
            if (state.simMeters[key] !== undefined) {
                state.simMeters[key] = Math.max(0, Math.min(100, state.simMeters[key] + value));
            }
        });
    }
    
    // Show result
    const container = document.getElementById('sim-game');
    container.innerHTML = `
        <div class="sim-scenario">
            <h4>Ergebnis</h4>
            <p>${choice.result}</p>
        </div>
        <button class="next-btn" onclick="nextSimScenario()" style="width: 100%">Weiter →</button>
    `;
    
    addXP(10);
}

function nextSimScenario() {
    state.simScenarioIndex++;
    showSimScenario();
}

function showSimResults() {
    const container = document.getElementById('sim-game');
    
    let verdict = '';
    const avg = (state.simMeters.jobs + state.simMeters.prices + state.simMeters.trade + state.simMeters.treasury) / 4;
    
    if (avg >= 60) {
        verdict = "🏆 Ausgezeichnet! Du hast eine gute Balance gefunden.";
    } else if (avg >= 40) {
        verdict = "👍 Solide! Es gibt Verbesserungspotenzial, aber insgesamt okay.";
    } else {
        verdict = "😬 Schwierig! Deine Entscheidungen hatten einige negative Folgen.";
    }
    
    container.innerHTML = `
        <div class="sim-scenario">
            <h4>🎮 Simulation beendet!</h4>
            <p>${verdict}</p>
            <p style="margin-top: 16px; font-size: 14px; color: #718096">
                In der Realität sind solche Entscheidungen noch komplexer – es gibt selten eine "richtige" Antwort.
            </p>
        </div>
        <button class="next-btn" onclick="resetSimulator()" style="width: 100%">Nochmal spielen</button>
    `;
    
    addXP(20);
}

function resetSimulator() {
    state.simRole = null;
    state.simScenarioIndex = 0;
    document.getElementById('sim-intro').classList.remove('hidden');
    document.getElementById('sim-game').classList.add('hidden');
}

// === Close modals on backdrop click ===
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
