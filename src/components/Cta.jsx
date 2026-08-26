"use client";
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import HeroGrain from './HeroGrain'

export default function Cta() {
  const reduced = useReducedMotion()

  return (
    <section
      id="erstgespraech"
      aria-labelledby="heading-cta"
      className="px-3 lg:px-4 py-6"
    >
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(44,28,18,0.08),0_4px_12px_rgba(44,28,18,0.05)] border border-black/[0.04] py-[72px] lg:py-[80px] text-center">
        <img src="/hero-bg/cta-v1.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <HeroGrain />
      <div className="relative z-10 max-w-[980px] mx-auto px-7">
        <motion.h2
          id="heading-cta"
          className="font-[family-name:var(--font-serif)] font-bold leading-[1.1] tracking-[-0.04em] text-[var(--color-ink-strong)] max-w-[20ch] mx-auto mb-[22px] text-[clamp(32px,4.6vw,52px)]"
          initial={reduced ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Lassen Sie uns schauen, wo KI in Ihrer Organisation <em className="italic text-[#9A6B5C]">sofort</em>{' '}
          produktiv wird.
        </motion.h2>

        <motion.p
          className="text-lg text-[var(--color-ink-muted)] max-w-[52ch] mx-auto mb-9"
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          30 Minuten, kostenlos, unverbindlich. Sie gehen mit zwei bis drei konkreten Empfehlungen raus — auch wenn wir
          danach nicht zusammenarbeiten.
        </motion.p>

        <motion.div
          className="inline-flex flex-wrap justify-center gap-3.5"
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Cal Pop-up Embed Option: data-cal-link="marco-grotemeyer/discovery" → siehe cal.com/embed — nicht aktivieren vor Consent + CSP-Anpassung (X-Frame-Options DENY in vercel.json) */}
          <motion.a
            href="https://cal.com/marco-grotemeyer/discovery"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduced ? undefined : { scale: 1.03 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-[22px] py-3.5 text-[15px] font-medium bg-[var(--color-ink)] text-[var(--color-bg)] rounded-full border border-transparent transition-colors duration-150 hover:bg-[var(--color-accent)]"
          >
            Erstgespräch buchen <span aria-hidden="true">→</span>
          </motion.a>
          <motion.a
            href="mailto:hello@marcogrotemeyer.de"
            whileHover={reduced ? undefined : { scale: 1.03 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-[22px] py-3.5 text-[15px] font-medium bg-transparent text-[var(--color-ink)] rounded-full border border-[var(--color-line)] transition-colors duration-150 hover:border-[var(--color-ink)]"
          >
            hello@marcogrotemeyer.de
          </motion.a>
        </motion.div>

        <p className="mt-[22px] text-sm text-[var(--color-ink-subtle)]">
          Cal.com · DACH · Remote oder vor Ort in OWL
        </p>
      </div>
      </div>
    </section>
  )
}