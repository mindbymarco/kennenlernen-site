"use client";
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

const creds = [
  'Beyond925 CEO',
  'Eigener AI Workspace produktiv im Einsatz',
  '50+ AI-Builds dokumentiert',
  'Founders Foundation Alumni',
  'Region OWL · Remote DACH',
  'Verfügbar als Solo-Mandat',
]

const chipsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const chip = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const reduced = useReducedMotion()

  return (
    <section
      id="ueber-mich" aria-labelledby="heading-uebermich"
      className="relative py-[72px] lg:py-[80px] overflow-hidden"
      style={{ background: 'var(--color-bg-soft)' }}
    >
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-14 items-start">
          <motion.div
            initial={reduced ? undefined : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/profile.jpg"
              alt="Marco Grotemeyer"
              width={240}
              height={240}
              className="w-full max-w-[280px] md:max-w-none aspect-[4/5] object-cover rounded-[var(--radius-card)] border border-[var(--color-line)]"
            />
          </motion.div>

          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="mb-8">
              <span className="inline-block text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--color-accent)] mb-[18px]">
                Wer ich bin
              </span>
              <h2 id="heading-uebermich" className="font-[family-name:var(--font-serif)] font-bold leading-[1.1] tracking-[-0.04em] text-[var(--color-ink-strong)] max-w-[22ch] text-[clamp(32px,4.4vw,52px)]">
                AI Builder an Ihrer Seite. Vom ersten Workshop bis zum Rollout.
              </h2>
            </div>

            <p className="text-[17px] leading-[1.65] text-[var(--color-ink)] mb-[18px]">
              Ich bin Marco Grotemeyer. Ich gründe und leite <em className="italic text-[var(--color-accent)]">beyond925</em> — ein
              KI-Recruiting-Produkt für den deutschen Mittelstand. Täglich baue, teste und betreibe ich KI-Lösungen: vom
              persönlichen AI-Workspace über Voice Agents bis zu Workflows in n8n und Make.
            </p>
            <p className="text-[17px] leading-[1.65] text-[var(--color-ink)]">
              Was ich kann, bringe ich in Ihr Unternehmen — nicht als Berater mit Folien, sondern als jemand, der{' '}
              <em className="italic text-[var(--color-accent)]">selbst baut und liefert</em>. Sie bekommen ehrliche
              Einschätzungen, was in Ihrem konkreten Mittelstand-Kontext funktioniert — und was nicht.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              variants={reduced ? undefined : chipsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {creds.map((c) => (
                <motion.span
                  key={c}
                  variants={chip}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-[13px] text-[var(--color-ink-muted)] bg-[#FFFBF5] border border-[var(--color-line)] rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  {c}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}