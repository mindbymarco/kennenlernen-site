"use client";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useInView } from "./useInView";

// „Deine Woche“ (H26): wiederkehrende Aufgaben schrumpfen auf „prüfen“, frei wird „Zeit für dein Angebot“.
// Beispielwoche ohne Zeitangaben, weil noch nichts gemessen ist.
type Block = { kind: "kunde" | "wieder"; label: string; h: number };
const days: { day: string; blocks: Block[] }[] = [
  { day: "Mo", blocks: [{ kind: "wieder", label: "Anfragen beantworten", h: 2 }, { kind: "kunde", label: "Kundenarbeit", h: 5 }, { kind: "wieder", label: "Notizen sortieren", h: 1.5 }, { kind: "kunde", label: "Kundenarbeit", h: 2 }, { kind: "wieder", label: "Anfragen, abends", h: 1.5 }] },
  { day: "Di", blocks: [{ kind: "kunde", label: "Kundenarbeit", h: 3 }, { kind: "wieder", label: "Dieselbe Mail", h: 2 }, { kind: "kunde", label: "Kundenarbeit", h: 4 }, { kind: "wieder", label: "Angebote schreiben", h: 1.5 }, { kind: "wieder", label: "Mails, abends", h: 1.5 }] },
  { day: "Mi", blocks: [{ kind: "wieder", label: "Notiz suchen", h: 1 }, { kind: "kunde", label: "Kundenarbeit", h: 5 }, { kind: "wieder", label: "Anfragen beantworten", h: 2 }, { kind: "kunde", label: "Kundenarbeit", h: 2.5 }, { kind: "wieder", label: "Post vorbereiten", h: 1.5 }] },
  { day: "Do", blocks: [{ kind: "kunde", label: "Kundenarbeit", h: 4 }, { kind: "wieder", label: "Termine abstimmen", h: 2 }, { kind: "kunde", label: "Kundenarbeit", h: 3.5 }, { kind: "wieder", label: "Anfragen, abends", h: 2.5 }] },
  { day: "Fr", blocks: [{ kind: "wieder", label: "Dieselbe Mail", h: 1.5 }, { kind: "kunde", label: "Kundenarbeit", h: 4 }, { kind: "wieder", label: "Newsletter-Entwurf", h: 2.5 }, { kind: "kunde", label: "Kundenarbeit", h: 2 }, { kind: "wieder", label: "Notizen sortieren", h: 2 }] },
];
const CHECK = 0.5; // Höhe eines „prüfen“-Chips im Nachher

export default function WeekViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [after, setAfter] = useState(false);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!inView || touched) return;
    const t = window.setTimeout(() => setAfter(true), prefersReducedMotion() ? 0 : 900);
    return () => clearTimeout(t);
  }, [inView, touched]);
  const choose = (value: boolean) => { setTouched(true); setAfter(value); };
  return <figure className="viz week" ref={ref} data-after={after || undefined}>
    <div className="viz-toggle" role="group" aria-label="Woche anzeigen">
      <button type="button" aria-pressed={!after} onClick={() => choose(false)}>Heute</button>
      <button type="button" aria-pressed={after} onClick={() => choose(true)}>Mit Agent</button>
    </div>
    <div className="week-grid" aria-hidden="true">
      <div className="week-evening" />
      {days.map(d => {
        const freed = d.blocks.filter(b => b.kind === "wieder").reduce((sum, b) => sum + b.h - CHECK, 0);
        return <div className="week-day" key={d.day}>
          <span className="week-name">{d.day}</span>
          <div className="week-col">
            {d.blocks.map((b, i) => <div key={i} className={`wk ${b.kind}`} style={{ flexGrow: after && b.kind === "wieder" ? CHECK : b.h }}>
              <span>{after && b.kind === "wieder" ? "prüfen" : b.label}</span>
            </div>)}
            <div className="wk frei" style={{ flexGrow: after ? freed : 0 }}><span>Zeit für dein Angebot</span></div>
          </div>
        </div>;
      })}
    </div>
    <figcaption>
      <span className="legend"><i className="lg wieder" />Wiederkehrende Aufgaben</span>
      <span className="legend"><i className="lg kunde" />Arbeit für deine Kund:innen</span>
      <span className="legend"><i className="lg frei" />Frei geworden</span>
      <span className="legend"><i className="lg abend" />Abend</span>
      <span className="viz-note">{after ? "Mit Agent: Die wiederkehrenden Aufgaben liegen vorbereitet da, du prüfst sie nur noch." : "Heute: Wiederkehrende Aufgaben ziehen sich durch die Woche, oft bis in den Abend."} Beispielwoche.</span>
    </figcaption>
  </figure>;
}
