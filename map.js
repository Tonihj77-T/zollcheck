// === TRADE MAP with Leaflet.js ===

var map = null;
var tradeLines = [];
var markers = [];

var countries = {
    de: { name: "Deutschland", flag: "🇩🇪", lat: 51.1657, lng: 10.4515 },
    us: { name: "USA", flag: "🇺🇸", lat: 37.0902, lng: -95.7129 },
    cn: { name: "China", flag: "🇨🇳", lat: 35.8617, lng: 104.1954 },
    jp: { name: "Japan", flag: "🇯🇵", lat: 36.2048, lng: 138.2529 },
    gb: { name: "UK", flag: "🇬🇧", lat: 55.3781, lng: -3.4360 },
    fr: { name: "Frankreich", flag: "🇫🇷", lat: 46.2276, lng: 2.2137 },
    br: { name: "Brasilien", flag: "🇧🇷", lat: -14.2350, lng: -51.9253 },
    in: { name: "Indien", flag: "🇮🇳", lat: 20.5937, lng: 78.9629 },
    kr: { name: "Südkorea", flag: "🇰🇷", lat: 35.9078, lng: 127.7669 },
    mx: { name: "Mexiko", flag: "🇲🇽", lat: 23.6345, lng: -102.5528 }
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

function initMap() {
    var container = document.getElementById("map-container");
    if (!container) return;
    
    // Set container height
    container.style.height = "350px";
    container.innerHTML = '<div id="leaflet-map" style="width:100%;height:100%;border-radius:12px;"></div>';
    
    // Wait for container to be ready
    setTimeout(function() {
        createMap();
    }, 100);
}

function createMap() {
    // Initialize Leaflet map
    map = L.map("leaflet-map", {
        center: [30, 10],
        zoom: 2,
        minZoom: 1,
        maxZoom: 6,
        zoomControl: true,
        attributionControl: false
    });
    
    // Dark tile layer
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19
    }).addTo(map);
    
    // Add trade routes
    var de = countries.de;
    
    for (var i = 0; i < trades.length; i++) {
        var t = trades[i];
        var c = countries[t.to];
        if (!c) continue;
        
        var color = t.tariff > 10 ? "#ff4444" : t.tariff > 0 ? "#ffaa00" : "#44ff88";
        var weight = Math.max(2, t.vol / 80);
        
        // Curved line (great circle approximation)
        var latlngs = getCurvedPath([de.lat, de.lng], [c.lat, c.lng]);
        
        var line = L.polyline(latlngs, {
            color: color,
            weight: weight,
            opacity: 0.7,
            smoothFactor: 1
        }).addTo(map);
        
        tradeLines.push(line);
    }
    
    // Add country markers
    var keys = Object.keys(countries);
    for (var j = 0; j < keys.length; j++) {
        var id = keys[j];
        var co = countries[id];
        var isDE = id === "de";
        
        var trade = null;
        for (var k = 0; k < trades.length; k++) {
            if (trades[k].to === id) { trade = trades[k]; break; }
        }
        
        // Custom icon
        var iconSize = isDE ? 32 : 24;
        var icon = L.divIcon({
            className: "custom-marker",
            html: '<div class="marker-inner' + (isDE ? ' marker-de' : '') + '">' + co.flag + '</div>',
            iconSize: [iconSize, iconSize],
            iconAnchor: [iconSize/2, iconSize/2]
        });
        
        var marker = L.marker([co.lat, co.lng], { icon: icon }).addTo(map);
        
        // Popup content
        var popupContent = '<div class="map-popup">' +
            '<div class="popup-header">' + co.flag + ' ' + co.name + '</div>';
        
        if (trade) {
            var tariffClass = trade.tariff > 10 ? "tariff-high" : trade.tariff > 0 ? "tariff-med" : "tariff-low";
            popupContent += '<div class="popup-body">' +
                '<div class="popup-row">Export 🇩🇪→ <b>' + trade.exp + ' Mrd €</b></div>' +
                '<div class="popup-row">Import →🇩🇪 <b>' + trade.imp + ' Mrd €</b></div>' +
                '<div class="popup-row">Zollsatz <b class="' + tariffClass + '">' + trade.tariff + '%</b></div>' +
            '</div>';
        } else if (isDE) {
            popupContent += '<div class="popup-body"><div class="popup-row">Exportweltmeister 🏆</div></div>';
        }
        
        popupContent += '</div>';
        
        marker.bindPopup(popupContent, {
            className: "custom-popup"
        });
        
        markers.push(marker);
    }
    
    // Add legend
    addLegend();
    
    // Add stats below map
    addStats();
}

function getCurvedPath(start, end) {
    // Create curved path between two points
    var latlngs = [];
    var offsetX = (end[1] - start[1]) * 0.2;
    var offsetY = Math.abs(end[0] - start[0]) * 0.3 + 10;
    
    for (var i = 0; i <= 20; i++) {
        var t = i / 20;
        var lat = start[0] + (end[0] - start[0]) * t + Math.sin(Math.PI * t) * offsetY * (start[0] > 0 ? -1 : 1);
        var lng = start[1] + (end[1] - start[1]) * t;
        latlngs.push([lat, lng]);
    }
    
    return latlngs;
}

function addLegend() {
    var legend = L.control({ position: "bottomleft" });
    
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "map-legend");
        div.innerHTML = '<div class="legend-title">Zollsätze</div>' +
            '<div class="legend-item"><span class="legend-color" style="background:#44ff88"></span>0%</div>' +
            '<div class="legend-item"><span class="legend-color" style="background:#ffaa00"></span>1-10%</div>' +
            '<div class="legend-item"><span class="legend-color" style="background:#ff4444"></span>>10%</div>';
        return div;
    };
    
    legend.addTo(map);
}

function addStats() {
    var container = document.getElementById("map-container");
    var totalVol = 0, totalTariff = 0;
    
    for (var i = 0; i < trades.length; i++) {
        totalVol += trades[i].vol;
        totalTariff += trades[i].tariff;
    }
    
    var statsDiv = document.createElement("div");
    statsDiv.className = "map-stats-bar";
    statsDiv.innerHTML = '<div class="map-stat"><span class="stat-val">' + trades.length + '</span><span class="stat-label">Routen</span></div>' +
        '<div class="map-stat"><span class="stat-val">' + totalVol + '</span><span class="stat-label">Mrd € Volumen</span></div>' +
        '<div class="map-stat"><span class="stat-val">' + Math.round(totalTariff / trades.length) + '%</span><span class="stat-label">⌀ Zollsatz</span></div>';
    
    container.appendChild(statsDiv);
}

window.tradeMap = { init: initMap };

document.addEventListener("DOMContentLoaded", function() {
    // Init when tab is shown
    setTimeout(initMap, 100);
});
