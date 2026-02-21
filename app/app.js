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
    const saved = localStorage.getItem('tarrific_state');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
}

function saveState() {
    localStorage.setItem('tarrific_state', JSON.stringify(state));
}

function addXP(amount) {
    state.xp += amount;
    
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
    const xpDisplay = document.getElementById('xp-display');
    if (xpDisplay) xpDisplay.textContent = `${state.xp} XP`;
    
    // Level info
    const levels = [0, 100, 300, 600, 1000, 1500, 2000];
    const levelNames = ['Zoll-Neuling', 'Handels-Lehrling', 'Import-Export-Kenner', 'Wirtschafts-Profi', 'Handels-Experte', 'Zoll-Meister', 'Zoll-Legende'];
    const currentLevelXP = levels[state.level - 1] || 0;
    const nextLevelXP = levels[state.level] || levels[levels.length - 1];
    const progress = ((state.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    
    const levelText = document.querySelector('.level-text');
    if (levelText) levelText.textContent = `Level ${state.level} • ${levelNames[state.level - 1]}`;
    
    const xpBarFill = document.getElementById('xp-bar-fill');
    if (xpBarFill) xpBarFill.style.width = `${Math.min(progress, 100)}%`;
    
    const currentXPEl = document.getElementById('current-xp');
    if (currentXPEl) currentXPEl.textContent = state.xp;
    
    // Quiz stats (home + quiz screen)
    ['quiz-correct', 'quiz-correct-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = state.quizCorrect;
    });
    ['quiz-streak', 'quiz-streak-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = state.quizStreak;
    });
}

// === Navigation ===
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.screen === screenId);
    });
    
    // Hide/show nav bar for lesson view
    const nav = document.getElementById('bottom-nav');
    if (nav) {
        nav.style.display = screenId === 'screen-lesson' ? 'none' : 'flex';
    }
    
    // Reset simulator when leaving
    if (screenId !== 'screen-simulator') {
        resetSimulator();
    }
    
    // Initialize map when showing map screen
    if (screenId === 'screen-karte' && window.tradeMap) {
        window.tradeMap.init();
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
    
    if (quizCard) quizCard.classList.remove('hidden');
    if (feedback) feedback.classList.add('hidden');
    
    if (state.currentQuestion >= shuffledQuestions.length) {
        shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
        state.currentQuestion = 0;
    }
    
    const q = shuffledQuestions[state.currentQuestion];
    const questionEl = document.getElementById('quiz-question');
    if (questionEl) questionEl.textContent = q.question;
    
    const answersContainer = document.getElementById('quiz-answers');
    if (answersContainer) {
        answersContainer.innerHTML = q.answers.map((answer, i) => `
            <button class="answer-btn" onclick="checkAnswer(${i})">${answer}</button>
        `).join('');
    }
}

function checkAnswer(index) {
    const q = shuffledQuestions[state.currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = index === q.correct;
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add('correct');
        else if (i === index && !isCorrect) btn.classList.add('wrong');
    });
    
    if (isCorrect) {
        state.quizCorrect++;
        state.quizStreak++;
        state.dailyQuizCount++;
        addXP(5 + (state.quizStreak > 3 ? 2 : 0));
    } else {
        state.quizStreak = 0;
    }
    saveState();
    updateUI();
    
    setTimeout(() => showFeedback(isCorrect, q.explanation), 800);
}

function showFeedback(isCorrect, explanation) {
    const quizCard = document.getElementById('quiz-card');
    const feedback = document.getElementById('quiz-feedback');
    
    if (quizCard) quizCard.classList.add('hidden');
    if (feedback) feedback.classList.remove('hidden');
    
    const icon = document.getElementById('feedback-icon');
    if (icon) {
        icon.textContent = isCorrect ? '✓' : '✗';
        icon.className = `feedback-icon ${isCorrect ? 'correct' : 'wrong'}`;
    }
    
    const feedbackText = document.getElementById('feedback-text');
    if (feedbackText) feedbackText.textContent = isCorrect ? 'Richtig!' : 'Leider falsch';
    
    const feedbackExp = document.getElementById('feedback-explanation');
    if (feedbackExp) feedbackExp.textContent = explanation;
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
                <div style="font-size: 12px; color: var(--text-dim)">${p.origin}</div>
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
    if (!container) return;
    
    if (state.products.length === 0) {
        container.innerHTML = '<p class="empty-state">Noch keine Produkte erfasst.<br>Füge dein erstes Produkt hinzu!</p>';
        return;
    }
    
    container.innerHTML = state.products.map(p => `
        <div class="product-item">
            <div style="display:flex;align-items:center;gap:14px;flex:1;cursor:pointer" onclick="showProductDetail('${p.id}')">
                <span class="product-emoji">${p.emoji}</span>
                <div class="product-info">
                    <div class="product-name">${p.name}</div>
                    <div class="product-origin">🌍 ${p.origin}</div>
                </div>
            </div>
            <button class="btn-icon" onclick="event.stopPropagation();removeProduct('${p.id}')" style="font-size:14px;width:30px;height:30px;flex-shrink:0" title="Entfernen">✕</button>
        </div>
    `).join('');
}

function removeProduct(productId) {
    state.products = state.products.filter(p => p.id !== productId);
    saveState();
    renderProducts();
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
            <div style="margin-top: 12px; font-size: 13px; opacity: 0.7">
                📏 Gesamtstrecke: ${product.distance}
            </div>
        </div>
        
        <div class="detail-section">
            <h4>💰 Preisaufschlüsselung</h4>
            <div class="price-row"><span>Herstellung</span><span>${product.price.production.toFixed(2)} €</span></div>
            <div class="price-row"><span>Transport</span><span>${product.price.transport.toFixed(2)} €</span></div>
            <div class="price-row"><span>Zoll</span><span>${product.price.tariff.toFixed(2)} €</span></div>
            <div class="price-row"><span>Verkaufspreis</span><span>${product.price.retail.toFixed(2)} €</span></div>
        </div>
        
        <div class="detail-section">
            <h4>📋 Zoll-Info</h4>
            <p style="font-size: 14px">${product.tariffNote}</p>
        </div>
        
        <div class="detail-section" style="border-left: 3px solid var(--red);">
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
    if (!container) return;
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
            <button class="back-btn" onclick="loadLexikon()">← Zurück</button>
            <h3>${entry.term}</h3>
            <p>${entry.definition}</p>
            <div class="example">
                <div class="example-label">🎯 Beispiel</div>
                <p>${entry.example}</p>
            </div>
        </div>
    `;
    
    addXP(3);
}

// === Simulator ===
function startSimulator(role) {
    state.simRole = role;
    state.simScenarioIndex = 0;
    
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
                    <div class="meter"><span class="meter-label">👷 Arbeitsplätze</span><div class="meter-bar"><div class="meter-fill green" style="width: ${state.simMeters.jobs}%"></div></div></div>
                    <div class="meter"><span class="meter-label">🛒 Preise</span><div class="meter-bar"><div class="meter-fill ${state.simMeters.prices > 50 ? 'green' : 'red'}" style="width: ${state.simMeters.prices}%"></div></div></div>
                    <div class="meter"><span class="meter-label">🤝 Handel</span><div class="meter-bar"><div class="meter-fill blue" style="width: ${state.simMeters.trade}%"></div></div></div>
                    <div class="meter"><span class="meter-label">💰 Staatskasse</span><div class="meter-bar"><div class="meter-fill ${state.simMeters.treasury > 40 ? 'green' : 'red'}" style="width: ${state.simMeters.treasury}%"></div></div></div>
                </div>
            </div>
        `;
    } else if (state.simRole === 'unternehmer') {
        return `
            <div class="sim-header">
                <div class="sim-meters">
                    <div class="meter"><span class="meter-label">💵 Gewinn</span><div class="meter-bar"><div class="meter-fill ${state.simMeters.profit > 40 ? 'green' : 'red'}" style="width: ${state.simMeters.profit}%"></div></div></div>
                    <div class="meter"><span class="meter-label">📈 Marktanteil</span><div class="meter-bar"><div class="meter-fill blue" style="width: ${state.simMeters.market}%"></div></div></div>
                    <div class="meter"><span class="meter-label">💰 Kostenkontrolle</span><div class="meter-bar"><div class="meter-fill ${state.simMeters.costs > 40 ? 'green' : 'yellow'}" style="width: ${state.simMeters.costs}%"></div></div></div>
                    <div class="meter"><span class="meter-label">👥 Mitarbeiter</span><div class="meter-bar"><div class="meter-fill green" style="width: ${state.simMeters.employees}%"></div></div></div>
                </div>
            </div>
        `;
    } else if (state.simRole === 'verbraucher') {
        return `
            <div class="sim-header">
                <div class="sim-meters">
                    <div class="meter"><span class="meter-label">💰 Budget</span><div class="meter-bar"><div class="meter-fill ${state.simMeters.budget > 40 ? 'green' : 'red'}" style="width: ${state.simMeters.budget}%"></div></div></div>
                    <div class="meter"><span class="meter-label">😊 Zufriedenheit</span><div class="meter-bar"><div class="meter-fill ${state.simMeters.satisfaction > 50 ? 'green' : 'yellow'}" style="width: ${state.simMeters.satisfaction}%"></div></div></div>
                    <div class="meter"><span class="meter-label">🌱 Ethik</span><div class="meter-bar"><div class="meter-fill blue" style="width: ${state.simMeters.ethics}%"></div></div></div>
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
    
    if (choice.effects) {
        Object.entries(choice.effects).forEach(([key, value]) => {
            if (state.simMeters[key] !== undefined) {
                state.simMeters[key] = Math.max(0, Math.min(100, state.simMeters[key] + value));
            }
        });
    }
    
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
    const meters = state.simMeters;
    let avg, roleTitle, summary;
    
    if (state.simRole === 'minister') {
        avg = (meters.jobs + meters.prices + meters.trade + meters.treasury) / 4;
        roleTitle = "Wirtschaftsminister";
        summary = `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 16px 0; font-size: 13px;">
            <div>👷 Jobs: <strong>${meters.jobs}%</strong></div>
            <div>🛒 Preise: <strong>${meters.prices}%</strong></div>
            <div>🤝 Handel: <strong>${meters.trade}%</strong></div>
            <div>💰 Kasse: <strong>${meters.treasury}%</strong></div>
        </div>`;
    } else if (state.simRole === 'unternehmer') {
        avg = (meters.profit + meters.market + meters.costs + meters.employees) / 4;
        roleTitle = "Unternehmer*in";
        summary = `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 16px 0; font-size: 13px;">
            <div>💵 Gewinn: <strong>${meters.profit}%</strong></div>
            <div>📈 Markt: <strong>${meters.market}%</strong></div>
            <div>💰 Kosten: <strong>${meters.costs}%</strong></div>
            <div>👥 Team: <strong>${meters.employees}%</strong></div>
        </div>`;
    } else {
        avg = (meters.budget + meters.satisfaction + meters.ethics) / 3;
        roleTitle = "Verbraucher*in";
        summary = `<div style="display: grid; grid-template-columns: 1fr; gap: 8px; margin: 16px 0; font-size: 13px;">
            <div>💰 Budget: <strong>${meters.budget}%</strong></div>
            <div>😊 Zufriedenheit: <strong>${meters.satisfaction}%</strong></div>
            <div>🌱 Ethik: <strong>${meters.ethics}%</strong></div>
        </div>`;
    }
    
    let verdict;
    if (avg >= 65) verdict = "🏆 Ausgezeichnet! Du hast eine gute Balance gefunden.";
    else if (avg >= 50) verdict = "👍 Solide! Insgesamt gut gemeistert.";
    else if (avg >= 35) verdict = "😐 Gemischt. Einige gute Entscheidungen, aber Verbesserungspotenzial.";
    else verdict = "😬 Schwierig! Deine Entscheidungen hatten negative Folgen.";
    
    const scenarios = simulatorScenarios[state.simRole];
    
    container.innerHTML = `
        <div class="sim-scenario">
            <h4>🎮 Simulation beendet!</h4>
            <p style="font-size: 13px; color: var(--text-dim); margin-bottom: 12px;">
                Du hast ${scenarios.length} Situationen als ${roleTitle} gemeistert.
            </p>
            <p style="font-size: 16px; font-weight: 600;">${verdict}</p>
            ${summary}
            <div style="background: var(--bg-input); padding: 12px; border-radius: 8px; margin-top: 12px;">
                <p style="font-size: 13px; color: var(--text-dim); margin: 0;">
                    💡 In der Realität sind solche Entscheidungen noch komplexer. 
                    Es gibt selten eine "richtige" Antwort.
                </p>
            </div>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 12px;">
            <button class="next-btn" onclick="restartSameRole()" style="flex: 1; background: var(--green);">🔄 Nochmal</button>
            <button class="next-btn" onclick="resetSimulator()" style="flex: 1;">↩️ Andere Rolle</button>
        </div>
    `;
    
    addXP(25 + scenarios.length * 5);
}

function restartSameRole() {
    startSimulator(state.simRole);
}

function resetSimulator() {
    state.simRole = null;
    state.simScenarioIndex = 0;
    const intro = document.getElementById('sim-intro');
    const game = document.getElementById('sim-game');
    if (intro) intro.classList.remove('hidden');
    if (game) game.classList.add('hidden');
}

// === Toast & Confirm Modal ===
function showToast(message, duration = 2500) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

let confirmCallback = null;
function showConfirm(text) {
    return new Promise(resolve => {
        confirmCallback = resolve;
        document.getElementById('confirm-text').textContent = text;
        document.getElementById('confirm-modal').classList.remove('hidden');
    });
}
function hideConfirm(result) {
    document.getElementById('confirm-modal').classList.add('hidden');
    if (confirmCallback) { confirmCallback(result); confirmCallback = null; }
}

// === Close modals on backdrop click ===
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});

// === DYNAMISCHER SIMULATOR ===
let currentDynamicScenario = null;

function startDynamicSimulator() {
    if (!window.dynamicSim) {
        showToast('Dynamischer Simulator wird geladen...');
        return;
    }
    window.dynamicSim.init();
    document.getElementById('sim-intro').classList.add('hidden');
    document.getElementById('sim-game').classList.remove('hidden');
    showDynamicScenario();
}

function showDynamicScenario() {
    const sim = window.dynamicSim;
    const st = sim.getState();
    const container = document.getElementById('sim-game');
    
    if (st.turn >= st.maxTurns) {
        showDynamicResults();
        return;
    }
    
    let scenario;
    if (st.pendingEvents.length > 0) {
        const pendingEvent = st.pendingEvents.shift();
        scenario = sim.generateScenario();
        scenario.type = pendingEvent.type;
        scenario.country = pendingEvent.country;
        scenario.product = pendingEvent.product;
        scenario.tariff = pendingEvent.tariff;
    } else {
        scenario = sim.generateScenario();
    }
    
    currentDynamicScenario = scenario;
    
    const countries = sim.countries;
    const relationsHTML = Object.entries(st.relations).map(([key, value]) => {
        const country = countries[key];
        return `<div class="relation-item">
            <span>${country.flag}</span>
            <span class="relation-bar" style="background: linear-gradient(to right, 
                ${value < 0 ? 'var(--red)' : 'var(--green)'} ${Math.abs(value)}%, 
                var(--border) ${Math.abs(value)}%)"></span>
            <span style="font-size: 11px">${sim.getRelationEmoji(value)}</span>
        </div>`;
    }).join('');
    
    container.innerHTML = `
        <div class="sim-header">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-weight: 600;">🗓️ Monat ${st.turn + 1}/${st.maxTurns}</span>
                <span style="font-size: 12px; color: var(--text-dim);">Deutschland 🇩🇪</span>
            </div>
            <div class="sim-meters">
                <div class="meter"><span class="meter-label">📈 Wirtschaft</span><div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(st.economy)}" style="width: ${st.economy}%"></div></div></div>
                <div class="meter"><span class="meter-label">🌍 Diplomatie</span><div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(st.diplomacy)}" style="width: ${st.diplomacy}%"></div></div></div>
                <div class="meter"><span class="meter-label">🏠 Innenpolitik</span><div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(st.domestic)}" style="width: ${st.domestic}%"></div></div></div>
            </div>
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
                <span style="font-size: 11px; color: var(--text-dim); display: block; margin-bottom: 6px;">Beziehungen:</span>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; font-size: 12px;">
                    ${relationsHTML}
                </div>
            </div>
        </div>
        
        <div class="sim-scenario">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 24px">${scenario.countryData.flag}</span>
                <h4 style="margin: 0;">${scenario.title}</h4>
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
    const st = sim.getState();
    const container = document.getElementById('sim-game');
    
    container.innerHTML = `
        <div class="sim-header">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-weight: 600;">🗓️ Monat ${st.turn}/${st.maxTurns}</span>
            </div>
            <div class="sim-meters">
                <div class="meter"><span class="meter-label">📈 Wirtschaft</span><div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(st.economy)}" style="width: ${st.economy}%"></div></div></div>
                <div class="meter"><span class="meter-label">🌍 Diplomatie</span><div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(st.diplomacy)}" style="width: ${st.diplomacy}%"></div></div></div>
                <div class="meter"><span class="meter-label">🏠 Innenpolitik</span><div class="meter-bar"><div class="meter-fill ${sim.getMeterColor(st.domestic)}" style="width: ${st.domestic}%"></div></div></div>
            </div>
        </div>
        
        <div class="sim-scenario" style="border-left: 4px solid var(--green);">
            <h4>📰 Ergebnis</h4>
            <p>${result.text}</p>
            ${result.followUp ? '<p style="margin-top: 12px; color: var(--red); font-weight: 500;">⚠️ Die Situation entwickelt sich weiter...</p>' : ''}
        </div>
        
        <button class="next-btn" onclick="showDynamicScenario()" style="width: 100%">
            ${st.turn >= st.maxTurns ? '📊 Ergebnis ansehen' : 'Weiter → Monat ' + (st.turn + 1)}
        </button>
    `;
    
    addXP(15);
}

function showDynamicResults() {
    const sim = window.dynamicSim;
    const st = sim.getState();
    const score = sim.calculateFinalScore();
    const verdict = sim.getVerdict(score);
    const container = document.getElementById('sim-game');
    
    const relSummary = Object.entries(st.relations).map(([key, value]) => {
        const country = sim.countries[key];
        return `<div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid var(--border);">
            <span>${country.flag} ${country.name}</span>
            <span>${sim.getRelationEmoji(value)} ${sim.getRelationText(value)}</span>
        </div>`;
    }).join('');
    
    const historyHTML = st.history.slice(-5).map(h => `
        <div style="font-size: 12px; padding: 8px; background: var(--bg-input); border-radius: 6px; margin-bottom: 6px;">
            <strong>Monat ${h.turn + 1}:</strong> ${h.scenario}<br>
            <span style="color: var(--text-dim);">${h.choice}</span>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="sim-scenario" style="text-align: center;">
            <span style="font-size: 48px;">${verdict.emoji}</span>
            <h3 style="margin: 12px 0;">Amtszeit beendet!</h3>
            <p style="font-size: 24px; font-weight: 700; color: var(--green);">${score}/100 Punkte</p>
            <p style="margin: 16px 0;">${verdict.text}</p>
            
            <div style="background: var(--bg-input); padding: 16px; border-radius: 12px; margin: 16px 0; text-align: center;">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                    <div><div style="font-size: 22px; font-weight: 700; color: var(--accent-light);">${st.economy}%</div><div style="font-size: 11px; color: var(--text-dim);">Wirtschaft</div></div>
                    <div><div style="font-size: 22px; font-weight: 700; color: var(--accent-light);">${st.diplomacy}%</div><div style="font-size: 11px; color: var(--text-dim);">Diplomatie</div></div>
                    <div><div style="font-size: 22px; font-weight: 700; color: var(--accent-light);">${st.domestic}%</div><div style="font-size: 11px; color: var(--text-dim);">Innenpolitik</div></div>
                </div>
            </div>
            
            <div style="background: var(--bg-input); padding: 16px; border-radius: 12px; margin-bottom: 16px; text-align: left;">
                <h4 style="margin: 0 0 12px 0; font-size: 14px;">🌍 Beziehungen</h4>
                ${relSummary}
            </div>
            
            <details style="background: var(--bg-input); padding: 12px; border-radius: 12px; text-align: left;">
                <summary style="cursor: pointer; font-weight: 600;">📜 Chronik</summary>
                <div style="margin-top: 12px;">${historyHTML}</div>
            </details>
        </div>
        
        <div style="display: flex; gap: 10px; margin-top: 12px;">
            <button class="next-btn" onclick="startDynamicSimulator()" style="flex: 1; background: var(--green);">🔄 Nochmal</button>
            <button class="next-btn" onclick="resetSimulator()" style="flex: 1;">↩️ Zurück</button>
        </div>
    `;
    
    addXP(50 + Math.floor(score / 2));
}
