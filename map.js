// === HANDELSKARTE v3 - Mit echter Weltkarte ===

const mapCountries = {
    germany: { name: "Deutschland", flag: "🇩🇪", x: 51, y: 32, color: "#1E3A5F", isMain: true,
        exports: { total: 1547, top: ["Autos", "Maschinen", "Chemie"] },
        imports: { total: 1371, top: ["Öl", "Gas", "Elektronik"] }
    },
    usa: { name: "USA", flag: "🇺🇸", x: 21, y: 38, color: "#3182CE",
        exports: { total: 2100, top: ["Tech", "Flugzeuge", "Pharma"] },
        imports: { total: 3200, top: ["Elektronik", "Autos", "Öl"] }
    },
    china: { name: "China", flag: "🇨🇳", x: 77, y: 40, color: "#E53E3E",
        exports: { total: 3500, top: ["Elektronik", "Maschinen", "Textilien"] },
        imports: { total: 2700, top: ["Chips", "Öl", "Erze"] }
    },
    japan: { name: "Japan", flag: "🇯🇵", x: 86, y: 38, color: "#805AD5",
        exports: { total: 756, top: ["Autos", "Elektronik", "Maschinen"] },
        imports: { total: 897, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    uk: { name: "UK", flag: "🇬🇧", x: 47, y: 30, color: "#2C5282",
        exports: { total: 468, top: ["Finanzen", "Pharma", "Autos"] },
        imports: { total: 689, top: ["Autos", "Maschinen", "Elektronik"] }
    },
    france: { name: "Frankreich", flag: "🇫🇷", x: 48, y: 35, color: "#2B6CB0",
        exports: { total: 617, top: ["Flugzeuge", "Pharma", "Wein"] },
        imports: { total: 714, top: ["Öl", "Autos", "Elektronik"] }
    },
    brazil: { name: "Brasilien", flag: "🇧🇷", x: 30, y: 65, color: "#38A169",
        exports: { total: 334, top: ["Soja", "Eisenerz", "Öl"] },
        imports: { total: 251, top: ["Maschinen", "Elektronik", "Chemie"] }
    },
    india: { name: "Indien", flag: "🇮🇳", x: 70, y: 48, color: "#DD6B20",
        exports: { total: 453, top: ["IT-Services", "Pharma", "Textilien"] },
        imports: { total: 617, top: ["Öl", "Gold", "Elektronik"] }
    },
    southkorea: { name: "Südkorea", flag: "🇰🇷", x: 82, y: 38, color: "#319795",
        exports: { total: 644, top: ["Halbleiter", "Autos", "Schiffe"] },
        imports: { total: 632, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    mexico: { name: "Mexiko", flag: "🇲🇽", x: 16, y: 48, color: "#C53030",
        exports: { total: 494, top: ["Autos", "Elektronik", "Öl"] },
        imports: { total: 505, top: ["Elektronik", "Maschinen", "Kunststoff"] }
    }
};

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
];

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

// State
let mapState = {
    selected: null,
    showGlobal: false,
    year: 2026
};

// Echte Weltkarte SVG (vereinfacht aber realistisch)
const WORLD_MAP_SVG = `
<path fill="#E8EDF3" stroke="#CBD5E0" stroke-width="0.3" d="
M15,28 Q18,25 22,26 L28,24 Q32,22 35,24 L38,28 Q36,32 34,35 L30,38 Q26,42 22,45 L18,50 Q14,52 12,48 L10,42 Q8,36 10,32 Z
M25,52 Q28,50 32,52 L36,58 Q38,65 36,72 L32,78 Q28,80 24,76 L22,68 Q20,60 22,54 Z
M44,24 Q48,22 52,24 L56,22 Q60,20 64,22 L68,26 Q66,30 62,32 L58,30 Q54,32 50,34 L46,32 Q44,28 44,24 Z
M44,36 Q48,34 52,36 L58,38 Q62,42 64,48 L66,56 Q64,64 60,70 L54,74 Q48,72 44,66 L42,58 Q40,48 42,40 Z
M58,22 Q65,18 72,20 L80,22 Q88,26 92,32 L94,40 Q92,48 88,54 L82,58 Q76,56 70,52 L64,46 Q60,38 58,30 Z
M78,60 Q82,58 86,60 L90,64 Q92,70 90,74 L86,76 Q82,74 78,72 L76,66 Z
"/>`;

function initMap() {
    renderMap();
}

function renderMap() {
    const container = document.getElementById('map-container');
    if (!container) return;
    
    const flows = mapState.showGlobal 
        ? tradeFlows 
        : tradeFlows.filter(f => f.from === 'germany' || f.to === 'germany');
    
    const event = timelineEvents.find(e => e.year === mapState.year) || {};
    
    container.innerHTML = `
        <div class="map-wrapper">
            <div class="map-buttons">
                <button class="map-btn ${!mapState.showGlobal ? 'active' : ''}" id="btn-germany">🇩🇪 Deutschland</button>
                <button class="map-btn ${mapState.showGlobal ? 'active' : ''}" id="btn-global">🌍 Global</button>
            </div>
            
            <div class="map-container-inner">
                <svg viewBox="0 0 100 80" class="world-map-svg">
                    <!-- Ozean -->
                    <rect width="100" height="80" fill="#B8D4E8"/>
                    
                    <!-- Kontinente -->
                    ${WORLD_MAP_SVG}
                    
                    <!-- Handelslinien -->
                    ${flows.map(f => renderLine(f)).join('')}
                    
                    <!-- Länder-Punkte -->
                    ${Object.entries(mapCountries).map(([id, c]) => renderMarker(id, c)).join('')}
                </svg>
                
                ${mapState.selected ? renderInfoCard() : ''}
            </div>
            
            <div class="map-timeline">
                <div class="timeline-dots">
                    ${timelineEvents.map(e => `
                        <button class="tl-dot ${e.year === mapState.year ? 'active' : ''}" data-year="${e.year}"></button>
                    `).join('')}
                </div>
                <div class="timeline-labels"><span>2018</span><span>2026</span></div>
                <div class="timeline-event">
                    <strong>${mapState.year}: ${event.title || ''}</strong><br>
                    <span>${event.desc || ''}</span>
                </div>
            </div>
            
            <div class="map-legend">
                <span><span class="legend-dot green"></span> Kein Zoll</span>
                <span><span class="legend-dot yellow"></span> 1-15%</span>
                <span><span class="legend-dot red"></span> >15%</span>
            </div>
        </div>
    `;
    
    // Event listeners
    document.getElementById('btn-germany')?.addEventListener('click', () => {
        mapState.showGlobal = false;
        renderMap();
    });
    document.getElementById('btn-global')?.addEventListener('click', () => {
        mapState.showGlobal = true;
        renderMap();
    });
    
    document.querySelectorAll('.tl-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            mapState.year = parseInt(dot.dataset.year);
            renderMap();
        });
    });
    
    document.querySelectorAll('.country-marker').forEach(marker => {
        marker.addEventListener('click', () => {
            const id = marker.dataset.country;
            mapState.selected = mapState.selected === id ? null : id;
            renderMap();
        });
    });
    
    document.querySelector('.info-close')?.addEventListener('click', () => {
        mapState.selected = null;
        renderMap();
    });
}

function renderLine(flow) {
    const from = mapCountries[flow.from];
    const to = mapCountries[flow.to];
    if (!from || !to) return '';
    
    let color = '#4ECDC4';
    if (flow.tariff > 15) color = '#FF6B6B';
    else if (flow.tariff > 0) color = '#ECC94B';
    
    const thickness = Math.max(0.8, Math.min(2.5, flow.volume / 200));
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2 - Math.abs(from.x - to.x) / 8;
    
    const isHighlighted = mapState.selected && 
        (flow.from === mapState.selected || flow.to === mapState.selected);
    
    return `
        <path 
            d="M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}"
            stroke="${color}" 
            stroke-width="${thickness}"
            fill="none"
            opacity="${isHighlighted ? 1 : 0.5}"
            stroke-linecap="round"
            class="trade-path"
        />
    `;
}

function renderMarker(id, country) {
    const isSelected = mapState.selected === id;
    const isMain = country.isMain;
    const r = isMain ? 3.5 : 2.5;
    
    return `
        <g class="country-marker" data-country="${id}" style="cursor:pointer">
            ${isSelected ? `<circle cx="${country.x}" cy="${country.y}" r="${r + 2}" fill="none" stroke="#FFD700" stroke-width="1"/>` : ''}
            ${isMain ? `
                <circle cx="${country.x}" cy="${country.y}" r="${r + 3}" fill="none" stroke="${country.color}" stroke-width="0.5" opacity="0.4">
                    <animate attributeName="r" values="${r+2};${r+5};${r+2}" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
            ` : ''}
            <circle cx="${country.x}" cy="${country.y}" r="${r}" fill="${country.color}" stroke="white" stroke-width="0.8"/>
            <text x="${country.x}" y="${country.y + 0.5}" font-size="${isMain ? 3 : 2.5}" text-anchor="middle" dominant-baseline="middle">${country.flag}</text>
        </g>
    `;
}

function renderInfoCard() {
    const country = mapCountries[mapState.selected];
    if (!country) return '';
    
    const flow = tradeFlows.find(f => 
        (f.from === mapState.selected && f.to === 'germany') ||
        (f.to === mapState.selected && f.from === 'germany')
    );
    
    return `
        <div class="map-info-card">
            <div class="info-header">
                <span class="info-flag">${country.flag}</span>
                <span class="info-name">${country.name}</span>
                <button class="info-close">✕</button>
            </div>
            ${flow ? `
                <div class="info-stats">
                    <div class="info-row">
                        <span>🇩🇪→${country.flag} Export</span>
                        <span>${flow.from === 'germany' ? flow.exports : flow.imports} Mrd €</span>
                    </div>
                    <div class="info-row">
                        <span>${country.flag}→🇩🇪 Import</span>
                        <span>${flow.from === 'germany' ? flow.imports : flow.exports} Mrd €</span>
                    </div>
                    <div class="info-row">
                        <span>Zoll</span>
                        <span class="${flow.tariff > 15 ? 'red' : flow.tariff > 0 ? 'yellow' : 'green'}">${flow.tariff}%</span>
                    </div>
                    <div class="info-row">
                        <span>Trend</span>
                        <span>${flow.trend === 'up' ? '📈' : flow.trend === 'down' ? '📉' : '➡️'}</span>
                    </div>
                </div>
            ` : '<div class="info-stats"><p style="text-align:center;color:#718096;padding:12px">Kein direkter DE-Handel</p></div>'}
            <div class="info-products">Top: ${country.exports.top.join(', ')}</div>
        </div>
    `;
}

window.tradeMap = { init: initMap, render: renderMap };
