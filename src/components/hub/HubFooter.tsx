import Link from "next/link";
import { HANDSCHRIFT_URL, MAIL } from "@/lib/hub";

export default function HubFooter() {
  return <footer className="foot">
    <div className="wrap foot-grid">
      <div>
        <Link className="brand" href="/"><img src="/hub/zeichen-klein.svg" alt="" width="24" height="24" />Marco Grotemeyer</Link>
        <p className="foot-note">Ich baue KI-Agenten für Solo-Gründer:innen, zum Festpreis und mit Übergabe. Bald gibt es auch einen Newsletter mit neuen Builds und Anleitungen.</p>
        <p className="foot-note"><a href={`mailto:${MAIL}`} style={{ display: "inline", textDecoration: "underline", textUnderlineOffset: 4 }}>{MAIL}</a></p>
      </div>
      <div>
        <div className="label" style={{ marginBottom: 12 }}>Seiten</div>
        <Link href="/beratung">Beratung</Link><Link href="/builds">Builds</Link><Link href="/ueber-mich">Über mich</Link><Link href="/kontakt">Kontakt</Link><Link href="/betriebe">Für Betriebe</Link><a href={HANDSCHRIFT_URL} target="_blank" rel="noopener">Handschrift ↗</a>
      </div>
      <div>
        <div className="label" style={{ marginBottom: 12 }}>Rechtliches</div>
        <Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link>
      </div>
    </div>
    <div className="wrap"><p className="foot-legal">© {new Date().getFullYear()} Marco Grotemeyer · Bad Oeynhausen</p></div>
  </footer>;
}
