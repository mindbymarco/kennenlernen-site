import Link from "next/link";
import LoopVideo from "./LoopVideo";
import { faq, ladder, promises, type Build, type Stufe } from "@/lib/hub";

export function BuildClip({ build }: { build: Build }) {
  const { media } = build;
  return <div className={media.contain ? "clip contain" : "clip"}>
    {media.video
      ? <LoopVideo src={media.video} poster={media.poster} label={`${build.title}: Ausschnitt ohne Ton`} />
      : <div className="mini-term" aria-hidden="true">{media.term?.map((line, i) => <span key={i} dangerouslySetInnerHTML={{ __html: line }} />)}</div>}
  </div>;
}

export function BuildStrip({ items }: { items: Build[] }) {
  return <div className="strip" data-stagger>
    {items.map(build => <div key={build.slug}>
      <Link href={`/builds/${build.slug}`} aria-label={`${build.title} ansehen`}><BuildClip build={build} /></Link>
      <Link className="b-meta" href={`/builds/${build.slug}`}><h3>{build.title}</h3><p>{build.short}</p></Link>
      <div className="tags">{build.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>)}
  </div>;
}

export function Ladder({ extra = [] }: { extra?: Stufe[] }) {
  return <div className="prices rv">
    <table className="ladder">
      <tbody>
        {[...ladder, ...extra].map(row => <tr key={row.stufe} className={row.hi ? "hi" : undefined}>
          <td className="stufe">{row.stufe}</td>
          <td className="was">{row.was}</td>
          <td className="preis">{row.alt && <s aria-label={`statt ${row.alt}`}>{row.alt}</s>}{row.preis}</td>
        </tr>)}
      </tbody>
    </table>
    <p className="label note">Endpreise · Kleinunternehmer nach § 19 UStG</p>
  </div>;
}

export function Promises() {
  return <div className="cols" data-stagger style={{ marginTop: 64, maxWidth: 920 }}>
    {promises.map(p => <div key={p.t}><p><b>{p.t}</b>{p.d}</p></div>)}
  </div>;
}

export function Faq() {
  return <div className="faq rv">
    {faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
  </div>;
}
