// === LEKTIONEN-CONTENT ===

const LESSONS = {
    // MODUL 1: GRUNDLAGEN
    "1-1": {
        title: "Was sind Zölle?",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "🤔",
                title: "Was ist ein Zoll?",
                text: "Ein Zoll ist eine **Abgabe**, die beim Import oder Export von Waren an der Grenze gezahlt werden muss.",
                highlight: "Quasi eine Steuer auf Waren, die über Grenzen transportiert werden."
            },
            {
                type: "info",
                emoji: "📦",
                title: "Ein Beispiel",
                text: "Du bestellst ein Handy aus China für 500€. Der Zoll beträgt 10%.",
                highlight: "Du zahlst also 500€ + 50€ Zoll = 550€"
            },
            {
                type: "quiz",
                question: "Was ist ein Zoll?",
                options: ["Eine Grenzpolizei", "Eine Abgabe auf Waren", "Ein Freihandelsabkommen", "Eine Währung"],
                correct: 1,
                explanation: "Zölle sind Abgaben (quasi Steuern) auf Waren, die über Grenzen transportiert werden."
            },
            {
                type: "info",
                emoji: "🎯",
                title: "Warum wichtig?",
                text: "Zölle beeinflussen:\n• **Preise** von Produkten\n• **Jobs** in der Wirtschaft\n• **Beziehungen** zwischen Ländern",
                highlight: "Fast alles, was du kaufst, ist davon betroffen!"
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Zoll = Abgabe beim Grenzübertritt von Waren",
                    "Wird in Prozent vom Warenwert berechnet",
                    "Beeinflusst Preise, Jobs und internationale Beziehungen"
                ]
            }
        ]
    },
    "1-2": {
        title: "Geschichte der Zölle",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "🏛️",
                title: "Uralt!",
                text: "Zölle gibt es seit **über 4.000 Jahren**! Schon im alten Ägypten und Mesopotamien wurden Abgaben auf Handelswaren erhoben.",
                highlight: "Eine der ältesten Steuern der Menschheit"
            },
            {
                type: "info",
                emoji: "🏰",
                title: "Mittelalter",
                text: "Jeder kleine Fürst konnte Zölle erheben. Auf einer Reise von Frankfurt nach Köln musste man an **über 30 Zollstationen** zahlen!",
                highlight: "Stell dir vor, alle 10km an der Autobahn zahlen..."
            },
            {
                type: "info",
                emoji: "🇩🇪",
                title: "Deutscher Zollverein",
                text: "**1834** schlossen sich deutsche Staaten zum Zollverein zusammen - keine Zölle mehr untereinander!",
                highlight: "Vorbild für die EU"
            },
            {
                type: "quiz",
                question: "Wann wurde der Deutsche Zollverein gegründet?",
                options: ["1776", "1834", "1945", "1990"],
                correct: 1,
                explanation: "1834 - fast 200 Jahre her! Er war Vorbild für die spätere europäische Integration."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Zölle existieren seit über 4.000 Jahren",
                    "Im Mittelalter: viele kleine Zollgrenzen",
                    "1834: Deutscher Zollverein als Vorbild für EU"
                ]
            }
        ]
    },
    "1-3": {
        title: "Arten von Zöllen",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "📊",
                title: "Wertzoll",
                text: "Ein **Prozentsatz** vom Warenwert.\n\nBeispiel: 10% auf ein 1.000€ Produkt = 100€ Zoll",
                highlight: "Die häufigste Art von Zoll"
            },
            {
                type: "info",
                emoji: "⚖️",
                title: "Mengenzoll",
                text: "Ein **fester Betrag** pro Einheit.\n\nBeispiel: 5€ pro Kilogramm Käse",
                highlight: "Egal wie teuer der Käse ist!"
            },
            {
                type: "info",
                emoji: "🛡️",
                title: "Schutzzoll",
                text: "Extra hohe Zölle, um die **eigene Industrie** vor billigerer ausländischer Konkurrenz zu schützen.",
                highlight: "Trump-Zölle auf Stahl = Schutzzoll"
            },
            {
                type: "quiz",
                question: "Was ist ein Schutzzoll?",
                options: ["Zoll zum Schutz der Umwelt", "Zoll zum Schutz der eigenen Industrie", "Zoll zum Schutz vor Piraten", "Zoll zum Schutz von Daten"],
                correct: 1,
                explanation: "Schutzzölle sollen die heimische Wirtschaft vor ausländischer Konkurrenz schützen."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Wertzoll: Prozent vom Warenwert (häufigste Art)",
                    "Mengenzoll: Fester Betrag pro Stück/Kilo",
                    "Schutzzoll: Hoher Zoll zum Schutz der eigenen Industrie"
                ]
            }
        ]
    },
    "1-4": {
        title: "Wer erhebt Zölle?",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "🇪🇺",
                title: "In der EU: Gemeinsam",
                text: "Die **EU** legt die Zölle fest - nicht Deutschland allein. Alle EU-Länder haben die gleichen Außenzölle.",
                highlight: "Einheitlicher Markt mit 450 Mio. Menschen"
            },
            {
                type: "info",
                emoji: "🏢",
                title: "Der Zoll",
                text: "In Deutschland kontrolliert der **Zoll** (Bundesbehörde) die Einfuhren und kassiert die Abgaben.",
                highlight: "Über 40.000 Zollbeamte in Deutschland"
            },
            {
                type: "info",
                emoji: "🌍",
                title: "WTO",
                text: "Die **Welthandelsorganisation** (WTO) setzt Regeln für den globalen Handel. 164 Länder sind Mitglied.",
                highlight: "Quasi die UNO für Handel"
            },
            {
                type: "quiz",
                question: "Wer legt in Deutschland die Zollsätze fest?",
                options: ["Die Bundesregierung allein", "Die EU gemeinsam", "Jedes Bundesland selbst", "Die USA"],
                correct: 1,
                explanation: "Die EU legt gemeinsame Außenzölle fest - Deutschland kann nicht allein entscheiden."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "EU legt Zölle gemeinsam fest",
                    "Deutscher Zoll kontrolliert und kassiert",
                    "WTO setzt globale Handelsregeln"
                ]
            }
        ]
    },

    // MODUL 2: DEUTSCHLAND & HANDEL
    "2-1": {
        title: "Exportweltmeister?",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "🏆",
                title: "Fast!",
                text: "Deutschland war lange **Exportweltmeister**. Heute Platz 3 hinter China und USA.",
                highlight: "2025: 1.655 Mrd € Exporte"
            },
            {
                type: "info",
                emoji: "📈",
                title: "Export-Überschuss",
                text: "Deutschland **exportiert mehr als es importiert**. Das nennt man Handelsüberschuss.",
                highlight: "+284 Mrd € Überschuss (2025)"
            },
            {
                type: "quiz",
                question: "Welchen Platz belegt Deutschland bei den Exporten?",
                options: ["Platz 1", "Platz 2", "Platz 3", "Platz 5"],
                correct: 2,
                explanation: "Platz 3 hinter China und USA - aber immer noch eine Export-Großmacht!"
            },
            {
                type: "info",
                emoji: "⚠️",
                title: "Aber Vorsicht",
                text: "Große Abhängigkeit vom Export macht **verwundbar**. Wenn andere Länder Zölle erheben, leidet Deutschland besonders.",
                highlight: "Trump-Zölle: -9,4% Exporte in die USA"
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Deutschland: Platz 3 der Exportnationen",
                    "Handelsüberschuss von ~284 Mrd €",
                    "Hohe Exportabhängigkeit = hohes Risiko bei Zöllen"
                ]
            }
        ]
    },
    "2-2": {
        title: "Handelspartner",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "🇺🇸",
                title: "USA: Platz 1",
                text: "Die **USA** sind Deutschlands wichtigster Handelspartner außerhalb der EU.\n\n**253 Mrd €** Handelsvolumen",
                highlight: "Hauptexport: Autos, Maschinen, Pharma"
            },
            {
                type: "info",
                emoji: "🇨🇳",
                title: "China: Platz 2",
                text: "**China** ist größter Lieferant UND Kunde.\n\n**298 Mrd €** Handelsvolumen",
                highlight: "Deutschland importiert mehr aus China als es exportiert"
            },
            {
                type: "info",
                emoji: "🇪🇺",
                title: "EU: Der größte Partner",
                text: "Zusammen sind die **EU-Länder** der mit Abstand wichtigste Partner.\n\nFrankreich, Niederlande, Polen, Italien...",
                highlight: "~60% des deutschen Handels = innerhalb der EU"
            },
            {
                type: "quiz",
                question: "Deutschlands wichtigster Handelspartner außerhalb der EU?",
                options: ["China", "USA", "UK", "Japan"],
                correct: 1,
                explanation: "Die USA sind der wichtigste Einzelpartner außerhalb der EU!"
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "USA: wichtigster Partner außerhalb EU",
                    "China: größtes Handelsvolumen gesamt",
                    "EU-Länder zusammen: ~60% des Handels"
                ]
            }
        ]
    },
    "2-3": {
        title: "Made in Germany",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "🚗",
                title: "Autos, Autos, Autos",
                text: "**Fahrzeuge** sind Deutschlands Exportschlager Nr. 1!\n\nVW, Mercedes, BMW, Audi...",
                highlight: "~250 Mrd € pro Jahr"
            },
            {
                type: "info",
                emoji: "⚙️",
                title: "Maschinen",
                text: "Deutsche **Maschinen** sind weltweit gefragt. Von der Druckmaschine bis zur Fabrikanlage.",
                highlight: "~200 Mrd € pro Jahr"
            },
            {
                type: "info",
                emoji: "💊",
                title: "Chemie & Pharma",
                text: "**Chemische Produkte** und **Medikamente** sind der drittgrößte Exportbereich.",
                highlight: "BioNTech-Impfstoff = Made in Germany"
            },
            {
                type: "quiz",
                question: "Was exportiert Deutschland am meisten?",
                options: ["Lebensmittel", "Autos", "Textilien", "Möbel"],
                correct: 1,
                explanation: "Fahrzeuge und Autoteile sind der größte Exportposten Deutschlands."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Platz 1: Fahrzeuge (~250 Mrd €)",
                    "Platz 2: Maschinen (~200 Mrd €)",
                    "Platz 3: Chemie & Pharma"
                ]
            }
        ]
    },
    "2-4": {
        title: "Handelsbilanz",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "⚖️",
                title: "Export - Import = Bilanz",
                text: "Die **Handelsbilanz** zeigt, ob ein Land mehr exportiert oder importiert.",
                highlight: "Plus = Überschuss, Minus = Defizit"
            },
            {
                type: "info",
                emoji: "✅",
                title: "Deutschland: Überschuss",
                text: "Deutschland hat fast immer einen **Überschuss** - wir verkaufen mehr ans Ausland als wir kaufen.",
                highlight: "+284 Mrd € (2025)"
            },
            {
                type: "info",
                emoji: "❌",
                title: "USA: Defizit",
                text: "Die USA haben ein **Defizit** - sie kaufen mehr aus dem Ausland als sie verkaufen.",
                highlight: "Deshalb wollen sie Zölle erhöhen!"
            },
            {
                type: "quiz",
                question: "Was bedeutet ein Handelsbilanz-Überschuss?",
                options: ["Mehr Import als Export", "Mehr Export als Import", "Gleich viel Import und Export", "Keine Zölle"],
                correct: 1,
                explanation: "Überschuss = mehr Export als Import. Deutschland verdient mehr am Ausland als umgekehrt."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Handelsbilanz = Exporte minus Importe",
                    "Deutschland: Überschuss (~284 Mrd €)",
                    "USA: Defizit - Grund für Trump-Zölle"
                ]
            }
        ]
    },
    "2-5": {
        title: "Exportquote im Wandel",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "📊",
                title: "Was ist die Exportquote?",
                text: "Die **Exportquote** zeigt, wie viel Prozent der Wirtschaftsleistung (BIP) exportiert wird.",
                highlight: "Je höher, desto abhängiger vom Ausland"
            },
            {
                type: "chart",
                chartId: "exportquote",
                title: "Deutschlands Exportquote 1991-2023",
                description: "Anteil der Exporte am Bruttoinlandsprodukt in Prozent:"
            },
            {
                type: "info",
                emoji: "📈",
                title: "Rasanter Anstieg",
                text: "1991 lag die Quote bei **25,7%**. Bis 2008 stieg sie auf **48%** — fast die Hälfte der Wirtschaft!",
                highlight: "Von 1/4 auf fast 1/2 in 17 Jahren"
            },
            {
                type: "info",
                emoji: "💥",
                title: "Finanzkrise 2008",
                text: "Der **Höchststand 2008** wurde durch die Finanzkrise abrupt beendet. Die Quote fiel auf 42,5%.",
                highlight: "Welthandel brach kurzzeitig ein"
            },
            {
                type: "info",
                emoji: "🔄",
                title: "Heute: Stabil hoch",
                text: "Aktuell liegt die Quote bei etwa **43%** — immer noch sehr hoch im internationalen Vergleich!",
                highlight: "USA: nur ~12%, Frankreich: ~30%"
            },
            {
                type: "quiz",
                question: "Wann erreichte Deutschlands Exportquote ihren Höchststand?",
                options: ["1991", "2000", "2008", "2023"],
                correct: 2,
                explanation: "2008 erreichte die Exportquote 48% — dann kam die Finanzkrise."
            },
            {
                type: "quiz",
                question: "Wie hoch ist Deutschlands Exportquote aktuell ungefähr?",
                options: ["25%", "35%", "43%", "55%"],
                correct: 2,
                explanation: "Die Exportquote liegt bei etwa 43% — fast die Hälfte der Wirtschaft hängt vom Export ab!"
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Exportquote: Anteil der Exporte am BIP",
                    "1991: 25,7% → 2008: 48% (Höchststand)",
                    "Heute: ~43% — hohe Auslandsabhängigkeit",
                    "Deutlich höher als USA (12%) oder Frankreich (30%)"
                ]
            }
        ]
    },
    "2-6": {
        title: "Top-Handelspartner 2024",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🌍",
                title: "Mit wem handelt Deutschland?",
                text: "Deutschland ist eine der größten **Handelsnationen** der Welt. Aber wer sind die wichtigsten Partner?",
                highlight: "2024: Neue Zahlen vom Statistischen Bundesamt"
            },
            {
                type: "chart",
                chartId: "handelspartner",
                title: "Deutschlands Top-8 Handelspartner",
                description: "Exporte und Importe in Milliarden Euro (2024):"
            },
            {
                type: "info",
                emoji: "🇺🇸",
                title: "USA: Export-Champion",
                text: "Die USA sind der **größte Abnehmer** deutscher Waren: **161,1 Mrd €** Exporte vs. nur 95,4 Mrd € Importe.",
                highlight: "Handelsüberschuss: +65,7 Mrd €"
            },
            {
                type: "info",
                emoji: "🇨🇳",
                title: "China: Größter Lieferant",
                text: "Bei China ist es umgekehrt: Deutschland **importiert mehr** (163,4 Mrd €) als es exportiert (97,0 Mrd €).",
                highlight: "Handelsdefizit: -66,4 Mrd €"
            },
            {
                type: "info",
                emoji: "🇪🇺",
                title: "EU-Nachbarn dominieren",
                text: "Niederlande, Frankreich, Polen, Italien, Österreich — die **EU-Partner** machen den Großteil des Handels aus.",
                highlight: "~60% des deutschen Handels ist innereuropäisch"
            },
            {
                type: "info",
                emoji: "🇬🇧",
                title: "UK nach Brexit",
                text: "Das **Vereinigte Königreich** ist abgerutscht: Nur noch Platz 8 mit 76,2 Mrd € Exporten.",
                highlight: "Vor Brexit war UK unter den Top 5"
            },
            {
                type: "quiz",
                question: "Mit welchem Land hat Deutschland das größte Handelsdefizit?",
                options: ["USA", "China", "Frankreich", "UK"],
                correct: 1,
                explanation: "Mit China: Deutschland importiert 66 Mrd € mehr aus China als es dorthin exportiert."
            },
            {
                type: "quiz",
                question: "Wie viel Prozent des deutschen Handels ist innereuropäisch?",
                options: ["30%", "45%", "60%", "80%"],
                correct: 2,
                explanation: "Etwa 60% des deutschen Handels findet mit anderen EU-Ländern statt."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "USA: größter Exportmarkt (161 Mrd €)",
                    "China: größter Lieferant (163 Mrd €)",
                    "EU-Länder: ~60% des Gesamthandels",
                    "UK nach Brexit abgerutscht auf Platz 8"
                ]
            }
        ]
    },

    // MODUL 3: AKTUELLE KONFLIKTE
    "3-1": {
        title: "Trump-Zölle 2025/26",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🇺🇸",
                title: "America First 2.0",
                text: "Nach seiner Wiederwahl 2024 hat Trump massive **Zölle auf EU-Produkte** eingeführt.",
                highlight: "Ziel: US-Arbeitsplätze schützen"
            },
            {
                type: "info",
                emoji: "🎭",
                title: "Das Zoll-Chaos",
                text: "Trumps Taktik: **Ankündigen, Zurücknehmen, Neu verhandeln**. Börsianer nennen das den 'Taco-Trade' — sie wetten darauf, dass Trump einknickt.",
                highlight: "Effektive Zölle Ende 2025: China 37,7%, EU 8,6%"
            },
            {
                type: "info",
                emoji: "🚗",
                title: "15% auf Autos",
                text: "Europäische **Autos** werden mit **15% Zoll** belegt. Das macht einen BMW 45.000€ → ~52.000€ teurer!",
                highlight: "Deutsche Autoexporte in die USA: -9,4%"
            },
            {
                type: "info",
                emoji: "🏝️",
                title: "Grönland-Drohung (Jan 2026)",
                text: "Trump drohte **8 EU-Ländern mit 25% Zöllen** falls sie seinen Grönland-Kauf nicht unterstützen. Die Drohung wurde später fallengelassen.",
                highlight: "Typisch Trump: Maximaldruck, dann Deal"
            },
            {
                type: "quiz",
                question: "Was ist der 'Taco-Trade'?",
                options: ["Zölle auf mexikanisches Essen", "Börsianer wetten auf Trumps Rückzieher", "Ein Freihandelsabkommen", "Illegaler Handel"],
                correct: 1,
                explanation: "'Trump always chickens out' (TACO) - Händler wetten darauf, dass Trump seine Zoll-Drohungen zurücknimmt."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Trump 2.0 = Zoll-Chaos mit ständigem Hin und Her",
                    "Effektiv: China ~38%, EU ~9% Zölle",
                    "Taktik: Maximaldruck → Verhandeln → Deal"
                ]
            }
        ]
    },
    "3-5": {
        title: "Liberation Day (April 2025)",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "🗽",
                title: "Liberation Day",
                text: "Am **2. April 2025** verkündete Trump den 'Liberation Day' — den Tag der 'wirtschaftlichen Befreiung' Amerikas.",
                highlight: "Der radikalste Zoll-Tag in US-Geschichte"
            },
            {
                type: "info",
                emoji: "🌍",
                title: "10% auf ALLES",
                text: "Trump führte einen **Basiszoll von 10%** auf ALLE Importe ein — egal aus welchem Land.",
                highlight: "Tritt am 5. April 2025 in Kraft"
            },
            {
                type: "chart",
                chartId: "trumpZoelle",
                title: "Länderspezifische Strafzölle",
                description: "Zusätzlich zum 10% Basiszoll erheben die USA Strafzölle auf bestimmte Länder:"
            },
            {
                type: "info",
                emoji: "🇨🇳",
                title: "China am härtesten",
                text: "**China** wird mit **34% Zusatzzoll** belegt — insgesamt also 44% auf chinesische Waren!",
                highlight: "Begründung: 'Jahrzehnte unfairer Handelspraktiken'"
            },
            {
                type: "info",
                emoji: "🇪🇺",
                title: "EU: 20% Strafzoll",
                text: "Die **EU** erhält **20% Zusatzzoll**. Trump nennt die EU 'eine der schlimmsten Handelsbarrieren'.",
                highlight: "Gesamt: 10% + 20% = 30% auf EU-Waren"
            },
            {
                type: "info",
                emoji: "🚗",
                title: "Autos: 25%",
                text: "Auf **alle importierten Autos** gilt ein Spezialzoll von **25%** — egal aus welchem Land.",
                highlight: "Ein VW Golf wird ~10.000€ teurer in den USA"
            },
            {
                type: "quiz",
                question: "Wie hoch ist der Basiszoll ab 'Liberation Day'?",
                options: ["5%", "10%", "20%", "25%"],
                correct: 1,
                explanation: "Der Basiszoll beträgt 10% auf ALLE Importe — plus länderspezifische Zusatzzölle."
            },
            {
                type: "quiz",
                question: "Welches Land hat den höchsten Zusatzzoll bekommen?",
                options: ["EU (20%)", "Japan (24%)", "China (34%)", "Schweiz (31%)"],
                correct: 2,
                explanation: "China erhält 34% Zusatzzoll — insgesamt 44% auf chinesische Waren."
            },
            {
                type: "info",
                emoji: "📅",
                title: "Timeline",
                text: "**2. April**: Ankündigung\n**5. April**: 10% Basiszoll aktiv\n**9. April**: Länderspezifische Zölle aktiv",
                highlight: "Nur 7 Tage von Ankündigung bis volle Umsetzung"
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Liberation Day: 2. April 2025",
                    "10% Basiszoll auf ALLE Importe",
                    "Zusatzzölle: China 34%, EU 20%, Japan 24%",
                    "Autos: 25% Spezialzoll",
                    "Umsetzung in nur 7 Tagen"
                ]
            }
        ]
    },
    "3-6": {
        title: "Protektionismus-Welle",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🌊",
                title: "Eine globale Welle",
                text: "Seit 2018 erleben wir einen **massiven Anstieg** von Handelsbeschränkungen weltweit.",
                highlight: "Von 454 (2009) auf 3.247 (2024) neue Maßnahmen pro Jahr!"
            },
            {
                type: "chart",
                chartId: "importbeschraenkungen",
                title: "Importbeschränkungen explodieren",
                description: "Neue protektionistische Maßnahmen pro Jahr weltweit:"
            },
            {
                type: "info",
                emoji: "🔴",
                title: "2018: Der Wendepunkt",
                text: "Als Trump 2018 seinen ersten **Handelskrieg** startete, sprang die Zahl von 1.049 auf 1.478 neue Beschränkungen.",
                highlight: "Seitdem hat sie sich mehr als verdoppelt!"
            },
            {
                type: "info",
                emoji: "🦠",
                title: "Corona verstärkt den Trend",
                text: "2020 kamen **2.031 neue Beschränkungen** dazu — Länder schützten ihre Märkte in der Krise.",
                highlight: "Masken, Medikamente, Lebensmittel: alles wurde kontrolliert"
            },
            {
                type: "info",
                emoji: "📈",
                title: "2024: Neuer Rekord",
                text: "**3.247** neue Handelsbeschränkungen in einem Jahr — mehr als je zuvor.",
                highlight: "Das ist das 7-fache von 2009!"
            },
            {
                type: "quiz",
                question: "Wann begann der starke Anstieg der Handelsbeschränkungen?",
                options: ["2009", "2014", "2018", "2020"],
                correct: 2,
                explanation: "2018 startete Trump seinen ersten Handelskrieg — seitdem explodieren die Zahlen."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Handelsbeschränkungen: von 454 (2009) auf 3.247 (2024)",
                    "Wendepunkt 2018: Trumps erster Handelskrieg",
                    "Corona 2020 verstärkte den Trend",
                    "Protektionismus nimmt weltweit zu"
                ]
            }
        ]
    },
    "3-2": {
        title: "USA vs. China",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🥊",
                title: "Handelskrieg",
                text: "Seit 2018 liefern sich USA und China einen **Handelskrieg** mit immer höheren Zöllen.",
                highlight: "Die zwei größten Volkswirtschaften der Welt"
            },
            {
                type: "info",
                emoji: "📱",
                title: "Technik im Fokus",
                text: "Es geht um **Technologie-Vorherrschaft**: Chips, 5G, KI, Elektroautos...",
                highlight: "USA verbieten Chip-Exporte nach China"
            },
            {
                type: "info",
                emoji: "🇩🇪",
                title: "Deutschland mittendrin",
                text: "Deutsche Firmen sind **zwischen den Fronten**: China ist Kunde UND Konkurrent.",
                highlight: "VW verkauft 40% seiner Autos in China!"
            },
            {
                type: "quiz",
                question: "Worum geht es im USA-China Handelskrieg hauptsächlich?",
                options: ["Lebensmittel", "Textilien", "Technologie", "Tourismus"],
                correct: 2,
                explanation: "Der Kern ist der Kampf um Technologie-Vorherrschaft: Chips, 5G, KI, Elektroautos."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "USA vs. China: Handelskrieg seit 2018",
                    "Fokus auf Technologie-Vorherrschaft",
                    "Deutschland zwischen den Fronten"
                ]
            }
        ]
    },
    "3-3": {
        title: "Brexit-Folgen",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🇬🇧",
                title: "Bye bye EU",
                text: "2020 hat das **UK die EU verlassen**. Seitdem gibt es Zollkontrollen an der Grenze.",
                highlight: "Vorher: freier Warenverkehr"
            },
            {
                type: "info",
                emoji: "📝",
                title: "Papierkram",
                text: "Jetzt braucht jede Lieferung **Zolldokumente**. Das kostet Zeit und Geld.",
                highlight: "Staus an den Häfen, leere Supermarktregale"
            },
            {
                type: "info",
                emoji: "🤝",
                title: "TCA-Abkommen",
                text: "Das **TCA-Abkommen** verhindert Zölle auf die meisten Waren - aber der Papierkram bleibt.",
                highlight: "0% Zoll, aber viel Bürokratie"
            },
            {
                type: "quiz",
                question: "Gibt es seit dem Brexit Zölle zwischen UK und EU?",
                options: ["Ja, auf alles 25%", "Nein, durch das TCA-Abkommen", "Nur auf Lebensmittel", "Nur auf Autos"],
                correct: 1,
                explanation: "Das TCA-Abkommen verhindert Zölle - aber Zollkontrollen und Papierkram gibt es trotzdem."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Brexit 2020 = UK raus aus EU",
                    "TCA-Abkommen: 0% Zölle",
                    "Aber: viel Bürokratie und Kontrollen"
                ]
            }
        ]
    },
    "3-4": {
        title: "EU-Handelsabkommen",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🌍",
                title: "Freihandel statt Zölle",
                text: "Die EU schließt **Freihandelsabkommen** ab, um Zölle abzubauen.",
                highlight: "Abkommen mit Japan, Kanada, Südkorea..."
            },
            {
                type: "info",
                emoji: "🇯🇵",
                title: "EU-Japan (2019)",
                text: "Größtes Handelsabkommen der Welt! **Fast alle Zölle** zwischen EU und Japan wurden abgeschafft.",
                highlight: "Japanische Autos & Elektronik günstiger"
            },
            {
                type: "info",
                emoji: "🇧🇷",
                title: "Mercosur (pending)",
                text: "Abkommen mit **Südamerika** (Brasilien, Argentinien...) ist ausverhandelt, aber noch nicht ratifiziert.",
                highlight: "Streit um Umweltschutz im Amazonas"
            },
            {
                type: "quiz",
                question: "Was bewirkt ein Freihandelsabkommen?",
                options: ["Zölle werden erhöht", "Zölle werden abgebaut", "Grenzen werden geschlossen", "Währungen werden vereinheitlicht"],
                correct: 1,
                explanation: "Freihandelsabkommen bauen Zölle ab und erleichtern den Handel zwischen den Ländern."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "EU schließt Freihandelsabkommen",
                    "Wichtige Partner: Japan, Kanada, Südkorea",
                    "Mercosur: noch nicht in Kraft"
                ]
            }
        ]
    },

    // MODUL 4: AUSWIRKUNGEN
    "4-1": {
        title: "Preise & Verbraucher",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "💰",
                title: "Du zahlst die Zölle!",
                text: "Zölle werden auf **Endpreise aufgeschlagen**. Der Verbraucher zahlt am Ende!",
                highlight: "iPhone aus China + 25% Zoll = teurer"
            },
            {
                type: "info",
                emoji: "🛒",
                title: "Beispiel: Trump-Zölle",
                text: "Durch die Trump-Zölle auf China wurden in den USA **Waschmaschinen 12% teurer**.",
                highlight: "~100$ mehr pro Waschmaschine"
            },
            {
                type: "info",
                emoji: "🔄",
                title: "Weniger Auswahl",
                text: "Wenn Importe zu teuer werden, verschwinden manche Produkte aus den **Regalen**.",
                highlight: "Brexit: leere Supermarktregale in UK"
            },
            {
                type: "quiz",
                question: "Wer zahlt am Ende die Zölle?",
                options: ["Die Regierung", "Die Unternehmen", "Die Verbraucher", "Niemand"],
                correct: 2,
                explanation: "Unternehmen schlagen Zölle auf ihre Preise auf - am Ende zahlt der Verbraucher."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Zölle erhöhen Endpreise für Verbraucher",
                    "Beispiel: Waschmaschinen +12% durch Trump-Zölle",
                    "Weniger Auswahl bei hohen Zöllen"
                ]
            }
        ]
    },
    "4-2": {
        title: "Jobs & Wirtschaft",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "👷",
                title: "Geschützte Jobs?",
                text: "Zölle sollen **heimische Arbeitsplätze** schützen. Weniger Konkurrenz aus dem Ausland.",
                highlight: "Trump: 'America First' = US-Jobs first"
            },
            {
                type: "info",
                emoji: "⚠️",
                title: "Aber auch Verluste",
                text: "Wenn andere Länder **Gegenzölle** erheben, verlieren Exportfirmen Kunden - und bauen Jobs ab.",
                highlight: "Deutsche Autoindustrie leidet"
            },
            {
                type: "info",
                emoji: "📊",
                title: "Unterm Strich",
                text: "Studien zeigen: **Zölle kosten mehr Jobs als sie schützen**. Die Wirtschaft insgesamt schrumpft.",
                highlight: "USA: 300.000 Jobs weniger durch Trump-Zölle"
            },
            {
                type: "quiz",
                question: "Was passiert langfristig durch Zölle?",
                options: ["Mehr Jobs insgesamt", "Weniger Jobs insgesamt", "Keine Veränderung", "Nur mehr Jobs in der Landwirtschaft"],
                correct: 1,
                explanation: "Studien zeigen: Zölle kosten insgesamt mehr Jobs als sie schützen."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Zölle sollen heimische Jobs schützen",
                    "Aber: Gegenzölle vernichten Exportjobs",
                    "Unterm Strich: mehr Verluste als Gewinne"
                ]
            }
        ]
    },
    "4-3": {
        title: "Umwelt & Klima",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🌱",
                title: "Grüne Zölle",
                text: "Die EU plant **CO2-Zölle** auf Importe aus Ländern mit niedrigen Umweltstandards.",
                highlight: "CBAM: Carbon Border Adjustment Mechanism"
            },
            {
                type: "info",
                emoji: "🏭",
                title: "Warum?",
                text: "Damit Firmen nicht einfach in Länder ohne Klimaschutz **abwandern** und von dort exportieren.",
                highlight: "'Carbon Leakage' verhindern"
            },
            {
                type: "info",
                emoji: "⚡",
                title: "Beispiel: Stahl",
                text: "Chinesischer Stahl verursacht **3x so viel CO2** wie europäischer. Mit CBAM wird er teurer.",
                highlight: "Faire Bedingungen für EU-Industrie"
            },
            {
                type: "quiz",
                question: "Was ist das Ziel von CO2-Zöllen (CBAM)?",
                options: ["Mehr Autos verkaufen", "Abwanderung in Länder ohne Klimaschutz verhindern", "Flugtickets billiger machen", "Kohle fördern"],
                correct: 1,
                explanation: "CBAM soll verhindern, dass Firmen in Länder ohne Klimaschutz abwandern ('Carbon Leakage')."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "EU plant CO2-Zölle (CBAM)",
                    "Ziel: Abwanderung in Länder ohne Klimaschutz verhindern",
                    "Faire Bedingungen für EU-Industrie"
                ]
            }
        ]
    },
    "4-4": {
        title: "Zukunft des Handels",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🔮",
                title: "Mehr Konflikte?",
                text: "Experten erwarten **mehr Handelskonflikte** in den nächsten Jahren. USA, China, EU - alle wollen ihre Industrie schützen.",
                highlight: "Deglobalisierung statt Globalisierung?"
            },
            {
                type: "info",
                emoji: "🤝",
                title: "Neue Allianzen",
                text: "Länder suchen **neue Partner**. Die EU verhandelt mit Indien, Indonesien, Australien...",
                highlight: "Nicht alle Eier in einen Korb"
            },
            {
                type: "info",
                emoji: "🏭",
                title: "Reshoring",
                text: "Firmen holen Produktion **zurück nach Europa**. Kürzere Wege, weniger Risiko.",
                highlight: "Chip-Fabriken in Deutschland geplant"
            },
            {
                type: "quiz",
                question: "Was bedeutet 'Reshoring'?",
                options: ["Mehr Importe", "Produktion zurück ins Inland holen", "Zölle abschaffen", "Online-Shopping"],
                correct: 1,
                explanation: "Reshoring = Produktion aus dem Ausland zurück ins eigene Land holen."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Lektion abgeschlossen!",
                points: [
                    "Mehr Handelskonflikte erwartet",
                    "Neue Partnerschaften und Allianzen",
                    "Reshoring: Produktion zurück nach Europa"
                ]
            }
        ]
    }
};

// Lesson state
let currentLesson = null;
let currentCardIndex = 0;
let lessonProgress = {};

function loadLessonProgress() {
    const saved = localStorage.getItem('zollcheck_lessons');
    if (saved) lessonProgress = JSON.parse(saved);
}

function saveLessonProgress() {
    localStorage.setItem('zollcheck_lessons', JSON.stringify(lessonProgress));
}

function startLesson(module, lesson) {
    const key = `${module}-${lesson}`;
    if (!LESSONS[key]) return;
    
    currentLesson = { module, lesson, key, data: LESSONS[key] };
    currentCardIndex = 0;
    
    showScreen('screen-lesson');
    renderLessonCard();
    updateLessonProgress();
}

function renderLessonCard() {
    const card = currentLesson.data.cards[currentCardIndex];
    const container = document.getElementById('lesson-content');
    
    let html = '';
    
    if (card.type === 'info') {
        html = `
            <div class="lesson-card info-card">
                <div class="card-emoji">${card.emoji}</div>
                <h3 class="card-title">${card.title}</h3>
                <p class="card-text">${formatText(card.text)}</p>
                ${card.highlight ? `<div class="card-highlight">${card.highlight}</div>` : ''}
            </div>
        `;
    } else if (card.type === 'quiz') {
        html = `
            <div class="lesson-card quiz-card">
                <div class="card-emoji">❓</div>
                <h3 class="card-title">${card.question}</h3>
                <div class="quiz-options">
                    ${card.options.map((opt, i) => `
                        <button class="quiz-option" data-index="${i}" onclick="checkLessonAnswer(${i}, ${card.correct})">${opt}</button>
                    `).join('')}
                </div>
                <div class="quiz-explanation hidden" id="quiz-explanation">${card.explanation}</div>
            </div>
        `;
    } else if (card.type === 'summary') {
        html = `
            <div class="lesson-card summary-card">
                <div class="card-emoji">${card.emoji}</div>
                <h3 class="card-title">${card.title}</h3>
                <ul class="summary-points">
                    ${card.points.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        `;
    } else if (card.type === 'chart') {
        // Generate unique ID for this chart canvas
        const chartCanvasId = `lesson-chart-${card.chartId}-${Date.now()}`;
        
        // Check if this chart type uses HTML rendering (trumpZoelle)
        if (card.chartId === 'trumpZoelle') {
            html = `
                <div class="lesson-card chart-card">
                    <div class="card-emoji">📊</div>
                    <h3 class="card-title">${card.title}</h3>
                    ${card.description ? `<p class="card-text">${card.description}</p>` : ''}
                    <div id="${chartCanvasId}" class="lesson-chart-container"></div>
                </div>
            `;
        } else {
            html = `
                <div class="lesson-card chart-card">
                    <div class="card-emoji">📊</div>
                    <h3 class="card-title">${card.title}</h3>
                    ${card.description ? `<p class="card-text">${card.description}</p>` : ''}
                    <div class="lesson-chart-wrapper">
                        <canvas id="${chartCanvasId}"></canvas>
                    </div>
                </div>
            `;
        }
        
        // Render chart after DOM update
        setTimeout(() => {
            if (window.renderLessonChart) {
                renderLessonChart(card.chartId, chartCanvasId);
            }
        }, 100);
    }
    
    container.innerHTML = html;
    
    // Update navigation
    document.getElementById('lesson-card-count').textContent = `${currentCardIndex + 1}/${currentLesson.data.cards.length}`;
    document.getElementById('lesson-prev').style.visibility = currentCardIndex > 0 ? 'visible' : 'hidden';
    
    const nextBtn = document.getElementById('lesson-next');
    const isLast = currentCardIndex === currentLesson.data.cards.length - 1;
    nextBtn.textContent = isLast ? 'Abschließen ✓' : 'Weiter →';
    
    // Disable next on quiz until answered
    if (card.type === 'quiz') {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
    }
}

function formatText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
}

// Render charts in lessons using CHART_DATA from charts.js
function renderLessonChart(chartId, canvasId) {
    if (!window.CHART_DATA || !CHART_DATA[chartId]) {
        console.warn(`Chart data not found for: ${chartId}`);
        return;
    }
    
    const data = CHART_DATA[chartId];
    
    // Special handling for Trump-Zölle (HTML-based)
    if (chartId === 'trumpZoelle') {
        const container = document.getElementById(canvasId);
        if (!container) return;
        
        container.innerHTML = `
            <div class="trump-zoelle-mini">
                <div class="base-rate-badge">Basiszoll: ${data.baseRate}%</div>
                <div class="country-list">
                    ${data.countryRates.slice(0, 5).map(c => `
                        <div class="country-item">
                            <span>${c.flag} ${c.country}</span>
                            <span class="rate-badge">+${c.rate}%</span>
                        </div>
                    `).join('')}
                </div>
                <div class="auto-badge">🚗 Autos: ${data.autoZoll}%</div>
            </div>
        `;
        return;
    }
    
    // Chart.js-based charts
    const canvas = document.getElementById(canvasId);
    if (!canvas || !window.Chart) {
        console.warn('Canvas or Chart.js not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    if (chartId === 'exportquote') {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Exportquote %',
                    data: data.data,
                    borderColor: data.color,
                    backgroundColor: data.color + '20',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, max: 55 } }
            }
        });
    } else if (chartId === 'handelspartner') {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.countries.map(c => `${c.flag} ${c.code}`),
                datasets: [
                    { label: 'Exporte', data: data.countries.map(c => c.exports), backgroundColor: '#00a86b' },
                    { label: 'Importe', data: data.countries.map(c => c.imports), backgroundColor: '#ff6b6b' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: { legend: { position: 'bottom' } }
            }
        });
    } else if (chartId === 'importbeschraenkungen') {
        const colors = data.labels.map(year => year >= 2018 ? '#e74c3c' : '#95a5a6');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Neue Beschränkungen',
                    data: data.data,
                    backgroundColor: colors
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }
}
window.renderLessonChart = renderLessonChart;

function checkLessonAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.disabled = true;
        if (i === correct) opt.classList.add('correct');
        else if (i === selected && i !== correct) opt.classList.add('wrong');
    });
    
    document.getElementById('quiz-explanation').classList.remove('hidden');
    
    const nextBtn = document.getElementById('lesson-next');
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
}

function updateLessonProgress() {
    const progress = ((currentCardIndex + 1) / currentLesson.data.cards.length) * 100;
    document.getElementById('lesson-progress-fill').style.width = progress + '%';
}

function nextCard() {
    if (currentCardIndex < currentLesson.data.cards.length - 1) {
        currentCardIndex++;
        renderLessonCard();
        updateLessonProgress();
    } else {
        completeLesson();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        renderLessonCard();
        updateLessonProgress();
    }
}

function completeLesson() {
    // Mark as completed
    lessonProgress[currentLesson.key] = true;
    saveLessonProgress();
    
    // Add XP
    addXP(currentLesson.data.xp);
    
    // Update UI
    updateAllLessonStatuses();
    
    // Go back home
    showScreen('screen-home');
    
    // Show completion message
    setTimeout(() => {
        alert(`🎉 Lektion abgeschlossen!\n+${currentLesson.data.xp} XP`);
    }, 100);
}

function exitLesson() {
    if (confirm('Lektion wirklich beenden? Fortschritt geht verloren.')) {
        showScreen('screen-home');
    }
}

function updateAllLessonStatuses() {
    loadLessonProgress();
    
    let totalDone = 0;
    
    for (let m = 1; m <= 4; m++) {
        let moduleDone = 0;
        for (let l = 1; l <= 4; l++) {
            const key = `${m}-${l}`;
            const status = document.getElementById(`lesson-${m}-${l}-status`);
            if (status) {
                if (lessonProgress[key]) {
                    status.textContent = '✓';
                    status.classList.add('done');
                    moduleDone++;
                    totalDone++;
                } else {
                    status.textContent = '○';
                    status.classList.remove('done');
                }
            }
        }
        
        const modProgress = document.getElementById(`mod${m}-progress`);
        if (modProgress) modProgress.textContent = `${moduleDone}/4`;
    }
    
    // Update total progress
    document.getElementById('lessons-done').textContent = totalDone;
    document.getElementById('total-progress').style.width = (totalDone / 16 * 100) + '%';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadLessonProgress();
    setTimeout(updateAllLessonStatuses, 100);
});
