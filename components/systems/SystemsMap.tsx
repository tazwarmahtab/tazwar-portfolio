"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = ["PROBLEM", "WORKFLOW", "ORCHESTRATOR", "AGENT", "TOOLS / APIs", "MEMORY", "ACTION", "OBSERVABILITY"];

export function SystemsMap() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".system-node");
      gsap.from(items, {
        opacity: 0,
        y: 18,
        stagger: 0.1,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
      gsap.from(".system-connector", {
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.1,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div className="systems-map" ref={ref} aria-label="AI automation system architecture">
      {nodes.map((node, index) => (
        <div className="system-step" key={node}>
          <div className="system-node"><span>{String(index + 1).padStart(2, "0")}</span>{node}</div>
          {index < nodes.length - 1 && <div className="system-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
