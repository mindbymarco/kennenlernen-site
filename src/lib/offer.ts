export const modules = [
  { id: "inbox", label: "E-Mails & Antworten", description: "Postfach ordnen und Antwortvorlagen einrichten.", low: 300, high: 500 },
  { id: "calendar", label: "Termine & Erinnerungen", description: "Bürozeit planen und an offene Termine erinnern.", low: 250, high: 450 },
  { id: "notes", label: "Notizen & Rückrufe", description: "Aus Notizen übersichtliche Aufgaben machen.", low: 250, high: 450 },
  { id: "documents", label: "Angebote & Unterlagen", description: "Wiederkehrende Texte und Dokumente vorbereiten.", low: 350, high: 650 },
  { id: "marketing", label: "Werbung & Beiträge", description: "Vorlagen für Flyer und einfache Beiträge erstellen.", low: 250, high: 450 },
] as const;
export type ModuleId = (typeof modules)[number]["id"];
export const pricing = {
  status: "illustrative" as const,
  base: 190,
  connection: { low: 200, high: 400 },
  support: { none: { label: "Erst einmal ohne laufende Betreuung", price: 0, hours: 0 }, light: { label: "1 Stunde persönliche Hilfe pro Monat", price: 99, hours: 1 }, regular: { label: "2 Stunden persönliche Hilfe pro Monat", price: 179, hours: 2 } },
};
export type SupportId = keyof typeof pricing.support;
export function calculateOffer(ids: readonly ModuleId[], connected: boolean, support: SupportId) {
  const selected = modules.filter(m => ids.includes(m.id));
  if (!selected.length) return null;
  return {
    low: pricing.base + selected.reduce((n, m) => n + m.low, 0) + (connected ? pricing.connection.low : 0),
    high: pricing.base + selected.reduce((n, m) => n + m.high, 0) + (connected ? pricing.connection.high : 0),
    monthly: pricing.support[support].price,
    selected,
  };
}
export const industryGroups = [
  { label: "Handwerk & Haus", items: ["Handwerk", "Heizung & Sanitär", "Elektrobetriebe", "Malerbetriebe", "Tischlereien"] },
  { label: "Schönheit & Gesundheit", items: ["Friseursalons", "Kosmetikstudios", "Nagelstudios", "Massagebetriebe", "Physiotherapiepraxen"] },
  { label: "Sport & Freizeit", items: ["Kleine Fitnessstudios", "Yogastudios", "Pilatesstudios", "Tanzschulen", "Kampfsportschulen"] },
  { label: "Service vor Ort", items: ["Reinigungsbetriebe", "Gartenpflege", "Autowerkstätten", "Tierpflege", "Ferienwohnungsvermietung"] },
  { label: "Handel & Selbstständige", items: ["Einzelhandel", "Floristik", "Fotografie", "Veranstaltungsservice", "Beratung & freie Berufe"] },
];
export type Industry = {
  id: string; label: string; short: string; headline: string; intro: string;
  pains: string[]; suggested: ModuleId[];
  incomingTitle: string; incoming: string; organized: string[]; draftTitle: string; draft: string; next: string;
};
export const industries: Industry[] = [
  { id: "handwerk", label: "Handwerk", short: "Handwerk", headline: "Aufträge im Kopf. Den Papierkram im Griff.", intro: "Sie sind bei Kunden oder auf der Baustelle. Ich helfe Ihnen, Anfragen, Rückrufe und Unterlagen übersichtlich vorzubereiten.", pains: ["Kundenanfragen im Postfach erkennen", "Rückrufe mit Datum festhalten", "Vorlagen für Angebote und Anschreiben nutzen"], suggested: ["inbox", "notes", "documents"], incomingTitle: "Neue Kundenanfrage", incoming: "Wir möchten die Terrasse erneuern. Können Sie sich das nächste Woche ansehen und uns ein Angebot machen?", organized: ["Anfrage: Terrasse", "Nächster Schritt: Besichtigung", "Rückmeldung: Termin abstimmen"], draftTitle: "Antwort zur Prüfung", draft: "Vielen Dank für Ihre Anfrage. Gerne schaue ich mir die Terrasse an. Welche Zeiten passen Ihnen nächste Woche?", next: "Sie prüfen die Antwort und stimmen den Termin ab." },
  { id: "shk", label: "Heizung & Sanitär", short: "Heizung & Sanitär", headline: "Zwischen Wartung und Kundenanruf den Überblick behalten.", intro: "Ich helfe Ihnen, Wartungsanfragen zu ordnen, Terminantworten vorzubereiten und Rückrufe festzuhalten.", pains: ["Wartung und andere Anfragen übersichtlich trennen", "Terminwünsche und Rückrufe festhalten", "Wiederkehrende Wartungsanschreiben vorbereiten"], suggested: ["inbox", "calendar", "documents"], incomingTitle: "Anfrage zur Wartung", incoming: "Unsere jährliche Heizungswartung steht an. Wir wären nächste Woche vormittags zu Hause. Wann wäre ein Termin möglich?", organized: ["Anfrage: Heizungswartung", "Terminwunsch: vormittags", "Nächster Schritt: Kalender prüfen"], draftTitle: "Terminantwort als Vorlage", draft: "Vielen Dank für Ihre Wartungsanfrage. Ich prüfe unsere freien Termine am Vormittag und melde mich mit einem Vorschlag bei Ihnen.", next: "Sie wählen einen freien Termin und bestätigen ihn selbst." },
  { id: "salon", label: "Friseursalons", short: "Friseursalons", headline: "Zeit für Ihre Kundschaft. Ruhe bei den Anfragen.", intro: "Zwischen zwei Kunden bleibt wenig Zeit für Nachrichten. Gemeinsam vereinfachen wir Antworten, Terminabsprachen und kleine Werbeaktionen.", pains: ["Häufige Fragen mit passenden Vorlagen beantworten", "Erinnerungen in der vorhandenen Terminlösung prüfen", "Beiträge zu Öffnungszeiten oder Aktionen vorbereiten"], suggested: ["inbox", "calendar", "marketing"], incomingTitle: "Nachricht an den Salon", incoming: "Hallo, haben Sie am Samstag noch einen Termin für Waschen und Schneiden frei?", organized: ["Wunsch: Waschen & Schneiden", "Tag: Samstag", "Nächster Schritt: Verfügbarkeit prüfen"], draftTitle: "Antwort fertig vorbereitet", draft: "Danke für Ihre Nachricht! Ich schaue nach einem freien Termin am Samstag. Passt es Ihnen eher am Vormittag oder am Nachmittag?", next: "Sie prüfen den Kalender und ergänzen einen passenden Termin." },
  { id: "fitness", label: "Kleine Fitnessstudios", short: "Fitnessstudios", headline: "Mehr Zeit auf der Trainingsfläche. Weniger offene Nachrichten.", intro: "Ich helfe Ihnen, Probetrainingsanfragen zu beantworten, Rückmeldungen festzuhalten und Kursinformationen einfacher vorzubereiten.", pains: ["Anfragen zum Probetraining übersichtlich sammeln", "Offene Terminabsprachen im Blick behalten", "Vorlagen für Kursinfos und Beiträge erstellen"], suggested: ["inbox", "notes", "marketing"], incomingTitle: "Anfrage zum Probetraining", incoming: "Ich würde Ihr Studio gerne kennenlernen. Kann ich nächste Woche abends ein Probetraining machen?", organized: ["Interesse: Probetraining", "Wunsch: nächste Woche abends", "Nächster Schritt: Termin abstimmen"], draftTitle: "Einladung zur Prüfung", draft: "Schön, dass Sie unser Studio kennenlernen möchten! Welcher Abend passt Ihnen nächste Woche? Dann stimmen wir einen Termin fürs Probetraining ab.", next: "Sie stimmen den Termin ab und legen eine Erinnerung an." },
];
export const euro = (n: number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
export function makeSummary(industry: string, ids: ModuleId[], connected: boolean, support: SupportId) {
  const estimate = calculateOffer(ids, connected, support);
  return ["Meine Wünsche für einen leichteren Büroalltag", `Branche: ${industry}`, `Aufgaben: ${estimate?.selected.map(m => m.label).join(", ") || "Noch offen"}`, `Einrichtung: ${connected ? "Mehrere Programme verbinden" : "Mit vorhandenen Vorlagen und Programmen starten"}`, `Betreuung: ${pricing.support[support].label}`, estimate ? `Geschätzte Kosten Einrichtung: ${euro(estimate.low)} bis ${euro(estimate.high)} netto` : "Preisrahmen: Noch eine Aufgabe auswählen", `Geschätzte Kosten Betreuung: ${euro(pricing.support[support].price)} netto pro Monat`, "Unverbindliche Kostenschätzung; Programmkosten zusätzlich nach Bedarf. Ein konkretes Angebot wird gemeinsam abgestimmt."].join("\n");
}
