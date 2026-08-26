"use client";
import { usePathname } from "next/navigation";
const links = [
  { href: '#workspace', label: 'Workspace' },
  { href: '#use-cases', label: 'Use-Cases' },
  { href: '#prozess', label: 'Ablauf' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hrefFor = (hash) => (isHome ? hash : `/${hash}`);
  return (
    <header className="fixed top-5 lg:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] lg:w-[calc(100%-32px)] max-w-[1180px]">
      <nav
        className="flex items-center justify-between gap-4 lg:gap-6 bg-white/55 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_rgba(44,28,18,0.08),0_2px_12px_rgba(44,28,18,0.06)] border border-white/40 px-4 lg:px-6 py-3 supports-[backdrop-filter]:bg-white/40"
        aria-label="Hauptnavigation"
      >
        <a href={isHome ? "#top" : "/"} className="flex items-center gap-2.5 font-[family-name:var(--font-serif)] text-[17px] md:text-[19px] font-bold tracking-[-0.04em] whitespace-nowrap">
          <img src="/logo.png" alt="" width="28" height="28" className="w-7 h-7 rounded-lg border border-black/[0.06] bg-white object-cover shadow-sm" />
          Marco Grotemeyer
        </a>
        <div className="hidden md:flex gap-6 lg:gap-7 text-[13px] font-medium text-[var(--color-ink-muted)]">
          {links.map((l) => (
            <a key={l.href} href={hrefFor(l.href)} className="hover:text-[var(--color-ink)] transition-colors duration-150">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={hrefFor("#erstgespraech")}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold bg-[var(--color-ink)] text-white rounded-full hover:bg-[var(--color-accent)] transition-colors duration-150"
        >
          Erstgespräch <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  )
}
