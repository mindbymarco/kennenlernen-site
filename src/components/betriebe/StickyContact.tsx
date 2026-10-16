"use client";
import { useEffect, useState } from "react";

// Mobil: fester Kontakt-Knopf unten, verschwindet, sobald der Kontaktabschnitt im Bild ist.
export default function StickyContact({ href = "#erstgespraech" }: { href?: string }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const target = document.getElementById("erstgespraech");
    if (!target) return;
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.2 });
    io.observe(target);
    return () => io.disconnect();
  }, []);
  return <div className="sticky-contact" data-hidden={hidden || undefined}><a className="btn" href={href}>Gespräch vereinbaren · kostenlos <span className="arr" aria-hidden="true">→</span></a></div>;
}
