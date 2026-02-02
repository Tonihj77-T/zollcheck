// === TRADE MAP ===
// Koordinaten basierend auf Equirectangular Projection (2:1 ratio)
// X: 0-100 = -180° bis +180° Länge
// Y: 0-50 = 90°N bis 90°S Breite

var countries = {
    de: { name: "Deutschland", flag: "🇩🇪", x: 52.8, y: 21.5 },  // 10°E, 51°N
    us: { name: "USA", flag: "🇺🇸", x: 22, y: 28 },              // -100°W, 40°N
    cn: { name: "China", flag: "🇨🇳", x: 79, y: 30 },            // 105°E, 35°N
    jp: { name: "Japan", flag: "🇯🇵", x: 88.5, y: 29 },          // 138°E, 36°N
    gb: { name: "UK", flag: "🇬🇧", x: 50, y: 23 },               // 0°, 52°N
    fr: { name: "Frankreich", flag: "🇫🇷", x: 51, y: 25 },       // 2°E, 47°N
    br: { name: "Brasilien", flag: "🇧🇷", x: 35, y: 39 },        // -50°W, 10°S
    in: { name: "Indien", flag: "🇮🇳", x: 71.5, y: 33 },         // 78°E, 22°N
    kr: { name: "Südkorea", flag: "🇰🇷", x: 85.5, y: 29 },       // 127°E, 36°N
    mx: { name: "Mexiko", flag: "🇲🇽", x: 24.5, y: 32 }          // -100°W, 23°N
};

var trades = [
    { to: "us", vol: 253, exp: 157, imp: 96, tariff: 15 },
    { to: "cn", vol: 298, exp: 107, imp: 191, tariff: 8 },
    { to: "gb", vol: 134, exp: 89, imp: 45, tariff: 0 },
    { to: "fr", vol: 172, exp: 102, imp: 70, tariff: 0 },
    { to: "jp", vol: 45, exp: 23, imp: 22, tariff: 5 },
    { to: "kr", vol: 28, exp: 14, imp: 14, tariff: 0 },
    { to: "br", vol: 21, exp: 12, imp: 9, tariff: 12 },
    { to: "in", vol: 24, exp: 15, imp: 9, tariff: 10 },
    { to: "mx", vol: 18, exp: 11, imp: 7, tariff: 0 }
];

var selected = null;

function initMap() {
    var el = document.getElementById("map-container");
    if (!el) return;
    renderMap(el);
}

function renderMap(el) {
    var de = countries.de;
    var lines = "", dots = "", markers = "";
    
    // Trade lines from Germany
    for (var i = 0; i < trades.length; i++) {
        var t = trades[i];
        var c = countries[t.to];
        if (!c) continue;
        
        var color = t.tariff > 10 ? "#ff4444" : t.tariff > 0 ? "#ffaa00" : "#44ff88";
        var mx = (de.x + c.x) / 2;
        var my = Math.min(de.y, c.y) - 3;
        
        lines += '<path d="M' + de.x + ',' + de.y + ' Q' + mx + ',' + my + ' ' + c.x + ',' + c.y + '" stroke="' + color + '" stroke-width="1.5" fill="none" opacity="0.8" style="filter:drop-shadow(0 0 2px ' + color + ')"/>';
        
        dots += '<circle r="1" fill="white" opacity="0.9"><animateMotion dur="' + (2 + i * 0.15) + 's" repeatCount="indefinite" path="M' + de.x + ',' + de.y + ' Q' + mx + ',' + my + ' ' + c.x + ',' + c.y + '"/></circle>';
    }
    
    // Country markers
    var keys = Object.keys(countries);
    for (var j = 0; j < keys.length; j++) {
        var id = keys[j];
        var co = countries[id];
        var isDE = id === "de";
        var isSel = selected === id;
        var r = isDE ? 2.5 : 1.5;
        
        markers += '<g class="pin" data-id="' + id + '">';
        
        // Pulse for Germany
        if (isDE) {
            markers += '<circle cx="' + co.x + '" cy="' + co.y + '" r="4" fill="none" stroke="#3b82f6" opacity="0.5"><animate attributeName="r" values="2;6;2" dur="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite"/></circle>';
        }
        
        // Selection ring
        if (isSel) {
            markers += '<circle cx="' + co.x + '" cy="' + co.y + '" r="4" fill="none" stroke="#ffd700" stroke-width="1.5"/>';
        }
        
        // Dot
        markers += '<circle cx="' + co.x + '" cy="' + co.y + '" r="' + r + '" fill="' + (isDE ? '#3b82f6' : 'white') + '" stroke="rgba(0,0,0,0.5)" stroke-width="0.3"/>';
        
        // Flag
        markers += '<text x="' + co.x + '" y="' + (co.y - 3) + '" font-size="3.5" text-anchor="middle">' + co.flag + '</text>';
        
        markers += '</g>';
    }
    
    // Stats
    var totalVol = 0, totalTariff = 0;
    for (var k = 0; k < trades.length; k++) {
        totalVol += trades[k].vol;
        totalTariff += trades[k].tariff;
    }
    
    el.innerHTML = '<div class="trademap">' +
        '<div class="tm-wrap">' +
            '<img src="https://tonihj77-t.github.io/zollcheck/world.jpg" class="tm-img" alt="Weltkarte">' +
            '<svg viewBox="0 0 100 50" class="tm-svg" preserveAspectRatio="none">' +
                '<g class="lines">' + lines + '</g>' +
                '<g class="dots">' + dots + '</g>' +
                '<g class="markers">' + markers + '</g>' +
            '</svg>' +
            (selected ? buildPanel() : '') +
        '</div>' +
        '<div class="tm-stats">' +
            '<div><b>' + trades.length + '</b><span>Routen</span></div>' +
            '<div><b>' + totalVol + '</b><span>Mrd €</span></div>' +
            '<div><b>' + Math.round(totalTariff / trades.length) + '%</b><span>⌀ Zoll</span></div>' +
        '</div>' +
        '<div class="tm-leg">' +
            '<span><i style="background:#44ff88"></i>0%</span>' +
            '<span><i style="background:#ffaa00"></i>1-10%</span>' +
            '<span><i style="background:#ff4444"></i>>10%</span>' +
        '</div>' +
    '</div>';
    
    // Events
    var pins = el.querySelectorAll(".pin");
    for (var p = 0; p < pins.length; p++) {
        pins[p].onclick = function(e) {
            e.stopPropagation();
            var id = this.getAttribute("data-id");
            selected = (selected === id) ? null : id;
            renderMap(el);
        };
    }
    
    var wrap = el.querySelector(".tm-wrap");
    if (wrap) {
        wrap.onclick = function(e) {
            if (!e.target.closest(".pin") && !e.target.closest(".tm-panel")) {
                selected = null;
                renderMap(el);
            }
        };
    }
}

function buildPanel() {
    var c = countries[selected];
    if (!c) return "";
    
    var t = null;
    for (var i = 0; i < trades.length; i++) {
        if (trades[i].to === selected) { t = trades[i]; break; }
    }
    
    if (!t) {
        return '<div class="tm-panel"><div class="tp-head">' + c.flag + ' ' + c.name + '</div><div class="tp-body"><div class="tp-row" style="justify-content:center;opacity:0.6">Haupthandelspartner</div></div></div>';
    }
    
    var tc = t.tariff > 10 ? "r" : t.tariff > 0 ? "y" : "g";
    return '<div class="tm-panel">' +
        '<div class="tp-head">' + c.flag + ' ' + c.name + ' <span onclick="closePanel()">✕</span></div>' +
        '<div class="tp-body">' +
            '<div class="tp-row">Export 🇩🇪→ <b>' + t.exp + ' Mrd €</b></div>' +
            '<div class="tp-row">Import →🇩🇪 <b>' + t.imp + ' Mrd €</b></div>' +
            '<div class="tp-row">Zollsatz <b class="' + tc + '">' + t.tariff + '%</b></div>' +
        '</div>' +
    '</div>';
}

function closePanel() {
    selected = null;
    var el = document.getElementById("map-container");
    if (el) renderMap(el);
}

window.closePanel = closePanel;
window.tradeMap = { init: initMap };

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(initMap, 100);
});
