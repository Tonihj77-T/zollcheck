// === HANDELSKARTE v4 - Leaflet.js ===

const mapCountries = {
    germany: { name: "Deutschland", flag: "🇩🇪", lat: 51.1657, lng: 10.4515, color: "#1E3A5F", isMain: true,
        exports: { total: 1547, top: ["Autos", "Maschinen", "Chemie"] },
        imports: { total: 1371, top: ["Öl", "Gas", "Elektronik"] }
    },
    usa: { name: "USA", flag: "🇺🇸", lat: 37.0902, lng: -95.7129, color: "#3182CE",
        exports: { total: 2100, top: ["Tech", "Flugzeuge", "Pharma"] },
        imports: { total: 3200, top: ["Elektronik", "Autos", "Öl"] }
    },
    china: { name: "China", flag: "🇨🇳", lat: 35.8617, lng: 104.1954, color: "#E53E3E",
        exports: { total: 3500, top: ["Elektronik", "Maschinen", "Textilien"] },
        imports: { total: 2700, top: ["Chips", "Öl", "Erze"] }
    },
    japan: { name: "Japan", flag: "🇯🇵", lat: 36.2048, lng: 138.2529, color: "#805AD5",
        exports: { total: 756, top: ["Autos", "Elektronik", "Maschinen"] },
        imports: { total: 897, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    uk: { name: "UK", flag: "🇬🇧", lat: 55.3781, lng: -3.4360, color: "#2C5282",
        exports: { total: 468, top: ["Finanzen", "Pharma", "Autos"] },
        imports: { total: 689, top: ["Autos", "Maschinen", "Elektronik"] }
    },
    france: { name: "Frankreich", flag: "🇫🇷", lat: 46.2276, lng: 2.2137, color: "#2B6CB0",
        exports: { total: 617, top: ["Flugzeuge", "Pharma", "Wein"] },
        imports: { total: 714, top: ["Öl", "Autos", "Elektronik"] }
    },
    brazil: { name: "Brasilien", flag: "🇧🇷", lat: -14.2350, lng: -51.9253, color: "#38A169",
        exports: { total: 334, top: ["Soja", "Eisenerz", "Öl"] },
        imports: { total: 251, top: ["Maschinen", "Elektronik", "Chemie"] }
    },
    india: { name: "Indien", flag: "🇮🇳", lat: 20.5937, lng: 78.9629, color: "#DD6B20",
        exports: { total: 453, top: ["IT-Services", "Pharma", "Textilien"] },
        imports: { total: 617, top: ["Öl", "Gold", "Elektronik"] }
    },
    southkorea: { name: "Südkorea", flag: "🇰🇷", lat: 35.9078, lng: 127.7669, color: "#319795",
        exports: { total: 644, top: ["Halbleiter", "Autos", "Schiffe"] },
        imports: { total: 632, top: ["Öl", "Gas", "Rohstoffe"] }
    },
    mexico: { name: "Mexiko", flag: "🇲🇽", lat: 23.6345, lng: -102.5528, color: "#C53030",
        exports: { total: 494, top: ["Autos", "Elektronik", "Öl"] },
        imports: { total: 505, top: ["Elektronik", "Maschinen", "Kunststoff"] }
    }
};

const tradeFlows = [
    { from: "germany", to: "usa", volume: 253, exports: 157, imports: 96, tariff: 15, trend: "down" },
    { from: "germany", to: "china", volume: 298, exports: 107, imports: 191, tariff: 8, trend: "stable" },
    { from: "germany", to: "france", volume: 172, exports: 102, imports: 70, tariff: 0, trend: "up" },
    { from: "germany", to: "uk", volume: 134, exports: 89, imports: 45, tariff: 0, trend: "stable" },
    { from: "germany", to: "japan", volume: 45, exports: 23, imports: 22, tariff: 5, trend: "up" },
    { from: "germany", to: "southkorea", volume: 28, exports: 14, imports: 14, tariff: 0, trend: "up" },
    { from: "germany", to: "brazil", volume: 21, exports: 12, imports: 9, tariff: 12, trend: "stable" },
    { from: "germany", to: "india", volume: 24, exports: 15, imports: 9, tariff: 10, trend: "up" },
    { from: "germany", to: "mexico", volume: 18, exports: 11, imports: 7, tariff: 0, trend: "up" },
    { from: "usa", to: "china", volume: 758, exports: 151, imports: 607, tariff: 25, trend: "down", isGlobal: true },
    { from: "usa", to: "mexico", volume: 614, exports: 276, imports: 338, tariff: 0, trend: "up", isGlobal: true },
];

const timelineEvents = [
    { year: 2018, title: "Stahl-Zölle", desc: "USA führt 25% Stahl-Zölle ein" },
    { year: 2019, title: "Handelskrieg", desc: "US-China Konflikt eskaliert" },
    { year: 2020, title: "Phase-1 Deal", desc: "Teilweise Entspannung USA-China" },
    { year: 2021, title: "Chip-Krise", desc: "Globale Lieferketten-Probleme" },
    { year: 2022, title: "Energiekrise", desc: "Russland-Sanktionen, Gaspreise ↑" },
    { year: 2023, title: "EU Chips Act", desc: "€43 Mrd. Halbleiter-Investition" },
    { year: 2024, title: "Trump 2.0", desc: "Neue Zoll-Ankündigungen" },
    { year: 2025, title: "EU-Zölle", desc: "Deutsche Exporte in USA -9,4%" },
    { year: 2026, title: "Handelskrieg 2.0", desc: "Weitere Eskalation droht" }
];

let map = null;
let markersLayer = null;
let linesLayer = null;
let mapState = {
    selected: null,
    showGlobal: false,
    year: 2026
};

function initMap() {
    const container = document.getElementById('map-container');
    if (!container) return;
    
    // Render wrapper HTML
    container.innerHTML = `
        <div class="map-wrapper">
            <div class="map-buttons">
                <button class="map-btn active" id="btn-germany">🇩🇪 Deutschland</button>
                <button class="map-btn" id="btn-global">🌍 Global</button>
            </div>
            
            <div id="leaflet-map"></div>
            
            <div id="country-info-panel" class="country-panel hidden"></div>
            
            <div class="map-timeline">
                <div class="timeline-dots">
                    ${timelineEvents.map(e => `
                        <button class="tl-dot ${e.year === mapState.year ? 'active' : ''}" data-year="${e.year}"></button>
                    `).join('')}
                </div>
                <div class="timeline-labels"><span>2018</span><span>2026</span></div>
                <div class="timeline-event" id="timeline-display">
                    <strong>${mapState.year}: ${timelineEvents.find(e => e.year === mapState.year)?.title || ''}</strong><br>
                    <span>${timelineEvents.find(e => e.year === mapState.year)?.desc || ''}</span>
                </div>
            </div>
            
            <div class="map-legend">
                <span><span class="legend-dot green"></span> Kein Zoll</span>
                <span><span class="legend-dot yellow"></span> 1-15%</span>
                <span><span class="legend-dot red"></span> >15%</span>
            </div>
        </div>
    `;
    
    // Initialize Leaflet
    map = L.map('leaflet-map', {
        center: [30, 10],
        zoom: 2,
        minZoom: 1,
        maxZoom: 5,
        zoomControl: false,
        attributionControl: false
    });
    
    // Add tile layer (CartoDB Positron - clean look)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);
    
    // Create layers
    linesLayer = L.layerGroup().addTo(map);
    markersLayer = L.layerGroup().addTo(map);
    
    // Draw initial state
    drawTradeLines();
    drawMarkers();
    
    // Event listeners
    document.getElementById('btn-germany').addEventListener('click', function() {
        mapState.showGlobal = false;
        this.classList.add('active');
        document.getElementById('btn-global').classList.remove('active');
        drawTradeLines();
        map.setView([30, 10], 2);
    });
    
    document.getElementById('btn-global').addEventListener('click', function() {
        mapState.showGlobal = true;
        this.classList.add('active');
        document.getElementById('btn-germany').classList.remove('active');
        drawTradeLines();
    });
    
    document.querySelectorAll('.tl-dot').forEach(dot => {
        dot.addEventListener('click', function() {
            document.querySelectorAll('.tl-dot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            mapState.year = parseInt(this.dataset.year);
            const event = timelineEvents.find(e => e.year === mapState.year);
            document.getElementById('timeline-display').innerHTML = `
                <strong>${mapState.year}: ${event?.title || ''}</strong><br>
                <span>${event?.desc || ''}</span>
            `;
        });
    });
}

function drawTradeLines() {
    linesLayer.clearLayers();
    
    const flows = mapState.showGlobal 
        ? tradeFlows 
        : tradeFlows.filter(f => f.from === 'germany' || f.to === 'germany');
    
    flows.forEach(flow => {
        const from = mapCountries[flow.from];
        const to = mapCountries[flow.to];
        if (!from || !to) return;
        
        let color = '#4ECDC4';
        if (flow.tariff > 15) color = '#FF6B6B';
        else if (flow.tariff > 0) color = '#ECC94B';
        
        const weight = Math.max(2, Math.min(6, flow.volume / 100));
        
        const line = L.polyline(
            [[from.lat, from.lng], [to.lat, to.lng]], 
            { 
                color: color, 
                weight: weight, 
                opacity: 0.7,
                dashArray: flow.tariff > 15 ? '10, 5' : null
            }
        );
        
        line.on('click', () => showFlowInfo(flow, from, to));
        line.on('mouseover', function() { this.setStyle({ opacity: 1, weight: weight + 2 }); });
        line.on('mouseout', function() { this.setStyle({ opacity: 0.7, weight: weight }); });
        
        linesLayer.addLayer(line);
    });
}

function drawMarkers() {
    markersLayer.clearLayers();
    
    Object.entries(mapCountries).forEach(([id, country]) => {
        const size = country.isMain ? 40 : 30;
        
        const icon = L.divIcon({
            className: 'country-marker-icon',
            html: `<div class="marker-circle ${country.isMain ? 'main' : ''}" style="background:${country.color}">
                     <span class="marker-flag">${country.flag}</span>
                   </div>`,
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
        
        const marker = L.marker([country.lat, country.lng], { icon: icon });
        
        marker.on('click', () => showCountryInfo(id, country));
        
        markersLayer.addLayer(marker);
    });
}

function showCountryInfo(id, country) {
    const panel = document.getElementById('country-info-panel');
    
    const flow = tradeFlows.find(f => 
        (f.from === id && f.to === 'germany') ||
        (f.to === id && f.from === 'germany')
    );
    
    panel.innerHTML = `
        <div class="panel-header" style="background:${country.color}">
            <span class="panel-flag">${country.flag}</span>
            <span class="panel-name">${country.name}</span>
            <button class="panel-close" onclick="closePanel()">✕</button>
        </div>
        ${flow ? `
            <div class="panel-stats">
                <div class="panel-row">
                    <span>🇩🇪→${country.flag} Export</span>
                    <strong>${flow.from === 'germany' ? flow.exports : flow.imports} Mrd €</strong>
                </div>
                <div class="panel-row">
                    <span>${country.flag}→🇩🇪 Import</span>
                    <strong>${flow.from === 'germany' ? flow.imports : flow.exports} Mrd €</strong>
                </div>
                <div class="panel-row">
                    <span>Zollsatz</span>
                    <strong class="${flow.tariff > 15 ? 'red' : flow.tariff > 0 ? 'yellow' : 'green'}">${flow.tariff}%</strong>
                </div>
                <div class="panel-row">
                    <span>Trend</span>
                    <strong>${flow.trend === 'up' ? '📈 Steigend' : flow.trend === 'down' ? '📉 Fallend' : '➡️ Stabil'}</strong>
                </div>
            </div>
        ` : `<div class="panel-stats"><p style="text-align:center;padding:16px;color:#718096">Kein direkter Handel mit Deutschland</p></div>`}
        <div class="panel-footer">
            <strong>Top-Exporte:</strong> ${country.exports.top.join(', ')}
        </div>
    `;
    
    panel.classList.remove('hidden');
    
    // Fly to country
    map.flyTo([country.lat, country.lng], 4, { duration: 0.5 });
}

function showFlowInfo(flow, from, to) {
    const panel = document.getElementById('country-info-panel');
    
    panel.innerHTML = `
        <div class="panel-header" style="background:#1E3A5F">
            <span>${from.flag} ↔ ${to.flag}</span>
            <span class="panel-name">Handelsroute</span>
            <button class="panel-close" onclick="closePanel()">✕</button>
        </div>
        <div class="panel-stats">
            <div class="panel-row">
                <span>Volumen gesamt</span>
                <strong>${flow.volume} Mrd €</strong>
            </div>
            <div class="panel-row">
                <span>${from.name} → ${to.name}</span>
                <strong>${flow.exports} Mrd €</strong>
            </div>
            <div class="panel-row">
                <span>${to.name} → ${from.name}</span>
                <strong>${flow.imports} Mrd €</strong>
            </div>
            <div class="panel-row">
                <span>Zollsatz</span>
                <strong class="${flow.tariff > 15 ? 'red' : flow.tariff > 0 ? 'yellow' : 'green'}">${flow.tariff}%</strong>
            </div>
        </div>
    `;
    
    panel.classList.remove('hidden');
}

function closePanel() {
    document.getElementById('country-info-panel').classList.add('hidden');
    map.setView([30, 10], 2, { duration: 0.5 });
}

// Make closePanel global
window.closePanel = closePanel;

window.tradeMap = { init: initMap };
