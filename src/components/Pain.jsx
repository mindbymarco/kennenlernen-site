"use client";
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { SectionHead } from './SectionHead'

const quotes = [
  {
    q: <>„Wir haben <em>angefangen</em>, kommen aber nicht weiter."</>,
    ctx: 'Erste Piloten laufen, aber die Wirkung bleibt in einzelnen Teams. Wer trägt es in die Breite?',
  },
  {
    q: <>„Wer findet bei uns die <em>Use Cases</em> — und wer setzt sie um?"</>,
    ctx: 'Rollen, Ownership, Lenkungskreis fehlen. Vom Finden bis zur Umsetzung ist niemand verantwortlich.',
  },
  {
    q: <>„Drei Stunden für ein <em>Angebot</em> in Word."</>,
    ctx: 'Wiederkehrende Schmerzaufgaben — Angebote, Recherche, Reporting — verschlingen Kapazität im Vertrieb.',
  },
  {
    q: <>„Eine <em>geschützte</em> Chat-Umgebung — sensible Themen nicht weltweit."</>,
    ctx: 'Mitarbeiter nutzen ChatGPT längst. Nur ohne Plattform, ohne Governance, ohne Betriebsrat-Check.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const row = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Pain() {
  const reduced = useReducedMotion()

  return (
    <section id="pain" aria-labelledby="heading-pain" className="py-[72px] lg:py-[80px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHead
          id="heading-pain"
          label="Wo es klemmt"
          headline={<>Viele starten mit KI. <em>Wenige</em> machen sie produktiv.</>}
          lede="So klingt es, wenn Geschäftsführer zu mir kommen — meist nicht bei null, sondern irgendwo dazwischen."
        />

        <motion.div
          variants={reduced ? undefined : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {quotes.map((item, i) => (
            <motion.article
              key={i}
              variants={row}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[64px_1fr_320px] gap-x-6 md:gap-x-10 items-start py-8 md:py-10 border-t border-[var(--color-line)] last:border-b"
            >
              <span
                className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)] pt-2 md:pt-3"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-[family-name:var(--font-serif)] font-bold leading-[1.15] tracking-[-0.04em] text-[var(--color-ink-strong)] text-[clamp(22px,2.8vw,36px)] max-w-[22ch] [&_em]:italic [&_em]:text-[var(--color-accent)]">
                {item.q}
              </p>
              <p className="col-span-2 md:col-span-1 pl-[calc(64px+1.5rem)] md:pl-0 text-sm leading-[1.6] text-[var(--color-ink-subtle)] pt-3 md:pt-3">
                {item.ctx}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}