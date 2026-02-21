// === LEKTIONEN-CONTENT ===

const LESSONS = {
    // =============================================
    // MODUL 1: GRUNDLAGEN
    // =============================================
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
                type: "info",
                emoji: "🔢",
                title: "Wie hoch sind Zölle?",
                text: "Das variiert stark:\n\n• **EU-Durchschnitt:** ca. 5% auf Industriegüter\n• **USA auf EU-Waren (2025):** 15% pauschal\n• **USA auf China:** bis zu 47%\n• **Innerhalb der EU:** 0% (Binnenmarkt!)\n\nBei manchen Produkten (z.B. Tabak, Alkohol) gibt es zusätzlich Verbrauchsteuern. Und auf Luxusgüter teilweise Sonderzölle.",
                highlight: "Von 0% (EU-Binnenmarkt) bis 47% (USA auf China)"
            },
            {
                type: "info",
                emoji: "💡",
                title: "Wer zahlt am Ende?",
                text: "Wichtig zu verstehen: Zölle zahlt erstmal der **Importeur** (das Unternehmen). Aber die Kosten werden fast immer an den **Endverbraucher** weitergegeben – über höhere Preise.\n\nStudien zeigen: Bei den Trump-Zöllen 2018-2019 wurden **nahezu 100%** der Kosten an die US-Verbraucher weitergegeben. Die ausländischen Exporteure haben ihre Preise NICHT gesenkt.",
                highlight: "Verbraucher zahlen die Zeche – nicht das Ausland",
                source: "Quelle: Tax Foundation, Federal Reserve Bank of New York"
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Zoll = Abgabe beim Grenzübertritt von Waren",
                    "Wird in Prozent vom Warenwert berechnet",
                    "Zollsätze: 0% (EU intern) bis 47% (USA-China)",
                    "Kosten werden an Verbraucher weitergegeben",
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
                type: "info",
                emoji: "🎓",
                title: "Erziehungszoll",
                text: "Zölle zum **temporären Schutz junger Industrien**, die noch nicht wettbewerbsfähig sind. Die Idee: Die heimische Branche bekommt Zeit zum Wachsen, bevor sie dem Weltmarkt ausgesetzt wird.\n\nBeispiel: Südkorea schützte in den 1960-80ern seine Elektronik-Industrie mit Zöllen. Heute ist Samsung Weltmarktführer – der Erziehungszoll hat funktioniert.",
                highlight: "Temporärer Schutz für junge Industrien – kann funktionieren!"
            },
            {
                type: "info",
                emoji: "🔄",
                title: "Retorsionszoll & Finanzzoll",
                text: "**Retorsionszoll (Vergeltungszoll):** Gegenmaßnahme, wenn ein anderes Land unfaire Zölle erhebt. Beispiel: EU droht USA mit Zöllen auf Bourbon-Whiskey als Antwort auf Stahl-Zölle.\n\n**Finanzzoll:** Dient primär den **Staatseinnahmen**. Historisch wichtig – im 19. Jahrhundert waren Zölle die Haupteinnahmequelle vieler Staaten. Heute spielen sie eine geringere Rolle (EU: Zolleinnahmen ca. 25 Mrd €/Jahr).",
                highlight: "Vergeltungszölle sind die „Waffen\u201c im Handelskrieg"
            },
            {
                type: "quiz",
                question: "Was ist ein Schutzzoll?",
                options: ["Zoll zum Schutz der Umwelt", "Zoll zum Schutz der eigenen Industrie", "Zoll zum Schutz vor Piraten", "Zoll zum Schutz von Daten"],
                correct: 1,
                explanation: "Schutzzölle sollen die heimische Wirtschaft vor ausländischer Konkurrenz schützen."
            },
            {
                type: "quiz",
                question: "Was ist ein Erziehungszoll?",
                options: ["Zoll auf Schulbücher", "Temporärer Schutz für junge Industrien", "Strafe für schlechte Produkte", "Zoll auf Bildungsimporte"],
                correct: 1,
                explanation: "Erziehungszölle schützen junge Industrien temporär, bis sie international wettbewerbsfähig sind."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Wertzoll: Prozent vom Warenwert (häufigste Art)",
                    "Mengenzoll: Fester Betrag pro Stück/Kilo",
                    "Schutzzoll: Schutz der eigenen Industrie",
                    "Erziehungszoll: Temporärer Schutz junger Branchen",
                    "Retorsionszoll: Vergeltung gegen unfaire Zölle",
                    "Finanzzoll: Einnahmen für den Staat"
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

    // =============================================
    // MODUL 2: DEUTSCHLAND & HANDEL
    // =============================================
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
                type: "info",
                emoji: "📊",
                title: "Exportquote: 47%",
                text: "Deutschlands **Exportquote** liegt bei ca. **47%** – fast die Hälfte der deutschen Wirtschaftsleistung hängt vom Export ab! Zum Vergleich: USA nur ca. 11%, China ca. 19%.\n\nDas macht Deutschland besonders anfällig für Handelsbarrieren. Jeder Prozentpunkt Zollerhöhung kostet Milliarden.",
                highlight: "47% Exportquote – höchste unter den großen Volkswirtschaften",
                source: "Quelle: Destatis, Dezember 2025"
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Deutschland: Platz 3 der Exportnationen",
                    "Handelsüberschuss von ~284 Mrd €",
                    "Exportquote 47% – höchste unter großen VWL",
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

    // =============================================
    // MODUL 3: AKTUELLE KONFLIKTE
    // =============================================
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

    // =============================================
    // MODUL 4: AUSWIRKUNGEN
    // =============================================
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
    },

    // =============================================
    // MODUL 8: SZENARIO-VERGLEICH (AUFGABE 3 – KRITISCH)
    // =============================================
    "8-1": {
        title: "Szenario I: Handelsbeschränkungen",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "🚧",
                title: "Was wäre, wenn...?",
                text: "Stell dir vor, der weltweite Handel wird **massiv eingeschränkt**: hohe Zölle, Importverbote, Handelskriege an allen Fronten.",
                highlight: "Szenario I: Große Einschränkungen des weltweiten Handels"
            },
            {
                type: "info",
                emoji: "💸",
                title: "Preisexplosion im Supermarkt",
                text: "Ohne freien Handel steigen die Preise drastisch. Ein **iPhone** könnte statt 1.199€ plötzlich **1.700€** kosten (bei 40% Zoll auf chinesische Komponenten). Kaffee aus Äthiopien, Bananen aus Ecuador, Avocados aus Mexiko – alles wird **30-50% teurer**.\n\nEine durchschnittliche deutsche Familie gibt ca. 350€/Monat für Lebensmittel aus. Bei Zöllen von 20-30% wären das **70-105€ mehr pro Monat** – über 1.000€ im Jahr.",
                highlight: "Durchschnittsfamilie: über 1.000€ Mehrkosten pro Jahr"
            },
            {
                type: "info",
                emoji: "📉",
                title: "Weniger Auswahl, weniger Innovation",
                text: "Ohne internationalen Wettbewerb gibt es **weniger Anreiz zur Innovation**. Warum sollte ein deutscher Hersteller sein Produkt verbessern, wenn die günstigere koreanische Alternative durch Zölle unbezahlbar wird?\n\nVerbraucher*innen hätten **weniger Produkte zur Auswahl**. Viele Marken, die wir kennen – von Samsung über Nike bis Zara – könnten sich aus dem deutschen Markt zurückziehen, weil der Verkauf nicht mehr profitabel ist.",
                highlight: "Weniger Wettbewerb = weniger Motivation für bessere Produkte"
            },
            {
                type: "info",
                emoji: "🏭",
                title: "Lieferketten brechen zusammen",
                text: "Moderne Produkte bestehen aus Teilen von überall: Ein **BMW 3er** enthält Stahl aus Schweden, Elektronik aus Japan, Leder aus Argentinien und Software aus den USA. Wenn all das verzollt wird, steigt der Preis um **8.000-12.000€ pro Fahrzeug**.\n\nDeutschland importiert **70% seiner Rohstoffe**. Ohne freien Zugang müssten Fabriken drosseln oder schließen. Das ifo-Institut schätzt: Ein vollständiger Handelskrieg könnte das deutsche BIP um **3-5%** schrumpfen lassen.",
                highlight: "BMW 3er: 8.000-12.000€ teurer durch Zölle auf Vorprodukte",
                source: "Quelle: ifo-Institut, DIHK Außenhandelsbericht 2025"
            },
            {
                type: "info",
                emoji: "👨‍👩‍👧‍👦",
                title: "Perspektive: Verbraucher*innen",
                text: "Für **Verbraucher*innen in Deutschland** bedeutet Szenario I:\n\n• **Höhere Preise** bei fast allen Produkten (Elektronik, Kleidung, Lebensmittel)\n• **Geringere Kaufkraft** – das Gehalt reicht für weniger\n• **Weniger Produktvielfalt** in den Geschäften\n• **Jobverluste** in exportabhängigen Regionen (z.B. Stuttgart, München, Wolfsburg)\n• **Inflation** könnte auf 5-8% steigen\n\nBesonders betroffen: Geringverdiener, die einen größeren Anteil ihres Einkommens für Grundbedürfnisse ausgeben.",
                highlight: "Geringverdiener werden am härtesten getroffen"
            },
            {
                type: "quiz",
                question: "Um wie viel könnte ein iPhone bei 40% Zöllen teurer werden?",
                options: ["50€", "200€", "~500€", "1.000€"],
                correct: 2,
                explanation: "Bei einem iPhone für 1.199€ und 40% Zoll auf Komponenten aus China könnte der Preis auf ca. 1.700€ steigen – rund 500€ mehr."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung Szenario I",
                points: [
                    "Massive Preiserhöhungen bei fast allen Produkten",
                    "Lieferketten brechen zusammen – Fabriken drosseln",
                    "Weniger Auswahl und Innovation für Verbraucher*innen",
                    "Geringverdiener werden am härtesten getroffen",
                    "BIP könnte um 3-5% schrumpfen"
                ]
            }
        ]
    },
    "8-2": {
        title: "Szenario II: Freier Warenhandel",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "🌐",
                title: "Freier Handel für alle",
                text: "Stell dir vor, Waren können **weitgehend ohne Hindernisse** über Grenzen fließen: niedrige Zölle, wenige Bürokratie, offene Märkte.",
                highlight: "Szenario II: Weitgehend reibungsloser Warenhandel"
            },
            {
                type: "info",
                emoji: "💰",
                title: "Günstigere Preise",
                text: "Ohne Zölle können Unternehmen dort produzieren, wo es am **effizientesten** ist. Das senkt Kosten – und damit Preise.\n\nBeispiel: Ein T-Shirt aus Bangladesch kostet in Deutschland ca. 10€. Mit 20% Zoll wären es 12€. Bei 0% bleibt es günstig. Über ein ganzes Jahr und alle Einkäufe gerechnet sparen deutsche Verbraucher*innen durch den EU-Binnenmarkt geschätzt **1.500-2.000€ pro Person pro Jahr**.",
                highlight: "Geschätzte Ersparnis: 1.500-2.000€ pro Person und Jahr durch freien Handel"
            },
            {
                type: "info",
                emoji: "🏆",
                title: "Wettbewerb fördert Innovation",
                text: "Internationaler Wettbewerb zwingt Unternehmen, **bessere Produkte zu entwickeln**. Deutsche Autos sind so gut, weil sie mit japanischen, koreanischen und amerikanischen Herstellern konkurrieren.\n\nVerbraucher*innen profitieren von **riesiger Auswahl**: Smartphones aus Südkorea, Mode aus Italien, Lebensmittel aus der ganzen Welt. Innovation wird belohnt, Stillstand bestraft.",
                highlight: "Wettbewerb = Motor für bessere und günstigere Produkte"
            },
            {
                type: "info",
                emoji: "📈",
                title: "Wohlstand durch Spezialisierung",
                text: "Das Prinzip des **komparativen Vorteils** (David Ricardo, 1817): Jedes Land produziert das, worin es am besten ist.\n\n• Deutschland: Maschinen, Autos, Chemie\n• China: Elektronik-Massenproduktion\n• Äthiopien: Kaffee\n• Chile: Kupfer\n\nErgebnis: **Alle gewinnen**, weil jeder das produziert, was er am effizientesten kann.",
                highlight: "Komparativer Vorteil: Spezialisierung macht alle reicher"
            },
            {
                type: "info",
                emoji: "👨‍👩‍👧‍👦",
                title: "Perspektive: Verbraucher*innen",
                text: "Für **Verbraucher*innen in Deutschland** bedeutet Szenario II:\n\n• **Niedrigere Preise** durch globalen Wettbewerb\n• **Riesige Produktvielfalt** – von Avocados bis iPhones\n• **Höhere Kaufkraft** – das Gehalt reicht für mehr\n• **Mehr Jobs** in Exportbranchen (Auto, Maschinen, Pharma)\n• **Stabilere Preise** durch diversifizierte Lieferketten\n\nAber auch Risiken: Billige Importe können **heimische Arbeitsplätze** gefährden (z.B. Textilindustrie).",
                highlight: "Nicht nur Vorteile: Billigimporte können Jobs gefährden"
            },
            {
                type: "quiz",
                question: "Was ist der 'komparative Vorteil'?",
                options: ["Das Land mit den niedrigsten Löhnen gewinnt", "Jedes Land produziert das, worin es relativ am besten ist", "Nur große Länder profitieren vom Handel", "Zölle schaffen Vorteile"],
                correct: 1,
                explanation: "Der komparative Vorteil besagt: Jedes Land spezialisiert sich auf das, was es relativ am effizientesten produzieren kann – so gewinnen alle."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung Szenario II",
                points: [
                    "Günstigere Preise durch globalen Wettbewerb",
                    "Riesige Produktvielfalt für Verbraucher*innen",
                    "Innovation durch Wettbewerb",
                    "Spezialisierung macht alle wohlhabender",
                    "Risiko: Billigimporte können heimische Jobs gefährden"
                ]
            }
        ]
    },
    "8-3": {
        title: "Direkter Vergleich",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "⚖️",
                title: "Szenario I vs. Szenario II",
                text: "Vergleichen wir die beiden Szenarien **direkt** aus der Perspektive von Verbraucher*innen in Deutschland:",
                highlight: "Gegenüberstellung der denkbaren Auswirkungen"
            },
            {
                type: "info",
                emoji: "💶",
                title: "Preise & Kaufkraft",
                text: "**Szenario I** (Handelsbeschränkungen):\n→ Preise steigen um 20-40% bei importierten Gütern\n→ Kaufkraft sinkt massiv\n→ Familie zahlt >1.000€/Jahr mehr\n\n**Szenario II** (Freier Handel):\n→ Preise bleiben niedrig oder sinken\n→ Kaufkraft bleibt stabil oder steigt\n→ Ersparnis von ~1.500-2.000€/Person/Jahr\n\n**Differenz:** Bis zu 3.000€ pro Person und Jahr zwischen den Szenarien.",
                highlight: "Bis zu 3.000€ Unterschied pro Person und Jahr"
            },
            {
                type: "info",
                emoji: "🛍️",
                title: "Produktvielfalt & Qualität",
                text: "**Szenario I:**\n→ Deutlich weniger Auswahl\n→ Marken ziehen sich zurück\n→ Weniger Innovationsdruck\n→ Qualität stagniert\n\n**Szenario II:**\n→ Maximale Vielfalt\n→ Globale Marken konkurrieren\n→ Ständiger Innovationsdruck\n→ Qualität steigt kontinuierlich\n\nBeispiel: Ohne Samsung, Apple und Xiaomi als Konkurrenten hätte Siemens weniger Grund, innovative Smartphones zu entwickeln.",
                highlight: "Wettbewerb treibt Qualität und Innovation"
            },
            {
                type: "info",
                emoji: "👷",
                title: "Arbeitsmarkt",
                text: "**Szenario I:**\n→ Einige geschützte Jobs in importkonkurrierenden Branchen\n→ Aber: massive Jobverluste in Exportbranchen\n→ Netto: deutlich mehr Verluste (ifo: -500.000 bis -1 Mio. Jobs)\n\n**Szenario II:**\n→ Starke Exportbranchen schaffen Jobs\n→ Aber: Druck auf gering qualifizierte Arbeit\n→ Netto: mehr Jobs, aber Umverteilung nötig\n\n**Fazit:** Freier Handel schafft insgesamt mehr Wohlstand, aber die Gewinne sind **ungleich verteilt**.",
                highlight: "Freier Handel: mehr Wohlstand insgesamt, aber ungleich verteilt",
                source: "Quelle: ifo-Institut, Bertelsmann-Stiftung"
            },
            {
                type: "info",
                emoji: "🏥",
                title: "Konkrete Beispiele im Vergleich",
                text: "**Kaffee (1kg):**\nSzenario I: 15€ → 22€ (+47%)\nSzenario II: 15€ → 12€ (-20%)\n\n**Smartphone (Mittelklasse):**\nSzenario I: 400€ → 560€ (+40%)\nSzenario II: 400€ → 350€ (-13%)\n\n**Winterjacke:**\nSzenario I: 80€ → 110€ (+38%)\nSzenario II: 80€ → 65€ (-19%)\n\n**BMW 3er (Exportpreis USA):**\nSzenario I: Export bricht ein, Kurzarbeit\nSzenario II: Starker Export, sichere Jobs",
                highlight: "Konkrete Preisbeispiele zeigen den dramatischen Unterschied"
            },
            {
                type: "quiz",
                question: "Was passiert laut Studien insgesamt mit Arbeitsplätzen bei großen Handelsbeschränkungen?",
                options: ["Mehr Jobs insgesamt", "Gleich viele Jobs", "Netto deutlich weniger Jobs", "Jobs nur in der Landwirtschaft"],
                correct: 2,
                explanation: "Das ifo-Institut schätzt: Große Handelsbeschränkungen könnten netto 500.000 bis 1 Million Jobs in Deutschland kosten."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung Vergleich",
                points: [
                    "Preise: bis zu 3.000€ Unterschied pro Person/Jahr",
                    "Vielfalt: deutlich mehr Auswahl bei freiem Handel",
                    "Jobs: Handelsbeschränkungen kosten netto mehr Jobs",
                    "Freier Handel schafft mehr Wohlstand insgesamt",
                    "Aber: Gewinne sind ungleich verteilt"
                ]
            }
        ]
    },
    "8-4": {
        title: "Bewertung: Wie sollte Handel gestaltet werden?",
        xp: 25,
        cards: [
            {
                type: "info",
                emoji: "🤔",
                title: "Die Kernfrage",
                text: "Weder reiner Freihandel noch totaler Protektionismus sind die Lösung. Die Frage ist: **Wie sollten Handelsbeziehungen gestaltet werden?**",
                highlight: "Es geht um den richtigen Mittelweg"
            },
            {
                type: "info",
                emoji: "✅",
                title: "Argumente für offenen Handel",
                text: "• **Wohlstandsgewinne** für alle Beteiligten (komparativer Vorteil)\n• **Niedrigere Preise** und mehr Auswahl für Verbraucher*innen\n• **Innovation** durch internationalen Wettbewerb\n• **Friedenssicherung** – Handelspartner führen seltener Krieg\n• **Entwicklungschancen** für ärmere Länder durch Marktzugang\n\nDie EU ist das beste Beispiel: Der Binnenmarkt mit 450 Mio. Menschen hat enormen Wohlstand geschaffen.",
                highlight: "Handel schafft Wohlstand und fördert Frieden"
            },
            {
                type: "info",
                emoji: "⚠️",
                title: "Argumente für Schutzmaßnahmen",
                text: "• **Schutz junger Industrien** (Erziehungszölle)\n• **Nationale Sicherheit** – strategisch wichtige Produkte selbst herstellen\n• **Sozialstandards** – keine Ausbeutung in Billiglohnländern belohnen\n• **Umweltschutz** – CO₂-Zölle (CBAM) als Klimainstrument\n• **Faire Wettbewerbsbedingungen** – gegen staatlich subventionierte Dumpingpreise\n\nChinas staatlich subventionierter Stahlexport hat europäische Stahlwerke an den Rand des Ruins getrieben – ein Fall, wo Schutzzölle gerechtfertigt sein können.",
                highlight: "Manchmal sind Schutzzölle gerechtfertigt – aber gezielt und temporär"
            },
            {
                type: "info",
                emoji: "🎯",
                title: "Der Mittelweg: Fairer Handel",
                text: "Die beste Lösung liegt in der Mitte – **regelbasierter, fairer Handel**:\n\n1. **Offene Märkte** als Grundprinzip\n2. **Klare Regeln** durch WTO und bilaterale Abkommen\n3. **Gezielte Schutzmaßnahmen** nur bei Dumping oder Sicherheitsrisiken\n4. **Sozial- und Umweltstandards** in Handelsabkommen verankern\n5. **Kompensation** für Verlierer des Freihandels (Umschulung, Sozialprogramme)\n6. **Strategische Autonomie** bei kritischen Gütern (Chips, Medikamente, Energie)",
                highlight: "Regelbasierter, fairer Handel als Leitprinzip"
            },
            {
                type: "info",
                emoji: "🇪🇺",
                title: "Die EU-Strategie",
                text: "Die EU verfolgt genau diesen Mittelweg:\n\n• **Open Strategic Autonomy** – offene Märkte, aber weniger Abhängigkeiten\n• **CBAM** – CO₂-Zölle zum Klimaschutz\n• **Anti-Dumping-Zölle** gegen unfaire Praktiken (z.B. chinesischer Stahl)\n• **Freihandelsabkommen** mit Standards (Japan, Kanada, bald Indien)\n• **De-Risking** statt Decoupling – Risiken reduzieren, nicht komplett abkoppeln\n\nDies ist der pragmatischste Ansatz: Die Vorteile des Handels nutzen, aber Risiken und Ungerechtigkeiten aktiv adressieren.",
                highlight: "Open Strategic Autonomy: Offenheit mit Absicherung",
                source: "Quelle: Europäische Kommission, Trade Policy Review 2025"
            },
            {
                type: "info",
                emoji: "💡",
                title: "Unsere Position",
                text: "Nach Analyse beider Szenarien und aller Argumente kommen wir zu dem Schluss:\n\n**Handelsbeziehungen sollten möglichst offen, aber fair und regelbasiert gestaltet werden.** Reiner Protektionismus schadet vor allem Verbraucher*innen und kostet mehr Jobs als er schützt. Gleichzeitig braucht es klare Regeln, Sozial- und Umweltstandards sowie strategische Vorsorge bei kritischen Gütern.\n\nDie EU-Strategie der „Open Strategic Autonomy\u201c zeigt, dass Offenheit und Sicherheit kein Widerspruch sein müssen.",
                highlight: "Offen, aber fair und regelbasiert – das ist der Weg"
            },
            {
                type: "quiz",
                question: "Was bedeutet 'De-Risking' in der EU-Handelspolitik?",
                options: ["Komplett von China abkoppeln", "Risiken reduzieren, aber Handel beibehalten", "Alle Zölle abschaffen", "Nur mit Nachbarländern handeln"],
                correct: 1,
                explanation: "De-Risking bedeutet: Abhängigkeiten und Risiken reduzieren, aber den Handel nicht komplett abbrechen – im Gegensatz zu Decoupling."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Weder reiner Freihandel noch totaler Protektionismus ist ideal",
                    "Bester Ansatz: regelbasierter, fairer Handel",
                    "Offene Märkte + Sozial-/Umweltstandards + strategische Autonomie",
                    "EU-Strategie: Open Strategic Autonomy als Vorbild",
                    "Kompensation für Verlierer des Freihandels nötig"
                ]
            }
        ]
    },

    // =============================================
    // MODUL 9: KONKRETE BEISPIELE
    // =============================================
    "9-1": {
        title: "BMW 3er: Globales Produkt",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🚗",
                title: "Ein Auto, viele Länder",
                text: "Ein **BMW 3er** ist kein \u201Edeutsches\u201C Auto – er ist ein **globales Produkt**. Teile kommen aus über 30 Ländern:",
                highlight: "Über 30.000 Einzelteile aus der ganzen Welt"
            },
            {
                type: "info",
                emoji: "🌍",
                title: "Die Lieferkette",
                text: "• **Motor**: Deutschland (München, Steyr/Österreich)\n• **Getriebe**: Japan (Aisin) oder Deutschland (ZF)\n• **Elektronik/Chips**: Taiwan (TSMC), Südkorea (Samsung)\n• **Stahl**: Schweden (SSAB), Deutschland (ThyssenKrupp)\n• **Leder**: Argentinien, Italien\n• **Reifen**: Frankreich (Michelin), Japan (Bridgestone)\n• **Software**: USA, Indien\n• **Batterie (Hybrid)**: China (CATL)\n• **Aluminium**: Norwegen, Island\n\nProduktion: München, aber auch Spartanburg (USA), Shenyang (China).",
                highlight: "Ein einziges Auto verbindet Dutzende Volkswirtschaften"
            },
            {
                type: "info",
                emoji: "💰",
                title: "Preiseffekt von Zöllen",
                text: "**BMW 3er Grundpreis (Deutschland):** ca. 47.000€\n**Exportpreis USA (vor Zoll):** ca. 48.000$\n\nMit **15% US-Zoll** (aktuell): → 55.200$ (+7.200$)\nMit **25% Zoll** (Drohung): → 60.000$ (+12.000$)\n\n**Folge:** BMW verkauft weniger Autos in den USA. 2025 gingen die Exporte um **9,4%** zurück. BMW baut stattdessen mehr Autos direkt in den USA (Werk Spartanburg), was deutschen Arbeitsplätzen schadet.",
                highlight: "15% Zoll = 7.200$ Aufpreis, 25% = 12.000$ Aufpreis",
                source: "Quelle: BMW Group Jahresbericht 2025, Destatis"
            },
            {
                type: "info",
                emoji: "👷",
                title: "Auswirkung auf Arbeitsplätze",
                text: "BMW beschäftigt in Deutschland ca. **80.000 Mitarbeiter** direkt, plus über **200.000** bei Zulieferern.\n\nWenn Exporte in die USA einbrechen:\n• Kurzarbeit in deutschen Werken\n• Zulieferer verlieren Aufträge\n• Produktion verlagert sich ins Ausland\n\nSpartanburg (USA) ist bereits BMWs **größtes Werk weltweit** – dort werden X3, X5, X7 für den Weltmarkt produziert. Hohe Zölle beschleunigen diese Verlagerung.",
                highlight: "Zölle beschleunigen die Verlagerung von Produktion ins Ausland"
            },
            {
                type: "quiz",
                question: "Was ist BMWs größtes Werk weltweit?",
                options: ["München", "Leipzig", "Spartanburg (USA)", "Shenyang (China)"],
                correct: 2,
                explanation: "Das BMW-Werk in Spartanburg, South Carolina (USA) ist das größte BMW-Werk der Welt – es produziert vor allem SUVs für den globalen Markt."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "BMW 3er: Teile aus über 30 Ländern",
                    "15% US-Zoll = 7.200$ Aufpreis pro Fahrzeug",
                    "Exporte in die USA -9,4% in 2025",
                    "Produktion verlagert sich durch Zölle ins Ausland",
                    "200.000+ Zulieferer-Jobs in Deutschland betroffen"
                ]
            }
        ]
    },
    "9-2": {
        title: "iPhone: Weltreise im Hosentaschenformat",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "📱",
                title: "Designed in California, Made Everywhere",
                text: "Das **iPhone** ist das Paradebeispiel globaler Lieferketten. Apple designt in Kalifornien, aber die **200+ Zulieferer** sitzen in über 40 Ländern.",
                highlight: "200+ Zulieferer in 40+ Ländern"
            },
            {
                type: "info",
                emoji: "🔧",
                title: "Wer liefert was?",
                text: "• **Prozessor (A-Chip)**: Design USA, Fertigung Taiwan (TSMC)\n• **Display (OLED)**: Südkorea (Samsung, LG)\n• **Kamera-Sensoren**: Japan (Sony)\n• **Speicherchips**: Südkorea (SK Hynix, Samsung)\n• **Modem (5G)**: USA (Qualcomm)\n• **Gehäuse (Aluminium/Titan)**: China\n• **Akku**: China (CATL, BYD)\n• **Glas (Ceramic Shield)**: USA (Corning)\n• **Endmontage**: China (Foxconn), zunehmend Indien\n\nApple selbst produziert **kein einziges physisches Teil** – alles kommt von Zulieferern.",
                highlight: "Apple produziert nichts selbst – alles kommt von Zulieferern"
            },
            {
                type: "info",
                emoji: "💸",
                title: "Was kosten Zölle?",
                text: "**iPhone 16 Pro (Verkaufspreis USA):** 999$\n**Herstellungskosten:** ca. 570$\n**Apples Marge:** ca. 429$\n\nBei **47% Zoll** auf China-Importe (2025):\n→ Aufpreis: ca. 270$\n→ Neuer Preis: ca. 1.269$ oder Apple schluckt die Marge\n\nApple hat reagiert: **50% der US-iPhones** kommen jetzt aus Indien statt China. Aber auch Indien drohen Zölle (Trump drohte mit 25%).",
                highlight: "47% China-Zoll = 270$ Aufpreis pro iPhone",
                source: "Quelle: CNBC, Bloomberg, Apple Geschäftsbericht 2025"
            },
            {
                type: "info",
                emoji: "🇩🇪",
                title: "Was bedeutet das für Deutschland?",
                text: "In Deutschland zahlen Verbraucher*innen für ein iPhone 16 Pro **1.199€**. Die EU hat aktuell keine hohen Zölle auf Smartphones (ca. 0%). Aber:\n\n• Wenn die EU **Gegenzölle auf US-Produkte** erhebt, könnten iPhones teurer werden\n• Apple könnte Preise **weltweit anpassen**, um Margen zu schützen\n• Deutsche Zulieferer (z.B. Infineon für Sensoren) verlieren Aufträge, wenn Apple Lieferketten umstellt\n\nDas iPhone zeigt: In einer globalisierten Welt sind **alle miteinander verbunden**.",
                highlight: "Auch deutsche Zulieferer wie Infineon sind Teil der iPhone-Lieferkette"
            },
            {
                type: "quiz",
                question: "Woher kommen die meisten iPhone-Displays?",
                options: ["USA", "China", "Südkorea (Samsung/LG)", "Japan"],
                correct: 2,
                explanation: "Die OLED-Displays für iPhones kommen hauptsächlich von Samsung und LG aus Südkorea."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "iPhone: 200+ Zulieferer in 40+ Ländern",
                    "Apple designt nur – produziert nichts selbst",
                    "47% China-Zoll = ~270$ Aufpreis pro iPhone",
                    "Apple verlagert Produktion nach Indien",
                    "Deutsche Zulieferer (Infineon) sind Teil der Kette"
                ]
            }
        ]
    },
    "9-3": {
        title: "Kaffee: Von Äthiopien nach Deutschland",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "☕",
                title: "Deutschlands Lieblingsgetränk",
                text: "Deutsche trinken im Schnitt **164 Liter Kaffee pro Jahr** – mehr als Wasser oder Bier! Deutschland ist der **zweitgrößte Kaffeeimporteur** der Welt (nach den USA).",
                highlight: "164 Liter pro Person pro Jahr – Platz 2 weltweit beim Import"
            },
            {
                type: "info",
                emoji: "🌱",
                title: "Die Reise der Kaffeebohne",
                text: "1. **Anbau**: Äthiopien, Brasilien, Vietnam, Kolumbien\n2. **Ernte**: Meist Handarbeit, oft unter schwierigen Bedingungen\n3. **Verarbeitung**: Waschen, Trocknen, Sortieren im Ursprungsland\n4. **Transport**: Per Schiff nach Hamburg (größter Kaffeehafen Europas)\n5. **Röstung**: In Deutschland (Tchibo, Jacobs, Dallmayr)\n6. **Verpackung & Verkauf**: Im Supermarkt\n\nVon der Pflanze bis zur Tasse: **ca. 6-12 Monate** Reisezeit.",
                highlight: "Hamburg ist der größte Kaffeehafen Europas"
            },
            {
                type: "info",
                emoji: "💰",
                title: "Zölle und Kaffee",
                text: "Die EU erhebt auf **Rohkaffee 0% Zoll** – damit er günstig bleibt. Aber auf **gerösteten Kaffee: 7,5%** Zoll. Warum?\n\n→ Die EU will, dass die **Wertschöpfung** (Rösten) in Europa stattfindet, nicht im Anbauland.\n\nDas ist ein Problem für Anbauländer: Sie dürfen günstig Rohstoffe liefern, aber nicht die profitablen Verarbeitungsschritte übernehmen. Kritiker nennen das **„Zolleskalation\u201c** – ein Relikt der Kolonialzeit.",
                highlight: "Rohkaffee: 0% Zoll. Gerösteter Kaffee: 7,5%. Wertschöpfung bleibt in Europa."
            },
            {
                type: "info",
                emoji: "🤝",
                title: "Fair Trade als Alternative",
                text: "**Fair Trade** versucht, dieses Ungleichgewicht auszugleichen:\n\n• **Mindestpreis** für Kaffeebauern (aktuell: 1,80$/Pfund)\n• **Prämie** für Gemeinschaftsprojekte (0,20$/Pfund)\n• **Verbot** von Kinderarbeit\n• **Nachhaltige** Anbaumethoden\n\nAber: Nur ca. **5%** des in Deutschland verkauften Kaffees ist Fair Trade. Der Rest wird zu Weltmarktpreisen gehandelt, die oft unter den Produktionskosten liegen.",
                highlight: "Nur 5% des Kaffees in Deutschland ist Fair Trade",
                source: "Quelle: Deutscher Kaffeeverband, TransFair e.V."
            },
            {
                type: "quiz",
                question: "Warum erhebt die EU auf gerösteten Kaffee höhere Zölle als auf Rohkaffee?",
                options: ["Gerösteter Kaffee ist schwerer", "Die Wertschöpfung soll in Europa bleiben", "Gerösteter Kaffee ist gesünder", "Es gibt keinen Unterschied"],
                correct: 1,
                explanation: "Durch die Zolleskalation (0% auf Roh, 7,5% auf geröstet) bleibt die profitable Verarbeitung in Europa – zum Nachteil der Anbauländer."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Deutschland: zweitgrößter Kaffeeimporteur weltweit",
                    "Zolleskalation: 0% auf Rohkaffee, 7,5% auf gerösteten",
                    "Wertschöpfung bleibt in Europa – Nachteil für Anbauländer",
                    "Fair Trade: nur 5% Marktanteil in Deutschland",
                    "Kaffee zeigt die Ungleichheiten im Welthandel"
                ]
            }
        ]
    },
    "9-4": {
        title: "Stahl: Dumping, Zölle & Klimaschutz",
        xp: 15,
        cards: [
            {
                type: "info",
                emoji: "🏗️",
                title: "Stahl: Rückgrat der Industrie",
                text: "Stahl steckt überall: Autos, Brücken, Gebäude, Maschinen. Deutschland produziert ca. **36 Mio. Tonnen Stahl pro Jahr** und ist damit der größte Stahlproduzent der EU.",
                highlight: "36 Mio. Tonnen/Jahr – größter EU-Produzent"
            },
            {
                type: "info",
                emoji: "🇨🇳",
                title: "Chinas Stahl-Überkapazitäten",
                text: "China produziert über **1 Milliarde Tonnen Stahl pro Jahr** – mehr als die Hälfte der Weltproduktion! Weil China mehr produziert als es braucht, wird der Überschuss **zu Dumpingpreisen** (unter Herstellungskosten) auf den Weltmarkt geworfen.\n\nDie Folge: Europäische Stahlwerke können preislich nicht mithalten. Seit 2015 haben Tausende Stahlarbeiter in der EU ihren Job verloren.",
                highlight: "China: >1 Mrd. Tonnen/Jahr – mehr als 50% der Weltproduktion"
            },
            {
                type: "info",
                emoji: "🛡️",
                title: "EU Anti-Dumping-Zölle",
                text: "Die EU hat **Anti-Dumping-Zölle** auf chinesischen Stahl eingeführt: **bis zu 44%** auf bestimmte Stahlsorten.\n\nDie USA gingen noch weiter: **25% Zoll auf ALLEN Stahl** (auch aus der EU!) seit 2018 (Section 232). Begründung: „nationale Sicherheit\u201c.\n\nDas zeigt das Dilemma: Schutzzölle gegen China treffen manchmal auch Verbündete. Die EU und die USA streiten bis heute über Stahl-Zölle untereinander.",
                highlight: "EU: bis 44% Anti-Dumping-Zoll auf China-Stahl. USA: 25% auf ALLEN Stahl."
            },
            {
                type: "info",
                emoji: "🌱",
                title: "CBAM: Der grüne Stahlzoll",
                text: "Ab 2026 greift der **CBAM** (Carbon Border Adjustment Mechanism) der EU vollständig. Er besteuert den CO₂-Gehalt importierter Waren.\n\n**Beispiel Stahl:**\n• EU-Stahl: 1,2 Tonnen CO₂ pro Tonne Stahl\n• China-Stahl: 2,5-3,0 Tonnen CO₂ pro Tonne\n\nMit CBAM zahlt chinesischer Stahl einen **CO₂-Aufpreis** von ca. 80-150€/Tonne. Das macht EU-Stahl konkurrenzfähiger UND schützt das Klima.",
                highlight: "CBAM ab 2026: CO₂-Aufpreis von 80-150€/Tonne auf China-Stahl",
                source: "Quelle: EU-Kommission, Wirtschaftsvereinigung Stahl"
            },
            {
                type: "quiz",
                question: "Warum hat die EU Anti-Dumping-Zölle auf chinesischen Stahl?",
                options: ["China-Stahl ist zu gut", "China verkauft unter Herstellungskosten (Dumping)", "China importiert zu viel EU-Stahl", "Es gibt keine solchen Zölle"],
                correct: 1,
                explanation: "China produziert mehr Stahl als es braucht und verkauft den Überschuss unter Herstellungskosten (Dumping) auf dem Weltmarkt."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "China: >50% der Welt-Stahlproduktion, Dumping-Problem",
                    "EU: Anti-Dumping-Zölle bis 44% auf China-Stahl",
                    "USA: 25% Zoll auf ALLEN Stahl (auch EU!)",
                    "CBAM ab 2026: CO₂-Aufpreis macht EU-Stahl konkurrenzfähiger",
                    "Stahl zeigt den Konflikt zwischen Schutz und Freihandel"
                ]
            }
        ]
    },

    // =============================================
    // MODUL 10: QUELLEN & KI-OFFENLEGUNG
    // =============================================
    "10-1": {
        title: "Unsere Quellen",
        xp: 10,
        cards: [
            {
                type: "info",
                emoji: "📚",
                title: "Quellenverzeichnis (1/3)",
                text: "**Offizielle Institutionen:**\n• Destatis – Statistisches Bundesamt: Außenhandelsstatistiken 2025\n• Europäische Kommission: Trade Policy Review 2025\n• WTO: World Trade Report 2025\n• UNCTAD: Global Trade Update Januar 2026\n• Bundesministerium für Wirtschaft und Klimaschutz (BMWK)\n• Deutscher Industrie- und Handelskammertag (DIHK): Außenhandelsbericht 2025"
            },
            {
                type: "info",
                emoji: "📰",
                title: "Quellenverzeichnis (2/3)",
                text: "**Forschungsinstitute & Medien:**\n• ifo-Institut: Studien zu Handelsauswirkungen\n• Bertelsmann-Stiftung: Freihandel und Beschäftigung\n• Bundeszentrale für politische Bildung (bpb): Trumps Handelspolitik\n• Euronews Business: WTO & Trump Tariffs 2025\n• CNBC: Apple Supply Chain & Tariffs 2025/26\n• Barron's: EU-India Trade Deal\n• ING Think: Global Trade in 2026\n• Tax Foundation: Trump Tariffs Trade War Analysis"
            },
            {
                type: "info",
                emoji: "📖",
                title: "Quellenverzeichnis (3/3)",
                text: "**Unternehmensquellen:**\n• BMW Group Jahresbericht 2025\n• Apple Inc. Geschäftsbericht (10-K) 2025\n• Wirtschaftsvereinigung Stahl: Stahlmarktbericht\n• Deutscher Kaffeeverband: Marktbericht\n• TransFair e.V.: Fair Trade Statistiken\n\n**Unterrichtsmaterial:**\n• econo=me Wettbewerbsunterlagen 2025/26\n• Schulbuch-PDF: Materialien M11, M12"
            },
            {
                type: "info",
                emoji: "🤖",
                title: "KI-Nutzung: Offenlegung",
                text: "Bei der Erstellung dieser App wurde **Künstliche Intelligenz (Claude, Anthropic)** als Hilfsmittel eingesetzt für:\n\n• Recherche-Unterstützung und Faktenprüfung\n• Strukturierung und Aufbereitung von Inhalten\n• Programmierung der Web-App (HTML, CSS, JavaScript)\n• Formulierungshilfe bei Texten\n• Code-Testing und Qualitätssicherung\n\nAlle Fakten wurden mit den oben genannten Quellen **gegengeprüft**. Die inhaltlichen Entscheidungen, die Bewertungen und die kreative Gestaltung sind **eigenständige Leistungen**.",
                highlight: "KI als Werkzeug – Inhalt und Bewertung sind eigenständig"
            },
            {
                type: "info",
                emoji: "💬",
                title: "Verwendete Prompts (Auswahl)",
                text: "**Recherche & Inhalt:**\n• \"Recherchiere die aktuellen US-Zollsätze auf EU-Importe 2025/26 mit Quellen\"\n• \"Vergleiche Szenario I (Handelsbeschränkungen) und Szenario II (freier Handel) für deutsche Verbraucher mit konkreten Preisbeispielen\"\n• \"Erkläre die verschiedenen Zollarten (Schutzzoll, Erziehungszoll, Retorsionszoll, Finanzzoll) mit aktuellen Beispielen\"\n\n**Programmierung:**\n• \"Erstelle eine mobile-first PWA mit Lernmodulen im Karteikarten-Stil, dark theme, bottom navigation\"\n• \"Implementiere ein Fortschrittssystem mit XP, Leveln und Lesson-Tracking in localStorage\"\n• \"Baue einen interaktiven Handelssimulator mit Entscheidungen und Auswirkungsmetern\"\n\n**Testing:**\n• \"Überprüfe die JavaScript-Syntax aller Dateien auf Fehler (node -c)\"\n• \"Teste die App auf überlappende Elemente und broken layouts\"\n• \"Validiere dass alle Lektionen korrekt laden und die Navigation funktioniert\""
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Über 20 seriöse Quellen verwendet",
                    "Offizielle Statistiken, Forschungsinstitute, Medien",
                    "Unternehmensberichte für konkrete Beispiele",
                    "KI als Werkzeug eingesetzt – transparent offengelegt",
                    "Alle Fakten gegengeprüft"
                ]
            }
        ]
    },

    // =============================================
    // MODUL 5: AUFGABE 1 – PDF CONTENT (WORD FOR WORD)
    // =============================================
    "5-1": {
        title: "Neue US-Zollpolitik & Protektionismus",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "🌍",
                title: "Aktuelle Entwicklungsprozesse",
                text: "Seit Anfang 2025 befinden sich die weltweiten Handelsbeziehungen in einer Phase deutlicher Umbrüche und Umstrukturierungen, die weit über „normale Schwankungen“ hinausgehen. Grund dafür sind vor allem massive Änderungen in der Handelspolitik großer Wirtschaftsmächte, allen voran die USA, und die daraus entstehenden Reaktionen anderer Staaten und Wirtschaftsbündnisse wie der Europäischen Union (EU). Diese Entwicklungen haben weitreichende wirtschaftliche, politische und gesellschaftliche Auswirkungen, die den internationalen Handel grundlegend beeinflussen."
            },
            {
                type: "info",
                emoji: "🇺🇸",
                title: "Protektionistische Zollpolitik der USA",
                text: "Ein zentraler Trend ist die stark ausgeweitet protektionistische Zollpolitik der USA. Seit 2025 hat die US-Regierung grundlegend höhere Einfuhrzölle eingeführt, insbesondere auf Produkte aus der EU und anderen Handelspartnern. Ursprünglich lag der durchschnittliche Zollsatz für EU-Importe in die USA bei nur etwa 2 %, heute gelten Mindestzölle von rund 15 %, teilweise sogar bis 50 % oder mehr auf Stahl, Aluminium oder bestimmte Industriegüter. Dies hat die Situation für exportorientierte Unternehmen, insbesondere aus Deutschland, spürbar verändert.",
                highlight: "Von 2% auf mindestens 15% – bis zu 50% auf Stahl und Aluminium"
            },
            {
                type: "info",
                emoji: "⚖️",
                title: "Schutz oder Gefahr?",
                text: "Diese Zölle sollen laut US-Regierung die heimische Industrie vor „unfairem Wettbewerb“ schützen und Arbeitsplätze sichern. Kritiker hingegen sehen darin eine Abkehr von offenen Märkten und eine Gefahr für das multilaterale Handelssystem. Die WeltZollOrganisation (WTO) warnt, dass solche Maßnahmen globales Handelsvolumen einschränken und das Vertrauen in freie Märkte schwächen könnten.",
                source: "Quellen: dihk.de, euronews.com/business"
            },
            {
                type: "quiz",
                question: "Von wie viel Prozent auf wie viel Prozent stiegen die US-Zölle auf EU-Importe?",
                options: ["Von 5% auf 10%", "Von 2% auf mind. 15%", "Von 10% auf 25%", "Von 0% auf 5%"],
                correct: 1,
                explanation: "Der durchschnittliche Zollsatz stieg von etwa 2% auf Mindestzölle von rund 15%, teilweise bis 50%."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Seit 2025: massive Umbrüche in den Handelsbeziehungen",
                    "USA: protektionistische Zollpolitik mit stark erhöhten Einfuhrzöllen",
                    "Zollsätze: von ~2% auf 15-50%",
                    "WTO warnt vor Einschränkung des globalen Handelsvolumens"
                ]
            }
        ]
    },
    "5-2": {
        title: "Reaktionen und Gegenstrategien der EU",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "🇪🇺",
                title: "EU stark betroffen",
                text: "Auch die EU ist von diesen Zollerhöhungen stark betroffen, da sie historisch einer der größten Handelspartner der USA ist. Deutsche Exporte in die USA reduzierten sich massiv, was vor allem auf die höheren Kosten infolge der Zölle zurückzuführen ist. Einige Sektoren wie Automobil- und Maschinenbau, Chemie oder Metallverarbeitung stehen damit vor bedeutenden wirtschaftlichen Herausforderungen.",
                highlight: "Besonders betroffen: Automobil, Maschinenbau, Chemie, Metallverarbeitung"
            },
            {
                type: "info",
                emoji: "🛡️",
                title: "EU-Strategien (1/3)",
                text: "Die EU hat mehrere Gegenstrategien entwickelt:\n\n**1)** Gemeinsame Verhandlungen mit den USA zur Stabilisierung der Handelssituation, z.b. durch Abkommen mit klaren Zollregeln"
            },
            {
                type: "info",
                emoji: "📋",
                title: "EU-Strategien (2/3)",
                text: "**2)** Zollkontigente und befristete Zollsenkungen für bestimmte Güter als Ausgleich\n\n**3)** Ausbau eigener Wettbewersstrategien wie „Made in Europe“, um die Wettbewerbsfähigkeit der europäischen Industrie zu stärken und weniger abhängig von Importen und Exporten in unsichere Märkte zu werden",
                source: "Quelle: welt.de – EU-Kommissar will „Made in Europe“ etablieren"
            },
            {
                type: "info",
                emoji: "🤝",
                title: "Gemeinsame Erklärung EU-USA",
                text: "Ein bedeutender Schritt in diesem Prozess war die Gemeinsame Erklärung zwischen EU und USA im August 2025, durch die die Zölle auf bestimmten Warengruppen vereinheitlicht und Zollobergrenzen eingeführt werden sollen, um „Vorhersehbarkeit und Stabilität in den transatlantischen Handelsbeziehungen“ zu schaffen.",
                source: "Quelle: consilium.europa.eu – EU-US Trade Relations, Nov. 2025"
            },
            {
                type: "quiz",
                question: "Welche Strategie ist KEINE EU-Gegenstrategie?",
                options: ["Verhandlungen mit den USA", "Eigene Zollerhöhungen auf 100%", "Zollkontingente als Ausgleich", "\"Made in Europe\" Strategie"],
                correct: 1,
                explanation: "Die EU setzt auf Verhandlungen, Zollkontingente und „Made in Europe“ – nicht auf maximale Zollerhöhungen."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "EU als historisch größter Handelspartner der USA stark betroffen",
                    "Drei Strategien: Verhandlungen, Zollkontingente, Made in Europe",
                    "August 2025: Gemeinsame Erklärung EU-USA für Stabilität"
                ]
            }
        ]
    },
    "5-3": {
        title: "Globale Auswirkungen & neue Handelsbeziehungen",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "📉",
                title: "Schwächeres Wachstum",
                text: "Internationale Organisationen wie die WTO und die UN Conference on Trade and Development (UNCTAD) berichten von einer Abkühlung des globalen Wachstums im Warenhandel, die unter anderem durch die zunehmenden Handelsspannungen bedingt ist.",
                source: "Quellen: euronews.com, unctad.org – Global Trade Update Jan. 2026"
            },
            {
                type: "info",
                emoji: "🇮🇳",
                title: "Diversifizierung: EU-Indien",
                text: "Ein wichtiger Trend ist die verstärkte Suche nach neuen „Freihandelszonen“, um Abhängigkeiten zu reduzieren. Ein prominentes Beispiel dafür ist das große Freihandelsabkommen zwischen der EU und Indien (Januar 2026), bei dem Zölle auf zahlreiche Produkte reduziert oder aufgehoben werden sollen – ein Schritt, der auch als Antwort auf den protektionistischen Druck aus den USA gesehen wird.",
                highlight: "EU-Indien Freihandelsabkommen: Januar 2026",
                source: "Quelle: barrons.com – EU India Trade Deal"
            },
            {
                type: "info",
                emoji: "🏭",
                title: "Strategische Autonomie",
                text: "Gleichzeitig verschiebt sich die Weltwirtschaftspolitik in Richtung „strategischer Autonomie“, d. h. Länder oder Bündnisse versuchen, ihre eigenen industriellen Kapazitäten zu stärken und unabhängiger von internationalen Lieferketten zu werden. Dies zeigt sich sowohl bei den USA als auch bei der EU.",
                source: "Quelle: think.ing.com – Global Trade in 2026"
            },
            {
                type: "quiz",
                question: "Was bedeutet 'strategische Autonomie'?",
                options: ["Isolation vom Welthandel", "Stärkung eigener Kapazitäten und weniger Abhängigkeit", "Nur mit Nachbarländern handeln", "Alle Zölle abschaffen"],
                correct: 1,
                explanation: "Strategische Autonomie heißt, eigene industrielle Kapazitäten zu stärken und unabhängiger von internationalen Lieferketten zu werden."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "WTO und UNCTAD: Abkühlung des globalen Handelswachstums",
                    "Neue Freihandelszonen, z.B. EU-Indien (Jan. 2026)",
                    "Trend zur strategischen Autonomie bei USA und EU"
                ]
            }
        ]
    },
    "5-4": {
        title: "Fazit: Aktuelle Entwicklungen",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "1️⃣",
                title: "Fazit – Punkt 1 & 2",
                text: "**1)** Zunahme protektionistischer Maßnahmen, vorallem durch höhere Zölle und Importbarrieren in den USA\n\n**2)** Abschwächung und Neuorientierung traditioneller Handelsbeziehungen, insbesondere zwischen Europa und Nordamerika"
            },
            {
                type: "info",
                emoji: "3️⃣",
                title: "Fazit – Punkt 3 & 4",
                text: "**3)** Ausbau alternativer Freihandelsstrukturen, z.b. zwischen EU und Indien\n\n**4)** Veränderte Wettbewerbsbedingungen für Unternehmen weltweit, die strategisch auf neue Märkte und Lieferketten reagieren müssen."
            },
            {
                type: "info",
                emoji: "5️⃣",
                title: "Fazit – Punkt 5",
                text: "**5)** Globale Volatilität im Handel aufgrund geopolitischer Spannungen, die das bisherige System offener Märkte in Frage stellen.",
                highlight: "Das bisherige System offener Märkte steht unter Druck"
            },
            {
                type: "quiz",
                question: "Welcher Trend prägt den internationalen Handel seit 2025?",
                options: ["Alle Zölle werden abgeschafft", "Zunahme protektionistischer Maßnahmen", "Nur Europa handelt noch", "Handel wird unwichtiger"],
                correct: 1,
                explanation: "Zunahme protektionistischer Maßnahmen, besonders durch höhere Zölle der USA."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung Aufgabe 1",
                points: [
                    "Protektionismus nimmt zu (v.a. USA)",
                    "Traditionelle Handelsbeziehungen im Umbruch",
                    "Alternative Freihandelsstrukturen (EU-Indien)",
                    "Unternehmen müssen strategisch reagieren",
                    "Globale Volatilität stellt offene Märkte in Frage"
                ]
            }
        ]
    },

    // =============================================
    // MODUL 6: M11 – REGIONALE HANDELSABKOMMEN (PDF)
    // =============================================
    "6-1": {
        title: "Entwicklung regionaler Handelsabkommen",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "📊",
                title: "Material M11: RTAs weltweit",
                text: "Material M11 zeigt die weltweite Entwicklung regionaler Handelsabkommen (Regional Trade Agreements, RTAs). Auffällig ist der starke Anstieg seit den 1990er-Jahren, insbesondere nach 2000. Die Zahl der gemeldeten Abkommen steigt kontinuierlich und erreicht heute mehrere hundert aktive Vereinbarungen weltweit. Diese Entwicklung ist jedoch nicht gleichmäßig verlaufen, sondern steht in engem Zusammenhang mit politischen und wirtschaftlichen Ereignissen."
            },
            {
                type: "info",
                emoji: "🇺🇸",
                title: "Trump & America First (2016/17)",
                text: "Mit der Wahl Donald Trumps 2016 und seinem Amtsantritt 2017 änderte sich die Handelspolitik der USA grundlegend. Trump vertrat eine klar protektionistische Linie („America First“). Er trat aus dem transpazifischen Freihandelsabkommen (TPP), verhandelte neu von NAFTA –> USMCA, führte Strafzölle auf Stahl und Aluminium ein und begann ein Handelskonflikt mit China.",
                highlight: "TPP-Ausstieg, NAFTA → USMCA, Strafzölle, Handelskonflikt mit China",
                source: "Quelle: bpb.de – Trumps Handelspolitik"
            },
            {
                type: "info",
                emoji: "🔄",
                title: "Reaktion anderer Staaten",
                text: "Staaten reagierten auf die Unsicherheit der US-Handelspolitik, indem sie eigene regionale Abkommen vorantrieben. Während die USA sich teilweise aus multilateralen Strukturen zurückgezogen, intensivierten andere Regionen, wie zum Beispiel die EU oder Asien ihre Wirtschaftliche Zusammenarbeit."
            },
            {
                type: "quiz",
                question: "Was war Trumps Handelspolitik ab 2017?",
                options: ["Freihandel für alle", "America First – Protektionismus", "Nur mit China handeln", "Alle Zölle abschaffen"],
                correct: 1,
                explanation: "Trump verfolgte eine klar protektionistische Linie: TPP-Ausstieg, Strafzölle, NAFTA-Neuverhandlung."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Starker Anstieg regionaler Handelsabkommen seit den 1990ern",
                    "Trump 2017: Protektionismus und America First",
                    "Andere Staaten reagierten mit eigenen regionalen Abkommen"
                ]
            }
        ]
    },
    "6-2": {
        title: "Corona-Krise & Handelsabkommen",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "🦠",
                title: "Corona & Welthandel",
                text: "Die Corona Pandemie stellte ab 2019/2020 einen massiven Rückschritt für den Welthandel dar. Folgen waren unter anderem die Unterbrechung globaler Lieferketten, Produktionsausfälle, Exportbeschränkungen (z.b. medizinische Ausrüstung) und stärkere nationale Eingriffe in Handelsstrukturen. Viele Staaten erkannten in dieser Phase ihre Abhängigkeit von globalen Lieferketten, insbesondere von China. Dies verstärkte die Diskussion um strategische Autonomie und De-Risking. De-Risking beschreibt indem Zusammenhang die übermäßige Abhängigkeit vom chinesischen Markt und die Intention sich von diesem zu lösen, um in andere Märkte zu investieren.",
                highlight: "De-Risking: Lösung von übermäßiger Abhängigkeit vom chinesischen Markt"
            },
            {
                type: "info",
                emoji: "📈",
                title: "Regionale Abkommen trotz Krise",
                text: "Trotz der Krise wurden regionale Handelsabkommen weiter ausgebaut. Saaten suchten verlässliche Partner in geografischer Nähe, um Risiken globaler Abhängigkeiten zu reduzieren. Die Corona-Krise hat also nicht zum Stilstand regionaler Handesabkommen geführt, sondern ihre strategische Bedeutung sogar verstärkt.",
                highlight: "Corona verstärkte die Bedeutung regionaler Handelsabkommen"
            },
            {
                type: "quiz",
                question: "Was bedeutet 'De-Risking'?",
                options: ["Alle Risiken eliminieren", "Abhängigkeit vom chinesischen Markt reduzieren", "Nur noch lokal handeln", "Versicherungen abschließen"],
                correct: 1,
                explanation: "De-Risking beschreibt die Reduktion der übermäßigen Abhängigkeit vom chinesischen Markt, um in andere Märkte zu investieren."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung",
                points: [
                    "Corona: Unterbrechung von Lieferketten, Exportbeschränkungen",
                    "Erkenntnis: zu hohe Abhängigkeit von China",
                    "De-Risking als neue Strategie",
                    "Regionale Abkommen wurden sogar verstärkt"
                ]
            }
        ]
    },
    "6-3": {
        title: "Die drei Phasen",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "1️⃣",
                title: "Phase 1: Globalisierung (1990–2008)",
                text: "**Globalisierungsphase (1990 - 2008):** Starker Anstieg durch Liberalisierung und WTO Expansion",
                highlight: "Starker Anstieg regionaler Handelsabkommen durch wirtschaftliche Liberalisierung"
            },
            {
                type: "info",
                emoji: "2️⃣",
                title: "Phase 2: Finanzkrise (ab 2008)",
                text: "**Finanzkrise und geopolitische Spannungen (ab 2008):** Verlangsamung des multilateralen Handels, stärkere regionale Kooperation.",
                highlight: "Weniger globaler, mehr regionaler Handel"
            },
            {
                type: "info",
                emoji: "3️⃣",
                title: "Phase 3: Trump & Corona (ab 2017/2020)",
                text: "**Trump-Ära & Corona-Krise (ab 2017/2020):** Zunehmende Unsicherheit im Welthandel ––> Ausbau regionaler Bündnisse als Absicherungsstrategie",
                highlight: "Regionale Bündnisse als Schutz gegen globale Unsicherheit"
            },
            {
                type: "quiz",
                question: "In welcher Phase nahmen regionale Handelsabkommen stark zu?",
                options: ["Vor 1990", "1990-2008 (Globalisierung)", "Nur nach Corona", "Gar nicht"],
                correct: 1,
                explanation: "In der Globalisierungsphase 1990-2008 stiegen regionale Handelsabkommen durch Liberalisierung und WTO-Expansion stark an."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung M11",
                points: [
                    "Phase 1 (1990-2008): Globalisierung & WTO-Expansion",
                    "Phase 2 (ab 2008): Finanzkrise → mehr regionale Kooperation",
                    "Phase 3 (ab 2017/2020): Trump & Corona → regionale Bündnisse als Absicherung"
                ]
            }
        ]
    },

    // =============================================
    // MODUL 7: M12 – ZÖLLE, PREISE & KONSUM (PDF)
    // =============================================
    "7-1": {
        title: "Auswirkungen auf Preise & Konsum",
        xp: 20,
        cards: [
            {
                type: "info",
                emoji: "💰",
                title: "Material M12: Zölle & Verbraucher",
                text: "Material M 12 verdeutlicht die wirtschaftlichen Folgen von Zöllen für Verbraucherinnen und Verbraucher. Durch höhere Importpreise steigen häufig auch die Endpreise für Konsumgüter. Dies führt zu einer geringeren Auswahl, steigenden Lebenshaltungskosten und sinkender Kaufkraft. Die Grafik zeigt damit, dass Zölle zwar Vorteile für inländische Produzenten haben können, gleichzeitig jedoch die Konsumentinnen und Konsumenten belasten. Es entsteht ein Zielkonflikt zwischen wirtschaftlichem Schutz und sozialer Gerechtigkeit.",
                highlight: "Zielkonflikt: Wirtschaftlicher Schutz vs. soziale Gerechtigkeit",
                source: "Quelle: de.statista.com"
            },
            {
                type: "info",
                emoji: "📊",
                title: "Die Kette der Auswirkungen",
                text: "**Höhere Importpreise** → Steigende Endpreise → Geringere Auswahl → Steigende Lebenshaltungskosten → Sinkende Kaufkraft",
                highlight: "Verbraucher tragen am Ende die Kosten der Zölle"
            },
            {
                type: "quiz",
                question: "Was ist der Zielkonflikt bei Zöllen?",
                options: ["Import vs. Export", "Wirtschaftlicher Schutz vs. soziale Gerechtigkeit", "Stadt vs. Land", "Produktion vs. Konsum"],
                correct: 1,
                explanation: "Zölle können inländische Produzenten schützen, belasten aber Verbraucher durch höhere Preise und weniger Auswahl."
            },
            {
                type: "summary",
                emoji: "✅",
                title: "Zusammenfassung M12",
                points: [
                    "Zölle erhöhen Importpreise und Endpreise",
                    "Folgen: weniger Auswahl, höhere Lebenshaltungskosten",
                    "Zielkonflikt: Schutz der Industrie vs. Belastung der Verbraucher"
                ]
            }
        ]
    }
};

// Module configuration for dynamic lesson counting
const MODULE_CONFIG = {
    1: { count: 4 },
    2: { count: 4 },
    3: { count: 4 },
    4: { count: 4 },
    5: { count: 4 },
    6: { count: 3 },
    7: { count: 1 },
    8: { count: 4 },
    9: { count: 4 },
    10: { count: 1 }
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
                ${card.source ? `<div class="card-source">${card.source}</div>` : ''}
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

function toggleModule(num) {
    const lessons = document.getElementById(`module-${num}-lessons`);
    const chevron = document.getElementById(`chevron-${num}`);
    if (!lessons) return;
    
    const isCollapsed = lessons.classList.contains('collapsed');
    if (isCollapsed) {
        lessons.classList.remove('collapsed');
        lessons.style.maxHeight = lessons.scrollHeight + 'px';
        chevron.classList.add('open');
    } else {
        lessons.classList.add('collapsed');
        lessons.style.maxHeight = '0';
        chevron.classList.remove('open');
    }
}

function updateAllLessonStatuses() {
    loadLessonProgress();
    
    let totalDone = 0;
    let totalLessons = 0;
    
    for (const [mod, config] of Object.entries(MODULE_CONFIG)) {
        let moduleDone = 0;
        for (let l = 1; l <= config.count; l++) {
            const key = `${mod}-${l}`;
            totalLessons++;
            const status = document.getElementById(`lesson-${mod}-${l}-status`);
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
        
        const modProgress = document.getElementById(`mod${mod}-progress`);
        if (modProgress) modProgress.textContent = `${moduleDone}/${config.count}`;
    }
    
    // Update total progress
    const lessonsDoneEl = document.getElementById('lessons-done');
    if (lessonsDoneEl) lessonsDoneEl.textContent = totalDone;
    
    const totalProgressEl = document.getElementById('total-progress');
    if (totalProgressEl) totalProgressEl.style.width = (totalDone / totalLessons * 100) + '%';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadLessonProgress();
    setTimeout(updateAllLessonStatuses, 100);
});
