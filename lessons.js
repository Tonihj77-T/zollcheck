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
