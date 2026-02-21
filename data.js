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
        explanation: "Die Automobilindustrie verzeichnete mit -9,4% den stärksten Exportrückgang in die USA."
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
        explanation: "China überholte 2025 die USA wieder als wichtigster Handelspartner mit 298 Mrd. € Handelsvolumen."
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
    },
    {
        question: "Was versteht man unter 'Dumping'?",
        answers: [
            "Illegale Müllentsorgung",
            "Waren unter Produktionskosten im Ausland verkaufen",
            "Schnelles Entladen von Containern",
            "Abwertung einer Währung"
        ],
        correct: 1,
        explanation: "Dumping liegt vor, wenn Unternehmen Waren im Ausland unter den Herstellungskosten verkaufen, um Marktanteile zu gewinnen."
    },
    {
        question: "Wie viele Mitgliedsländer hat die WTO?",
        answers: [
            "52",
            "98",
            "164",
            "193"
        ],
        correct: 2,
        explanation: "Die WTO hat 164 Mitgliedsländer, die zusammen über 98% des Welthandels abwickeln."
    },
    {
        question: "Was ist der EU-Binnenmarkt?",
        answers: [
            "Ein Markt nur für EU-Bürger",
            "Ein Wirtschaftsraum ohne Zölle zwischen EU-Ländern",
            "Ein Online-Marktplatz der EU",
            "Der größte Supermarkt Europas"
        ],
        correct: 1,
        explanation: "Der EU-Binnenmarkt ist ein Wirtschaftsraum mit freiem Waren-, Dienstleistungs-, Kapital- und Personenverkehr zwischen den 27 EU-Ländern."
    },
    {
        question: "Welches Abkommen regelt den Handel zwischen USA, Kanada und Mexiko?",
        answers: [
            "TTIP",
            "CETA",
            "USMCA",
            "RCEP"
        ],
        correct: 2,
        explanation: "Das USMCA (United States-Mexico-Canada Agreement) ersetzte 2020 das frühere NAFTA-Abkommen."
    },
    {
        question: "Warum sind viele Elektronikprodukte zollfrei?",
        answers: [
            "Weil sie zu kompliziert sind",
            "Wegen des Information Technology Agreement (ITA)",
            "Weil sie in der EU hergestellt werden",
            "Weil sie recycelbar sind"
        ],
        correct: 1,
        explanation: "Das ITA (Information Technology Agreement) der WTO schaffte Zölle auf viele IT-Produkte ab, um den globalen Technologiehandel zu fördern."
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
    },
    {
        term: "Erziehungszoll",
        definition: "Zoll zum Schutz junger oder aufstrebender Industrien, bis sie international wettbewerbsfähig sind. Idee geht auf Friedrich List zurück.",
        example: "Ein Land erhebt Zölle auf importierte Solarmodule, damit die eigene, noch junge Solarindustrie wachsen kann, ohne sofort gegen etablierte Hersteller bestehen zu müssen."
    },
    {
        term: "CBAM (CO\u2082-Grenzausgleich)",
        definition: "EU-Mechanismus, der CO\u2082-Kosten auf Importe aus Ländern ohne vergleichbare Klimapolitik erhebt. Soll Wettbewerbsnachteile für europäische Unternehmen ausgleichen und Carbon Leakage verhindern.",
        example: "Ein Stahlimporteur muss beim Import aus einem Land ohne CO\u2082-Bepreisung CBAM-Zertifikate kaufen, die dem EU-CO\u2082-Preis entsprechen."
    },
    {
        term: "Komparativer Vorteil",
        definition: "Wirtschaftsprinzip nach David Ricardo: L\u00e4nder profitieren vom Handel, wenn sie sich auf G\u00fcter spezialisieren, die sie relativ g\u00fcnstiger herstellen k\u00f6nnen \u2013 selbst wenn ein anderes Land alles billiger produziert.",
        example: "Portugal kann sowohl Wein als auch Tuch herstellen, aber Wein relativ g\u00fcnstiger. England produziert Tuch relativ g\u00fcnstiger. Beide profitieren, wenn sie sich spezialisieren und handeln."
    },
    {
        term: "De-Risking",
        definition: "Strategie zur Verringerung \u00fcberm\u00e4\u00dfiger wirtschaftlicher Abh\u00e4ngigkeiten, insbesondere von China. Kein vollst\u00e4ndiger R\u00fcckzug (Decoupling), sondern gezielte Diversifizierung.",
        example: "Die EU f\u00f6rdert den Aufbau eigener Chipproduktion, um weniger von asiatischen Lieferanten abh\u00e4ngig zu sein."
    },
    {
        term: "Strategische Autonomie",
        definition: "F\u00e4higkeit eines Landes oder B\u00fcndnisses, in Schl\u00fcsselbereichen wie Energie, Technologie und Verteidigung unabh\u00e4ngig handeln zu k\u00f6nnen.",
        example: "Die EU investiert in eigene Batterieproduktion f\u00fcr E-Autos, um nicht vollst\u00e4ndig von chinesischen Herstellern abh\u00e4ngig zu sein."
    },
    {
        term: "Zolleskalation",
        definition: "Stufenweise Erh\u00f6hung von Z\u00f6llen als Vergeltungsma\u00dfnahme zwischen Handelspartnern. F\u00fchrt oft zu einem Handelskrieg.",
        example: "USA erhebt 25% Zoll auf EU-Stahl \u2192 EU antwortet mit Z\u00f6llen auf US-Whiskey \u2192 USA droht mit Autozöllen \u2192 Eskalationsspirale."
    },
    {
        term: "GATT",
        definition: "General Agreement on Tariffs and Trade \u2013 Vorl\u00e4ufer der WTO, 1947 gegr\u00fcndet zur F\u00f6rderung des Freihandels durch schrittweisen Zollabbau in multilateralen Verhandlungsrunden.",
        example: "In der Uruguay-Runde (1986\u20131994) einigten sich 123 L\u00e4nder auf umfassende Zollsenkungen. Das GATT wurde 1995 von der WTO abgel\u00f6st."
    }
];

// === Simulator Scenarios (ERWEITERT) ===
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
                    effects: { jobs: -5, prices: 0, trade: +5, treasury: 0 },
                    result: "Die Verhandlungen ziehen sich... während die Industrie weiter unter Druck steht. Aber immerhin kein Handelskrieg."
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
                    result: "Du triffst US-Unternehmen wie Apple und Harley-Davidson, aber der Handelskrieg eskaliert. Beide Seiten verlieren."
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
        },
        {
            id: 3,
            title: "Stahlkrise",
            text: "Billigstahl aus Asien flutet den Markt. Die Stahlwerke in deinem Land machen Verluste, 25.000 Jobs sind bedroht. Die Gewerkschaft protestiert.",
            choices: [
                {
                    text: "🏭 Anti-Dumping-Zölle von 40%",
                    effects: { jobs: +20, prices: -15, trade: -15, treasury: +10 },
                    result: "Die Stahlwerke atmen auf. Aber alle Industrien, die Stahl verarbeiten (Autos, Maschinen), klagen über höhere Kosten."
                },
                {
                    text: "🤝 EU-weite Lösung anstreben",
                    effects: { jobs: +5, prices: -5, trade: 0, treasury: 0 },
                    result: "Die EU einigt sich auf moderate Zölle. Dauert lange, ist aber international akzeptabler."
                },
                {
                    text: "💰 Umschulungsprogramme für Arbeiter",
                    effects: { jobs: -10, prices: +5, trade: +5, treasury: -10 },
                    result: "Du akzeptierst den Strukturwandel. Jobs gehen verloren, aber du investierst in die Zukunft der Betroffenen."
                },
                {
                    text: "🔬 Forschungsförderung für Spezialstahl",
                    effects: { jobs: +5, prices: 0, trade: +10, treasury: -15 },
                    result: "Du setzt auf Innovation statt Protektionismus. Einige Stahlwerke spezialisieren sich erfolgreich auf Hightech-Stahl."
                }
            ]
        },
        {
            id: 4,
            title: "Agrarsubventionen",
            text: "Die Bauernverbände fordern höhere Agrarsubventionen, weil sie gegen billige Importe aus Südamerika nicht konkurrieren können. Umweltverbände protestieren gegen Subventionen.",
            choices: [
                {
                    text: "🌾 Subventionen erhöhen",
                    effects: { jobs: +10, prices: -5, trade: -10, treasury: -20 },
                    result: "Die Bauern sind zufrieden, aber die Staatskasse leidet. Handelspartner kritisieren dich bei der WTO."
                },
                {
                    text: "🚫 Importquoten für Agrarprodukte",
                    effects: { jobs: +15, prices: -15, trade: -20, treasury: 0 },
                    result: "Lebensmittel werden teurer. Entwicklungsländer, die auf Exporte angewiesen sind, leiden."
                },
                {
                    text: "🌿 Öko-Subventionen statt Mengensubventionen",
                    effects: { jobs: 0, prices: -5, trade: +5, treasury: -10 },
                    result: "Du förderst nachhaltige Landwirtschaft. Einige Bauern stellen um, andere sind unzufrieden."
                },
                {
                    text: "📉 Subventionen kürzen",
                    effects: { jobs: -15, prices: +10, trade: +15, treasury: +15 },
                    result: "Unpopulär bei Bauern, aber gut für den Haushalt und den Freihandel. Viele kleine Höfe geben auf."
                }
            ]
        },
        {
            id: 5,
            title: "Chip-Knappheit",
            text: "90% aller High-End-Chips kommen aus Taiwan. China droht mit einer Blockade. Deine Autoindustrie könnte ohne Chips stillstehen.",
            choices: [
                {
                    text: "🏭 Eigene Chipfabriken subventionieren",
                    effects: { jobs: +10, prices: 0, trade: +5, treasury: -25 },
                    result: "Du investierst Milliarden in heimische Produktion. Es dauert Jahre, bis sie wettbewerbsfähig ist."
                },
                {
                    text: "🤝 Handelsabkommen mit Taiwan stärken",
                    effects: { jobs: 0, prices: 0, trade: +10, treasury: -5 },
                    result: "Du vertiefst die Beziehungen, machst dich aber noch abhängiger. China ist verärgert."
                },
                {
                    text: "🌍 Diversifizieren – auch mit China kooperieren",
                    effects: { jobs: +5, prices: +5, trade: +15, treasury: -5 },
                    result: "Du balancierst zwischen Taiwan und China. Riskant, aber flexibel."
                },
                {
                    text: "♻️ Recycling und Effizienz fördern",
                    effects: { jobs: +5, prices: -5, trade: +5, treasury: -10 },
                    result: "Du setzt auf Kreislaufwirtschaft. Hilft langfristig, löst das akute Problem aber nicht."
                }
            ]
        },
        {
            id: 6,
            title: "Währungsmanipulation?",
            text: "Ein wichtiger Handelspartner hält seine Währung künstlich niedrig, um Exporte zu verbilligen. Deine Industrie beschwert sich über unfairen Wettbewerb.",
            choices: [
                {
                    text: "💱 Ausgleichszölle einführen",
                    effects: { jobs: +10, prices: -10, trade: -20, treasury: +5 },
                    result: "Du gleichst den Währungsvorteil aus, aber der Handelspartner droht mit Gegenmaßnahmen."
                },
                {
                    text: "🏦 Bei IWF Beschwerde einlegen",
                    effects: { jobs: 0, prices: 0, trade: +5, treasury: 0 },
                    result: "Ein langwieriger Prozess beginnt. Die internationale Gemeinschaft diskutiert."
                },
                {
                    text: "💶 Eigene Währung abwerten",
                    effects: { jobs: +15, prices: -20, trade: +10, treasury: -10 },
                    result: "Deine Exporte werden günstiger, aber Importe teurer. Die Inflation steigt."
                },
                {
                    text: "🤷 Akzeptieren – Wettbewerb ist Wettbewerb",
                    effects: { jobs: -10, prices: +10, trade: +10, treasury: 0 },
                    result: "Deine Industrie muss sich anpassen. Einige Unternehmen werden effizienter, andere gehen unter."
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
        },
        {
            id: 2,
            title: "Lieferkettenprobleme",
            text: "Dein wichtigster Zulieferer sitzt in China. Wegen politischer Spannungen werden Lieferungen verzögert und teurer. Die Produktion stockt.",
            choices: [
                {
                    text: "🔄 Zweiten Zulieferer in Vietnam aufbauen",
                    effects: { profit: -10, market: 0, costs: -10, employees: 0 },
                    result: "Die Diversifizierung kostet Zeit und Geld, macht dich aber unabhängiger."
                },
                {
                    text: "🇪🇺 Europäischen Zulieferer suchen",
                    effects: { profit: -15, market: +5, costs: -5, employees: +5 },
                    result: "Teurer, aber kürzere Wege und weniger geopolitisches Risiko. Kunden schätzen 'Made in EU'."
                },
                {
                    text: "📦 Große Lagerbestände aufbauen",
                    effects: { profit: -5, market: 0, costs: -15, employees: 0 },
                    result: "Du hast einen Puffer, aber Kapital ist gebunden und Lagerkosten steigen."
                },
                {
                    text: "🤞 Abwarten und hoffen",
                    effects: { profit: 0, market: -10, costs: 0, employees: -5 },
                    result: "Die Situation entspannt sich nicht. Kunden springen ab wegen Lieferverzögerungen."
                }
            ]
        },
        {
            id: 3,
            title: "Konkurrenz aus Billiglohnländern",
            text: "Ein Konkurrent produziert in Bangladesch für einen Bruchteil deiner Kosten. Deine Preise sind nicht mehr wettbewerbsfähig.",
            choices: [
                {
                    text: "🏭 Auch nach Asien verlagern",
                    effects: { profit: +20, market: +15, costs: +25, employees: -25 },
                    result: "Du senkst die Kosten massiv, aber musst hunderte Mitarbeiter entlassen. Imageschaden möglich."
                },
                {
                    text: "🎨 Auf Premium/Qualität setzen",
                    effects: { profit: +5, market: -10, costs: 0, employees: 0 },
                    result: "Du bedienst eine Nische. Weniger Kunden, aber höhere Margen."
                },
                {
                    text: "🤖 In Automatisierung investieren",
                    effects: { profit: +10, market: +5, costs: +15, employees: -15 },
                    result: "Roboter machen die Arbeit günstiger. Einige Jobs fallen weg, aber der Standort bleibt."
                },
                {
                    text: "📣 'Made in Germany' vermarkten",
                    effects: { profit: 0, market: +10, costs: -5, employees: +5 },
                    result: "Du setzt auf das Qualitätsimage. Funktioniert bei manchen Kunden, nicht bei allen."
                }
            ]
        },
        {
            id: 4,
            title: "Freihandelsabkommen Chance",
            text: "Die EU hat ein neues Freihandelsabkommen mit Kanada. Zölle fallen weg. Ein neuer Markt öffnet sich – aber du brauchst Investitionen.",
            choices: [
                {
                    text: "🚀 Sofort groß investieren",
                    effects: { profit: -15, market: +25, costs: -10, employees: +10 },
                    result: "Du bist First Mover in Kanada. Hohes Risiko, aber wenn's klappt, großer Gewinn."
                },
                {
                    text: "🔍 Erstmal den Markt sondieren",
                    effects: { profit: -5, market: +10, costs: 0, employees: 0 },
                    result: "Du gehst langsam vor. Weniger Risiko, aber Konkurrenten könnten schneller sein."
                },
                {
                    text: "🤝 Lokalen Partner suchen",
                    effects: { profit: -5, market: +15, costs: -5, employees: +5 },
                    result: "Ein kanadisches Partnerunternehmen hilft dir. Du teilst Gewinn und Risiko."
                },
                {
                    text: "❌ Fokus bleibt auf Europa",
                    effects: { profit: 0, market: 0, costs: 0, employees: 0 },
                    result: "Du verpasst die Chance, aber hast keine Risiken. Ob das klug war, zeigt die Zeit."
                }
            ]
        },
        {
            id: 5,
            title: "Rohstoffpreise explodieren",
            text: "Der Preis für deinen wichtigsten Rohstoff hat sich verdoppelt. Deine Produkte werden unrentabel. Was tust du?",
            choices: [
                {
                    text: "💰 Preise an Kunden weitergeben",
                    effects: { profit: 0, market: -15, costs: 0, employees: 0 },
                    result: "Du bleibst profitabel, aber Kunden sind unzufrieden und manche springen ab."
                },
                {
                    text: "🔄 Alternative Materialien testen",
                    effects: { profit: -10, market: +5, costs: +10, employees: 0 },
                    result: "F&E kostet, aber du findest ein günstigeres Material. Die Qualität muss neu bewiesen werden."
                },
                {
                    text: "📉 Gewinnmarge temporär senken",
                    effects: { profit: -20, market: +10, costs: 0, employees: 0 },
                    result: "Du hältst die Kunden, aber die Aktionäre sind unzufrieden. Wie lange hältst du durch?"
                },
                {
                    text: "📊 Langfristige Lieferverträge abschließen",
                    effects: { profit: -5, market: 0, costs: +15, employees: 0 },
                    result: "Du sicherst dir stabile Preise für die Zukunft – aber bindest dich auch langfristig."
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
        },
        {
            id: 2,
            title: "Kleidungskauf",
            text: "Fast Fashion ist günstig, aber ethisch fragwürdig. Ein Fair-Trade-T-Shirt kostet 3x so viel wie bei H&M. Du brauchst neue Klamotten.",
            choices: [
                {
                    text: "👕 Billig bei Fast Fashion kaufen",
                    effects: { budget: +15, satisfaction: +10, ethics: -15 },
                    result: "Viel Kleidung für wenig Geld. Aber die Arbeitsbedingungen in den Fabriken sind miserabel."
                },
                {
                    text: "🌿 Fair Trade kaufen",
                    effects: { budget: -15, satisfaction: +10, ethics: +20 },
                    result: "Teurer, aber du unterstützt faire Löhne und bessere Arbeitsbedingungen."
                },
                {
                    text: "♻️ Second Hand shoppen",
                    effects: { budget: +10, satisfaction: +5, ethics: +15 },
                    result: "Einzigartige Stücke, günstiger Preis, und nachhaltig. Braucht aber Zeit zum Stöbern."
                },
                {
                    text: "🧵 Selbst nähen/reparieren",
                    effects: { budget: +20, satisfaction: -5, ethics: +20 },
                    result: "Am nachhaltigsten! Aber zeitaufwändig und nicht jeder hat das Talent."
                }
            ]
        },
        {
            id: 3,
            title: "Supermarkt-Dilemma",
            text: "Bio-Bananen aus Ecuador kosten doppelt so viel wie normale. Regionale Äpfel sind noch teurer, aber haben weniger CO2-Fußabdruck.",
            choices: [
                {
                    text: "🍌 Billige Bananen kaufen",
                    effects: { budget: +10, satisfaction: +5, ethics: -10 },
                    result: "Am günstigsten, aber Pestizide und schlechte Löhne für Arbeiter."
                },
                {
                    text: "🍌 Bio-Bananen kaufen",
                    effects: { budget: 0, satisfaction: +10, ethics: +10 },
                    result: "Besser für Umwelt und Arbeiter, aber der Transportweg ist immer noch weit."
                },
                {
                    text: "🍎 Regionale Äpfel statt Bananen",
                    effects: { budget: -5, satisfaction: 0, ethics: +15 },
                    result: "Am besten für's Klima! Aber du verzichtest auf exotische Früchte."
                },
                {
                    text: "🍓 Saisonal kaufen, was gerade wächst",
                    effects: { budget: +5, satisfaction: +5, ethics: +20 },
                    result: "Du richtest dich nach der Natur. Abwechslungsreich und nachhaltig."
                }
            ]
        },
        {
            id: 4,
            title: "Auto oder Alternativen?",
            text: "Durch neue CO2-Abgaben wird Autofahren teurer. Dein altes Auto braucht viel Sprit. Was tust du?",
            choices: [
                {
                    text: "🚗 Weiter Auto fahren, Kosten akzeptieren",
                    effects: { budget: -20, satisfaction: +10, ethics: -10 },
                    result: "Bequem, aber teuer und klimaschädlich."
                },
                {
                    text: "🚌 Auf Öffentliche umsteigen",
                    effects: { budget: +15, satisfaction: -10, ethics: +15 },
                    result: "Günstiger und besser fürs Klima, aber weniger flexibel und manchmal nervig."
                },
                {
                    text: "🚲 Fahrrad für kurze Strecken",
                    effects: { budget: +20, satisfaction: +5, ethics: +20 },
                    result: "Gesund, günstig, umweltfreundlich! Aber bei schlechtem Wetter anstrengend."
                },
                {
                    text: "⚡ E-Auto anschaffen",
                    effects: { budget: -25, satisfaction: +15, ethics: +10 },
                    result: "Hohe Anschaffungskosten, aber niedrigere Betriebskosten und kein schlechtes Gewissen."
                }
            ]
        },
        {
            id: 5,
            title: "Streaming oder Kino?",
            text: "Kino-Tickets sind durch höhere Energiekosten 30% teurer geworden. Streaming kostet nur einen Bruchteil davon.",
            choices: [
                {
                    text: "🎬 Weiterhin ins Kino gehen",
                    effects: { budget: -15, satisfaction: +20, ethics: +5 },
                    result: "Das Erlebnis ist unersetzbar! Aber dein Budget für Freizeit schrumpft."
                },
                {
                    text: "📺 Nur noch streamen",
                    effects: { budget: +15, satisfaction: -5, ethics: -5 },
                    result: "Günstiger, aber die Kinos sterben und du verpasst das große Leinwand-Erlebnis."
                },
                {
                    text: "🎭 Kino nur für besondere Filme",
                    effects: { budget: +5, satisfaction: +10, ethics: 0 },
                    result: "Ein guter Kompromiss! Blockbuster im Kino, der Rest zu Hause."
                },
                {
                    text: "📚 Mehr lesen statt schauen",
                    effects: { budget: +20, satisfaction: +5, ethics: +10 },
                    result: "Bücherei ist quasi gratis und Bücher haben keinen CO2-Fußabdruck (fast)."
                }
            ]
        },
        {
            id: 6,
            title: "Fleisch oder Vegan?",
            text: "Durch neue Umweltabgaben kostet Rindfleisch jetzt 40% mehr. Fleischersatzprodukte sind noch ähnlich teuer, werden aber günstiger.",
            choices: [
                {
                    text: "🥩 Weniger, aber gutes Fleisch",
                    effects: { budget: 0, satisfaction: +10, ethics: +10 },
                    result: "Qualität statt Quantität. Besser für Umwelt und Tierwohl."
                },
                {
                    text: "🌱 Komplett auf vegan umstellen",
                    effects: { budget: +5, satisfaction: -5, ethics: +20 },
                    result: "Am besten für's Klima! Aber erfordert Umstellung und neue Rezepte lernen."
                },
                {
                    text: "🍖 Günstigeres Fleisch kaufen",
                    effects: { budget: +10, satisfaction: 0, ethics: -15 },
                    result: "Du sparst, aber Massentierhaltung ist weder gut für Tiere noch fürs Klima."
                },
                {
                    text: "🥬 Flexitarier werden",
                    effects: { budget: +5, satisfaction: +5, ethics: +10 },
                    result: "Manchmal Fleisch, oft vegetarisch. Ein alltagstauglicher Kompromiss."
                }
            ]
        }
    ]
};
