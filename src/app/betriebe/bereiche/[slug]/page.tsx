import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectorPage from "@/components/betriebe/SectorPage";
import { sectorGroups, groupBySlug, groupHref } from "@/lib/sectors";
export const dynamicParams = false;
export function generateStaticParams() { return sectorGroups.map(group => ({ slug: group.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const group = groupBySlug(slug);
  if (!group) return {};
  return { title: `Bürohilfe für ${group.label} | Marco Grotemeyer`, description: group.intro, alternates: { canonical: `https://www.marcogrotemeyer.de${groupHref(slug)}` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = groupBySlug(slug);
  if (!group) notFound();
  return <SectorPage key={group.slug} group={group} />;
}
