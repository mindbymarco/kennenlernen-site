import type { Metadata } from "next";
import { MAIL } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Impressum | Marco Grotemeyer",
  description: "Impressum von marcogrotemeyer.de: Angaben nach § 5 DDG und § 18 MStV.",
  alternates: { canonical: "/impressum" },
};

// Stand 13.10.2026 (H27): ohne „beyond925“, Tätigkeit statt Berufsbezeichnung, Kleinunternehmer nach § 19 UStG.
export default function Impressum() {
  return <section className="legal">
    <div className="wrap"><div className="prose">
      <p className="label">Rechtliches</p>
      <h1 className="display">Impressum</h1>

      <h2 className="display">Angaben nach § 5 DDG</h2>
      <dl>
        <dt>Anbieter</dt><dd>Marco Grotemeyer</dd>
        <dt>Anschrift</dt><dd>Bahnhofstr. 9<br />32545 Bad Oeynhausen<br />Deutschland</dd>
        <dt>E-Mail</dt><dd><a href={`mailto:${MAIL}`}>{MAIL}</a></dd>
        <dt>Telefon</dt><dd><a href="tel:+4915757999338">0157 57999338</a></dd>
        <dt>Tätigkeit</dt><dd>KI-Beratung und Umsetzung (Aufbau von KI-Agenten und Automatisierungen), digitale Assistenten für kleine Betriebe</dd>
        <dt>Umsatzsteuer</dt><dd>Kleinunternehmer nach § 19 UStG. Es wird keine Umsatzsteuer berechnet und ausgewiesen, alle Preise sind Endpreise.</dd>
      </dl>

      <h2 className="display">Verantwortlich für den Inhalt</h2>
      <p>Verantwortlich nach § 18 Abs. 2 MStV: Marco Grotemeyer, Bahnhofstr. 9, 32545 Bad Oeynhausen.</p>

      <h2 className="display">Verbraucherstreitbeilegung</h2>
      <p>Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2 className="display">Haftung für Inhalte</h2>
      <p>Für eigene Inhalte auf diesen Seiten bin ich nach § 7 Abs. 1 DDG und den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Sobald ich von einer Rechtsverletzung erfahre, entferne ich die betroffenen Inhalte.</p>

      <h2 className="display">Haftung für Links</h2>
      <p>Diese Website enthält Links zu Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese Inhalte ist der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entferne ich solche Links.</p>

      <h2 className="display">Urheberrecht</h2>
      <p>Texte, Bilder und Videos auf dieser Website sind, soweit nicht anders gekennzeichnet, von mir erstellt und unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts brauchen meine schriftliche Zustimmung.</p>

      <p className="stand">Stand: 13. Oktober 2026</p>
    </div></div>
  </section>;
}
