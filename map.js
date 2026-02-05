// === TRADE MAP - iframe loader ===
function initMap() {
    var el = document.getElementById("map-container");
    if (!el) return;
    
    el.innerHTML = '<iframe id="trade-map-frame" src="trademap.html" style="width:100%;height:420px;border:none;border-radius:12px;"></iframe>';
    
    // Listen for fullscreen messages from iframe
    window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'fullscreen') {
            var frame = document.getElementById('trade-map-frame');
            var screen = document.getElementById('screen-karte');
            
            if (e.data.value) {
                // Enter fullscreen
                frame.style.position = 'fixed';
                frame.style.top = '0';
                frame.style.left = '0';
                frame.style.width = '100vw';
                frame.style.height = '100vh';
                frame.style.zIndex = '9999';
                frame.style.borderRadius = '0';
                if (screen) screen.style.overflow = 'hidden';
                document.body.style.overflow = 'hidden';
            } else {
                // Exit fullscreen
                frame.style.position = '';
                frame.style.top = '';
                frame.style.left = '';
                frame.style.width = '100%';
                frame.style.height = '420px';
                frame.style.zIndex = '';
                frame.style.borderRadius = '12px';
                if (screen) screen.style.overflow = '';
                document.body.style.overflow = '';
            }
        }
    });
}

window.tradeMap = { init: initMap };

document.addEventListener("DOMContentLoaded", function() {
    var check = setInterval(function() {
        var s = document.getElementById("screen-karte");
        if (s && s.classList.contains("active")) {
            clearInterval(check);
            initMap();
        }
    }, 300);
    setTimeout(function() { clearInterval(check); }, 60000);
});
