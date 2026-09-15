// Lightweight image zoom for publication thumbnails.
// - Opens the full-resolution original in a centered overlay.
// - Leaves a margin around the image instead of filling the whole viewport.
// - Never scales an image beyond its natural resolution (no upscaling / blur).
// - Skips the "Under Review" placeholder thumbnails.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var MARGIN = 48; // px of breathing room around the zoomed image

    var imgs = Array.prototype.slice
      .call(document.querySelectorAll("img.preview[data-zoomable]"))
      .filter(function (im) {
        var src = im.getAttribute("src") || "";
        return src.indexOf("under_review") === -1; // don't zoom placeholders
      });
    if (!imgs.length) return;

    var bg = (getComputedStyle(document.documentElement)
      .getPropertyValue("--global-bg-color") || "#ffffff").trim();

    var style = document.createElement("style");
    style.textContent =
      ".cz-overlay{position:fixed;inset:0;z-index:1050;display:flex;align-items:center;" +
      "justify-content:center;background:" + bg + "f2;opacity:0;transition:opacity .2s ease;" +
      "cursor:zoom-out;}" +
      ".cz-overlay.cz-open{opacity:1;}" +
      ".cz-overlay img{display:block;max-width:none;border-radius:4px;" +
      "box-shadow:0 10px 40px rgba(0,0,0,.35);}";
    document.head.appendChild(style);

    var overlay = document.createElement("div");
    overlay.className = "cz-overlay";
    overlay.hidden = true;
    var big = document.createElement("img");
    overlay.appendChild(big);
    document.body.appendChild(overlay);

    function fit(natW, natH) {
      var availW = window.innerWidth - MARGIN * 2;
      var availH = window.innerHeight - MARGIN * 2;
      // Fit within the margin box, but cap at 1x so we never upscale past the original.
      var scale = Math.min(availW / natW, availH / natH, 1);
      return { w: Math.round(natW * scale), h: Math.round(natH * scale) };
    }
    function applySize() {
      if (!big.naturalWidth) return;
      var s = fit(big.naturalWidth, big.naturalHeight);
      big.style.width = s.w + "px";
      big.style.height = s.h + "px";
    }
    function open(src) {
      big.onload = function () { applySize(); };
      big.src = src;
      if (big.complete) applySize();
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(function () { overlay.classList.add("cz-open"); });
    }
    function close() {
      overlay.classList.remove("cz-open");
      document.body.style.overflow = "";
      setTimeout(function () { overlay.hidden = true; big.removeAttribute("src"); }, 200);
    }

    imgs.forEach(function (im) {
      im.style.cursor = "zoom-in";
      im.addEventListener("click", function () {
        open(im.getAttribute("src")); // full-res original, not the small webp variant
      });
    });
    overlay.addEventListener("click", close);
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) close();
    });
    window.addEventListener("resize", function () {
      if (!overlay.hidden) applySize();
    });
  });
})();
