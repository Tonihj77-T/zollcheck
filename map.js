// === TRADE MAP - iframe approach ===
function initMap() {
    var el = document.getElementById("map-container");
    if (!el) return;
    el.innerHTML = '<iframe src="trademap.html" style="width:100%;height:420px;border:none;border-radius:12px;"></iframe>';
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
