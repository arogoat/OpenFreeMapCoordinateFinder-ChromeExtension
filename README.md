# 🌍 OpenFreeMap Coordinate Finder – Chrome Extension

**OpenFreeMap Coordinate Finder** is a lightweight Chrome extension that allows users to:

- 🔎 Search for coordinates by entering a city or street name.
- 🧭 Automatically display real-time coordinates under the mouse cursor on websites using [OpenFreeMap](https://openfreemap.org) (via MapLibre GL).

---

## 🛠 Features

- **Geolocation search** – Uses the [Nominatim](https://nominatim.openstreetmap.org) API to resolve place names into geographic coordinates.
- **Live coordinate tracking** – Detects MapLibre GL maps on any site and shows cursor position in latitude and longitude.
- **Modern UI** – Minimal popup with responsive styling.

---

## 📦 File Structure

| File          | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `manifest.json` | Chrome extension manifest (v3). Declares permissions, scripts and popup.     |
| `popup.html`     | Popup HTML interface with input field and results area.                    |
| `popup.js`       | JavaScript logic for sending geocoding requests and showing results.       |
| `style.css`      | Basic styling for the popup.                                                |
| `content.js`     | Injected into every page – detects MapLibre GL maps and overlays coordinates. |
| `icon.png`       | Icon for the extension (16×16 PNG).                                         |

---

## 🧪 How It Works

1. **Popup interface**:  
   Click the extension icon → Enter a location name → View matching coordinates from OpenStreetMap.

2. **Content script**:  
   On pages using MapLibre GL (like OpenFreeMap), the extension adds a coordinate overlay that updates with mouse movement.

---

## 🧰 Technologies

- JavaScript (ES6)
- HTML/CSS
- MapLibre GL detection
- OpenStreetMap Nominatim API

---

## 📥 Installation (Dev Mode)

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the extracted folder.

---
