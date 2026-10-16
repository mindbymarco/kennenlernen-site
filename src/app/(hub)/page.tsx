import Link from "next/link";
import Ablauf from "@/components/hub/Ablauf";
import { Accent, Words } from "@/components/hub/Words";
import { BuildStrip, Faq, Ladder, Promises } from "@/components/hub/Blocks";
import WeekViz from "@/components/hub/viz/WeekViz";
import TaskViz from "@/components/hub/viz/TaskViz";
import SwipeViz from "@/components/hub/viz/SwipeViz";
import { builds, HANDSCHRIFT_URL } from "@/lib/hub";

// Startseite nach Probe A (H22). Wording vom Alltag zur Lösung (H25), Visualisierungen (H26).
const steps = [
  { id: "start", label: "Start" },
  { id: "alltag", label: "Alltag" },
  { id: "ich", label: "Ich kenne das" , grow: 1.3 },
  { id: "ergebnis", label: "Ergebnis" },
  { id: "aufwand", label: "Aufwand" },
  { id: "builds", label: "Builds" },
  { id: "preise", label: "Preise" },
  { id: "ueber", label: "Über mich", grow: 1.2 },
  { id: "fragen", label: "Fragen" },
];

export default function Home() {
  return <>
    <section className="hero" id="start">
      <div className="wrap">
        <p className="label rv">KI-Agenten für Solo-Gründer:innen</p>
        <h1 className="display" data-words><Words>Du machst alles</Words> <Accent shimmer>allein.</Accent></h1>
        <p className="lede rv" style={{ ["--d" as string]: "500ms" }}>Ich baue dir einen KI-Agenten, der dir einen Teil davon abnimmt. Zum festen Preis, und danach gehört er dir.</p>
        <div className="acts rv" style={{ ["--d" as string]: "650ms" }}>
          <Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link>
          <a className="mono-link" href="#alltag">So sieht das aus</a>
        </div>
        <div className="who rv" style={{ ["--d" as string]: "800ms" }}><img src="/hub/marco-foto-800.jpg" alt="" width="40" height="40" /><span className="label">Marco Grotemeyer · Bad Oeynhausen</span></div>
      </div>
    </section>

    <section className="lines" id="alltag" aria-label="Dein Alltag">
      <div className="wrap">
        <p className="display" data-words><Words>Montags sortierst du Anfragen.</Words></p>
        <p className="display" data-words><Words>Dienstags schreibst du dieselbe Antwort wie letzte Woche.</Words></p>
        <p className="display" data-words><Words>Mittwochs suchst du die Notiz, die du dir unterwegs gemacht hast.</Words></p>
        <p className="display muted" data-words><Words>Und die Arbeit, für die dich deine Kund:innen eigentlich bezahlen, schiebst du auf den</Words> <Accent>Abend.</Accent></p>
        <WeekViz />
      </div>
    </section>

    <section className="sec" id="ich" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="head rv"><p className="label">01 · Ich kenne das</p><h2 className="display">Ich kenne das, weil es bei mir <em>genauso</em> war.</h2>
          <p>Ich mache alles allein: Inhalte, Kundschaft, Technik. Irgendwann habe ich angefangen, mir für die Aufgaben, die immer wiederkommen, Agenten zu bauen.</p>
          <p>Ideen schicke ich heute per Telegram an Achilleus, und er legt sie sortiert in Craft ab. Meine Reels schneidet Claude aus meinem eigenen Material. Ich nutze beides jeden Tag.</p></div>
        <div className="win term run rv" data-term>
          <div className="win-bar" aria-hidden="true"><i /><i /><i /><span>achilleus · telegram → craft</span></div>
          <div className="term-body">
            <div className="line"><span className="p">telegram</span>  neue Nachricht von Marco</div>
            <div className="line">          „Idee: Reel, in dem ich meine Preise zeige. Bis Freitag.“</div>
            <div className="line"><span className="acc">→</span> erkannt     Idee · Content · Frist Freitag</div>
            <div className="line"><span className="acc">→</span> craft       Notiz angelegt in Ideen / Reels</div>
            <div className="line"><span className="acc">→</span> aufgabe     Freitag, verknüpft mit der Notiz</div>
            <div className="line"><span className="ok">✓</span> fertig. Marco musste nichts sortieren.</div>
          </div>
        </div>
        <p className="run-cap rv">Achilleus läuft auf meinem eigenen Server. Die Anzeige hier ist vereinfacht, der Ablauf dahinter ist echt.</p>
      </div>
    </section>

    <section className="sec" id="ergebnis" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="head rv"><p className="label">02 · Ergebnis</p><h2 className="display">Was sich für dich <em>ändert</em></h2><p>Zum Beispiel:</p></div>
        <div className="cols" data-stagger>
          <div><h3>Anfragen</h3><p>Morgens liegen die Antworten auf neue Anfragen schon als Entwurf bereit. Du liest sie, passt sie an und schickst sie ab.</p></div>
          <div><h3>Notizen</h3><p>Was dir unterwegs einfällt, landet von selbst an der richtigen Stelle.</p></div>
          <div><h3>Inhalte</h3><p>Aus deinen Notizen und Gesprächen wird ein erster Entwurf für Post oder Newsletter.</p></div>
        </div>
        <SwipeViz />
      </div>
    </section>

    <section className="sec" id="aufwand">
      <div className="wrap">
        <div className="head rv"><p className="label">03 · Aufwand</p><h2 className="display">Was du dafür tun <em>musst</em></h2></div>
        <div className="cols four" data-stagger style={{ marginBottom: 72 }}>
          <div><span className="label">Erstgespräch</span><p style={{ marginTop: 10 }}>Im Erstgespräch erzählst du mir 20 Minuten lang, welche Aufgabe dich nervt.</p></div>
          <div><span className="label">Aufschreiben</span><p style={{ marginTop: 10 }}>Danach schreiben wir zusammen auf, was der Agent können soll.</p></div>
          <div><span className="label">Testen</span><p style={{ marginTop: 10 }}>Ich baue ihn, und du testest mit echten Fällen aus deinem Alltag.</p></div>
          <div><span className="label">Übergabe</span><p style={{ marginTop: 10 }}>Nach zwei Wochen läuft er. Du bekommst eine Anleitung.</p></div>
        </div>
        <div className="head rv" style={{ marginBottom: 32 }}><h3 className="display" style={{ fontSize: "clamp(30px, 3.4vw, 40px)" }}>Und danach bleibt bei dir nur noch ein Handgriff.</h3></div>
        <TaskViz />
      </div>
    </section>

    <section className="stage" id="builds">
      <div className="wrap">
        <div className="head rv"><p className="label">04 · Builds</p><h2 className="display">Was ich für mich <em style={{ color: "var(--accent-beratung-hell)" }}>gebaut</em> habe</h2><p>Diese Systeme nutze ich selbst, jeden Tag. Wenn du so etwas auch willst, baue ich es dir.</p></div>
        <BuildStrip items={builds} />
        <div className="center rv"><Link className="mono-link" href="/builds">Alle Builds ansehen</Link></div>
      </div>
    </section>

    <section className="sec" id="preise">
      <div className="wrap">
        <div className="head rv"><p className="label">05 · Preise</p><h2 className="display">Du kennst den Preis, <em>bevor</em> du zahlst.</h2></div>
        <Ladder />
        <Promises />
        <div className="center rv"><Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="sec" id="bereiche" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="head rv"><p className="label">06 · Was ich sonst mache</p></div>
        <div className="areas" data-stagger>
          <a className="area" href={HANDSCHRIFT_URL} target="_blank" rel="noopener" style={{ ["--c" as string]: "var(--accent-handschrift)" }}><span className="label">Handschrift ↗</span><h3>Reels mit Claude schneiden</h3><p>Mein eigenes Schnitt-System, als Programm für deinen Mac.</p></a>
          <Link className="area" href="/betriebe" style={{ ["--c" as string]: "var(--accent-betriebe)" }}><span className="label">Für Betriebe</span><h3>Hilfe im Büroalltag</h3><p>Digitale Assistenten für Praxen, Studios und Handwerksbetriebe, die ich persönlich einrichte.</p></Link>
          <div className="area" style={{ ["--c" as string]: "var(--accent-beratung)" }}><span className="label">Bibliothek</span><h3>Zum Selbermachen</h3><p>Kostenlose Anleitungen, Skills und Checklisten. Die ersten sind in Arbeit.</p></div>
        </div>
      </div>
    </section>

    <section className="sec" id="ueber" style={{ background: "var(--paper-2)" }}>
      <div className="wrap about">
        <img className="rv" src="/hub/marco-foto-800.jpg" alt="Marco Grotemeyer" width="800" height="1000" loading="lazy" />
        <div className="rv" style={{ ["--d" as string]: "120ms" }}>
          <p className="label">07 · Über mich</p>
          <h2 className="display">Gründen ist schwer. Erfolgreich gründen noch <em>schwerer.</em></h2>
          <p>Ich bin Marco. Ich mache alles allein, von den Inhalten über die Kundschaft bis zur Technik. Deshalb habe ich angefangen, mir Agenten zu bauen, die mir Arbeit abnehmen, und ich nutze sie jeden Tag.</p>
          <p>Für dich baue ich dasselbe. Nicht größer als nötig, und so, dass du es auch ohne mich weiter nutzen kannst.</p>
          <Link className="mono-link" href="/ueber-mich">Mehr über mich</Link>
        </div>
      </div>
    </section>

    <section className="sec" id="fragen">
      <div className="wrap">
        <div className="head rv"><p className="label">08 · Fragen</p><h2 className="display">Bevor du fragst</h2></div>
        <Faq />
      </div>
    </section>

    <section className="close">
      <div className="wrap">
        <p className="display" data-words><Words>Welche Aufgabe würdest du als Erstes</Words> <Accent>abgeben?</Accent></p>
        <div className="rv" style={{ marginTop: 40 }}><Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <Ablauf steps={steps} />
  </>;
}
