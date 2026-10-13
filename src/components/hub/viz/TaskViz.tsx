"use client";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useInView } from "./useInView";

// „Was du noch tust“ (H26): sechs Handgriffe einer Anfrage, fünf übernimmt der Agent, einer bleibt bei dir.
const steps = [
  "Mail öffnen und lesen",
  "In alten Mails nach Infos suchen",
  "Preis und freie Termine nachsehen",
  "Antwort schreiben",
  "Termin im Kalender eintragen",
];

export default function TaskViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [done, setDone] = useState(0);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) { setDone(steps.length); return; }
    setDone(0);
    const timers = steps.map((_, i) => window.setTimeout(() => setDone(i + 1), 700 + i * 650));
    return () => timers.forEach(clearTimeout);
  }, [inView, run]);
  const finished = done === steps.length;
  return <figure className="viz tasks-viz" ref={ref}>
    <div className="win">
      <div className="win-bar" aria-hidden="true"><i /><i /><i /><span>Neue Anfrage · Terminwunsch</span></div>
      <ol className="tv-list" aria-label="Handgriffe für eine Anfrage">
        {steps.map((step, i) => <li key={step} className={i < done ? "tv-row gone" : "tv-row"}>
          <span className="tv-box" aria-hidden="true">{i < done ? "✓" : ""}</span>
          <span className="tv-text">{step}</span>
          <span className="tv-who">{i < done ? "macht der Agent" : "du"}</span>
        </li>)}
        <li className={finished ? "tv-row you lit" : "tv-row you"}>
          <span className="tv-box" aria-hidden="true" />
          <span className="tv-text">Du liest die Antwort und schickst sie ab.</span>
          <span className="tv-who">du</span>
        </li>
      </ol>
    </div>
    <figcaption>
      <span className="tv-count" aria-live="polite">{finished ? "Von sechs Handgriffen bleibt einer bei dir." : `${6 - done} Handgriffe bei dir`}</span>
      <button type="button" className="mono-link tv-replay" onClick={() => setRun(r => r + 1)}>Nochmal ansehen</button>
    </figcaption>
  </figure>;
}
