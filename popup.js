document.getElementById("search").addEventListener("click", async () => {
  const query = document.getElementById("query").value.trim();
  if (!query) return;

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5`
  );
  const data = await response.json();

  const resultsBox = document.getElementById("results");
  resultsBox.innerHTML = "";
  if (data.length === 0) {
    resultsBox.textContent = "No results found.";
    return;
  }

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "result";
    div.textContent = `${item.display_name}\nLat: ${item.lat}, Lon: ${item.lon}`;
    resultsBox.appendChild(div);
  });
});