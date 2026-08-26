"use client";
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import HeroGrain from './HeroGrain'

const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="top" className="px-3 lg:px-4 pt-3">
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(10,10,9,0.08),0_4px_12px_rgba(10,10,9,0.05)] border border-black/[0.04]">
        <img src="/hero-bg/hero-v1.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        {/* subtle warm overlay for text contrast, especially mobile */}
        <div className="absolute inset-0 bg-[#F2E7DE]/28 md:bg-[#F2E7DE]/18" aria-hidden="true" />
        <HeroGrain className="" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-5 md:px-7 pt-[92px] pb-[72px] md:pt-[140px] md:pb-[160px] text-center">
          <div>
            <p className="inline-block text-[13px] font-medium tracking-[0.06em] uppercase text-[var(--color-ink-muted)] mb-5 md:mb-7">
              Partner für unternehmensweite KI-Transformation
            </p>

            <h1 className="font-[family-name:var(--font-serif)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[var(--color-ink-strong)] max-w-[18ch] mx-auto mb-5 md:mb-7 text-[clamp(30px,8vw,64px)]">
              KI-Erfolg entsteht nicht beim Tool, sondern bei der{' '}
              <em className="italic font-medium text-[#9A6B5C]">Befähigung</em> der Menschen.
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[1.55] text-[var(--color-ink-muted)] max-w-[52ch] mx-auto mb-8 md:mb-10">
              Befähigung und technische Umsetzung aus einer Hand. Damit KI nicht in Piloten stecken bleibt, sondern in der täglichen Arbeit ankommt.
            </p>

            <div className="flex gap-3.5 flex-wrap justify-center mb-8 md:mb-10">
              <a
                href="#erstgespraech"
                className="group inline-flex items-center gap-2 px-[22px] py-3.5 text-[15px] font-medium bg-[var(--color-ink)] text-white rounded-full border border-transparent transition-colors duration-150 hover:bg-white hover:text-[var(--color-ink)]"
              >
                Erstgespräch buchen <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-[18px] pt-4 md:pt-6">
              <img
                src="/profile.jpg"
                alt="Marco Grotemeyer"
                width="40"
                height="40"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/60 shadow"
              />
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-semibold text-[var(--color-ink)]">Marco Grotemeyer</span>
                <span className="text-xs text-[var(--color-ink)]/70">AI Builder · Bielefeld / Remote DACH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
