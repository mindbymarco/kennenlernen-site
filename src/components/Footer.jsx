"use client";
export default function Footer() {
  return (
    <footer className="py-12 text-sm text-[var(--color-ink-subtle)]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Marco Grotemeyer · AI Consulting · Bielefeld</span>
          <div className="flex gap-[22px]">
            <a href="/impressum" className="hover:text-[var(--color-ink)] transition-colors duration-150">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-[var(--color-ink)] transition-colors duration-150">
              Datenschutz
            </a>
            <a href="mailto:hello@marcogrotemeyer.de" className="hover:text-[var(--color-ink)] transition-colors duration-150">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}