// === INTERAKTIVE HANDELSKARTE v2 ===

// Länder-Daten mit besseren Koordinaten (Mercator-ähnlich, 0-100 skaliert)
const mapCountries = {
    germany: {
        name: "Deutschland",
        flag: "🇩🇪",
        x: 52, y: 35,
        exports: { total: 1547, top: ["Autos", "Maschinen", "Chemie"] },
        imports: { total: 1371, top: ["Öl", "Gas", "Elektronik"] },
        color: "#1E3A5F",
        isMain: true
    },
    usa: {
        name: "USA",
        flag: "🇺🇸",
        x: 22, y: 40,
        exports: { total: 2100, top: ["Tech", "Flugzeuge", "Pharma"] },
        imports: { total: 3200, top: ["Elektronik", "Autos", "Öl"] },
        color: "#3182CE"
    },
    china: {
        name: "China",
        flag: "🇨🇳",
        x: 78, y: 42,
        exports: { total: 3500, top: ["Elektronik", "Maschinen", "Textilien"] },
        imports: { total: 2700, top: ["Chips", "Öl", "Erze"] },
        color: "#E53E3E"
    },
    japan: {
        name: "Japan",
        flag: "🇯🇵",
        x: 88, y: 40,
        exports: { total: 756, top: ["Autos", "Elektronik", "Maschinen"] },
        imports: { total: 897, top: ["Öl", "Gas", "Rohstoffe"] },
        color: "#805AD5"
    },
    uk: {
        name: "UK",
        flag: "🇬🇧",
        x: 48, y: 33,
        exports: { total: 468, top: ["Finanzen", "Pharma", "Autos"] },
        imports: { total: 689, top: ["Autos", "Maschinen", "Elektronik"] },
        color: "#2C5282"
    },
    france: {
        name: "Frankreich",
        flag: "🇫🇷",
        x: 49, y: 38,
        exports: { total: 617, top: ["Flugzeuge", "Pharma", "Wein"] },
        imports: { total: 714, top: ["Öl", "Autos", "Elektronik"] },
        color: "#2B6CB0"
    },
    brazil: {
        name: "Brasilien",
        flag: "🇧🇷",
        x: 32, y: 68,
        exports: { total: 334, top: ["Soja", "Eisenerz", "Öl"] },
        imports: { total: 251, top: ["Maschinen", "Elektronik", "Chemie"] },
        color: "#38A169"
    },
    india: {
        name: "Indien",
        flag: "🇮🇳",
        x: 72, y: 50,
        exports: { total: 453, top: ["IT-Services", "Pharma", "Textilien"] },
        imports: { total: 617, top: ["Öl", "Gold", "Elektronik"] },
        color: "#DD6B20"
    },
    southkorea: {
        name: "Südkorea",
        flag: "🇰🇷",
        x: 84, y: 40,
        exports: { total: 644, top: ["Halbleiter", "Autos", "Schiffe"] },
        imports: { total: 632, top: ["Öl", "Gas", "Rohstoffe"] },
        color: "#319795"
    },
    mexico: {
        name: "Mexiko",
        flag: "🇲🇽",
        x: 18, y: 50,
        exports: { total: 494, top: ["Autos", "Elektronik", "Öl"] },
        imports: { total: 505, top: ["Elektronik", "Maschinen", "Kunststoff"] },
        color: "#C53030"
    }
};

// Handelsbeziehungen
const tradeFlows = [
    { from: "germany", to: "usa", volume: 253, exports: 157, imports: 96, tariff: 15, trend: "down" },
    { from: "germany", to: "china", volume: 298, exports: 107, imports: 191, tariff: 8, trend: "stable" },
    { from: "germany", to: "france", volume: 172, exports: 102, imports: 70, tariff: 0, trend: "up" },
    { from: "germany", to: "uk", volume: 134, exports: 89, imports: 45, tariff: 0, trend: "stable" },
    { from: "germany", to: "japan", volume: 45, exports: 23, imports: 22, tariff: 5, trend: "up" },
    { from: "germany", to: "southkorea", volume: 28, exports: 14, imports: 14, tariff: 0, trend: "up" },
    { from: "germany", to: "brazil", volume: 21, exports: 12, imports: 9, tariff: 12, trend: "stable" },
    { from: "germany", to: "india", volume: 24, exports: 15, imports: 9, tariff: 10, trend: "up" },
    { from: "germany", to: "mexico", volume: 18, exports: 11, imports: 7, tariff: 0, trend: "up" },
    { from: "usa", to: "china", volume: 758, exports: 151, imports: 607, tariff: 25, trend: "down", isGlobal: true },
    { from: "usa", to: "mexico", volume: 614, exports: 276, imports: 338, tariff: 0, trend: "up", isGlobal: true },
    { from: "china", to: "japan", volume: 318, exports: 165, imports: 153, tariff: 5, trend: "stable", isGlobal: true },
];

// Zeitleiste
const timelineEvents = [
    { year: 2018, title: "Stahl-Zölle", desc: "USA führt 25% Stahl-Zölle ein" },
    { year: 2019, title: "Handelskrieg", desc: "US-China Konflikt eskaliert" },
    { year: 2020, title: "Phase-1 Deal", desc: "Teilweise Entspannung USA-China" },
    { year: 2021, title: "Chip-Krise", desc: "Globale Lieferketten-Probleme" },
    { year: 2022, title: "Energiekrise", desc: "Russland-Sanktionen, Gaspreise ↑" },
    { year: 2023, title: "EU Chips Act", desc: "€43 Mrd. Halbleiter-Investition" },
    { year: 2024, title: "Trump 2.0", desc: "Neue Zoll-Ankündigungen" },
    { year: 2025, title: "EU-Zölle", desc: "Deutsche Exporte in USA -9,4%" },
    { year: 2026, title: "Handelskrieg 2.0", desc: "Weitere Eskalation droht" }
];

let state = {
    selectedCountry: null,
    showGlobal: false,
    year: 2026,
    animationFrame: null
};

// Vereinfachte Weltkarten-Pfade (stark vereinfacht für Performance)
const worldMapPaths = `
    <!-- Nordamerika -->
    <path d="M5,25 Q15,20 25,22 L30,28 Q28,35 25,42 L22,50 Q18,52 15,48 L12,42 Q8,38 5,32 Z" fill="#E8EDF2" stroke="#CBD5E0" stroke-width="0.3"/>
    <!-- Südamerika -->
    <path d="M25,52 Q30,55 32,60 L35,72 Q33,78 28,80 L24,75 Q22,68 23,60 Z" fill="#E8EDF2" stroke="#CBD5E0" stroke-width="0.3"/>
    <!-- Europa -->
    <path d="M45,28 Q52,25 58,28 L60,35 Q58,40 54,42 L48,40 Q44,36 45,28 Z" fill="#E8EDF2" stroke="#CBD5E0" stroke-width="0.3"/>
    <!-- Afrika -->
    <path d="M48,45 Q55,44 60,48 L62,60 Q58,72 52,74 L46,70 Q44,60 48,45 Z" fill="#E8EDF2" stroke="#CBD5E0" stroke-width="0.3"/>
    <!-- Asien -->
    <path d="M60,25 Q75,22 90,28 L92,45 Q88,55 78,58 L68,55 Q62,48 60,38 Z" fill="#E8EDF2" stroke="#CBD5E0" stroke-width="0.3"/>
    <!-- Australien -->
    <path d="M82,65 Q88,62 92,66 L93,72 Q90,76 85,75 L82,70 Z" fill="#E8EDF2" stroke="#CBD5E0" stroke-width="0.3"/>
`;

function initMap() {
    renderMap();
}

function renderMap() {
    const container = document.getElementById('map-container');
    if (!container) return;
    
    const germanyFlows = tradeFlows.filter(f => f.from === 'germany' || f.to === 'germany');
    const globalFlows = tradeFlows.filter(f => f.isGlobal);
    const activeFlows = state.showGlobal ? [...germanyFlows, ...globalFlows] : germanyFlows;
    
    container.innerHTML = `
        <div class="trade-map-wrapper">
            <!-- Toggle -->
            <div class="map-toggle">
                <button class="toggle-btn ${!state.showGlobal ? 'active' : ''}" onclick="setMapView(false)">
                    🇩🇪 Deutschland
                </button>
                <button class="toggle-btn ${state.showGlobal ? 'active' : ''}" onclick="setMapView(true)">
                    🌍 Global
                </button>
            </div>
            
            <!-- Map SVG -->
            <div class="map-canvas">
                <svg viewBox="0 0 100 85" preserveAspectRatio="xMidYMid meet">
                    <!-- Ozean -->
                    <rect width="100" height="85" fill="#D4E9F7"/>
                    
                    <!-- Kontinente -->
                    ${worldMapPaths}
                    
                    <!-- Handelslinien -->
                    <g class="trade-lines">
                        ${renderTradeLines(activeFlows)}
                    </g>
                    
                    <!-- Länder-Marker -->
                    <g class="country-markers">
                        ${renderCountryMarkers()}
                    </g>
                </svg>
                
                <!-- Country Info Card -->
                ${state.selectedCountry ? renderCountryCard() : ''}
            </div>
            
            <!-- Timeline -->
            <div class="map-timeline-section">
                <div class="timeline-bar">
                    ${timelineEvents.map(e => `
                        <div class="timeline-dot ${e.year === state.year ? 'active' : ''}" 
                             onclick="setYear(${e.year})"
                             title="${e.year}: ${e.title}">
                        </div>
                    `).join('')}
                </div>
                <div class="timeline-labels">
                    <span>2018</span>
                    <span>2026</span>
                </div>
                <div class="timeline-info">
                    <span class="timeline-year">${state.year}</span>
                    <span class="timeline-title">${timelineEvents.find(e => e.year === state.year)?.title || ''}</span>
                    <span class="timeline-desc">${timelineEvents.find(e => e.year === state.year)?.desc || ''}</span>
                </div>
            </div>
            
            <!-- Legende -->
            <div class="map-legend-bar">
                <span class="legend-item"><span class="dot green"></span> Kein Zoll</span>
                <span class="legend-item"><span class="dot yellow"></span> Niedriger Zoll</span>
                <span class="legend-item"><span class="dot red"></span> Hoher Zoll</span>
            </div>
        </div>
    `;
}

function renderTradeLines(flows) {
    return flows.map(flow => {
        const from = mapCountries[flow.from];
        const to = mapCountries[flow.to];
        if (!from || !to) return '';
        
        // Farbe basierend auf Zoll
        let color = '#4ECDC4'; // grün = kein zoll
        if (flow.tariff > 15) color = '#FF6B6B'; // rot = hoch
        else if (flow.tariff > 0) color = '#ECC94B'; // gelb = niedrig
        
        // Dicke basierend auf Volumen
        const thickness = Math.max(0.5, Math.min(2.5, flow.volume / 150));
        
        // Kurve berechnen (Bogen nach oben)
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2 - Math.abs(from.x - to.x) / 6;
        
        // Pfeilspitze Position (am Ende der Kurve)
        const angle = Math.atan2(to.y - midY, to.x - midX);
        const arrowSize = 1.5;
        
        const isSelected = state.selectedCountry && 
            (flow.from === state.selectedCountry || flow.to === state.selectedCountry);
        
        return `
            <g class="trade-line ${isSelected ? 'highlighted' : ''}" 
               onclick="selectCountry('${flow.from === 'germany' ? flow.to : flow.from}')">
                <!-- Linie -->
                <path 
                    d="M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}"
                    stroke="${color}" 
                    stroke-width="${thickness}"
                    fill="none"
                    opacity="${isSelected ? 1 : 0.6}"
                    stroke-linecap="round"
                />
                <!-- Pfeil -->
                <polygon 
                    points="${to.x},${to.y} ${to.x - arrowSize * Math.cos(angle - 0.4)},${to.y - arrowSize * Math.sin(angle - 0.4)} ${to.x - arrowSize * Math.cos(angle + 0.4)},${to.y - arrowSize * Math.sin(angle + 0.4)}"
                    fill="${color}"
                    opacity="${isSelected ? 1 : 0.6}"
                />
            </g>
        `;
    }).join('');
}

function renderCountryMarkers() {
    return Object.entries(mapCountries).map(([id, country]) => {
        const isSelected = state.selectedCountry === id;
        const isMain = country.isMain;
        const size = isMain ? 5 : 3.5;
        
        return `
            <g class="country-marker ${isSelected ? 'selected' : ''}" 
               onclick="selectCountry('${id}')"
               style="cursor: pointer">
                <!-- Pulsing ring für Deutschland -->
                ${isMain ? `
                    <circle cx="${country.x}" cy="${country.y}" r="${size + 2}" 
                            fill="none" stroke="${country.color}" stroke-width="0.5" opacity="0.3">
                        <animate attributeName="r" values="${size + 1};${size + 4};${size + 1}" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                ` : ''}
                
                <!-- Selection ring -->
                ${isSelected ? `
                    <circle cx="${country.x}" cy="${country.y}" r="${size + 1.5}" 
                            fill="none" stroke="#FFD700" stroke-width="0.8"/>
                ` : ''}
                
                <!-- Main circle -->
                <circle cx="${country.x}" cy="${country.y}" r="${size}" 
                        fill="${country.color}" 
                        stroke="white" stroke-width="0.8"
                        filter="url(#shadow)"/>
                
                <!-- Flag -->
                <text x="${country.x}" y="${country.y + 0.8}" 
                      font-size="${isMain ? '4' : '3'}" 
                      text-anchor="middle" 
                      dominant-baseline="middle"
                      style="pointer-events: none">${country.flag}</text>
            </g>
        `;
    }).join('') + `
        <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" flood-opacity="0.3"/>
            </filter>
        </defs>
    `;
}

function renderCountryCard() {
    const country = mapCountries[state.selectedCountry];
    if (!country) return '';
    
    const flows = tradeFlows.filter(f => 
        (f.from === state.selectedCountry && f.to === 'germany') ||
        (f.to === state.selectedCountry && f.from === 'germany')
    );
    
    const flow = flows[0];
    
    return `
        <div class="country-card">
            <div class="card-header">
                <span class="card-flag">${country.flag}</span>
                <span class="card-name">${country.name}</span>
                <button class="card-close" onclick="selectCountry(null)">✕</button>
            </div>
            ${flow ? `
                <div class="card-stats">
                    <div class="stat-row">
                        <span class="stat-label">🇩🇪 → ${country.flag} Export</span>
                        <span class="stat-value">${flow.from === 'germany' ? flow.exports : flow.imports} Mrd. €</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">${country.flag} → 🇩🇪 Import</span>
                        <span class="stat-value">${flow.from === 'germany' ? flow.imports : flow.exports} Mrd. €</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Zollsatz</span>
                        <span class="stat-value ${flow.tariff > 15 ? 'red' : flow.tariff > 0 ? 'yellow' : 'green'}">
                            ${flow.tariff}%
                        </span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Trend</span>
                        <span class="stat-value">
                            ${flow.trend === 'up' ? '📈 Wachsend' : flow.trend === 'down' ? '📉 Rückgang' : '➡️ Stabil'}
                        </span>
                    </div>
                </div>
            ` : `
                <div class="card-stats">
                    <p style="color: #718096; font-size: 13px; text-align: center; padding: 12px;">
                        Kein direkter Handel mit Deutschland erfasst
                    </p>
                </div>
            `}
            <div class="card-products">
                <span class="products-label">Top-Exporte:</span>
                <span class="products-list">${country.exports.top.join(' • ')}</span>
            </div>
        </div>
    `;
}

function selectCountry(id) {
    state.selectedCountry = state.selectedCountry === id ? null : id;
    renderMap();
}

function setMapView(showGlobal) {
    state.showGlobal = showGlobal;
    renderMap();
}

function setYear(year) {
    state.year = year;
    renderMap();
}

// Export
window.tradeMap = {
    init: initMap,
    render: renderMap
};
