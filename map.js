// === HANDELSKARTE v6 - Responsive + Clean Design ===

// Koordinaten in Prozent (0-100) relativ zum Kartenbild
const mapCountries = {
    germany: { name: "Deutschland", flag: "🇩🇪", x: 50.5, y: 34, color: "#1E3A5F", isMain: true,
        exports: { total: 1547, top: ["Autos", "Maschinen", "Chemie"] },
        imports: { total: 1371, top: ["Öl", "Gas", "Elektronik"] }
    },
    usa: { name: "USA", flag: "🇺🇸", x: 20, y: 40, color: "#3182CE",
        exports: { total: 2100, top: ["Tech", "Flugzeuge", "Pharma"] },
        imports: { total: 3200, top: ["Elektronik", "Autos", "Öl"] }
    },
    china: { name: "China", flag: "🇨🇳", x: 78, y: 42, color: "#E53E3E",
        exports: { total: 3500, top: ["Elektronik", "Maschinen", "Textilien"] },
        imports: { total: 2700, top: ["Chips", "Öl", "Erze"] }
    },
    japan: { name: "Japan", flag: "🇯🇵", x: 88, y: 40, color: "#805AD5",
        exports: { total: 756, top: ["Autos", "Elektronik", "Maschinen"] },
        imports: { total: 897, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    uk: { name: "UK", flag: "🇬🇧", x: 46.5, y: 30, color: "#2C5282",
        exports: { total: 468, top: ["Finanzen", "Pharma", "Autos"] },
        imports: { total: 689, top: ["Autos", "Maschinen", "Elektronik"] }
    },
    france: { name: "Frankreich", flag: "🇫🇷", x: 48, y: 36, color: "#2B6CB0",
        exports: { total: 617, top: ["Flugzeuge", "Pharma", "Wein"] },
        imports: { total: 714, top: ["Öl", "Autos", "Elektronik"] }
    },
    brazil: { name: "Brasilien", flag: "🇧🇷", x: 30, y: 68, color: "#38A169",
        exports: { total: 334, top: ["Soja", "Eisenerz", "Öl"] },
        imports: { total: 251, top: ["Maschinen", "Elektronik", "Chemie"] }
    },
    india: { name: "Indien", flag: "🇮🇳", x: 72, y: 48, color: "#DD6B20",
        exports: { total: 453, top: ["IT-Services", "Pharma", "Textilien"] },
        imports: { total: 617, top: ["Öl", "Gold", "Elektronik"] }
    },
    southkorea: { name: "Südkorea", flag: "🇰🇷", x: 84, y: 40, color: "#319795",
        exports: { total: 644, top: ["Halbleiter", "Autos", "Schiffe"] },
        imports: { total: 632, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    mexico: { name: "Mexiko", flag: "🇲🇽", x: 15, y: 48, color: "#C53030",
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
    { year: 2018, title: "Stahl-Zölle", desc: "USA führt 25% ein" },
    { year: 2019, title: "Handelskrieg", desc: "US-China eskaliert" },
    { year: 2020, title: "Phase-1 Deal", desc: "Entspannung" },
    { year: 2021, title: "Chip-Krise", desc: "Lieferketten" },
    { year: 2022, title: "Energiekrise", desc: "Sanktionen" },
    { year: 2023, title: "Chips Act", desc: "€43 Mrd." },
    { year: 2024, title: "Trump 2.0", desc: "Neue Zölle" },
    { year: 2025, title: "EU-Zölle", desc: "Exporte -9%" },
    { year: 2026, title: "Krieg 2.0", desc: "Eskalation" }
];

let mapState = { selected: null, showGlobal: false, year: 2026 };

function initMap() { renderMap(); }

function renderMap() {
    const container = document.getElementById('map-container');
    if (!container) return;
    
    const flows = mapState.showGlobal ? tradeFlows : tradeFlows.filter(f => f.from === 'germany' || f.to === 'germany');
    const event = timelineEvents.find(e => e.year === mapState.year) || {};
    
    container.innerHTML = `
        <div class="tmap">
            <div class="tmap-btns">
                <button class="tmap-btn ${!mapState.showGlobal ? 'on' : ''}" id="btn-de">🇩🇪 Deutschland</button>
                <button class="tmap-btn ${mapState.showGlobal ? 'on' : ''}" id="btn-gl">🌍 Global</button>
            </div>
            
            <div class="tmap-box">
                <div class="tmap-markers">
                    ${flows.map(f => renderLine(f)).join('')}
                    ${Object.entries(mapCountries).map(([id, c]) => renderMarker(id, c)).join('')}
                </div>
                ${mapState.selected ? renderPanel() : ''}
            </div>
            
            <div class="tmap-tl">
                <div class="tl-track">
                    ${timelineEvents.map(e => `<button class="tl-d ${e.year === mapState.year ? 'on' : ''}" data-y="${e.year}"></button>`).join('')}
                </div>
                <div class="tl-info"><b>${mapState.year}</b> ${event.title} — ${event.desc}</div>
            </div>
            
            <div class="tmap-leg">
                <span>🟢 0%</span>
                <span>🟡 1-15%</span>
                <span>🔴 >15%</span>
            </div>
        </div>
    `;
    
    // Events
    document.getElementById('btn-de')?.addEventListener('click', () => { mapState.showGlobal = false; renderMap(); });
    document.getElementById('btn-gl')?.addEventListener('click', () => { mapState.showGlobal = true; renderMap(); });
    document.querySelectorAll('.tl-d').forEach(d => d.addEventListener('click', () => { mapState.year = +d.dataset.y; renderMap(); }));
    document.querySelectorAll('.tmap-m').forEach(m => m.addEventListener('click', e => { e.stopPropagation(); mapState.selected = mapState.selected === m.dataset.id ? null : m.dataset.id; renderMap(); }));
    document.querySelector('.tmap-box')?.addEventListener('click', () => { if(mapState.selected) { mapState.selected = null; renderMap(); }});
}

function renderLine(f) {
    const from = mapCountries[f.from], to = mapCountries[f.to];
    if (!from || !to) return '';
    const color = f.tariff > 15 ? '#FF6B6B' : f.tariff > 0 ? '#ECC94B' : '#4ECDC4';
    const w = Math.max(2, Math.min(5, f.volume / 150));
    const hi = mapState.selected && (f.from === mapState.selected || f.to === mapState.selected);
    return `<svg class="tmap-line" style="opacity:${hi ? 1 : 0.5}"><line x1="${from.x}%" y1="${from.y}%" x2="${to.x}%" y2="${to.y}%" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/></svg>`;
}

function renderMarker(id, c) {
    const sel = mapState.selected === id;
    return `<div class="tmap-m ${c.isMain ? 'main' : ''} ${sel ? 'sel' : ''}" data-id="${id}" style="left:${c.x}%;top:${c.y}%;--c:${c.color}"><span>${c.flag}</span></div>`;
}

function renderPanel() {
    const c = mapCountries[mapState.selected];
    if (!c) return '';
    const f = tradeFlows.find(x => (x.from === mapState.selected && x.to === 'germany') || (x.to === mapState.selected && x.from === 'germany'));
    return `
        <div class="tmap-panel">
            <div class="tp-head" style="background:${c.color}">${c.flag} <b>${c.name}</b> <button onclick="window._closePanel()">✕</button></div>
            ${f ? `<div class="tp-body">
                <div>🇩🇪→${c.flag} <b>${f.from==='germany'?f.exports:f.imports} Mrd€</b></div>
                <div>${c.flag}→🇩🇪 <b>${f.from==='germany'?f.imports:f.exports} Mrd€</b></div>
                <div>Zoll <b class="${f.tariff>15?'r':f.tariff>0?'y':'g'}">${f.tariff}%</b></div>
            </div>` : '<div class="tp-body" style="color:#888">Kein DE-Handel</div>'}
        </div>
    `;
}

window._closePanel = () => { mapState.selected = null; renderMap(); };
window.tradeMap = { init: initMap };
