import type { Metadata } from "next";
import { Accent, Words } from "@/components/hub/Words";
import Directory from "@/components/betriebe/Directory";
import Contact from "@/components/betriebe/Contact";

export const metadata: Metadata = { title: "Finden Sie Ihren Betrieb | Marco Grotemeyer", description: "Persönliche Bürohilfe für kleine Unternehmen. Wählen Sie Ihren Betrieb und entdecken Sie passende Beispiele, Hilfen und mögliche Ergebnisse.", alternates: { canonical: "https://www.marcogrotemeyer.de/betriebe/branchen" } };

export default function Page() {
  return <>
    <section className="shero">
      <div className="wrap">
        <p className="label rv">Fünf Bereiche · Ihr eigener Betriebsalltag</p>
        <h1 className="display" data-words><Words>Welchen Betrieb führen</Words> <Accent shimmer>Sie?</Accent></h1>
        <p className="lede rv" style={{ ["--d" as string]: "450ms" }}>Wählen Sie Ihren Bereich oder direkt Ihren Betrieb. Jede Betriebsseite zeigt eigene Probleme, konkrete Hilfen und mögliche Ergebnisse.</p>
      </div>
    </section>
    <section className="sec tight"><div className="wrap"><Directory /></div></section>
    <Contact label="Der erste Schritt ist ein Gespräch" title={<>Was würden Sie gerne schneller vom Tisch <em>haben?</em></>} text="Erzählen Sie mir davon. Wir schauen gemeinsam, welche Hilfe zu Ihnen passt und womit wir anfangen können." />
  </>;
}
