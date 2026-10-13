import type { ReactNode } from "react";

// Zerlegt Text in einzeln einblendbare Wörter (Blur-Reveal Wort für Wort, DESIGNSYSTEM Abschnitt 6).
export function Words({ children, start = 0 }: { children: string; start?: number }) {
  return <>{children.split(/(\s+)/).map((part, i) => /^\s+$/.test(part) || !part ? part : <span key={i} className="w" style={{ transitionDelay: `${(start + i / 2) * 45}ms` }}>{part}</span>)}</>;
}

// Kursives Akzentwort mit einmaligem Schimmer.
export function Accent({ children, shimmer = false }: { children: ReactNode; shimmer?: boolean }) {
  return <em className={shimmer ? "w shimmer" : "w"}>{children}</em>;
}
