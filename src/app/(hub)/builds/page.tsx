import type { Metadata } from "next";
import Link from "next/link";
import { Accent, Words } from "@/components/hub/Words";
import { BuildStrip } from "@/components/hub/Blocks";
import { builds } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Builds: Agenten, die ich selbst nutze | Marco Grotemeyer",
  description: "Reel-System, Achilleus, Karussell-Werkzeug und Raijin: KI-Agenten und Abläufe, die ich für mich gebaut habe und jeden Tag nutze.",
  alternates: { canonical: "/builds" },
};

export default function Builds() {
  return <>
    <section className="page-head">
      <div className="wrap">
        <p className="label rv">Builds</p>
        <h1 className="display" data-words><Words>Was ich für mich</Words> <Accent shimmer>gebaut</Accent> <Words>habe.</Words></h1>
        <p className="lede rv" style={{ ["--d" as string]: "450ms" }}>Bevor ich etwas für dich baue, baue ich es für mich. Diese Systeme laufen in meinem Alltag. Kundenfälle kommen dazu, sobald die ersten Piloten fertig sind.</p>
      </div>
    </section>
    <section className="stage">
      <div className="wrap"><BuildStrip items={builds} /></div>
    </section>
    <section className="sec">
      <div className="wrap">
        <div className="head rv"><p className="label">Außerdem</p><h2 className="display">Für andere gebaut</h2></div>
        <div className="cols" data-stagger style={{ gridTemplateColumns: "1fr 1fr", maxWidth: 920 }}>
          <div><h3>Assistenten-Demos für Betriebe</h3><p>Vorführ-Abläufe für Praxen, Studios und Handwerk, zum Ausprobieren im Browser. Das sind Demos, keine Kundenfälle. <Link href="/betriebe">Ansehen</Link></p></div>
          <div><h3>Websites für Kund:innen</h3><p>Seiten für kleine Unternehmen, gebaut mit denselben Werkzeugen wie meine eigenen Systeme.</p></div>
        </div>
        <div className="center rv"><Link className="btn" href="/kontakt">So etwas für dich? Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  </>;
}
