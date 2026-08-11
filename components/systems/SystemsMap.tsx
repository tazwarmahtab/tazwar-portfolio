"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { id: "PROBLEM", desc: "Start with the real operational constraint." },
  { id: "WORKFLOW", desc: "Model how work actually moves." },
  { id: "ORCHESTRATOR", desc: "Coordinate agents, tools, and state." },
  { id: "AGENT", desc: "Reason, plan, and decide next actions." },
  { id: "TOOLS / APIs", desc: "Act on the outside world safely." },
  { id: "MEMORY", desc: "Retain context across sessions and tasks." },
  { id: "ACTION", desc: "Execute and produce observable results." },
  { id: "OBSERVABILITY", desc: "Inspect, debug, and improve the system." },
];

export function SystemsMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".system-node");
      gsap.from(items, {
        opacity: 0,
        y: 20,
        stagger: 0.09,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });

      gsap.from(".system-connector", {
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.09,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="systems-map"
      ref={ref}
      aria-label="AI automation system architecture"
    >
      {nodes.map((node, index) => (
        <div className="system-step" key={node.id}>
          <button
            type="button"
            className={`system-node${active === node.id ? " is-active" : ""}`}
            onMouseEnter={() => setActive(node.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(node.id)}
            onBlur={() => setActive(null)}
            aria-describedby={`system-desc-${index}`}
          >
            <span className="system-num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="system-label">{node.id}</span>
          </button>

          <p
            id={`system-desc-${index}`}
            className={`system-desc${active === node.id ? " is-visible" : ""}`}
          >
            {node.desc}
          </p>

          {index < nodes.length - 1 && (
            <div className="system-connector" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
