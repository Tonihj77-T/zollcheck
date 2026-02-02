// === TRADE MAP - Real World Map ===

var countries = {
    germany: { name: "Deutschland", code: "DE", x: 52, y: 35, main: true },
    usa: { name: "USA", code: "US", x: 22, y: 42 },
    china: { name: "China", code: "CN", x: 78, y: 44 },
    japan: { name: "Japan", code: "JP", x: 88, y: 42 },
    uk: { name: "UK", code: "GB", x: 48, y: 32 },
    france: { name: "Frankreich", code: "FR", x: 50, y: 38 },
    brazil: { name: "Brasilien", code: "BR", x: 32, y: 68 },
    india: { name: "Indien", code: "IN", x: 72, y: 50 },
    korea: { name: "Südkorea", code: "KR", x: 84, y: 43 },
    mexico: { name: "Mexiko", code: "MX", x: 17, y: 50 }
};

var trades = [
    { from: "germany", to: "usa", vol: 253, tariff: 15 },
    { from: "germany", to: "china", vol: 298, tariff: 8 },
    { from: "germany", to: "france", vol: 172, tariff: 0 },
    { from: "germany", to: "uk", vol: 134, tariff: 0 },
    { from: "germany", to: "japan", vol: 45, tariff: 5 },
    { from: "germany", to: "korea", vol: 28, tariff: 0 },
    { from: "germany", to: "brazil", vol: 21, tariff: 12 },
    { from: "germany", to: "india", vol: 24, tariff: 10 },
    { from: "germany", to: "mexico", vol: 18, tariff: 0 }
];

var mapState = { selected: null };

// Real world map image (NASA Blue Marble style, public domain)
var MAP_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/1280px-Blue_Marble_2002.png";

function initMap() {
    var container = document.getElementById("map-container");
    if (!container) return;
    renderTradeMap(container);
}

function renderTradeMap(container) {
    // Build SVG overlay content
    var lines = "";
    var dots = "";
    
    for (var i = 0; i < trades.length; i++) {
        var t = trades[i];
        var f = countries[t.from];
        var o = countries[t.to];
        if (!f || !o) continue;
        
        var color = t.tariff > 10 ? "#FF6B6B" : t.tariff > 0 ? "#FBBF24" : "#34D399";
        var mx = (f.x + o.x) / 2;
        var my = Math.min(f.y, o.y) - 6 - Math.abs(f.x - o.x) / 12;
        var w = Math.max(1, t.vol / 150);
        
        lines += '<path d="M' + f.x + ',' + f.y + ' Q' + mx + ',' + my + ' ' + o.x + ',' + o.y + '" fill="none" stroke="' + color + '" stroke-width="' + w + '" stroke-linecap="round" opacity="0.8" style="filter:drop-shadow(0 0 2px ' + color + ')"/>';
        
        dots += '<circle r="1.5" fill="' + color + '" style="filter:drop-shadow(0 0 4px ' + color + ')">' +
            '<animateMotion dur="' + (2.5 + i * 0.15) + 's" repeatCount="indefinite" path="M' + f.x + ',' + f.y + ' Q' + mx + ',' + my + ' ' + o.x + ',' + o.y + '"/>' +
        '</circle>';
    }
    
    // Build markers
    var markers = "";
    var keys = Object.keys(countries);
    for (var j = 0; j < keys.length; j++) {
        var id = keys[j];
        var c = countries[id];
        var isMain = c.main;
        var r = isMain ? 3.5 : 2;
        var fill = isMain ? "#3B82F6" : "#F1F5F9";
        var sel = mapState.selected === id;
        
        markers += '<g class="map-marker" data-id="' + id + '">';
        
        if (isMain) {
            markers += '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + (r + 4) + '" fill="none" stroke="' + fill + '" stroke-width="0.5" opacity="0.5">' +
                '<animate attributeName="r" values="' + (r+2) + ';' + (r+7) + ';' + (r+2) + '" dur="2s" repeatCount="indefinite"/>' +
                '<animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>' +
            '</circle>';
        }
        
        if (sel) {
            markers += '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + (r + 3) + '" fill="none" stroke="#FBBF24" stroke-width="1.5"/>';
        }
        
        markers += '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + r + '" fill="' + fill + '" stroke="rgba(0,0,0,0.5)" stroke-width="0.5" style="filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5))"/>';
        markers += '<text x="' + c.x + '" y="' + (c.y + r + 4) + '" font-size="2.8" fill="white" text-anchor="middle" font-weight="600" style="text-shadow:0 1px 2px rgba(0,0,0,0.8)">' + c.code + '</text>';
        markers += '</g>';
    }
    
    // Stats
    var totalVol = 0, totalTariff = 0;
    for (var k = 0; k < trades.length; k++) {
        totalVol += trades[k].vol;
        totalTariff += trades[k].tariff;
    }
    var avgTariff = Math.round(totalTariff / trades.length);
    
    container.innerHTML = 
        '<div class="world-map">' +
            '<div class="wm-title">🌍 Handelsrouten Deutschland</div>' +
            
            '<div class="wm-container">' +
                '<img src="' + MAP_URL + '" alt="Weltkarte" class="wm-image" crossorigin="anonymous">' +
                '<svg class="wm-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">' +
                    '<g class="wm-lines">' + lines + '</g>' +
                    '<g class="wm-dots">' + dots + '</g>' +
                    '<g class="wm-markers">' + markers + '</g>' +
                '</svg>' +
                (mapState.selected ? buildPanel() : '') +
            '</div>' +
            
            '<div class="wm-stats">' +
                '<div class="wm-stat"><span>' + trades.length + '</span>Routen</div>' +
                '<div class="wm-stat"><span>' + totalVol + '</span>Mrd €</div>' +
                '<div class="wm-stat"><span>' + avgTariff + '%</span>⌀ Zoll</div>' +
            '</div>' +
            
            '<div class="wm-legend">' +
                '<span><i style="background:#34D399"></i>0%</span>' +
                '<span><i style="background:#FBBF24"></i>1-10%</span>' +
                '<span><i style="background:#FF6B6B"></i>>10%</span>' +
            '</div>' +
        '</div>';
    
    // Events
    var markerEls = container.querySelectorAll(".map-marker");
    for (var m = 0; m < markerEls.length; m++) {
        markerEls[m].onclick = function(e) {
            e.stopPropagation();
            var id = this.getAttribute("data-id");
            mapState.selected = (mapState.selected === id) ? null : id;
            renderTradeMap(container);
        };
    }
    
    var mapEl = container.querySelector(".wm-container");
    if (mapEl) {
        mapEl.onclick = function(e) {
            if (!e.target.closest(".map-marker") && !e.target.closest(".wm-panel")) {
                mapState.selected = null;
                renderTradeMap(container);
            }
        };
    }
}

function buildPanel() {
    var c = countries[mapState.selected];
    if (!c) return "";
    
    var trade = null;
    for (var i = 0; i < trades.length; i++) {
        if (trades[i].to === mapState.selected || trades[i].from === mapState.selected) {
            trade = trades[i];
            break;
        }
    }
    
    var content = "";
    if (trade) {
        var tc = trade.tariff > 10 ? "red" : trade.tariff > 0 ? "yellow" : "green";
        content = '<div class="prow">Volumen <b>' + trade.vol + ' Mrd €</b></div>' +
                  '<div class="prow">Zoll <b class="' + tc + '">' + trade.tariff + '%</b></div>';
    } else {
        content = '<div class="prow" style="opacity:0.5">Keine Daten</div>';
    }
    
    return '<div class="wm-panel">' +
        '<div class="phead">' + c.name + ' <span onclick="closePanel()">✕</span></div>' +
        '<div class="pbody">' + content + '</div>' +
    '</div>';
}

function closePanel() {
    mapState.selected = null;
    var container = document.getElementById("map-container");
    if (container) renderTradeMap(container);
}

window.closePanel = closePanel;
window.tradeMap = { init: initMap };

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(initMap, 100);
});
