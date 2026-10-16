import type { Metadata } from "next";
import { Accent, Words } from "@/components/hub/Words";

export const metadata: Metadata = { title: "Kostenlose Hilfen für Ihren Büroalltag | Marco Grotemeyer", description: "ChatGPT, Claude und Verbindungen zu Ihren Programmen verständlich kennenlernen. Kostenlose Vorlagen und praktische erste Aufgaben für kleine Unternehmen.", alternates: { canonical: "https://www.marcogrotemeyer.de/betriebe/ressourcen" } };

export default function Page() {
  return <>
    <section className="shero">
      <div className="wrap">
        <p className="label rv">Kostenlose Hilfen für kleine Unternehmen</p>
        <h1 className="display" data-words><Words>Mit einer Aufgabe einfach</Words> <Accent shimmer>anfangen.</Accent></h1>
        <p className="lede rv" style={{ ["--d" as string]: "450ms" }}>Hier finden Sie kurze Erklärungen und einfache Aufträge zum Ausprobieren. Beginnen Sie mit einer kleinen Aufgabe aus Ihrem Büroalltag und prüfen Sie das Ergebnis.</p>
        <div className="acts rv" style={{ ["--d" as string]: "600ms", display: "flex", marginTop: 32 }}><a className="mono-link" href="#ressourcen">Kostenlose Hilfen ansehen</a></div>
      </div>
    </section>
    <section id="ressourcen" className="sec tight">
      <div className="wrap faq-grid">
        <div className="head rv"><p className="label">Kostenlos verstehen und ausprobieren</p><h2 className="display">Was geht mit ChatGPT, Claude und Ihren <em>Programmen?</em></h2><p>Beginnen Sie mit einer kleinen Aufgabe. Hier sind drei verständliche Einstiege mit weiterführender offizieller Hilfe.</p></div>
        <div className="rv" style={{ ["--d" as string]: "120ms" }}>
          <div className="faq">
            <details><summary>Welche Programme kann mein Helfer nutzen?</summary><p>Eine Verbindung erlaubt dem Helfer, freigegebene Informationen aus einem vorhandenen Programm zu verwenden. Häufige Beispiele sind E-Mails aus Gmail oder Outlook und Unterlagen aus Google Drive. Welche Verbindungen und Aktionen verfügbar sind, hängt vom Anbieter, Ihrem Konto und den vergebenen Rechten ab.</p><p><strong>Erste Aufgabe:</strong> Wählen Sie eine wiederkehrende Büroaufgabe und das Programm, in dem die Informationen dafür liegen.</p><div className="res-links"><a className="res-link" href="https://learn.chatgpt.com/use-cases/manage-your-inbox" target="_blank" rel="noopener noreferrer">ChatGPT: mit E-Mails arbeiten ↗</a><a className="res-link" href="https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities" target="_blank" rel="noopener noreferrer">Claude: Programme verbinden ↗</a></div></details>
            <details><summary>Was kann ich mit ChatGPT vorbereiten?</summary><p>Zum Beispiel Nachrichten zusammenfassen, Antwortentwürfe schreiben und aus Ihren Unterlagen neue Dokumente vorbereiten. In einem Projekt können Sie passende Dateien und feste Anweisungen für eine wiederkehrende Aufgabe zusammenhalten.</p><p className="res-ex">Ein einfacher Auftrag: „Fasse diese Nachrichten zusammen. Nenne zuerst die Kundenanfragen. Schreibe, wo Angaben fehlen. Bereite Antworten als Entwurf vor.“</p><a className="res-link" href="https://learn.chatgpt.com/docs/projects" target="_blank" rel="noopener noreferrer">Offizielle Hilfe zu ChatGPT-Projekten ↗</a></details>
            <details><summary>Wie nutze ich Claude für wiederkehrende Aufgaben?</summary><p>Sie können einem Projekt Ihre Unterlagen und feste Anweisungen geben. So bekommt Claude einen klaren Rahmen, etwa für Anschreiben oder die Vorbereitung eines Newsletters. Verbindungen können zusätzlich freigegebene Informationen aus Ihren Programmen bereitstellen.</p><p className="res-ex">Eine einfache Regel: „Verwende meine Vorlage. Erfinde keine fehlenden Angaben. Markiere Rückfragen. Ich prüfe jeden Entwurf vor dem Versand.“</p><a className="res-link" href="https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects" target="_blank" rel="noopener noreferrer">Offizielle Hilfe zu Claude-Projekten ↗</a></details>
          </div>
          <div className="res-cta"><p><strong>Sie möchten es für Ihren Betrieb einrichten?</strong><span>Ich helfe bei der Auswahl, richte Regeln und Abläufe ein und begleite Sie bei der Nutzung.</span></p><a className="btn" href="/betriebe#erstgespraech">Kostenloses Gespräch vereinbaren <span className="arr" aria-hidden="true">→</span></a></div>
        </div>
      </div>
    </section>
  </>;
}
