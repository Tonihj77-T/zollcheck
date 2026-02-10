// === INTERAKTIVE CHARTS FÜR ZOLLCHECK ===
// Basierend auf econo=me Wettbewerb 2025/26 Material

const CHART_DATA = {
    // M5: Exportquote Deutschland in % des BIP
    exportquote: {
        title: "Exportquote Deutschland",
        subtitle: "in % des BIP",
        source: "Statistisches Bundesamt",
        labels: [1991, 1995, 2000, 2005, 2008, 2010, 2015, 2018, 2020, 2023],
        data: [25.7, 28.5, 33.0, 41.0, 48.0, 42.5, 47.0, 47.5, 43.0, 42.8],
        color: '#0066cc',
        highlight: {
            year: 2008,
            value: 48,
            text: 'Höchststand vor Finanzkrise'
        }
    },

    // M6: Wichtigste Handelspartner Deutschlands 2024
    handelspartner: {
        title: "Deutschlands Top-Handelspartner 2024",
        subtitle: "in Milliarden Euro",
        source: "Statistisches Bundesamt, 2024",
        countries: [
            { code: 'US', name: 'USA', flag: '🇺🇸', exports: 161.1, imports: 95.4 },
            { code: 'CN', name: 'China', flag: '🇨🇳', exports: 97.0, imports: 163.4 },
            { code: 'NL', name: 'Niederlande', flag: '🇳🇱', exports: 117.3, imports: 98.3 },
            { code: 'FR', name: 'Frankreich', flag: '🇫🇷', exports: 114.4, imports: 70.3 },
            { code: 'PL', name: 'Polen', flag: '🇵🇱', exports: 90.7, imports: 80.5 },
            { code: 'IT', name: 'Italien', flag: '🇮🇹', exports: 84.4, imports: 72.9 },
            { code: 'AT', name: 'Österreich', flag: '🇦🇹', exports: 81.3, imports: 57.3 },
            { code: 'GB', name: 'UK', flag: '🇬🇧', exports: 76.2, imports: 41.4 }
        ],
        colors: {
            exports: '#00a86b',
            imports: '#ff6b6b'
        }
    },

    // M11: Regionale Handelsabkommen weltweit
    handelsabkommen: {
        title: "Regionale Handelsabkommen weltweit",
        subtitle: "Anzahl aktiver Abkommen",
        source: "WTO, 2024",
        labels: [1950, 1960, 1970, 1980, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2024],
        data: [3, 7, 15, 24, 38, 86, 135, 204, 254, 308, 339, 372],
        color: '#6c5ce7',
        annotations: [
            { year: 1995, text: 'WTO gegründet' },
            { year: 2016, text: 'Brexit-Votum' }
        ]
    },

    // M12: Importbeschränkungen im Warenhandel
    importbeschraenkungen: {
        title: "Globale Importbeschränkungen",
        subtitle: "Neue Maßnahmen pro Jahr",
        source: "Global Trade Alert, 2024",
        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        data: [454, 464, 527, 628, 654, 712, 756, 842, 1049, 1478, 1291, 2031, 1584, 2504, 2893, 3247],
        color: '#e74c3c',
        highlight: {
            year: 2018,
            text: 'Trump startet Handelskrieg'
        }
    },

    // Trump-Zölle April 2025 (Liberation Day)
    trumpZoelle: {
        title: "Trumps \"Liberation Day\" Zölle",
        subtitle: "April 2025 - Reziproke Zölle",
        source: "US Trade Representative, 2025",
        baseRate: 10, // Grundzoll auf alle Importe
        countryRates: [
            { country: 'China', flag: '🇨🇳', rate: 34, reason: 'Handelsbilanzdefizit' },
            { country: 'EU', flag: '🇪🇺', rate: 20, reason: 'Handelsbarrieren' },
            { country: 'Japan', flag: '🇯🇵', rate: 24, reason: 'Auto-Importe' },
            { country: 'Südkorea', flag: '🇰🇷', rate: 25, reason: 'Handelsdefizit' },
            { country: 'Schweiz', flag: '🇨🇭', rate: 31, reason: 'Pharma-Regulierung' },
            { country: 'Mexiko', flag: '🇲🇽', rate: 25, reason: 'Auto-Zölle' },
            { country: 'Kanada', flag: '🇨🇦', rate: 25, reason: 'Holz & Stahl' }
        ],
        autoZoll: 25, // Spezialzoll auf Autos
        timeline: [
            { date: '2. April 2025', event: 'Ankündigung "Liberation Day"' },
            { date: '5. April 2025', event: '10% Basiszoll tritt in Kraft' },
            { date: '9. April 2025', event: 'Länderspezifische Zölle aktiv' }
        ]
    },

    // EU-USA Handel 2024
    euUsaHandel: {
        title: "EU-USA Warenhandel 2024",
        subtitle: "in Milliarden Euro",
        source: "Eurostat, 2024",
        euExports: 531.6,
        euImports: 333.4,
        balance: 198.2, // Überschuss EU
        topExports: [
            { product: 'Maschinen', value: 89.2 },
            { product: 'Pharmazeutika', value: 78.4 },
            { product: 'Fahrzeuge', value: 65.3 },
            { product: 'Chemie', value: 52.1 }
        ],
        topImports: [
            { product: 'Mineralöl', value: 48.7 },
            { product: 'Maschinen', value: 45.2 },
            { product: 'Pharma', value: 38.9 },
            { product: 'Flugzeuge', value: 28.4 }
        ]
    }
};

// === CHART RENDERING FUNCTIONS ===

class ZollCharts {
    constructor() {
        this.charts = {};
    }

    // Exportquote Line Chart
    renderExportquote(canvasId) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        const data = CHART_DATA.exportquote;
        
        this.charts.exportquote = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Exportquote %',
                    data: data.data,
                    borderColor: data.color,
                    backgroundColor: data.color + '20',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 5,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: data.title,
                        font: { size: 18, weight: 'bold' }
                    },
                    subtitle: {
                        display: true,
                        text: data.subtitle
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => `${ctx.parsed.y}% des BIP`
                        }
                    },
                    annotation: {
                        annotations: {
                            peak: {
                                type: 'point',
                                xValue: data.highlight.year,
                                yValue: data.highlight.value,
                                backgroundColor: '#ff6b6b',
                                radius: 8,
                                label: {
                                    display: true,
                                    content: data.highlight.text,
                                    position: 'top'
                                }
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 55,
                        title: { display: true, text: '% des BIP' }
                    },
                    x: {
                        title: { display: true, text: 'Jahr' }
                    }
                }
            }
        });
    }

    // Handelspartner Bar Chart
    renderHandelspartner(canvasId) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        const data = CHART_DATA.handelspartner;
        
        this.charts.handelspartner = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.countries.map(c => `${c.flag} ${c.code}`),
                datasets: [
                    {
                        label: 'Exporte',
                        data: data.countries.map(c => c.exports),
                        backgroundColor: data.colors.exports,
                        borderRadius: 4
                    },
                    {
                        label: 'Importe',
                        data: data.countries.map(c => c.imports),
                        backgroundColor: data.colors.imports,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    title: {
                        display: true,
                        text: data.title,
                        font: { size: 18, weight: 'bold' }
                    },
                    subtitle: {
                        display: true,
                        text: data.subtitle
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.x} Mrd. €`
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Milliarden Euro' }
                    }
                }
            }
        });
    }

    // Handelsabkommen Growth Chart
    renderHandelsabkommen(canvasId) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        const data = CHART_DATA.handelsabkommen;
        
        this.charts.handelsabkommen = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Aktive Abkommen',
                    data: data.data,
                    backgroundColor: data.color + '80',
                    borderColor: data.color,
                    borderWidth: 2,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: data.title,
                        font: { size: 18, weight: 'bold' }
                    },
                    subtitle: {
                        display: true,
                        text: `${data.data[data.data.length - 1]} Abkommen in 2024`
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Anzahl Abkommen' }
                    }
                }
            }
        });
    }

    // Importbeschränkungen Chart (mit Highlight)
    renderImportbeschraenkungen(canvasId) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        const data = CHART_DATA.importbeschraenkungen;
        
        // Farben: rot ab 2018
        const colors = data.labels.map(year => 
            year >= 2018 ? '#e74c3c' : '#95a5a6'
        );
        
        this.charts.importbeschraenkungen = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Neue Beschränkungen',
                    data: data.data,
                    backgroundColor: colors,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: data.title,
                        font: { size: 18, weight: 'bold' }
                    },
                    subtitle: {
                        display: true,
                        text: '🔴 Rot = Nach Trumps erstem Handelskrieg 2018'
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => `${ctx.parsed.y.toLocaleString()} neue Maßnahmen`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Anzahl Maßnahmen' }
                    }
                }
            }
        });
    }

    // Trump-Zölle Visualization
    renderTrumpZoelle(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const data = CHART_DATA.trumpZoelle;
        
        let html = `
            <div class="trump-zoelle-container">
                <h3>🇺🇸 ${data.title}</h3>
                <p class="subtitle">${data.subtitle}</p>
                
                <div class="base-rate">
                    <span class="rate-label">Basiszoll auf ALLE Importe:</span>
                    <span class="rate-value">${data.baseRate}%</span>
                </div>
                
                <div class="country-rates">
                    <h4>Zusätzliche Strafzölle:</h4>
                    ${data.countryRates.map(c => `
                        <div class="country-rate">
                            <span class="country">${c.flag} ${c.country}</span>
                            <div class="rate-bar" style="width: ${c.rate * 2}px"></div>
                            <span class="rate">${c.rate}%</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="auto-zoll">
                    🚗 Spezialzoll auf Autos: <strong>${data.autoZoll}%</strong>
                </div>
                
                <div class="timeline">
                    <h4>📅 Timeline:</h4>
                    ${data.timeline.map(t => `
                        <div class="timeline-item">
                            <span class="date">${t.date}</span>
                            <span class="event">${t.event}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    }

    // EU-USA Handel Donut
    renderEuUsaHandel(canvasId) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        const data = CHART_DATA.euUsaHandel;
        
        this.charts.euUsaHandel = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['EU-Exporte in USA', 'USA-Exporte in EU'],
                datasets: [{
                    data: [data.euExports, data.euImports],
                    backgroundColor: ['#00a86b', '#ff6b6b'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: data.title,
                        font: { size: 18, weight: 'bold' }
                    },
                    subtitle: {
                        display: true,
                        text: `EU-Überschuss: ${data.balance} Mrd. €`
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => `${ctx.label}: ${ctx.parsed} Mrd. €`
                        }
                    }
                }
            }
        });
    }

    // Alle Charts rendern
    renderAll() {
        this.renderExportquote('chart-exportquote');
        this.renderHandelspartner('chart-handelspartner');
        this.renderHandelsabkommen('chart-handelsabkommen');
        this.renderImportbeschraenkungen('chart-importbeschraenkungen');
        this.renderTrumpZoelle('trump-zoelle');
        this.renderEuUsaHandel('chart-eu-usa');
    }
}

// Export für globale Nutzung
window.ZollCharts = ZollCharts;
window.CHART_DATA = CHART_DATA;
