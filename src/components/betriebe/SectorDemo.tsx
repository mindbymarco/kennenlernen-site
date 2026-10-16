"use client";
import { useEffect, useState } from "react";
import { CalendarDays, Check, FileText, ListChecks, Mail, NotebookPen, Megaphone } from "lucide-react";
import Helper from "./Helper";
import { type Sector, type UseCase, visualForCase } from "@/lib/sectors";

// Interaktive Vorschau auf den Branchenseiten: Eingang → Helfer → vorbereitete Hilfe, in einem Fenster. Fünf Darstellungsarten.
export default function SectorDemo({ sector, useCase }: { sector: Sector; useCase: UseCase }) {
  const [phase, setPhase] = useState<"idle" | "working" | "ready" | "approved">("idle");
  const [motion, setMotion] = useState(true);
  const [slot, setSlot] = useState(0);
  const [checked, setChecked] = useState<number[]>([]);
  const prepared = phase === "ready" || phase === "approved";
  useEffect(() => { if (phase !== "working") return; const timer = setTimeout(() => setPhase("ready"), 1600); return () => clearTimeout(timer); }, [phase]);
  const Icon = useCase.module === "calendar" ? CalendarDays : useCase.module === "notes" ? NotebookPen : useCase.module === "documents" ? FileText : useCase.module === "marketing" ? Megaphone : Mail;
  const kind = visualForCase(sector, useCase);
  const picked = sector.slots[slot];
  const action = kind === "schedule" ? "Terminvorschlag vorbereiten" : kind === "courses" ? "Kursantwort vorbereiten" : kind === "checklist" ? "Aufgabenliste vorbereiten" : kind === "document" ? "Vorlage vorbereiten" : "Anfrage ordnen";
  function prepare() { setPhase(prepared ? "idle" : "working"); setChecked([]); }
  const pickSlot = (i: number) => { setSlot(i); setPhase("idle"); };
  return <div className="win demo sdemo" data-demo-kind={kind} data-helper={useCase.module} data-phase={phase} data-motion={motion} data-case={useCase.id}>
    <div className="win-bar"><i /><i /><i /><span>{useCase.assistant.name.toLowerCase()} · Interaktive Vorschau</span><button type="button" className="mono-btn" onClick={() => setMotion(!motion)} aria-pressed={!motion}>{motion ? "Bewegung pausieren" : "Bewegung einschalten"}</button></div>
    <div className="demo-grid">
      <div className="demo-col"><p className="label">01 · So kommt es bei Ihnen an.</p><h3>Eine Anfrage oder Notiz aus Ihrem Alltag</h3><p className="in-text">{useCase.request}</p><p className="fine">Sie geben die Informationen vor.</p></div>
      <div className="demo-col worker"><Helper icon={Icon} /><h3>{useCase.assistant.name}</h3><p>{phase === "working" ? useCase.assistant.working : phase === "approved" ? "Von Ihnen geprüft." : prepared ? "Das Ergebnis liegt für Sie bereit." : "Bereit für Ihre Aufgabe."}</p><div className="flow" aria-hidden="true" /><span className="label">02 · Nach Ihren Regeln</span></div>
      <div className="demo-col"><p className="label">03 · Die vorbereitete Hilfe</p>
        {kind === "board" && <><h3>Übersicht einer Kundenanfrage</h3><div className="board" aria-label="Übersicht einer Kundenanfrage">{["Anliegen", "Zu klären", "Nächster Schritt"].map((label, i) => <div key={label} className="lane"><p className="label">{label}</p>{i === 0 || prepared ? <div>{useCase.facts[i]}</div> : <div className="pending">Wird nach dem Ordnen sichtbar.</div>}</div>)}</div></>}
        {kind === "schedule" && <><h3>Eine Terminoption auswählen.</h3><p className="fine" style={{ marginTop: 0, marginBottom: 12 }}>So kann eine verständliche Terminübersicht aussehen.</p><div className="slots" role="group" aria-label="Terminoptionen">{sector.slots.map((time, i) => <button key={time.time} type="button" aria-pressed={slot === i} aria-label={`Terminoption ${time.time}`} onClick={() => pickSlot(i)}><span>{time.time}</span><span>{time.label}</span></button>)}</div><p className="fine">Die Verfügbarkeit und Dauer prüfen Sie in Ihrem eigenen Kalender.</p></>}
        {kind === "courses" && <><h3>Ihr Kursangebot auf einen Blick.</h3><p className="fine" style={{ marginTop: 0, marginBottom: 12 }}>Kursübersicht für Ihre Terminabstimmung</p>
          <table className="tbl"><caption>Drei Möglichkeiten bei {sector.label}.</caption><thead><tr><th>Zeit</th><th>Angebot</th></tr></thead><tbody>{sector.slots.map(time => <tr key={time.time}><td>{time.time}</td><td>{time.label}</td></tr>)}</tbody></table>
          <p className="label" style={{ marginBottom: 10 }}>Welche Zeit möchten Sie besprechen?</p>
          <div className="slots row" role="group" aria-label="Kurs auswählen">{sector.slots.map((time, i) => <button key={time.time} type="button" aria-pressed={slot === i} onClick={() => pickSlot(i)}>{time.time}</button>)}</div>
          <p className="fine">Kursangaben und Plätze werden von Ihnen bestätigt.</p></>}
        {kind === "checklist" && <><h3>Eine kurze Liste fürs Nachhalten.</h3><p className="fine" style={{ marginTop: 0, marginBottom: 12 }}>Hier steht, was als Nächstes geklärt werden muss.</p>
          {prepared ? <div className="checks">{useCase.facts.map((fact, i) => <label key={fact} className="opt"><input type="checkbox" checked={checked.includes(i)} onChange={e => setChecked(e.target.checked ? [...checked, i] : checked.filter(index => index !== i))} /><span><strong style={{ fontWeight: 500 }}>{fact}</strong></span></label>)}</div> : <p className="ph">Bereiten Sie die Liste vor. Danach können Sie die Aufgaben einzeln abhaken.</p>}
          <div className="progress"><span>{checked.length} von {useCase.facts.length} Aufgaben abgehakt</span><div role="progressbar" aria-valuemin={0} aria-valuemax={useCase.facts.length} aria-valuenow={checked.length}><i style={{ width: `${checked.length / useCase.facts.length * 100}%` }} /></div></div></>}
        {kind === "document" && <><h3>Eine Vorlage statt einer leeren Seite.</h3><p className="fine" style={{ marginTop: 0, marginBottom: 12 }}>Ihre Angaben bilden die Grundlage.</p>
          <div className="paper"><p className="label">{sector.label} · Arbeitsentwurf</p><h4>{useCase.title}</h4><ul>{useCase.facts.map(fact => <li key={fact} className="check">{fact}</li>)}</ul>{prepared ? <p className="draft">{useCase.output}</p> : <p className="ph">Nach dem Vorbereiten erscheint hier der erste Entwurf.</p>}</div>
          <p className="fine">Sie prüfen Inhalte und Angaben.</p></>}
      </div>
    </div>
    <div className="demo-foot"><p><b>Die vereinbarte Regel · {sector.label}</b>{useCase.assistant.rule}</p></div>
    <div className="sdemo-foot">
      <button type="button" className={prepared ? "btn ghost" : "btn"} onClick={prepare} disabled={phase === "working"} style={phase === "working" ? { opacity: .6 } : undefined}>{phase === "working" ? "Helfer bereitet vor …" : prepared ? "Erneut ausprobieren" : action} <span className="arr" aria-hidden="true">→</span></button>
      {phase === "ready" && <button type="button" className="btn" onClick={() => setPhase("approved")}>Als geprüft markieren <span className="arr" aria-hidden="true">✓</span></button>}
      <p className="fine">Wir stimmen den Ablauf auf Ihre Programme und Arbeitsweise ab.</p>
    </div>
    <div style={{ padding: "0 28px 24px", background: "var(--surface)" }}>
      <div className="out" role="status" aria-live="polite" aria-atomic="true">{prepared ? <><span className="tag">{phase === "approved" ? "Von Ihnen geprüft" : "Vorbereitet · noch zur Prüfung"}</span><p>{useCase.output}</p>{(kind === "schedule" || kind === "courses") && <p className="fine">Ausgewählte Terminoption: {picked.time} · {picked.label}. Die Bestätigung erfolgt erst nach Ihrer Prüfung.</p>}{phase === "approved" && <p className="fine">Vorschau abgeschlossen. Sie haben das Ergebnis geprüft.</p>}</> : <p className="fine" style={{ marginTop: 0 }}>{phase === "working" ? useCase.assistant.working : "Hier sehen Sie nach dem Ausprobieren das vorbereitete Ergebnis."}</p>}</div>
    </div>
  </div>;
}
