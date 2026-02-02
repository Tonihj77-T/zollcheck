// === TRADE MAP ===

var countries = {
    germany: { name: "Deutschland", code: "🇩🇪", x: 52, y: 35 },
    usa: { name: "USA", code: "🇺🇸", x: 22, y: 40 },
    china: { name: "China", code: "🇨🇳", x: 78, y: 42 },
    japan: { name: "Japan", code: "🇯🇵", x: 88, y: 40 },
    uk: { name: "UK", code: "🇬🇧", x: 48, y: 30 },
    france: { name: "Frankreich", code: "🇫🇷", x: 49, y: 37 },
    brazil: { name: "Brasilien", code: "🇧🇷", x: 32, y: 65 },
    india: { name: "Indien", code: "🇮🇳", x: 72, y: 48 },
    korea: { name: "Südkorea", code: "🇰🇷", x: 84, y: 42 },
    mexico: { name: "Mexiko", code: "🇲🇽", x: 16, y: 48 }
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
        var c = t.tariff > 10 ? "#ef4444" : t.tariff > 0 ? "#f59e0b" : "#22c55e";
        var mx = (f.x + o.x) / 2, my = Math.min(f.y, o.y) - 8;
        
        lines += '<path d="M'+f.x+','+f.y+' Q'+mx+','+my+' '+o.x+','+o.y+'" stroke="'+c+'" stroke-width="1.5" fill="none" opacity="0.7"/>';
        dots += '<circle r="1.5" fill="'+c+'"><animateMotion dur="'+(2+i*0.2)+'s" repeatCount="indefinite" path="M'+f.x+','+f.y+' Q'+mx+','+my+' '+o.x+','+o.y+'"/></circle>';
    }
    
    // Country markers
    var keys = Object.keys(countries);
    for (var j = 0; j < keys.length; j++) {
        var id = keys[j], co = countries[id];
        var isDE = id === "germany", isSel = selected === id;
        var r = isDE ? 4 : 2.5;
        
        markers += '<g class="pin" data-id="'+id+'">';
        if (isDE) markers += '<circle cx="'+co.x+'" cy="'+co.y+'" r="8" fill="none" stroke="#3b82f6" opacity="0.3"><animate attributeName="r" values="5;12;5" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/></circle>';
        if (isSel) markers += '<circle cx="'+co.x+'" cy="'+co.y+'" r="'+(r+3)+'" fill="none" stroke="#fbbf24" stroke-width="2"/>';
        markers += '<circle cx="'+co.x+'" cy="'+co.y+'" r="'+r+'" fill="'+(isDE?'#3b82f6':'#e2e8f0')+'" stroke="#1e293b" stroke-width="1"/>';
        markers += '<text x="'+co.x+'" y="'+(co.y-r-2)+'" font-size="4" text-anchor="middle">'+co.code+'</text>';
        markers += '</g>';
    }
    
    // Stats
    var vol = 0, tar = 0;
    for (var k = 0; k < trades.length; k++) { vol += trades[k].vol; tar += trades[k].tariff; }
    
    el.innerHTML = '<div class="tmap">'+
        '<svg viewBox="0 0 100 80" class="tmap-svg">'+
            '<defs><linearGradient id="sea" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#0c4a6e"/><stop offset="100%" stop-color="#082f49"/></linearGradient></defs>'+
            '<rect width="100" height="80" fill="url(#sea)"/>'+
            // Simplified world continents
            '<path d="M8,28 L12,25 L18,26 L24,24 L28,26 L30,30 L28,36 L24,40 L20,42 L14,40 L10,36 L8,32 Z" fill="#1e3a5f" stroke="#2d4a6f" stroke-width="0.3"/>'+  // North America
            '<path d="M22,44 L26,42 L30,44 L32,50 L34,58 L32,66 L28,70 L24,68 L22,60 L20,52 Z" fill="#1e3a5f" stroke="#2d4a6f" stroke-width="0.3"/>'+  // South America
            '<path d="M44,22 L48,20 L54,22 L58,24 L56,30 L52,34 L48,36 L44,34 L42,28 Z" fill="#1e3a5f" stroke="#2d4a6f" stroke-width="0.3"/>'+  // Europe
            '<path d="M44,38 L50,36 L56,40 L58,48 L56,58 L52,64 L46,62 L42,54 L44,46 Z" fill="#1e3a5f" stroke="#2d4a6f" stroke-width="0.3"/>'+  // Africa
            '<path d="M60,20 L70,18 L82,22 L90,26 L92,34 L88,42 L80,46 L72,44 L66,40 L62,32 L60,24 Z" fill="#1e3a5f" stroke="#2d4a6f" stroke-width="0.3"/>'+  // Asia
            '<path d="M82,54 L88,52 L92,56 L90,64 L84,66 L80,62 Z" fill="#1e3a5f" stroke="#2d4a6f" stroke-width="0.3"/>'+  // Australia
            '<g>'+lines+'</g><g>'+dots+'</g><g>'+markers+'</g>'+
        '</svg>'+
        (selected ? panel() : '')+
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
    el.querySelector(".tmap-svg").onclick = function(e) {
        if (!e.target.closest(".pin")) { selected = null; render(el); }
    };
}

function panel() {
    var c = countries[selected];
    if (!c) return "";
    var t = null;
    for (var i = 0; i < trades.length; i++) {
        if (trades[i].to === selected) { t = trades[i]; break; }
    }
    if (!t) return '<div class="tmap-panel"><div class="pp-h">'+c.code+' '+c.name+'</div><div class="pp-b"><div class="pp-r">Haupthandelspartner der EU</div></div></div>';
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
