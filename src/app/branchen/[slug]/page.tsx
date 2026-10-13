import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectorPage from "@/components/SectorPage";
import { sectors, sectorBySlug, sectorHref } from "@/lib/sectors";
export const dynamicParams = false;
export function generateStaticParams() { return sectors.map(sector => ({ slug: sector.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorBySlug(slug);
  if (!sector) return {};
  return { title: `Bürohilfe für ${sector.label} | Marco Grotemeyer`, description: sector.intro, alternates: { canonical: `https://www.marcogrotemeyer.de${sectorHref(slug)}` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = sectorBySlug(slug);
  if (!sector) notFound();
  return <SectorPage key={sector.slug} sector={sector} />;
}
