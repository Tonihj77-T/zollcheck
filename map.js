// === TRADE MAP - Dark Modern Style ===

const countries = {
    germany: { name: "Deutschland", code: "DE", x: 51, y: 35 },
    usa: { name: "USA", code: "US", x: 20, y: 42 },
    china: { name: "China", code: "CN", x: 77, y: 44 },
    japan: { name: "Japan", code: "JP", x: 87, y: 42 },
    uk: { name: "UK", code: "GB", x: 47, y: 32 },
    france: { name: "Frankreich", code: "FR", x: 48, y: 37 },
    brazil: { name: "Brasilien", code: "BR", x: 30, y: 68 },
    india: { name: "Indien", code: "IN", x: 71, y: 50 },
    southkorea: { name: "Südkorea", code: "KR", x: 83, y: 42 },
    mexico: { name: "Mexiko", code: "MX", x: 14, y: 50 }
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
    { y: 2018, t: "Stahl-Zölle" },
    { y: 2019, t: "Handelskrieg" },
    { y: 2020, t: "Phase-1 Deal" },
    { y: 2021, t: "Chip-Krise" },
    { y: 2022, t: "Energiekrise" },
    { y: 2023, t: "Chips Act" },
    { y: 2024, t: "Trump 2.0" },
    { y: 2025, t: "EU-Zölle" },
    { y: 2026, t: "Eskalation" }
];

var mapState = { global: false, year: 2026, selected: null };

function initMap() {
    var container = document.getElementById("map-container");
    if (!container) return;
    renderMap();
}

function renderMap() {
    var container = document.getElementById("map-container");
    var flows = mapState.global ? trades : trades.filter(function(t) { return !t.global; });
    var ev = timeline.find(function(t) { return t.y === mapState.year; }) || {};
    
    var linesHtml = flows.map(function(t, i) {
        var f = countries[t.from];
        var o = countries[t.to];
        if (!f || !o) return "";
        
        var color = t.tariff > 15 ? "#EF4444" : t.tariff > 0 ? "#F59E0B" : "#10B981";
        var mx = (f.x + o.x) / 2;
        var my = Math.min(f.y, o.y) - 8;
        
        return '<path d="M ' + f.x + ' ' + f.y + ' Q ' + mx + ' ' + my + ' ' + o.x + ' ' + o.y + '" fill="none" stroke="' + color + '" stroke-width="1" opacity="0.6" stroke-linecap="round"/>';
    }).join("");
    
    var markersHtml = Object.keys(countries).map(function(id) {
        var c = countries[id];
        var isDE = id === "germany";
        var r = isDE ? 3 : 2;
        var fill = isDE ? "#3B82F6" : "#6B7280";
        
        return '<g class="marker" data-id="' + id + '" style="cursor:pointer">' +
            '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + r + '" fill="' + fill + '" stroke="#1F2937" stroke-width="0.5"/>' +
            '<text x="' + c.x + '" y="' + (c.y + 5) + '" font-size="2.5" fill="#9CA3AF" text-anchor="middle">' + c.code + '</text>' +
            '</g>';
    }).join("");
    
    var dotsHtml = timeline.map(function(t) {
        var isOn = t.y === mapState.year;
        return '<span class="tl-dot' + (isOn ? ' on' : '') + '" data-y="' + t.y + '"></span>';
    }).join("");
    
    var statsHtml = '<div class="stat"><span>' + flows.length + '</span>Routen</div>' +
        '<div class="stat"><span>' + flows.reduce(function(s,t){return s+t.vol;},0) + '</span>Mrd €</div>' +
        '<div class="stat"><span>' + Math.round(flows.reduce(function(s,t){return s+t.tariff;},0)/flows.length) + '%</span>⌀ Zoll</div>';
    
    container.innerHTML = 
        '<div class="dark-map">' +
            '<div class="dm-header">' +
                '<span class="dm-title">🌍 WELTHANDEL</span>' +
                '<div class="dm-btns">' +
                    '<button id="btn-de" class="' + (!mapState.global ? 'on' : '') + '">🇩🇪 DE</button>' +
                    '<button id="btn-gl" class="' + (mapState.global ? 'on' : '') + '">🌐 Alle</button>' +
                '</div>' +
            '</div>' +
            '<div class="dm-canvas">' +
                '<svg viewBox="0 0 100 90">' +
                    '<rect width="100" height="90" fill="#0F172A"/>' +
                    '<path d="M8,40 Q18,35 25,38 L32,35 Q38,38 35,45 L28,52 Q20,55 15,50 L10,45 Z M28,56 Q32,54 36,58 L38,70 Q34,78 28,76 L24,68 Z M44,30 Q52,26 60,30 L65,28 Q72,30 70,36 L64,40 Q56,42 50,38 Z M46,44 Q54,42 62,48 L66,58 Q62,70 54,72 L46,66 Q44,54 46,44 Z M62,28 Q74,24 86,30 L92,38 Q90,50 82,54 L72,50 Q64,42 64,34 Z M80,60 Q86,58 90,62 L92,70 Q88,76 82,74 Z" fill="#1E293B" stroke="#334155" stroke-width="0.3"/>' +
                    '<g class="lines">' + linesHtml + '</g>' +
                    '<g class="markers">' + markersHtml + '</g>' +
                '</svg>' +
                (mapState.selected ? renderPanel() : '') +
            '</div>' +
            '<div class="dm-stats">' + statsHtml + '</div>' +
            '<div class="dm-timeline">' +
                '<div class="tl-track">' + dotsHtml + '</div>' +
                '<div class="tl-label">' + mapState.year + ': ' + (ev.t || '') + '</div>' +
            '</div>' +
            '<div class="dm-legend">' +
                '<span><i class="green"></i>0%</span>' +
                '<span><i class="yellow"></i>1-15%</span>' +
                '<span><i class="red"></i>>15%</span>' +
            '</div>' +
        '</div>';
    
    // Events
    document.getElementById("btn-de").onclick = function() { mapState.global = false; renderMap(); };
    document.getElementById("btn-gl").onclick = function() { mapState.global = true; renderMap(); };
    
    var dots = document.querySelectorAll(".tl-dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].onclick = function() {
            mapState.year = parseInt(this.getAttribute("data-y"));
            renderMap();
        };
    }
    
    var markers = document.querySelectorAll(".marker");
    for (var j = 0; j < markers.length; j++) {
        markers[j].onclick = function(e) {
            e.stopPropagation();
            var id = this.getAttribute("data-id");
            mapState.selected = mapState.selected === id ? null : id;
            renderMap();
        };
    }
}

function renderPanel() {
    var c = countries[mapState.selected];
    if (!c) return "";
    
    var t = trades.find(function(x) {
        return (x.from === mapState.selected && x.to === "germany") || 
               (x.to === mapState.selected && x.from === "germany");
    });
    
    var content = "";
    if (t) {
        var tariffClass = t.tariff > 15 ? "red" : t.tariff > 0 ? "yellow" : "green";
        content = 
            '<div class="panel-row"><span>Export→🇩🇪</span><b>' + (t.from === "germany" ? t.imp : t.exp) + ' Mrd€</b></div>' +
            '<div class="panel-row"><span>Import←🇩🇪</span><b>' + (t.from === "germany" ? t.exp : t.imp) + ' Mrd€</b></div>' +
            '<div class="panel-row"><span>Zoll</span><b class="' + tariffClass + '">' + t.tariff + '%</b></div>';
    } else {
        content = '<div class="panel-row" style="justify-content:center;opacity:0.5">Kein DE-Handel</div>';
    }
    
    return '<div class="dm-panel">' +
        '<div class="panel-head">' + c.name + '<span onclick="closePanel()">✕</span></div>' +
        '<div class="panel-body">' + content + '</div>' +
    '</div>';
}

function closePanel() {
    mapState.selected = null;
    renderMap();
}

window.closePanel = closePanel;
window.tradeMap = { init: initMap };

// Auto-init when DOM ready
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("map-container");
    if (container && container.offsetParent !== null) {
        initMap();
    }
});

// Also try init after a short delay (for screen switching)
setTimeout(function() {
    var container = document.getElementById("map-container");
    if (container && container.innerHTML.trim() === "" || container.innerHTML.indexOf("Karte wird") > -1) {
        initMap();
    }
}, 500);
