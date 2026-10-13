"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail, NotebookPen, FileText, Handshake, MessagesSquare } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import OfferCalculator from "@/components/OfferCalculator";
import { type ModuleId } from "@/lib/offer";
import SectorDirectory from "@/components/SectorDirectory";
import AssistantDemo from "@/components/AssistantDemo";
import BrandGeometry from "@/components/BrandGeometry";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

export default function BusinessHome({ compare = false }: { compare?: boolean }) {
  const [palette, setPalette] = useState("blue");
  const [offerIndustry, setOfferIndustry] = useState("Noch offen");
  const [selected, setSelected] = useState<ModuleId[]>(["inbox"]);
  return <div className="brand-site" data-palette={palette} data-comparison={compare || undefined}>
    <a href="#inhalt" className="skip-link">Zum Inhalt</a>
    <Nav />
    {compare && <aside className="brand-comparison" aria-label="Designrichtungen vergleichen"><div><strong>Designprobe</strong><p>Gleiche Inhalte. Zwei Farbwelten.</p></div><ToggleGroup value={[palette]} onValueChange={value=>{if(value[0]) setPalette(String(value[0]));}} aria-label="Farbwelt wählen" variant="outline"><ToggleGroupItem value="blue">Blau & Salbei</ToggleGroupItem><ToggleGroupItem value="warm">Rot & Braun</ToggleGroupItem></ToggleGroup><a href="/">Zur Startseite</a></aside>}

    <main id="inhalt" className="business-home design-home">
      <section id="top" className="hero-section"><BrandGeometry className="hero-geometry" />
        <div className="site-wrap hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> Persönliche Hilfe für kleine Unternehmen</p>
            <h1>Mehr Zeit für<br />Ihr Geschäft.<br /><span>Weniger Büroarbeit.</span></h1>
            <p className="hero-intro">Sie kümmern sich um Ihre Kunden. Ich helfe Ihnen, E-Mails, Termine und Unterlagen einfacher zu erledigen – mit kleinen digitalen Helfern und persönlicher Begleitung.</p>
            <div className="hero-actions"><Button size="lg" render={<a href="#hilfe" />} nativeButton={false}>So hilft mir das im Alltag <ArrowRight data-icon="inline-end" /></Button><a className="hero-secondary-link" href="#erstgespraech">Marco kennenlernen <ArrowUpRight aria-hidden="true" /></a></div>
            <p className="hero-note">Wir starten mit einer Aufgabe. Ich richte ein und zeige Ihnen, wie es geht.</p>
          </div>
          <div className="hero-workspace" aria-label="Beispiel einer morgendlichen Übersicht">
            <div className="workspace-brand"><img src="/brand/fibonacci-mark.png" alt="" width="385" height="382" /><span>Ein klarer Start in den Tag.</span></div>
            <div className="morning-sheet"><p className="mini-label">So kann Ihr Morgen beginnen</p><div className="morning-heading"><span>Guten Morgen.</span><Mail aria-hidden="true" /></div><p>Das ist heute wichtig:</p><ul><li><span>01</span><div><strong>Eine Kundenanfrage</strong><p>Antwortentwurf liegt zur Prüfung bereit.</p></div></li><li><span>02</span><div><strong>Ein offener Rückruf</strong><p>Erinnerung für heute ist vorgemerkt.</p></div></li><li><span>03</span><div><strong>Eine Unterlage</strong><p>Vorlage mit Ihren Angaben vorbereitet.</p></div></li></ul><p className="morning-footnote">Sie prüfen und entscheiden.</p></div>
            <div className="hero-person"><img src="/profile.jpg" alt="Marco Grotemeyer" width="64" height="64" /><div><strong>Ich richte ein. Wir üben zusammen.</strong><p>Marco Grotemeyer · persönlich an Ihrer Seite</p></div></div>
          </div>
        </div>
        <div className="site-wrap"><div className="trust-strip"><p><Check aria-hidden="true" /> Kein technisches Vorwissen nötig</p><p><Check aria-hidden="true" /> Mit Ihren vorhandenen Programmen starten</p><p><Check aria-hidden="true" /> Persönlich mit mir zusammenarbeiten</p></div></div>
      </section>
      <section className="offer-path-section" aria-label="Was Sie bekommen"><div className="site-wrap offer-path"><p>Wir beginnen mit<br /><strong>einer Büroaufgabe.</strong></p><ol><li><FileText aria-hidden="true" /><div><strong>Passend eingerichtet</strong><span>Vorlagen und klare Abläufe</span></div></li><li><Handshake aria-hidden="true" /><div><strong>Zusammen ausprobiert</strong><span>An Ihrer eigenen Aufgabe</span></div></li><li><NotebookPen aria-hidden="true" /><div><strong>Einfach nachzulesen</strong><span>Eine kurze Anleitung für Sie</span></div></li></ol></div></section>
      <AssistantDemo id="hilfe" onChoose={module=>{setSelected([module]);setOfferIndustry("Noch offen");}} />

      <section id="praxisfall" className="section" aria-labelledby="praxisfall-heading"><div className="site-wrap">
        <div className="section-heading"><p className="eyebrow">02 · Aus einer echten Zusammenarbeit · anonymisiert</p><h2 id="praxisfall-heading">Mehr Zeit für die eigentliche Beratung.</h2><p>Ein selbstständiger Berater und Business Angel wollte sein E-Mail-Postfach besser organisieren und einen Newsletter aufbauen. Besonders wichtig war ihm, sich auf die Ergebnisse verlassen zu können.</p></div>
        <div className="help-layout"><div><h3>Klare Regeln. Ein fester Ablauf.</h3><p className="mt-4">Ich habe sein E-Mail-Postfach organisiert, eine morgendliche Zusammenfassung eingerichtet und den Newsletter-Aufbau unterstützt. Gemeinsam haben wir klare Regeln und wiederverwendbare Abläufe für seinen digitalen Arbeitsplatz festgelegt.</p><p className="mt-4">Bei den betrachteten wiederkehrenden Aufgaben wurde eine Zeitersparnis von 50 % gemessen. So blieb mehr Zeit für die eigentliche Beratung.</p></div>
          <div className="case-evidence"><div className="time-comparison" aria-label="Monatlicher Aufwand: vorher ungefähr zehn Stunden, danach ungefähr fünf Stunden"><p className="mini-label">Die betrachteten Büroaufgaben · pro Monat</p><div><span>Vorher</span><div className="time-bar time-before">ca. 10 Stunden</div></div><div><span>Danach</span><div className="time-bar time-after">ca. 5 Stunden</div></div></div><dl className="grid grid-cols-2 gap-6"><div><dt className="text-sm text-muted-foreground">Gemessene Zeitersparnis</dt><dd className="mt-2 text-3xl font-semibold">50 %</dd></div><div><dt className="text-sm text-muted-foreground">Gewonnene Zeit pro Monat</dt><dd className="mt-2 text-3xl font-semibold">ca. 5 Std.</dd></div><div className="col-span-2 time-value"><dt className="text-sm text-muted-foreground">Rechnerischer Zeitwert über sechs Monate</dt><dd className="mt-2 text-3xl font-semibold">8.250 €</dd></div></dl><p className="mt-6 text-sm text-muted-foreground">Rechnung: bisher ca. 10 Stunden monatlich × 50 % × 6 Monate = ca. 30 Stunden. Bei seinem üblichen Beratungssatz von 275 € pro Stunde entspricht das 8.250 €.</p><p className="mt-3 text-sm text-muted-foreground">Die sechs Monate sind eine Hochrechnung. Der Zeitwert beschreibt die gewonnene Kapazität; zusätzlicher Umsatz wurde nicht erfasst. Ergebnisse hängen von der jeweiligen Aufgabe ab.</p></div>
        </div><div className="mt-8"><Button variant="outline" render={<a href="#erstgespraech" />} nativeButton={false}>Welche Aufgabe kostet Sie Zeit? <ArrowRight data-icon="inline-end" /></Button></div>
      </div></section>
      <section id="branchen" className="section industry-section" aria-labelledby="branchen-heading">
        <div className="site-wrap"><div className="section-heading"><p className="eyebrow">03 · Ihr Betrieb. Ihr Alltag.</p><h2 id="branchen-heading">Welche Hilfe passt zu Ihrem Betrieb?</h2><p>Öffnen Sie Ihren Bereich und wählen Sie Ihren Betrieb. Dort finden Sie passende Beispiele aus Ihrem Alltag.</p></div><SectorDirectory compact /></div>
      </section>


      <section id="prozess" className="section collaboration-section" aria-labelledby="prozess-heading"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">04 · So arbeiten wir zusammen</p><h2 id="prozess-heading">Sie kennen Ihren Betrieb.<br />Ich kümmere mich um die Einrichtung.</h2><p>Wir gehen Schritt für Schritt vor. Sie wissen, was ich übernehme, was ich von Ihnen brauche und was am Ende funktioniert.</p></div><ol className="collaboration-list">{collaboration.map(step => {const Icon = step.icon;return <li key={step.number}><div className="collaboration-index"><span>{step.number}</span><Icon aria-hidden="true" /></div><div className="collaboration-main"><h3>{step.title}</h3><p>{step.me}</p></div><div className="collaboration-you"><p className="mini-label">Ihr Beitrag</p><p>{step.you}</p><p className="step-outcome"><Check aria-hidden="true" />{step.outcome}</p></div></li>;})}</ol></div></section>
      <OfferCalculator industry={offerIndustry} selected={selected} onIndustry={setOfferIndustry} onSelected={setSelected} />
      <section id="ueber-mich" className="section about-section" aria-labelledby="marco-heading"><div className="site-wrap about-layout"><div><p className="eyebrow">Persönlich an Ihrer Seite</p><h2 id="marco-heading">„Zeigen Sie mir,<br />was liegen bleibt.<br />Wir fangen dort an.“</h2><img className="about-human-mark" src="/brand/human-mark.png" alt="" loading="lazy" width="1254" height="1254" /></div><div className="about-copy"><div className="about-person"><img src="/profile.jpg" alt="" width="64" height="64" /><div><strong>Marco Grotemeyer</strong><p>Bielefeld · online und vor Ort nach Absprache</p></div></div><p>Als Mitgründer eines KI-Start-ups habe ich selbst digitale Lösungen aufgebaut. Ich habe mit Banken, Handwerksbetrieben und Unternehmern zusammengearbeitet und digitale Arbeitsplätze eingerichtet. Heute beschäftige ich mich auch beruflich damit, wiederkehrende Abläufe einfacher und verlässlicher zu machen.</p><p>Sie sprechen direkt mit mir. Ich richte die Hilfe ein, erkläre sie in einfachen Worten und übe mit Ihnen an Ihren eigenen Aufgaben. Ihre Rückmeldung bestimmt, was wir als Nächstes verbessern.</p><a className="experience-link" href="https://www.iem.fraunhofer.de/de/termine/gen-ai-connect-6.html" target="_blank" rel="noopener noreferrer">Referent bei GenAI Connect am Fraunhofer IEM · 2025 <ArrowUpRight aria-hidden="true" /></a><Button variant="outline" size="lg" render={<a href="#erstgespraech" />} nativeButton={false}>Marco kennenlernen <ArrowRight data-icon="inline-end" /></Button></div></div></section>
      <section id="faq" className="section faq-section" aria-labelledby="faq-heading"><div className="site-wrap faq-layout"><div className="section-heading"><p className="eyebrow">Gut zu wissen</p><h2 id="faq-heading">Noch Fragen?</h2><p>Hier sind die wichtigsten Antworten für Ihren Start.</p></div><Accordion>{questions.map(([q,a],i)=><AccordionItem key={q} value={`question-${i}`}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent><p>{a}</p></AccordionContent></AccordionItem>)}</Accordion></div></section>
      <section id="erstgespraech" className="contact-section" aria-labelledby="kontakt-heading"><div className="site-wrap contact-layout"><div><p className="eyebrow">Der erste Schritt ist ein Gespräch</p><h2 id="kontakt-heading">Was würden Sie<br />gerne schneller<br />vom Tisch haben?</h2></div><div><p>Erzählen Sie mir davon. Wir schauen gemeinsam, welche Hilfe zu Ihnen passt und womit wir anfangen können.</p><div className="contact-actions"><Button size="lg" variant="secondary" render={<a href="https://cal.com/marco-grotemeyer/discovery" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>Kostenloses Gespräch vereinbaren <ArrowUpRight data-icon="inline-end" /></Button><a className="contact-email" href="mailto:hello@marcogrotemeyer.de">hello@marcogrotemeyer.de</a></div><p className="contact-note">30 Minuten · kostenlos · unverbindlich</p></div></div></section>
    </main>
    <Footer />
  </div>;
}
