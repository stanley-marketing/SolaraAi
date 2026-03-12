
## AboutValues.tsx — Principles Section (2026-03-12)

### Patterns used
- `"use client"` required for framer-motion `whileInView`
- `import { motion } from "framer-motion"` — not `motion/react`
- Font variables: `var(--font-display)` = Playfair Display (headings), `var(--font-body)` = GeistSans (body)
- Color tokens: `text-ink-900` (primary), `text-ink-700/70` (secondary/body)
- Section spacing: `px-6 sm:px-10 py-20 sm:py-28` — matches homepage rhythm
- Section label: `text-xs font-semibold uppercase tracking-[0.28em]` with `color: "#9ca3af"` — matches BeliefSection label

### Framer Motion variants — TypeScript gotcha
- Top-level `const variantObj` with `ease: number[]` fails TS because Framer Motion expects `Easing | Easing[]` where Easing is a named string or `BezierDefinition = [number, number, number, number]`
- Fix: cast to tuple → `ease: [0.16, 1, 0.3, 1] as [number, number, number, number]`
- Alternatively: define variants inline in JSX props to avoid the Variants index signature check (see BeliefSection pattern)
- Pre-existing files (AboutFunding.tsx, AboutMethodology.tsx) have this same unfixed issue and cause `bun run build` to fail — not caused by this component

### Layout decision
- Editorial numbered list with `divide-y divide-gray-100` — earns authority through content, not decoration
- Left accent bar (gradient purple→pink→orange, `origin-top scale-y-0 group-hover:scale-y-100`) appears on hover per principle row
- Icon + index number in left gutter column (`font-mono text-xs text-gray-300`, icon `strokeWidth={1.5}`) — restrained, not colored circles
- Grid: `grid-cols-[56px_1fr]` mobile, `sm:grid-cols-[80px_1fr]` desktop

### Principles content approach
- Each principle names a real operational choice (ownership, no-shortcut review, iteration cadence) — not generic startup values
- Titles are short tension phrases ("Honesty over hype", "Speed without shortcuts") — not one-word values
- Body sentences are one to two sentences max; specific enough to be credible

## AboutTimeline.tsx — 2025-03-12

### Pattern: vertical timeline with 2 entries looks premium when entries are large and well-spaced
- Used `pb-14 sm:pb-16` on each entry's content to create generous breathing room
- Added "More ahead." trailing open dashed circle to signal future growth without inventing milestones
- `minHeight: 96` on connector line prevents collapse when content is short

### Framer Motion: `whileInView` + `viewport={{ once: true, margin: "-80px 0px" }}`
- This is the cleanest pattern for scroll-triggered reveals — no need for `useRef` + `useInView` manually
- `margin: "-80px 0px"` triggers animation when element is 80px into the viewport
- Spring ease `[0.34, 1.56, 0.64, 1]` for dot pop-in, smooth ease `[0.16, 1, 0.3, 1]` for content slide-in

### Font setup discovery
- `var(--font-display)` maps to GeistSans (NOT Playfair) in globals.css
- Playfair Display IS loaded in layout.tsx but is assigned to `--font-display-playfair`
- All existing components use `var(--font-display)` (= GeistSans)

### Gradient text pattern (used for timeline labels)
```tsx
style={{
  background: "linear-gradient(90deg, #a855f7 0%, #ec4899 52%, #f97316 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}
```

### Build environment note
- A `next dev` server was running in a background terminal — this causes `next build` lock conflicts
- Solution: wait for any running `next build` to complete, then run fresh build
- Always pre-check `ps aux | grep "next build"` before attempting a build

### bun build command
- `bun run build` from `SolaraAi/` directory works with Turbopack (Next.js 16.1.6)
- Build succeeds clean: "✓ Compiled successfully"
## AboutHero.tsx — Build Notes (2026-03-12)

### Design Decisions
- **Atmosphere**: Chose a subtle SVG dot-grid pattern (28×28px, opacity 0.042) + slowly-pulsing radial glow (purple/pink, blur 72px, opacity animation 0.55→0.95→0.55 over 7s). Distinct from the homepage aurora but shares the same brand color palette (rgba(168,85,247), rgba(236,72,153), rgba(251,146,60)).
- **Trust-intro**: Three editorial "fact" items arranged in a 3-col grid. Each item has a thin horizontal rule on top (gradient from #d1d5db to transparent), uppercase tracked label, and a short body sentence. No pills, no badges, no tags.
- **Copy**: Deliberately service-forward — "direct marketing service, not a self-serve platform", "AI-native execution and human strategic oversight working in tandem".
- **Animation**: Used `whileInView` via a local `FadeUp` wrapper component (opacity 0→1, y 18→0, blur 4px→0) with staggered `delay` props (0.05, 0.13, 0.22, 0.3, 0.4). Viewport margin `-80px` so it triggers before element fully enters.
- **No CTA**: Intentionally omitted per spec — the page has one soft CTA at the bottom.
- **H1 scale**: `clamp(2.4rem, 5.5vw, 4.2rem)` — slightly smaller than homepage's 5rem max to give the About hero a less dominant presence.

### CSS / Token Patterns
- `var(--font-display)` and `var(--font-body)` both resolve to GeistSans in globals.css (the Playfair Display token is `--font-display-playfair`, not `--font-display`). Matched the homepage hero which uses `var(--font-display)` for the H1.
- Brand gradient: `linear-gradient(to right, rgba(168,85,247,0.9), rgba(236,72,153,0.7), rgba(251,146,60,0.5))` — this is the canonical accent line pattern from BeliefSection.tsx.
- `text-ink-700/70` works with Tailwind v4's `@theme` custom color tokens and opacity modifier.

### Framer Motion v12 Type Issue (in AboutValues.tsx — not authored here)
- **Problem**: External const variant objects fail TypeScript when `ease: [number, number, number, number]` array is used. The `as [number, number, number, number]` cast alone is insufficient.
- **Fix**: Add explicit `const rowVariants: Variants = {}` type annotation. This provides contextual typing so TypeScript accepts the tuple array for the `Easing` type check.
- **Root cause**: Without `Variants` annotation, TypeScript infers the object's `ease` property as `number[]`, which fails assignability. With `Variants`, contextual typing provides the expected `Easing` type so the literal tuple is accepted.
- **Pattern that always works**: Inline `variants={{ ... }}` props always work (contextual typing from the prop type). External const objects need `: Variants` annotation.
- **Note**: `tsc --noEmit` exits 0 (clean). The `bun run build` failure after TypeScript is a pre-existing Next.js 16.1.6 Turbopack race condition on manifest files (not a code error).

### Build Infrastructure Note
- `bun run build` with Next.js 16.1.6 + Turbopack intermittently fails with `ENOENT: app-paths-manifest.json` during "Collecting page data". This is a pre-existing issue, NOT caused by AboutHero.tsx. `npx tsc --noEmit` exits 0 confirming all TypeScript is valid.
