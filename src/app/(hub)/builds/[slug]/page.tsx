import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuildClip } from "@/components/hub/Blocks";
import { buildBySlug, builds } from "@/lib/hub";

export const dynamicParams = false;
export function generateStaticParams() { return builds.map(build => ({ slug: build.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const build = buildBySlug((await params).slug);
  if (!build) return {};
  return { title: `${build.title} · Build | Marco Grotemeyer`, description: build.short, alternates: { canonical: `/builds/${build.slug}` } };
}

export default async function BuildPage({ params }: { params: Promise<{ slug: string }> }) {
  const build = buildBySlug((await params).slug);
  if (!build) notFound();
  const next = builds[(builds.indexOf(build) + 1) % builds.length];
  return <section className="sec" style={{ paddingTop: 150 }}>
    <div className="wrap case">
      <div className="rv" style={{ background: "var(--stage)", borderRadius: 34, padding: 0 }}><BuildClip build={build} /></div>
      <div className="prose rv" style={{ ["--d" as string]: "120ms" }}>
        <p className="label"><Link href="/builds" style={{ textDecoration: "none" }}>Builds</Link> · <span className="status-pill">{build.status}</span></p>
        <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "18px 0 18px" }}>{build.title}</h1>
        <p className="lede" style={{ color: "var(--ink)" }}>{build.short}</p>
        <div className="tags paper-tags" style={{ marginTop: 20 }}>{build.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <h2>Die Aufgabe</h2>
        <p>{build.task}</p>
        <h2>So ist es gebaut</h2>
        <ul>{build.approach.map(step => <li key={step}>{step}</li>)}</ul>
        <h2>Das Ergebnis</h2>
        <p>{build.result}</p>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", marginTop: 48 }}>
          <Link className="btn" href="/kontakt">So etwas für dich? Erstgespräch buchen <span className="arr" aria-hidden="true">→</span></Link>
          <Link className="mono-link" href={`/builds/${next.slug}`}>Nächster Build: {next.title}</Link>
        </div>
      </div>
    </div>
  </section>;
}
