import type { Metadata } from "next";
import { CAL_URL, MAIL } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Datenschutz | Marco Grotemeyer",
  description: "Datenschutzerklärung von marcogrotemeyer.de: Hosting, Schriften, Terminbuchung, Kontakt und deine Rechte.",
  alternates: { canonical: "/datenschutz" },
};

// Stand 13.10.2026 (H27). Beschreibt den tatsächlichen Stand: keine Cookies, kein lokaler Speicher, kein Tracking,
// Schriften und Medien von der eigenen Domain, Cal.com nur als Link, kein Kontaktformular.
export default function Datenschutz() {
  return <section className="legal">
    <div className="wrap"><div className="prose">
      <p className="label">Rechtliches</p>
      <h1 className="display">Datenschutz</h1>

      <p><strong>Kurz gesagt:</strong> Diese Website setzt keine Cookies, speichert nichts in deinem Browser und nutzt keine Analyse- oder Werbedienste. Beim Aufruf entstehen technische Protokolle beim Hosting-Anbieter. Daten von dir bekomme ich nur, wenn du mir schreibst oder einen Termin buchst.</p>

      <h2 className="display">1. Verantwortlicher</h2>
      <p>Marco Grotemeyer, Bahnhofstr. 9, 32545 Bad Oeynhausen<br />E-Mail: <a href={`mailto:${MAIL}`}>{MAIL}</a>, Telefon: 0157 57999338</p>

      <h2 className="display">2. Hosting und Server-Protokolle</h2>
      <p>Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Bei jedem Aufruf verarbeitet Vercel technisch notwendige Daten: IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, übertragene Datenmenge, Browser und Betriebssystem sowie die zuvor besuchte Seite. Das dient dazu, die Website auszuliefern, Fehler zu finden und Angriffe abzuwehren.</p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse ist ein sicherer und zuverlässiger Betrieb der Website. Vercel verarbeitet die Daten als Auftragsverarbeiter. Dabei können Daten in die USA übermittelt werden. Grundlage dafür sind die Standardvertragsklauseln der EU-Kommission, die Teil des Auftragsverarbeitungsvertrags von Vercel sind. Die Protokolle werden nur so lange gespeichert, wie es für diese Zwecke nötig ist. Mehr dazu: <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Vercel</a>.</p>

      <h2 className="display">3. Schriften, Bilder und Videos</h2>
      <p>Schriften, Bilder und Videos werden von dieser Domain ausgeliefert. Es gibt keine Verbindung zu Google Fonts, YouTube oder anderen Drittanbietern beim Laden der Seite.</p>

      <h2 className="display">4. Terminbuchung über Cal.com</h2>
      <p>Für das Erstgespräch verlinke ich auf meine Buchungsseite bei Cal.com (<a href={CAL_URL} target="_blank" rel="noopener noreferrer">{CAL_URL.replace("https://", "")}</a>, Anbieter: Cal.com, Inc., USA). Die Seite ist nicht eingebettet. Daten gehen erst an Cal.com, wenn du den Link öffnest. Dort verarbeitet Cal.com die Angaben, die du für die Buchung eingibst, etwa Name, E-Mail-Adresse und Termin.</p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf deine Anfrage). Cal.com kann Daten in die USA übermitteln. Es gelten die <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">Datenschutzhinweise von Cal.com</a>.</p>

      <h2 className="display">5. Kontakt per E-Mail oder Telefon</h2>
      <p>Wenn du mir schreibst oder mich anrufst, verarbeite ich deine Angaben, um deine Anfrage zu beantworten und mögliche Anschlussfragen zu klären. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn deine Anfrage mit einem Auftrag zusammenhängt, sonst Art. 6 Abs. 1 lit. f DSGVO. Ich lösche die Daten, wenn die Anfrage erledigt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

      <h2 className="display">6. Angebotsrechner für Betriebe</h2>
      <p>Der Angebotsrechner unter /betriebe rechnet in deinem Browser. Wenn du dir die Übersicht herunterlädst, wird deine Auswahl (Branche und Aufgaben, keine persönlichen Angaben) an den Server übertragen, nur um die Datei zu erstellen. Ich speichere sie nicht. Die Adresse des Abrufs kann in den Server-Protokollen aus Abschnitt 2 erscheinen.</p>

      <h2 className="display">7. Cookies und Speicher im Browser</h2>
      <p>Diese Website setzt keine Cookies und legt nichts im Speicher deines Browsers ab. Deshalb gibt es auch kein Cookie-Banner.</p>

      <h2 className="display">8. Links zu anderen Websites</h2>
      <p>Diese Website verlinkt auf andere Seiten, zum Beispiel handschrift.studio oder Hilfeseiten von OpenAI und Anthropic. Sobald du einem Link folgst, gilt die Datenschutzerklärung der jeweiligen Seite.</p>

      <h2 className="display">9. Deine Rechte</h2>
      <p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen nach Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Schreib mir dafür an <a href={`mailto:${MAIL}`}>{MAIL}</a>.</p>
      <p>Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO), zum Beispiel bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.</p>

      <h2 className="display">10. Verschlüsselung</h2>
      <p>Die Verbindung zu dieser Website ist per TLS verschlüsselt. Du erkennst das an „https://“ in der Adresszeile.</p>

      <p className="stand">Stand: 13. Oktober 2026</p>
    </div></div>
  </section>;
}
