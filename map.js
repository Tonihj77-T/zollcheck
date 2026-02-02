// === TRADE MAP - Final Version ===

var countries = {
    germany: { name: "Deutschland", code: "DE", x: 51, y: 32, main: true },
    usa: { name: "USA", code: "US", x: 22, y: 38 },
    china: { name: "China", code: "CN", x: 76, y: 40 },
    japan: { name: "Japan", code: "JP", x: 86, y: 38 },
    uk: { name: "UK", code: "GB", x: 47, y: 28 },
    france: { name: "Frankreich", code: "FR", x: 48, y: 34 },
    brazil: { name: "Brasilien", code: "BR", x: 32, y: 62 },
    india: { name: "Indien", code: "IN", x: 70, y: 45 },
    korea: { name: "Südkorea", code: "KR", x: 82, y: 38 },
    mexico: { name: "Mexiko", code: "MX", x: 18, y: 45 }
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

function initMap() {
    var container = document.getElementById("map-container");
    if (!container) return;
    
    renderTradeMap(container);
}

function renderTradeMap(container) {
    // Build trade lines
    var lines = "";
    for (var i = 0; i < trades.length; i++) {
        var t = trades[i];
        var f = countries[t.from];
        var o = countries[t.to];
        if (!f || !o) continue;
        
        var color = t.tariff > 10 ? "#EF4444" : t.tariff > 0 ? "#F59E0B" : "#10B981";
        var mx = (f.x + o.x) / 2;
        var my = Math.min(f.y, o.y) - 8 - Math.abs(f.x - o.x) / 15;
        var width = Math.max(0.8, t.vol / 200);
        
        lines += '<path class="trade-line" d="M' + f.x + ',' + f.y + ' Q' + mx + ',' + my + ' ' + o.x + ',' + o.y + '" fill="none" stroke="' + color + '" stroke-width="' + width + '" stroke-linecap="round" opacity="0.7"/>';
        
        // Animated dot
        lines += '<circle class="trade-dot" r="1.2" fill="' + color + '">' +
            '<animateMotion dur="' + (3 + i * 0.2) + 's" repeatCount="indefinite" path="M' + f.x + ',' + f.y + ' Q' + mx + ',' + my + ' ' + o.x + ',' + o.y + '"/>' +
        '</circle>';
    }
    
    // Build markers
    var markers = "";
    var keys = Object.keys(countries);
    for (var j = 0; j < keys.length; j++) {
        var id = keys[j];
        var c = countries[id];
        var isMain = c.main;
        var r = isMain ? 4 : 2.5;
        var fill = isMain ? "#3B82F6" : "#64748B";
        var sel = mapState.selected === id;
        
        markers += '<g class="marker" data-id="' + id + '">';
        
        // Pulse for Germany
        if (isMain) {
            markers += '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + (r + 2) + '" fill="none" stroke="#3B82F6" stroke-width="0.5" opacity="0.4">' +
                '<animate attributeName="r" values="' + (r+1) + ';' + (r+6) + ';' + (r+1) + '" dur="2s" repeatCount="indefinite"/>' +
                '<animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>' +
            '</circle>';
        }
        
        // Selection ring
        if (sel) {
            markers += '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + (r + 2) + '" fill="none" stroke="#FBBF24" stroke-width="1"/>';
        }
        
        // Main dot
        markers += '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + r + '" fill="' + fill + '" stroke="#0F172A" stroke-width="0.8"/>';
        
        // Label
        markers += '<text x="' + c.x + '" y="' + (c.y + r + 4) + '" font-size="3" fill="#94A3B8" text-anchor="middle" font-weight="500">' + c.code + '</text>';
        
        markers += '</g>';
    }
    
    // Stats
    var totalVol = 0, totalTariff = 0;
    for (var k = 0; k < trades.length; k++) {
        totalVol += trades[k].vol;
        totalTariff += trades[k].tariff;
    }
    var avgTariff = Math.round(totalTariff / trades.length);
    
    // Build HTML
    container.innerHTML = 
        '<div class="trademap">' +
            '<div class="tm-header">' +
                '<div class="tm-title">🌍 Welthandel Deutschland</div>' +
            '</div>' +
            
            '<div class="tm-map">' +
                '<svg viewBox="0 0 100 75">' +
                    // Background
                    '<rect width="100" height="75" fill="#0F172A"/>' +
                    
                    // Continents (simplified)
                    '<path d="M12,32 Q20,28 28,30 L34,28 Q40,32 36,40 L28,46 Q18,48 14,42 Z" fill="#1E293B"/>' +  // North America
                    '<path d="M28,50 Q34,48 38,54 L40,66 Q36,72 30,70 L26,62 Q26,54 28,50 Z" fill="#1E293B"/>' +  // South America
                    '<path d="M44,24 Q52,20 58,24 L62,22 Q68,26 66,32 L60,36 Q52,38 48,34 Z" fill="#1E293B"/>' +  // Europe
                    '<path d="M46,40 Q54,38 62,44 L66,54 Q62,66 54,68 L46,62 Q44,50 46,40 Z" fill="#1E293B"/>' +  // Africa
                    '<path d="M62,24 Q74,20 86,26 L92,34 Q90,46 82,50 L72,46 Q64,38 64,30 Z" fill="#1E293B"/>' +  // Asia
                    '<path d="M80,56 Q86,54 90,58 L92,66 Q88,72 82,70 L78,64 Z" fill="#1E293B"/>' +  // Australia
                    
                    // Grid lines (subtle)
                    '<line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#1E293B" stroke-width="0.3" stroke-dasharray="2,2"/>' +
                    
                    // Trade lines
                    '<g class="lines">' + lines + '</g>' +
                    
                    // Markers
                    '<g class="markers">' + markers + '</g>' +
                '</svg>' +
                
                (mapState.selected ? buildPanel() : '') +
            '</div>' +
            
            '<div class="tm-stats">' +
                '<div class="tm-stat"><div class="stat-val">' + trades.length + '</div><div class="stat-lbl">Routen</div></div>' +
                '<div class="tm-stat"><div class="stat-val">' + totalVol + '</div><div class="stat-lbl">Mrd € Vol.</div></div>' +
                '<div class="tm-stat"><div class="stat-val">' + avgTariff + '%</div><div class="stat-lbl">⌀ Zoll</div></div>' +
            '</div>' +
            
            '<div class="tm-legend">' +
                '<span class="leg-item"><i style="background:#10B981"></i>0% Zoll</span>' +
                '<span class="leg-item"><i style="background:#F59E0B"></i>1-10%</span>' +
                '<span class="leg-item"><i style="background:#EF4444"></i>>10%</span>' +
            '</div>' +
        '</div>';
    
    // Attach events
    var markerEls = container.querySelectorAll(".marker");
    for (var m = 0; m < markerEls.length; m++) {
        markerEls[m].onclick = function(e) {
            e.stopPropagation();
            var id = this.getAttribute("data-id");
            mapState.selected = (mapState.selected === id) ? null : id;
            renderTradeMap(container);
        };
    }
    
    var mapEl = container.querySelector(".tm-map");
    if (mapEl) {
        mapEl.onclick = function(e) {
            if (!e.target.closest(".marker") && !e.target.closest(".tm-panel")) {
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
        var tariffClass = trade.tariff > 10 ? "red" : trade.tariff > 0 ? "yellow" : "green";
        content = '<div class="panel-row">Handelsvolumen <b>' + trade.vol + ' Mrd €</b></div>' +
                  '<div class="panel-row">Zollsatz <b class="' + tariffClass + '">' + trade.tariff + '%</b></div>';
    } else {
        content = '<div class="panel-row" style="opacity:0.5">Keine Daten</div>';
    }
    
    return '<div class="tm-panel">' +
        '<div class="panel-head">' + c.name + ' <span onclick="closePanel()">✕</span></div>' +
        '<div class="panel-body">' + content + '</div>' +
    '</div>';
}

function closePanel() {
    mapState.selected = null;
    var container = document.getElementById("map-container");
    if (container) renderTradeMap(container);
}

window.closePanel = closePanel;
window.tradeMap = { init: initMap };

// Auto-init
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(initMap, 100);
});
