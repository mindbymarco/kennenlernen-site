"use client";
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

const stroke = '#DBB1A4'

const capabilities = [
  {
    title: 'E-Mail mit AI-Triage + Reply-Drafts',
    desc: 'E-Mails automatisch vorsortieren, Antwortentwürfe generieren. Kein Posteingang-Chaos mehr.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="24" height="18" rx="2.5" stroke={stroke} strokeWidth="1.5" />
        <path d="M2 6l12 10 12-10" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Kalender mit Vorschlägen',
    desc: 'Terminfindung, Vorbereitungsnotizen und Follow-up-Erinnerungen — alles aus einem Kontext.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="24" height="22" rx="2.5" stroke={stroke} strokeWidth="1.5" />
        <line x1="2" y1="8" x2="26" y2="8" stroke={stroke} strokeWidth="1.5" />
        <rect x="7" y="12" width="6" height="5" rx="1" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Notizen mit Memory über Sessions',
    desc: 'Kontext bleibt erhalten — über Tage, Wochen, Projekte hinweg.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="20" height="24" rx="2" stroke={stroke} strokeWidth="1.5" />
        <line x1="9" y1="8" x2="19" y2="8" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="9" y1="13" x2="19" y2="13" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="9" y1="18" x2="16" y2="18" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Bild- und Designerstellung',
    desc: 'Visuelle Assets, Diagramme, Grafiken — direkt im Workspace, ohne Tool-Hopping.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="22" height="16" rx="2" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="14" cy="19" r="6" stroke={stroke} strokeWidth="1.5" />
        <circle cx="14" cy="19" r="2" fill={stroke} />
      </svg>
    ),
  },
  {
    title: 'Recherche & Deep Research',
    desc: 'Quellen aggregieren, verdichten, zusammenfassen. Tiefe in Minuten statt Stunden.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="8" stroke={stroke} strokeWidth="1.5" />
        <line x1="14" y1="6" x2="14" y2="10" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" fill={stroke} />
      </svg>
    ),
  },
  {
    title: 'Eigene Programme & Workflows',
    desc: 'Custom Agents, n8n-Workflows, API-Integrationen — Agentic Engineering für Ihre Prozesse.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
        <path d="M8 18l4-4 3 3 5-7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const benefits = [
  'Kein Tool-Wechsel alle 3 Monate',
  'Datenschutz in der EU',
  'Auf Ihre Prozesse zugeschnitten, nicht off-the-shelf',
  'Übergabe an Ihr Team inklusive',
]

const rowsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const row = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Workspace() {
  const reduced = useReducedMotion()

  return (
    <section
      id="workspace"
      aria-labelledby="heading-workspace"
      className="px-3 lg:px-4 py-6"
    >
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(44,28,18,0.08),0_4px_12px_rgba(44,28,18,0.05)] border border-black/[0.04] py-[72px] lg:py-[80px]" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-x-16 gap-y-12">

          {/* Sticky left column */}
          <div className="lg:sticky lg:top-28 self-start">
            <span className="inline-block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--color-accent)] mb-5">
              AI Workspace
            </span>
            <h2 id="heading-workspace" className="font-[family-name:var(--font-serif)] font-bold leading-[1.08] tracking-[-0.04em] text-[var(--color-ink-strong)] text-[clamp(30px,3.6vw,46px)] mb-6">
              Mein eigener Workspace. Was mich produktiv macht — und was ich für Sie baue.
            </h2>
            <p className="text-base leading-[1.6] text-[var(--color-ink-muted)] mb-10 max-w-[44ch]">
              Ich nutze täglich, was ich Kunden empfehle: Ein zentraler Workspace statt 10 fragmentierter Tools.
            </p>

            <h3 className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[var(--color-ink-strong)] mb-4">
              Was es für Sie bedeutet
            </h3>
            <ul className="flex flex-col gap-2.5 mb-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] text-[var(--color-ink)]">
                  <span className="mt-[9px] w-1 h-1 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="font-[family-name:var(--font-mono)] text-xs leading-[1.7] text-[var(--color-ink-subtle)] max-w-[40ch] mb-8">
              Aktuell mein persönliches Setup. Auf Kunden-Mandate übertragbar — keine White-Label-Lösung.
            </p>
            <dl className="border-t border-[var(--color-line)] pt-6">
              <div className="mb-5">
                <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] mb-1">Was ist ein AI Workspace?</dt>
                <dd className="text-sm leading-[1.6] text-[var(--color-ink-muted)]">Ein zentraler, DSGVO-konformer Arbeitsraum statt verteilter Tools: E-Mail, Kalender, Notizen, Recherche und eigene Agents teilen denselben Kontext und dasselbe Memory — anpassbar auf Ihre Prozesse.</dd>
              </div>
              <div className="mb-5">
                <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] mb-1">Was ist Agentic Engineering?</dt>
                <dd className="text-sm leading-[1.6] text-[var(--color-ink-muted)]">Eigene KI-Agenten und Workflows, die Ihre Systeme verbinden: von n8n/Make-Automationen bis zu RAG auf internen Daten — gebaut für Ihre wiederkehrenden Vorgänge, nicht generisch.</dd>
              </div>
              <div>
                <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.06em] text-[var(--color-accent)] mb-1">Was ist das 4-Säulen-Framework?</dt>
                <dd className="text-sm leading-[1.6] text-[var(--color-ink-muted)]">Meine Methode im Discovery: Prozesse, Daten, Organisation und Governance. Daraus entstehen 15–25 Ideen, bewertet nach Wirkung vs. Aufwand — Ergebnis: 5–10 priorisierte Use Cases mit Pilot-Empfehlung.</dd>
              </div>
            </dl>
          </div>

          {/* Scrolling capability index */}
          <motion.div
            variants={reduced ? undefined : rowsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {capabilities.map((cap, i) => (
              <motion.article
                key={cap.title}
                variants={row}
                className="group grid grid-cols-[auto_auto_1fr] gap-x-5 md:gap-x-7 items-start py-6 border-t border-[var(--color-line)] last:border-b"
              >
                <span
                  className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)] pt-1"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-11 h-11 rounded-xl bg-[#FFFBF5] border border-[var(--color-line)] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:border-[var(--color-accent)]" aria-hidden="true">
                  {cap.icon}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-serif)] text-lg md:text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-[1.6] text-[var(--color-ink-muted)]">{cap.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </div>
      </div>
    </section>
  )
}