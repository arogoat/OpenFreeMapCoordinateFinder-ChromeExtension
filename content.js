(function detectMapLibre() {
  const checkInterval = setInterval(() => {
    const candidates = Array.from(document.querySelectorAll("canvas"));
    if (candidates.length > 0 && window.maplibregl) {
      for (const canvas of candidates) {
        if (canvas._mapInstance) {
          injectCoords(canvas._mapInstance);
          clearInterval(checkInterval);
          return;
        }
      }
    }
  }, 1000);

  function injectCoords(map) {
    const coordBox = document.createElement("div");
    coordBox.style.position = "fixed";
    coordBox.style.bottom = "20px";
    coordBox.style.left = "20px";
    coordBox.style.padding = "10px";
    coordBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    coordBox.style.color = "white";
    coordBox.style.zIndex = "10000";
    coordBox.style.borderRadius = "8px";
    coordBox.style.fontFamily = "monospace";
    coordBox.textContent = "Coordinates: -";
    document.body.appendChild(coordBox);

    map.on("mousemove", function (e) {
      const { lng, lat } = e.lngLat;
      coordBox.textContent = `Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    });
  }
})();