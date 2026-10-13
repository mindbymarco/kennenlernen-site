"use client";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useInView } from "./useInView";

// Vorher/Nachher-Wisch (H26): derselbe Posteingang, links unsortiert, rechts vorbereitet. Beispielnachrichten.
const inbox = [
  { from: "Lena K.", subject: "Anfrage: Coaching ab November?", time: "07:58", status: "Entwurf bereit" },
  { from: "Tom R.", subject: "Rückfrage zu deinem Angebot", time: "07:41", status: "Entwurf bereit" },
  { from: "Studio Nord", subject: "Rechnung 1043", time: "07:20", status: "Abgelegt" },
  { from: "Sara M.", subject: "Terminwunsch Dienstag", time: "06:55", status: "Im Kalender" },
  { from: "Newsletter", subject: "Neue Funktionen im März", time: "06:30", status: "Für später" },
  { from: "Jonas P.", subject: "Was kostet ein Erstgespräch?", time: "gestern", status: "Entwurf bereit" },
  { from: "Kalender", subject: "Einladung: Abstimmung", time: "gestern", status: "Im Kalender" },
];

export default function SwipeViz() {
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
      <span className="swipe-tag r" aria-hidden="true">Mit Agent</span>
    </div>
    <label className="swipe-range">
      <span className="sr-only">Vorher und nachher vergleichen</span>
      <input type="range" min={0} max={100} value={pos} onChange={e => { setTouched(true); setPos(Number(e.target.value)); }} aria-valuetext={`${100 - pos} Prozent mit Agent sichtbar`} />
    </label>
    <figcaption className="viz-note">Derselbe Posteingang am Morgen. Links so, wie er reinkommt, rechts vorbereitet: Antworten liegen als Entwurf bereit, Termine sind vorgemerkt. Beispielnachrichten.</figcaption>
  </figure>;
}
