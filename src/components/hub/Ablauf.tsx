"use client";
import { useEffect, useRef, useState } from "react";

// Ablauf-Leiste (Signatur der Dachmarke): die Seite als laufender Build. Zeitmarke bis 15 h = Obergrenze eines Pilot-Builds (H12).
const TOTAL = 15 * 3600;
const fmt = (s: number) => [Math.floor(s / 3600), Math.floor((s % 3600) / 60), Math.floor(s % 60)].map(v => String(v).padStart(2, "0")).join(":");

export default function Ablauf({ steps }: { steps: { id: string; label: string; grow?: number }[] }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const frame = useRef(0);
  useEffect(() => {
    const update = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(Math.min(1, Math.max(0, window.scrollY / (max || 1))));
        let idx = 0;
        steps.forEach((step, i) => { const el = document.getElementById(step.id); if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) idx = i; });
        setActive(idx);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame.current); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [steps]);
  return <nav className="ablauf" aria-label="Abschnitte dieser Seite">
    <div className="ab-tc" aria-hidden="true"><span><b>●</b> Build</span><span className="ab-clock">{fmt(progress * TOTAL)}</span></div>
    <div className="ab-track">
      {steps.map((step, i) => <a key={step.id} className={i === active ? "ab-clip act" : "ab-clip"} href={`#${step.id}`} style={{ ["--g" as string]: step.grow ?? 1 }} aria-current={i === active ? "location" : undefined}>{step.label}</a>)}
      <span className="ab-now" aria-hidden="true">{steps[active]?.label}</span>
      <span className="ab-head" aria-hidden="true" style={{ left: `calc(${progress * 100}% - ${progress * 20}px)` }} />
    </div>
  </nav>;
}
