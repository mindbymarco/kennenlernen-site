import type { Metadata } from "next";
import { Suspense } from "react";
import Startplan from "@/components/betriebe/Startplan";

// Startplan für Ihren Betrieb: wird im Browser aus der Auswahl im Rechner (?betrieb=&module=&einrichtung=&betreuung=) erzeugt.
// Statischer Export: die Seite liest die URL erst im Client, deshalb Suspense um useSearchParams.
export const metadata: Metadata = {
  title: "Startplan für Ihren Betrieb | Marco Grotemeyer",
  description: "Ihre erste Aufgabe, ein Beispiel aus Ihrer Branche, der Preisrahmen und der nächste Schritt auf einer Seite. Erstellt im Browser, ohne Datenübertragung.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <Suspense fallback={<div className="sp-page"><article className="sp-sheet" aria-busy="true"><p className="label">Ihr Startplan wird vorbereitet …</p></article></div>}>
    <Startplan />
  </Suspense>;
}
