# Tazwar Mahtab Portfolio V2 — Interactive Editorial Experience

## Status
Approved design direction, ready for implementation planning.

## Objective

Transform the existing `tazwar-portfolio` into a premium, interactive editorial portfolio for an AI Automation Engineer / Builder. Preserve the current warm-neutral visual identity and evidence-backed project positioning while adding the quality of UX choreography, transitions, animation, and interaction found in high-end interactive portfolios.

The site must communicate four things quickly:

1. Tazwar can understand business/operational problems.
2. Tazwar can architect systems and AI workflows.
3. Tazwar can actually implement software and automation.
4. Tazwar has enough product/design taste to build polished experiences.

The portfolio must remain recruiter-friendly, fast, accessible, and understandable without animation.

## Reference Principles

The reference sites are used as inspiration for interaction quality, narrative flow, and visual storytelling, not for copying proprietary layouts, text, assets, or code.

Reference directions:
- S0 Animation: interaction-led presentation, refined transitions, visual choreography.
- Justus John: clear positioning, systems/business narrative, interactive demonstrations, simple navigation.
- Existing Tazwar portfolio: warm off-white editorial design, large typography, evidence-backed project case studies.

## Locked Visual Direction

- Background: warm off-white / ivory.
- Primary text: near-black.
- Secondary text: muted graphite.
- Dividers: thin neutral gray.
- Typography: large modern grotesk for headings, monospace metadata.
- Layout: spacious, asymmetric editorial grid.
- Shapes: mostly rectangular, restrained rounding.
- Photography: real Tazwar portrait integrated into About section.
- No gradients, neon, glassmorphism, excessive shadows, generic AI blobs, or dashboard-card grids.

## Positioning

Primary identity:
`Tazwar Mahtab`
`AI Automation Engineer / Builder`

Hero headline:
`I build systems that run businesses and automate work.`

Hero support copy:
`I design and build AI automation systems, agentic workflows, and real-world software that solve operational problems.`

Do not use OpenClaw as a public portfolio brand. The project remains `LilTaz` with the descriptor `Autonomous AI Agent Infrastructure`.

## Information Architecture

```text
Global navigation
  Work
  Systems
  About
  Build Log
  Contact

Home
  Hero
  About / portrait
  Systems thinking
  Selected work
  Build log
  Contact
  Footer

Work detail
  Overview
  Problem
  System architecture
  Implementation
  Engineering decisions
  Trade-offs
  Current status
  Source / demo
```

## Hero UX

Desktop hero is a two-column composition.

Left side:
- small kicker: AI AUTOMATION ENGINEER / BUILDER
- large three-line headline
- concise support copy
- primary CTA: View My Work
- secondary CTA: See Systems I Build

Right side:
- availability/status module
- currently building Netso Energy
- subtle horizontal rule / dot indicator

### Hero entrance sequence

1. Navigation fades/slides into place.
2. Kicker reveals.
3. Main headline reveals line-by-line with masked upward motion.
4. Support copy fades in.
5. CTAs appear with stagger.
6. Availability module enters from a small offset.

Entrance durations must be short and sequential, not theatrical.

## Navigation UX

Desktop:
- persistent top navigation with Tazwar name on left.
- Work, Systems, About, Build Log, Contact.
- primary action `View Projects →` or equivalent.

Scroll behavior:
- navigation subtly reduces vertical height after scrolling.
- active section state is indicated by restrained opacity/underline or dot transition.
- no large sticky overlay that hides content.

Mobile:
- compact brand + menu control.
- full-screen menu opens with a controlled clip/opacity transition.
- menu items stagger in.
- closing reverses the sequence.

## About / Portrait

The selected real portrait is integrated as a large editorial image, not a circular avatar.

Desktop:
- image approximately 40% width.
- text approximately 60% width.

Mobile:
- portrait becomes full-width, then About copy follows.

Copy headline:
`Business first. Systems second. Build both.`

Four pillars:
- Systems Thinker
- Builder
- Business Mindset
- AI Native

Image treatment:
- no face reshaping or identity edits in site code.
- no artificial skin smoothing.
- preserve natural facial details and asymmetry.
- use crop and responsive positioning only.

Image motion:
- subtle scale/parallax on scroll.
- no face morphing or synthetic motion.

## Systems Section

This section is the portfolio's primary conceptual differentiator.

Visual architecture:

```text
PROBLEM
  ↓
WORKFLOW
  ↓
ORCHESTRATOR
  ↓
AGENT
  ↓
TOOLS / APIs
  ↓
MEMORY
  ↓
ACTION
  ↓
OBSERVABILITY
```

Interaction:
- nodes enter sequentially on scroll.
- connecting lines draw progressively.
- focused node gains small contrast change.
- hover on desktop reveals a short explanation.
- mobile uses simplified vertical sequence.

The animation must communicate architecture. It must remain understandable as static content.

## Selected Work

Selected work is the centerpiece of the homepage.

Do not use four identical cards as the final interaction pattern.

Use larger editorial project modules with:
- project number
- category
- title
- short description
- status
- verified technology tags
- visual treatment
- clear arrow / affordance

Projects:

### 01 — Netso Energy
Category: AI + Energy Infrastructure
Status: Prototype / Active Development
Evidence source: `tazwarmahtab/netso-mvp`

### 02 — LilTaz
Category: AI Agents / Systems
Status: Active Development
Descriptor: Autonomous AI Agent Infrastructure
Evidence source: `tazwarmahtab/LilTaz`

### 03 — TransitBD
Category: Mobility / Platform
Status: Concept / Development
Only claims supported by repository evidence.

### 04 — Automation Systems
Only include once a real, defensible demonstrator exists. Do not fabricate a client/project.

## Project Card Interaction

Default:
- image/visual stable.
- metadata visible.

Hover:
- visual scales very slightly.
- title shifts a few pixels.
- arrow translates.
- secondary metadata transitions in.
- cursor indicator changes to `VIEW →` on desktop.

Click:
- navigate to the project case study.
- where technically practical, use a shared-element-style transition between project visual and case-study visual.
- ensure route navigation remains accessible and usable without animation.

## Case Study UX

Each case study follows a consistent structure:

1. Overview
2. Problem
3. System
4. Implementation
5. Engineering Decisions
6. Trade-offs
7. Current Status
8. Source / Demo

Case-study hero:
- huge project title
- category
- concise statement
- status / role metadata

Architecture sections:
- diagrams animate in progressively.
- nodes and lines reveal on scroll.
- avoid canvas-heavy effects unless there is a measured reason to use them.

Page transitions:
- brief fade/translate sequence between routes.
- no long loading-style animations.

## Build Log

A lightweight editorial index, not a fake blog.

Only publish entries when real technical writing exists.

Initial topics:
- Building an AI agent that can actually act.
- Designing persistent memory for AI systems.
- Lessons from building Netso's AI layer.

## Interaction System

### Scroll

- section entrance reveals.
- masked headline reveals.
- image scale/parallax.
- architecture drawing.
- project visual movement.

### Hover

Desktop only.
- contextual pointer state.
- title shift.
- image scale.
- arrow movement.
- subtle underline/opacity transitions.

### Cursor

Optional desktop enhancement.
- default pointer remains functional.
- project hover may show a small contextual label.
- no large distracting custom cursor.
- never rely on cursor effects for navigation.

### Buttons

- subtle magnetic movement on desktop.
- arrow slides on hover.
- contrast change is immediate and readable.

### Page transitions

- short opacity + vertical translation.
- no blocking overlay lasting more than a brief moment.
- back/forward browser navigation works normally.

## Motion Principles

1. Motion explains hierarchy.
2. Motion reinforces cause/effect.
3. Motion is short and purposeful.
4. Every animation has a static fallback.
5. Mobile uses reduced complexity.
6. Respect `prefers-reduced-motion`.
7. Avoid layout shifts.
8. Avoid perpetual or looping motion unless essential.

Target motion feel:
- smooth
- precise
- editorial
- responsive
- restrained

## Technical Motion Implementation

Preferred approach:
- lightweight CSS transitions for simple interactions.
- GSAP / ScrollTrigger for scroll choreography and pinned/sequence-based scenes where justified.
- React components should remain modular and cleanup animation listeners/timelines correctly.
- Avoid adding a large animation dependency stack.

The animation implementation must not compromise page load or interaction readiness.

## Performance Requirements

- lazy-load non-critical project imagery.
- responsive image sizing.
- minimize JavaScript shipped to the client.
- animate primarily transform/opacity.
- avoid unnecessary WebGL.
- no full-screen background video unless it provides real project evidence.
- maintain stable layout dimensions for media.
- mobile motion should be simplified.

Targets:
- Lighthouse Performance >= 90 where practical.
- Lighthouse Accessibility >= 90 where practical.
- no console errors.
- no broken routes.
- no major cumulative layout shift caused by media/animation.

## Accessibility

- semantic HTML.
- keyboard-operable navigation and buttons.
- visible focus states.
- sufficient contrast.
- descriptive image alt text.
- animations disabled/reduced under `prefers-reduced-motion`.
- no cursor-only functionality.
- skip/navigation behavior remains usable.

## Evidence / Truthfulness Rules

- Never invent metrics, employers, clients, awards, certifications, years of experience, production claims, or user counts.
- Distinguish concept, prototype, active development, and production.
- Technical stack should only include technologies actually used in the relevant project.
- LilTaz is described from verified repository evidence.
- Netso AI capabilities are described from verified repository evidence.
- TransitBD remains conservative until deeper implementation evidence is available.

## Content Constraints

Do not use:
- OpenClaw as a public project title.
- fake automation client work.
- generic filler testimonials.
- inflated skills lists.
- fake case-study outcomes.

## Component Architecture

Refactor the current monolithic homepage into reusable components roughly along these boundaries:

```text
components/
  navigation
  hero
  availability
  portrait-about
  systems-map
  project-list
  project-card
  motion
  build-log
  contact
  footer

content/
  projects.ts

app/
  page.tsx
  work/liltaz/page.tsx
  work/netso/page.tsx
  work/transitbd/page.tsx (only when evidence is sufficient)
```

Boundaries should allow visual changes without duplicating project data.

## Responsive Behavior

Desktop:
- editorial two-column and asymmetric layouts.
- larger project visuals.
- hover/cursor interactions enabled.

Tablet:
- preserve hierarchy but reduce side-by-side density.

Mobile:
- stack content.
- simplify systems diagrams.
- disable cursor-specific behavior.
- shorten animation sequences.
- maintain clear CTA hierarchy.

Primary test widths:
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px+

## Success Criteria

The finished site should make a technical recruiter understand the role positioning within seconds, while making a technical interviewer curious about the underlying engineering.

A visitor should be able to:
- identify Tazwar and his role immediately.
- understand the business-first systems philosophy.
- experience meaningful motion without confusion.
- discover real projects quickly.
- open detailed case studies.
- reach GitHub and contact pathways easily.
- use the full site with keyboard and reduced motion.

The site should feel like one continuous authored experience rather than a sequence of AI-generated sections.
