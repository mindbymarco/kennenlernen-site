"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Grain-Drift B — subtile flächige Körnung über Hero-Foto.
 * full-card, opacity 0.05-0.09, 1px drift + cursor boost.
 * ReducedMotion → static 0.03 opacity.
 */
export default function HeroGrain({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();
  const state = useRef({ mx: 0.5, my: 0.5, tmx: 0.5, tmy: 0.5, hover: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    const buf = document.createElement("canvas");
    const bctx = buf.getContext("2d");
    let raf = 0;
    let running = true;
    let frame = 0;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    const onPointer = (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      state.current.tmx = (x - rect.left) / rect.width;
      state.current.tmy = (y - rect.top) / rect.height;
      state.current.hover = 1;
    };
    const onLeave = () => { state.current.hover = 0; };

    const draw = () => {
      const s = state.current;
      s.mx += (s.tmx - s.mx) * 0.08;
      s.my += (s.tmy - s.my) * 0.08;

      const w = canvas.width;
      const h = canvas.height;
      // low-res grain buffer
      const cols = Math.round(w * 0.35);
      const rows = Math.round(h * 0.35);
      if (buf.width !== cols || buf.height !== rows) {
        buf.width = cols;
        buf.height = rows;
      }
      const img = bctx.createImageData(cols, rows);
      const d = img.data;
      // drift offset per frame (1px diagonal drift illusion via noise shift)
      const off = (frame * 0.7) % cols;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          // sparse grain: 14% dots, rest transparent
          const v = Math.random();
          if (v > 0.86) {
            const g = 20 + Math.random() * 90; // dark grain over light photo
            const a = 55 + Math.random() * 55;
            d[i] = g; d[i+1] = g; d[i+2] = g; d[i+3] = a;
          } else {
            d[i+3] = 0;
          }
        }
      }
      bctx.putImageData(img, 0, 0);

      ctx.clearRect(0, 0, w, h);
      // subtle opacity: base 0.06, cursor near center bumps to 0.09
      const dist = Math.sqrt((s.mx - 0.5) ** 2 + (s.my - 0.5) ** 2);
      const cursorBoost = s.hover ? (1 - Math.min(1, dist * 2.2)) * 0.45 : 0;
      const alpha = 0.42 + cursorBoost; // applied via globalAlpha on draw
      // drift draw with 1px offset
      const dx = Math.round((off % 3) - 1);
      const dy = Math.round(((frame * 0.5) % 3) - 1);
      ctx.globalAlpha = alpha;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(buf, dx, dy, w, h);
      ctx.globalAlpha = 1;
      frame++;
    };

    const loop = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduced) {
      // static single frame, faint
      const cols = 200, rows = 120;
      buf.width = cols; buf.height = rows;
      const img = bctx.createImageData(cols, rows);
      for (let i = 0; i < cols*rows; i++) {
        const j = i*4;
        if (Math.random() > 0.88) { const g=30+Math.random()*60; img.data[j]=g; img.data[j+1]=g; img.data[j+2]=g; img.data[j+3]=45; } else img.data[j+3]=0;
      }
      bctx.putImageData(img,0,0);
      const w=canvas.width,h=canvas.height;
      ctx.imageSmoothingEnabled=false;
      ctx.globalAlpha=0.38;
      ctx.drawImage(buf,0,0,w,h);
      ctx.globalAlpha=1;
    } else {
      window.addEventListener("pointermove", onPointer, { passive: true });
      wrap.addEventListener("pointerenter", onPointer);
      wrap.addEventListener("pointerleave", onLeave);
      window.addEventListener("resize", resize);
      raf = requestAnimationFrame(loop);
    }
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
      wrap?.removeEventListener("pointerenter", onPointer);
      wrap?.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  return (
    <div ref={wrapRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" style={{ opacity: reduced ? 0.025 : 0.05 }} />
    </div>
  );
}
