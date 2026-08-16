# Awwwards-Inspired Portfolio Experience v3

## Objective

Keep the existing editorial visual identity while making the portfolio demonstrate interaction design through scroll choreography, contextual pointer behavior, project depth, and continuity between sections. The two supplied reference sites are treated as UX references, not visual templates.

## Required experience

- Masked hero typography reveal on load.
- Hero responds to scroll with restrained scale/opacity/parallax.
- Section content reveals as grouped stories, not isolated fades.
- Project media follows pointer subtly on fine pointers and scales on hover.
- Contextual cursor state on interactive desktop elements.
- Systems Map reveals nodes/connectors sequentially.
- Mobile removes pointer-only effects while preserving scroll storytelling.
- Reduced-motion mode disables non-essential animation.
- Portrait is a real committed asset, never a placeholder.
- Project cards visually communicate that they are interactive.
- Case-study navigation should eventually use shared visual continuity rather than abrupt transitions.

## Non-goals

- No gratuitous WebGL.
- No cloned branding or layouts from reference sites.
- No animation that harms readability or performance.
- No invented project metrics or technical claims.

## Acceptance criteria

1. Portrait loads from a committed repository asset.
2. Hero reveal is visible on first load and remains readable with reduced motion.
3. Scroll choreography is smooth on desktop and mobile.
4. Pointer effects only activate for fine pointers.
5. Keyboard focus remains visible and usable.
6. No hydration errors.
7. Production build passes.
8. Vercel deployment succeeds.
9. The experience feels materially different from a static portfolio, not merely a collection of hover effects.
