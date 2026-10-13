"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HANDSCHRIFT_URL } from "@/lib/hub";

const links = [
  { href: "/beratung", label: "Beratung" },
  { href: "/builds", label: "Builds" },
  { href: "/ueber-mich", label: "Über mich" },
];

export default function HubHeader() {
  const pathname = usePathname();
  return <header className="top">
    <div className="wrap">
      <Link className="brand" href="/"><img src="/hub/zeichen-klein.svg" alt="" width="24" height="24" />Marco Grotemeyer</Link>
      <nav aria-label="Hauptnavigation">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(link.href + "/") ? "page" : undefined}>{link.label}</Link>)}
        <a className="ext" href={HANDSCHRIFT_URL} target="_blank" rel="noopener">Handschrift</a>
      </nav>
      <Link className="btn sm" href="/kontakt">Gespräch buchen <span className="arr" aria-hidden="true">→</span></Link>
    </div>
  </header>;
}
