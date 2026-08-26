"use client";
export function LinkedinPost(){
  return (
    <div style={{width:1200, height:627, background:"var(--color-bg)", border:"1px solid var(--color-line)", borderRadius:16, padding:32, display:"flex", gap:24}}>
      <div className="flex-1">
        <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-accent)] mb-3">Partner für KI-Transformation</div>
        <div className="font-serif font-bold text-[36px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink-strong)]">Viele starten mit KI. <em className="italic text-[var(--color-accent)]">Wenige</em> machen sie produktiv.</div>
        <div className="h-1 w-12 bg-[var(--color-accent)] mt-4" />
      </div>
      <div className="w-[380px] rounded-[16px] bg-[var(--color-sky)] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-40" style={{background:"radial-gradient(60% 50% at 70% 40%, var(--color-sage) 0%, transparent 70%)"}} />
        <span className="relative font-serif italic text-white">Befähigung</span>
      </div>
    </div>
  )
}
