"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AwwwardsMotion() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-word", { yPercent: 110, rotateX: 18 }, { yPercent: 0, rotateX: 0, duration: 1.15, stagger: 0.08, ease: "power4.out", delay: 0.1 });
      gsap.to(".hero", { yPercent: -10, opacity: 0.88, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

      gsap.utils.toArray<HTMLElement>("[data-pin-reveal]").forEach((section) => {
        const items = section.querySelectorAll("[data-reveal-item]");
        gsap.from(items, { y: 55, opacity: 0, stagger: 0.08, duration: 0.75, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 72%", once: true } });
      });

      gsap.utils.toArray<HTMLElement>(".project").forEach((card) => {
        const media = card.querySelector<HTMLElement>(".project-visual");
        const title = card.querySelector<HTMLElement>(".project-title");
        if (!media || !title) return;
        card.addEventListener("mouseenter", () => gsap.to(media, { scale: 1.025, duration: .5, ease: "power3.out" }));
        card.addEventListener("mouseleave", () => gsap.to(media, { scale: 1, x: 0, y: 0, duration: .5, ease: "power3.out" }));
        if (fine) card.addEventListener("mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width - .5) * 10;
          const y = ((e.clientY - r.top) / r.height - .5) * 7;
          gsap.to(media, { x, y, duration: .45, overwrite: true });
        });
        title.addEventListener("mouseenter", () => gsap.to(title, { x: 8, duration: .3, ease: "power2.out" }));
        title.addEventListener("mouseleave", () => gsap.to(title, { x: 0, duration: .3, ease: "power2.out" }));
      });

      if (fine && cursor.current) {
        const c = cursor.current;
        const move = (e: MouseEvent) => gsap.to(c, { x: e.clientX, y: e.clientY, duration: .18, ease: "power2.out" });
        window.addEventListener("mousemove", move);
        document.querySelectorAll<HTMLElement>("a, button, .system-node").forEach((el) => {
          el.addEventListener("mouseenter", () => gsap.to(c, { scale: 1.8, duration: .2 }));
          el.addEventListener("mouseleave", () => gsap.to(c, { scale: 1, duration: .2 }));
        });
        return () => window.removeEventListener("mousemove", move);
      }
    });
    return () => ctx.revert();
  }, []);

  return <div ref={cursor} className="aw-cursor" aria-hidden="true" />;
}

export function TextWord({ children }: { children: React.ReactNode }) {
  return <span className="hero-word-wrap"><span className="hero-word">{children}</span></span>;
}
