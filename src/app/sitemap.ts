import type { MetadataRoute } from "next";
import { sectors, sectorGroups, sectorHref, groupHref } from "@/lib/sectors";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.marcogrotemeyer.de";
  return ["/", "/branchen", "/ressourcen", ...sectorGroups.map(group => groupHref(group.slug)), ...sectors.map(sector => sectorHref(sector.slug)), "/impressum", "/datenschutz"].map(path => ({ url: `${origin}${path}` }));
}
