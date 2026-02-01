// === HANDELSKARTE - Leaflet ===

const countries = {
    germany: { name: "Deutschland", flag: "🇩🇪", lat: 51.2, lng: 10.4, color: "#1E3A5F", main: true,
        exp: { total: 1547, top: ["Autos", "Maschinen", "Chemie"] }, imp: { total: 1371, top: ["Öl", "Gas", "Elektronik"] }},
    usa: { name: "USA", flag: "🇺🇸", lat: 39.8, lng: -98.6, color: "#3182CE",
        exp: { total: 2100, top: ["Tech", "Flugzeuge", "Pharma"] }, imp: { total: 3200, top: ["Elektronik", "Autos"] }},
    china: { name: "China", flag: "🇨🇳", lat: 35.9, lng: 104.2, color: "#E53E3E",
        exp: { total: 3500, top: ["Elektronik", "Maschinen"] }, imp: { total: 2700, top: ["Chips", "Öl"] }},
    japan: { name: "Japan", flag: "🇯🇵", lat: 36.2, lng: 138.3, color: "#805AD5",
        exp: { total: 756, top: ["Autos", "Elektronik"] }, imp: { total: 897, top: ["Öl", "Gas"] }},
    uk: { name: "UK", flag: "🇬🇧", lat: 54.0, lng: -2.0, color: "#2C5282",
        exp: { total: 468, top: ["Finanzen", "Pharma"] }, imp: { total: 689, top: ["Autos", "Maschinen"] }},
    france: { name: "Frankreich", flag: "🇫🇷", lat: 46.6, lng: 2.3, color: "#2B6CB0",
        exp: { total: 617, top: ["Flugzeuge", "Wein"] }, imp: { total: 714, top: ["Öl", "Autos"] }},
    brazil: { name: "Brasilien", flag: "🇧🇷", lat: -14.2, lng: -51.9, color: "#38A169",
        exp: { total: 334, top: ["Soja", "Eisenerz"] }, imp: { total: 251, top: ["Maschinen", "Chemie"] }},
    india: { name: "Indien", flag: "🇮🇳", lat: 20.6, lng: 79.0, color: "#DD6B20",
        exp: { total: 453, top: ["IT", "Pharma"] }, imp: { total: 617, top: ["Öl", "Gold"] }},
    southkorea: { name: "Südkorea", flag: "🇰🇷", lat: 36.5, lng: 128.0, color: "#319795",
        exp: { total: 644, top: ["Halbleiter", "Autos"] }, imp: { total: 632, top: ["Öl", "Gas"] }},
    mexico: { name: "Mexiko", flag: "🇲🇽", lat: 23.6, lng: -102.6, color: "#C53030",
        exp: { total: 494, top: ["Autos", "Elektronik"] }, imp: { total: 505, top: ["Maschinen"] }}
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
    { y: 2018, t: "Stahl-Zölle", d: "USA führt 25% ein" },
    { y: 2019, t: "Handelskrieg", d: "US-China eskaliert" },
    { y: 2020, t: "Phase-1", d: "Entspannung" },
    { y: 2021, t: "Chip-Krise", d: "Lieferketten" },
    { y: 2022, t: "Energie", d: "Sanktionen" },
    { y: 2023, t: "Chips Act", d: "€43 Mrd" },
    { y: 2024, t: "Trump 2.0", d: "Neue Zölle" },
    { y: 2025, t: "EU-Zölle", d: "-9% Export" },
    { y: 2026, t: "Krieg 2.0", d: "Eskalation" }
];

let map, markers = [], lines = [];
let state = { global: false, year: 2026, selected: null };

function initMap() {
    const c = document.getElementById('map-container');
    if (!c) return;

    c.innerHTML = `
        <div class="lmap-wrap">
            <div class="lmap-btns">
                <button class="lmap-btn on" id="lbtn-de">🇩🇪 Deutschland</button>
                <button class="lmap-btn" id="lbtn-gl">🌍 Global</button>
            </div>
            <div id="lmap"></div>
            <div id="lmap-info" class="lmap-info hidden"></div>
            <div class="lmap-tl">
                <div class="ltl-dots">${timeline.map(t => `<span class="ltl-dot${t.y === state.year ? ' on' : ''}" data-y="${t.y}"></span>`).join('')}</div>
                <div class="ltl-txt"><b>${state.year}</b> — ${timeline.find(t => t.y === state.year)?.t}</div>
            </div>
            <div class="lmap-leg"><span>🟢 0%</span><span>🟡 1-15%</span><span>🔴 >15%</span></div>
        </div>
    `;

    // Init Leaflet
    if (typeof L === 'undefined') {
        document.getElementById('lmap').innerHTML = '<p style="padding:40px;text-align:center;color:#666">Karte lädt...</p>';
        return;
    }

    map = L.map('lmap', {
        center: [30, 10],
        zoom: 2,
        minZoom: 1,
        maxZoom: 6,
        zoomControl: true,
        attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);

    drawLines();
    drawMarkers();

    // Events
    document.getElementById('lbtn-de').onclick = () => { state.global = false; update(); };
    document.getElementById('lbtn-gl').onclick = () => { state.global = true; update(); };
    document.querySelectorAll('.ltl-dot').forEach(d => {
        d.onclick = () => {
            state.year = +d.dataset.y;
            document.querySelectorAll('.ltl-dot').forEach(x => x.classList.remove('on'));
            d.classList.add('on');
            document.querySelector('.ltl-txt').innerHTML = `<b>${state.year}</b> — ${timeline.find(t => t.y === state.year)?.t}`;
        };
    });
}

function update() {
    document.getElementById('lbtn-de').classList.toggle('on', !state.global);
    document.getElementById('lbtn-gl').classList.toggle('on', state.global);
    drawLines();
}

function drawLines() {
    lines.forEach(l => map.removeLayer(l));
    lines = [];

    const data = state.global ? trades : trades.filter(t => !t.global);

    data.forEach(t => {
        const f = countries[t.from], o = countries[t.to];
        if (!f || !o) return;

        const color = t.tariff > 15 ? '#FF6B6B' : t.tariff > 0 ? '#F6AD55' : '#48BB78';
        const weight = Math.max(2, Math.min(6, t.vol / 120));

        const line = L.polyline([[f.lat, f.lng], [o.lat, o.lng]], {
            color, weight, opacity: 0.7
        }).addTo(map);

        line.on('click', () => showTrade(t));
        lines.push(line);
    });
}

function drawMarkers() {
    Object.entries(countries).forEach(([id, c]) => {
        const size = c.main ? 36 : 28;
        const icon = L.divIcon({
            className: 'lmap-marker',
            html: `<div class="lm-dot${c.main ? ' main' : ''}" style="background:${c.color}">${c.flag}</div>`,
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });

        const m = L.marker([c.lat, c.lng], { icon }).addTo(map);
        m.on('click', () => showCountry(id, c));
        markers.push(m);
    });
}

function showCountry(id, c) {
    const t = trades.find(x => (x.from === id && x.to === 'germany') || (x.to === id && x.from === 'germany'));
    const info = document.getElementById('lmap-info');

    info.innerHTML = `
        <div class="li-head" style="background:${c.color}">${c.flag} <b>${c.name}</b> <span onclick="hideInfo()">✕</span></div>
        ${t ? `<div class="li-body">
            <div>🇩🇪→${c.flag} Export: <b>${t.from === 'germany' ? t.exp : t.imp} Mrd€</b></div>
            <div>${c.flag}→🇩🇪 Import: <b>${t.from === 'germany' ? t.imp : t.exp} Mrd€</b></div>
            <div>Zoll: <b style="color:${t.tariff > 15 ? '#E53E3E' : t.tariff > 0 ? '#DD6B20' : '#38A169'}">${t.tariff}%</b></div>
        </div>` : '<div class="li-body">Kein direkter DE-Handel</div>'}
        <div class="li-foot">Top: ${c.exp.top.join(', ')}</div>
    `;
    info.classList.remove('hidden');
    map.flyTo([c.lat, c.lng], 4, { duration: 0.5 });
}

function showTrade(t) {
    const f = countries[t.from], o = countries[t.to];
    const info = document.getElementById('lmap-info');

    info.innerHTML = `
        <div class="li-head" style="background:#1E3A5F">${f.flag}↔${o.flag} <b>Handel</b> <span onclick="hideInfo()">✕</span></div>
        <div class="li-body">
            <div>Volumen: <b>${t.vol} Mrd€</b></div>
            <div>Zoll: <b style="color:${t.tariff > 15 ? '#E53E3E' : t.tariff > 0 ? '#DD6B20' : '#38A169'}">${t.tariff}%</b></div>
        </div>
    `;
    info.classList.remove('hidden');
}

window.hideInfo = () => {
    document.getElementById('lmap-info').classList.add('hidden');
    map.flyTo([30, 10], 2, { duration: 0.5 });
};

window.tradeMap = { init: initMap };
