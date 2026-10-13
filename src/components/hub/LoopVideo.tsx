"use client";
import { useEffect, useRef } from "react";

// Stummes Schleifenvideo: startet erst im Bild, pausiert außerhalb. Bei „Bewegung reduzieren“ bleibt das Standbild (DESIGNSYSTEM 6, 10).
export default function LoopVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) video.play().catch(() => {}); else video.pause(); }, { threshold: 0.25 });
    io.observe(video);
    return () => io.disconnect();
  }, []);
  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" aria-label={label} />;
}
