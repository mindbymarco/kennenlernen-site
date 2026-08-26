import { motion } from "framer-motion";
import AsciiBlob from "./AsciiBlob";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-bg">
      <AsciiBlob />

      <motion.div
        className="relative z-10 max-w-[720px] text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-[13px] tracking-[0.08em] uppercase text-ink-muted mb-6">
          Partner für unternehmensweite KI-Transformation
        </p>

        <h1 className="font-serif text-[clamp(32px,5vw,56px)] leading-[1.15] tracking-[-0.02em] font-medium text-ink-strong mb-6">
          KI-Erfolg entsteht nicht beim{" "}
          <em className="italic font-normal text-accent">Tool</em>
          , sondern bei der Befähigung der Menschen.
        </h1>

        <p className="text-[18px] leading-relaxed text-ink-muted mb-10">
          Befähigung und technische Umsetzung aus einer Hand. Damit KI nicht in
          Piloten stecken bleibt, sondern in der täglichen Arbeit ankommt.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-[15px] font-medium bg-ink-strong text-bg no-underline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Erstgespräch buchen →
          </motion.a>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-[15px] font-medium text-ink-strong border border-line no-underline"
            whileHover={{ scale: 1.03, borderColor: "var(--color-ink-strong)" }}
            whileTap={{ scale: 0.97 }}
          >
            Workspace ansehen
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}