"use client";
import { useEffect, useRef, useState } from "react";

// Ablauf-Leiste (Signatur der Dachmarke): die Seite als laufender Build. Zeitmarke bis 15 h = Obergrenze eines Pilot-Builds (H12).
// Der Abspielkopf steht immer im Block des aktuellen Abschnitts und wandert darin mit dem Fortschritt im Abschnitt.
const TOTAL = 15 * 3600;
const fmt = (s: number) => [Math.floor(s / 3600), Math.floor((s % 3600) / 60), Math.floor(s % 60)].map(v => String(v).padStart(2, "0")).join(":");
const clamp = (v: number) => Math.min(1, Math.max(0, v));

export default function Ablauf({ steps }: { steps: { id: string; label: string; grow?: number }[] }) {
  const [state, setState] = useState({ active: 0, head: 0, progress: 0 });
  const track = useRef<HTMLDivElement>(null);
  const clips = useRef<(HTMLAnchorElement | null)[]>([]);
  const frame = useRef(0);
  useEffect(() => {
    const update = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const line = window.scrollY + window.innerHeight * 0.5;
        const tops = steps.map(step => { const el = document.getElementById(step.id); return el ? el.getBoundingClientRect().top + window.scrollY : 0; });
        let active = 0;
        tops.forEach((top, i) => { if (top <= line) active = i; });
        const start = tops[active];
        const end = active + 1 < tops.length ? tops[active + 1] : doc.scrollHeight;
        const within = window.scrollY >= max - 2 && active === steps.length - 1 ? 1 : clamp((line - start) / Math.max(1, end - start));
        const clip = clips.current[active];
        const progress = clamp(window.scrollY / (max || 1));
        // Mobil sind die Blöcke ausgeblendet: dann läuft der Kopf über die ganze Spur.
        const head = clip && clip.offsetWidth > 0 ? clip.offsetLeft + clip.offsetWidth * within : (track.current?.clientWidth ?? 0) * progress;
        setState({ active, head, progress });
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame.current); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [steps]);
  return <nav className="ablauf" aria-label="Abschnitte dieser Seite" style={{ ["--p" as string]: state.progress }}>
    <div className="ab-tc" aria-hidden="true"><span><b>●</b> Build</span><span className="ab-clock">{fmt(state.progress * TOTAL)}</span></div>
    <div className="ab-track" ref={track}>
      {steps.map((step, i) => <a key={step.id} ref={el => { clips.current[i] = el; }} className={i === state.active ? "ab-clip act" : "ab-clip"} href={`#${step.id}`} style={{ ["--g" as string]: step.grow ?? 1 }} aria-current={i === state.active ? "location" : undefined}>{step.label}</a>)}
      <span className="ab-now" aria-hidden="true">{steps[state.active]?.label}</span>
      <span className="ab-head" aria-hidden="true" style={{ left: state.head }} />
    </div>
  </nav>;
}
