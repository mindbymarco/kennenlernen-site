import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";

export const metadata: Metadata = {
  title: "Impressum — Marco Grotemeyer",
  description:
    "Impressum der Website marcogrotemeyer.de — Pflichtangaben nach § 5 DDG und § 18 MStV.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Grain />
      <Nav />
      <main className="bg-[#F2E7DE] pt-[120px] pb-10 px-3 lg:px-4 min-h-[70vh]">
        <div className="max-w-[1180px] mx-auto">
          <div className="rounded-[24px] bg-white border border-black/[0.06] shadow-[0_12px_40px_rgba(10,10,9,0.08),0_4px_12px_rgba(10,10,9,0.05)] overflow-hidden">
            <div className="px-7 lg:px-10 py-10 lg:py-12">
              {/* Label */}
              <span className="inline-block text-[13px] font-medium tracking-[0.06em] uppercase text-[var(--color-ink-subtle)] mb-3">
                Rechtliches
              </span>

              <h1 className="font-[family-name:var(--font-serif)] font-bold tracking-[-0.04em] text-[var(--color-ink-strong)] text-[clamp(32px,4.6vw,52px)] leading-[1.05] mb-8">
                Impressum
              </h1>

              {/* Pflichtangaben */}
              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                Angaben gemäß § 5 DDG
              </h2>

              <ul className="flex flex-col gap-3.5 text-[16px] leading-[1.65] text-[var(--color-ink)] list-none p-0 mb-10">
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">
                    Diensteanbieter:
                  </strong>{" "}
                  Marco Grotemeyer — freiberuflicher Berater AI Consulting
                </li>
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">
                    Anschrift:
                  </strong>{" "}
                  Bahnhofstr 9, 32545 Bad Oeynhausen
                </li>
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">E-Mail:</strong>{" "}
                  <a
                    href="mailto:hello@marcogrotemeyer.de"
                    className="text-[var(--color-accent)] hover:underline underline-offset-2"
                  >
                    hello@marcogrotemeyer.de
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">Telefon:</strong>{" "}
                  <a href="tel:+4915757999338" className="text-[var(--color-accent)] hover:underline underline-offset-2">
                    015757999338
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">USt-IdNr.:</strong>{" "}
                  Kleinunternehmer gemäß § 19 UStG — keine Ausweisung der Umsatzsteuer
                </li>
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">
                    Berufsbezeichnung:
                  </strong>{" "}
                  freiberuflicher Berater (AI Consulting), verliehen in der Bundesrepublik Deutschland
                </li>
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">
                    Verantwortlich i.S.d. § 18 Abs. 2 MStV:
                  </strong>{" "}
                  Marco Grotemeyer, Bahnhofstr 9, 32545 Bad Oeynhausen
                </li>
                <li>
                  <strong className="font-semibold text-[var(--color-ink-strong)]">Marke:</strong>{" "}
                  handelnd unter <span className="font-medium">beyond925</span> (Marke von Marco Grotemeyer)
                </li>
              </ul>

              <hr className="border-0 border-t border-[var(--color-line-soft)] my-10" />

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-3.5">
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer
                Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                Haftung für Links
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss
                habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                Urheberrecht
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                erstellt wurden, werden die Urheberrechte Dritter beachtet.
              </p>

              <hr className="border-0 border-t border-[var(--color-line-soft)] my-10" />

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                Quellen &amp; Hinweis
              </h2>
              <p className="text-[15px] leading-[1.65] text-[var(--color-ink-muted)]">
                Erstellt mit Unterstützung des{" "}
                <a
                  href="https://www.e-recht24.de/impressum-generator.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline underline-offset-2"
                >
                  eRecht24 Impressum-Generator
                </a>
                . Vor Veröffentlichung von einem Anwalt prüfen lassen.
              </p>

              <p className="text-[13px] leading-[1.6] text-[var(--color-ink-subtle)] mt-10">
                Stand: {new Date().getFullYear()} · § 5 DDG (Digitale-Dienste-Gesetz) seit 14.05.2024 ersetzt § 5
                TMG.
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-6 px-1">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
