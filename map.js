// === TRADE MAP ===

var countries = {
    germany: { name: "Deutschland", code: "🇩🇪", x: 51, y: 38 },
    usa: { name: "USA", code: "🇺🇸", x: 20, y: 42 },
    china: { name: "China", code: "🇨🇳", x: 77, y: 44 },
    japan: { name: "Japan", code: "🇯🇵", x: 86, y: 43 },
    uk: { name: "UK", code: "🇬🇧", x: 48, y: 34 },
    france: { name: "Frankreich", code: "🇫🇷", x: 49, y: 40 },
    brazil: { name: "Brasilien", code: "🇧🇷", x: 32, y: 62 },
    india: { name: "Indien", code: "🇮🇳", x: 70, y: 50 },
    korea: { name: "Südkorea", code: "🇰🇷", x: 82, y: 44 },
    mexico: { name: "Mexiko", code: "🇲🇽", x: 15, y: 50 }
};

var trades = [
    { from: "germany", to: "usa", vol: 253, exp: 157, imp: 96, tariff: 15 },
    { from: "germany", to: "china", vol: 298, exp: 107, imp: 191, tariff: 8 },
    { from: "germany", to: "france", vol: 172, exp: 102, imp: 70, tariff: 0 },
    { from: "germany", to: "uk", vol: 134, exp: 89, imp: 45, tariff: 0 },
    { from: "germany", to: "japan", vol: 45, exp: 23, imp: 22, tariff: 5 },
    { from: "germany", to: "korea", vol: 28, exp: 14, imp: 14, tariff: 0 },
    { from: "germany", to: "brazil", vol: 21, exp: 12, imp: 9, tariff: 12 },
    { from: "germany", to: "india", vol: 24, exp: 15, imp: 9, tariff: 10 },
    { from: "germany", to: "mexico", vol: 18, exp: 11, imp: 7, tariff: 0 }
];

var selected = null;

function initMap() {
    var el = document.getElementById("map-container");
    if (!el) return;
    render(el);
}

function render(el) {
    var lines = "", dots = "", markers = "";
    
    // Trade lines
    for (var i = 0; i < trades.length; i++) {
        var t = trades[i], f = countries.germany, o = countries[t.to];
        var c = t.tariff > 10 ? "#ff4444" : t.tariff > 0 ? "#ffaa00" : "#44ff88";
        var mx = (f.x + o.x) / 2, my = Math.min(f.y, o.y) - 5;
        
        lines += '<path d="M'+f.x+','+f.y+' Q'+mx+','+my+' '+o.x+','+o.y+'" stroke="'+c+'" stroke-width="2" fill="none" opacity="0.8" style="filter:drop-shadow(0 0 3px '+c+')"/>';
        dots += '<circle r="2" fill="white"><animateMotion dur="'+(2+i*0.2)+'s" repeatCount="indefinite" path="M'+f.x+','+f.y+' Q'+mx+','+my+' '+o.x+','+o.y+'"/></circle>';
    }
    
    // Country markers
    var keys = Object.keys(countries);
    for (var j = 0; j < keys.length; j++) {
        var id = keys[j], co = countries[id];
        var isDE = id === "germany", isSel = selected === id;
        
        markers += '<g class="pin" data-id="'+id+'">';
        if (isDE) {
            markers += '<circle cx="'+co.x+'" cy="'+co.y+'" r="6" fill="none" stroke="white" opacity="0.5"><animate attributeName="r" values="4;10;4" dur="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite"/></circle>';
        }
        if (isSel) markers += '<circle cx="'+co.x+'" cy="'+co.y+'" r="6" fill="none" stroke="#ffd700" stroke-width="2"/>';
        markers += '<circle cx="'+co.x+'" cy="'+co.y+'" r="'+(isDE?4:3)+'" fill="'+(isDE?'#3b82f6':'white')+'" stroke="#000" stroke-width="0.5"/>';
        markers += '<text x="'+co.x+'" y="'+(co.y-5)+'" font-size="5" text-anchor="middle" style="filter:drop-shadow(0 1px 1px black)">'+co.code+'</text>';
        markers += '</g>';
    }
    
    // Stats
    var vol = 0, tar = 0;
    for (var k = 0; k < trades.length; k++) { vol += trades[k].vol; tar += trades[k].tariff; }
    
    el.innerHTML = '<div class="tmap">'+
        '<div class="tmap-wrap">'+
            '<img src="world.jpg" class="tmap-img">'+
            '<svg viewBox="0 0 100 70" class="tmap-svg" preserveAspectRatio="none">'+
                '<g>'+lines+'</g><g>'+dots+'</g><g>'+markers+'</g>'+
            '</svg>'+
            (selected ? panel() : '')+
        '</div>'+
        '<div class="tmap-stats">'+
            '<div><b>'+trades.length+'</b><span>Routen</span></div>'+
            '<div><b>'+vol+'</b><span>Mrd €</span></div>'+
            '<div><b>'+Math.round(tar/trades.length)+'%</b><span>⌀ Zoll</span></div>'+
        '</div>'+
        '<div class="tmap-leg"><span><i class="g"></i>0%</span><span><i class="y"></i>1-10%</span><span><i class="r"></i>&gt;10%</span></div>'+
    '</div>';
    
    // Events
    var pins = el.querySelectorAll(".pin");
    for (var p = 0; p < pins.length; p++) {
        pins[p].onclick = function(e) {
            e.stopPropagation();
            var id = this.getAttribute("data-id");
            selected = selected === id ? null : id;
            render(el);
        };
    }
    var wrap = el.querySelector(".tmap-wrap");
    if (wrap) wrap.onclick = function(e) {
        if (!e.target.closest(".pin") && !e.target.closest(".tmap-panel")) { selected = null; render(el); }
    };
}

function panel() {
    var c = countries[selected];
    if (!c) return "";
    var t = null;
    for (var i = 0; i < trades.length; i++) {
        if (trades[i].to === selected) { t = trades[i]; break; }
    }
    if (!t) return '<div class="tmap-panel"><div class="pp-h">'+c.code+' '+c.name+'</div><div class="pp-b"><div class="pp-r" style="justify-content:center;opacity:0.6">Keine Handelsdaten</div></div></div>';
    var tc = t.tariff > 10 ? "r" : t.tariff > 0 ? "y" : "g";
    return '<div class="tmap-panel"><div class="pp-h">'+c.code+' '+c.name+' <span onclick="closePanel()">✕</span></div><div class="pp-b">'+
        '<div class="pp-r">Export 🇩🇪→ <b>'+t.exp+' Mrd €</b></div>'+
        '<div class="pp-r">Import →🇩🇪 <b>'+t.imp+' Mrd €</b></div>'+
        '<div class="pp-r">Zollsatz <b class="'+tc+'">'+t.tariff+'%</b></div>'+
    '</div></div>';
}

function closePanel() { selected = null; render(document.getElementById("map-container")); }
window.closePanel = closePanel;
window.tradeMap = { init: initMap };
document.addEventListener("DOMContentLoaded", function() { setTimeout(initMap, 50); });
