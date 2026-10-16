import Link from "next/link";
import { Wrench, Sparkles, Dumbbell, MapPin, Store } from "lucide-react";
const icons = { "handwerk-haus": Wrench, "schoenheit-gesundheit": Sparkles, "sport-freizeit": Dumbbell, "service-vor-ort": MapPin, "handel-selbststaendige": Store };
import { sectorGroups, sectorsInGroup, groupHref, sectorHref, type SectorGroup } from "@/lib/sectors";

// Bereiche und Betriebe als Liste mit Haarlinien (DESIGNSYSTEM 4: keine Karten-Raster).
export default function Directory({ group, compact = false }: { group?: SectorGroup; compact?: boolean }) {
  const groups = group ? [group] : sectorGroups;
  // Startseite: alle Bereiche und Betriebe sichtbar (Recherche: keine versteckten Listen, große Tap-Ziele).
  if (compact) return <div className="dir-grid" data-stagger>{groups.map(item => { const Icon = icons[item.slug]; return <div key={item.slug} className="dir-col">
    <Icon className="dir-icon" aria-hidden="true" />
    <h3><Link href={`${groupHref(item.slug)}#top`}>{item.label}</Link></h3>
    <ul>{sectorsInGroup(item.slug).map(sector => <li key={sector.slug}><Link href={`${sectorHref(sector.slug)}#top`}>{sector.label}</Link></li>)}</ul>
    <Link className="mono-link" href={`${groupHref(item.slug)}#top`}>Gesamten Bereich ansehen</Link>
  </div>; })}</div>;
  return <div className="dir-full" data-stagger>{groups.map(item => { const Icon = icons[item.slug]; return <article key={item.slug} className="dir-group">
    <p className="label" style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon className="dir-icon" aria-hidden="true" />{sectorsInGroup(item.slug).length} Betriebe</p>
    <h3><Link href={`${groupHref(item.slug)}#top`}>{item.label}</Link></h3>
    <p>{item.headline}</p>
    <ul>{sectorsInGroup(item.slug).map(sector => <li key={sector.slug}><Link href={`${sectorHref(sector.slug)}#top`}><span><strong>{sector.label}</strong><span>{sector.cases[0].title}</span></span></Link></li>)}</ul>
    <Link className="mono-link" href={`${groupHref(item.slug)}#top`}>Bereich ansehen</Link>
  </article>; })}</div>;
}
