// === TRADE MAP - Dark Modern Style ===

const countries = {
    germany: { name: "Deutschland", code: "DE", lat: 51.2, lng: 10.4, x: 51, y: 35 },
    usa: { name: "USA", code: "US", lat: 39.8, lng: -98.6, x: 20, y: 42 },
    china: { name: "China", code: "CN", lat: 35.9, lng: 104.2, x: 77, y: 44 },
    japan: { name: "Japan", code: "JP", lat: 36.2, lng: 138.3, x: 87, y: 42 },
    uk: { name: "UK", code: "GB", lat: 54.0, lng: -2.0, x: 47, y: 32 },
    france: { name: "Frankreich", code: "FR", lat: 46.6, lng: 2.3, x: 48, y: 37 },
    brazil: { name: "Brasilien", code: "BR", lat: -14.2, lng: -51.9, x: 30, y: 68 },
    india: { name: "Indien", code: "IN", lat: 20.6, lng: 79.0, x: 71, y: 50 },
    southkorea: { name: "Südkorea", code: "KR", lat: 36.5, lng: 128.0, x: 83, y: 42 },
    mexico: { name: "Mexiko", code: "MX", lat: 23.6, lng: -102.6, x: 14, y: 50 }
};

const trades = [
    { from: "germany", to: "usa", vol: 253, exp: 157, imp: 96, tariff: 15 },
    { from: "germany", to: "china", vol: 298, exp: 107, imp: 191, tariff: 8 },
    { from: "germany", to: "france", vol: 172, exp: 102, imp: 70, tariff: 0 },
    { from: "germany", to: "uk", vol: 134, exp: 89, imp: 45, tariff: 0 },
    { from: "germany", to: "japan", vol: 45, exp: 23, imp: 22, tariff: 5 },
    { from: "germany", to: "southkorea", vol: 28, exp: 14, imp: 14, tariff: 0 },
    { from: "germany", to: "brazil", vol: 21, exp: 12, imp: 9, tariff: 12 },
    { from: "germany", to: "india", vol: 24, exp: 15, imp: 9, tariff: 10 },
    { from: "germany", to: "mexico", vol: 18, exp: 11, imp: 7, tariff: 0 },
    { from: "usa", to: "china", vol: 758, exp: 151, imp: 607, tariff: 25, global: true },
    { from: "usa", to: "mexico", vol: 614, exp: 276, imp: 338, tariff: 0, global: true }
];

const timeline = [
    { y: 2018, t: "Stahl-Zölle", d: "USA: 25%" },
    { y: 2019, t: "Handelskrieg", d: "US-China" },
    { y: 2020, t: "Phase-1", d: "Deal" },
    { y: 2021, t: "Chip-Krise", d: "Global" },
    { y: 2022, t: "Energie", d: "Krise" },
    { y: 2023, t: "Chips Act", d: "€43Mrd" },
    { y: 2024, t: "Trump 2.0", d: "Zölle" },
    { y: 2025, t: "EU-Zölle", d: "-9%" },
    { y: 2026, t: "Eskalation", d: "2.0" }
];

let state = { global: false, year: 2026, selected: null };
let animationId = null;

// Simple world map SVG path (simplified continents)
const WORLD_PATH = `M 10,42 Q 15,38 20,40 L 28,36 Q 32,32 35,34 L 38,40 Q 35,48 30,52 L 22,55 Q 16,52 12,48 Z
M 28,58 Q 32,56 35,60 L 38,72 Q 35,80 30,82 L 25,78 Q 22,68 25,60 Z
M 44,30 Q 50,26 56,28 L 62,26 Q 68,28 70,32 L 68,38 Q 62,42 56,40 L 50,38 Q 46,34 44,30 Z
M 46,42 Q 52,40 58,44 L 64,50 Q 66,60 62,70 L 54,76 Q 46,72 44,64 L 44,54 Q 44,46 46,42 Z
M 62,28 Q 72,24 82,28 L 90,34 Q 92,44 88,52 L 80,56 Q 72,52 66,46 L 64,38 Q 62,32 62,28 Z
M 80,62 Q 86,60 90,64 L 92,72 Q 88,78 82,76 L 78,70 Q 78,64 80,62 Z`;

function initMap() {
    const container = document.getElementById('map-container');
    if (!container) return;
    
    render();
}

function render() {
    const container = document.getElementById('map-container');
    const activeFlows = state.global ? trades : trades.filter(t => !t.global);
    const ev = timeline.find(t => t.y === state.year) || {};
    
    container.innerHTML = `
        <div class="dmap">
            <div class="dmap-head">
                <div class="dmap-title">🌍 WELTHANDEL LIVE</div>
                <div class="dmap-toggle">
                    <button class="${!state.global ? 'on' : ''}" id="tbtn-de">🇩🇪 DE</button>
                    <button class="${state.global ? 'on' : ''}" id="tbtn-gl">🌐 Global</button>
                </div>
            </div>
            
            <div class="dmap-canvas">
                <svg viewBox="0 0 100 90" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="lineGrad0" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#10B981"/>
                            <stop offset="100%" style="stop-color:#34D399"/>
                        </linearGradient>
                        <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#F59E0B"/>
                            <stop offset="100%" style="stop-color:#FBBF24"/>
                        </linearGradient>
                        <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#EF4444"/>
                            <stop offset="100%" style="stop-color:#F87171"/>
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="1" result="blur"/>
                            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                    </defs>
                    
                    <!-- World map -->
                    <path d="${WORLD_PATH}" fill="#1F2937" stroke="#374151" stroke-width="0.3"/>
                    
                    <!-- Trade lines -->
                    <g class="trade-lines">
                        ${activeFlows.map((t, i) => renderLine(t, i)).join('')}
                    </g>
                    
                    <!-- Country markers -->
                    <g class="markers">
                        ${Object.entries(countries).map(([id, c]) => renderMarker(id, c)).join('')}
                    </g>
                </svg>
                
                ${state.selected ? renderPanel() : ''}
            </div>
            
            <div class="dmap-stats">
                ${renderStats(activeFlows)}
            </div>
            
            <div class="dmap-timeline">
                <div class="dtl-track">
                    ${timeline.map(t => `<button class="dtl-dot ${t.y === state.year ? 'on' : ''}" data-y="${t.y}"><span>${t.y}</span></button>`).join('')}
                </div>
                <div class="dtl-info">${ev.t}: ${ev.d}</div>
            </div>
            
            <div class="dmap-legend">
                <span><i style="background:#10B981"></i> 0% Zoll</span>
                <span><i style="background:#F59E0B"></i> 1-15%</span>
                <span><i style="background:#EF4444"></i> >15%</span>
            </div>
        </div>
    `;
    
    // Events
    document.getElementById('tbtn-de')?.addEventListener('click', () => { state.global = false; render(); });
    document.getElementById('tbtn-gl')?.addEventListener('click', () => { state.global = true; render(); });
    
    document.querySelectorAll('.dtl-dot').forEach(d => {
        d.addEventListener('click', () => { state.year = +d.dataset.y; render(); });
    });
    
    document.querySelectorAll('.dmap-marker').forEach(m => {
        m.addEventListener('click', e => {
            e.stopPropagation();
            state.selected = state.selected === m.dataset.id ? null : m.dataset.id;
            render();
        });
    });
    
    document.querySelector('.dmap-canvas')?.addEventListener('click', e => {
        if (e.target.closest('.dmap-marker') || e.target.closest('.dmap-panel')) return;
        state.selected = null;
        render();
    });
    
    startAnimation();
}

function renderLine(t, idx) {
    const f = countries[t.from], o = countries[t.to];
    if (!f || !o) return '';
    
    const grad = t.tariff > 15 ? 2 : t.tariff > 0 ? 1 : 0;
    const w = Math.max(0.4, Math.min(1.5, t.vol / 400));
    const hi = state.selected && (t.from === state.selected || t.to === state.selected);
    
    // Curved path
    const mx = (f.x + o.x) / 2;
    const my = Math.min(f.y, o.y) - 8 - Math.abs(f.x - o.x) / 10;
    
    return `
        <g class="trade-line ${hi ? 'highlight' : ''}" style="--delay: ${idx * 0.1}s">
            <path d="M ${f.x} ${f.y} Q ${mx} ${my} ${o.x} ${o.y}" 
                  fill="none" stroke="url(#lineGrad${grad})" stroke-width="${w}" 
                  opacity="${hi ? 1 : 0.6}" stroke-linecap="round" filter="${hi ? 'url(#glow)' : ''}"/>
            <circle r="0.8" fill="${['#10B981','#F59E0B','#EF4444'][grad]}">
                <animateMotion dur="${2 + idx * 0.3}s" repeatCount="indefinite" path="M ${f.x} ${f.y} Q ${mx} ${my} ${o.x} ${o.y}"/>
            </circle>
        </g>
    `;
}

function renderMarker(id, c) {
    const isDE = id === 'germany';
    const sel = state.selected === id;
    const r = isDE ? 2.5 : 1.8;
    
    return `
        <g class="dmap-marker ${isDE ? 'main' : ''} ${sel ? 'selected' : ''}" data-id="${id}">
            ${sel ? `<circle cx="${c.x}" cy="${c.y}" r="${r + 2}" fill="none" stroke="#FBBF24" stroke-width="0.5" opacity="0.8"/>` : ''}
            ${isDE ? `<circle cx="${c.x}" cy="${c.y}" r="${r + 1.5}" fill="none" stroke="#3B82F6" stroke-width="0.3" opacity="0.6">
                <animate attributeName="r" values="${r+1};${r+3};${r+1}" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
            </circle>` : ''}
            <circle cx="${c.x}" cy="${c.y}" r="${r}" fill="${isDE ? '#3B82F6' : '#6B7280'}" stroke="#1F2937" stroke-width="0.4"/>
            <text x="${c.x}" y="${c.y + 4.5}" font-size="2" fill="#9CA3AF" text-anchor="middle">${c.code}</text>
        </g>
    `;
}

function renderPanel() {
    const c = countries[state.selected];
    if (!c) return '';
    
    const t = trades.find(x => (x.from === state.selected && x.to === 'germany') || (x.to === state.selected && x.from === 'germany'));
    
    return `
        <div class="dmap-panel">
            <div class="dp-head">${c.name} <span onclick="window._closePanel()">✕</span></div>
            ${t ? `
                <div class="dp-row"><span>Export nach 🇩🇪</span><b>${t.from === 'germany' ? t.imp : t.exp} Mrd€</b></div>
                <div class="dp-row"><span>Import aus 🇩🇪</span><b>${t.from === 'germany' ? t.exp : t.imp} Mrd€</b></div>
                <div class="dp-row"><span>Zollsatz</span><b class="${t.tariff > 15 ? 'red' : t.tariff > 0 ? 'yellow' : 'green'}">${t.tariff}%</b></div>
            ` : '<div class="dp-row" style="justify-content:center;color:#6B7280">Kein DE-Handel</div>'}
        </div>
    `;
}

function renderStats(flows) {
    const totalVol = flows.reduce((s, t) => s + t.vol, 0);
    const avgTariff = Math.round(flows.reduce((s, t) => s + t.tariff, 0) / flows.length);
    
    return `
        <div class="dstat"><span>${flows.length}</span>Routen</div>
        <div class="dstat"><span>${totalVol}</span>Mrd € Vol.</div>
        <div class="dstat"><span>${avgTariff}%</span>⌀ Zoll</div>
    `;
}

function startAnimation() {
    // Animation is handled by CSS/SVG animateMotion
}

window._closePanel = () => { state.selected = null; render(); };
window.tradeMap = { init: initMap };
