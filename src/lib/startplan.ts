import { calculateOffer, euro, modules, pricing, type ModuleId, type SupportId } from "./offer";
import { sectors, type Sector, type UseCase } from "./sectors";
import { CAL_URL, MAIL } from "./hub";

// Startplan für Ihren Betrieb (Strategie/STARTPLAN-DOWNLOAD.md, Variante A): eine erste Aufgabe, ein Branchenbeispiel,
// Preisrahmen, ein nächster Schritt. Wird im Browser aus der URL des Rechners erzeugt, kein Server, keine Datenübertragung.

export const STARTPLAN_PATH = "/betriebe/startplan";
export const STARTPLAN_CAL_URL = `${CAL_URL}?quelle=startplan`;
export const promises = ["Den Preis kennen Sie vor dem Start", "Was ich einrichte, gehört Ihnen", "Sonst Geld zurück"];
export const needs = ["Ein echtes Beispiel aus Ihrem Alltag, zum Beispiel eine Kundenanfrage oder eine Notiz.", "Die Programme, die Sie heute nutzen, etwa für E-Mail, Kalender und Angebote.", "30 Minuten für ein Gespräch."];
export const prep = ["Eine Beispiel-Mail oder Notiz raussuchen", "Programme notieren (Mail, Kalender, Angebote)", "Termin wählen"];

export type StartplanInput = { industry: string; selected: ModuleId[]; connected: boolean; support: SupportId };
export type StartplanExample = { title: string; problem: string; result: string; request: string; rule: string; output: string; helper: string; source: "sector" | "demo"; from?: string };

const moduleIds = modules.map(m => m.id) as ModuleId[];
const isModule = (value: string): value is ModuleId => (moduleIds as string[]).includes(value);

// Postfach-Beispiel aus der Vorschau auf /betriebe (Demo.tsx), wenn der Katalog kein Beispiel zum gewählten Modul hat.
export const demoExamples: Record<ModuleId, StartplanExample | undefined> = {
  inbox: { source: "demo", helper: "Postfach-Helfer", title: "Kundenanfragen zuerst sehen.", problem: "Kundenanfragen, Lieferantenfragen und Werbung landen im selben Postfach.", result: "Sie wissen morgens, was zuerst dran ist, und antworten mit einem vorbereiteten Entwurf.", request: "Drei Nachrichten kommen an: Eine Kundin wartet auf ein Angebot. Ein Lieferant hat eine Rückfrage. Ein Newsletter liegt dazwischen.", rule: "Kundenanfragen haben Vorrang. Antworten werden als Entwurf vorbereitet.", output: "Zuerst: der Kundin zum Angebot antworten. Danach: die Rückfrage zur Lieferung klären. Später: den Newsletter lesen." },
  calendar: { source: "demo", helper: "Termin-Helfer", title: "Terminfragen mit einem Vorschlag beantworten.", problem: "Terminwünsche kommen zwischen zwei Aufträgen an und bleiben liegen.", result: "Sie bekommen eine klare Grundlage für Ihre Terminantwort und bestätigen selbst.", request: "Ein Kunde möchte am Donnerstag vorbeikommen. Zwei Terminoptionen stehen zur Auswahl. Die Dauer muss noch geklärt werden.", rule: "Es wird nur ein Vorschlag vorbereitet. Sie prüfen Dauer und Verfügbarkeit.", output: "Terminwunsch: Donnerstag. Terminoptionen zur Prüfung: 10:00 oder 14:00 Uhr. Offene Frage: Wie lange dauert der Besuch?" },
  documents: { source: "demo", helper: "Unterlagen-Helfer", title: "Anschreiben aus einer Notiz vorbereiten.", problem: "Für ähnliche Aufträge tippen Sie dieselben Texte immer wieder neu.", result: "Sie beginnen mit einem vorbereiteten Entwurf in Ihrer Vorlage und ergänzen nur noch, was fehlt.", request: "Eine Gesprächsnotiz liegt vor: Kunde interessiert sich für die Leistung. Ein Vor-Ort-Termin soll abgestimmt werden. Ein Anschreiben wird gebraucht.", rule: "Die Angaben des Kunden bilden die Grundlage. Fehlende Informationen werden nicht erfunden, sondern als Rückfrage markiert.", output: "Kundenwunsch kurz zusammengefasst. Anschreiben als Entwurf vorbereitet. Fehlende Angaben als Rückfragen markiert." },
  notes: undefined,
  marketing: undefined,
};

export function parseStartplan(params: URLSearchParams): StartplanInput {
  const industry = (params.get("betrieb") || "").trim() || "Noch offen";
  const selected = [...new Set((params.get("module") || "").split(",").map(v => v.trim()).filter(isModule))];
  const support = params.get("betreuung") || "none";
  return { industry, selected, connected: params.get("einrichtung") === "verbunden", support: support in pricing.support ? (support as SupportId) : "none" };
}

export function startplanHref(input: StartplanInput) {
  const params = new URLSearchParams();
  if (input.industry && input.industry !== "Noch offen") params.set("betrieb", input.industry);
  if (input.selected.length) params.set("module", input.selected.join(","));
  params.set("einrichtung", input.connected ? "verbunden" : "einfach");
  params.set("betreuung", input.support);
  return `${STARTPLAN_PATH}?${params.toString()}`;
}

export const sectorForIndustry = (industry: string): Sector | undefined => sectors.find(sector => sector.label === industry);

const fromCase = (useCase: UseCase, from?: string): StartplanExample => ({ source: "sector", from, helper: useCase.assistant.name, title: useCase.title, problem: useCase.problem, result: useCase.result, request: useCase.request, rule: useCase.assistant.rule, output: useCase.output });

// Beispiel zum Start-Modul: eigener Betrieb, sonst Vorschau-Beispiel, sonst ein Betrieb aus derselben Gruppe, sonst irgendein Betrieb mit diesem Modul.
function exampleFor(start: ModuleId, sector: Sector | undefined): StartplanExample {
  const own = sector?.cases.find(c => c.module === start);
  if (own) return fromCase(own);
  if (demoExamples[start]) return demoExamples[start]!;
  const related = [...(sector ? sectors.filter(s => s.group === sector.group && s.slug !== sector.slug) : []), ...sectors];
  for (const candidate of related) { const useCase = candidate.cases.find(c => c.module === start); if (useCase) return fromCase(useCase, candidate.label); }
  return demoExamples.inbox!;
}

// Reihenfolge folgt dem Katalog: erste Aufgabe des gewählten Betriebs, die auch ausgewählt ist, sonst Postfach, sonst die erste gewählte Aufgabe.
export function buildStartplan(input: StartplanInput) {
  const selected = input.selected.length ? input.selected : (["inbox"] as ModuleId[]);
  const sector = sectorForIndustry(input.industry);
  const sectorCase = sector?.cases.find(useCase => selected.includes(useCase.module));
  const start: ModuleId = sectorCase?.module ?? (selected.includes("inbox") ? "inbox" : moduleIds.find(id => selected.includes(id))!);
  const example = exampleFor(start, sector);
  const startModule = modules.find(m => m.id === start)!;
  const later = modules.filter(m => m.id !== start && selected.includes(m.id));
  const estimate = calculateOffer(selected, input.connected, input.support)!;
  return { ...input, selected, sector, start: startModule, example, later, estimate };
}
export type Startplan = ReturnType<typeof buildStartplan>;

export const startplanTitle = (plan: Pick<Startplan, "sector" | "industry">) => plan.sector ? `Startplan für Ihren Betrieb · ${plan.sector.label}` : plan.industry !== "Noch offen" ? `Startplan für Ihren Betrieb · ${plan.industry}` : "Startplan für Ihren Betrieb";
export const startplanSubject = (plan: Pick<Startplan, "sector" | "industry">) => `Startplan ${plan.sector?.label ?? (plan.industry !== "Noch offen" ? plan.industry : "für meinen Betrieb")}: Gespräch?`;
export const formatDate = (date: Date) => new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric" }).format(date);

export function priceLine(plan: Startplan) {
  return `Einrichtung ${euro(plan.estimate.low)} bis ${euro(plan.estimate.high)}, Endpreis.`;
}
export function supportLine(plan: Startplan) {
  const option = pricing.support[plan.support];
  return option.price ? `Danach ${euro(option.price)} pro Monat für ${option.hours} ${option.hours === 1 ? "Stunde" : "Stunden"} persönliche Hilfe, wenn Sie das möchten.` : "Keine laufenden Kosten. Weitere Hilfe vereinbaren wir bei Bedarf.";
}

// Textfassung für den Mail-Entwurf aus dem Rechner.
export function startplanText(plan: Startplan, date = new Date()) {
  const lines = [
    startplanTitle(plan), `${formatDate(date)} · erstellt auf marcogrotemeyer.de/betriebe · unverbindlich`, "",
    `IHRE ERSTE AUFGABE: ${plan.example.title}`, `Heute: ${plan.example.problem}`, `Mit Helfer: ${plan.example.result}`, "",
    "SO SIEHT DAS BEI IHNEN AUS", `Anfrage: ${plan.example.request}`, `Regel: ${plan.example.rule}`, `Ergebnis: ${plan.example.output}`, "",
  ];
  if (plan.later.length) lines.push(`DANACH MÖGLICH: ${plan.later.map(m => m.label).join(", ")}`, "");
  lines.push("WAS SIE DAFÜR BRAUCHEN", ...needs.map(n => `- ${n}`), "",
    "PREISRAHMEN", priceLine(plan), supportLine(plan), `Einrichtung: ${plan.connected ? "mehrere Programme miteinander verbinden" : "mit Vorlagen und vorhandenen Programmen starten"}.`, "Enthalten: besprechen, einrichten, gemeinsam ausprobieren, kurze Anleitung.", promises.join(" · "), "",
    "IHR NÄCHSTER SCHRITT", `Gespräch wählen: ${STARTPLAN_CAL_URL}`, "30 Minuten, kostenlos, unverbindlich. Oder antworten Sie auf diese Mail.", "",
    "IN 5 MINUTEN VORBEREITET", ...prep.map(p => `[ ] ${p}`), "",
    `Marco Grotemeyer · Bad Oeynhausen · ${MAIL}`, "Erstellt im Browser, es wurden keine Daten übertragen.");
  return lines.join("\n");
}
