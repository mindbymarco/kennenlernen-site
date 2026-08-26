"use client";
export function OgImage(){
  return (
    <div style={{width:1200, height:630, background:"var(--color-sky)", display:"flex", flexDirection:"column", justifyContent:"center", padding:48, borderRadius:24, position:"relative", overflow:"hidden"}}>
      <div className="absolute inset-0 opacity-30" style={{background:"radial-gradient(60% 50% at 70% 40%, var(--color-sage) 0%, transparent 70%)"}} />
      <div className="font-mono text-xs tracking-[0.08em] uppercase text-white/80 mb-4">Marco Grotemeyer — KI-Transformation</div>
      <div className="font-serif font-bold text-[48px] leading-[0.98] tracking-[-0.02em] text-[var(--color-ink-strong)] max-w-[18ch]">KI-Erfolg entsteht nicht beim <em className="italic text-white">Tool</em>, sondern bei der Befähigung.</div>
      <div className="absolute bottom-0 left-0 right-0 h-[24px] bg-white" style={{clipPath:"polygon(0 60%,100% 50%,100% 100%,0 100%)"}} />
    </div>
  )
}
