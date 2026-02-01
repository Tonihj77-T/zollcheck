// === INTERAKTIVE HANDELSKARTE ===

// Länder-Daten mit Koordinaten (vereinfacht für SVG-Positionierung)
const mapCountries = {
    germany: {
        name: "Deutschland",
        flag: "🇩🇪",
        x: 51, y: 28,
        exports: { total: 1547, top: ["Autos", "Maschinen", "Chemie"] },
        imports: { total: 1371, top: ["Öl", "Gas", "Elektronik"] },
        color: "#1E3A5F"
    },
    usa: {
        name: "USA",
        flag: "🇺🇸",
        x: 22, y: 35,
        exports: { total: 2100, top: ["Tech", "Flugzeuge", "Pharma"] },
        imports: { total: 3200, top: ["Elektronik", "Autos", "Öl"] },
        color: "#3182CE"
    },
    china: {
        name: "China",
        flag: "🇨🇳",
        x: 78, y: 38,
        exports: { total: 3500, top: ["Elektronik", "Maschinen", "Textilien"] },
        imports: { total: 2700, top: ["Chips", "Öl", "Erze"] },
        color: "#E53E3E"
    },
    japan: {
        name: "Japan",
        flag: "🇯🇵",
        x: 88, y: 38,
        exports: { total: 756, top: ["Autos", "Elektronik", "Maschinen"] },
        imports: { total: 897, top: ["Öl", "Gas", "Rohstoffe"] },
        color: "#805AD5"
    },
    uk: {
        name: "Großbritannien",
        flag: "🇬🇧",
        x: 47, y: 26,
        exports: { total: 468, top: ["Finanzen", "Pharma", "Autos"] },
        imports: { total: 689, top: ["Autos", "Maschinen", "Elektronik"] },
        color: "#2C5282"
    },
    france: {
        name: "Frankreich",
        flag: "🇫🇷",
        x: 48, y: 32,
        exports: { total: 617, top: ["Flugzeuge", "Pharma", "Wein"] },
        imports: { total: 714, top: ["Öl", "Autos", "Elektronik"] },
        color: "#2B6CB0"
    },
    brazil: {
        name: "Brasilien",
        flag: "🇧🇷",
        x: 32, y: 62,
        exports: { total: 334, top: ["Soja", "Eisenerz", "Öl"] },
        imports: { total: 251, top: ["Maschinen", "Elektronik", "Chemie"] },
        color: "#38A169"
    },
    india: {
        name: "Indien",
        flag: "🇮🇳",
        x: 72, y: 45,
        exports: { total: 453, top: ["IT-Services", "Pharma", "Textilien"] },
        imports: { total: 617, top: ["Öl", "Gold", "Elektronik"] },
        color: "#DD6B20"
    },
    southkorea: {
        name: "Südkorea",
        flag: "🇰🇷",
        x: 85, y: 36,
        exports: { total: 644, top: ["Halbleiter", "Autos", "Schiffe"] },
        imports: { total: 632, top: ["Öl", "Gas", "Rohstoffe"] },
        color: "#319795"
    },
    mexico: {
        name: "Mexiko",
        flag: "🇲🇽",
        x: 18, y: 45,
        exports: { total: 494, top: ["Autos", "Elektronik", "Öl"] },
        imports: { total: 505, top: ["Elektronik", "Maschinen", "Kunststoff"] },
        color: "#C53030"
    }
};

// Handelsbeziehungen Deutschland
const tradeFlows = [
    { from: "germany", to: "usa", volume: 253, exports: 157, imports: 96, tariff: 15, trend: "↓" },
    { from: "germany", to: "china", volume: 298, exports: 107, imports: 191, tariff: 8, trend: "→" },
    { from: "germany", to: "france", volume: 172, exports: 102, imports: 70, tariff: 0, trend: "↑" },
    { from: "germany", to: "uk", volume: 134, exports: 89, imports: 45, tariff: 0, trend: "→" },
    { from: "germany", to: "japan", volume: 45, exports: 23, imports: 22, tariff: 5, trend: "↑" },
    { from: "germany", to: "southkorea", volume: 28, exports: 14, imports: 14, tariff: 0, trend: "↑" },
    { from: "germany", to: "brazil", volume: 21, exports: 12, imports: 9, tariff: 12, trend: "→" },
    { from: "germany", to: "india", volume: 24, exports: 15, imports: 9, tariff: 10, trend: "↑" },
    { from: "germany", to: "mexico", volume: 18, exports: 11, imports: 7, tariff: 0, trend: "↑" },
    // Andere wichtige globale Handelsströme
    { from: "usa", to: "china", volume: 758, exports: 151, imports: 607, tariff: 25, trend: "↓", highlight: true },
    { from: "china", to: "japan", volume: 318, exports: 165, imports: 153, tariff: 5, trend: "→" },
    { from: "usa", to: "mexico", volume: 614, exports: 276, imports: 338, tariff: 0, trend: "↑" },
];

// Zeitleiste Ereignisse
const timelineEvents = [
    { year: 2018, event: "USA führt Stahl-Zölle ein", impact: "EU erhebt Vergeltungszölle" },
    { year: 2019, event: "US-China Handelskrieg eskaliert", impact: "25% Zölle auf $250 Mrd. Waren" },
    { year: 2020, event: "Phase-1 Deal USA-China", impact: "Teilweise Entspannung" },
    { year: 2021, event: "Lieferketten-Krise", impact: "Chip-Mangel weltweit" },
    { year: 2022, event: "Russland-Sanktionen", impact: "Energiepreise explodieren" },
    { year: 2023, event: "EU Chips Act", impact: "€43 Mrd. für Halbleiter" },
    { year: 2024, event: "Trump gewinnt Wahl", impact: "Neue Zoll-Ankündigungen" },
    { year: 2025, event: "USA erhöht Zölle auf EU", impact: "Deutsche Exporte -9,4%" },
    { year: 2026, event: "Grönland-Krise", impact: "Weitere Zolldrohungen" }
];

let selectedCountry = null;
let showAllFlows = false;
let currentYear = 2026;

function initMap() {
    renderMap();
}

function renderMap() {
    const container = document.getElementById('map-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="map-controls">
            <button class="map-btn ${!showAllFlows ? 'active' : ''}" onclick="toggleFlows(false)">🇩🇪 Deutschland-Fokus</button>
            <button class="map-btn ${showAllFlows ? 'active' : ''}" onclick="toggleFlows(true)">🌍 Alle Handelsströme</button>
        </div>
        
        <div class="map-svg-container">
            <svg viewBox="0 0 100 70" class="world-map">
                <!-- Vereinfachte Weltkarte Hintergrund -->
                <rect x="0" y="0" width="100" height="70" fill="#E8F4FD"/>
                
                <!-- Kontinente (vereinfacht) -->
                <ellipse cx="50" cy="35" rx="48" ry="32" fill="#E2E8F0" opacity="0.5"/>
                
                <!-- Handelsströme -->
                <g id="trade-flows">
                    ${renderTradeFlows()}
                </g>
                
                <!-- Länder-Punkte -->
                <g id="country-dots">
                    ${renderCountryDots()}
                </g>
            </svg>
            
            <!-- Info-Overlay -->
            <div id="country-info" class="country-info hidden">
                <!-- Wird dynamisch gefüllt -->
            </div>
        </div>
        
        <!-- Timeline -->
        <div class="map-timeline">
            <div class="timeline-header">
                <span>📅 Zeitleiste</span>
                <span class="timeline-year">${currentYear}</span>
            </div>
            <input type="range" min="2018" max="2026" value="${currentYear}" 
                   class="timeline-slider" onchange="updateTimeline(this.value)">
            <div class="timeline-event" id="timeline-event">
                ${getTimelineEvent(currentYear)}
            </div>
        </div>
        
        <!-- Legende -->
        <div class="map-legend">
            <div class="legend-item">
                <span class="legend-line thick"></span>
                <span>Hohes Handelsvolumen</span>
            </div>
            <div class="legend-item">
                <span class="legend-line thin"></span>
                <span>Niedriges Handelsvolumen</span>
            </div>
            <div class="legend-item">
                <span class="legend-dot"></span>
                <span>Land (antippen für Details)</span>
            </div>
        </div>
    `;
}

function renderTradeFlows() {
    const flows = showAllFlows 
        ? tradeFlows 
        : tradeFlows.filter(f => f.from === 'germany' || f.to === 'germany');
    
    return flows.map(flow => {
        const from = mapCountries[flow.from];
        const to = mapCountries[flow.to];
        if (!from || !to) return '';
        
        const thickness = Math.max(0.3, Math.min(2, flow.volume / 200));
        const color = flow.tariff > 10 ? '#FF6B6B' : flow.tariff > 0 ? '#ECC94B' : '#4ECDC4';
        const opacity = flow.highlight ? 0.8 : 0.5;
        
        // Bezier-Kurve für schönere Linien
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2 - 5;
        
        return `
            <path 
                d="M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}"
                stroke="${color}" 
                stroke-width="${thickness}" 
                fill="none" 
                opacity="${opacity}"
                class="trade-flow"
                onclick="showFlowInfo('${flow.from}', '${flow.to}')"
            />
        `;
    }).join('');
}

function renderCountryDots() {
    return Object.entries(mapCountries).map(([id, country]) => {
        const isGermany = id === 'germany';
        const radius = isGermany ? 2.5 : 1.8;
        const isSelected = selectedCountry === id;
        
        return `
            <g class="country-dot" onclick="selectCountry('${id}')">
                <circle 
                    cx="${country.x}" 
                    cy="${country.y}" 
                    r="${radius}" 
                    fill="${country.color}"
                    stroke="${isSelected ? '#FFD700' : 'white'}"
                    stroke-width="${isSelected ? 0.5 : 0.3}"
                    class="country-circle"
                />
                <text 
                    x="${country.x}" 
                    y="${country.y - 3}" 
                    font-size="2.5" 
                    text-anchor="middle"
                    class="country-label"
                >${country.flag}</text>
            </g>
        `;
    }).join('');
}

function selectCountry(countryId) {
    selectedCountry = countryId;
    const country = mapCountries[countryId];
    const info = document.getElementById('country-info');
    
    if (!country) {
        info.classList.add('hidden');
        return;
    }
    
    // Finde Handelsbeziehungen
    const flows = tradeFlows.filter(f => 
        (f.from === countryId || f.to === countryId) && 
        (f.from === 'germany' || f.to === 'germany')
    );
    
    const flowsHTML = flows.map(f => {
        const partner = f.from === countryId ? 'germany' : countryId;
        const isExport = f.from === 'germany';
        return `
            <div class="flow-item">
                <span>${isExport ? '📤' : '📥'} ${isExport ? 'Export' : 'Import'}: ${isExport ? f.exports : f.imports} Mrd. €</span>
                <span class="tariff-badge ${f.tariff > 10 ? 'high' : f.tariff > 0 ? 'medium' : 'low'}">
                    ${f.tariff}% Zoll
                </span>
            </div>
        `;
    }).join('') || '<div style="color: #718096; font-size: 12px;">Kein direkter Handel mit Deutschland</div>';
    
    info.innerHTML = `
        <div class="info-header">
            <span class="info-flag">${country.flag}</span>
            <span class="info-name">${country.name}</span>
            <button class="info-close" onclick="closeCountryInfo()">×</button>
        </div>
        <div class="info-body">
            <div class="info-stat">
                <span class="stat-label">Exporte weltweit</span>
                <span class="stat-value">${country.exports.total} Mrd. €</span>
            </div>
            <div class="info-stat">
                <span class="stat-label">Importe weltweit</span>
                <span class="stat-value">${country.imports.total} Mrd. €</span>
            </div>
            <div class="info-section">
                <span class="section-label">Top-Exporte:</span>
                <span class="section-value">${country.exports.top.join(', ')}</span>
            </div>
            <div class="info-section">
                <span class="section-label">🇩🇪 Handel mit Deutschland:</span>
                ${flowsHTML}
            </div>
        </div>
    `;
    
    info.classList.remove('hidden');
    renderMap(); // Re-render um Selektion zu zeigen
}

function closeCountryInfo() {
    selectedCountry = null;
    document.getElementById('country-info').classList.add('hidden');
    renderMap();
}

function showFlowInfo(fromId, toId) {
    const flow = tradeFlows.find(f => 
        (f.from === fromId && f.to === toId) || 
        (f.from === toId && f.to === fromId)
    );
    if (!flow) return;
    
    const from = mapCountries[flow.from];
    const to = mapCountries[flow.to];
    
    const info = document.getElementById('country-info');
    info.innerHTML = `
        <div class="info-header">
            <span>${from.flag} → ${to.flag}</span>
            <button class="info-close" onclick="closeCountryInfo()">×</button>
        </div>
        <div class="info-body">
            <div class="info-stat">
                <span class="stat-label">Handelsvolumen</span>
                <span class="stat-value">${flow.volume} Mrd. €</span>
            </div>
            <div class="info-stat">
                <span class="stat-label">${from.name} → ${to.name}</span>
                <span class="stat-value">${flow.exports} Mrd. €</span>
            </div>
            <div class="info-stat">
                <span class="stat-label">${to.name} → ${from.name}</span>
                <span class="stat-value">${flow.imports} Mrd. €</span>
            </div>
            <div class="info-stat">
                <span class="stat-label">Zollsatz</span>
                <span class="stat-value tariff-badge ${flow.tariff > 10 ? 'high' : flow.tariff > 0 ? 'medium' : 'low'}">${flow.tariff}%</span>
            </div>
            <div class="info-stat">
                <span class="stat-label">Trend</span>
                <span class="stat-value">${flow.trend === '↑' ? '📈 Wachsend' : flow.trend === '↓' ? '📉 Rückläufig' : '➡️ Stabil'}</span>
            </div>
        </div>
    `;
    info.classList.remove('hidden');
}

function toggleFlows(showAll) {
    showAllFlows = showAll;
    renderMap();
}

function updateTimeline(year) {
    currentYear = parseInt(year);
    document.querySelector('.timeline-year').textContent = year;
    document.getElementById('timeline-event').innerHTML = getTimelineEvent(currentYear);
}

function getTimelineEvent(year) {
    const event = timelineEvents.find(e => e.year === year);
    if (!event) return '<span style="color: #718096;">Keine besonderen Ereignisse</span>';
    return `
        <div class="event-title">${event.event}</div>
        <div class="event-impact">${event.impact}</div>
    `;
}

// Export
window.tradeMap = {
    init: initMap,
    render: renderMap
};
