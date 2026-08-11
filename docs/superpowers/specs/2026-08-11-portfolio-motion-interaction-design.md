# Portfolio Motion & Interaction System Design

## Objective
Elevate the existing editorial portfolio into a premium interaction-led portfolio inspired by the spatial continuity and restraint of the provided S0 Animation and Justus John references, without copying their visual identity.

The visual system is locked. This pass is a motion, interaction, and responsive-behavior upgrade rather than a redesign.

## Current Context
- Next.js 14 + React 18 + TypeScript.
- GSAP 3.13 and @gsap/react are already installed.
- Homepage uses focused components: Navigation, Hero, PortraitAbout, SystemsMap, ProjectList, TechStack, BuildLog, Contact, Footer.
- Existing Motion wrapper uses GSAP + ScrollTrigger and supports reduced-motion detection.
- Existing magnetic CTA behavior should become more robust and reusable.
- Mobile is a first-class experience.

## Design Principles
1. Motion communicates hierarchy and continuity, not decoration.
2. Interactions feel editorial, tactile, and restrained.
3. The page remains usable with motion disabled.
4. Desktop carries richer pointer interactions. Mobile favors scroll, press, and reveal behavior.
5. Avoid excessive parallax, bouncing, blur, or novelty cursor effects.
6. Respect prefers-reduced-motion everywhere.

## Interaction System
### Page entrance
- Short editorial reveal for kicker, hero lines, supporting copy, and actions.
- Transform + opacity only.
- Keep perceived entrance under roughly 1.2 seconds.
- Animate already-laid-out elements to prevent layout shift.

### Scroll reveals
- Small vertical translation and opacity.
- Border/line scaleX reveals where useful.
- One-shot ScrollTrigger reveals.
- Group related content rather than animating every paragraph independently.

### Magnetic controls
- CTAs and desktop nav action get a subtle magnetic response.
- Low strength so controls never feel detached from their hit area.
- Smooth reset on pointer leave.
- Disable on touch and reduced-motion environments.
- Preserve semantic anchors and keyboard behavior.

### Buttons
- Hover: restrained fill/border transition and directional arrow movement.
- Press: tiny scale reduction.
- Focus-visible: clear high-contrast treatment.
- No hover-only meaning.

### Projects
- Project rows get restrained title/metadata response on pointer entry.
- Visual media gets very small scale/parallax on desktop only.
- Interaction should reinforce clickability.
- Case-study navigation should preserve spatial continuity with the project list.

### Systems Map
- Retain active/hover behavior.
- Add sequential reveal when the map enters the viewport.
- Active state remains deterministic and keyboard accessible.
- Do not auto-cycle states in a way that interferes with reading.

### Navigation
- Keep minimal editorial navigation.
- Add subtle active/hover treatment without a large sticky overlay.
- Mobile navigation stays compact and touch-first.

### Portrait/media
- Preserve editorial portrait treatment.
- Only subtle scale/position response where it improves depth.
- No aggressive 3D tilt.

## Responsive Behavior
### Desktop
Richest interaction layer: magnetic controls, pointer-sensitive media, hover transitions, and scroll choreography. Prefer transform/opacity for performance.

### Tablet
Reduce interaction strength. Preserve scroll reveals and button transitions. Disable pointer effects when no fine pointer is available.

### Mobile
Prioritize typography, hierarchy, and fast scrolling. Disable magnetic and pointer-parallax effects. Use shorter reveals and smaller translate distances. The first viewport must present the positioning statement and at least one clear CTA without excessive animation delay.

## Accessibility & Performance
- Every motion feature has a prefers-reduced-motion fallback.
- Keyboard users get visible focus states.
- Interactive elements remain semantic anchors/buttons.
- Avoid continuous loops unless functional.
- Prefer transform/opacity over layout animation.
- Clean up GSAP contexts/listeners.
- Use pointer capability detection rather than user-agent detection.

## Content Direction
Retain the current visual direction. The stronger deployed framing around AI agents, automation systems, and software is preferred where already present. Copy changes are secondary to interaction quality.

## Acceptance Criteria
1. Desktop feels materially more premium and interactive without becoming flashy.
2. Mobile retains the current editorial appearance and does not feel like a shrunk desktop animation demo.
3. CTA interactions feel tactile but subtle.
4. Scroll reveals are coherent across hero, about, systems, projects, stack, build log, and contact.
5. Systems Map and project rows have meaningful interaction feedback.
6. Reduced-motion users receive a complete static experience.
7. No new dependency unless a concrete gap is discovered.
8. Existing content architecture remains intact.
9. Implementation is verifiable with typecheck/build and responsive review.

## Scope
In scope: motion primitives, interaction states, responsive motion behavior, accessibility fallbacks, and focused CSS refinements.

Out of scope: visual redesign, new sections, CMS/data layer, major content rewrite, or replacing GSAP.
