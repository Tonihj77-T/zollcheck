// === Quiz Questions ===
const quizQuestions = [
    {
        question: "Was ist ein Schutzzoll?",
        answers: [
            "Ein Zoll zum Schutz der Umwelt",
            "Ein Zoll zum Schutz heimischer Industrien",
            "Ein Zoll auf Schutzkleidung",
            "Ein Zoll an Naturschutzgebieten"
        ],
        correct: 1,
        explanation: "Schutzzölle werden erhoben, um heimische Industrien vor günstigerer ausländischer Konkurrenz zu schützen."
    },
    {
        question: "Wie viel Prozent der deutschen Wirtschaftsleistung kommt aus Exporten?",
        answers: [
            "Etwa 15%",
            "Etwa 30%",
            "Etwa 47%",
            "Etwa 65%"
        ],
        correct: 2,
        explanation: "Deutschland ist eine der exportstärksten Nationen der Welt. Etwa 47% des BIP stammt aus Exporten."
    },
    {
        question: "Was bedeutet 'Freihandel'?",
        answers: [
            "Handel nur mit befreundeten Ländern",
            "Kostenloser Handel ohne Gewinn",
            "Handel ohne oder mit minimalen Zöllen und Beschränkungen",
            "Handel ohne Steuern"
        ],
        correct: 2,
        explanation: "Freihandel bedeutet internationalen Handel ohne oder mit minimalen staatlichen Eingriffen wie Zöllen oder Quoten."
    },
    {
        question: "Welche deutsche Branche war 2025 am stärksten von den US-Zöllen betroffen?",
        answers: [
            "Pharma",
            "Automobilindustrie",
            "Lebensmittel",
            "Textilien"
        ],
        correct: 1,
        explanation: "Die Automobilindustrie verzeichnete mit -17,5% den stärksten Exportrückgang in die USA."
    },
    {
        question: "Wann wurde die Welthandelsorganisation (WTO) gegründet?",
        answers: [
            "1945",
            "1975",
            "1995",
            "2001"
        ],
        correct: 2,
        explanation: "Die WTO wurde 1995 als Nachfolgerin des GATT gegründet und hat heute 164 Mitgliedsländer."
    },
    {
        question: "Was ist ein Wertzoll?",
        answers: [
            "Ein besonders wertvoller Zoll",
            "Ein Zoll, der als Prozentsatz vom Warenwert berechnet wird",
            "Ein Zoll auf Wertgegenstände",
            "Ein Zoll, der in Gold bezahlt wird"
        ],
        correct: 1,
        explanation: "Ein Wertzoll wird als Prozentsatz vom Warenwert berechnet, z.B. 25% auf den Importwert eines Autos."
    },
    {
        question: "Welches Land war 2025 Deutschlands wichtigster Handelspartner?",
        answers: [
            "USA",
            "Frankreich",
            "China",
            "Niederlande"
        ],
        correct: 2,
        explanation: "China überholte 2025 die USA wieder als wichtigster Handelspartner mit 230,8 Mrd. € Handelsumsatz."
    },
    {
        question: "Was ist ein Handelsdefizit?",
        answers: [
            "Wenn ein Land mehr exportiert als importiert",
            "Wenn ein Land mehr importiert als exportiert",
            "Wenn der Handel komplett stoppt",
            "Wenn die Zölle zu hoch sind"
        ],
        correct: 1,
        explanation: "Ein Handelsdefizit entsteht, wenn ein Land mehr Waren importiert als es exportiert."
    },
    {
        question: "Was bedeutet 'Protektionismus'?",
        answers: [
            "Schutz von Umwelt und Klima",
            "Staatliche Maßnahmen zum Schutz der heimischen Wirtschaft",
            "Schutz von Verbraucherrechten",
            "Internationale Zusammenarbeit"
        ],
        correct: 1,
        explanation: "Protektionismus beschreibt staatliche Maßnahmen wie Zölle oder Quoten zum Schutz der heimischen Wirtschaft vor ausländischer Konkurrenz."
    },
    {
        question: "Aus welchem Land kommen die meisten T-Shirts, die in Deutschland verkauft werden?",
        answers: [
            "China",
            "Indien",
            "Bangladesch",
            "Türkei"
        ],
        correct: 2,
        explanation: "Bangladesch ist einer der größten Textilexporteure der Welt und Hauptlieferant für Fast Fashion in Europa."
    },
    {
        question: "Um wie viel Prozent sind die deutschen Exporte in die USA 2025 eingebrochen?",
        answers: [
            "3,2%",
            "9,4%",
            "15,7%",
            "22,1%"
        ],
        correct: 1,
        explanation: "Die deutschen Exporte in die USA sanken 2025 um 9,4% auf 135,8 Milliarden Euro."
    },
    {
        question: "Was ist das Ziel von 'America First'?",
        answers: [
            "Die USA als erstes Land zu besuchen",
            "Amerikanische Wirtschaftsinteressen zu priorisieren",
            "Amerika als erstes Land zum Mond zu schicken",
            "Amerikanische Musik weltweit zu fördern"
        ],
        correct: 1,
        explanation: "'America First' ist eine Wirtschaftspolitik, die amerikanische Unternehmen und Arbeitsplätze durch Zölle und andere Maßnahmen schützen soll."
    },
    {
        question: "Was ist ein Freihandelsabkommen?",
        answers: [
            "Ein Vertrag für kostenlosen Handel",
            "Ein Vertrag zwischen Ländern zum Abbau von Handelshemmnissen",
            "Ein Abkommen über freie Meinungsäußerung",
            "Ein Vertrag über Reisefreiheit"
        ],
        correct: 1,
        explanation: "Freihandelsabkommen sind Verträge zwischen Ländern, die Zölle und andere Handelshemmnisse reduzieren oder abschaffen."
    },
    {
        question: "Wo werden die meisten iPhones gefertigt?",
        answers: [
            "USA",
            "Japan",
            "China",
            "Südkorea"
        ],
        correct: 2,
        explanation: "Die Endmontage der iPhones findet hauptsächlich in China statt, obwohl das Design aus den USA kommt und Chips aus Taiwan."
    },
    {
        question: "Was ist ein Vergeltungszoll?",
        answers: [
            "Ein Zoll als Strafe für Verbrechen",
            "Ein Zoll als Reaktion auf Zölle eines anderen Landes",
            "Ein Zoll auf vergessene Waren",
            "Ein besonders hoher Zoll"
        ],
        correct: 1,
        explanation: "Vergeltungszölle sind Zölle, die ein Land als Reaktion auf Zollerhöhungen eines anderen Landes einführt – oft der Beginn eines Handelskriegs."
    }
];

// === Products Database ===
const productsDB = {
    kleidung: [
        {
            id: "tshirt",
            name: "T-Shirt",
            emoji: "👕",
            origin: "Bangladesch",
            route: [
                { place: "Baumwollfeld, Indien", flag: "🇮🇳" },
                { place: "Spinnerei, Pakistan", flag: "🇵🇰" },
                { place: "Näherei, Bangladesch", flag: "🇧🇩" },
                { place: "Hafen Hamburg", flag: "🇩🇪" }
            ],
            distance: "8.200 km",
            price: {
                production: 2.50,
                transport: 0.30,
                tariff: 0,
                retail: 19.99
            },
            tariffNote: "Textilien aus Entwicklungsländern sind oft zollfrei (Präferenzsystem)",
            scenario: "Bei 25% Zoll würde dieses T-Shirt ca. 3€ teurer werden."
        },
        {
            id: "jeans",
            name: "Jeans",
            emoji: "👖",
            origin: "Türkei",
            route: [
                { place: "Baumwolle, Usbekistan", flag: "🇺🇿" },
                { place: "Weberei, Türkei", flag: "🇹🇷" },
                { place: "Färberei, Türkei", flag: "🇹🇷" },
                { place: "Einzelhandel, Deutschland", flag: "🇩🇪" }
            ],
            distance: "2.400 km",
            price: {
                production: 15,
                transport: 2,
                tariff: 1.70,
                retail: 79.99
            },
            tariffNote: "12% Zoll auf Jeans aus der Türkei",
            scenario: "Die Türkei hat eine Zollunion mit der EU – trotzdem fallen auf Textilien noch Zölle an."
        },
        {
            id: "sneakers",
            name: "Sneakers",
            emoji: "👟",
            origin: "Vietnam",
            route: [
                { place: "Design, USA", flag: "🇺🇸" },
                { place: "Materialbeschaffung, China", flag: "🇨🇳" },
                { place: "Produktion, Vietnam", flag: "🇻🇳" },
                { place: "Vertrieb, Deutschland", flag: "🇩🇪" }
            ],
            distance: "9.800 km",
            price: {
                production: 25,
                transport: 3,
                tariff: 4.50,
                retail: 129.99
            },
            tariffNote: "Ca. 8-17% Zoll auf Schuhe, je nach Material",
            scenario: "Nike & Adidas haben Produktion nach Vietnam verlagert wegen niedrigerer Löhne und Zölle."
        }
    ],
    elektronik: [
        {
            id: "iphone",
            name: "iPhone",
            emoji: "📱",
            origin: "China (Montage)",
            route: [
                { place: "Design, Cupertino USA", flag: "🇺🇸" },
                { place: "Chips, Taiwan (TSMC)", flag: "🇹🇼" },
                { place: "Display, Südkorea", flag: "🇰🇷" },
                { place: "Montage, Shenzhen China", flag: "🇨🇳" },
                { place: "Verkauf, Deutschland", flag: "🇩🇪" }
            ],
            distance: "12.400 km",
            price: {
                production: 400,
                transport: 15,
                tariff: 0,
                retail: 1199
            },
            tariffNote: "IT-Produkte sind durch das ITA (Information Technology Agreement) meist zollfrei",
            scenario: "Bei 25% US-Zöllen auf chinesische Elektronik würde ein iPhone ~200€ teurer."
        },
        {
            id: "laptop",
            name: "Laptop",
            emoji: "💻",
            origin: "China",
            route: [
                { place: "Prozessor, Taiwan/USA", flag: "🇹🇼" },
                { place: "Display, Südkorea/China", flag: "🇰🇷" },
                { place: "Montage, China", flag: "🇨🇳" },
                { place: "Import, Deutschland", flag: "🇩🇪" }
            ],
            distance: "9.000 km",
            price: {
                production: 500,
                transport: 20,
                tariff: 0,
                retail: 999
            },
            tariffNote: "Computer sind durch WTO-Abkommen zollfrei",
            scenario: "90% aller Laptops werden in China montiert – ein Handelskrieg würde massive Lieferengpässe verursachen."
        },
        {
            id: "kopfhoerer",
            name: "Bluetooth Kopfhörer",
            emoji: "🎧",
            origin: "China",
            route: [
                { place: "Komponenten, verschiedene Länder", flag: "🌍" },
                { place: "Montage, Shenzhen", flag: "🇨🇳" },
                { place: "Versand, Deutschland", flag: "🇩🇪" }
            ],
            distance: "9.000 km",
            price: {
                production: 30,
                transport: 5,
                tariff: 0,
                retail: 149
            },
            tariffNote: "Kopfhörer fallen unter IT-Produkte – zollfrei",
            scenario: "Die meisten Elektronik-Marken lassen in China produzieren, auch 'westliche' Marken."
        }
    ],
    lebensmittel: [
        {
            id: "kaffee",
            name: "Kaffee",
            emoji: "☕",
            origin: "Brasilien",
            route: [
                { place: "Plantage, Minas Gerais", flag: "🇧🇷" },
                { place: "Rösterei, Hamburg", flag: "🇩🇪" },
                { place: "Supermarkt", flag: "🇩🇪" }
            ],
            distance: "9.500 km",
            price: {
                production: 3,
                transport: 0.50,
                tariff: 0,
                retail: 8.99
            },
            tariffNote: "Rohkaffee ist zollfrei – gerösteter Kaffee hat 7,5% Zoll",
            scenario: "Deutschland importiert ~550.000 Tonnen Rohkaffee pro Jahr – wir könnten ihn nicht selbst anbauen."
        },
        {
            id: "banane",
            name: "Bananen",
            emoji: "🍌",
            origin: "Ecuador",
            route: [
                { place: "Plantage, Ecuador", flag: "🇪🇨" },
                { place: "Verschiffung, Guayaquil", flag: "🇪🇨" },
                { place: "Hafen Antwerpen", flag: "🇧🇪" },
                { place: "Reiferei, Deutschland", flag: "🇩🇪" }
            ],
            distance: "10.200 km",
            price: {
                production: 0.15,
                transport: 0.10,
                tariff: 0.11,
                retail: 1.49
            },
            tariffNote: "€114 pro Tonne Zoll – schützt europäische Überseeterritorien",
            scenario: "Bananen aus Afrika/Karibik sind zollfrei (AKP-Abkommen), aus Lateinamerika nicht."
        },
        {
            id: "avocado",
            name: "Avocado",
            emoji: "🥑",
            origin: "Mexiko",
            route: [
                { place: "Farm, Michoacán", flag: "🇲🇽" },
                { place: "Luftfracht", flag: "✈️" },
                { place: "Großmarkt, Deutschland", flag: "🇩🇪" }
            ],
            distance: "9.800 km",
            price: {
                production: 0.30,
                transport: 0.80,
                tariff: 0.08,
                retail: 1.99
            },
            tariffNote: "Ca. 4% Zoll auf Avocados",
            scenario: "Der Avocado-Boom hat in Mexiko zu Wasserknappheit und sogar Kartell-Gewalt geführt."
        }
    ],
    haushalt: [
        {
            id: "moebel",
            name: "IKEA Regal",
            emoji: "🪑",
            origin: "Polen",
            route: [
                { place: "Holz, Skandinavien/Osteuropa", flag: "🇸🇪" },
                { place: "Fertigung, Polen", flag: "🇵🇱" },
                { place: "IKEA Lager, Deutschland", flag: "🇩🇪" }
            ],
            distance: "800 km",
            price: {
                production: 25,
                transport: 3,
                tariff: 0,
                retail: 49.99
            },
            tariffNote: "Innerhalb der EU: Keine Zölle – Binnenmarkt!",
            scenario: "Der EU-Binnenmarkt ist die größte Freihandelszone der Welt mit 450 Mio. Verbrauchern."
        },
        {
            id: "waschmaschine",
            name: "Waschmaschine",
            emoji: "🧺",
            origin: "Deutschland",
            route: [
                { place: "Komponenten, Europa/Asien", flag: "🌍" },
                { place: "Montage, Deutschland", flag: "🇩🇪" },
                { place: "Lieferung", flag: "🇩🇪" }
            ],
            distance: "~500 km",
            price: {
                production: 300,
                transport: 30,
                tariff: 0,
                retail: 549
            },
            tariffNote: "Made in Germany – keine Importzölle",
            scenario: "Deutsche Haushaltsgeräte sind weltweit beliebt – aber auch sie enthalten Teile aus aller Welt."
        },
        {
            id: "spielzeug",
            name: "LEGO Set",
            emoji: "🧱",
            origin: "Tschechien/Ungarn",
            route: [
                { place: "Kunststoff, Deutschland", flag: "🇩🇪" },
                { place: "Produktion, Kladno CZ", flag: "🇨🇿" },
                { place: "Vertrieb, Deutschland", flag: "🇩🇪" }
            ],
            distance: "400 km",
            price: {
                production: 15,
                transport: 1,
                tariff: 0,
                retail: 49.99
            },
            tariffNote: "Produktion in der EU – zollfrei",
            scenario: "LEGO hat bewusst EU-Standorte gewählt um Zollrisiken zu vermeiden."
        }
    ]
};

// === Lexikon Entries ===
const lexikonEntries = [
    {
        term: "Zoll",
        definition: "Eine Abgabe (Steuer), die auf Waren erhoben wird, wenn sie eine Landesgrenze überschreiten – meist beim Import. Zölle können als Prozentsatz vom Warenwert (Wertzoll) oder als fester Betrag pro Menge (Mengenzoll) erhoben werden.",
        example: "Die USA erheben 25% Zoll auf Stahl aus der EU. Ein Container Stahl im Wert von 100.000€ kostet dann 25.000€ extra."
    },
    {
        term: "Freihandel",
        definition: "Ein System des internationalen Handels ohne oder mit minimalen staatlichen Eingriffen wie Zöllen, Quoten oder Subventionen. Ziel ist es, dass Waren und Dienstleistungen frei über Grenzen fließen können.",
        example: "Der EU-Binnenmarkt ist ein Beispiel für Freihandel: Zwischen Deutschland und Frankreich gibt es keine Zölle."
    },
    {
        term: "Protektionismus",
        definition: "Staatliche Maßnahmen zum Schutz der heimischen Wirtschaft vor ausländischer Konkurrenz. Instrumente sind Zölle, Importquoten, Subventionen oder technische Handelshemmnisse.",
        example: "Die USA unter Trump erhöhten Zölle auf Autos, um amerikanische Autohersteller vor europäischer Konkurrenz zu schützen."
    },
    {
        term: "Handelsdefizit",
        definition: "Wenn ein Land mehr Waren importiert als es exportiert. Das Gegenteil ist ein Handelsüberschuss. Die USA haben ein großes Handelsdefizit mit China und Deutschland.",
        example: "Deutschland exportiert Autos im Wert von 30 Mrd.€ in die USA, importiert aber nur Waren für 20 Mrd.€ → Die USA haben ein Defizit von 10 Mrd.€ mit Deutschland."
    },
    {
        term: "WTO",
        definition: "Die Welthandelsorganisation (World Trade Organization) wurde 1995 gegründet und hat 164 Mitglieder. Sie setzt Regeln für den internationalen Handel und schlichtet Handelsstreitigkeiten.",
        example: "Wenn die EU der Meinung ist, dass US-Zölle gegen WTO-Regeln verstoßen, kann sie bei der WTO Beschwerde einlegen."
    },
    {
        term: "Handelskrieg",
        definition: "Eine Eskalation von Handelsstreitigkeiten, bei der Länder gegenseitig Zölle erhöhen oder andere Handelshemmnisse einführen. Oft beginnt er mit Vergeltungszöllen.",
        example: "USA erhöht Zölle auf EU-Stahl → EU erhebt Zölle auf US-Bourbon und Motorräder → USA droht mit Autozöllen → Eskalation."
    },
    {
        term: "Freihandelsabkommen",
        definition: "Ein Vertrag zwischen zwei oder mehr Ländern, der Zölle und andere Handelshemmnisse reduziert oder abschafft. Beispiele: CETA (EU-Kanada), USMCA (USA-Mexiko-Kanada).",
        example: "Durch CETA können kanadische Unternehmen ihre Waren ohne Zölle in die EU verkaufen."
    },
    {
        term: "Schutzzoll",
        definition: "Ein Zoll, der erhoben wird, um heimische Industrien vor ausländischer Konkurrenz zu schützen. Er macht importierte Waren teurer und damit weniger wettbewerbsfähig.",
        example: "China erhebt Zölle auf importierte Autos, um seine eigene Autoindustrie zu schützen und aufzubauen."
    },
    {
        term: "Dumping",
        definition: "Wenn ein Unternehmen Waren im Ausland unter dem Herstellungspreis verkauft, oft um Marktanteile zu gewinnen oder Konkurrenten zu verdrängen. Gilt als unfaire Handelspraxis.",
        example: "China wurde vorgeworfen, Solarmodule unter Produktionskosten nach Europa zu exportieren, um europäische Hersteller aus dem Markt zu drängen."
    },
    {
        term: "Exportüberschuss",
        definition: "Wenn ein Land mehr Waren exportiert als importiert. Deutschland hat traditionell einen hohen Exportüberschuss, was von anderen Ländern kritisiert wird.",
        example: "Deutschland exportierte 2024 Waren für 64,8 Mrd.€ mehr in die USA als es von dort importierte."
    },
    {
        term: "Lieferkette",
        definition: "Der gesamte Weg eines Produkts von den Rohstoffen über die Produktion bis zum Endverbraucher. Moderne Lieferketten sind global und komplex.",
        example: "Ein iPhone: Design in USA → Chips aus Taiwan → Display aus Korea → Montage in China → Verkauf weltweit."
    },
    {
        term: "Vergeltungszoll",
        definition: "Ein Zoll, den ein Land als Reaktion auf Zölle eines anderen Landes einführt. Kann zu einer Eskalation (Handelskrieg) führen.",
        example: "Als die USA Zölle auf EU-Stahl einführten, erhob die EU Vergeltungszölle auf US-Produkte wie Bourbon-Whiskey und Harley-Davidson-Motorräder."
    },
    {
        term: "Binnenmarkt",
        definition: "Ein Wirtschaftsraum ohne Binnengrenzen, in dem Waren, Dienstleistungen, Kapital und Personen frei zirkulieren können. Der EU-Binnenmarkt ist der größte der Welt.",
        example: "Ein Unternehmen in Portugal kann seine Produkte ohne Zölle oder Grenzkontrollen in Finnland verkaufen."
    },
    {
        term: "Meistbegünstigung",
        definition: "Ein WTO-Prinzip: Wenn ein Land einem Handelspartner Zollvergünstigungen gewährt, muss es diese allen WTO-Mitgliedern gewähren (mit Ausnahmen für Freihandelsabkommen).",
        example: "Wenn Deutschland Indien einen Zollsatz von 5% auf Textilien gewährt, muss es diesen Satz auch Brasilien, Japan etc. anbieten."
    },
    {
        term: "America First",
        definition: "Eine von Donald Trump verfolgte Wirtschaftspolitik, die amerikanische Interessen über internationale Kooperation stellt. Beinhaltet Zölle, Neuverhandlung von Handelsabkommen und Druck auf Unternehmen, in den USA zu produzieren.",
        example: "Trump drohte deutschen Autoherstellern mit Zöllen, um sie zur Produktion in den USA zu bewegen."
    }
];

// === Simulator Scenarios ===
const simulatorScenarios = {
    minister: [
        {
            id: 1,
            title: "Solarmodule aus China",
            text: "China überschwemmt den Markt mit billigen Solarmodulen. Deine heimische Solarindustrie droht zu verschwinden. 10.000 Arbeitsplätze sind gefährdet.",
            choices: [
                {
                    text: "🛡️ 25% Schutzzoll einführen",
                    effects: { jobs: +15, prices: -10, trade: -20, treasury: +10 },
                    result: "Die heimische Industrie ist geschützt, aber Solaranlagen werden für Verbraucher teurer. China droht mit Vergeltungszöllen."
                },
                {
                    text: "💰 Subventionen für heimische Hersteller",
                    effects: { jobs: +10, prices: 0, trade: -5, treasury: -15 },
                    result: "Die Industrie wird gestützt, aber es kostet den Staat viel Geld. Langfristig fraglich."
                },
                {
                    text: "🌍 Nichts tun – freier Markt",
                    effects: { jobs: -20, prices: +15, trade: +5, treasury: 0 },
                    result: "Die heimische Industrie schrumpft stark. Dafür sind Solaranlagen günstig und die Energiewende wird beschleunigt."
                },
                {
                    text: "💬 Verhandlungen mit China starten",
                    effects: { jobs: 0, prices: 0, trade: 0, treasury: 0 },
                    result: "Die Verhandlungen ziehen sich... während die Industrie weiter unter Druck steht."
                }
            ]
        },
        {
            id: 2,
            title: "Gegenmaßnahmen der USA",
            text: "Die USA haben 25% Zölle auf deine Autos eingeführt. Deine Autoindustrie verliert massiv Marktanteile. Die Branche fordert Gegenmaßnahmen.",
            choices: [
                {
                    text: "⚔️ Vergeltungszölle auf US-Produkte",
                    effects: { jobs: +5, prices: -10, trade: -25, treasury: +5 },
                    result: "Du triffst US-Unternehmen, aber der Handelskrieg eskaliert. Beide Seiten verlieren."
                },
                {
                    text: "🤝 Verhandlungen suchen",
                    effects: { jobs: -5, prices: 0, trade: +5, treasury: 0 },
                    result: "Die USA zeigen wenig Interesse. Die Verhandlungen sind zäh, aber besser als Eskalation."
                },
                {
                    text: "🌏 Neue Märkte erschließen",
                    effects: { jobs: 0, prices: 0, trade: +10, treasury: -5 },
                    result: "Du investierst in Handelsbeziehungen mit Asien und Südamerika. Langfristig sinnvoll, kurzfristig teuer."
                },
                {
                    text: "🏭 Subventionen für US-Werke",
                    effects: { jobs: -10, prices: 0, trade: +15, treasury: -10 },
                    result: "Deine Unternehmen bauen Werke in den USA. Gut für den Handel, aber Jobs wandern ab."
                }
            ]
        }
    ],
    unternehmer: [
        {
            id: 1,
            title: "Neue Zölle angekündigt",
            text: "Die USA kündigen 15% Zölle auf deine Produkte an. Dein Gewinn in den USA sinkt dramatisch. Was tust du?",
            choices: [
                {
                    text: "💵 Preise erhöhen",
                    effects: { profit: -10, market: -20, costs: 0, employees: 0 },
                    result: "Deine Produkte werden in den USA teurer. Kunden wechseln zur Konkurrenz."
                },
                {
                    text: "🏭 Produktion in die USA verlagern",
                    effects: { profit: -5, market: +10, costs: -15, employees: -10 },
                    result: "Du umgehst die Zölle, aber die Verlagerung kostet und du baust Jobs zuhause ab."
                },
                {
                    text: "🌏 Andere Märkte fokussieren",
                    effects: { profit: -5, market: +5, costs: 0, employees: 0 },
                    result: "Du reduzierst die USA-Abhängigkeit. Neue Märkte brauchen Zeit, sind aber diversifizierter."
                },
                {
                    text: "💡 In Innovation investieren",
                    effects: { profit: -10, market: +15, costs: -5, employees: +5 },
                    result: "Du entwickelst bessere Produkte, die trotz Zöllen konkurrenzfähig sind. Teuer, aber zukunftssicher."
                }
            ]
        }
    ],
    verbraucher: [
        {
            id: 1,
            title: "Smartphone-Kauf",
            text: "Durch neue Zölle ist dein Lieblings-Smartphone 200€ teurer geworden. Du brauchst ein neues Handy. Was machst du?",
            choices: [
                {
                    text: "💸 Trotzdem kaufen",
                    effects: { budget: -20, satisfaction: +15, ethics: 0 },
                    result: "Du hast das beste Gerät, aber dein Budget ist strapaziert."
                },
                {
                    text: "🔄 Günstigere Alternative wählen",
                    effects: { budget: +5, satisfaction: -5, ethics: +5 },
                    result: "Du sparst Geld und entdeckst, dass andere Marken auch gut sind."
                },
                {
                    text: "♻️ Gebrauchtes kaufen",
                    effects: { budget: +15, satisfaction: 0, ethics: +15 },
                    result: "Nachhaltig und günstig! Das Gerät ist etwas älter, funktioniert aber."
                },
                {
                    text: "🔧 Altes Handy reparieren",
                    effects: { budget: +20, satisfaction: -10, ethics: +20 },
                    result: "Am günstigsten und nachhaltigsten, aber du verzichtest auf neue Features."
                }
            ]
        }
    ]
};
