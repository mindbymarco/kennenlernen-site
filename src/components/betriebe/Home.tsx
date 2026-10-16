"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Check, FileText, Handshake, MessagesSquare } from "lucide-react";
import { Accent, Words } from "@/components/hub/Words";
import Demo from "./Demo";
import Directory from "./Directory";
import Calculator from "./Calculator";
import Contact from "./Contact";
import { type ModuleId } from "@/lib/offer";

const collaboration = [
  { number: "01", title: "Wir schauen auf Ihren Alltag.", me: "Ich höre zu und finde mit Ihnen eine wiederkehrende Aufgabe, die sich vereinfachen lässt.", you: "Sie zeigen mir ein Beispiel und welche Programme Sie nutzen.", outcome: "Eine konkrete Aufgabe für den Start.", icon: MessagesSquare },
  { number: "02", title: "Sie bekommen einen klaren Vorschlag.", me: "Ich beschreibe die Einrichtung, Ihre Einführung und den Preis. Zusätzliche Programmkosten führe ich getrennt auf.", you: "Sie entscheiden, ob Umfang und Preis für Sie passen.", outcome: "Ein abgestimmtes Angebot vor der Einrichtung.", icon: FileText },
  { number: "03", title: "Ich richte ein. Wir üben zusammen.", me: "Ich bereite Vorlagen und Abläufe vor, erkläre die Bedienung und schreibe die wichtigsten Schritte auf.", you: "Sie probieren die Hilfe an einer echten Aufgabe aus und geben Rückmeldung.", outcome: "Eine nutzbare Hilfe und eine kurze Anleitung.", icon: Handshake },
  { number: "04", title: "Wir prüfen, was im Alltag hilft.", me: "Wir vergleichen den bisherigen Ablauf mit dem neuen. Wenn nötig, passe ich die Einrichtung an. Weitere Betreuung vereinbaren wir nach Bedarf.", you: "Sie sagen mir, was leichter geht und wo noch Fragen offen sind.", outcome: "Ein klarer nächster Schritt für Ihren Betrieb.", icon: Check },
];
const questions = [
  ["Muss ich mich mit Technik auskennen?", "Nein. Sie kennen Ihren Betrieb. Ich kümmere mich um die Einrichtung und erkläre Ihnen die Bedienung in einfachen Schritten. Wir üben direkt an einer Aufgabe aus Ihrem Alltag."],
  ["Kann ich mit meinen vorhandenen Programmen weiterarbeiten?", "Wir prüfen zuerst, was mit Ihren Programmen möglich ist. Je nach Programm können wir Vorlagen, Erinnerungen oder Verbindungen nutzen. Wenn ein weiteres Programm nötig ist, besprechen wir Nutzen und Kosten vorher."],
  ["Was kostet das – und was ist kostenlos?", "Das erste Gespräch und der Angebotsrechner sind kostenlos. Einrichtung und persönliche Betreuung sind kostenpflichtig. Der Rechner schätzt die Kosten für Ihre Auswahl. Vor dem Start erhalten Sie ein konkretes Angebot mit dem vereinbarten Umfang."],
  ["Was macht die Hilfe automatisch, und was prüfe ich selbst?", "Das legen wir gemeinsam fest. Für den Anfang werden Antworten und Unterlagen zur Prüfung vorbereitet. Sie entscheiden über den Versand. Termine werden mit Ihrer Verfügbarkeit abgeglichen, bevor Sie sie bestätigen."],
  ["Wie gehen wir mit meinen Kundendaten um?", "Wir klären vor der Einrichtung, welche Daten gebraucht werden und wer Zugriff erhält. Zum Ausprobieren können wir mit anonymisierten Angaben arbeiten. Bei besonders sensiblen Aufgaben prüfen wir gemeinsam, ob die gewünschte Hilfe geeignet ist."],
];

// Startseite der Betriebe (Sitemap H23): bisherige Inhalte und Anker-IDs im Look der Dachmarke, Ansprache Sie, Akzent Tanne.
export default function Home() {
  const [offerIndustry, setOfferIndustry] = useState("Noch offen");
  const [selected, setSelected] = useState<ModuleId[]>(["inbox"]);
  return <>
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="label rv">Persönliche Hilfe für kleine Unternehmen</p>
          <h1 className="display" data-words><Words>Mehr Zeit für Ihr Geschäft. Weniger</Words> <Accent shimmer>Büroarbeit.</Accent></h1>
          <p className="lede rv" style={{ ["--d" as string]: "500ms" }}>Sie kümmern sich um Ihre Kunden. Ich helfe Ihnen, E-Mails, Termine und Unterlagen einfacher zu erledigen – mit kleinen digitalen Helfern und persönlicher Begleitung.</p>
          <div className="acts rv" style={{ ["--d" as string]: "650ms" }}><a className="btn" href="#hilfe">So hilft mir das im Alltag <span className="arr" aria-hidden="true">→</span></a><a className="mono-link" href="#erstgespraech">Marco kennenlernen</a></div>
          <p className="fine hero-note rv" style={{ ["--d" as string]: "800ms" }}>Wir starten mit einer Aufgabe. Ich richte ein und zeige Ihnen, wie es geht.</p>
        </div>
        <div className="rv" style={{ ["--d" as string]: "400ms" }} aria-label="Beispiel einer morgendlichen Übersicht">
          <div className="win morning"><div className="win-bar" aria-hidden="true"><i /><i /><i /><span>Ein klarer Start in den Tag.</span></div><div className="inner">
            <p className="label">So kann Ihr Morgen beginnen</p>
            <p className="morning-title">Guten Morgen. <Mail aria-hidden="true" /></p>
            <p>Das ist heute wichtig:</p>
            <ol>
              <li><span className="num">01</span><div><strong>Eine Kundenanfrage</strong><p>Antwortentwurf liegt zur Prüfung bereit.</p></div></li>
              <li><span className="num">02</span><div><strong>Ein offener Rückruf</strong><p>Erinnerung für heute ist vorgemerkt.</p></div></li>
              <li><span className="num">03</span><div><strong>Eine Unterlage</strong><p>Vorlage mit Ihren Angaben vorbereitet.</p></div></li>
            </ol>
            <p className="label">Sie prüfen und entscheiden.</p>
          </div></div>
          <div className="person"><img src="/hub/marco-foto-800.jpg" alt="Marco Grotemeyer" width="48" height="48" /><div><strong>Ich richte ein. Wir üben zusammen.</strong><p>Marco Grotemeyer · persönlich an Ihrer Seite</p></div></div>
        </div>
      </div>
      <div className="wrap"><ul className="trust rv"><li className="check">Kein technisches Vorwissen nötig</li><li className="check">Mit Ihren vorhandenen Programmen starten</li><li className="check">Persönlich mit mir zusammenarbeiten</li></ul></div>
    </section>

    <section className="path" aria-label="Was Sie bekommen">
      <div className="wrap path-grid">
        <p className="display rv">Wir beginnen mit<br /><strong>einer Büroaufgabe.</strong></p>
        <ol data-stagger>
          <li><span className="num">01</span><strong>Passend eingerichtet</strong><span>Vorlagen und klare Abläufe</span></li>
          <li><span className="num">02</span><strong>Zusammen ausprobiert</strong><span>An Ihrer eigenen Aufgabe</span></li>
          <li><span className="num">03</span><strong>Einfach nachzulesen</strong><span>Eine kurze Anleitung für Sie</span></li>
        </ol>
      </div>
    </section>

    <Demo id="hilfe" onChoose={module => { setSelected([module]); setOfferIndustry("Noch offen"); }} />

    <section id="praxisfall" className="sec" style={{ background: "var(--paper-2)" }} aria-labelledby="praxisfall-heading">
      <div className="wrap">
        <div className="head rv"><p className="label">02 · Aus einer echten Zusammenarbeit · anonymisiert</p><h2 id="praxisfall-heading" className="display">Mehr Zeit für die eigentliche <em>Beratung.</em></h2><p>Ein selbstständiger Berater und Business Angel wollte sein E-Mail-Postfach besser organisieren und einen Newsletter aufbauen. Besonders wichtig war ihm, sich auf die Ergebnisse verlassen zu können.</p></div>
        <div className="case-grid">
          <div className="rv"><h3>Klare Regeln. Ein fester Ablauf.</h3><p style={{ marginTop: 16 }}>Ich habe sein E-Mail-Postfach organisiert, eine morgendliche Zusammenfassung eingerichtet und den Newsletter-Aufbau unterstützt. Gemeinsam haben wir klare Regeln und wiederverwendbare Abläufe für seinen digitalen Arbeitsplatz festgelegt.</p><p style={{ marginTop: 16 }}>Bei den betrachteten wiederkehrenden Aufgaben wurde eine Zeitersparnis von 50 % gemessen. So blieb mehr Zeit für die eigentliche Beratung.</p><a className="btn ghost" href="#erstgespraech">Welche Aufgabe kostet Sie Zeit? <span className="arr" aria-hidden="true">→</span></a></div>
          <div className="win rv" style={{ ["--d" as string]: "120ms" }}><div className="win-bar" aria-hidden="true"><i /><i /><i /><span>zeitvergleich</span></div><div className="inner">
            <p className="label">Die betrachteten Büroaufgaben · pro Monat</p>
            <div className="bars" aria-label="Monatlicher Aufwand: vorher ungefähr zehn Stunden, danach ungefähr fünf Stunden"><div><span>Vorher</span><div className="bar before">ca. 10 Stunden</div></div><div><span>Danach</span><div className="bar after">ca. 5 Stunden</div></div></div>
            <dl className="stats"><div><dt>Gemessene Zeitersparnis</dt><dd>50 %</dd></div><div><dt>Gewonnene Zeit pro Monat</dt><dd>ca. 5 Std.</dd></div><div className="wide"><dt>Rechnerischer Zeitwert über sechs Monate</dt><dd>8.250 €</dd></div></dl>
            <p className="fine">Rechnung: bisher ca. 10 Stunden monatlich × 50 % × 6 Monate = ca. 30 Stunden. Bei seinem üblichen Beratungssatz von 275 € pro Stunde entspricht das 8.250 €.</p>
            <p className="fine" style={{ marginTop: 10 }}>Die sechs Monate sind eine Hochrechnung. Der Zeitwert beschreibt die gewonnene Kapazität; zusätzlicher Umsatz wurde nicht erfasst. Ergebnisse hängen von der jeweiligen Aufgabe ab.</p>
          </div></div>
        </div>
      </div>
    </section>

    <section id="branchen" className="sec" aria-labelledby="branchen-heading">
      <div className="wrap">
        <div className="head rv"><p className="label">03 · Ihr Betrieb. Ihr Alltag.</p><h2 id="branchen-heading" className="display">Welche Hilfe passt zu Ihrem <em>Betrieb?</em></h2><p>Öffnen Sie Ihren Bereich und wählen Sie Ihren Betrieb. Dort finden Sie passende Beispiele aus Ihrem Alltag.</p></div>
        <Directory compact />
      </div>
    </section>

    <section id="prozess" className="sec" style={{ paddingTop: 0 }} aria-labelledby="prozess-heading">
      <div className="wrap">
        <div className="head rv"><p className="label">04 · So arbeiten wir zusammen</p><h2 id="prozess-heading" className="display">Sie kennen Ihren Betrieb. Ich kümmere mich um die <em>Einrichtung.</em></h2><p>Wir gehen Schritt für Schritt vor. Sie wissen, was ich übernehme, was ich von Ihnen brauche und was am Ende funktioniert.</p></div>
        <ol className="steps" data-stagger>{collaboration.map(step => { const Icon = step.icon; return <li key={step.number}><div className="idx"><span className="num">{step.number}</span><Icon aria-hidden="true" /></div><div><h3>{step.title}</h3><p>{step.me}</p></div><div className="you"><p className="label">Ihr Beitrag</p><p>{step.you}</p><p className="out check">{step.outcome}</p></div></li>; })}</ol>
      </div>
    </section>

    <Calculator industry={offerIndustry} selected={selected} onIndustry={setOfferIndustry} onSelected={setSelected} />

    <section id="ueber-mich" className="sec" aria-labelledby="marco-heading">
      <div className="wrap about">
        <img className="rv" src="/hub/marco-foto-800.jpg" alt="Marco Grotemeyer" width="800" height="1000" loading="lazy" />
        <div className="rv" style={{ ["--d" as string]: "120ms" }}>
          <p className="label">Persönlich an Ihrer Seite</p>
          <h2 id="marco-heading" className="display">„Zeigen Sie mir, was liegen bleibt. Wir fangen <em>dort</em> an.“</h2>
          <div className="person"><div><strong>Marco Grotemeyer</strong><p>Bielefeld · online und vor Ort nach Absprache</p></div></div>
          <p>Als Mitgründer eines KI-Start-ups habe ich selbst digitale Lösungen aufgebaut. Ich habe mit Banken, Handwerksbetrieben und Unternehmern zusammengearbeitet und digitale Arbeitsplätze eingerichtet. Heute beschäftige ich mich auch beruflich damit, wiederkehrende Abläufe einfacher und verlässlicher zu machen.</p>
          <p>Sie sprechen direkt mit mir. Ich richte die Hilfe ein, erkläre sie in einfachen Worten und übe mit Ihnen an Ihren eigenen Aufgaben. Ihre Rückmeldung bestimmt, was wir als Nächstes verbessern.</p>
          <a className="mono-link" href="https://www.iem.fraunhofer.de/de/termine/gen-ai-connect-6.html" target="_blank" rel="noopener noreferrer">Referent bei GenAI Connect am Fraunhofer IEM · 2025 ↗</a>
          <div className="acts"><a className="btn ghost" href="#erstgespraech">Marco kennenlernen <span className="arr" aria-hidden="true">→</span></a></div>
        </div>
      </div>
    </section>

    <section id="faq" className="sec" style={{ background: "var(--paper-2)" }} aria-labelledby="faq-heading">
      <div className="wrap faq-grid">
        <div className="head rv"><p className="label">Gut zu wissen</p><h2 id="faq-heading" className="display">Noch <em>Fragen?</em></h2><p>Hier sind die wichtigsten Antworten für Ihren Start.</p></div>
        <div className="faq rv" style={{ ["--d" as string]: "120ms" }}>{questions.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
    </section>

    <Contact label="Der erste Schritt ist ein Gespräch" title={<>Was würden Sie gerne schneller vom Tisch <em>haben?</em></>} text="Erzählen Sie mir davon. Wir schauen gemeinsam, welche Hilfe zu Ihnen passt und womit wir anfangen können." />
    <p className="sr-only"><Link href="/betriebe/branchen">Alle Betriebe</Link></p>
  </>;
}
