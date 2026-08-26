import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";

export const metadata: Metadata = {
  title: "Datenschutz — Marco Grotemeyer",
  description:
    "Datenschutzerklärung der Website marcogrotemeyer.de nach DSGVO — Hosting, Fonts, Cal.com, Betroffenenrechte.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  const stand = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Grain />
      <Nav />
      <main className="bg-[#F2E7DE] pt-[120px] pb-10 px-3 lg:px-4 min-h-[70vh]">
        <div className="max-w-[1180px] mx-auto">
          <div className="rounded-[24px] bg-white border border-black/[0.06] shadow-[0_12px_40px_rgba(10,10,9,0.08),0_4px_12px_rgba(10,10,9,0.05)] overflow-hidden">
            <div className="px-7 lg:px-10 py-10 lg:py-12">
              <span className="inline-block text-[13px] font-medium tracking-[0.06em] uppercase text-[var(--color-ink-subtle)] mb-3">
                Rechtliches
              </span>

              <h1 className="font-[family-name:var(--font-serif)] font-bold tracking-[-0.04em] text-[var(--color-ink-strong)] text-[clamp(32px,4.6vw,52px)] leading-[1.05] mb-8">
                Datenschutzerklärung
              </h1>

              {/* Warn-Box */}
              <div className="rounded-[16px] bg-[#FFF8E6] border border-[#FDE68A] px-6 py-5 mb-10">
                <p className="text-[14px] leading-[1.65] text-[var(--color-ink)] m-0">
                  <strong className="font-semibold text-[var(--color-ink-strong)]">
                    Kein Rechtsersatz.
                  </strong>{" "}
                  Vor Go-Live mit eRecht24 Premium / Datenschutz-Anwalt finalisieren.{" "}
                  <span className="font-medium">§ 5 DDG seit 14.05.2024 maßgeblich</span> (nicht TMG). Texte an
                  tatsächlichen Einsatz (Hosting, Fonts, Cal.com) anpassen.
                </p>
              </div>

              {/* Kurzfassung */}
              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                Kurzfassung
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-4">
                Diese Website ist bewusst datenarm gebaut:
              </p>
              <ul className="flex flex-col gap-2.5 text-[15px] leading-[1.6] text-[var(--color-ink)] list-none p-0 mb-4">
                <li className="flex gap-2">
                  <span aria-hidden className="text-[var(--color-ink-subtle)]">
                    ·
                  </span>
                  <span>
                    <strong className="font-semibold">Hosting</strong> über Vercel — Auslieferung der statischen
                    Seiten, Server-Logs.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="text-[var(--color-ink-subtle)]">
                    ·
                  </span>
                  <span>
                    <strong className="font-semibold">Google Fonts</strong> via{" "}
                    <code className="rounded bg-[var(--color-bg-soft)] px-1.5 py-0.5 text-[13px] font-mono">
                      next/font/google
                    </code>{" "}
                    selbst gehostet — kein externer Call zu Google Fonts API.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="text-[var(--color-ink-subtle)]">
                    ·
                  </span>
                  <span>
                    <strong className="font-semibold">Cal.com Link</strong> beim Klick — Datenfluss zu Cal.com
                    Inc. (USA) erst bei Klick auf „Erstgespräch buchen".
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="text-[var(--color-ink-subtle)]">
                    ·
                  </span>
                  <span>
                    <strong className="font-semibold">Mailto</strong> als Alternative — öffnet lokales
                    Mailprogramm.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="text-[var(--color-ink-subtle)]">
                    ·
                  </span>
                  <span>
                    <strong className="font-semibold">Kein Tracking</strong> — kein Analytics-Script, keine
                    Marketing-Cookies.
                  </span>
                </li>
              </ul>
              <p className="text-[15px] leading-[1.65] text-[var(--color-ink-muted)] mb-10">
                Hinweis zu TDDDG § 25: Ein Cookie-Banner ist erst nötig, wenn nicht-notwendige Cookies / Tracker
                (Analytics, Embeds, Marketing) gesetzt werden. Aktuell nicht der Fall. Bei späterem Cal.com
                Embed oder Analytics neu bewerten.
              </p>

              <hr className="border-0 border-t border-[var(--color-line-soft)] my-10" />

              {/* Verantwortlicher */}
              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                1. Verantwortlicher
              </h2>
              <div className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                <p className="mb-2">Verantwortlicher i.S.d. Art. 4 Nr. 7 DSGVO:</p>
                <p>
                  Marco Grotemeyer
                  <br />
                  Bahnhofstr 9, 32545 Bad Oeynhausen
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:hello@marcogrotemeyer.de"
                    className="text-[var(--color-accent)] hover:underline underline-offset-2"
                  >
                    hello@marcogrotemeyer.de
                  </a>
                </p>
              </div>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                2. Hosting — Vercel Inc.
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-3">
                Diese Website wird bei <strong className="font-semibold">Vercel Inc.</strong>, 340 S Lemon Ave
                #4133 Walnut, CA 91789, USA gehostet. Beim Aufruf werden serverseitig Logs verarbeitet
                (IP-Adresse, Datum/Uhrzeit, User-Agent, Referrer) zur Sicherstellung des Betriebs, zur
                Fehleranalyse und zur Abwehr von Angriffen.
              </p>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-3">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer, effizienter
                Bereitstellung). Mit Vercel besteht ein Auftragsverarbeitungsvertrag (DPA / AVV).
                Server-Standort ist konfigurierbar — für DSGVO idealerweise EU-Region wählen.
              </p>
              <p className="text-[15px] leading-[1.65] text-[var(--color-ink-muted)] mb-10">
                Speicherdauer Server-Logs: wenige Tage, danach Löschung oder Anonymisierung. Datenübermittlung
                in Drittland (USA) auf Basis Standardvertragsklauseln (SCC) + DPA.
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                3. Google Fonts — selbst gehostet
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Diese Website nutzt Google Fonts über{" "}
                <code className="rounded bg-[var(--color-bg-soft)] px-1.5 py-0.5 text-[13px] font-mono">
                  next/font/google
                </code>{" "}
                mit Self-Hosting / Build-Time-Optimierung. Schriftdateien werden beim Build lokal eingebettet
                und von der eigenen Domain (Vercel) ausgeliefert. Es findet{" "}
                <strong className="font-semibold">kein externer Aufruf</strong> zu{" "}
                <code className="text-[13px] font-mono">fonts.googleapis.com</code> oder{" "}
                <code className="text-[13px] font-mono">fonts.gstatic.com</code> statt. Rechtsgrundlage: Art.
                6 Abs. 1 lit. f DSGVO (korrekte, effiziente Darstellung). Falls extern eingebunden würde, wäre
                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO + TDDDG § 25 erforderlich.
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                4. Terminbuchung — Cal.com
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-3">
                Für die Terminbuchung verlinke ich auf{" "}
                <a
                  href="https://cal.com/marco-grotemeyer/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline underline-offset-2"
                >
                  https://cal.com/marco-grotemeyer/discovery
                </a>{" "}
                (Anbieter: Cal.com, Inc., USA). Der Datenfluss zu Cal.com entsteht{" "}
                <strong className="font-semibold">erst beim Klick</strong> auf „Erstgespräch buchen" — DSGVO-arm
                per Link mit{" "}
                <code className="rounded bg-[var(--color-bg-soft)] px-1.5 py-0.5 text-[13px] font-mono">
                  target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;
                </code>
                . Erst dann verarbeitet Cal.com die von dir eingegebenen Buchungsdaten (Name, E-Mail,
                Termindaten).
              </p>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-3">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Anfrage) bzw. lit. f
                (effiziente Terminorganisation). Drittlandübermittlung USA auf Basis SCC. Beachte
                Datenschutzhinweise von Cal.com.
              </p>
              <p className="text-[15px] leading-[1.65] text-[var(--color-ink-muted)] mb-10">
                Hinweis: Ein Inline-Embed (iFrame/Embed) würde beim Seitenaufruf bereits Daten an Cal.com
                senden und TDDDG § 25 / Einwilligung auslösen sowie an{" "}
                <code className="text-[13px] font-mono">X-Frame-Options: DENY</code> scheitern. Deshalb vorerst
                nur Link — Embed optional in Iteration 2 mit Consent + CSP-Anpassung.
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                5. Kontakt per E-Mail
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Wenn du per E-Mail Kontakt aufnimmst, werden deine Angaben zur Bearbeitung der Anfrage und für
                den Fall von Anschlussfragen gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
                (vorvertraglich/vertraglich) oder lit. f (berechtigtes Interesse an Kommunikation). Löschung
                nach Zweckerfüllung bzw. gesetzlichen Aufbewahrungsfristen.
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                6. Betroffenenrechte
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-3">
                Du hast Rechte nach Art. 15–21 DSGVO: Auskunft, Berichtigung, Löschung, Einschränkung,
                Datenübertragbarkeit, Widerspruch (insb. gegen Verarbeitung nach Art. 6 Abs. 1 lit. f) sowie —
                sofern erteilt — Widerruf einer Einwilligung mit Wirkung für die Zukunft.
              </p>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Beschwerderecht: Art. 77 DSGVO bei einer Aufsichtsbehörde, z. B. LDI NRW. Kontakt zur
                Geltendmachung:{" "}
                <a
                  href="mailto:hello@marcogrotemeyer.de"
                  className="text-[var(--color-accent)] hover:underline underline-offset-2"
                >
                  hello@marcogrotemeyer.de
                </a>
                .
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                7. Speicherdauer &amp; SSL
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Personenbezogene Daten werden nur so lange gespeichert, wie es für die Zwecke erforderlich ist
                oder gesetzliche Aufbewahrungspflichten bestehen. Diese Website nutzt SSL/TLS-Verschlüsselung
                (https) — erkennbar am Schloss in der Adresszeile.
              </p>

              <h2 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[var(--color-ink-strong)] mb-4">
                8. Hinweis zu Cookies &amp; TDDDG
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-ink)] mb-10">
                Aktuell werden nur technisch notwendige Cookies / Local Storage gesetzt (falls überhaupt).
                Keine Analytics-, Marketing- oder Tracking-Cookies. Daher ist derzeit kein Cookie-Banner
                erforderlich. Sobald Analytics (z. B. Plausible, PostHog) oder ein Cal.com Embed hinzukommt,
                ist eine Einwilligung nach TDDDG § 25 / Art. 6 Abs. 1 lit. a DSGVO einzuholen und diese
                Erklärung zu erweitern.
              </p>

              <hr className="border-0 border-t border-[var(--color-line-soft)] my-10" />

              <p className="text-[15px] leading-[1.65] text-[var(--color-ink-muted)]">
                Quelle in Teilen:{" "}
                <a
                  href="https://www.e-recht24.de/datenschutzgenerator.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline underline-offset-2"
                >
                  eRecht24 Datenschutz-Generator
                </a>{" "}
                — angepasst auf Vercel/Fonts/Cal.com. Vor Go-Live anwaltlich prüfen lassen.
              </p>

              <p className="text-[13px] leading-[1.6] text-[var(--color-ink-subtle)] mt-10">Stand: {stand}</p>
            </div>
          </div>

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
