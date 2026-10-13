"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MessagesSquare, FileText, Handshake, UserRound } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import SectorDemo from "@/components/SectorDemo";
import SectorDirectory from "@/components/SectorDirectory";
import OfferCalculator from "@/components/OfferCalculator";
import { type Sector, type SectorGroup, type UseCase, groupBySlug, groupCases, groupHref, sectorHref } from "@/lib/sectors";
import type { ModuleId } from "@/lib/offer";

type Entry = { sector: Sector; useCase: UseCase };
export default function SectorPage({ sector, group }: { sector?: Sector; group?: SectorGroup }) {
  const currentGroup = group || groupBySlug(sector!.group)!;
  const entries: Entry[] = sector ? sector.cases.map(useCase=>({sector,useCase})) : groupCases(currentGroup);
  const [active, setActive] = useState(entries[0].useCase.id);
  const [offerIndustry, setOfferIndustry] = useState(sector?.label || "Noch offen");
  const [selected, setSelected] = useState<ModuleId[]>(sector ? [sector.cases[0].module] : [entries[0].useCase.module]);
  const title = sector?.headline || currentGroup.headline;
  const intro = sector?.intro || currentGroup.intro;
  const problems = sector ? sector.cases.map(useCase=>useCase.problem) : currentGroup.problems;
  const results = sector ? sector.cases.map(useCase=>useCase.result) : currentGroup.outcomes;
  const pageLabel = sector?.label || currentGroup.label;
  function choose(useCase: UseCase, source: Sector) { setSelected([useCase.module]);setOfferIndustry(source.label); }
  return <>
    <a href="#inhalt" className="skip-link">Zum Inhalt</a><Nav />
    <main id="inhalt" className={`business-home sector-page group-${currentGroup.slug}`} data-sector={sector?.slug || currentGroup.slug}>
      <section id="top" className="sector-hero"><div className="site-wrap">
        <nav className="sector-breadcrumb" aria-label="Seitenpfad"><Link href="/betriebe">Start</Link><span aria-hidden="true">/</span><Link href="/betriebe/branchen">Betriebe</Link>{sector && <><span aria-hidden="true">/</span><Link href={`${groupHref(currentGroup.slug)}#top`}>{currentGroup.label}</Link></>}<span aria-hidden="true">/</span><span aria-current="page">{pageLabel}</span></nav>
        <div className="sector-hero-layout"><div><p className="eyebrow">Persönliche Bürohilfe · {pageLabel}</p><h1>{title}</h1><p className="hero-intro">{intro}</p><div className="hero-actions"><Button size="lg" render={<a href="#beispiele" />} nativeButton={false}>Passende Beispiele ansehen <ArrowRight data-icon="inline-end" /></Button><Button size="lg" variant="outline" render={<a href="#rechner" />} nativeButton={false}>Kostenloser Angebotsrechner</Button></div></div>
        <div className="sector-hero-note"><img src="/profile.jpg" alt="Marco Grotemeyer, Ihr persönlicher Ansprechpartner" width="80" height="80" /><p className="mini-label">Sie arbeiten direkt mit mir.</p><h2>Eine Aufgabe auswählen.<br />Gemeinsam leichter machen.</h2><p>Ich höre zu, richte die passende Hilfe ein und zeige Ihnen die Bedienung an einer Aufgabe aus Ihrem eigenen Betrieb.</p><ul><li><Check aria-hidden="true" />Keine technischen Vorkenntnisse nötig</li><li><Check aria-hidden="true" />Vorhandene Programme zuerst prüfen</li><li><Check aria-hidden="true" />Ein klarer Umfang vor dem Start</li></ul></div>
        </div>
        <nav className="sector-jump-nav" aria-label="Auf dieser Seite"><a href="#probleme">Ihr Alltag</a><a href="#beispiele">Beispiele ausprobieren</a><a href="#ergebnisse">Mögliche Ergebnisse</a><a href="#rechner">Preisrahmen</a><a href="#prozess">Zusammenarbeit</a></nav>
      </div></section>
      {!sector && <section id="betriebe" className="section group-directory-section"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Noch genauer zu Ihrem Betrieb</p><h2>Wählen Sie Ihren Betrieb.</h2><p>Jede Seite zeigt eigene Aufgaben, Beispiele und mögliche Ergebnisse.</p></div><SectorDirectory group={currentGroup} /></div></section>}
      <section id="probleme" className="section sector-problems" aria-labelledby="probleme-heading"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Vielleicht kennen Sie das</p><h2 id="probleme-heading">Das Geschäft läuft.<br />Diese Aufgaben bleiben trotzdem liegen.</h2><p>Welche Situation bei Ihnen tatsächlich Zeit kostet, klären wir an Ihrem eigenen Beispiel.</p></div><ol className="sector-problem-list">{problems.map((problem,i)=><li key={problem}><span>0{i+1}</span><p>{problem}</p></li>)}</ol></div></section>
      <section id="beispiele" className="section sector-examples" aria-labelledby="beispiele-heading"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Passende Alltagshilfen · {pageLabel}</p><h2 id="beispiele-heading">Ihr digitaler Helfer.<br />Für Aufgaben aus Ihrem Betrieb.</h2><p>Wählen Sie eine Aufgabe. Sehen Sie, welche Informationen Ihr Helfer bekommt, nach welcher Regel er arbeitet und welches Ergebnis Sie prüfen.</p></div>
        <Tabs value={active} onValueChange={value=>setActive(String(value))} className="usecase-tabs">
          <TabsList variant="line" aria-label={`Alltagshilfen für ${pageLabel}`} className="grid w-full grid-cols-3">{entries.map(entry=><TabsTrigger key={entry.useCase.id} value={entry.useCase.id}>{entry.useCase.tab}</TabsTrigger>)}</TabsList>
          {entries.map(entry=><TabsContent key={entry.useCase.id} value={entry.useCase.id}>
            <div className="case-introduction">{!sector && <Badge variant="outline">Beispiel aus: {entry.sector.label}</Badge>}<h3>{entry.useCase.title}</h3><div className="case-explanation"><div><p className="mini-label">Das mögliche Problem</p><p>{entry.useCase.problem}</p></div><div><p className="mini-label">So helfe ich Ihnen</p><p>{entry.useCase.solution}</p></div><div><p className="mini-label">Das mögliche Ergebnis</p><p>{entry.useCase.result}</p></div></div></div>
            <SectorDemo key={entry.useCase.id} sector={entry.sector} useCase={entry.useCase} />
            <div className="case-next-action"><Button size="lg" render={<a href="#rechner" />} nativeButton={false} onClick={()=>choose(entry.useCase,entry.sector)}>Diese Hilfe im Rechner auswählen <ArrowRight data-icon="inline-end" /></Button>{!sector && <Link href={`${sectorHref(entry.sector.slug)}#top`}>Mehr für {entry.sector.label} <ArrowUpRight aria-hidden="true" /></Link>}</div>
          </TabsContent>)}
        </Tabs>
      </div></section>
      <section id="ergebnisse" className="section sector-results" aria-labelledby="ergebnisse-heading"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Daran erkennen Sie den Nutzen</p><h2 id="ergebnisse-heading">Was sich im Alltag<br />leichter anfühlen kann.</h2><p>Wir prüfen gemeinsam, ob die neue Hilfe Ihre Aufgabe tatsächlich einfacher macht.</p></div><div className="sector-result-list">{results.map((result,i)=><article key={result}><Check aria-hidden="true" /><div><h3>{sector ? sector.cases[i].tab : ["Mehr Überblick","Weniger Schreibarbeit","Klarer nächster Schritt"][i]}</h3><p>{result}</p></div></article>)}</div><div className="result-measure"><p className="mini-label">Gemeinsam vergleichen</p><p>Sie erledigen dieselbe Aufgabe mit und ohne die neue Hilfe. Wir schauen auf den Aufwand, notwendige Korrekturen und darauf, ob Sie die Hilfe im Betrieb weiter nutzen möchten.</p></div></div></section>
      <OfferCalculator industry={offerIndustry} selected={selected} onIndustry={setOfferIndustry} onSelected={setSelected} />
      <section id="prozess" className="section sector-collaboration" aria-labelledby="prozess-heading"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Persönliche Zusammenarbeit · {pageLabel}</p><h2 id="prozess-heading">Sie zeigen mir den Alltag.<br />Ich richte die Hilfe ein.</h2><p>Wir starten mit einer klar begrenzten Aufgabe und gehen die Bedienung zusammen durch.</p></div><ol className="sector-collaboration-steps">
        <li><MessagesSquare aria-hidden="true" /><h3>1. Eine Aufgabe besprechen.</h3><p>Sie zeigen mir zum Beispiel: {entries[0].useCase.request}</p><p className="small-copy">Ich kläre mit Ihnen die vorhandenen Programme und den nächsten sinnvollen Schritt.</p></li>
        <li><FileText aria-hidden="true" /><h3>2. Umfang und Preis klären.</h3><p>Sie erhalten ein konkretes Angebot für die Einrichtung, Ihre Einführung und mögliche Programmkosten.</p><p className="small-copy">Sie entscheiden vor dem Start.</p></li>
        <li><Handshake aria-hidden="true" /><h3>3. Einrichten und üben.</h3><p>Ich richte Vorlagen und passende Abläufe ein. Sie probieren die Hilfe an einer eigenen Aufgabe aus.</p><p className="small-copy">Am Ende haben Sie eine nutzbare Hilfe und eine kurze Anleitung.</p></li>
        <li><UserRound aria-hidden="true" /><h3>4. Im Alltag prüfen.</h3><p>Wir schauen, was leichter geht und wo noch Fragen offen sind. Weitere persönliche Hilfe vereinbaren wir bei Bedarf.</p><p className="small-copy">Erst danach wählen wir eine weitere Aufgabe.</p></li>
      </ol></div></section>
      <section className="section sector-faq"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Vor dem Start</p><h2>Was Sie dazu wissen sollten.</h2></div><Accordion>
        <AccordionItem value="software"><AccordionTrigger>Funktioniert das mit meinen vorhandenen Programmen?</AccordionTrigger><AccordionContent>Wir prüfen die Programme Ihres Betriebs zuerst. Manche Aufgaben lassen sich mit Vorlagen lösen, andere brauchen Erinnerungen oder eine Verbindung. Was möglich ist und welche Kosten entstehen, klären wir vor der Einrichtung.</AccordionContent></AccordionItem>
        <AccordionItem value="control"><AccordionTrigger>Wer bestätigt Termine, Inhalte und Preise?</AccordionTrigger><AccordionContent>Sie behalten die Kontrolle. Ihr Helfer bereitet Informationen und Entwürfe vor. Freie Zeiten, fachliche Angaben, Preise und der Versand werden von Ihnen geprüft und bestätigt.</AccordionContent></AccordionItem>
        <AccordionItem value="data"><AccordionTrigger>Welche Daten brauchen wir für den Start?</AccordionTrigger><AccordionContent>Für das erste Gespräch reicht ein Beispiel Ihrer Büroaufgabe. Wir können zunächst mit anonymisierten Angaben arbeiten. Vor der Einrichtung klären wir, welche echten Angaben nötig sind und wer Zugriff erhält.{sector?.slug === "physiotherapiepraxen" ? " Bei der Praxisorganisation beginnen wir mit organisatorischen Informationen. Der Umgang mit Patientendaten wird gesondert geprüft." : ""}</AccordionContent></AccordionItem>
      </Accordion></div></section>
      {sector && <section className="section related-sector-section"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Weitere Betriebe in Ihrem Bereich</p><h2>{currentGroup.label}</h2></div><SectorDirectory group={currentGroup} /></div></section>}
      <section id="erstgespraech" className="contact-section"><div className="site-wrap contact-layout"><div><p className="eyebrow">Ihr nächster Schritt · {pageLabel}</p><h2>Welche dieser Aufgaben<br />kostet Sie gerade Zeit?</h2></div><div><p>Erzählen Sie mir von Ihrem Betrieb. Wir besprechen eine konkrete Aufgabe und schauen, wie ich Sie persönlich unterstützen kann.</p><div className="contact-actions"><Button size="lg" variant="secondary" render={<a href="https://cal.com/marco-grotemeyer/discovery" target="_blank" rel="noopener noreferrer" />} nativeButton={false}>Kostenloses Gespräch vereinbaren <ArrowUpRight data-icon="inline-end" /></Button><a className="contact-email" href="mailto:hello@marcogrotemeyer.de">hello@marcogrotemeyer.de</a></div><p className="contact-note">30 Minuten · kostenlos · unverbindlich</p></div></div></section>
    </main><Footer />
  </>;
}
