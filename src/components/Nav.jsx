"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { sectorGroups, sectorsInGroup, sectorHref, groupHref } from "@/lib/sectors";

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopValue, setDesktopValue] = useState(null);
  const localPage = pathname === "/betriebe";
  const hrefFor = hash => localPage ? hash : `/betriebe${hash}`;
  const activeGroup = sectorGroups.find(group => pathname === groupHref(group.slug) || sectorsInGroup(group.slug).some(sector => pathname === sectorHref(sector.slug)));
  return <header className="site-header">
    <nav aria-label="Hauptnavigation" className="site-nav">
      <Link href="/betriebe" className="site-wordmark"><span className="site-brand-mark"><img src="/brand/fibonacci-mark.png" alt="" width="385" height="382" /></span><span>Marco Grotemeyer</span></Link>
      <div className="nav-desktop">
        <NavigationMenu align="center" value={desktopValue} onValueChange={setDesktopValue}>
          <NavigationMenuList>
            <NavigationMenuItem value="industries">
              <NavigationMenuTrigger>Für Ihren Betrieb</NavigationMenuTrigger>
              <NavigationMenuContent className="sector-mega-menu">
                <div className="mega-intro"><strong>Finden Sie Ihren Betrieb.</strong><p>Eigene Beispiele, passende Hilfen und mögliche Ergebnisse.</p></div>
                <div className="mega-grid">{sectorGroups.map(group => <div key={group.slug}>
                  <NavigationMenuLink render={<Link href={`${groupHref(group.slug)}#top`} />} onClick={() => setDesktopValue(null)} className="mega-group-link" active={pathname === groupHref(group.slug)}>{group.label} <ArrowUpRight aria-hidden="true" /></NavigationMenuLink>
                  <ul>{sectorsInGroup(group.slug).map(sector => <li key={sector.slug}><NavigationMenuLink render={<Link href={`${sectorHref(sector.slug)}#top`} />} active={pathname === sectorHref(sector.slug)} onClick={() => setDesktopValue(null)}>{sector.label}</NavigationMenuLink></li>)}</ul>
                </div>)}</div>
                <NavigationMenuLink render={<Link href="/betriebe/branchen" />} onClick={() => setDesktopValue(null)}>Alle Bereiche und Betriebe ansehen <ArrowUpRight aria-hidden="true" /></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/betriebe/ressourcen">Kostenlose Hilfen</Link>
        <a href={hrefFor("#rechner")}>Preisrahmen</a>
        <a href={hrefFor("#prozess")}>Zusammenarbeit</a>
        <Link href="/" className="nav-hub-link">Über Marco</Link>
        <Button render={<a href={hrefFor("#erstgespraech")} />} nativeButton={false}>Kontakt</Button>
      </div>
      <div className="nav-mobile"><Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger render={<Button variant="outline" />}><Menu data-icon="inline-start" /> Menü</SheetTrigger>
        <SheetContent className="mobile-sector-sheet">
          <SheetHeader><SheetTitle>Welchen Betrieb führen Sie?</SheetTitle><SheetDescription>Wählen Sie Ihren Bereich oder direkt Ihren Betrieb.</SheetDescription></SheetHeader>
          <div className="mobile-sector-list"><Accordion defaultValue={activeGroup ? [activeGroup.slug] : []}>
            {sectorGroups.map(group => <AccordionItem key={group.slug} value={group.slug}>
              <AccordionTrigger>{group.label}</AccordionTrigger>
              <AccordionContent><Link className="mobile-group-link" href={`${groupHref(group.slug)}#top`} onClick={() => setMobileOpen(false)}>Bereich {group.label} ansehen <ArrowUpRight aria-hidden="true" /></Link><ul>{sectorsInGroup(group.slug).map(sector => <li key={sector.slug}><Link href={`${sectorHref(sector.slug)}#top`} aria-current={pathname === sectorHref(sector.slug) ? "page" : undefined} onClick={() => setMobileOpen(false)}>{sector.label}</Link></li>)}</ul></AccordionContent>
            </AccordionItem>)}
          </Accordion>
          <div className="mobile-utility-links"><Link href="/betriebe/branchen" onClick={() => setMobileOpen(false)}>Alle Betriebe</Link><Link href="/betriebe/ressourcen" onClick={() => setMobileOpen(false)}>Kostenlose Hilfen</Link><a href={hrefFor("#rechner")} onClick={() => setMobileOpen(false)}>Preisrahmen</a><a href={hrefFor("#prozess")} onClick={() => setMobileOpen(false)}>Zusammenarbeit</a><a href={hrefFor("#erstgespraech")} onClick={() => setMobileOpen(false)}>Marco kontaktieren</a><Link href="/" onClick={() => setMobileOpen(false)}>Über Marco</Link></div>
          </div>
        </SheetContent>
      </Sheet></div>
    </nav>
  </header>;
}
