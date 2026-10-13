import type { Metadata } from "next";
import Link from "next/link";
import { Accent, Words } from "@/components/hub/Words";
import { builds, HANDSCHRIFT_URL } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Über mich | Marco Grotemeyer",
  description: "Ich bin Marco Grotemeyer. Ich mache alles allein und baue mir Agenten, die mir Arbeit abnehmen. Für Solo-Gründer:innen baue ich dasselbe.",
  alternates: { canonical: "/ueber-mich" },
};

export default function UeberMich() {
  return <>
    <section className="page-head">
      <div className="wrap">
        <p className="label rv">Über mich</p>
        <h1 className="display" data-words><Words>Gründen ist schwer. Erfolgreich gründen noch</Words> <Accent shimmer>schwerer.</Accent></h1>
      </div>
    </section>
    <section className="sec" style={{ paddingTop: 24 }}>
      <div className="wrap about">
        <img className="rv" src="/hub/marco-foto-800.jpg" alt="Marco Grotemeyer" width="800" height="1000" />
        <div className="prose rv" style={{ ["--d" as string]: "120ms" }}>
          <p>Ich bin Marco Grotemeyer und arbeite von Bad Oeynhausen aus. Ich mache alles allein: Inhalte, Kundschaft, Technik. Ich weiß also, wie es ist, wenn der Tag zu wenig Hände hat.</p>
          <p>Deshalb baue ich mir Agenten, die mir Arbeit abnehmen. Ich nutze sie jeden Tag, für meine Reels, meine Notizen und meine Ideen. Was sich bei mir bewährt, baue ich für andere.</p>
          <h2>Was ich selbst nutze</h2>
          <ul>{builds.map(build => <li key={build.slug}><Link href={`/builds/${build.slug}`}><strong>{build.title}</strong></Link>: {build.short}</li>)}</ul>
          <h2>Wie ich arbeite</h2>
          <ul><li>Ich sage dir ehrlich, wenn sich ein Build nicht lohnt.</li><li>Preise stehen fest, bevor du zahlst.</li><li>Was ich baue, gehört dir, mit Anleitung und Aufzeichnung.</li></ul>
          <h2>Was ich sonst mache</h2>
          <ul><li><a href={HANDSCHRIFT_URL} target="_blank" rel="noopener"><strong>Handschrift</strong></a>: das System, mit dem ich meine eigenen Reels mit Claude schneide.</li><li><Link href="/betriebe"><strong>Für Betriebe</strong></Link>: digitale Assistenten für Praxen, Studios und Handwerk.</li></ul>
          <div style={{ marginTop: 48 }}><Link className="btn" href="/kontakt">Lass uns sprechen <span className="arr" aria-hidden="true">→</span></Link></div>
        </div>
      </div>
    </section>
  </>;
}
