"use client";
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SectionHead } from './SectionHead'

const builds = [
  {
    title: 'AI-Inbox-Triage + Reply-Drafts',
    hook: 'Vom Postfach-Chaos zu 30 Min Fokus am Morgen.',
    desc: 'Eingehende E-Mails werden klassifiziert, priorisiert und mit Antwortentwürfen versehen. Spart täglich 30–60 Minuten.',
    tag: 'Email · Täglich',
    diagram: '/diagram-inbox.html',
  },
  {
    title: 'NL→SQL-Reporting-Agent',
    hook: 'Frage statt warten: Zahlen in Sekunden.',
    desc: 'Kennzahlen aus Datenbanken in natürlicher Sprache abfragen. Ad-hoc-Reports ohne BI-Warteschlange.',
    tag: 'Controlling · Ad-hoc',
    diagram: '/diagram-nlsql.html',
  },
  {
    title: 'WhatsApp/Email-AI-Agent für Kundenanfragen',
    hook: 'Kunden fragen — Antwort in Sekunden, rund um die Uhr.',
    desc: 'Automatische Klassifikation und Beantwortung über WhatsApp und E-Mail — mit RAG-Kontext aus Ihrer Wissensbasis.',
    tag: 'Kundenkommunikation',
    diagram: '/diagram-whatsapp.html',
  },
  {
    title: 'Voice-AI für Inbound/Outbound',
    hook: 'Anrufe annehmen, auch nach 18 Uhr.',
    desc: 'Sprachagenten für eingehende Anrufe und Terminbestätigungen — 24/7 verfügbar, DSGVO-konform.',
    tag: 'Telefon · 24/7',
    diagram: '/diagram-voice.html',
  },
  {
    title: 'Interne RAG-Wissensdatenbank',
    hook: 'Wissen finden statt suchen — Onboarding in Stunden.',
    desc: 'Confluence, Handbücher, Prozesse — alles in einer durchsuchbaren KI-Datenbank.',
    tag: 'Wissen · Onboarding',
    diagram: '/diagram-rag.html',
  },
  {
    title: 'Signal-Aggregation + Outreach-Briefs',
    hook: 'Vom Rauschen zum passenden Gespräch.',
    desc: 'Relevante Signale aus News und Firmendatenbanken aggregieren — und personalisierte Briefings generieren.',
    tag: 'Sales-Intelligence',
    diagram: '/diagram-signal.html',
  },
  {
    title: 'Use-Case-Discovery Workshop',
    hook: 'In 2 Wochen wissen, wo KI wirklich trägt.',
    desc: <>Strukturierte Methodik mit 4-Säulen-Framework. <a href="#prozess" className="text-[var(--color-accent)] hover:underline">Siehe Ablauf</a>.</>,
    tag: 'Consulting · 2 Wochen',
    diagram: '/diagram-workshop.html',
  },
]

function BuildCard({ build, index, open, onToggle, onFlow }) {
  const reduced = useReducedMotion()
  const isFeature = index === 0

  return (
    <motion.article
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden bg-[#FFFBF5] border border-[var(--color-line)] rounded-2xl ${isFeature ? 'md:col-span-2' : ''}`}
    >

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <span className="inline-flex self-start font-[family-name:var(--font-mono)] text-[10px] tracking-[0.06em] uppercase bg-[var(--color-accent-bg)] text-[var(--color-accent)] px-2.5 py-1 rounded-full border border-black/5 mb-3">
          {build.tag}
        </span>
        <div className="flex items-start justify-between gap-4 mb-2">
          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]" style={{ fontFeatureSettings: '"tnum"' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Details schließen' : 'Details öffnen'}
            onClick={onToggle}
            className={`shrink-0 relative w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${open ? 'bg-[var(--color-accent)] border-[var(--color-accent)] rotate-45' : 'border-[var(--color-line)] group-hover:border-[var(--color-accent)]'}`}
          >
            <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-px ${open ? 'bg-[#FFFBF5]' : 'bg-[var(--color-accent)]'}`} />
            <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3 ${open ? 'bg-[#FFFBF5]' : 'bg-[var(--color-accent)]'}`} />
          </button>
        </div>

        <h3 className="font-[family-name:var(--font-serif)] font-bold tracking-[-0.04em] leading-[1.2] text-[var(--color-ink-strong)] text-[clamp(18px,2vw,22px)] mb-1.5">
          {build.title}
        </h3>
        <p className="font-[family-name:var(--font-sans)] text-[13px] italic leading-[1.5] text-[var(--color-accent)] mb-3">
          {build.hook}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="text-sm leading-[1.6] text-[var(--color-ink-muted)] pt-2 border-t border-[var(--color-line-soft)] mt-1">
                {build.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-3 flex items-center gap-4">
          <button type="button" onClick={onToggle} className="text-left font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.06em] text-[var(--color-ink-subtle)] hover:text-[var(--color-accent)] transition-colors">
            {open ? 'Weniger ↑' : 'Details →'}
          </button>
          {build.diagram && (
            <button type="button" onClick={() => onFlow(build)} className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors">
              Flow ansehen
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">↗</span>
            </button>
          )}
          {build.diagram === null && (
            <span className="ml-auto text-[11px] text-[var(--color-ink-subtle)]">Flow folgt</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function DemoBuilds() {
  const reduced = useReducedMotion()
  const [openIndex, setOpenIndex] = useState(null)
  const [flowBuild, setFlowBuild] = useState(null)

  return (
    <section id="use-cases" aria-labelledby="heading-usecases" className="py-[72px] lg:py-[80px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHead
          id="heading-usecases"
          label="Demonstrated Builds"
          headline={<>Was ich selbst <em>gebaut</em> habe und betreibe.</>}
          lede="Kompakte Übersicht — läuft produktiv in meinem Workspace, Architektur übertragbar. Details & Flow aufklappen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {builds.map((b, i) => (
            <BuildCard
              key={b.title}
              build={b}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              onFlow={setFlowBuild}
            />
          ))}
        </div>

        <AnimatePresence>
          {flowBuild && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#1C1512]/60 backdrop-blur-sm z-50"
                onClick={() => setFlowBuild(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
              >
                <div className="pointer-events-auto bg-[#FDF8F4] rounded-2xl shadow-[0_24px_64px_rgba(44,28,18,0.18)] border border-white/60 w-full max-w-[980px] max-h-[90vh] overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-line)] bg-white/60">
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.06em] uppercase text-[var(--color-ink-subtle)]">{flowBuild.tag}</p>
                      <h3 className="font-[family-name:var(--font-serif)] font-bold text-[var(--color-ink-strong)]">{flowBuild.title}</h3>
                    </div>
                    <button onClick={() => setFlowBuild(null)} className="w-8 h-8 rounded-full bg-[#FFFBF5] border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-ink)] transition-colors" aria-label="Schließen">×</button>
                  </div>
                  <div className="bg-[#FDF8F4] p-4 md:p-6">
                    <iframe src={flowBuild.diagram} title={flowBuild.title} className="w-full h-[340px] md:h-[380px] border-0 block rounded-xl overflow-hidden bg-[#FFFBF5]" loading="lazy" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.p
          className="mt-10 font-[family-name:var(--font-mono)] text-xs text-[var(--color-ink-subtle)]"
          initial={reduced ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Demonstrated Builds — Marcos eigene Setups. Architektur auf Kunden-Mandate übertragbar.
        </motion.p>
      </div>
    </section>
  )
}
