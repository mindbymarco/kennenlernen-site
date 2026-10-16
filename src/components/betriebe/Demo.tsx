"use client";
import { useEffect, useState } from "react";
import { Mail, CalendarDays, FileText, Check } from "lucide-react";
import type { ModuleId } from "@/lib/offer";
import Helper from "./Helper";

const helpers = [
  { id: "mail", name: "Postfach-Helfer", short: "Postfach", icon: Mail, inputTitle: "Drei Nachrichten kommen an.", input: ["Kundin wartet auf ein Angebot.", "Lieferant hat eine Rückfrage.", "Ein Newsletter liegt dazwischen."], working: "Ich ordne die Nachrichten nach Ihren Regeln.", output: ["Zuerst: der Kundin zum Angebot antworten.", "Danach: die Rückfrage zur Lieferung klären.", "Später: den Newsletter lesen."], outcome: "Sie wissen, was zuerst dran ist.", rule: "Kundenanfragen haben Vorrang. Antworten werden als Entwurf vorbereitet.", module: "inbox" as ModuleId },
  { id: "calendar", name: "Termin-Helfer", short: "Termine", icon: CalendarDays, inputTitle: "Eine Terminfrage kommt an.", input: ["Ein Kunde möchte am Donnerstag vorbeikommen.", "Zwei Terminoptionen stehen zur Auswahl.", "Die Dauer muss noch geklärt werden."], working: "Ich sammle die Angaben für Ihren Terminvorschlag.", output: ["Terminwunsch: Donnerstag.", "Terminoptionen zur Prüfung: 10:00 oder 14:00 Uhr.", "Offene Frage: Wie lange dauert der Besuch?"], outcome: "Eine klare Grundlage für Ihre Terminantwort.", rule: "Es wird nur ein Vorschlag vorbereitet. Sie prüfen Dauer und Verfügbarkeit.", module: "calendar" as ModuleId },
  { id: "documents", name: "Unterlagen-Helfer", short: "Unterlagen", icon: FileText, inputTitle: "Eine Gesprächsnotiz liegt vor.", input: ["Kunde interessiert sich für die Leistung.", "Ein Vor-Ort-Termin soll abgestimmt werden.", "Ein Anschreiben wird gebraucht."], working: "Ich bringe die Angaben in Ihre Vorlage.", output: ["Kundenwunsch kurz zusammengefasst.", "Anschreiben als Entwurf vorbereitet.", "Fehlende Angaben als Rückfragen markiert."], outcome: "Sie beginnen mit einem vorbereiteten Entwurf.", rule: "Die Angaben des Kunden bilden die Grundlage. Fehlende Informationen werden nicht erfunden.", module: "documents" as ModuleId },
];

// Interaktive Vorschau auf der Betriebe-Startseite: drei Helfer in einem Fenster, Ablauf hinein → nach Regeln → Ergebnis.
export default function Demo({ id = "hilfe", onChoose }: { id?: string; onChoose?: (module: ModuleId) => void }) {
  const [active, setActive] = useState("mail");
  const [phase, setPhase] = useState<"idle" | "working" | "ready" | "approved">("idle");
  const [motion, setMotion] = useState(true);
  useEffect(() => { if (phase !== "working") return; const timer = setTimeout(() => setPhase("ready"), 2400); return () => clearTimeout(timer); }, [phase, active]);
  const helper = helpers.find(h => h.id === active)!;
  const ready = phase === "ready" || phase === "approved";
  const Icon = helper.icon;
  return <section id={id} className="sec" aria-labelledby={`${id}-heading`}>
    <div className="wrap">
      <div className="head rv"><p className="label">Eine Aufgabe. Ein passender Helfer.</p><h2 id={`${id}-heading`} className="display">So arbeitet Ihr digitaler <em>Assistent.</em></h2><p>Er bekommt Informationen, arbeitet nach Ihren Regeln und bereitet ein Ergebnis vor. Sie prüfen, was damit passiert.</p></div>
      <div className="rv" style={{ ["--d" as string]: "120ms" }}>
        <div className="toggle" role="tablist" aria-label="Digitalen Helfer auswählen">
          {helpers.map(h => <button key={h.id} type="button" role="tab" aria-selected={active === h.id} onClick={() => { setActive(h.id); setPhase("idle"); }}><h.icon aria-hidden="true" />{h.short}</button>)}
        </div>
        <div className="win demo" data-helper={helper.id} data-phase={phase} data-motion={motion}>
          <div className="win-bar"><i /><i /><i /><span>{helper.name.toLowerCase()} · Interaktive Vorschau</span><button type="button" className="mono-btn" onClick={() => setMotion(!motion)} aria-pressed={!motion}>{motion ? "Bewegung pausieren" : "Bewegung einschalten"}</button></div>
          <div className="demo-grid">
            <div className="demo-col"><p className="label">01 · Informationen hinein</p><h3>{helper.inputTitle}</h3><ul>{helper.input.map(text => <li key={text}><Icon aria-hidden="true" /><span>{text}</span></li>)}</ul><p className="fine">Die Informationen kommen von Ihnen oder einem freigegebenen Programm.</p></div>
            <div className="demo-col worker"><Helper icon={Icon} /><h3>{helper.name}</h3><p>{phase === "working" ? helper.working : phase === "approved" ? "Von Ihnen geprüft." : ready ? "Ihr Ergebnis ist vorbereitet." : "Bereit für Ihre Aufgabe."}</p><div className="flow" aria-hidden="true" /><span className="label">02 · Nach Ihren Regeln</span></div>
            <div className="demo-col"><p className="label">03 · Ergebnis für Sie</p><h3>Für Sie vorbereitet.</h3>{ready ? <ul>{helper.output.map(text => <li key={text} className="ok"><Check aria-hidden="true" /><span>{text}</span></li>)}</ul> : <p className="ph">{phase === "working" ? "Das Ergebnis wird vorbereitet …" : "Starten Sie den Ablauf. Hier erscheint das mögliche Ergebnis."}</p>}<p className="fine">{ready ? helper.outcome : "Sie behalten die Entscheidung."}</p></div>
          </div>
          <div className="demo-foot">
            <p><b>Die vereinbarte Regel</b>{helper.rule}</p>
            {phase === "idle" ? <button type="button" className="btn" onClick={() => setPhase("working")}>Ablauf starten <span className="arr" aria-hidden="true">→</span></button>
              : phase === "working" ? <button type="button" className="btn" disabled style={{ opacity: .6 }}>Helfer bereitet vor …</button>
              : phase === "ready" ? <button type="button" className="btn" onClick={() => setPhase("approved")}>Als geprüft markieren <span className="arr" aria-hidden="true">✓</span></button>
              : <button type="button" className="btn ghost" onClick={() => setPhase("idle")}>Erneut ausprobieren</button>}
          </div>
        </div>
        <p className="fine state" role="status" aria-live="polite">{phase === "idle" ? "Wählen Sie einen Helfer und starten Sie den Ablauf." : phase === "working" ? "Der Helfer bereitet das Ergebnis vor." : phase === "ready" ? "Das Ergebnis liegt zur Prüfung bereit." : "Vorschau abgeschlossen. Sie haben das Ergebnis geprüft."}</p>
      </div>
      {onChoose && <div className="next rv"><a className="btn" href="#rechner" onClick={() => onChoose(helper.module)}>Diese Hilfe im Rechner auswählen <span className="arr" aria-hidden="true">→</span></a><a className="mono-link" href="/betriebe/branchen">Beispiele für meinen Betrieb ansehen</a></div>}
      <div className="marco rv"><img src="/hub/marco-foto-800.jpg" alt="Marco Grotemeyer" width="56" height="56" /><p><strong>Ich richte Ihren Helfer ein.</strong><span>Wir legen Regeln fest und üben gemeinsam an einer Aufgabe aus Ihrem Betrieb.</span></p><a className="mono-link" href="/betriebe#erstgespraech">Mit Marco besprechen</a></div>
    </div>
  </section>;
}
