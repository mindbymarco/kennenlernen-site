"use client";
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SectionHead } from './SectionHead'

const faqs = [
  {
    q: 'Wir haben schon ChatGPT — warum reicht das nicht?',
    a: 'Einzelne Mitarbeiter mit ChatGPT sind ein guter Anfang — aber keine organisierte Adoption. Es fehlen Plattform, Governance, Datenanbindung und vor allem: die Priorisierung, welche Use Cases wirklich etwas bringen. Ich helfe Ihnen, vom Tool-Einsatz zur strategischen Nutzung zu kommen.',
  },
  {
    q: 'Wir sind 30 Mitarbeiter — lohnt sich das überhaupt?',
    a: 'Gerade dann. Ein Enablement-Sprint amortisiert sich schnell, wenn Sie danach einen Use Case produktiv haben, der vorher 5–10 Stunden pro Woche verschlungen hat. Ich rechne Ihnen das im Erstgespräch konkret durch.',
  },
  {
    q: 'Was kostet das?',
    a: 'Enablement-Sprint: pauschal. Pilot: nach Aufwand mit klarer Obergrenze. Rollout-Begleitung: monatlicher Retainer. Konkrete Preise besprechen wir im Erstgespräch — abhängig von Umfang und Use Case. Keine versteckten Kosten, keine Tool-Resale-Provisionen.',
  },
  {
    q: 'Wie messen wir Erfolg?',
    a: 'Konkret: Zeitersparnis pro Vorgang, Anzahl bearbeiteter Vorgänge pro Woche, Nutzungsquote im Team. Wir definieren vor dem Pilot zwei bis drei Zahlen, die für Sie wirklich zählen — und messen nach 4 Wochen nüchtern.',
  },
  {
    q: 'Was ist mit Datenschutz / Betriebsrat?',
    a: 'Das ist kein Bonus, das ist Grundlage. Ich arbeite bevorzugt mit Plattformen, die DSGVO-konform in der EU hosten. Vor dem Pilot klären wir mit Ihrem Datenschutzbeauftragten und — wo vorhanden — mit dem Betriebsrat die Spielregeln. Nichts geht live ohne Freigabe.',
  },
  {
    q: 'Bauen Sie auch selbst, oder nur Beratung?',
    a: 'Ich baue selbst. Piloten setze ich gemeinsam mit Ihrem Team in Ihrer Plattform um. Für größere Eigenentwicklungen empfehle ich spezialisierte Engineering-Partner und begleite die Übergabe.',
  },
  {
    q: 'Wie lange dauert es, bis wir erste Wirkung sehen?',
    a: 'Pilot: erste produktive Nutzung in 2–4 Wochen. Erste messbare Wirkung typischerweise nach 4–6 Wochen. Enablement-Sprint: priorisierte Use-Case-Liste nach 2 Wochen.',
  },
  {
    q: 'Wo stößt ChatGPT im Unternehmen an Grenzen?',
    a: 'Bei Datenschutz, Datenanbindung und Skalierung. ChatGPT ist eine Einzellösung ohne Zugriff auf Ihre Systeme, ohne Rechteverwaltung und ohne Governance. Eine KI-Plattform in der EU löst das: angebunden an ERP/CRM, mit Rollen, Protokoll und Betriebsrat-Freigabe — und alle Mitarbeitenden arbeiten im selben, sicheren Rahmen.',
  },
  {
    q: 'Welche KI-Use-Cases bringen im Mittelstand am schnellsten ROI?',
    a: 'Angebotserstellung, E-Mail-Triage, Recherche & Reporting, Onboarding-Wissen und CRM-Pflege. Das sind tägliche, messbare Tätigkeiten mit 5–10 Stunden Hebel pro Woche. Im Enablement-Sprint priorisieren wir genau diese — nach Aufwand, Wirkung und Datenverfügbarkeit, nicht nach Hype.',
  },
  {
    q: 'Wie läuft der Use-Case-Discovery-Workshop ab?',
    a: 'Zwei Wochen, vier Säulen: Prozesse, Daten, Organisation, Governance. Wir interviewen Fachbereiche, sammeln 15–25 Ideen, bewerten sie nach Wirkung vs. Aufwand und liefern 5–10 priorisierte Use Cases mit Pilot-Empfehlung — als Entscheidungsvorlage für die Geschäftsführung, nicht als Folien-Stapel.',
  },
  {
    q: 'Was kostet eine KI-Beratung für den Mittelstand konkret?',
    a: 'Beispiel 30–50 Mitarbeitende: Enablement-Sprint pauschal (4-stellig), Pilot 2–4 Wochen nach Aufwand mit fester Obergrenze, Rollout als monatlicher Retainer. Ein Use Case mit 5 Stunden Ersparnis pro Woche amortisiert den Sprint meist in 6–10 Wochen — ich rechne es im Erstgespräch mit Ihren Zahlen durch.',
  },
  {
    q: 'Wie starten wir am besten?',
    a: null,
  },
]

function FaqItem({ q, a, open, onToggle }) {
  const reduced = useReducedMotion()

  return (
    <div className="border-b border-[var(--color-line)]">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-[22px] bg-transparent border-none text-left font-[family-name:var(--font-serif)] text-[19px] font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 rounded-sm"
      >
        <span>{q}</span>
        <motion.span
          className="shrink-0 relative w-6 h-6"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: reduced ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-[1.5px] bg-current" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5px] h-3.5 bg-current" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-[22px] text-base leading-[1.6] text-[var(--color-ink-muted)] max-w-[70ch]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" aria-labelledby="heading-faq" className="px-3 lg:px-4 py-6">
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(44,28,18,0.08),0_4px_12px_rgba(44,28,18,0.05)] border border-black/[0.04] py-[72px] lg:py-[80px]">
        <img src="/hero-bg/cta-v1.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.45]" />
        <div className="absolute inset-0 bg-[#F2E7DE]/75" aria-hidden="true" />
        <div className="relative max-w-[980px] mx-auto px-7">
        <SectionHead id="heading-faq" label="FAQ" headline={<>Häufige <em>Fragen</em>.</>} />

        <div className="border-t border-[var(--color-line)]">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={
                f.a ?? (
                  <>
                    Mit dem Erstgespräch — 30 Minuten, kostenlos, unverbindlich. Wir schauen, ob und wo ich helfen kann.
                    Wenn nicht, sage ich Ihnen das ehrlich.{' '}
                    <a href="#erstgespraech" className="text-[var(--color-accent)] hover:underline">
                      Hier buchen →
                    </a>
                  </>
                )
              }
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}