import Link from "next/link";
import { MAIL } from "@/lib/hub";

export default function Footer() {
  return <footer className="foot">
    <div className="wrap foot-row">
      <Link className="brand" href="/betriebe"><img src="/hub/zeichen-klein.svg" alt="" width="24" height="24" />Marco Grotemeyer</Link>
      <nav aria-label="Fußzeile">
        <Link href="/betriebe/branchen">Alle Betriebe</Link>
        <Link href="/betriebe/ressourcen">Kostenlose Hilfen</Link>
        <Link href="/betriebe#ueber-mich">Über Marco</Link>
        <a href={`mailto:${MAIL}`}>Kontakt</a>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
    </div>
    <div className="wrap"><p className="foot-legal">© {new Date().getFullYear()} Marco Grotemeyer · Bürohilfe für kleine Unternehmen · Bad Oeynhausen</p></div>
  </footer>;
}
