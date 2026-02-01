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
    
    // Verschiedene Meter je nach Rolle
    if (role === 'minister') {
        state.simMeters = { jobs: 50, prices: 50, trade: 50, treasury: 50 };
    } else if (role === 'unternehmer') {
        state.simMeters = { profit: 50, market: 50, costs: 50, employees: 50 };
    } else if (role === 'verbraucher') {
        state.simMeters = { budget: 50, satisfaction: 50, ethics: 50 };
    }
    
    document.getElementById('sim-intro').classList.add('hidden');
    document.getElementById('sim-game').classList.remove('hidden');
    
    showSimScenario();
}

function getMetersHTML() {
    if (state.simRole === 'minister') {
        return `
            <div class="sim-header">
                <div class="sim-meters">
                    <div class="meter">
                        <span class="meter-label">👷 Arbeitsplätze</span>
                        <div class="meter-bar"><div class="meter-fill green" style="width: ${state.simMeters.jobs}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">🛒 Preise</span>
                        <div class="meter-bar"><div class="meter-fill ${state.simMeters.prices > 50 ? 'green' : 'red'}" style="width: ${state.simMeters.prices}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">🤝 Handel</span>
                        <div class="meter-bar"><div class="meter-fill blue" style="width: ${state.simMeters.trade}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">💰 Staatskasse</span>
                        <div class="meter-bar"><div class="meter-fill ${state.simMeters.treasury > 40 ? 'green' : 'red'}" style="width: ${state.simMeters.treasury}%"></div></div>
                    </div>
                </div>
            </div>
        `;
    } else if (state.simRole === 'unternehmer') {
        return `
            <div class="sim-header">
                <div class="sim-meters">
                    <div class="meter">
                        <span class="meter-label">💵 Gewinn</span>
                        <div class="meter-bar"><div class="meter-fill ${state.simMeters.profit > 40 ? 'green' : 'red'}" style="width: ${state.simMeters.profit}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">📈 Marktanteil</span>
                        <div class="meter-bar"><div class="meter-fill blue" style="width: ${state.simMeters.market}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">💰 Kostenkontrolle</span>
                        <div class="meter-bar"><div class="meter-fill ${state.simMeters.costs > 40 ? 'green' : 'yellow'}" style="width: ${state.simMeters.costs}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">👥 Mitarbeiter</span>
                        <div class="meter-bar"><div class="meter-fill green" style="width: ${state.simMeters.employees}%"></div></div>
                    </div>
                </div>
            </div>
        `;
    } else if (state.simRole === 'verbraucher') {
        return `
            <div class="sim-header">
                <div class="sim-meters">
                    <div class="meter">
                        <span class="meter-label">💰 Budget</span>
                        <div class="meter-bar"><div class="meter-fill ${state.simMeters.budget > 40 ? 'green' : 'red'}" style="width: ${state.simMeters.budget}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">😊 Zufriedenheit</span>
                        <div class="meter-bar"><div class="meter-fill ${state.simMeters.satisfaction > 50 ? 'green' : 'yellow'}" style="width: ${state.simMeters.satisfaction}%"></div></div>
                    </div>
                    <div class="meter">
                        <span class="meter-label">🌱 Ethik/Nachhaltigkeit</span>
                        <div class="meter-bar"><div class="meter-fill blue" style="width: ${state.simMeters.ethics}%"></div></div>
                    </div>
                </div>
            </div>
        `;
    }
    return '';
}

function showSimScenario() {
    const scenarios = simulatorScenarios[state.simRole];
    
    if (state.simScenarioIndex >= scenarios.length) {
        showSimResults();
        return;
    }
    
    const scenario = scenarios[state.simScenarioIndex];
    const container = document.getElementById('sim-game');
    
    container.innerHTML = `
        ${getMetersHTML()}
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
    
    // Berechne Durchschnitt je nach Rolle
    let avg, verdict, roleTitle, summary;
    const meters = state.simMeters;
    
    if (state.simRole === 'minister') {
        avg = (meters.jobs + meters.prices + meters.trade + meters.treasury) / 4;
        roleTitle = "Wirtschaftsminister";
        summary = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 16px 0; font-size: 13px;">
                <div>👷 Arbeitsplätze: <strong>${meters.jobs}%</strong></div>
                <div>🛒 Preise: <strong>${meters.prices}%</strong></div>
                <div>🤝 Handel: <strong>${meters.trade}%</strong></div>
                <div>💰 Staatskasse: <strong>${meters.treasury}%</strong></div>
            </div>
        `;
    } else if (state.simRole === 'unternehmer') {
        avg = (meters.profit + meters.market + meters.costs + meters.employees) / 4;
        roleTitle = "Unternehmer*in";
        summary = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 16px 0; font-size: 13px;">
                <div>💵 Gewinn: <strong>${meters.profit}%</strong></div>
                <div>📈 Marktanteil: <strong>${meters.market}%</strong></div>
                <div>💰 Kosten: <strong>${meters.costs}%</strong></div>
                <div>👥 Mitarbeiter: <strong>${meters.employees}%</strong></div>
            </div>
        `;
    } else {
        avg = (meters.budget + meters.satisfaction + meters.ethics) / 3;
        roleTitle = "Verbraucher*in";
        summary = `
            <div style="display: grid; grid-template-columns: 1fr; gap: 8px; margin: 16px 0; font-size: 13px;">
                <div>💰 Budget: <strong>${meters.budget}%</strong></div>
                <div>😊 Zufriedenheit: <strong>${meters.satisfaction}%</strong></div>
                <div>🌱 Ethik: <strong>${meters.ethics}%</strong></div>
            </div>
        `;
    }
    
    if (avg >= 65) {
        verdict = "🏆 Ausgezeichnet! Du hast eine gute Balance gefunden.";
    } else if (avg >= 50) {
        verdict = "👍 Solide! Es gibt Verbesserungspotenzial, aber insgesamt gut gemeistert.";
    } else if (avg >= 35) {
        verdict = "😐 Gemischt. Einige gute Entscheidungen, aber auch Verbesserungspotenzial.";
    } else {
        verdict = "😬 Schwierig! Deine Entscheidungen hatten einige negative Folgen.";
    }
    
    const scenarios = simulatorScenarios[state.simRole];
    
    container.innerHTML = `
        <div class="sim-scenario">
            <h4>🎮 Simulation beendet!</h4>
            <p style="font-size: 13px; color: #718096; margin-bottom: 12px;">
                Du hast ${scenarios.length} Situationen als ${roleTitle} gemeistert.
            </p>
            <p style="font-size: 18px; font-weight: 600;">${verdict}</p>
            ${summary}
            <div style="background: #F7F9FC; padding: 12px; border-radius: 8px; margin-top: 16px;">
                <p style="font-size: 13px; color: #718096; margin: 0;">
                    💡 <strong>Erkenntnis:</strong> In der Realität sind solche Entscheidungen noch komplexer. 
                    Es gibt selten eine "richtige" Antwort – jede Wahl hat Vor- und Nachteile.
                </p>
            </div>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 16px;">
            <button class="next-btn" onclick="restartSameRole()" style="flex: 1; background: #4ECDC4;">🔄 Nochmal</button>
            <button class="next-btn" onclick="resetSimulator()" style="flex: 1;">↩️ Andere Rolle</button>
        </div>
    `;
    
    addXP(25 + scenarios.length * 5); // Mehr XP für längere Simulationen
}

function restartSameRole() {
    const role = state.simRole;
    startSimulator(role);
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

// === DYNAMISCHER SIMULATOR ===
let currentDynamicScenario = null;

function startDynamicSimulator() {
    window.dynamicSim.init();
    document.getElementById('sim-intro').classList.add('hidden');
    document.getElementById('sim-game').classList.remove('hidden');
    showDynamicScenario();
}

function showDynamicScenario() {
    const sim = window.dynamicSim;
    const state = sim.getState();
    const container = document.getElementById('sim-game');
    
    // Check ob Spiel zu Ende
    if (state.turn >= state.maxTurns) {
        showDynamicResults();
        return;
    }
    
    // Check auf pending events
    let scenario;
    if (state.pendingEvents.length > 0) {
        const pendingEvent = state.pendingEvents.shift();
        // Generiere Szenario aus pending event
        scenario = sim.generateScenario();
        scenario.type = pendingEvent.type;
        scenario.country = pendingEvent.country;
        scenario.product = pendingEvent.product;
        scenario.tariff = pendingEvent.tariff;
    } else {
        scenario = sim.generateScenario();
    }
    
    currentDynamicScenario = scenario;
    
    // Render UI
    const countries = sim.countries;
    const relationsHTML = Object.entries(state.relations).map(([key, value]) => {
        const country = countries[key];
        return `<div class="relation-item">
            <span>${country.flag}</span>
            <span class="relation-bar" style="background: linear-gradient(to right, 
                ${value < 0 ? '#FF6B6B' : '#4ECDC4'} ${Math.abs(value)}%, 
                #E2E8F0 ${Math.abs(value)}%)"></span>
            <span style="font-size: 11px">${sim.getRelationEmoji(value)}</span>
        </div>`;
    }).join('');
    
    container.innerHTML = `
        <div class="sim-header">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-weight: 600; color: #1E3A5F;">🗓️ Monat ${state.turn + 1}/${state.maxTurns}</span>
                <span style="font-size: 12px; color: #718096;">Deutschland 🇩🇪</span>
            </div>
            <div class="sim-meters">
                <div class="meter">
                    <span class="meter-label">📈 Wirtschaft</span>
                    <div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(state.economy)}" style="width: ${state.economy}%"></div></div>
                </div>
                <div class="meter">
                    <span class="meter-label">🌍 Diplomatie</span>
                    <div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(state.diplomacy)}" style="width: ${state.diplomacy}%"></div></div>
                </div>
                <div class="meter">
                    <span class="meter-label">🏠 Innenpolitik</span>
                    <div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(state.domestic)}" style="width: ${state.domestic}%"></div></div>
                </div>
            </div>
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #E2E8F0;">
                <span style="font-size: 11px; color: #718096; display: block; margin-bottom: 6px;">Beziehungen:</span>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; font-size: 12px;">
                    ${relationsHTML}
                </div>
            </div>
        </div>
        
        <div class="sim-scenario">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 24px">${scenario.countryData.flag}</span>
                <h4 style="margin: 0; color: #1E3A5F;">${scenario.title}</h4>
            </div>
            <p>${scenario.text}</p>
        </div>
        
        <div class="sim-choices">
            ${scenario.choices.map((choice, i) => `
                <button class="choice-btn" onclick="makeDynamicChoice(${i})">${choice.text}</button>
            `).join('')}
        </div>
    `;
}

function makeDynamicChoice(choiceIndex) {
    const sim = window.dynamicSim;
    const result = sim.processChoice(currentDynamicScenario, choiceIndex);
    const state = sim.getState();
    const container = document.getElementById('sim-game');
    
    // Zeige Ergebnis
    container.innerHTML = `
        <div class="sim-header">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-weight: 600; color: #1E3A5F;">🗓️ Monat ${state.turn}/${state.maxTurns}</span>
            </div>
            <div class="sim-meters">
                <div class="meter">
                    <span class="meter-label">📈 Wirtschaft</span>
                    <div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(state.economy)}" style="width: ${state.economy}%"></div></div>
                </div>
                <div class="meter">
                    <span class="meter-label">🌍 Diplomatie</span>
                    <div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(state.diplomacy)}" style="width: ${state.diplomacy}%"></div></div>
                </div>
                <div class="meter">
                    <span class="meter-label">🏠 Innenpolitik</span>
                    <div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(state.domestic)}" style="width: ${state.domestic}%"></div></div>
                </div>
            </div>
        </div>
        
        <div class="sim-scenario" style="border-left: 4px solid #4ECDC4;">
            <h4 style="color: #1E3A5F; margin-bottom: 12px;">📰 Ergebnis</h4>
            <p>${result.text}</p>
            ${result.followUp ? '<p style="margin-top: 12px; color: #FF6B6B; font-weight: 500;">⚠️ Die Situation entwickelt sich weiter...</p>' : ''}
        </div>
        
        <button class="next-btn" onclick="showDynamicScenario()" style="width: 100%">
            ${state.turn >= state.maxTurns ? '📊 Ergebnis ansehen' : 'Weiter → Monat ' + (state.turn + 1)}
        </button>
    `;
    
    addXP(15);
}

function showDynamicResults() {
    const sim = window.dynamicSim;
    const state = sim.getState();
    const score = sim.calculateFinalScore();
    const verdict = sim.getVerdict(score);
    const container = document.getElementById('sim-game');
    
    // Generiere Beziehungs-Zusammenfassung
    const relSummary = Object.entries(state.relations).map(([key, value]) => {
        const country = sim.countries[key];
        return `<div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
            <span>${country.flag} ${country.name}</span>
            <span>${sim.getRelationEmoji(value)} ${sim.getRelationText(value)} (${value > 0 ? '+' : ''}${value})</span>
        </div>`;
    }).join('');
    
    // Generiere Chronik
    const historyHTML = state.history.slice(-5).map(h => `
        <div style="font-size: 12px; padding: 8px; background: #F7F9FC; border-radius: 6px; margin-bottom: 6px;">
            <strong>Monat ${h.turn + 1}:</strong> ${h.scenario}<br>
            <span style="color: #718096;">${h.choice}</span>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="sim-scenario">
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="font-size: 48px;">${verdict.emoji}</span>
                <h3 style="margin: 12px 0; color: #1E3A5F;">Amtszeit beendet!</h3>
                <p style="font-size: 24px; font-weight: 700; color: #4ECDC4;">${score}/100 Punkte</p>
            </div>
            
            <p style="text-align: center; margin-bottom: 20px;">${verdict.text}</p>
            
            <div style="background: #F7F9FC; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #1E3A5F;">📊 Endstand</h4>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; text-align: center;">
                    <div>
                        <div style="font-size: 24px; font-weight: 700; color: ${sim.getMeterColor(state.economy) === 'green' ? '#48BB78' : sim.getMeterColor(state.economy) === 'yellow' ? '#ECC94B' : '#FF6B6B'}">${state.economy}%</div>
                        <div style="font-size: 11px; color: #718096;">Wirtschaft</div>
                    </div>
                    <div>
                        <div style="font-size: 24px; font-weight: 700; color: ${sim.getMeterColor(state.diplomacy) === 'green' ? '#48BB78' : sim.getMeterColor(state.diplomacy) === 'yellow' ? '#ECC94B' : '#FF6B6B'}">${state.diplomacy}%</div>
                        <div style="font-size: 11px; color: #718096;">Diplomatie</div>
                    </div>
                    <div>
                        <div style="font-size: 24px; font-weight: 700; color: ${sim.getMeterColor(state.domestic) === 'green' ? '#48BB78' : sim.getMeterColor(state.domestic) === 'yellow' ? '#ECC94B' : '#FF6B6B'}">${state.domestic}%</div>
                        <div style="font-size: 11px; color: #718096;">Innenpolitik</div>
                    </div>
                </div>
            </div>
            
            <div style="background: #F7F9FC; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #1E3A5F;">🌍 Internationale Beziehungen</h4>
                ${relSummary}
            </div>
            
            <details style="background: #F7F9FC; padding: 12px; border-radius: 12px;">
                <summary style="cursor: pointer; font-weight: 600; color: #1E3A5F;">📜 Chronik (letzte 5 Ereignisse)</summary>
                <div style="margin-top: 12px;">
                    ${historyHTML}
                </div>
            </details>
        </div>
        
        <div style="display: flex; gap: 10px; margin-top: 16px;">
            <button class="next-btn" onclick="startDynamicSimulator()" style="flex: 1; background: #4ECDC4;">🔄 Nochmal spielen</button>
            <button class="next-btn" onclick="resetSimulator()" style="flex: 1;">↩️ Zurück</button>
        </div>
    `;
    
    addXP(50 + Math.floor(score / 2)); // Bonus XP basierend auf Score
}
