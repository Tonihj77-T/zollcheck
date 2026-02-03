// === TRADE MAP with Leaflet.js ===

var tradeMap = null;
var mapReady = false;

var countries = {
    de: { name: "Deutschland", flag: "\u{1F1E9}\u{1F1EA}", lat: 51.17, lng: 10.45 },
    us: { name: "USA", flag: "\u{1F1FA}\u{1F1F8}", lat: 37.09, lng: -95.71 },
    cn: { name: "China", flag: "\u{1F1E8}\u{1F1F3}", lat: 35.86, lng: 104.20 },
    jp: { name: "Japan", flag: "\u{1F1EF}\u{1F1F5}", lat: 36.20, lng: 138.25 },
    gb: { name: "UK", flag: "\u{1F1EC}\u{1F1E7}", lat: 55.38, lng: -3.44 },
    fr: { name: "Frankreich", flag: "\u{1F1EB}\u{1F1F7}", lat: 46.23, lng: 2.21 },
    br: { name: "Brasilien", flag: "\u{1F1E7}\u{1F1F7}", lat: -14.24, lng: -51.93 },
    ind: { name: "Indien", flag: "\u{1F1EE}\u{1F1F3}", lat: 20.59, lng: 78.96 },
    kr: { name: "S\u00fcdkorea", flag: "\u{1F1F0}\u{1F1F7}", lat: 35.91, lng: 127.77 },
    mx: { name: "Mexiko", flag: "\u{1F1F2}\u{1F1FD}", lat: 23.63, lng: -102.55 }
};

var trades = [
    { to: "us", vol: 253, exp: 157, imp: 96, tariff: 15 },
    { to: "cn", vol: 298, exp: 107, imp: 191, tariff: 8 },
    { to: "gb", vol: 134, exp: 89, imp: 45, tariff: 0 },
    { to: "fr", vol: 172, exp: 102, imp: 70, tariff: 0 },
    { to: "jp", vol: 45, exp: 23, imp: 22, tariff: 5 },
    { to: "kr", vol: 28, exp: 14, imp: 14, tariff: 0 },
    { to: "br", vol: 21, exp: 12, imp: 9, tariff: 12 },
    { to: "ind", vol: 24, exp: 15, imp: 9, tariff: 10 },
    { to: "mx", vol: 18, exp: 11, imp: 7, tariff: 0 }
];

function initMap() {
    try {
        var container = document.getElementById("map-container");
        if (!container) return;

        // Already initialized
        if (mapReady && tradeMap) {
            tradeMap.invalidateSize();
            return;
        }

        // Check Leaflet
        if (typeof L === "undefined") {
            container.innerHTML = '<div style="padding:40px;text-align:center;color:white;background:#1a1a2e;border-radius:12px;"><p>Karte l\u00e4dt...</p></div>';
            setTimeout(initMap, 500);
            return;
        }

        // Setup container
        container.innerHTML = '<div id="leaflet-map" style="width:100%;height:350px;border-radius:12px;z-index:1;"></div><div id="map-stats-area"></div>';

        // Small delay for DOM
        setTimeout(buildMap, 200);
    } catch (e) {
        var c = document.getElementById("map-container");
        if (c) c.innerHTML = '<div style="padding:20px;color:red;">Fehler: ' + e.message + '</div>';
    }
}

function buildMap() {
    try {
        var mapEl = document.getElementById("leaflet-map");
        if (!mapEl) return;

        // Create map
        tradeMap = L.map("leaflet-map", {
            center: [30, 10],
            zoom: 2,
            minZoom: 2,
            maxZoom: 6,
            zoomControl: true,
            attributionControl: false
        });

        // Dark tiles
        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png").addTo(tradeMap);

        var de = countries.de;

        // Trade lines
        var keys = Object.keys(countries);
        for (var i = 0; i < trades.length; i++) {
            var t = trades[i];
            var c = countries[t.to];
            if (!c) continue;

            var color = t.tariff > 10 ? "#ff4444" : t.tariff > 0 ? "#ffaa00" : "#44ff88";
            var weight = Math.max(2, Math.min(6, t.vol / 60));

            // Simple curved path
            var pts = [];
            for (var p = 0; p <= 20; p++) {
                var frac = p / 20;
                var lat = de.lat + (c.lat - de.lat) * frac + Math.sin(Math.PI * frac) * 15;
                var lng = de.lng + (c.lng - de.lng) * frac;
                pts.push([lat, lng]);
            }

            L.polyline(pts, {
                color: color,
                weight: weight,
                opacity: 0.6,
                dashArray: null
            }).addTo(tradeMap);
        }

        // Country markers
        for (var j = 0; j < keys.length; j++) {
            var id = keys[j];
            var co = countries[id];
            var isDE = (id === "de");
            var sz = isDE ? 36 : 28;

            var icon = L.divIcon({
                className: "map-flag",
                html: '<span style="font-size:' + (isDE ? 28 : 22) + 'px">' + co.flag + '</span>',
                iconSize: [sz, sz],
                iconAnchor: [sz / 2, sz / 2]
            });

            var marker = L.marker([co.lat, co.lng], { icon: icon }).addTo(tradeMap);

            // Find trade data
            var td = null;
            for (var k = 0; k < trades.length; k++) {
                if (trades[k].to === id) { td = trades[k]; break; }
            }

            var popupHtml = '<div style="min-width:150px"><b style="font-size:14px">' + co.flag + ' ' + co.name + '</b>';
            if (td) {
                var tColor = td.tariff > 10 ? "#ff4444" : td.tariff > 0 ? "#ffaa00" : "#44ff88";
                popupHtml += '<div style="margin-top:8px;font-size:12px;line-height:1.8">' +
                    'Export \u{1F1E9}\u{1F1EA}\u2192 <b>' + td.exp + ' Mrd \u20ac</b><br>' +
                    'Import \u2192\u{1F1E9}\u{1F1EA} <b>' + td.imp + ' Mrd \u20ac</b><br>' +
                    'Zoll: <b style="color:' + tColor + '">' + td.tariff + '%</b>' +
                '</div>';
            } else if (isDE) {
                popupHtml += '<div style="margin-top:8px;font-size:12px">Exportweltmeister \u{1F3C6}</div>';
            }
            popupHtml += '</div>';

            marker.bindPopup(popupHtml);
        }

        // Legend
        var legend = L.control({ position: "bottomleft" });
        legend.onAdd = function() {
            var d = L.DomUtil.create("div");
            d.style.cssText = "background:rgba(0,0,0,0.8);padding:8px 12px;border-radius:8px;color:white;font-size:11px;";
            d.innerHTML = '<b>Zolls\u00e4tze</b><br>' +
                '<span style="color:#44ff88">\u2588</span> 0%&nbsp;&nbsp;' +
                '<span style="color:#ffaa00">\u2588</span> 1-10%&nbsp;&nbsp;' +
                '<span style="color:#ff4444">\u2588</span> >10%';
            return d;
        };
        legend.addTo(tradeMap);

        mapReady = true;

        // Stats
        var totalVol = 0, totalTar = 0;
        for (var s = 0; s < trades.length; s++) {
            totalVol += trades[s].vol;
            totalTar += trades[s].tariff;
        }

        var statsArea = document.getElementById("map-stats-area");
        if (statsArea) {
            statsArea.innerHTML = '<div class="map-stats-bar">' +
                '<div class="map-stat"><span class="stat-val">' + trades.length + '</span><span class="stat-label">Routen</span></div>' +
                '<div class="map-stat"><span class="stat-val">' + totalVol + '</span><span class="stat-label">Mrd \u20ac</span></div>' +
                '<div class="map-stat"><span class="stat-val">' + Math.round(totalTar / trades.length) + '%</span><span class="stat-label">\u2300 Zoll</span></div>' +
            '</div>';
        }

        // Fix size after render
        setTimeout(function() { tradeMap.invalidateSize(); }, 300);

    } catch (e) {
        var el = document.getElementById("map-container");
        if (el) el.innerHTML = '<div style="padding:20px;color:#ff6666;background:#1a1a2e;border-radius:12px;">Kartenfehler: ' + e.message + '</div>';
    }
}

window.tradeMap = {
    init: function() {
        setTimeout(initMap, 200);
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Preload check
    setTimeout(function() {
        var screen = document.getElementById("screen-karte");
        if (screen && screen.classList.contains("active")) {
            initMap();
        }
    }, 500);
});
