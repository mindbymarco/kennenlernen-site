import type { Metadata } from "next";
import { BEDINGUNGEN_PDF, BEDINGUNGEN_VERSION, bedingungenHtml } from "@/lib/bedingungen";

export const metadata: Metadata = {
  title: "Leistungsbedingungen | Marco Grotemeyer",
  description: "Leistungsbedingungen für Build-Session, Pilot-Build, Build-Sprint und Betreuung: Mitwirkung, Nutzungsrechte, Prüfzeit, Geld-zurück-Zusage, Haftung und Widerruf.",
  alternates: { canonical: "/bedingungen" },
};

// Version 16.10.2026, von der Kanzlei geprüft (Antworten vom 16.10.2026). Text kommt aus src/lib/bedingungen.ts.
export default function Bedingungen() {
  return <section className="legal">
    <div className="wrap"><div className="prose">
      <p className="label">Rechtliches</p>
      <h1 className="display">Leistungs&shy;bedingungen</h1>
      <p>Diese Bedingungen gelten für meine Beratung und Umsetzung. Sie sind Bestandteil jedes Angebots, das ich dir per E-Mail schicke, zusammen mit dem Leistungsblatt bei Pilot und Sprint. Maßgeblich ist die Version, die deinem Angebot als PDF beiliegt.</p>
      <p><a href={BEDINGUNGEN_PDF} download>Als PDF herunterladen (Version {BEDINGUNGEN_VERSION})</a></p>
      <div dangerouslySetInnerHTML={{ __html: bedingungenHtml }} />
      <p className="stand">Version {BEDINGUNGEN_VERSION}</p>
    </div></div>
  </section>;
}
