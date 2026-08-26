"use client";
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { SectionHead } from './SectionHead'

const steps = [
  {
    num: '01',
    title: 'Erstgespräch',
    desc: '30 Minuten, kostenlos. Wir schauen auf Ihre Ausgangslage und die sinnvollsten nächsten Schritte.',
  },
  {
    num: '02',
    title: 'Enablement-Sprint',
    desc: '2 Wochen. Workshops mit Fachbereichen, Use-Case-Liste, Priorisierung nach Aufwand und Wirkung.',
  },
  {
    num: '03',
    title: 'Pilot',
    desc: '2–4 Wochen. Ein Use Case produktiv in Ihrer KI-Plattform — mit Schulung, Datenanbindung und sauberer Übergabe.',
  },
  {
    num: '04',
    title: 'Rollout',
    desc: 'Optional. Governance, Adoption, weitere Use Cases. Vom ersten Pilot bis zum unternehmensweiten Rollout.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Process() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="prozess" aria-labelledby="heading-prozess" className="px-3 lg:px-4 py-6">
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(44,28,18,0.08),0_4px_12px_rgba(44,28,18,0.05)] border border-black/[0.04] py-[72px] lg:py-[80px]">
        <img src="/hero-bg/hero-v1.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.55]" />
        <div className="absolute inset-0 bg-[#F2E7DE]/70" aria-hidden="true" />
        <div className="relative max-w-[1180px] mx-auto px-7" ref={ref}>
        <SectionHead
          id="heading-prozess"
          label="Ablauf"
          headline={<>Wie wir <em>starten</em>.</>}
          lede="Transparent, mit klaren Zeitfenstern. Sie wissen nach jeder Phase, was als Nächstes passiert."
        />

        {/* draw-on-scroll progress line (desktop: horizontal, mobile: vertical) */}
        <div className="relative">
          <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-[var(--color-line)]" aria-hidden="true">
            <motion.div
              className="h-px w-full bg-[var(--color-accent)] origin-left"
              style={reduced ? { scaleX: 1 } : { scaleX: lineScale }}
            />
          </div>
          <div className="md:hidden absolute top-2 bottom-2 left-0 w-px bg-[var(--color-line)]" aria-hidden="true">
            <motion.div
              className="w-px h-full bg-[var(--color-accent)] origin-top"
              style={reduced ? { scaleY: 1 } : { scaleY: lineScale }}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 pt-8 md:pt-12 pl-6 md:pl-0"
            variants={reduced ? undefined : container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {steps.map((s) => (
              <motion.article key={s.num} variants={item} className="relative md:pl-0 pl-4">
                {/* mobile dot on vertical line */}
                <span className="md:hidden absolute -left-[3px] top-2 w-[5px] h-[5px] rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                <span
                  className="block font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)] mb-3"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {s.num}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-[clamp(20px,2vw,24px)] font-bold tracking-[-0.04em] leading-[1.2] text-[var(--color-ink-strong)] mb-2.5">
                  {s.title}
                </h3>
                <p className="text-sm leading-[1.6] text-[var(--color-ink-muted)] max-w-[34ch]">{s.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}