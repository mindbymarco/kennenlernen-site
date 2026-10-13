import type { Metadata } from "next";
import Link from "next/link";
import { Accent, Words } from "@/components/hub/Words";
import { CAL_URL, MAIL } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Kontakt und Termin | Marco Grotemeyer",
  description: "Buche ein kostenloses Erstgespräch (20 Minuten) oder frag eine Build-Session an.",
  alternates: { canonical: "/kontakt" },
};

const sessionMail = `mailto:${MAIL}?subject=${encodeURIComponent("Build-Session anfragen")}`;

export default function Kontakt() {
  return <>
    <section className="page-head">
      <div className="wrap">
        <p className="label rv">Kontakt</p>
        <h1 className="display" data-words><Words>Erzähl mir, was dich Zeit</Words> <Accent shimmer>kostet.</Accent></h1>
        <p className="lede rv" style={{ ["--d" as string]: "450ms" }}>Am einfachsten im Erstgespräch. Wenn du schon weißt, was du bauen willst, frag direkt eine Build-Session an.</p>
      </div>
    </section>
    <section className="sec" style={{ paddingTop: 24 }}>
      <div className="wrap">
        <div className="contact-grid" data-stagger>
          <div className="win"><div className="win-bar" aria-hidden="true"><i /><i /><i /><span>erstgespraech</span></div><div className="inner">
            <p className="label">20 Minuten · per Video</p>
            <p className="price">0 €</p>
            <p>Du erzählst mir von deiner Aufgabe. Ich sage dir ehrlich, ob sich ein Agent lohnt und was er kosten würde.</p>
            <a className="btn" href={CAL_URL} target="_blank" rel="noopener">Termin wählen <span className="arr" aria-hidden="true">↗</span></a>
            <p className="label" style={{ marginTop: 18, marginBottom: 0, fontSize: 11 }}>Buchung über Cal.com, siehe <Link href="/datenschutz">Datenschutz</Link></p>
          </div></div>
          <div className="win"><div className="win-bar" aria-hidden="true"><i /><i /><i /><span>build-session</span></div><div className="inner">
            <p className="label">90 Minuten · live</p>
            <p className="price">390 €</p>
            <p>Wir bauen zusammen einen kleinen Agenten. Wird drei Monate lang voll auf einen Pilot angerechnet. Die Buchung mit Zahlung folgt, bis dahin per E-Mail.</p>
            <a className="btn ghost" href={sessionMail}>Per E-Mail anfragen <span className="arr" aria-hidden="true">→</span></a>
          </div></div>
        </div>
        <p className="center rv" style={{ color: "var(--ink-2)" }}>Oder schreib mir direkt: <a href={`mailto:${MAIL}`}>{MAIL}</a></p>
      </div>
    </section>
  </>;
}
