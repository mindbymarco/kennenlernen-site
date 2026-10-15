import type { Metadata } from "next";
import Link from "next/link";
import Ablauf from "@/components/hub/Ablauf";
import AdFilm from "@/components/hub/AdFilm";
import { Accent, Words } from "@/components/hub/Words";
import { Faq, Ladder, Promises } from "@/components/hub/Blocks";
import { training } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Beratung: KI-Agenten zum Festpreis | Marco Grotemeyer",
  description: "Ich baue Solo-Gründer:innen einen KI-Agenten für eine wiederkehrende Aufgabe. Erstgespräch 0 €, Build-Session 390 €, Pilot-Build 1.490 € (die ersten drei 990 €).",
  alternates: { canonical: "/beratung" },
};

const steps = [
  { id: "start", label: "Start" },
  { id: "fuer-wen", label: "Für wen" },
  { id: "ablauf", label: "Ablauf", grow: 1.2 },
  { id: "preise", label: "Preise", grow: 1.4 },
  { id: "grenzen", label: "Grenzen" },
  { id: "fragen", label: "Fragen" },
];

const flow = [
  { n: "01", t: "Erstgespräch", d: "In 20 Minuten erzählst du mir, welche Aufgabe dich Zeit kostet. Ich sage dir ehrlich, ob sich ein Agent dafür lohnt." },
  { n: "02", t: "Umfang festlegen", d: "Wir schreiben auf, was der Ablauf können soll und woran wir merken, dass er funktioniert. Der Preis steht fest, bevor du etwas zahlst." },
  { n: "03", t: "Bauen und testen", d: "Ich baue in deinen Programmen und teste mit echten Fällen aus deinem Alltag. Nach zwei Wochen läuft der Ablauf." },
  { n: "04", t: "Übergabe", d: "Du bekommst eine Anleitung und die Aufzeichnung, und 14 Tage lang bin ich für Fragen da. Ob du danach Betreuung willst, entscheidest du." },
];

export default function Beratung() {
  return <>
    <section className="page-head" id="start">
      <div className="wrap">
        <p className="label rv">Beratung · KI-Agenten zum Festpreis</p>
        <h1 className="display" data-words><Words>Ein Agent für die Aufgabe, die dich jede Woche</Words> <Accent shimmer>Stunden</Accent> <Words>kostet.</Words></h1>
        <p className="lede rv" style={{ ["--d" as string]: "500ms" }}>Für Solo-Gründer:innen, die Wissen oder eine Dienstleistung verkaufen und ChatGPT oder Claude schon nutzen. Ich baue den Ablauf und übergebe ihn dir so, dass du ihn allein weiter nutzen kannst.</p>
        <div className="acts rv" style={{ ["--d" as string]: "650ms" }}><Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link><a className="mono-link" href="#preise">Preise ansehen</a></div>
        <div className="rv" style={{ ["--d" as string]: "800ms" }}>
          <AdFilm label="Kurzfilm: Ein Agent nimmt dir den Kleinkram ab. Weniger Tools, mehr Business."
            wide={{ mp4: "/hub/beratung-ad-16x9.mp4", webm: "/hub/beratung-ad-16x9.webm", poster: "/hub/beratung-ad-16x9-poster.jpg" }}
            tall={{ mp4: "/hub/beratung-ad-9x16.mp4", poster: "/hub/beratung-ad-9x16-poster.jpg" }} />
        </div>
      </div>
    </section>

    <section className="sec" id="fuer-wen" style={{ paddingTop: 72 }}>
      <div className="wrap">
        <div className="head rv"><p className="label">01 · Für wen</p><h2 className="display">Du arbeitest <em>allein.</em></h2></div>
        <div className="cols" data-stagger style={{ gridTemplateColumns: "1fr 1fr", maxWidth: 920 }}>
          <div><b>Passt, wenn …</b><p>du ohne Team arbeitest und Wissen oder eine Dienstleistung verkaufst, etwa als Coach, Berater:in oder Freelancer. Du nutzt ChatGPT oder Claude schon, und es gibt eine Aufgabe, die jede Woche wiederkommt und dich Stunden kostet.</p></div>
          <div><b>Passt eher nicht, wenn …</b><p>du ein Team oder ein mittelständisches Unternehmen führst. Dann bist du bei einer Agentur besser aufgehoben. Hast du einen lokalen Betrieb, schau dir <Link href="/betriebe">meine Hilfe für Betriebe</Link> an. Und wenn du erst mal nur ausprobieren willst und noch keine konkrete Aufgabe hast, ist ein Build noch zu früh.</p></div>
        </div>
      </div>
    </section>

    <section className="sec" id="ablauf" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="head rv"><p className="label">02 · So läuft es</p><h2 className="display">Vom ersten Gespräch bis zum laufenden <em>Ablauf</em></h2></div>
        <div className="cols four" data-stagger>
          {flow.map(step => <div key={step.n}><span className="label">{step.n}</span><h3>{step.t}</h3><p>{step.d}</p></div>)}
        </div>
      </div>
    </section>

    <section className="sec" id="preise">
      <div className="wrap">
        <div className="head rv"><p className="label">03 · Preise</p><h2 className="display">Du kennst den Preis, <em>bevor</em> du zahlst.</h2><p>Laufende Kosten für Claude, eine API, Hosting oder andere Werkzeuge zahlst du direkt beim Anbieter. Wie hoch sie sind, siehst du, bevor wir anfangen.</p></div>
        <Ladder extra={[training]} />
        <Promises />
        <div className="center rv"><Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="sec" id="grenzen" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="head rv"><p className="label">04 · Grenzen</p><h2 className="display">Was ich <em>nicht</em> mache</h2></div>
        <div className="cols" data-stagger>
          <div><h3>Rund um die Uhr</h3><p>Ich bin nicht ständig erreichbar. Was ich baue, soll ja gerade ohne mich laufen.</p></div>
          <div><h3>Große Software</h3><p>Ich baue keine Apps, kein SaaS und keine Anbindung an Konzernsysteme.</p></div>
          <div><h3>Folien ohne Umsetzung</h3><p>Strategie-Papiere schreibe ich nicht. Entweder läuft am Ende etwas, oder ich sage dir vorher, dass es sich nicht lohnt.</p></div>
        </div>
      </div>
    </section>

    <section className="sec" id="fragen">
      <div className="wrap">
        <div className="head rv"><p className="label">05 · Fragen</p><h2 className="display">Bevor du fragst</h2></div>
        <Faq />
      </div>
    </section>

    <section className="close">
      <div className="wrap">
        <p className="display" data-words><Words>Welche Aufgabe kostet dich die meiste</Words> <Accent>Zeit?</Accent></p>
        <div className="rv" style={{ marginTop: 40 }}><Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <Ablauf steps={steps} />
  </>;
}
