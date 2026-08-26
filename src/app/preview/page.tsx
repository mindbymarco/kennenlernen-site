import { OgImage } from "@/components/templates/OgImage";
import { LinkedinPost } from "@/components/templates/LinkedinPost";
import { NewsletterHeader } from "@/components/templates/NewsletterHeader";

export default function Preview(){
  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-8 space-y-12">
      <h1 className="font-serif text-2xl font-bold">Tokens Preview — Website + Content</h1>
      <p className="text-sm text-muted-foreground">Alle nutzen <code>assets/design-tokens.json</code> → <code>var(--color-*)</code>. Änderung einmal, wirkt überall.</p>
      <section><h2 className="font-mono text-xs uppercase tracking-widest mb-3">OG Image 1200×630</h2><div className="overflow-auto border rounded"><OgImage /></div></section>
      <section><h2 className="font-mono text-xs uppercase tracking-widest mb-3">LinkedIn Post 1200×627</h2><div className="overflow-auto border rounded"><LinkedinPost /></div></section>
      <section><h2 className="font-mono text-xs uppercase tracking-widest mb-3">Newsletter Header 600×200</h2><NewsletterHeader /></section>
    </div>
  )
}
