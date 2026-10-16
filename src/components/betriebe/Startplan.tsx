"use client";
import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";
import { MAIL } from "@/lib/hub";
import { buildStartplan, formatDate, needs, parseStartplan, prep, priceLine, promises, STARTPLAN_CAL_URL, startplanSubject, startplanText, startplanTitle, supportLine } from "@/lib/startplan";

// QR-Code als eigenes SVG (qrcode liefert nur die Modul-Matrix, kein HTML).
function QR({ value, size = 96 }: { value: string; size?: number }) {
  const path = useMemo(() => {
    const qr = QRCode.create(value, { errorCorrectionLevel: "M" });
    const n = qr.modules.size; const d = qr.modules.data; let out = "";
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (d[y * n + x]) out += `M${x} ${y}h1v1h-1z`;
    return { n, out };
  }, [value]);
  return <svg className="sp-qr" viewBox={`0 0 ${path.n} ${path.n}`} width={size} height={size} shapeRendering="crispEdges" role="img" aria-label="QR-Code zum Terminlink"><path d={path.out} fill="currentColor" /></svg>;
}

// Startplan für Ihren Betrieb (Strategie/STARTPLAN-DOWNLOAD.md, Abschnitt 2): acht Blöcke auf einer A4-Seite im Papier-Look.
export default function Startplan() {
  const params = useSearchParams();
  const plan = useMemo(() => buildStartplan(parseStartplan(params)), [params]);
  const date = useMemo(() => new Date(), []);
  const mail = `mailto:${MAIL}?subject=${encodeURIComponent(startplanSubject(plan))}&body=${encodeURIComponent(`Hallo Marco,\n\n${startplanText(plan, date)}\n\nLassen Sie uns dazu sprechen.\n`)}`;
  const calHost = STARTPLAN_CAL_URL.replace(/^https?:\/\//, "").replace(/\?.*$/, "");

  return <div className="sp-page">
    <div className="wrap sp-tools" aria-label="Startplan sichern">
      <div><p className="label">Ihr Startplan</p><p>Eine Seite. Als PDF sichern, ausdrucken oder weitergeben.</p></div>
      <div className="sp-tools-acts">
        <button type="button" className="btn" onClick={() => window.print()}>Als PDF sichern <span className="arr" aria-hidden="true">↓</span></button>
        <a className="btn ghost" href={mail}>Per E-Mail an Marco <span className="arr" aria-hidden="true">↗</span></a>
        <Link className="mono-link" href="/betriebe#rechner">Zurück zum Rechner</Link>
      </div>
    </div>

    <article className="sp-sheet" aria-labelledby="sp-title">
      <header className="sp-head">
        <img src="/hub/zeichen-klein.svg" alt="" width="28" height="28" />
        <div><h1 id="sp-title" className="display">Startplan für Ihren <em>Betrieb.</em></h1>
          <p className="sp-meta">{plan.sector?.label ?? (plan.industry !== "Noch offen" ? plan.industry : "Kleiner Betrieb")} · {formatDate(date)} · Erstellt auf marcogrotemeyer.de/betriebe · unverbindlich</p></div>
      </header>

      <section className="sp-block sp-first">
        <p className="label">01 · Ihre erste Aufgabe</p>
        <h2 className="display">{plan.example.title}</h2>
        <div className="sp-two">
          <div><p className="sp-k">Heute</p><p>{plan.example.problem}</p></div>
          <div><p className="sp-k">Mit Helfer</p><p>{plan.example.result}</p></div>
        </div>
        {plan.later.length > 0 && <p className="sp-later"><b>Damit fangen wir an.</b> Danach möglich: {plan.later.map(m => m.label).join(", ")}.</p>}
      </section>

      <section className="sp-block sp-example">
        <p className="label">02 · So sieht das bei Ihnen aus</p>
        <ol>
          <li><span className="sp-k">Die Anfrage</span><p>„{plan.example.request}“</p></li>
          <li><span className="sp-k">Die vereinbarte Regel</span><p>{plan.example.rule}</p></li>
          <li><span className="sp-k">Das vorbereitete Ergebnis</span><p>{plan.example.output}</p></li>
        </ol>
        <p className="fine">{plan.example.helper}{plan.example.from ? ` · Beispiel aus einem Betrieb der Sparte ${plan.example.from}, bei Ihnen passen wir es an` : ""} · Sie prüfen und entscheiden, was rausgeht.</p>
      </section>

      <div className="sp-cols">
        <section className="sp-block">
          <p className="label">03 · Was Sie dafür brauchen</p>
          <ul className="sp-list">{needs.map(n => <li key={n} className="check">{n}</li>)}</ul>
        </section>
        <section className="sp-block">
          <p className="label">04 · Preisrahmen</p>
          <p className="sp-price">{priceLine(plan)}</p>
          <p>{supportLine(plan)}</p>
          <p className="fine">Enthalten: besprechen, einrichten, gemeinsam ausprobieren, kurze Anleitung. Einrichtung: {plan.connected ? "mehrere Programme miteinander verbinden" : "mit Vorlagen und vorhandenen Programmen starten"}. Mögliche Programmkosten besprechen wir vorher.</p>
          <p className="sp-promises">{promises.map((p, i) => <span key={p}>{i > 0 && <i aria-hidden="true"> · </i>}{p}</span>)}</p>
        </section>
      </div>

      <section className="sp-block sp-next">
        <div>
          <p className="label">05 · Ihr nächster Schritt</p>
          <a className="btn" href={STARTPLAN_CAL_URL} target="_blank" rel="noopener noreferrer">Gespräch wählen <span className="arr" aria-hidden="true">→</span></a>
          <p className="sp-cal">{calHost}</p>
          <p>30 Minuten, kostenlos, unverbindlich. Oder antworten Sie auf diese Mail.</p>
          <p className="fine">Bringen Sie diesen Startplan mit, dann sparen wir im Gespräch zehn Minuten.</p>
        </div>
        <QR value={STARTPLAN_CAL_URL} />
      </section>

      <section className="sp-block sp-prep">
        <p className="label">06 · In 5 Minuten vorbereitet</p>
        <ul>{prep.map(p => <li key={p}><span className="sp-box" aria-hidden="true" />{p}</li>)}</ul>
      </section>

      <footer className="sp-foot">
        <p><b>Marco Grotemeyer</b> · Bad Oeynhausen · {MAIL}</p>
        <p>Erstellt im Browser, es wurden keine Daten übertragen.</p>
      </footer>
    </article>
  </div>;
}
