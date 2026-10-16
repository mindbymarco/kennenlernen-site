import type { ReactNode } from "react";
import { CAL_URL, MAIL } from "@/lib/hub";

// Abschluss jeder Betriebe-Seite: dunkle Bühne, Gespräch vereinbaren (Cal.com, 30 Minuten).
export default function Contact({ label, title, text }: { label: string; title: ReactNode; text: string }) {
  return <section id="erstgespraech" className="contact" aria-labelledby="kontakt-heading">
    <div className="wrap contact-grid">
      <div className="rv"><p className="label">{label}</p><h2 id="kontakt-heading" className="display">{title}</h2></div>
      <div className="rv" style={{ ["--d" as string]: "120ms" }}>
        <p className="lede">{text}</p>
        <div className="acts">
          <a className="btn light" href={CAL_URL} target="_blank" rel="noopener noreferrer">Kostenloses Gespräch vereinbaren <span className="arr" aria-hidden="true">↗</span></a>
          <a className="mail" href={`mailto:${MAIL}`}>{MAIL}</a>
          <a className="mail" href={`mailto:${MAIL}?subject=${encodeURIComponent("Bitte um Rückruf")}&body=${encodeURIComponent("Hallo Herr Grotemeyer,\n\nbitte rufen Sie mich zurück.\n\nBetrieb: \nTelefon: \nAm besten erreichbar: \n")}`}>Lieber telefonieren? Schicken Sie mir Ihre Nummer, ich rufe Sie zurück.</a>
        </div>
        <p className="label note">30 Minuten · kostenlos · unverbindlich</p>
      </div>
    </div>
  </section>;
}
