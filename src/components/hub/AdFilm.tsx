"use client";
import { useEffect, useRef, useState } from "react";

type Cut = { mp4: string; webm?: string; poster: string };

// Kurzfilm, der einmal abspielt, sobald er im Bild ist, und auf dem Schlussbild stehen bleibt.
// Handy bekommt die Hochkant-Fassung. Bei „Bewegung reduzieren“ bleibt das Standbild mit Play-Knopf (DESIGNSYSTEM 6, 10; H26).
export default function AdFilm({ wide, tall, label }: { wide: Cut; tall: Cut; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [portrait, setPortrait] = useState(false);
  const [ended, setEnded] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = matchMedia("(max-width: 720px)");
    const update = () => setPortrait(mq.matches);
    update();
    mq.addEventListener("change", update);
    setReduced(matchMedia("(prefers-reduced-motion: reduce)").matches);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || reduced) return;
    video.muted = true;
    // läuft im Bild weiter, pausiert außerhalb; einmal am Ende angekommen, bleibt das Schlussbild stehen
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !video.ended) video.play().catch(() => {});
      else if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.4 });
    io.observe(video);
    return () => io.disconnect();
  }, [portrait, reduced]);

  const cut = portrait ? tall : wide;
  const replay = () => { const v = ref.current; if (!v) return; v.currentTime = 0; setEnded(false); v.play().catch(() => {}); };

  return <figure className={`ad-film${portrait ? " tall" : ""}`}>
    <video key={cut.mp4} ref={ref} poster={cut.poster} muted playsInline preload="metadata" aria-label={label}
      controls={reduced} onEnded={() => setEnded(true)} onPlay={() => setEnded(false)}>
      {cut.webm && <source src={cut.webm} type="video/webm" />}
      <source src={cut.mp4} type="video/mp4" />
    </video>
    <figcaption>
      <span className="label">Beispielablauf · ohne Ton</span>
      {ended && <button type="button" className="mono-link" onClick={replay}>Nochmal ansehen</button>}
    </figcaption>
  </figure>;
}
