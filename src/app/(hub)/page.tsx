import Link from "next/link";
import Ablauf from "@/components/hub/Ablauf";
import { Accent, Words } from "@/components/hub/Words";
import { BuildStrip, Faq, Ladder, Promises } from "@/components/hub/Blocks";
import { builds, HANDSCHRIFT_URL } from "@/lib/hub";

// Startseite nach Probe A „Werkstattbuch“ (H22), Texte aus STARTSEITE-TEXTE.md (H24).
const steps = [
  { id: "start", label: "Start", grow: 1.2 },
  { id: "aufgabe", label: "Aufgabe" },
  { id: "lauf", label: "Lauf" },
  { id: "builds", label: "Builds", grow: 1.3 },
  { id: "preise", label: "Preise", grow: 1.4 },
  { id: "ueber", label: "Über mich" },
  { id: "fragen", label: "Fragen" },
];

export default function Home() {
  return <>
    <section className="hero" id="start">
      <div className="wrap">
        <p className="label rv">KI-Agenten für Solo-Gründer:innen</p>
        <h1 className="display" data-words><Words>Du machst alles</Words> <Accent shimmer>allein.</Accent></h1>
        <p className="lede rv" style={{ ["--d" as string]: "500ms" }}>Ich baue dir einen KI-Agenten, der dir einen Teil davon abnimmt. Zum Festpreis und mit Übergabe. Danach gehört er dir.</p>
        <div className="acts rv" style={{ ["--d" as string]: "650ms" }}>
          <Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link>
          <a className="mono-link" href="#lauf">So sieht das aus</a>
        </div>
        <div className="who rv" style={{ ["--d" as string]: "800ms" }}><img src="/hub/marco-foto-800.jpg" alt="" width="40" height="40" /><span className="label">Marco Grotemeyer · Bad Oeynhausen</span></div>
      </div>
    </section>

    <section className="lines" aria-label="Kennst du das?">
      <div className="wrap">
        <p className="display" data-words><Words>Du beantwortest Anfragen, wenn andere</Words> <Accent>Feierabend</Accent> <Words>haben.</Words></p>
        <p className="display" data-words><Words>Du schreibst dieselbe Mail zum zehnten Mal.</Words></p>
        <p className="display muted" data-words><Words>Und die Arbeit, für die du gegründet hast, wartet.</Words></p>
      </div>
    </section>

    <section className="sec" id="aufgabe" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="head rv"><p className="label">01 · Arbeite mit mir</p><h2 className="display">Ich baue. Du <em>nutzt</em> es.</h2><p>Ein Agent ist ein Ablauf, der für dich arbeitet, auch wenn du gerade nicht hinsiehst. Ich baue ihn mit Claude, ChatGPT oder n8n, in den Programmen, die du schon hast.</p></div>
        <div className="cols" data-stagger>
          <div><span className="label">Zum Beispiel</span><h3>Anfragen sortieren</h3><p>Neue Anfragen werden gelesen und eingeordnet. Eine Antwort liegt als Entwurf bereit, du schickst sie ab.</p></div>
          <div><span className="label">Zum Beispiel</span><h3>Gedanken festhalten</h3><p>Du sprichst eine Nachricht ein. Sie landet als fertige Notiz an der richtigen Stelle.</p></div>
          <div><span className="label">Zum Beispiel</span><h3>Aus Material wird Inhalt</h3><p>Aus Notizen, Videos oder Gesprächen entsteht ein Entwurf für Post, Reel oder Newsletter.</p></div>
        </div>
        <div className="center rv"><Link className="mono-link" href="/beratung">Wie die Beratung abläuft</Link></div>
      </div>
    </section>

    <section className="sec" id="lauf" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="head rv"><p className="label">02 · Ein echter Lauf</p><h2 className="display">Ich schicke eine Nachricht. <em>Achilleus</em> sortiert.</h2></div>
        <div className="win term run rv" data-term>
          <div className="win-bar" aria-hidden="true"><i /><i /><i /><span>achilleus · telegram → craft</span></div>
          <div className="term-body">
            <div className="line"><span className="p">telegram</span>  neue Nachricht von Marco</div>
            <div className="line">          „Idee: Reel, in dem ich meine Preise zeige. Bis Freitag.“</div>
            <div className="line"><span className="acc">→</span> erkannt     Idee · Content · Frist Freitag</div>
            <div className="line"><span className="acc">→</span> craft       Notiz angelegt in Ideen / Reels</div>
            <div className="line"><span className="acc">→</span> aufgabe     Freitag, verknüpft mit der Notiz</div>
            <div className="line"><span className="ok">✓</span> fertig. Marco hat nichts sortiert.</div>
          </div>
        </div>
        <p className="run-cap rv">Achilleus läuft auf meinem eigenen Server. Die Darstellung ist vereinfacht, der Ablauf ist echt.</p>
      </div>
    </section>

    <section className="stage" id="builds">
      <div className="wrap">
        <div className="head rv"><p className="label">03 · Builds</p><h2 className="display">Was ich für mich <em style={{ color: "var(--accent-beratung-hell)" }}>gebaut</em> habe</h2><p>Diese Systeme nutze ich selbst, jeden Tag. So etwas baue ich auch für dich.</p></div>
        <BuildStrip items={builds} />
        <div className="center rv"><Link className="mono-link" href="/builds">Alle Builds ansehen</Link></div>
      </div>
    </section>

    <section className="sec" id="preise">
      <div className="wrap">
        <div className="head rv"><p className="label">04 · So läuft es</p><h2 className="display">Du siehst jeden Preis, <em>bevor</em> du zahlst.</h2></div>
        <Ladder />
        <Promises />
        <div className="center rv"><Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="sec" id="bereiche" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="head rv"><p className="label">05 · Was ich sonst mache</p></div>
        <div className="areas" data-stagger>
          <a className="area" href={HANDSCHRIFT_URL} target="_blank" rel="noopener" style={{ ["--c" as string]: "var(--accent-handschrift)" }}><span className="label">Handschrift ↗</span><h3>Reels mit Claude schneiden</h3><p>Das System, mit dem ich meine eigenen Reels mache. Als Programm für deinen Mac.</p></a>
          <Link className="area" href="/betriebe" style={{ ["--c" as string]: "var(--accent-betriebe)" }}><span className="label">Für Betriebe</span><h3>Hilfe im Büroalltag</h3><p>Digitale Assistenten für Praxen, Studios und Handwerk, persönlich eingerichtet.</p></Link>
          <div className="area" style={{ ["--c" as string]: "var(--accent-beratung)" }}><span className="label">Bibliothek</span><h3>Zum Selbermachen</h3><p>Skills, Checklisten und Anleitungen, kostenlos. Die ersten kommen bald.</p></div>
        </div>
      </div>
    </section>

    <section className="sec" id="ueber" style={{ background: "var(--paper-2)" }}>
      <div className="wrap about">
        <img className="rv" src="/hub/marco-foto-800.jpg" alt="Marco Grotemeyer" width="800" height="1000" loading="lazy" />
        <div className="rv" style={{ ["--d" as string]: "120ms" }}>
          <p className="label">06 · Über mich</p>
          <h2 className="display">Gründen ist schwer. Erfolgreich gründen noch <em>schwerer.</em></h2>
          <p>Ich bin Marco. Ich mache selbst alles allein: Inhalte, Kundschaft, Technik. Deshalb baue ich mir Agenten, die mir Arbeit abnehmen, und nutze sie jeden Tag.</p>
          <p>Für dich baue ich dasselbe. Nur so viel, wie du brauchst, und so, dass du es auch ohne mich weiter nutzen kannst.</p>
          <Link className="mono-link" href="/ueber-mich">Mehr über mich</Link>
        </div>
      </div>
    </section>

    <section className="sec" id="fragen">
      <div className="wrap">
        <div className="head rv"><p className="label">07 · Fragen</p><h2 className="display">Bevor du fragst</h2></div>
        <Faq />
      </div>
    </section>

    <section className="close">
      <div className="wrap">
        <p className="display" data-words><Words>Gebaut, nicht</Words> <Accent>behauptet.</Accent></p>
        <div className="rv" style={{ marginTop: 40 }}><Link className="btn" href="/kontakt">Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <Ablauf steps={steps} />
  </>;
}
