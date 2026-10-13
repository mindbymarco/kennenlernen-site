import data from "./sectors.json";
import type { ModuleId } from "./offer";
export type GroupSlug = "handwerk-haus" | "schoenheit-gesundheit" | "sport-freizeit" | "service-vor-ort" | "handel-selbststaendige";
export type VisualKind = "board" | "schedule" | "courses" | "checklist" | "document";
export type UseCase = { id: string; tab: string; title: string; problem: string; solution: string; result: string; module: ModuleId; request: string; facts: string[]; output: string; assistant: { name: string; working: string; rule: string } };
export type Sector = { slug: string; label: string; singular: string; group: GroupSlug; headline: string; intro: string; slots: { time: string; label: string }[]; cases: UseCase[] };
export type SectorGroup = { slug: GroupSlug; label: string; headline: string; intro: string; problems: string[]; outcomes: string[]; visual: VisualKind };
export const sectors = data as Sector[];
export const sectorGroups: SectorGroup[] = [
  { slug: "handwerk-haus", label: "Handwerk & Haus", headline: "Draußen im Einsatz. Im Büro mehr Überblick.", intro: "Baustellen, Besichtigungen und Kundenanrufe bestimmen Ihren Tag. Ich helfe Ihnen, Anfragen, Absprachen und Angebote verständlich vorzubereiten.", problems: ["Anfragen treffen zwischen den Einsätzen ein.", "Rückrufe und Änderungen stehen auf verschiedenen Zetteln.", "Für ähnliche Angebote tippen Sie dieselben Texte neu."], outcomes: ["Die nächsten Schritte zu einer Anfrage stehen an einem Ort.", "Offene Rückmeldungen bekommen eine klare Wiedervorlage.", "Sie ergänzen fachliche Angaben in einer vorbereiteten Angebotsstruktur."], visual: "board" },
  { slug: "schoenheit-gesundheit", label: "Schönheit & Gesundheit", headline: "Für Ihre Kunden da sein. Terminfragen leichter klären.", intro: "Während eines Termins lässt sich nicht jede Nachricht beantworten. Gemeinsam bereiten wir organisatorische Antworten, Terminabsprachen und Informationsblätter vor.", problems: ["Terminanfragen kommen, während Sie Kunden betreuen.", "Häufige organisatorische Fragen kosten immer wieder Schreibzeit.", "Neue Öffnungszeiten oder Hinweise müssen an mehreren Stellen ergänzt werden."], outcomes: ["Leistung und Terminwunsch werden übersichtlich festgehalten.", "Sie prüfen vorbereitete Antworten mit Ihren eigenen Betriebsangaben.", "Organisatorische Hinweise stehen in einer verständlichen Vorlage."], visual: "schedule" },
  { slug: "sport-freizeit", label: "Sport & Freizeit", headline: "Mehr Zeit für Training und Kurse. Weniger offene Fragen.", intro: "Interessenten fragen nach Einstiegen, Kurszeiten und der ersten Stunde. Ich helfe Ihnen, diese Informationen verständlich vorzubereiten und offene Rückmeldungen nachzuhalten.", problems: ["Anfragen zum ersten Besuch bleiben zwischen Kursen liegen.", "Kurszeiten und Anmeldung müssen immer wieder erklärt werden.", "Für neue Kurse fehlen vorbereitete Texte und Unterlagen."], outcomes: ["Interessenten erhalten einen klaren nächsten Schritt zum Einstieg.", "Sie nutzen eine übersichtliche Vorlage mit bestätigten Kurszeiten.", "Kursankündigungen beginnen mit einem prüfbaren Entwurf."], visual: "courses" },
  { slug: "service-vor-ort", label: "Service vor Ort", headline: "Unterwegs arbeiten. Offene Absprachen im Blick behalten.", intro: "Einsätze, Besuche und Übergaben bringen viele kleine Absprachen mit sich. Ich helfe Ihnen, die Angaben und nächsten Aufgaben geordnet vorzubereiten.", problems: ["Bei Anfragen fehlen Angaben für Ihren nächsten Besuch.", "Übergaben und zusätzliche Wünsche werden nebenbei besprochen.", "Kundenhinweise und Begleitunterlagen müssen wiederholt geschrieben werden."], outcomes: ["Vor dem Einsatz erkennen Sie, welche Angaben noch fehlen.", "Absprachen stehen in einer kurzen Liste mit nächstem Schritt.", "Wiederkehrende Informationen lassen sich aus geprüften Vorlagen vorbereiten."], visual: "checklist" },
  { slug: "handel-selbststaendige", label: "Handel & Selbstständige", headline: "Zeit für Kundenarbeit. Weniger wiederkehrende Schreibarbeit.", intro: "Kundenfragen, Rückmeldungen und Unterlagen fallen neben Ihrer eigentlichen Leistung an. Gemeinsam erstellen wir passende Vorlagen und eine klare Aufgabenübersicht.", problems: ["Kundenanfragen enthalten noch nicht alle notwendigen Angaben.", "Offene Rückmeldungen müssen zwischen der Arbeit nachgehalten werden.", "Für Angebote, Beiträge oder Projektblätter starten Sie oft mit einer leeren Seite."], outcomes: ["Sie gehen mit einer geordneten Anfrage ins nächste Gespräch.", "Offene Aufgaben haben einen sichtbaren nächsten Rückmeldetermin.", "Sie ergänzen Ihre eigenen Angaben in vorbereiteten Dokumenten."], visual: "document" },
];
export const sectorBySlug = (slug: string) => sectors.find(sector => sector.slug === slug);
export const groupBySlug = (slug: string) => sectorGroups.find(group => group.slug === slug);
export const sectorsInGroup = (slug: string) => sectors.filter(sector => sector.group === slug);
export const sectorHref = (slug: string) => `/betriebe/branchen/${slug}`;
export const groupHref = (slug: string) => `/betriebe/bereiche/${slug}`;
export function visualForCase(sector: Sector, useCase: UseCase): VisualKind {
  if (useCase.module === "documents" || useCase.module === "marketing") return "document";
  if (useCase.module === "notes") return "checklist";
  if (sector.slug === "physiotherapiepraxen" && useCase.module === "inbox") return "document";
  if (sector.group === "handel-selbststaendige" && useCase.module === "inbox") return "document";
  if (sector.group === "sport-freizeit") return "courses";
  if (sector.group === "schoenheit-gesundheit" || useCase.module === "calendar") return "schedule";
  if (sector.group === "service-vor-ort") return "checklist";
  return "board";
}
export function startingModules(sector: Sector): ModuleId[] { return [...new Set(sector.cases.map(useCase => useCase.module))]; }
export function groupCases(group: SectorGroup) {
  const children = sectorsInGroup(group.slug);
  return [0,1,2].map(index => ({ sector: children[index], useCase: (group.slug === "handel-selbststaendige" && index === 2 ? children[index].cases.find(useCase => useCase.module === "documents")! : children[index].cases[index]) }));
}
