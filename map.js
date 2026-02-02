// === TRADE MAP - Debug Version ===

function initMap() {
    var el = document.getElementById("map-container");
    if (!el) return;
    
    el.innerHTML = '<div style="background:#1a1a2e;padding:20px;border-radius:12px;color:white;text-align:center;">' +
        '<h3 style="margin:0 0 15px 0;">🌍 Handelskarte</h3>' +
        '<div id="map-debug" style="color:#888;">Lade Karte...</div>' +
    '</div>';
    
    setTimeout(function() {
        var debug = document.getElementById("map-debug");
        if (debug) {
            debug.innerHTML = '<span style="color:#4ade80;">✓ JS funktioniert</span>';
            setTimeout(renderMap, 300);
        }
    }, 200);
}

function renderMap() {
    var el = document.getElementById("map-container");
    if (!el) return;
    
    var countries = {
        de: { name: "Deutschland", flag: "🇩🇪", x: 51, y: 38 },
        us: { name: "USA", flag: "🇺🇸", x: 20, y: 42 },
        cn: { name: "China", flag: "🇨🇳", x: 77, y: 44 },
        jp: { name: "Japan", flag: "🇯🇵", x: 86, y: 43 },
        gb: { name: "UK", flag: "🇬🇧", x: 48, y: 34 },
        fr: { name: "Frankreich", flag: "🇫🇷", x: 49, y: 40 },
        br: { name: "Brasilien", flag: "🇧🇷", x: 32, y: 62 },
        in: { name: "Indien", flag: "🇮🇳", x: 70, y: 50 }
    };
    
    var trades = [
        { to: "us", vol: 253, tariff: 15 },
        { to: "cn", vol: 298, tariff: 8 },
        { to: "gb", vol: 134, tariff: 0 },
        { to: "fr", vol: 172, tariff: 0 },
        { to: "jp", vol: 45, tariff: 5 },
        { to: "br", vol: 21, tariff: 12 },
        { to: "in", vol: 24, tariff: 10 }
    ];
    
    // Build SVG
    var de = countries.de;
    var lines = "";
    var markers = "";
    
    for (var i = 0; i < trades.length; i++) {
        var t = trades[i];
        var c = countries[t.to];
        if (!c) continue;
        var color = t.tariff > 10 ? "#ff4444" : t.tariff > 0 ? "#ffaa00" : "#44ff88";
        var mx = (de.x + c.x) / 2;
        var my = Math.min(de.y, c.y) - 6;
        lines += '<path d="M' + de.x + ',' + de.y + ' Q' + mx + ',' + my + ' ' + c.x + ',' + c.y + '" stroke="' + color + '" stroke-width="2" fill="none" opacity="0.7"/>';
    }
    
    var keys = ["de", "us", "cn", "jp", "gb", "fr", "br", "in"];
    for (var j = 0; j < keys.length; j++) {
        var k = keys[j];
        var co = countries[k];
        var isDE = k === "de";
        markers += '<circle cx="' + co.x + '" cy="' + co.y + '" r="' + (isDE ? 4 : 2.5) + '" fill="' + (isDE ? '#3b82f6' : 'white') + '" stroke="#000" stroke-width="0.5"/>';
        markers += '<text x="' + co.x + '" y="' + (co.y - 5) + '" font-size="5" text-anchor="middle">' + co.flag + '</text>';
    }
    
    el.innerHTML = '<div class="trademap">' +
        '<div class="tm-wrap">' +
            '<img src="https://tonihj77-t.github.io/zollcheck/world.jpg" class="tm-img" alt="Weltkarte">' +
            '<svg viewBox="0 0 100 70" class="tm-svg">' + lines + markers + '</svg>' +
        '</div>' +
        '<div class="tm-stats">' +
            '<div><b>7</b><span>Routen</span></div>' +
            '<div><b>947</b><span>Mrd €</span></div>' +
            '<div><b>7%</b><span>⌀ Zoll</span></div>' +
        '</div>' +
        '<div class="tm-leg">' +
            '<span><i style="background:#44ff88"></i>0%</span>' +
            '<span><i style="background:#ffaa00"></i>1-10%</span>' +
            '<span><i style="background:#ff4444"></i>>10%</span>' +
        '</div>' +
    '</div>';
}

window.tradeMap = { init: initMap };
document.addEventListener("DOMContentLoaded", function() { 
    setTimeout(initMap, 100); 
});
