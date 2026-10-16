"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, MessagesSquare, FileText, Handshake, UserRound } from "lucide-react";
import { Accent, Words } from "@/components/hub/Words";
import SectorDemo from "./SectorDemo";
import Directory from "./Directory";
import Calculator from "./Calculator";
import Contact from "./Contact";
import StickyContact from "./StickyContact";
import { type Sector, type SectorGroup, type UseCase, groupBySlug, groupCases, groupHref, sectorHref } from "@/lib/sectors";
import type { ModuleId } from "@/lib/offer";

type Entry = { sector: Sector; useCase: UseCase };

// Kursives Akzentwort: das letzte Wort des Titels (DESIGNSYSTEM 3: ein Wort pro Titel kursiv), Wording bleibt gleich.
function Title({ text }: { text: string }) {
  const parts = text.trim().split(" ");
  const last = parts.pop()!;
  return <><Words>{parts.join(" ")}</Words> <Accent shimmer>{last}</Accent></>;
}

// Branchen- und Bereichsseiten (Sitemap H23): gleiche Inhalte und Anker wie bisher, im Look der Dachmarke.
export default function SectorPage({ sector, group }: { sector?: Sector; group?: SectorGroup }) {
  const currentGroup = group || groupBySlug(sector!.group)!;
  const entries: Entry[] = sector ? sector.cases.map(useCase => ({ sector, useCase })) : groupCases(currentGroup);
  const [active, setActive] = useState(entries[0].useCase.id);
  const [offerIndustry, setOfferIndustry] = useState(sector?.label || "Noch offen");
  const [selected, setSelected] = useState<ModuleId[]>(sector ? [sector.cases[0].module] : [entries[0].useCase.module]);
  const title = sector?.headline || currentGroup.headline;
  const intro = sector?.intro || currentGroup.intro;
  const problems = sector ? sector.cases.map(useCase => useCase.problem) : currentGroup.problems;
  const results = sector ? sector.cases.map(useCase => useCase.result) : currentGroup.outcomes;
  const pageLabel = sector?.label || currentGroup.label;
  const entry = entries.find(e => e.useCase.id === active) || entries[0];
  function choose(useCase: UseCase, source: Sector) { setSelected([useCase.module]); setOfferIndustry(source.label); }
  return <div data-sector={sector?.slug || currentGroup.slug}>
    <section id="top" className="shero">
      <div className="wrap">
        <nav className="crumbs rv" aria-label="Seitenpfad"><Link href="/betriebe">Start</Link><span aria-hidden="true">/</span><Link href="/betriebe/branchen">Betriebe</Link>{sector && <><span aria-hidden="true">/</span><Link href={`${groupHref(currentGroup.slug)}#top`}>{currentGroup.label}</Link></>}<span aria-hidden="true">/</span><span aria-current="page">{pageLabel}</span></nav>
        <div className="shero-grid">
          <div>
            <p className="label rv">Persönliche Bürohilfe · {pageLabel}</p>
            <h1 className="display" data-words><Title text={title} /></h1>
            <p className="lede rv" style={{ ["--d" as string]: "450ms" }}>{intro}</p>
            <div className="acts rv" style={{ ["--d" as string]: "600ms" }}><a className="btn" href="#beispiele">Passende Beispiele ansehen <span className="arr" aria-hidden="true">→</span></a><a className="mono-link" href="#rechner">Kostenloser Angebotsrechner</a></div>
          </div>
          <div className="win shero-note rv" style={{ ["--d" as string]: "350ms" }}><div className="win-bar" aria-hidden="true"><i /><i /><i /><span>Sie arbeiten direkt mit mir.</span></div><div className="inner">
            <img src="/hub/marco-foto-800.jpg" alt="Marco Grotemeyer, Ihr persönlicher Ansprechpartner" width="56" height="56" />
            <h2>Eine Aufgabe auswählen.<br />Gemeinsam leichter machen.</h2>
            <p>Ich höre zu, richte die passende Hilfe ein und zeige Ihnen die Bedienung an einer Aufgabe aus Ihrem eigenen Betrieb.</p>
            <ul><li className="check">Keine technischen Vorkenntnisse nötig</li><li className="check">Vorhandene Programme zuerst prüfen</li><li className="check">Ein klarer Umfang vor dem Start</li></ul>
          </div></div>
        </div>
        <nav className="jump rv" aria-label="Auf dieser Seite"><a href="#probleme">Ihr Alltag</a><a href="#beispiele">Beispiele ausprobieren</a><a href="#ergebnisse">Mögliche Ergebnisse</a><a href="#rechner">Preisrahmen</a><a href="#prozess">Zusammenarbeit</a></nav>
      </div>
    </section>

    {!sector && <section id="betriebe" className="sec tight"><div className="wrap"><div className="head rv"><p className="label">Noch genauer zu Ihrem Betrieb</p><h2 className="display">Wählen Sie Ihren <em>Betrieb.</em></h2><p>Jede Seite zeigt eigene Aufgaben, Beispiele und mögliche Ergebnisse.</p></div><Directory group={currentGroup} /></div></section>}

    <section id="probleme" className={sector ? "sec tight" : "sec"} style={{ background: "var(--paper-2)" }} aria-labelledby="probleme-heading">
      <div className="wrap">
        <div className="head rv"><p className="label">Vielleicht kennen Sie das</p><h2 id="probleme-heading" className="display">Das Geschäft läuft. Diese Aufgaben bleiben trotzdem <em>liegen.</em></h2><p>Welche Situation bei Ihnen tatsächlich Zeit kostet, klären wir an Ihrem eigenen Beispiel.</p></div>
        <ol className="problems" data-stagger>{problems.map((problem, i) => <li key={problem}><span className="num">0{i + 1}</span><p>{problem}</p></li>)}</ol>
      </div>
    </section>

    <section id="beispiele" className="sec" aria-labelledby="beispiele-heading">
      <div className="wrap">
        <div className="head rv"><p className="label">Passende Alltagshilfen · {pageLabel}</p><h2 id="beispiele-heading" className="display">Ihr digitaler Helfer. Für Aufgaben aus Ihrem <em>Betrieb.</em></h2><p>Wählen Sie eine Aufgabe. Sehen Sie, welche Informationen Ihr Helfer bekommt, nach welcher Regel er arbeitet und welches Ergebnis Sie prüfen.</p></div>
        <div className="rv" style={{ ["--d" as string]: "120ms" }}>
          <div className="toggle" role="tablist" aria-label={`Alltagshilfen für ${pageLabel}`}>{entries.map(e => <button key={e.useCase.id} type="button" role="tab" aria-selected={active === e.useCase.id} onClick={() => setActive(e.useCase.id)}>{e.useCase.tab}</button>)}</div>
          <div className="case-intro">{!sector && <span className="tag">Beispiel aus: {entry.sector.label}</span>}<h3>{entry.useCase.title}</h3><div className="explain"><div><p className="label">Das mögliche Problem</p><p>{entry.useCase.problem}</p></div><div><p className="label">So helfe ich Ihnen</p><p>{entry.useCase.solution}</p></div><div><p className="label">Das mögliche Ergebnis</p><p>{entry.useCase.result}</p></div></div></div>
          <SectorDemo key={entry.useCase.id} sector={entry.sector} useCase={entry.useCase} />
          <div className="case-next"><a className="btn" href="#rechner" onClick={() => choose(entry.useCase, entry.sector)}>Diese Hilfe im Rechner auswählen <span className="arr" aria-hidden="true">→</span></a>{!sector && <Link className="mono-link" href={`${sectorHref(entry.sector.slug)}#top`}>Mehr für {entry.sector.label} ↗</Link>}</div>
        </div>
      </div>
    </section>

    <section id="ergebnisse" className="sec" style={{ background: "var(--paper-2)" }} aria-labelledby="ergebnisse-heading">
      <div className="wrap">
        <div className="head rv"><p className="label">Daran erkennen Sie den Nutzen</p><h2 id="ergebnisse-heading" className="display">Was sich im Alltag leichter anfühlen <em>kann.</em></h2><p>Wir prüfen gemeinsam, ob die neue Hilfe Ihre Aufgabe tatsächlich einfacher macht.</p></div>
        <div className="results3" data-stagger>{results.map((result, i) => <article key={result}><Check aria-hidden="true" style={{ width: 20, height: 20, color: "var(--accent)" }} /><h3>{sector ? sector.cases[i].tab : ["Mehr Überblick", "Weniger Schreibarbeit", "Klarer nächster Schritt"][i]}</h3><p>{result}</p></article>)}</div>
        <div className="measure rv"><p className="label">Gemeinsam vergleichen</p><p>Sie erledigen dieselbe Aufgabe mit und ohne die neue Hilfe. Wir schauen auf den Aufwand, notwendige Korrekturen und darauf, ob Sie die Hilfe im Betrieb weiter nutzen möchten.</p></div>
      </div>
    </section>

    <Calculator industry={offerIndustry} selected={selected} onIndustry={setOfferIndustry} onSelected={setSelected} />

    <section id="prozess" className="sec" aria-labelledby="prozess-heading">
      <div className="wrap">
        <div className="head rv"><p className="label">Persönliche Zusammenarbeit · {pageLabel}</p><h2 id="prozess-heading" className="display">Sie zeigen mir den Alltag. Ich richte die Hilfe <em>ein.</em></h2><p>Wir starten mit einer klar begrenzten Aufgabe und gehen die Bedienung zusammen durch.</p></div>
        <ol className="steps4" data-stagger>
          <li><MessagesSquare aria-hidden="true" /><h3>1. Eine Aufgabe besprechen.</h3><p>Sie zeigen mir zum Beispiel: {entries[0].useCase.request}</p><p className="fine">Ich kläre mit Ihnen die vorhandenen Programme und den nächsten sinnvollen Schritt.</p></li>
          <li><FileText aria-hidden="true" /><h3>2. Umfang und Preis klären.</h3><p>Sie erhalten ein konkretes Angebot für die Einrichtung, Ihre Einführung und mögliche Programmkosten.</p><p className="fine">Sie entscheiden vor dem Start.</p></li>
          <li><Handshake aria-hidden="true" /><h3>3. Einrichten und üben.</h3><p>Ich richte Vorlagen und passende Abläufe ein. Sie probieren die Hilfe an einer eigenen Aufgabe aus.</p><p className="fine">Am Ende haben Sie eine nutzbare Hilfe und eine kurze Anleitung.</p></li>
          <li><UserRound aria-hidden="true" /><h3>4. Im Alltag prüfen.</h3><p>Wir schauen, was leichter geht und wo noch Fragen offen sind. Weitere persönliche Hilfe vereinbaren wir bei Bedarf.</p><p className="fine">Erst danach wählen wir eine weitere Aufgabe.</p></li>
        </ol>
      </div>
    </section>

    <section className="sec" style={{ background: "var(--paper-2)" }}>
      <div className="wrap faq-grid">
        <div className="head rv"><p className="label">Vor dem Start</p><h2 className="display">Was Sie dazu wissen <em>sollten.</em></h2></div>
        <div className="faq rv" style={{ ["--d" as string]: "120ms" }}>
          <details><summary>Funktioniert das mit meinen vorhandenen Programmen?</summary><p>Wir prüfen die Programme Ihres Betriebs zuerst. Manche Aufgaben lassen sich mit Vorlagen lösen, andere brauchen Erinnerungen oder eine Verbindung. Was möglich ist und welche Kosten entstehen, klären wir vor der Einrichtung.</p></details>
          <details><summary>Wer bestätigt Termine, Inhalte und Preise?</summary><p>Sie behalten die Kontrolle. Ihr Helfer bereitet Informationen und Entwürfe vor. Freie Zeiten, fachliche Angaben, Preise und der Versand werden von Ihnen geprüft und bestätigt.</p></details>
          <details><summary>Welche Daten brauchen wir für den Start?</summary><p>Für das erste Gespräch reicht ein Beispiel Ihrer Büroaufgabe. Wir können zunächst mit anonymisierten Angaben arbeiten. Vor der Einrichtung klären wir, welche echten Angaben nötig sind und wer Zugriff erhält.{sector?.slug === "physiotherapiepraxen" ? " Bei der Praxisorganisation beginnen wir mit organisatorischen Informationen. Der Umgang mit Patientendaten wird gesondert geprüft." : ""}</p></details>
        </div>
      </div>
    </section>

    {sector && <section className="sec"><div className="wrap"><div className="head rv"><p className="label">Weitere Betriebe in Ihrem Bereich</p><h2 className="display">{currentGroup.label}</h2></div><Directory group={currentGroup} /></div></section>}

    <Contact label={`Ihr nächster Schritt · ${pageLabel}`} title={<>Welche dieser Aufgaben kostet Sie gerade <em>Zeit?</em></>} text="Erzählen Sie mir von Ihrem Betrieb. Wir besprechen eine konkrete Aufgabe und schauen, wie ich Sie persönlich unterstützen kann." />
    <StickyContact />
  </div>;
}
