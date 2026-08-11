"use client";

import { useLayoutEffect, useRef } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type MotionAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

function canUsePointerMotion() {
  return (
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches &&
    window.matchMedia("(pointer: fine)").matches
  );
}

export function Motion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || !canUsePointerMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 22,
        opacity: 0,
        duration: 0.72,
        stagger: 0.065,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-pointer-media]").forEach((el) => {
        const media = el.querySelector<HTMLElement>("[data-pointer-media-inner]");
        if (!media) return;

        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          gsap.to(media, {
            x: x * 8,
            y: y * 6,
            scale: 1.018,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const reset = () => {
          gsap.to(media, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            overwrite: true,
          });
        };

        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);
        ctx.add(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}

export function Magnetic({ children, className = "", ...props }: MotionAnchorProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!canUsePointerMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) * 0.08;
    const y = (event.clientY - (rect.top + rect.height / 2)) * 0.08;
    gsap.to(ref.current, {
      x,
      y,
      duration: 0.28,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const leave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.42,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={move}
      onMouseLeave={leave}
      {...props}
    >
      {children}
    </a>
  );
}
