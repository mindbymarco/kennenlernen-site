"use client";
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { SectionHead } from './SectionHead'

const pillars = [
  {
    num: '01',
    title: 'Befähigung',
    sub: 'Academy',
    desc: <>Workshops, Sprechstunden, Botschafter-Modell. Sie verstehen, was Sie nutzen — und warum es funktioniert. <a href="#workspace" className="underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-accent)]">Wie im Workspace gezeigt</a>.</>,
    list: [
      'KI-Grundlagen-Workshops für Fachbereiche',
      'Wöchentliche Sprechstunden für alle Mitarbeitenden',
      'Internes Botschafter-Programm',
      'Nutzung steigt — Ängste sinken',
    ],
  },
  {
    num: '02',
    title: 'Adoption',
    sub: 'Rollout',
    desc: 'Plattform-Rollout, Governance, Datenschutz-Begleitung. Sie nutzen, was Sie verstehen — sicher und organisiert.',
    list: [
      'KI-Plattform-Auswahl und -Einführung',
      'Governance-Framework für den Mittelstand',
      'Betriebsrat- und DSGVO-Begleitung',
      'Nutzungs-Monitoring und Optimierung',
    ],
  },
  {
    num: '03',
    title: 'Agentic Engineering',
    sub: 'Build',
    desc: 'Custom Agents, Workflows, Integrationen. Sie erweitern, was Sie nutzen — maßgeschneidert für Ihre Prozesse.',
    list: [
      'Maßgeschneiderte AI-Agenten für Ihre Use Cases',
      'n8n/Make-Workflows mit API-Anbindung',
      'RAG-Systeme auf Ihren internen Daten',
      'Voice-AI-Integration für Inbound/Outbound',
    ],
  },
]

export default function Services() {
  const reduced = useReducedMotion()

  return (
    <section id="services" aria-labelledby="heading-services" className="px-3 lg:px-4 py-6">
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(44,28,18,0.08),0_4px_12px_rgba(44,28,18,0.05)] border border-black/[0.04] py-[72px] lg:py-[80px]" style={{ background: 'var(--color-bg-soft)' }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHead
          id="heading-services"
          label="Was wir tun"
          headline={<>Ein Partner, der <em>befähigt</em> und technisch umsetzt.</>}
        />

        {/* Craft pricing arrangement: left narrow + right wide + bottom bar */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-stretch">
          {/* Left narrow card — Befähigung like Kostenlos */}
          <motion.article
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-[20px] lg:rounded-[24px] bg-[#FFFBF5] shadow-[0_8px_24px_rgba(10,10,9,0.06),0_2px_8px_rgba(10,10,9,0.04)] border border-black/[0.04] p-8 md:p-9"
          >
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)] mb-6" style={{ fontFeatureSettings: '"tnum"' }}>
              {pillars[0].num}
            </span>
            <h3 className="font-[family-name:var(--font-serif)] text-[clamp(24px,2.4vw,30px)] font-bold tracking-[-0.04em] leading-[1.15] mb-2">
              {pillars[0].title}
            </h3>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--color-ink-subtle)] mb-5">
              {pillars[0].sub}
            </p>
            <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)] mb-7">{pillars[0].desc}</p>
            <ul className="mt-auto pt-6 flex flex-col gap-2.5 text-sm border-t border-[var(--color-line)] text-[var(--color-ink)]">
              {pillars[0].list.map((li) => (
                <li key={li} className="flex items-start gap-2.5">
                  <span className="mt-[9px] w-1 h-1 shrink-0 rounded-full bg-current opacity-60" aria-hidden="true" />
                  {li}
                </li>
              ))}
            </ul>
            <a href="#erstgespraech" className="mt-8 inline-flex items-center justify-center px-6 py-3 text-[13px] font-semibold bg-[var(--color-ink)] text-white rounded-full hover:bg-[var(--color-accent)] transition-colors">
              Erstgespräch →
            </a>
          </motion.article>

          {/* Right wide card — Adoption + Agentic like CRAFT PLUS */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="rounded-[20px] lg:rounded-[24px] bg-[#FFFBF5] shadow-[0_8px_24px_rgba(10,10,9,0.06),0_2px_8px_rgba(10,10,9,0.04)] border border-black/[0.04] p-8 md:p-9 flex flex-col"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <p className="font-[family-name:var(--font-serif)] text-xl font-bold tracking-[-0.02em] mb-1">Für Ihren täglichen Betrieb.</p>
                <p className="text-sm text-[var(--color-ink-muted)] max-w-[52ch]">Ohne Limits — machen Sie KI zu Ihrem täglichen Werkzeug. Zwei Säulen, ein System.</p>
              </div>
              <div className="flex items-center rounded-full bg-[var(--color-bg-soft)] p-1 border border-[var(--color-line)]">
                <span className="px-4 py-1.5 text-xs font-semibold bg-[#FFFBF5] rounded-full shadow text-[var(--color-ink)]">Mittelstand</span>
                <span className="px-4 py-1.5 text-xs font-medium text-[var(--color-ink-muted)]">Enterprise</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 flex-1">
              {[pillars[1], pillars[2]].map((p) => (
                <div key={p.num} className="flex flex-col">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)] mb-3" style={{ fontFeatureSettings: '"tnum"' }}>
                    {p.num} · {p.sub}
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold tracking-[-0.04em] leading-[1.15] mb-3">{p.title}</h3>
                  <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)] mb-5">{p.desc}</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[var(--color-ink)] border-t border-[var(--color-line)] pt-5 mt-auto">
                    {p.list.map((li) => (
                      <li key={li} className="flex items-start gap-2.5">
                        <span className="mt-[9px] w-1 h-1 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                        {li}
                      </li>
                    ))}
                  </ul>
                  <a href="#erstgespraech" className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-semibold bg-[#FFFBF5] border border-[var(--color-line)] rounded-full hover:border-[var(--color-ink)] hover:bg-[var(--color-bg-soft)] transition-colors self-start">
                    Leg los
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom full-width bar like Größere Gruppe? */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className="mt-6 rounded-[20px] lg:rounded-[24px] bg-[#FFFBF5] shadow-[0_8px_24px_rgba(10,10,9,0.06),0_2px_8px_rgba(10,10,9,0.04)] border border-black/[0.04] px-8 md:px-9 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <h3 className="font-[family-name:var(--font-serif)] text-[clamp(22px,2.4vw,28px)] font-bold tracking-[-0.04em] flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[var(--color-bg-soft)] border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink)]" aria-hidden="true">◐</span>
            Größeres Vorhaben?
          </h3>
          <a href="#erstgespraech" className="inline-flex items-center px-6 py-2.5 text-[13px] font-semibold bg-[var(--color-bg-soft)] border border-[var(--color-line)] rounded-full hover:bg-[#FFFBF5] hover:border-[var(--color-ink)] transition-colors">
            Kontaktiere uns
          </a>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
