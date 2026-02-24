# Tarrific – Technisches Handbuch

## Übersicht

Tarrific ist eine Progressive Web App (PWA) zum Thema Zölle und Welthandel, entwickelt für den **econo=me Wettbewerb 2025/26**.

**Live:** [tarrific.tonihj77.de](https://tarrific.tonihj77.de)

---

## 📁 Projektstruktur

```
zollcheck/
├── index.html       # Haupt-HTML, alle Screens/Modals
├── app.js           # App-Logik, State, Navigation, Quiz, Haushalt
├── lessons.js       # Alle 34 Lektionen (6 Module)
├── simulator.js     # Dynamischer Weltwirtschafts-Simulator
├── data.js          # Quiz-Fragen, Produkte, Lexikon, Szenarien
├── charts.js        # Chart-Daten und Visualisierungen
├── map.js           # Interaktive Handelskarte (Canvas-basiert)
├── styles.css       # Komplettes Styling (Mobile-first)
├── sw.js            # Service Worker für Offline-Fähigkeit
├── manifest.json    # PWA-Manifest
├── Interview.pdf    # Interview-Transkript (Zollbeamter)
├── charts/          # Grafiken (M11, M12, etc.)
├── icons/           # App-Icons (192px, 512px)
└── app/             # Alternative App-Struktur (Subset)
```

---

## 🏗️ Architektur

### Single-Page Application (SPA)

Die App nutzt einen **Screen-basierten Ansatz** ohne Framework:

```javascript
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}
```

Screens:
- `screen-home` – Dashboard mit XP, Level, Daily Challenge
- `screen-haushalt` – Produkte erfassen, Globalisierungs-Index
- `screen-quiz` – 20+ Fragen mit Streak-System
- `screen-simulator` – 4 Spielmodi (inkl. dynamischem Simulator)
- `screen-karte` – Interaktive Weltkarte
- `screen-lexikon` – 15 Begriffe mit Beispielen

### State Management

Zentraler State in `app.js`:

```javascript
let state = {
    xp: 0,
    level: 1,
    dailyQuizCount: 0,
    quizCorrect: 0,
    quizStreak: 0,
    currentQuestion: 0,
    products: [],
    simRole: null,
    simScenarioIndex: 0,
    simMeters: { jobs: 50, prices: 50, trade: 50, treasury: 50 }
};
```

Persistenz via `localStorage`:

```javascript
function saveState() {
    localStorage.setItem('zollcheck_state', JSON.stringify(state));
}
```

---

## 🎮 Dynamischer Weltwirtschafts-Simulator

Der Herzstück-Feature in `simulator.js`.

### Konzept

- **12 Runden** (= 1 Jahr, monatliche Entscheidungen)
- **5 KI-Länder** mit eigener Persönlichkeit
- **Prozedural generierte Szenarien**
- **Beziehungs-System** (-100 bis +100)

### Länder-Persönlichkeiten

| Land | Persönlichkeit | Vergeltungschance | Eskalation |
|------|---------------|-------------------|------------|
| 🇺🇸 USA | `aggressive` | 80% | 1.5x |
| 🇨🇳 China | `strategic` | 60% | 1.2x |
| 🇪🇺 EU | `diplomatic` | 40% | 0.8x |
| 🇯🇵 Japan | `cautious` | 30% | 0.6x |
| 🇬🇧 UK | `opportunistic` | 50% | 1.0x |

### Szenario-Typen

```javascript
const scenarioTemplates = {
    tariffThreat: { ... },      // Land droht mit Zöllen
    tariffImplemented: { ... }, // Zölle wurden eingeführt
    tradeOpportunity: { ... },  // Freihandelsabkommen
    supplyChainCrisis: { ... }, // Lieferketten-Krise
    currencyWar: { ... },       // Währungskonflikt
    allyPressure: { ... }       // Druck von Verbündeten
};
```

### Szenario-Generierung

```javascript
function generateScenario() {
    // 1. Wähle Template (gewichtet nach aktuellem State)
    // 2. Wähle Land (schlechte Beziehung → Konflikt, gute → Chance)
    // 3. Wähle Produkt
    // 4. Generiere Zollsatz (5-50%)
    // 5. Fülle Text-Templates
    return scenario;
}
```

### Reaktions-System

Länder reagieren basierend auf Persönlichkeit:

```javascript
const reactionTemplates = {
    escalate: {
        aggressive: "erhöht die Zölle weiter auf {newTariff}%!",
        diplomatic: "zeigt sich besorgt und schlägt Gespräche vor.",
        // ...
    }
};
```

### Meter-System

3 Hauptmetriken:
- **📈 Wirtschaft** – Exportstärke, BIP, Jobs
- **🌍 Diplomatie** – Internationale Stellung
- **🏠 Innenpolitik** – Zustimmung im Land

### Scoring

```javascript
function calculateFinalScore() {
    const avgMeters = (economy + diplomacy + domestic) / 3;
    const avgRelations = Object.values(relations).reduce((a,b) => a+b) / 5;
    const normalizedRelations = (avgRelations + 100) / 2;
    return Math.round((avgMeters * 0.7) + (normalizedRelations * 0.3));
}
```

---

## 📦 Datenstrukturen

### Quiz-Fragen (`data.js`)

```javascript
const quizQuestions = [
    {
        question: "Was ist ein Schutzzoll?",
        answers: ["...", "...", "...", "..."],
        correct: 1,  // Index der richtigen Antwort
        explanation: "Erklärung..."
    }
];
```

### Produkte für Haushalt

```javascript
const productsDB = {
    kleidung: [
        {
            id: "tshirt",
            name: "T-Shirt",
            emoji: "👕",
            origin: "Bangladesch",
            route: [
                { flag: "🇧🇩", place: "Dhaka (Produktion)" },
                { flag: "🇳🇱", place: "Rotterdam (Hafen)" },
                { flag: "🇩🇪", place: "Deutschland (Verkauf)" }
            ],
            distance: "8.500 km",
            price: {
                production: 2.50,
                transport: 0.80,
                tariff: 0.30,
                retail: 14.99
            },
            tariffNote: "12% Einfuhrzoll auf Textilien aus Bangladesch",
            scenario: "Bei 25% Strafzöllen würde das T-Shirt 17,50€ kosten."
        }
    ],
    elektronik: [...],
    lebensmittel: [...],
    haushalt: [...]
};
```

### Lexikon

```javascript
const lexikonEntries = [
    {
        term: "Schutzzoll",
        definition: "Ein Zoll zum Schutz heimischer Industrien...",
        example: "Die USA erheben 25% Schutzzoll auf Stahl..."
    }
];
```

### Simulator-Szenarien (feste Modi)

```javascript
const simulatorScenarios = {
    minister: [
        {
            title: "Stahl-Krise",
            text: "China exportiert Stahl unter Produktionskosten...",
            choices: [
                {
                    text: "Schutzzölle einführen",
                    effects: { jobs: +10, prices: -10, trade: -15, treasury: +5 },
                    result: "Die Stahlarbeiter sind erleichtert..."
                }
            ]
        }
    ],
    unternehmer: [...],
    verbraucher: [...]
};
```

---

## 🎨 Styling

### Design-System

```css
:root {
    --primary: #1E3A5F;       /* Dunkelblau */
    --secondary: #4ECDC4;     /* Türkis */
    --accent: #FF6B6B;        /* Rot für Warnungen */
    --bg: #F7F9FC;
    --text: #2D3748;
}
```

### Mobile-First

- Viewport: `max-width: 420px` zentriert
- Touch-optimierte Buttons (min. 44px)
- Swipe-freundliche Navigation

### Komponenten

- `.welcome-card` – Hero-Bereich
- `.meter` + `.meter-bar` – Fortschrittsbalken
- `.quiz-card` – Fragen-Container
- `.role-card` – Auswahl-Karten
- `.modal` – Overlay-Dialoge

---

## 📱 PWA-Features

### Service Worker (`sw.js`)

```javascript
const CACHE_NAME = 'zollcheck-v1';
const urlsToCache = [
    '/', '/index.html', '/app.js', '/styles.css', ...
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});
```

### Manifest (`manifest.json`)

```json
{
    "name": "ZollCheck",
    "short_name": "ZollCheck",
    "start_url": "/",
    "display": "standalone",
    "theme_color": "#1E3A5F",
    "background_color": "#F7F9FC"
}
```

### Installierbar

- Add to Home Screen auf iOS/Android
- Standalone-Modus (ohne Browser-UI)
- Offline-Fähigkeit via Cache

---

## 🗺️ Handelskarte (`map.js`)

Canvas-basierte interaktive Weltkarte:

```javascript
window.tradeMap = {
    init() {
        // Canvas setup
        // Zeichne Länder
        // Zeichne Handelsrouten
    },
    highlightCountry(code) { ... },
    showTradeFlow(from, to) { ... }
};
```

---

## 🔧 Erweiterung

### Neue Quiz-Frage hinzufügen

```javascript
// In data.js
quizQuestions.push({
    question: "Deine Frage?",
    answers: ["A", "B", "C", "D"],
    correct: 0,
    explanation: "Erklärung..."
});
```

### Neues Szenario für Simulator

```javascript
// In simulator.js → scenarioTemplates
newScenario: {
    title: "{country} macht X",
    text: "Beschreibung...",
    choices: [
        {
            text: "Option A",
            effects: { diplomacy: -10, economy: +5, domestic: 0 },
            reaction: "escalate",
            resultTemplate: "Ergebnis..."
        }
    ]
}
```

### Neues Land hinzufügen

```javascript
// In simulator.js → countries
brazil: {
    name: "Brasilien",
    flag: "🇧🇷",
    personality: "opportunistic",
    exports: ["Agrar", "Erz", "Fleisch"],
    imports: ["Maschinen", "Elektronik"],
    allies: [],
    rivals: [],
    retaliationChance: 0.5,
    escalationFactor: 1.0
}
```

---

## 📊 XP & Level-System

```javascript
const levels = [0, 100, 300, 600, 1000, 1500, 2000];
const levelNames = [
    'Zoll-Neuling',
    'Handels-Lehrling', 
    'Import-Export-Kenner',
    'Wirtschafts-Profi',
    'Handels-Experte',
    'Zoll-Meister',
    'Zoll-Legende'
];
```

XP-Quellen:
- Quiz richtig: **5 XP** (+2 Bonus bei Streak >3)
- Produkt hinzufügen: **10 XP**
- Lexikon lesen: **3 XP**
- Simulator-Szenario: **10-15 XP**
- Simulation abschließen: **25-75 XP** (je nach Score)

---

## 🚀 Deployment

### K3s Cluster (Production)

Die App läuft als nginx-Container im K3s-Cluster. Ein Init-Container clont das Repo bei jedem Pod-Start:

```yaml
initContainers:
  - name: fetch-app
    image: alpine/git:latest
    command: [sh, -c, "git clone https://github.com/Tonihj77-T/zollcheck.git /app && cp -r /app/* /data/"]
containers:
  - name: nginx
    image: nginx:alpine
    volumeMounts:
      - name: app-files
        mountPath: /usr/share/nginx/html
```

**Deploy-Workflow:**
```bash
git push origin master
ssh root@194.164.207.131 "kubectl rollout restart deployment/tarrific -n tarrific"
```

Live unter: `https://tarrific.tonihj77.de`

### Lokale Entwicklung

```bash
python3 -m http.server 8000
# oder
npx serve .
```

---

## 📝 Lizenz

Erstellt für den econo=me Wettbewerb 2025/26.  
Thema: „Was ZOLL das? Wir und der Welthandel"

---

*Stand: Februar 2026*
