
## [2026-03-12] Task: T5 - CaseStudySection Shell

### What was built
- Created `SolaraAi/src/components/CaseStudySection.tsx` as an empty scaffold
- Inserted between `<AdvantageSection />` and `<PricingSection />` in `page.tsx`
- Exported `CaseStudySectionProps` interface (empty, ready for T10 data wiring)

### Section conventions confirmed
- `"use client"` directive required on all section components
- Section wrapper: `<section className="px-6 py-28 sm:px-10">` (py-28 not py-24)
- Inner container: `<div className="mx-auto max-w-6xl">` for two-column layouts
- Heading font: `style={{ fontFamily: "var(--font-display)" }}` — NOT a className
- Card borders: inline `style={{ border: "1px solid #eaecf0" }}`
- No emojis, no whileInView, no motion/react (use framer-motion if needed)

### Verification results
- `bunx tsc --noEmit` → exit 0 (clean)
- Homepage renders without errors — CaseStudySection visible when scrolling
- Mobile overflow check at 390px: scrollWidth === clientWidth (375px), no overflow
- Screenshot saved to `.sisyphus/evidence/task-5-home-shell.png`

### T10 handoff notes
- `CaseStudySectionProps` is currently empty — T10 should extend it with Maison metrics
- The placeholder card at `mt-12` is the target for the real case study content
- "Maison Remodeling Group" text is in a `<p>` inside the bordered card — easy to target in tests
