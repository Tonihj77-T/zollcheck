// === TRADE MAP - Simple Test ===

function initMap() {
    var container = document.getElementById("map-container");
    if (!container) {
        console.log("map-container not found");
        return;
    }
    
    container.innerHTML = '<div style="background:#0F172A;color:white;padding:20px;border-radius:12px;text-align:center;">' +
        '<h3 style="margin:0 0 10px 0;">🌍 Handelskarte</h3>' +
        '<p style="margin:0;opacity:0.7;">Karte lädt...</p>' +
        '<div id="map-test" style="margin-top:20px;"></div>' +
        '</div>';
    
    // Test if this runs
    setTimeout(function() {
        var test = document.getElementById("map-test");
        if (test) {
            test.innerHTML = '<p style="color:#10B981;">✓ JavaScript funktioniert!</p>';
            // Now load the real map
            setTimeout(loadRealMap, 500);
        }
    }, 100);
}

function loadRealMap() {
    var container = document.getElementById("map-container");
    
    var html = '<div class="dark-map">' +
        '<div class="dm-header">' +
            '<span class="dm-title">🌍 WELTHANDEL</span>' +
            '<div class="dm-btns">' +
                '<button class="on">🇩🇪 DE</button>' +
                '<button>🌐 Alle</button>' +
            '</div>' +
        '</div>' +
        '<div class="dm-canvas">' +
            '<svg viewBox="0 0 100 80" style="width:100%;background:#0F172A;border-radius:8px;">' +
                '<path d="M8,35 Q18,30 25,33 L32,30 Q38,33 35,40 L28,47 Q20,50 15,45 L10,40 Z M28,51 Q32,49 36,53 L38,65 Q34,73 28,71 L24,63 Z M44,25 Q52,21 60,25 L65,23 Q72,25 70,31 L64,35 Q56,37 50,33 Z M46,39 Q54,37 62,43 L66,53 Q62,65 54,67 L46,61 Q44,49 46,39 Z M62,23 Q74,19 86,25 L92,33 Q90,45 82,49 L72,45 Q64,37 64,29 Z M80,55 Q86,53 90,57 L92,65 Q88,71 82,69 Z" fill="#1E293B" stroke="#334155" stroke-width="0.3"/>' +
                '<circle cx="51" cy="35" r="3" fill="#3B82F6"/><text x="51" y="42" font-size="3" fill="#9CA3AF" text-anchor="middle">DE</text>' +
                '<circle cx="20" cy="40" r="2" fill="#6B7280"/><text x="20" y="47" font-size="2.5" fill="#9CA3AF" text-anchor="middle">US</text>' +
                '<circle cx="77" cy="42" r="2" fill="#6B7280"/><text x="77" y="49" font-size="2.5" fill="#9CA3AF" text-anchor="middle">CN</text>' +
                '<circle cx="47" cy="32" r="2" fill="#6B7280"/><text x="47" y="39" font-size="2.5" fill="#9CA3AF" text-anchor="middle">GB</text>' +
                '<circle cx="48" cy="37" r="2" fill="#6B7280"/><text x="48" y="44" font-size="2.5" fill="#9CA3AF" text-anchor="middle">FR</text>' +
                '<path d="M 51 35 Q 35 20 20 40" fill="none" stroke="#10B981" stroke-width="1" opacity="0.6"/>' +
                '<path d="M 51 35 Q 65 25 77 42" fill="none" stroke="#F59E0B" stroke-width="1" opacity="0.6"/>' +
                '<path d="M 51 35 Q 49 30 47 32" fill="none" stroke="#10B981" stroke-width="1" opacity="0.6"/>' +
            '</svg>' +
        '</div>' +
        '<div class="dm-stats">' +
            '<div class="stat"><span>9</span>Routen</div>' +
            '<div class="stat"><span>985</span>Mrd €</div>' +
            '<div class="stat"><span>6%</span>⌀ Zoll</div>' +
        '</div>' +
        '<div class="dm-legend">' +
            '<span><i class="green"></i>0%</span>' +
            '<span><i class="yellow"></i>1-15%</span>' +
            '<span><i class="red"></i>>15%</span>' +
        '</div>' +
    '</div>';
    
    container.innerHTML = html;
}

window.tradeMap = { init: initMap };

// Auto-init
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(initMap, 100);
});
