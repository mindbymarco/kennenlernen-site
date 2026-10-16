"use client";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useInView } from "@/components/hub/viz/useInView";

// Einfache Bilder statt Erklärtext (H29): derselbe Posteingang eines Betriebs vorher und nachher, Beispielnachrichten.
const inbox = [
  { from: "Fam. Berger", subject: "Terrasse erneuern, Besichtigung?", time: "07:58", status: "Antwort bereit" },
  { from: "Frau Köhler", subject: "Termin am Samstag frei?", time: "07:41", status: "Im Kalender" },
  { from: "Lieferant", subject: "Rückfrage zur Lieferung", time: "07:20", status: "Antwort bereit" },
  { from: "Herr Yilmaz", subject: "Angebot für Bad erhalten?", time: "06:55", status: "Antwort bereit" },
  { from: "Newsletter", subject: "Neue Produkte im Herbst", time: "06:30", status: "Für später" },
  { from: "Steuerbüro", subject: "Belege für September", time: "gestern", status: "Abgelegt" },
  { from: "Frau Schulte", subject: "Rückruf wegen Wartung", time: "gestern", status: "Rückruf notiert" },
];

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!inView || touched || prefersReducedMotion()) return;
    const seq = [[300, 72], [1100, 28], [1900, 50]];
    const timers = seq.map(([t, p]) => window.setTimeout(() => setPos(p), t));
    return () => timers.forEach(clearTimeout);
  }, [inView, touched]);
  return <figure className="viz swipe" ref={ref} style={{ ["--pos" as string]: `${pos}%` }} data-anim={!touched || undefined}>
    <div className="swipe-stage">
      <div className="swipe-layer before" aria-hidden="true">
        <div className="sw-head"><b>Posteingang</b><span>7 ungelesen</span></div>
        {inbox.map(m => <div className="sw-mail" key={m.subject}><i className="sw-dot" /><b>{m.from}</b><span>{m.subject}</span><em className="sw-time">{m.time}</em></div>)}
      </div>
      <div className="swipe-layer after" aria-hidden="true">
        <div className="sw-head"><b>Posteingang</b><span>alles vorbereitet</span></div>
        {inbox.map(m => <div className="sw-mail done" key={m.subject}><i className="sw-check">✓</i><b>{m.from}</b><span>{m.subject}</span><em className="sw-chip">{m.status}</em></div>)}
      </div>
      <div className="swipe-handle" aria-hidden="true"><span>‹ ›</span></div>
      <span className="swipe-tag l" aria-hidden="true">Heute</span>
      <span className="swipe-tag r" aria-hidden="true">Mit Helfer</span>
    </div>
    <label className="swipe-range">
      <span className="sr-only">Vorher und nachher vergleichen</span>
      <input type="range" min={0} max={100} value={pos} onChange={e => { setTouched(true); setPos(Number(e.target.value)); }} aria-valuetext={`${100 - pos} Prozent mit Helfer sichtbar`} />
    </label>
    <figcaption className="viz-note">Derselbe Posteingang am Morgen. Links so, wie er reinkommt, rechts vorbereitet: Antworten liegen als Entwurf bereit, Termine und Rückrufe sind notiert. Beispielnachrichten.</figcaption>
  </figure>;
}

// Handgriffe einer Anfrage: fünf übernimmt der Helfer, einer bleibt beim Betrieb.
const steps = [
  "Mail öffnen und lesen",
  "In alten Mails nach Angaben suchen",
  "Preis und freie Termine nachsehen",
  "Antwort schreiben",
  "Termin im Kalender vormerken",
];

export function Handgriffe() {
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
          <span className="tv-who">{i < done ? "macht der Helfer" : "Sie"}</span>
        </li>)}
        <li className={finished ? "tv-row you lit" : "tv-row you"}>
          <span className="tv-box" aria-hidden="true" />
          <span className="tv-text">Sie lesen die Antwort und schicken sie ab.</span>
          <span className="tv-who">Sie</span>
        </li>
      </ol>
    </div>
    <figcaption>
      <span className="tv-count" aria-live="polite">{finished ? "Von sechs Handgriffen bleibt einer bei Ihnen." : `${6 - done} Handgriffe bei Ihnen`}</span>
      <button type="button" className="mono-link tv-replay" onClick={() => setRun(r => r + 1)}>Nochmal ansehen</button>
    </figcaption>
  </figure>;
}
