# Interactive Portfolio V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing Tazwar portfolio into a fast, accessible, motion-led editorial experience inspired by the interaction quality of the supplied S0 Animation and Justus John references while preserving Tazwar's evidence-backed positioning.

**Architecture:** Refactor the current monolithic `app/page.tsx` into focused client/server components. Keep project facts in typed content data, use CSS for simple transitions, and use GSAP/ScrollTrigger only for scroll choreography that benefits from timeline control. Preserve Next.js App Router and avoid WebGL or unnecessary animation dependencies.

**Tech Stack:** Next.js 14.2.25, React 18.3.1, TypeScript 5.7.2, CSS, GSAP + ScrollTrigger, Next/Image, semantic HTML.

## Global Constraints

- Preserve warm off-white/ivory, near-black, muted graphite, thin neutral dividers, editorial grotesk typography, monospace metadata.
- Hero identity: `Tazwar Mahtab` / `AI Automation Engineer / Builder`.
- Hero headline: `I build systems that run businesses and automate work.`
- Do not use OpenClaw as a public portfolio brand; use `LilTaz` / `Autonomous AI Agent Infrastructure`.
- Never invent metrics, clients, awards, certifications, production claims, user counts, or outcomes.
- Distinguish concept, prototype, active development, and production.
- Prefer transform/opacity animation; no unnecessary WebGL or full-screen background video.
- Respect `prefers-reduced-motion`; cursor effects are enhancement only.
- Keyboard navigation, focus states, semantic HTML, descriptive alt text, and usable reduced-motion fallbacks are mandatory.
- Target widths: 375px, 390px, 430px, 768px, 1024px, 1440px+.
- Target Lighthouse Performance >= 90 and Accessibility >= 90 where practical; no console errors or broken routes.

---

### Task 1: Establish the component and content architecture

**Files:**
- Create: `content/projects.ts`
- Create: `components/navigation.tsx`
- Create: `components/hero.tsx`
- Create: `components/availability.tsx`
- Create: `components/portrait-about.tsx`
- Create: `components/systems-map.tsx`
- Create: `components/project-card.tsx`
- Create: `components/project-list.tsx`
- Create: `components/build-log.tsx`
- Create: `components/contact.tsx`
- Create: `components/footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- `projects.ts` exports a typed `Project` interface and a `projects` array containing verified LilTaz, Netso Energy, and TransitBD entries. Automation Systems is excluded until a defensible demonstrator exists.
- `ProjectCard` consumes `Project` and renders `href`, `number`, `category`, `title`, `description`, `status`, `stack`, and visual label.
- Section components accept no global mutable state; navigation uses anchor IDs.

- [ ] **Step 1: Create typed project data with only current evidence-backed claims.**
- [ ] **Step 2: Extract the navigation from the current page without changing its visual behavior yet.**
- [ ] **Step 3: Extract Hero and Availability into separate components.**
- [ ] **Step 4: Extract About, Systems, project list/card, Build Log, Contact, and Footer components.**
- [ ] **Step 5: Reduce `app/page.tsx` to composition of those components.**
- [ ] **Step 6: Run `npm run build` and verify the refactor compiles before adding motion.**
- [ ] **Step 7: Commit `refactor: split portfolio into focused sections`.**

---

### Task 2: Install and isolate the motion layer

**Files:**
- Modify: `package.json`
- Create: `components/motion/page-reveal.tsx`
- Create: `components/motion/reveal.tsx`
- Create: `components/motion/hero-entrance.tsx`
- Create: `components/motion/use-reduced-motion.ts`

**Interfaces:**
- `useReducedMotion(): boolean` returns the media-query state.
- `Reveal` accepts `children`, optional `className`, `delay`, and `once` and exposes a static visible state when reduced motion is enabled.
- `HeroEntrance` accepts the hero child blocks and coordinates their entrance without blocking interaction.

- [ ] **Step 1: Add GSAP and ScrollTrigger to dependencies.**
- [ ] **Step 2: Implement `useReducedMotion` with `matchMedia('(prefers-reduced-motion: reduce)')` and cleanup.**
- [ ] **Step 3: Implement a generic opacity/translate reveal using GSAP only when motion is allowed.**
- [ ] **Step 4: Implement hero entrance sequencing: nav, kicker, headline lines, support copy, CTAs, availability.**
- [ ] **Step 5: Run `npm run build` and verify client/server boundaries are valid.**
- [ ] **Step 6: Commit `feat: add accessible motion foundation`.**

---

### Task 3: Build the navigation and hero interaction system

**Files:**
- Modify: `components/navigation.tsx`
- Modify: `components/hero.tsx`
- Modify: `components/availability.tsx`
- Create/modify: `app/globals.css`

**Interfaces:**
- Navigation exposes `Work`, `Systems`, `About`, `Build Log`, `Contact` anchors and a `View Projects →` action.
- Hero contains the exact approved headline/support copy and availability module.

- [ ] **Step 1: Implement the compact desktop navigation and mobile menu markup with semantic buttons.**
- [ ] **Step 2: Add scroll-state detection so navigation reduces height after the user scrolls.**
- [ ] **Step 3: Implement mobile full-screen menu clip/opacity transition and staggered items.**
- [ ] **Step 4: Implement hero masked headline reveal and staggered CTA entrance.**
- [ ] **Step 5: Add reduced-motion fallback that renders all content immediately.**
- [ ] **Step 6: Test keyboard open/close/focus behavior and anchor navigation.**
- [ ] **Step 7: Commit `feat: add choreographed hero and navigation`.**

---

### Task 4: Implement portrait About section

**Files:**
- Modify: `components/portrait-about.tsx`
- Modify: `app/globals.css`
- Create if needed: `public/images/tazwar/portrait.*`

**Interfaces:**
- `PortraitAbout` renders the selected real portrait using `next/image` with explicit dimensions/aspect ratio and descriptive alt text.

- [ ] **Step 1: Add the selected portrait asset only if an existing repository asset is available; otherwise keep an explicit image path ready for the supplied final asset rather than fabricating a replacement.**
- [ ] **Step 2: Implement 40/60 desktop editorial grid and stacked mobile layout.**
- [ ] **Step 3: Implement subtle image scale/parallax using transform only, with reduced-motion fallback.**
- [ ] **Step 4: Add the four approved pillars: Systems Thinker, Builder, Business Mindset, AI Native.**
- [ ] **Step 5: Verify stable image dimensions and no layout shift.**
- [ ] **Step 6: Commit `feat: add editorial portrait about section`.**

---

### Task 5: Implement the interactive Systems Map

**Files:**
- Modify: `components/systems-map.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- `SystemsMap` owns the eight ordered nodes: `PROBLEM`, `WORKFLOW`, `ORCHESTRATOR`, `AGENT`, `TOOLS / APIs`, `MEMORY`, `ACTION`, `OBSERVABILITY`.
- Each node has a static description and optional hover description state.

- [ ] **Step 1: Render the eight nodes semantically as an ordered list so the static structure is meaningful without animation.**
- [ ] **Step 2: Add connecting lines using lightweight DOM/CSS elements rather than canvas.**
- [ ] **Step 3: Add ScrollTrigger sequence that reveals nodes in order and draws connector scale/opacity progressively.**
- [ ] **Step 4: Add desktop hover focus state with concise explanations.**
- [ ] **Step 5: Add simplified vertical mobile layout.**
- [ ] **Step 6: Disable the sequence and show the complete static architecture under reduced motion.**
- [ ] **Step 7: Commit `feat: add interactive systems map`.**

---

### Task 6: Convert work cards into editorial interactive project modules

**Files:**
- Modify: `components/project-card.tsx`
- Modify: `components/project-list.tsx`
- Modify: `content/projects.ts`
- Modify: `app/globals.css`

**Interfaces:**
- `ProjectCard` receives a `Project`, uses its route, and exposes the entire card as a keyboard-accessible link.

- [ ] **Step 1: Replace equal card treatment with larger asymmetric editorial project modules.**
- [ ] **Step 2: Add stable visual area, project metadata, verified stack, status, and clear arrow affordance.**
- [ ] **Step 3: Implement hover image scale, title translation, arrow translation, and metadata reveal.**
- [ ] **Step 4: Implement desktop contextual `VIEW →` pointer enhancement without replacing the native cursor or navigation semantics.**
- [ ] **Step 5: Add sequential scroll reveals for project modules.**
- [ ] **Step 6: Ensure keyboard focus reproduces the important hover state.**
- [ ] **Step 7: Commit `feat: add interactive editorial project modules`.**

---

### Task 7: Add case-study route transitions and improve case-study UX

**Files:**
- Modify: `app/work/liltaz/page.tsx`
- Modify: `app/work/netso/page.tsx`
- Inspect/create: `app/work/transitbd/page.tsx` only if repository evidence supports it
- Create: `components/case-study-shell.tsx`
- Create: `components/case-study-section.tsx`
- Create: `components/motion/route-transition.tsx`

**Interfaces:**
- `CaseStudyShell` accepts `title`, `category`, `status`, `summary`, `sections`, and source/demo links.
- `CaseStudySection` accepts a numbered label, heading, body, and optional architecture visual.

- [ ] **Step 1: Inspect existing LilTaz and Netso pages and preserve all verified content.**
- [ ] **Step 2: Normalize their visual shell into `CaseStudyShell`.**
- [ ] **Step 3: Organize each case study into Overview, Problem, System, Implementation, Engineering Decisions, Trade-offs, Current Status, Source/Demo.**
- [ ] **Step 4: Add progressive architecture visual reveals using the same motion primitives as Systems Map.**
- [ ] **Step 5: Add a short route transition that never blocks browser navigation and falls back to immediate navigation under reduced motion.**
- [ ] **Step 6: Verify all source links and statuses are accurate.**
- [ ] **Step 7: Commit `feat: unify interactive case study experience`.**

---

### Task 8: Add cursor, button, and micro-interaction polish

**Files:**
- Create: `components/motion/magnetic-button.tsx`
- Create: `components/motion/context-cursor.tsx`
- Modify: `components/contact.tsx`
- Modify: `components/navigation.tsx`
- Modify: `components/project-card.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- `MagneticButton` accepts standard anchor/button props and applies only a small desktop transform.
- `ContextCursor` receives an active label such as `VIEW →`; it is never the only indication of interactivity.

- [ ] **Step 1: Implement small desktop-only magnetic button movement with pointer cleanup.**
- [ ] **Step 2: Implement contextual cursor label using a fixed non-interactive element that follows pointer coordinates.**
- [ ] **Step 3: Disable contextual cursor and magnetic movement for touch/coarse pointers and reduced motion.**
- [ ] **Step 4: Ensure focus-visible states remain stronger than hover effects.**
- [ ] **Step 5: Commit `feat: add restrained interaction polish`.**

---

### Task 9: Mobile, accessibility, and performance hardening

**Files:**
- Modify: `app/globals.css`
- Modify: all motion components as needed
- Modify: `app/layout.tsx` if metadata/skip link needs correction

- [ ] **Step 1: Add explicit breakpoints for 375, 390, 430, 768, 1024, and 1440+ behavior.**
- [ ] **Step 2: Simplify systems and project motion for mobile.**
- [ ] **Step 3: Verify keyboard traversal, focus visibility, menu focus management, semantic headings, and alt text.**
- [ ] **Step 4: Verify `prefers-reduced-motion` removes transform/parallax/sequence dependencies.**
- [ ] **Step 5: Ensure images have stable dimensions and non-critical media is lazy loaded.**
- [ ] **Step 6: Remove unnecessary client components and animation listeners.**
- [ ] **Step 7: Run `npm run build`.**
- [ ] **Step 8: Run the production server and inspect console output for errors.**
- [ ] **Step 9: Commit `perf: harden responsive accessibility and motion`.**

---

### Task 10: Final content and recruiter QA

**Files:**
- Modify: any content file that fails verification
- Modify: `app/layout.tsx`
- Modify: `README.md` if it needs updated project/run instructions

- [ ] **Step 1: Verify the role statement, project statuses, technology tags, and source links against repository evidence.**
- [ ] **Step 2: Confirm OpenClaw does not appear in public-facing portfolio copy.**
- [ ] **Step 3: Confirm there are no invented metrics, testimonials, clients, credentials, or outcomes.**
- [ ] **Step 4: Confirm GitHub and contact pathways are reachable from both desktop and mobile navigation.**
- [ ] **Step 5: Test all project routes and back/forward navigation.**
- [ ] **Step 6: Perform a recruiter pass: role understandable within seconds, projects discoverable immediately, CTA obvious.**
- [ ] **Step 7: Perform a technical-interviewer pass: architecture, implementation, trade-offs, and source evidence are easy to reach.**
- [ ] **Step 8: Run the final production build and inspect for console/build errors.**
- [ ] **Step 9: Commit `chore: finalize portfolio v2`.**

---

## Verification Checklist

Before calling V2 complete:

- [ ] `npm run build` passes.
- [ ] No console errors in production.
- [ ] No broken internal routes.
- [ ] Desktop navigation collapses after scroll without obscuring content.
- [ ] Mobile menu opens/closes and remains keyboard usable.
- [ ] Hero sequence is short and non-blocking.
- [ ] Systems nodes and connectors communicate the architecture statically and dynamically.
- [ ] Project hover state has keyboard equivalent.
- [ ] Cursor enhancement never replaces native interaction.
- [ ] Reduced-motion mode is fully usable.
- [ ] Portrait has stable responsive dimensions.
- [ ] No significant layout shift from media or motion.
- [ ] Public copy contains no OpenClaw branding.
- [ ] Claims distinguish concept/prototype/active development/production.
- [ ] GitHub/source links work.
- [ ] Lighthouse targets are checked where the deployed environment permits.
