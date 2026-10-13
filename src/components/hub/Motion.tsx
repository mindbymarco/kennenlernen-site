"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Blur-Reveal, Terminal-Zeilen und Kopfzeile. Ohne JS bleibt alles sichtbar (Klasse .js fehlt).
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".hub");
    if (!root) return;
    root.classList.add("js");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const runTerm = (el: Element) => el.querySelectorAll(".line").forEach((line, i) => timers.push(window.setTimeout(() => line.classList.add("on"), reduce ? 0 : 250 + i * 420)));
    root.querySelectorAll("[data-stagger]").forEach(parent => [...parent.children].forEach((child, i) => { child.classList.add("rv"); (child as HTMLElement).style.setProperty("--d", `${i * 80}ms`); }));
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      if (entry.target.matches("[data-term]")) runTerm(entry.target);
      io.unobserve(entry.target);
    }), { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    root.querySelectorAll(".rv, [data-words], [data-term]").forEach(el => { if (!el.classList.contains("in")) io.observe(el); });
    const top = root.querySelector(".top");
    const onScroll = () => top?.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { io.disconnect(); timers.forEach(clearTimeout); window.removeEventListener("scroll", onScroll); };
  }, [pathname]);
  return null;
}
