"use client";
import { useState } from "react";
import { Info } from "lucide-react";
import { calculateOffer, euro, industryGroups, modules, pricing, type ModuleId, type SupportId } from "@/lib/offer";
import { MAIL } from "@/lib/hub";
import { buildStartplan, startplanHref, startplanSubject, startplanText } from "@/lib/startplan";

// Schnellcheck (Strategie/STARTPLAN-DOWNLOAD.md, Abschnitt 3): drei Fragen ohne Fachwörter, jedes Ja setzt eine Aufgabe im Rechner.
const quickCheck: { id: string; question: string; module: ModuleId; answer: string }[] = [
  { id: "abends", question: "Antworten Sie Kunden abends oder am Wochenende?", module: "inbox", answer: "Das ist eine Aufgabe für den Postfach-Helfer." },
  { id: "texte", question: "Tippen Sie für ähnliche Aufträge dieselben Texte neu?", module: "documents", answer: "Das ist eine Aufgabe für den Unterlagen-Helfer." },
  { id: "zettel", question: "Stehen Rückrufe und Absprachen auf Zetteln oder im Kopf?", module: "notes", answer: "Das ist eine Aufgabe für den Rückruf-Helfer." },
];

// Unverbindlicher Angebotsrechner: Formular links, Preisrahmen als Fenster rechts. Rechnet im Browser, kein Server.
export default function Calculator({ industry, selected, onIndustry, onSelected }: { industry: string; selected: ModuleId[]; onIndustry: (value: string) => void; onSelected: (value: ModuleId[]) => void }) {
  const [connected, setConnected] = useState(false);
  const [support, setSupport] = useState<SupportId>("none");
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const estimate = calculateOffer(selected, connected, support);
  const input = { industry, selected, connected, support };
  const plan = estimate ? buildStartplan(input) : null;
  const mail = plan ? `mailto:${MAIL}?subject=${encodeURIComponent(startplanSubject(plan))}&body=${encodeURIComponent(`Hallo Marco,\n\n${startplanText(plan)}\n\nLassen Sie uns dazu sprechen.\n`)}` : "";
  const answered = quickCheck.filter(q => q.id in answers);
  const yes = answered.filter(q => answers[q.id]);
  const answer = (q: (typeof quickCheck)[number], value: boolean) => {
    setAnswers({ ...answers, [q.id]: value });
    if (value && !selected.includes(q.module)) onSelected([...selected, q.module]);
    if (!value && answers[q.id] && selected.includes(q.module)) onSelected(selected.filter(id => id !== q.module));
  };

  return <section id="rechner" className="sec calc" aria-labelledby="rechner-heading">
    <div className="wrap">
      <div className="head rv"><p className="label">Kostenloser Angebotsrechner</p><h2 id="rechner-heading" className="display">Welche Hilfe passt zu Ihrem <em>Alltag?</em></h2><p>Wählen Sie Ihre Aufgaben. Sie sehen direkt, was wir gemeinsam einrichten könnten und wie ein Preisrahmen aussehen kann.</p></div>
      <div className="hint rv" role="note"><Info aria-hidden="true" /><div><strong>Ihr persönlicher Preisrahmen</strong>Der Rechner schätzt die Kosten anhand Ihrer Auswahl. Ihr verbindliches Angebot erhalten Sie nach dem Gespräch. Alle Beträge sind Endpreise (Kleinunternehmer nach § 19 UStG). Mögliche Programmkosten kommen hinzu und werden vorher besprochen.</div></div>
      <div className="quick rv" aria-labelledby="quick-heading">
        <div className="quick-head"><p className="label">Schnellcheck · 3 Fragen</p><h3 id="quick-heading">Nicht sicher, was Sie Zeit kostet? Drei Fragen reichen.</h3></div>
        <ol className="quick-list">
          {quickCheck.map(q => <li key={q.id}>
            <p id={`quick-${q.id}`}>{q.question}</p>
            <div className="quick-yn" role="group" aria-labelledby={`quick-${q.id}`}>
              <button type="button" aria-pressed={answers[q.id] === true} onClick={() => answer(q, true)}>Ja</button>
              <button type="button" aria-pressed={answers[q.id] === false} onClick={() => answer(q, false)}>Nein</button>
            </div>
            <p className="quick-answer" aria-live="polite">{answers[q.id] === true ? q.answer : answers[q.id] === false ? "Gut. Dann lassen wir das weg." : ""}</p>
          </li>)}
        </ol>
        <p className="quick-result fine" role="status" aria-live="polite">{answered.length === quickCheck.length && yes.length === 0 ? "Dann läuft Ihr Büro schon gut. Wenn sich das ändert, wissen Sie, wo ich bin." : yes.length > 0 ? `${yes.length === 1 ? "Eine Aufgabe ist" : `${yes.length} Aufgaben sind`} im Rechner angekreuzt. Unten sehen Sie Ihren Preisrahmen.` : "Jedes Ja kreuzt die passende Aufgabe im Rechner an."}</p>
      </div>
      <div className="calc-grid">
        <form className="rv" onSubmit={e => e.preventDefault()}>
          <fieldset>
            <label className="flabel" htmlFor="offer-industry">1. Was für einen Betrieb führen Sie?</label>
            <select id="offer-industry" value={industry} onChange={e => onIndustry(e.target.value)}>
              <option value="Noch offen">Bitte auswählen</option>
              {industryGroups.map(group => <optgroup key={group.label} label={group.label}>{group.items.map(item => <option key={item} value={item}>{item}</option>)}</optgroup>)}
              <option value="Andere Branche">Andere Branche</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>2. Was möchten Sie leichter erledigen?</legend>
            <p className="fdesc">Eine Aufgabe reicht für den Anfang. Sie können mehrere auswählen. Weitere Wünsche können Sie darunter ergänzen.</p>
            <div className="opts">
              {modules.map(module => <label key={module.id} className="opt">
                <input type="checkbox" id={`offer-${module.id}`} checked={selected.includes(module.id)} onChange={e => onSelected(e.target.checked ? [...selected, module.id] : selected.filter(id => id !== module.id))} />
                <span><strong>{module.label}</strong><span>{module.description}</span></span>
              </label>)}
            </div>
          </fieldset>
          <details>
            <summary>Weitere Wünsche · optional</summary>
            <div>
              <fieldset>
                <label className="flabel" htmlFor="offer-setup">3. Wie möchten Sie starten?</label>
                <select id="offer-setup" value={connected ? "connected" : "simple"} onChange={e => setConnected(e.target.value === "connected")}>
                  <option value="simple">Einfach starten: Vorlagen und vorhandene Programme</option>
                  <option value="connected">Mehrere Programme miteinander verbinden</option>
                </select>
                <p className="fdesc">Wenn Sie unsicher sind, wählen Sie „Einfach starten“. Wir klären die Möglichkeiten gemeinsam.</p>
              </fieldset>
              <fieldset style={{ marginBottom: 8 }}>
                <label className="flabel" htmlFor="offer-support">4. Möchten Sie danach persönliche Hilfe?</label>
                <select id="offer-support" value={support} onChange={e => setSupport(e.target.value as SupportId)}>
                  {Object.entries(pricing.support).map(([id, option]) => <option key={id} value={id}>{option.label}</option>)}
                </select>
                <p className="fdesc">Die Einrichtung enthält eine gemeinsame Einführung. Laufende Betreuung können Sie bei Bedarf ergänzen.</p>
              </fieldset>
            </div>
          </details>
        </form>
        <div className="result rv" style={{ ["--d" as string]: "120ms" }}>
          <div className="win"><div className="win-bar" aria-hidden="true"><i /><i /><i /><span>preisrahmen</span></div><div className="inner">
            <p className="label acc">Ihre unverbindliche Auswahl</p>
            <h3>So könnte Ihr Start aussehen.</h3>
            <p className="who">{industry === "Noch offen" ? "Für Ihren kleinen Betrieb" : industry}</p>
            {estimate ? <>
              <div role="status" aria-live="polite" aria-atomic="true" className="total">
                <p>Einmalige Einrichtung</p>
                <strong>{euro(estimate.low)} – {euro(estimate.high)}</strong>
                <p>Endpreis · nach gemeinsam abgestimmtem Umfang</p>
              </div>
              <ul>{estimate.selected.map(module => <li key={module.id} className="check">{module.label}</li>)}</ul>
              <p className="fine">Einrichtung: {connected ? "Mehrere Programme miteinander verbinden" : "Mit Vorlagen und vorhandenen Programmen starten"}</p>
              <div className="row"><span>Persönliche Betreuung danach</span><strong>{estimate.monthly ? `${euro(estimate.monthly)} / Monat` : "Keine laufenden Kosten für Betreuung"}</strong></div>
              <p className="fine">{estimate.monthly ? `Geschätzte Kosten für ${pricing.support[support].hours} ${pricing.support[support].hours === 1 ? "Stunde" : "Stunden"} pro Monat. Für Fragen, gemeinsame Übungen und kleine Anpassungen im vereinbarten Umfang.` : "Sie starten mit der Einrichtung und Einführung. Weitere Hilfe vereinbaren wir bei Bedarf."}</p>
              <p className="fine" style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>Enthalten: Aufgaben besprechen, einrichten, gemeinsam ausprobieren und eine kurze Anleitung. Zusätzliche Programmkosten besprechen wir vor dem Start.</p>
            </> : <p className="empty" role="status">Wählen Sie mindestens eine Aufgabe. Dann erscheint hier Ihr Preisrahmen.</p>}
            <div className="acts">
              {estimate ? <a className="btn" href={startplanHref(input)} target="_blank" rel="noopener">Startplan erstellen <span className="arr" aria-hidden="true">→</span></a> : <span className="btn" aria-disabled="true">Startplan erstellen</span>}
              {estimate && <a className="btn ghost" href={mail}>Startplan per E-Mail besprechen <span className="arr" aria-hidden="true">↗</span></a>}
              <p className="fine">Ohne Anmeldung. Keine Bestellung. Der Startplan ist eine Seite mit Ihrer ersten Aufgabe, einem Beispiel aus Ihrer Branche und dem Preisrahmen. Er entsteht im Browser und öffnet sich in einem neuen Tab, als PDF sichern Sie ihn dort. Der E-Mail-Knopf öffnet einen Entwurf in Ihrem Mailprogramm.</p>
            </div>
          </div></div>
        </div>
      </div>
    </div>
  </section>;
}
