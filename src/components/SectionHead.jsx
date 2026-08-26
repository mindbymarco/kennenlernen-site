"use client";
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export function SectionHead({ id, label, headline, lede }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="mb-14"
      initial={reduced ? undefined : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-block text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--color-accent)] mb-[18px]">
        {label}
      </span>
      <h2 id={id} className="font-[family-name:var(--font-serif)] font-bold leading-[1.1] tracking-[-0.04em] text-[var(--color-ink-strong)] max-w-[22ch] text-[clamp(30px,3.2vw,44px)]">
        {headline}
      </h2>
      {lede && (
        <p className="mt-[22px] text-lg leading-[1.55] text-[var(--color-ink-muted)] max-w-[60ch]">
          {lede}
        </p>
      )}
    </motion.div>
  )
}