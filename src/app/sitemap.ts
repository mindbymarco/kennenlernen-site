import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { sectors, sectorGroups, sectorHref, groupHref } from "@/lib/sectors";
import { builds } from "@/lib/hub";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.marcogrotemeyer.de";
  const hub = ["/", "/beratung", "/builds", ...builds.map(build => `/builds/${build.slug}`), "/ueber-mich", "/kontakt"];
  const betriebe = ["/betriebe", "/betriebe/branchen", "/betriebe/ressourcen", ...sectorGroups.map(group => groupHref(group.slug)), ...sectors.map(sector => sectorHref(sector.slug))];
  return [...hub, ...betriebe, "/impressum", "/datenschutz", "/bedingungen"].map(path => ({ url: `${origin}${path}` }));
}
