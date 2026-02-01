// === DYNAMISCHER WIRTSCHAFTSSIMULATOR ===

// Länder-Datenbank
const countries = {
    germany: {
        name: "Deutschland",
        flag: "🇩🇪",
        personality: "diplomatic",
        exports: ["Autos", "Maschinen", "Chemie", "Pharma"],
        imports: ["Öl", "Gas", "Elektronik", "Textilien"],
        allies: ["france", "eu"],
        rivals: []
    },
    usa: {
        name: "USA",
        flag: "🇺🇸",
        personality: "aggressive",
        exports: ["Tech", "Flugzeuge", "Agrar", "Waffen"],
        imports: ["Autos", "Elektronik", "Öl", "Textilien"],
        allies: [],
        rivals: ["china"],
        retaliationChance: 0.8,
        escalationFactor: 1.5
    },
    china: {
        name: "China",
        flag: "🇨🇳",
        personality: "strategic",
        exports: ["Elektronik", "Textilien", "Maschinen", "Solarmodule"],
        imports: ["Chips", "Autos", "Luxusgüter", "Agrar"],
        allies: [],
        rivals: ["usa"],
        retaliationChance: 0.6,
        escalationFactor: 1.2
    },
    eu: {
        name: "EU",
        flag: "🇪🇺",
        personality: "diplomatic",
        exports: ["Autos", "Maschinen", "Pharma", "Lebensmittel"],
        imports: ["Öl", "Gas", "Elektronik", "Rohstoffe"],
        allies: ["germany", "france"],
        rivals: [],
        retaliationChance: 0.4,
        escalationFactor: 0.8
    },
    japan: {
        name: "Japan",
        flag: "🇯🇵",
        personality: "cautious",
        exports: ["Autos", "Elektronik", "Robotik", "Maschinen"],
        imports: ["Öl", "Gas", "Agrar", "Rohstoffe"],
        allies: ["usa"],
        rivals: [],
        retaliationChance: 0.3,
        escalationFactor: 0.6
    },
    uk: {
        name: "Großbritannien",
        flag: "🇬🇧",
        personality: "opportunistic",
        exports: ["Finanzen", "Pharma", "Autos", "Whiskey"],
        imports: ["Autos", "Elektronik", "Textilien", "Lebensmittel"],
        allies: ["usa"],
        rivals: [],
        retaliationChance: 0.5,
        escalationFactor: 1.0
    }
};

// Produkt-Kategorien
const products = {
    "Autos": { importance: 0.9, jobs: 800000, icon: "🚗" },
    "Maschinen": { importance: 0.85, jobs: 1000000, icon: "⚙️" },
    "Elektronik": { importance: 0.8, jobs: 300000, icon: "📱" },
    "Chemie": { importance: 0.7, jobs: 450000, icon: "🧪" },
    "Pharma": { importance: 0.75, jobs: 150000, icon: "💊" },
    "Textilien": { importance: 0.5, jobs: 100000, icon: "👕" },
    "Stahl": { importance: 0.8, jobs: 85000, icon: "🏗️" },
    "Agrar": { importance: 0.6, jobs: 600000, icon: "🌾" },
    "Solarmodule": { importance: 0.65, jobs: 50000, icon: "☀️" },
    "Chips": { importance: 0.95, jobs: 50000, icon: "🔲" }
};

// Szenario-Templates
const scenarioTemplates = {
    tariffThreat: {
        title: "{country} droht mit Zöllen",
        text: "{country} kündigt an, {tariff}% Zölle auf {product} aus deinem Land einzuführen. {reason}",
        reasons: [
            "Sie wollen ihre heimische Industrie schützen.",
            "Der Präsident steht unter Druck seiner Wähler.",
            "Es ist eine Reaktion auf frühere Handelsspannungen.",
            "Sie kritisieren dein Handelsüberschuss."
        ],
        choices: [
            {
                text: "⚔️ Mit Vergeltungszöllen drohen",
                effects: { diplomacy: -15, economy: -5, domestic: +10 },
                reaction: "escalate",
                resultTemplate: "Du drohst mit Gegenzöllen. {country} reagiert {reaction}."
            },
            {
                text: "🤝 Verhandlungen anbieten",
                effects: { diplomacy: +5, economy: -5, domestic: -5 },
                reaction: "negotiate",
                resultTemplate: "Du bietest Gespräche an. {country} {reaction}."
            },
            {
                text: "📢 International Druck aufbauen",
                effects: { diplomacy: 0, economy: 0, domestic: +5 },
                reaction: "international",
                resultTemplate: "Du wendest dich an die WTO und verbündete Länder. {reaction}"
            },
            {
                text: "🤷 Abwarten und beobachten",
                effects: { diplomacy: -5, economy: 0, domestic: -10 },
                reaction: "wait",
                resultTemplate: "{country} {reaction}."
            }
        ]
    },
    tariffImplemented: {
        title: "{country} erhebt neue Zölle",
        text: "{country} hat {tariff}% Zölle auf {product} eingeführt! Deine Exporte sind direkt betroffen. Die Industrie fordert Maßnahmen.",
        choices: [
            {
                text: "🛡️ Sofortige Vergeltungszölle",
                effects: { diplomacy: -20, economy: -10, domestic: +15 },
                reaction: "retaliate",
                resultTemplate: "Du schlägst zurück mit {retaliationTariff}% Zöllen auf {retaliationProduct}. Der Handelskrieg eskaliert."
            },
            {
                text: "💰 Betroffene Industrie subventionieren",
                effects: { diplomacy: 0, economy: -15, domestic: +10 },
                reaction: "subsidize",
                resultTemplate: "Du pumpst Milliarden in die {product}-Industrie. Die Staatskasse leidet."
            },
            {
                text: "🌍 Neue Märkte erschließen",
                effects: { diplomacy: +5, economy: -5, domestic: 0 },
                reaction: "diversify",
                resultTemplate: "Du intensivierst Handelsbeziehungen mit anderen Ländern. Langfristig sinnvoll, kurzfristig schmerzhaft."
            },
            {
                text: "⚖️ WTO-Klage einreichen",
                effects: { diplomacy: +10, economy: -5, domestic: -5 },
                reaction: "wto",
                resultTemplate: "Du reichst Klage bei der WTO ein. Das Verfahren dauert Jahre, signalisiert aber Stärke."
            }
        ]
    },
    tradeOpportunity: {
        title: "Handelschance mit {country}",
        text: "{country} bietet ein neues Freihandelsabkommen an. Zölle auf {product} würden wegfallen – aber du müsstest auch deine Märkte öffnen.",
        choices: [
            {
                text: "✅ Abkommen annehmen",
                effects: { diplomacy: +15, economy: +10, domestic: -10 },
                reaction: "accept",
                resultTemplate: "Das Abkommen wird unterzeichnet! Neue Märkte öffnen sich, aber heimische Produzenten sind besorgt."
            },
            {
                text: "📝 Nachverhandeln",
                effects: { diplomacy: 0, economy: 0, domestic: 0 },
                reaction: "renegotiate",
                resultTemplate: "{country} {reaction} auf deine Nachverhandlungswünsche."
            },
            {
                text: "❌ Ablehnen",
                effects: { diplomacy: -10, economy: 0, domestic: +10 },
                reaction: "reject",
                resultTemplate: "Du lehnst ab. {country} ist enttäuscht und wendet sich anderen Partnern zu."
            },
            {
                text: "⏰ Entscheidung verzögern",
                effects: { diplomacy: -5, economy: 0, domestic: 0 },
                reaction: "delay",
                resultTemplate: "Du bittest um Bedenkzeit. {country} wartet ungeduldig."
            }
        ]
    },
    supplyChainCrisis: {
        title: "Lieferketten-Krise",
        text: "Politische Spannungen mit {country} gefährden deine Lieferketten für {product}. 70% deiner Importe kommen von dort.",
        choices: [
            {
                text: "🏭 Heimische Produktion aufbauen",
                effects: { diplomacy: -5, economy: -20, domestic: +15 },
                reaction: "localize",
                resultTemplate: "Du investierst Milliarden in heimische {product}-Produktion. Es dauert Jahre bis sie konkurrenzfähig ist."
            },
            {
                text: "🌏 Lieferanten diversifizieren",
                effects: { diplomacy: 0, economy: -10, domestic: +5 },
                reaction: "diversify",
                resultTemplate: "Du baust Beziehungen zu alternativen Lieferanten auf. Teurer, aber sicherer."
            },
            {
                text: "🤝 Beziehungen zu {country} verbessern",
                effects: { diplomacy: +15, economy: +5, domestic: -10 },
                reaction: "improve",
                resultTemplate: "Du machst Zugeständnisse um die Beziehung zu stabilisieren. Die Opposition kritisiert dich."
            },
            {
                text: "📦 Strategische Reserven aufbauen",
                effects: { diplomacy: 0, economy: -10, domestic: +5 },
                reaction: "stockpile",
                resultTemplate: "Du hortest {product}. Kurzfristig sicher, aber Kapital ist gebunden."
            }
        ]
    },
    currencyWar: {
        title: "Währungskonflikt",
        text: "{country} hält seine Währung künstlich niedrig, was ihre Exporte verbilligt. Deine Industrie kann nicht mithalten.",
        choices: [
            {
                text: "💱 Ausgleichszölle einführen",
                effects: { diplomacy: -15, economy: +5, domestic: +10 },
                reaction: "counterTariff",
                resultTemplate: "Du führst Ausgleichszölle ein. {country} protestiert bei der WTO."
            },
            {
                text: "🏦 Beim IWF Beschwerde einlegen",
                effects: { diplomacy: +5, economy: 0, domestic: 0 },
                reaction: "imf",
                resultTemplate: "Der IWF untersucht den Fall. Es dauert Monate, Ergebnis ungewiss."
            },
            {
                text: "💶 Eigene Währung schwächen",
                effects: { diplomacy: -10, economy: +10, domestic: -15 },
                reaction: "devalue",
                resultTemplate: "Deine Exporte werden günstiger, aber Importe teurer. Die Inflation steigt."
            },
            {
                text: "🔧 In Produktivität investieren",
                effects: { diplomacy: 0, economy: -10, domestic: +5 },
                reaction: "invest",
                resultTemplate: "Du setzt auf Effizienz statt Währungsspiele. Langfristig klug, kurzfristig teuer."
            }
        ]
    },
    allyPressure: {
        title: "Druck von Verbündeten",
        text: "{country} fordert, dass du dich an ihren Sanktionen gegen {targetCountry} beteiligst. Deine Wirtschaft hat aber starke Verbindungen zu {targetCountry}.",
        choices: [
            {
                text: "✊ Sanktionen mittragen",
                effects: { diplomacy: +10, economy: -15, domestic: -5 },
                reaction: "comply",
                resultTemplate: "Du schließt dich den Sanktionen an. {targetCountry} reagiert verärgert, {country} ist zufrieden."
            },
            {
                text: "🚫 Sanktionen ablehnen",
                effects: { diplomacy: -15, economy: +5, domestic: +10 },
                reaction: "refuse",
                resultTemplate: "Du lehnst ab. {country} ist enttäuscht, aber deine Wirtschaftsbeziehungen bleiben intakt."
            },
            {
                text: "⚖️ Kompromiss suchen",
                effects: { diplomacy: 0, economy: -5, domestic: 0 },
                reaction: "compromise",
                resultTemplate: "Du beteiligst dich nur teilweise. Niemand ist richtig zufrieden."
            },
            {
                text: "🕊️ Als Vermittler auftreten",
                effects: { diplomacy: +5, economy: -5, domestic: +5 },
                reaction: "mediate",
                resultTemplate: "Du versuchst zu vermitteln. Riskant, aber könnte alle Seiten zufriedenstellen."
            }
        ]
    }
};

// Reaktions-Templates
const reactionTemplates = {
    escalate: {
        aggressive: "erhöht die Zölle weiter auf {newTariff}%!",
        strategic: "kontert mit gezielten Zöllen auf deine wichtigsten Exporte.",
        diplomatic: "zeigt sich besorgt und schlägt Gespräche vor.",
        cautious: "wartet ab, droht aber mit Konsequenzen.",
        opportunistic: "nutzt die Situation für eigene Verhandlungsvorteile."
    },
    negotiate: {
        aggressive: "lehnt Gespräche ab und beharrt auf den Zöllen.",
        strategic: "akzeptiert Gespräche, stellt aber harte Bedingungen.",
        diplomatic: "stimmt gerne Verhandlungen zu.",
        cautious: "ist vorsichtig optimistisch und sendet Unterhändler.",
        opportunistic: "stimmt zu, versucht aber mehr herauszuholen."
    },
    wait: {
        aggressive: "setzt die Drohung um und führt die Zölle ein!",
        strategic: "wartet ebenfalls ab, aber bereitet Maßnahmen vor.",
        diplomatic: "interpretiert dein Schweigen als Schwäche.",
        cautious: "wartet auch ab, die Spannung bleibt.",
        opportunistic: "testet wie weit sie gehen können."
    }
};

// Nachrichten für Events
const newsTemplates = [
    "📰 Schlagzeile: \"{headline}\"",
    "📺 Eilmeldung: {headline}",
    "🗞️ Wirtschaftsteil: {headline}",
    "📱 Push-Nachricht: {headline}"
];

const headlineTemplates = {
    tariffWar: [
        "Handelskrieg eskaliert: {country} und Deutschland im Zollstreit",
        "Wirtschaft warnt vor Folgen des Konflikts mit {country}",
        "{tariff}%-Zölle: Deutsche Exporte unter Druck"
    ],
    diplomatic: [
        "Entspannung im Handelskonflikt mit {country}",
        "Verhandlungen mit {country} machen Fortschritte",
        "Wirtschaft begrüßt Dialog mit {country}"
    ],
    economic: [
        "Exporteinbruch: {product}-Industrie in der Krise",
        "Arbeitsplätze in Gefahr: {jobs} Jobs bedroht",
        "BIP-Prognose gesenkt wegen Handelsstreit"
    ]
};

// === SPIEL-STATE ===
let simState = {
    turn: 0,
    maxTurns: 12, // 12 Runden = "1 Jahr" (je Runde = 1 Monat)
    
    // Meter
    economy: 50,      // Wirtschaftskraft
    diplomacy: 50,    // Internationale Beziehungen
    domestic: 50,     // Innenpolitische Zustimmung
    
    // Beziehungen zu Ländern (-100 bis +100)
    relations: {
        usa: 30,
        china: 20,
        eu: 60,
        japan: 40,
        uk: 35
    },
    
    // Aktive Zölle
    tariffs: {},      // { "usa_Autos": 25 }
    incomingTariffs: {}, // Zölle gegen uns
    
    // Event-Queue für Reaktionen
    pendingEvents: [],
    
    // Geschichte für Zusammenfassung
    history: []
};

// === FUNKTIONEN ===

function initDynamicSimulator() {
    simState = {
        turn: 0,
        maxTurns: 12,
        economy: 50,
        diplomacy: 50,
        domestic: 50,
        relations: {
            usa: 30,
            china: 20,
            eu: 60,
            japan: 40,
            uk: 35
        },
        tariffs: {},
        incomingTariffs: {},
        pendingEvents: [],
        history: []
    };
}

function generateScenario() {
    // Wähle Szenario-Typ basierend auf aktuellem State
    const templateKeys = Object.keys(scenarioTemplates);
    
    // Gewichtung basierend auf Beziehungen
    let weights = [];
    for (let key of templateKeys) {
        let weight = 1;
        // Mehr Konflikte bei schlechten Beziehungen
        const avgRelation = Object.values(simState.relations).reduce((a,b) => a+b, 0) / 5;
        if (key.includes('tariff') && avgRelation < 30) weight = 2;
        if (key.includes('Opportunity') && avgRelation > 40) weight = 2;
        weights.push(weight);
    }
    
    // Gewichtete Zufallsauswahl
    const totalWeight = weights.reduce((a,b) => a+b, 0);
    let random = Math.random() * totalWeight;
    let selectedTemplate = templateKeys[0];
    for (let i = 0; i < templateKeys.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            selectedTemplate = templateKeys[i];
            break;
        }
    }
    
    const template = scenarioTemplates[selectedTemplate];
    
    // Wähle Land (bevorzuge Länder mit extremen Beziehungen)
    const countryKeys = Object.keys(countries).filter(c => c !== 'germany');
    let selectedCountry;
    
    if (selectedTemplate.includes('tariff') || selectedTemplate.includes('Crisis')) {
        // Für Konflikte: Länder mit schlechter Beziehung
        const sorted = countryKeys.sort((a,b) => simState.relations[a] - simState.relations[b]);
        selectedCountry = sorted[Math.floor(Math.random() * 2)]; // Eines der 2 schlechtesten
    } else {
        // Für Chancen: Länder mit guter Beziehung
        const sorted = countryKeys.sort((a,b) => simState.relations[b] - simState.relations[a]);
        selectedCountry = sorted[Math.floor(Math.random() * 2)];
    }
    
    const country = countries[selectedCountry];
    
    // Wähle Produkt
    const productKeys = Object.keys(products);
    const selectedProduct = productKeys[Math.floor(Math.random() * productKeys.length)];
    const product = products[selectedProduct];
    
    // Generiere Zollsatz (realistisch: 5-50%)
    const tariff = Math.floor(Math.random() * 46) + 5;
    
    // Baue Szenario zusammen
    const scenario = {
        type: selectedTemplate,
        country: selectedCountry,
        countryData: country,
        product: selectedProduct,
        productData: product,
        tariff: tariff,
        title: fillTemplate(template.title, { country: country.name, product: selectedProduct, tariff }),
        text: fillTemplate(template.text, { 
            country: country.name, 
            product: selectedProduct, 
            tariff,
            reason: template.reasons ? template.reasons[Math.floor(Math.random() * template.reasons.length)] : "",
            targetCountry: country.rivals[0] ? countries[country.rivals[0]]?.name : "einem anderen Land"
        }),
        choices: template.choices.map(choice => ({
            ...choice,
            text: fillTemplate(choice.text, { country: country.name, product: selectedProduct }),
            resultTemplate: choice.resultTemplate
        }))
    };
    
    return scenario;
}

function fillTemplate(template, vars) {
    let result = template;
    for (const [key, value] of Object.entries(vars)) {
        result = result.replace(new RegExp(`{${key}}`, 'g'), value);
    }
    return result;
}

function processChoice(scenario, choiceIndex) {
    const choice = scenario.choices[choiceIndex];
    const country = countries[scenario.country];
    
    // Wende Effekte an
    simState.economy = clamp(simState.economy + choice.effects.economy, 0, 100);
    simState.diplomacy = clamp(simState.diplomacy + choice.effects.diplomacy, 0, 100);
    simState.domestic = clamp(simState.domestic + choice.effects.domestic, 0, 100);
    
    // Beziehung zum Land ändern
    const relationChange = choice.effects.diplomacy * (country.personality === 'diplomatic' ? 0.5 : 1);
    simState.relations[scenario.country] = clamp(
        simState.relations[scenario.country] + relationChange, 
        -100, 
        100
    );
    
    // Generiere Reaktion
    const reaction = generateReaction(scenario, choice, country);
    
    // Speichere in History
    simState.history.push({
        turn: simState.turn,
        scenario: scenario.title,
        choice: choice.text,
        result: reaction.text
    });
    
    // Vielleicht Follow-up Event
    if (reaction.followUp) {
        simState.pendingEvents.push(reaction.followUp);
    }
    
    simState.turn++;
    
    return reaction;
}

function generateReaction(scenario, choice, country) {
    const personality = country.personality;
    const reactionType = choice.reaction;
    
    let reactionText = "";
    let followUp = null;
    
    // Basis-Reaktion aus Templates
    if (reactionTemplates[reactionType] && reactionTemplates[reactionType][personality]) {
        reactionText = reactionTemplates[reactionType][personality];
    } else {
        reactionText = "reagiert auf deine Entscheidung.";
    }
    
    // Fülle Variablen
    reactionText = fillTemplate(reactionText, {
        country: country.name,
        newTariff: scenario.tariff + Math.floor(Math.random() * 20) + 5,
        product: scenario.product
    });
    
    // Generiere Ergebnis-Text
    let resultText = fillTemplate(choice.resultTemplate, {
        country: country.name,
        reaction: reactionText,
        product: scenario.product,
        tariff: scenario.tariff,
        retaliationTariff: Math.floor(Math.random() * 30) + 10,
        retaliationProduct: country.exports[Math.floor(Math.random() * country.exports.length)]
    });
    
    // Check für Eskalation
    if (choice.reaction === 'escalate' || choice.reaction === 'retaliate') {
        if (Math.random() < (country.retaliationChance || 0.5)) {
            followUp = {
                type: 'tariffImplemented',
                country: scenario.country,
                product: country.exports[Math.floor(Math.random() * country.exports.length)],
                tariff: Math.floor(scenario.tariff * (country.escalationFactor || 1))
            };
            resultText += " Ein weiterer Konflikt bahnt sich an...";
        }
    }
    
    // Check für Entspannung
    if (choice.reaction === 'negotiate' && personality === 'diplomatic') {
        if (Math.random() > 0.5) {
            simState.relations[scenario.country] += 10;
            resultText += " Die Beziehungen verbessern sich!";
        }
    }
    
    return {
        text: resultText,
        followUp: followUp
    };
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function getRelationEmoji(value) {
    if (value >= 60) return "🤝";
    if (value >= 30) return "😐";
    if (value >= 0) return "😟";
    return "😠";
}

function getRelationText(value) {
    if (value >= 60) return "Gut";
    if (value >= 30) return "Neutral";
    if (value >= 0) return "Angespannt";
    return "Feindlich";
}

function getMeterColor(value) {
    if (value >= 60) return "green";
    if (value >= 40) return "yellow";
    return "red";
}

function calculateFinalScore() {
    const avgMeters = (simState.economy + simState.diplomacy + simState.domestic) / 3;
    const avgRelations = Object.values(simState.relations).reduce((a,b) => a+b, 0) / 5;
    const normalizedRelations = (avgRelations + 100) / 2; // -100..100 -> 0..100
    
    return Math.round((avgMeters * 0.7) + (normalizedRelations * 0.3));
}

function getVerdict(score) {
    if (score >= 70) return { emoji: "🏆", text: "Hervorragend! Du hast dein Land erfolgreich durch turbulente Zeiten navigiert." };
    if (score >= 55) return { emoji: "👍", text: "Solide Arbeit! Es gab Höhen und Tiefen, aber insgesamt gut gemeistert." };
    if (score >= 40) return { emoji: "😐", text: "Gemischte Bilanz. Einige gute Entscheidungen, aber auch Rückschläge." };
    return { emoji: "😬", text: "Schwierige Amtszeit. Die Wirtschaft und Beziehungen haben gelitten." };
}

// Export für app.js
window.dynamicSim = {
    init: initDynamicSimulator,
    generateScenario,
    processChoice,
    getState: () => simState,
    getRelationEmoji,
    getRelationText,
    getMeterColor,
    calculateFinalScore,
    getVerdict,
    countries,
    products
};
