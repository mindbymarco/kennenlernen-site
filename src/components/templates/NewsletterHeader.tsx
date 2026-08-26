"use client";
export function NewsletterHeader(){
  return (
    <div style={{width:600, height:200, background:"var(--color-bg)", border:"1px solid var(--color-line)", borderRadius:16, padding:24, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <div>
        <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--color-accent)]">Beyond925 · Marco Grotemeyer</div>
        <div className="font-serif font-bold text-[24px] tracking-[-0.02em] text-[var(--color-ink-strong)] mt-1">Wo KI <em className="italic text-[var(--color-accent)]">produktiv</em> wird.</div>
      </div>
      <div className="w-24 h-24 rounded-full border border-[var(--color-line)] bg-[var(--color-sky)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{background:"radial-gradient(60% 50% at 60% 40%, var(--color-sage) 0%, transparent 60%)"}} />
      </div>
    </div>
  )
}
