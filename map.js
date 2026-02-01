// === HANDELSKARTE v5 - Bild + SVG Overlay ===

const mapCountries = {
    germany: { name: "Deutschland", flag: "🇩🇪", x: 51, y: 35, color: "#1E3A5F", isMain: true,
        exports: { total: 1547, top: ["Autos", "Maschinen", "Chemie"] },
        imports: { total: 1371, top: ["Öl", "Gas", "Elektronik"] }
    },
    usa: { name: "USA", flag: "🇺🇸", x: 18, y: 42, color: "#3182CE",
        exports: { total: 2100, top: ["Tech", "Flugzeuge", "Pharma"] },
        imports: { total: 3200, top: ["Elektronik", "Autos", "Öl"] }
    },
    china: { name: "China", flag: "🇨🇳", x: 77, y: 45, color: "#E53E3E",
        exports: { total: 3500, top: ["Elektronik", "Maschinen", "Textilien"] },
        imports: { total: 2700, top: ["Chips", "Öl", "Erze"] }
    },
    japan: { name: "Japan", flag: "🇯🇵", x: 87, y: 43, color: "#805AD5",
        exports: { total: 756, top: ["Autos", "Elektronik", "Maschinen"] },
        imports: { total: 897, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    uk: { name: "UK", flag: "🇬🇧", x: 46, y: 32, color: "#2C5282",
        exports: { total: 468, top: ["Finanzen", "Pharma", "Autos"] },
        imports: { total: 689, top: ["Autos", "Maschinen", "Elektronik"] }
    },
    france: { name: "Frankreich", flag: "🇫🇷", x: 47, y: 38, color: "#2B6CB0",
        exports: { total: 617, top: ["Flugzeuge", "Pharma", "Wein"] },
        imports: { total: 714, top: ["Öl", "Autos", "Elektronik"] }
    },
    brazil: { name: "Brasilien", flag: "🇧🇷", x: 28, y: 72, color: "#38A169",
        exports: { total: 334, top: ["Soja", "Eisenerz", "Öl"] },
        imports: { total: 251, top: ["Maschinen", "Elektronik", "Chemie"] }
    },
    india: { name: "Indien", flag: "🇮🇳", x: 70, y: 52, color: "#DD6B20",
        exports: { total: 453, top: ["IT-Services", "Pharma", "Textilien"] },
        imports: { total: 617, top: ["Öl", "Gold", "Elektronik"] }
    },
    southkorea: { name: "Südkorea", flag: "🇰🇷", x: 82, y: 43, color: "#319795",
        exports: { total: 644, top: ["Halbleiter", "Autos", "Schiffe"] },
        imports: { total: 632, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    mexico: { name: "Mexiko", flag: "🇲🇽", x: 13, y: 52, color: "#C53030",
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

// Weltkarten-Bild URL (Public Domain / Free)
const MAP_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Equirectangular-projection.jpg/1280px-Equirectangular-projection.jpg";

let mapState = {
    selected: null,
    showGlobal: false,
    year: 2026
};

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
                <button class="map-btn ${!mapState.showGlobal ? 'active' : ''}" id="btn-de">🇩🇪 Deutschland</button>
                <button class="map-btn ${mapState.showGlobal ? 'active' : ''}" id="btn-global">🌍 Global</button>
            </div>
            
            <div class="map-image-container">
                <img src="${MAP_IMAGE}" alt="Weltkarte" class="map-bg-image" crossorigin="anonymous">
                <svg viewBox="0 0 100 100" class="map-overlay" preserveAspectRatio="none">
                    <!-- Handelslinien -->
                    ${flows.map(f => {
                        const from = mapCountries[f.from];
                        const to = mapCountries[f.to];
                        if (!from || !to) return '';
                        
                        let color = '#4ECDC4';
                        if (f.tariff > 15) color = '#FF6B6B';
                        else if (f.tariff > 0) color = '#ECC94B';
                        
                        const thickness = Math.max(0.5, Math.min(2, f.volume / 200));
                        const midX = (from.x + to.x) / 2;
                        const midY = Math.min(from.y, to.y) - 5;
                        const highlighted = mapState.selected && (f.from === mapState.selected || f.to === mapState.selected);
                        
                        return `<path d="M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}" 
                                      stroke="${color}" stroke-width="${thickness}" fill="none" 
                                      opacity="${highlighted ? 1 : 0.6}" stroke-linecap="round"
                                      class="trade-line" data-from="${f.from}" data-to="${f.to}"/>`;
                    }).join('')}
                    
                    <!-- Länder-Marker -->
                    ${Object.entries(mapCountries).map(([id, c]) => {
                        const isSelected = mapState.selected === id;
                        const r = c.isMain ? 3 : 2.2;
                        return `
                            <g class="marker" data-id="${id}">
                                ${isSelected ? `<circle cx="${c.x}" cy="${c.y}" r="${r + 1.5}" fill="none" stroke="#FFD700" stroke-width="0.8"/>` : ''}
                                ${c.isMain ? `<circle cx="${c.x}" cy="${c.y}" r="${r + 2}" fill="none" stroke="${c.color}" stroke-width="0.3" opacity="0.5">
                                    <animate attributeName="r" values="${r+1};${r+4};${r+1}" dur="2s" repeatCount="indefinite"/>
                                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
                                </circle>` : ''}
                                <circle cx="${c.x}" cy="${c.y}" r="${r}" fill="${c.color}" stroke="white" stroke-width="0.5"/>
                                <text x="${c.x}" y="${c.y + 0.4}" font-size="${c.isMain ? 2.8 : 2.2}" text-anchor="middle" dominant-baseline="middle">${c.flag}</text>
                            </g>
                        `;
                    }).join('')}
                </svg>
                
                ${mapState.selected ? renderInfoPanel() : ''}
            </div>
            
            <div class="map-timeline">
                <div class="timeline-dots">
                    ${timelineEvents.map(e => `<button class="tl-dot ${e.year === mapState.year ? 'active' : ''}" data-year="${e.year}"></button>`).join('')}
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
    
    // Event Listeners
    document.getElementById('btn-de')?.addEventListener('click', () => {
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
    
    document.querySelectorAll('.marker').forEach(marker => {
        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = marker.dataset.id;
            mapState.selected = mapState.selected === id ? null : id;
            renderMap();
        });
    });
    
    document.querySelector('.map-image-container')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('map-bg-image') || e.target.classList.contains('map-overlay')) {
            mapState.selected = null;
            renderMap();
        }
    });
}

function renderInfoPanel() {
    const country = mapCountries[mapState.selected];
    if (!country) return '';
    
    const flow = tradeFlows.find(f => 
        (f.from === mapState.selected && f.to === 'germany') ||
        (f.to === mapState.selected && f.from === 'germany')
    );
    
    return `
        <div class="info-panel">
            <div class="info-header" style="background:${country.color}">
                <span class="info-flag">${country.flag}</span>
                <span class="info-name">${country.name}</span>
                <button class="info-close" onclick="window.closeMapPanel()">✕</button>
            </div>
            ${flow ? `
                <div class="info-body">
                    <div class="info-row"><span>🇩🇪→${country.flag}</span><strong>${flow.from === 'germany' ? flow.exports : flow.imports} Mrd €</strong></div>
                    <div class="info-row"><span>${country.flag}→🇩🇪</span><strong>${flow.from === 'germany' ? flow.imports : flow.exports} Mrd €</strong></div>
                    <div class="info-row"><span>Zoll</span><strong class="${flow.tariff > 15 ? 'red' : flow.tariff > 0 ? 'yellow' : 'green'}">${flow.tariff}%</strong></div>
                    <div class="info-row"><span>Trend</span><strong>${flow.trend === 'up' ? '📈' : flow.trend === 'down' ? '📉' : '➡️'}</strong></div>
                </div>
            ` : '<div class="info-body"><p style="text-align:center;color:#718096">Kein direkter DE-Handel</p></div>'}
            <div class="info-footer">Top: ${country.exports.top.join(', ')}</div>
        </div>
    `;
}

window.closeMapPanel = function() {
    mapState.selected = null;
    renderMap();
};

window.tradeMap = { init: initMap, render: renderMap };
