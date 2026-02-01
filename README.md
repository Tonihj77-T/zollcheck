# ZollCheck - PWA

Interaktive Lern-App zum Thema Zölle und Welthandel.

## Starten

### Lokal testen
```bash
cd app
python3 -m http.server 8000
# oder
npx serve .
```

Dann öffne `http://localhost:8000` im Browser.

### Installieren als App
1. Öffne die URL im Browser (Chrome/Safari)
2. **iOS:** Teilen → "Zum Home-Bildschirm"
3. **Android:** Menü → "Zum Startbildschirm hinzufügen"
4. **Desktop:** Adressleiste → Install-Button

## Icons erstellen

Die SVG-Datei `icons/icon.svg` muss in PNG konvertiert werden:

### Option 1: Online Converter
- https://cloudconvert.com/svg-to-png
- Erstelle 192x192 und 512x512 Versionen

### Option 2: Mit Inkscape (CLI)
```bash
inkscape icons/icon.svg -w 192 -h 192 -o icons/icon-192.png
inkscape icons/icon.svg -w 512 -h 512 -o icons/icon-512.png
```

### Option 3: Figma/Sketch
Importiere das SVG und exportiere als PNG.

## Features

- 🏠 **Mein Haushalt** - Produkte erfassen und Herkunft erkunden
- 🎮 **Quiz** - 15+ Fragen zu Zöllen und Welthandel
- 🏛️ **Simulator** - Entscheidungen als Minister/Unternehmer/Verbraucher treffen
- 📖 **Lexikon** - Wichtige Begriffe nachschlagen
- 🗺️ **Handelskarte** - (Coming soon)

## Gamification

- XP für jede Aktivität
- Level 1-6
- Tägliche Challenges
- Streak-Bonus

## Technologie

- Vanilla HTML/CSS/JS
- Progressive Web App (PWA)
- Offline-fähig via Service Worker
- LocalStorage für Spielstand

## Für den Wettbewerb

Diese App wurde für den **econo=me Wettbewerb 2025/26** entwickelt.
Thema: "Was ZOLL das? Wir und der Welthandel"

---

Made with 🦝 by John Tigg
