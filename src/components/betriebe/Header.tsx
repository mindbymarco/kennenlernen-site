"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectorGroups, sectorsInGroup, sectorHref, groupHref } from "@/lib/sectors";

// Kopfzeile unter /betriebe (Sitemap): Bereiche und Betriebe, Kostenlose Hilfen, Preisrahmen, Zusammenarbeit, zurück zum Hub, Kontakt.
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sheet, setSheet] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const onHome = pathname === "/betriebe";
  const anchor = (hash: string) => onHome ? hash : `/betriebe${hash}`;
  const activeGroup = sectorGroups.find(group => pathname === groupHref(group.slug) || sectorsInGroup(group.slug).some(sector => pathname === sectorHref(sector.slug)));

  useEffect(() => { setOpen(false); setSheet(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (menu.current && !menu.current.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close); document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, [open]);
  useEffect(() => { document.body.style.overflow = sheet ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [sheet]);

  return <header className="top">
    <div className="wrap">
      <Link className="brand" href="/betriebe"><img src="/hub/zeichen-klein.svg" alt="" width="24" height="24" />Marco Grotemeyer<small>Für Betriebe</small></Link>
      <nav aria-label="Hauptnavigation">
        <div ref={menu} style={{ display: "contents" }}>
          <button type="button" aria-expanded={open} aria-controls="betriebe-menu" onClick={() => setOpen(!open)}>Für Ihren Betrieb</button>
          {open && <div className="mega" id="betriebe-menu">
            <div className="mega-intro"><strong>Finden Sie Ihren Betrieb.</strong><p>Eigene Beispiele, passende Hilfen und mögliche Ergebnisse.</p></div>
            <div className="mega-grid">{sectorGroups.map(group => <div key={group.slug}>
              <Link className="label" href={`${groupHref(group.slug)}#top`} aria-current={pathname === groupHref(group.slug) ? "page" : undefined}>{group.label}</Link>
              <ul>{sectorsInGroup(group.slug).map(sector => <li key={sector.slug}><Link href={`${sectorHref(sector.slug)}#top`} aria-current={pathname === sectorHref(sector.slug) ? "page" : undefined}>{sector.label}</Link></li>)}</ul>
            </div>)}</div>
            <div className="mega-foot"><Link className="mono-link" href="/betriebe/branchen">Alle Bereiche und Betriebe ansehen</Link></div>
          </div>}
        </div>
        <Link href="/betriebe/ressourcen" aria-current={pathname === "/betriebe/ressourcen" ? "page" : undefined}>Kostenlose Hilfen</Link>
        <a href={anchor("#rechner")}>Preisrahmen</a>
        <a href={anchor("#prozess")}>Zusammenarbeit</a>
        <Link href="/">Über Marco</Link>
      </nav>
      <a className="btn sm" href={anchor("#erstgespraech")}>Kontakt <span className="arr" aria-hidden="true">→</span></a>
      <button type="button" className="menu-btn" aria-expanded={sheet} aria-controls="betriebe-sheet" onClick={() => setSheet(true)}>Menü</button>
    </div>
    {sheet && <div className="sheet" id="betriebe-sheet" role="dialog" aria-modal="true" aria-label="Menü">
      <div className="sheet-top"><Link className="brand" href="/betriebe" onClick={() => setSheet(false)}><img src="/hub/zeichen-klein.svg" alt="" width="24" height="24" />Marco Grotemeyer</Link><button type="button" className="menu-btn" style={{ display: "inline-flex" }} onClick={() => setSheet(false)}>Schließen</button></div>
      <h2>Welchen Betrieb führen Sie?</h2>
      <p>Wählen Sie Ihren Bereich oder direkt Ihren Betrieb.</p>
      {sectorGroups.map(group => <details key={group.slug} open={activeGroup?.slug === group.slug}>
        <summary>{group.label}</summary>
        <Link className="mono-link" href={`${groupHref(group.slug)}#top`} onClick={() => setSheet(false)}>Bereich {group.label} ansehen</Link>
        <ul>{sectorsInGroup(group.slug).map(sector => <li key={sector.slug}><Link href={`${sectorHref(sector.slug)}#top`} aria-current={pathname === sectorHref(sector.slug) ? "page" : undefined} onClick={() => setSheet(false)}>{sector.label}</Link></li>)}</ul>
      </details>)}
      <div className="sheet-links">
        <Link href="/betriebe/branchen" onClick={() => setSheet(false)}>Alle Betriebe</Link>
        <Link href="/betriebe/ressourcen" onClick={() => setSheet(false)}>Kostenlose Hilfen</Link>
        <a href={anchor("#rechner")} onClick={() => setSheet(false)}>Preisrahmen</a>
        <a href={anchor("#prozess")} onClick={() => setSheet(false)}>Zusammenarbeit</a>
        <a href={anchor("#erstgespraech")} onClick={() => setSheet(false)}>Marco kontaktieren</a>
        <Link href="/" onClick={() => setSheet(false)}>Über Marco</Link>
      </div>
    </div>}
  </header>;
}
