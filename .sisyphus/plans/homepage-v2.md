# Homepage V2 (`/home-v2`)

## TL;DR
> **Summary**: Build a standalone, full nine-section homepage variant at `/home-v2` in the Stanley Next.js app, using the canonical v7 copy, reusing the section-2 and section-4 preview concepts, and keeping `/` unchanged.
> **Deliverables**:
> - New App Router route at `src/app/home-v2/page.tsx`
> - V2-specific section/components for the full canonical 9-section homepage
> - Dedicated tabs + before/after slider interactions
> - Extended Playwright/Vitest coverage for route structure, responsive behavior, and metadata/SEO
> **Effort**: Large
> **Parallel**: YES - 3 waves
> **Critical Path**: Task 1 → Task 3 → Task 7 → Task 9 → Task 10 → Task 11

## Context
### Original Request
Plan a new homepage v2 inside `/home/yuval/Documents/solaraai/stanley/SolaraAi` as a new standalone route at `/home-v2`, using the supplied SolaraAI Website handoff briefing and preserving the locked pricing, positioning, and visual system.

### Interview Summary
- Scope: full canonical 9-section homepage, not an MVP subset.
- Existing `/` homepage stays unchanged.
- `/home-v2` remains a standalone route; do not wire it into nav or redirects yet.
- Test strategy: tests-after using the repo’s existing Vitest + Playwright stack.
- Strategic wedge is locked: SolaraAI is “AI directs YOU,” not avatars or autopilot.

### Metis Review (gaps addressed)
- Applied default `noindex, nofollow` policy to `/home-v2` because it is intentionally standalone and unlinked for now.
- Applied default CTA routing: conversion CTAs go to `/contact`; demo/proof CTAs use local anchors when the action is in-page.
- Added a hard guardrail against importing preview route pages directly into production code; preview concepts must be adapted into production components.
- Added a hard guardrail to centralize locked copy and banned-claim rules in one v2 content contract.
- Explicitly constrained net-new interaction scope to vertical tabs + before/after slider.

## Work Objectives
### Core Objective
Produce a decision-complete implementation plan for a new `/home-v2` route that ships the exact canonical 9-section homepage variant with the locked SolaraAI positioning, while preserving the current homepage and using the existing Stanley design/motion system wherever possible.

### Deliverables
- `src/app/home-v2/page.tsx` route entrypoint
- `src/app/home-v2/content.ts` (recommended) as the single v2 copy contract
- V2-specific section components and/or section wrappers under a dedicated homepage-v2 component area
- Reused/adapted production implementations of the preview section-2 and section-4 concepts
- New tabs and before/after slider components with accessible keyboard/touch support
- Route-level metadata/schema and route isolation policy
- Route-specific automated coverage for smoke, responsive, metadata, and content constraints

### Definition of Done (verifiable conditions with commands)
- `bun run lint` exits 0.
- `bun run build` exits 0.
- `bun run test` exits 0.
- `bun run test:e2e` targeted to `/home-v2` route coverage exits 0.
- `/home-v2` renders all 9 approved sections in order with exactly one visible `h1`.
- `/home-v2` has no horizontal overflow at 375px and desktop.
- `/home-v2` is not linked from `TopNav` or homepage internal links.
- `/home-v2` contains the locked prices (`$99`, `$69`, `$828`, `30%`) and excludes banned claims.
- `/home-v2` sets `noindex, nofollow` while the route remains standalone.

### Must Have
- Full canonical section order from `newest_website_copy_v7.txt`
- Hero headline: “Your business has a director now.”
- Section 02 adapted from `section-2-v6`
- Section 04 adapted from `section-4-bridge`
- Mobile-first layouts verified at 375px and desktop
- SHELL / INK / ROSE_DEEP / FlickeringGrid visual DNA
- Existing footer retained unless route composition makes a deliberate wrapper unnecessary
- Section-level `data-testid` hooks:
  - `home-v2-hero`
  - `home-v2-teardown`
  - `home-v2-showcase`
  - `home-v2-bridge`
  - `home-v2-craft`
  - `home-v2-comparison`
  - `home-v2-pricing`
  - `home-v2-faq`
  - `home-v2-close`
  - `home-v2-hero-proof`
  - `home-v2-showcase-tabs`
  - `home-v2-before-after-slider`

### Must NOT Have (guardrails, AI slop patterns, scope boundaries)
- No edits to `src/app/page.tsx`
- No nav/footer link introducing `/home-v2`
- No founder section
- No fake testimonials, fake customer counts, or fabricated case studies
- No “AI slop,” “spatial onboarding,” “foot traffic,” or “press record once” language
- No restaurant-only framing
- No AI hype copy (GPT, neural network, machine learning, etc.)
- No dependency sprawl for tabs/slider unless an existing in-repo primitive is clearly insufficient
- No generic landing-page abstraction project
- No analytics, CMS, or experiment plumbing in this scope

## Verification Strategy
> ZERO HUMAN INTERVENTION - all verification is agent-executed.
- Test decision: tests-after using Vitest (`vitest.config.ts`) and Playwright (`playwright.config.ts`)
- QA policy: Every task includes agent-executed scenarios and evidence capture paths.
- Evidence: `.sisyphus/evidence/task-{N}-{slug}.{ext}`

## Execution Strategy
### Parallel Execution Waves
> Target: 5-8 tasks per wave. Extract shared dependencies early.

Wave 1: Contract + route scaffold + shared primitives foundation (Tasks 1-3)

Wave 2: Section implementation in parallel where dependencies allow (Tasks 4-8)

Wave 3: Final composition + route-level QA hardening (Tasks 9-11)

### Dependency Matrix (full, all tasks)
| Task | Blocks | Blocked By |
|---|---|---|
| 1 | 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 | None |
| 2 | 4, 5, 6, 7, 8, 9 | 1 |
| 3 | 4, 5, 6, 7, 8, 9 | 1 |
| 4 | 9 | 1, 2, 3 |
| 5 | 9 | 1, 2, 3 |
| 6 | 9 | 1, 2, 3 |
| 7 | 9 | 1, 2, 3 |
| 8 | 9 | 1, 2, 3 |
| 9 | 10, 11 | 4, 5, 6, 7, 8 |
| 10 | 11 | 9 |
| 11 | Final verification | 9, 10 |

### Agent Dispatch Summary (wave → task count → categories)
- Wave 1 → 3 tasks → `deep`, `visual-engineering`, `visual-engineering`
- Wave 2 → 5 tasks → `visual-engineering` x5
- Wave 3 → 3 tasks → `visual-engineering`, `unspecified-high`, `visual-engineering`

## TODOs
> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.

- [x] 1. Lock the `/home-v2` content contract, selector map, and route policy

  **What to do**: Create the single source of truth for homepage-v2 content (recommended: `src/app/home-v2/content.ts`) and define the exact 9-section order, locked text constants, banned phrase list, CTA destination map, and required `data-testid` values before any UI work starts. Apply the route policy defaults in this contract: `/home-v2` is standalone, `noindex, nofollow`, self-canonical to `/home-v2`, excluded from sitemap/nav, and all conversion CTAs use `/contact` unless the interaction is explicitly in-page.
  **Must NOT do**: Do not spread locked copy across section files. Do not improvise pricing, claims, customer proof, or extra sections. Do not invent assets beyond explicit placeholders.

  **Recommended Agent Profile**:
  - Category: `deep` - Reason: This is the decision-locking task that removes ambiguity for every downstream implementation step.
  - Skills: [`nextjs-web-craft`, `harden`] - `nextjs-web-craft` for route/content organization; `harden` for constraint enforcement and edge-case thinking.
  - Omitted: [`frontend-design`] - Reason: this task is contract-first, not visual implementation.

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 | Blocked By: none

  **References** (executor has NO interview context - be exhaustive):
  - Copy contract: `newest_website_copy_v7.txt:7-25` - locked parameters and banned claims.
  - Canonical section order/copy: `newest_website_copy_v7.txt:27-480` - all 9 sections in approved order.
  - Current homepage route conventions: `src/app/page.tsx:23-51` - metadata structure pattern.
  - Existing route composition style: `src/app/page.tsx:53-119` - top-level page composition using shared sections.
  - Existing SEO validation expectations: `e2e/seo-validation.spec.ts:11-45` and `e2e/seo-validation.spec.ts:119-154` - route config + meta/canonical assertions.
  - Existing smoke expectations: `e2e/smoke-all-pages.spec.ts:37-53` - one `h1`, footer visible, no runtime errors.

  **Acceptance Criteria** (agent-executable only):
  - [ ] A single `content.ts` (or equivalent) enumerates all 9 sections in this exact order: Hero, Teardown, Showcase, Walkthrough/Bridge, Before/After, Comparison, Pricing, FAQ, Close.
  - [ ] The contract explicitly stores these route defaults:
    - `robots = noindex,nofollow`
    - canonical = `https://solaraai.com/home-v2`
    - hero primary CTA = `/contact`
    - hero secondary CTA = `#home-v2-hero-proof`
    - showcase CTA = `#home-v2-showcase`
    - before/after CTA = `#home-v2-showcase`
    - comparison CTA = `/contact`
    - pricing CTA(s) = `/contact`
    - FAQ human CTA = `/contact`
    - close CTA = `/contact`
  - [ ] The contract explicitly fixes the only two italic-navy accents on the page:
    - Hero headline emphasis on `director now`
    - Bridge/close callback emphasis on `Solara replaces`
  - [ ] The contract contains the banned phrases/claims list and placeholder rules for sample-only proof.
  - [ ] The contract defines all required section and interaction `data-testid`s.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Content contract matches the canonical brief
    Tool: Bash
    Steps: Run `bun run test -- --runInBand src/app/home-v2/content.test.ts` (or Vitest-equivalent targeted command) after adding a spec that asserts 9 sections, locked prices, CTA map, and banned-phrase exclusions.
    Expected: The targeted content contract spec passes and proves the centralized contract is complete.
    Evidence: .sisyphus/evidence/task-1-content-contract.txt

  Scenario: Route policy defaults are encoded before UI composition
    Tool: Bash
    Steps: Run the same targeted contract spec and assert `robots`, canonical, CTA hrefs, and `data-testid` names are exported from the contract.
    Expected: The route policy values are statically testable and pass without relying on manual inspection.
    Evidence: .sisyphus/evidence/task-1-route-policy.txt
  ```

  **Commit**: YES | Message: `feat(home-v2): lock content and route contract` | Files: `src/app/home-v2/content.ts`, `src/app/home-v2/content.test.ts`

- [x] 2. Scaffold the standalone `/home-v2` App Router page and metadata shell

  **What to do**: Create `src/app/home-v2/page.tsx` as the new standalone route entrypoint and wire it to the content contract, metadata, JSON-LD, `TopNav`, and `Footer` while keeping `/` untouched. Keep the route server-first; only interactive leaf sections should use client components.
  **Must NOT do**: Do not edit `src/app/page.tsx`. Do not add `/home-v2` to `TopNav`, footer columns, homepage links, sitemap generation, or redirects. Do not make the route fully client-rendered.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: App Router scaffolding plus layout/metadata wiring.
  - Skills: [`nextjs-web-craft`, `frontend-design`] - `nextjs-web-craft` for App Router patterns; `frontend-design` for clean page composition.
  - Omitted: [`redesign-existing-projects`] - Reason: this is route scaffolding, not broad UI refactoring.

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: 4, 5, 6, 7, 8, 9 | Blocked By: 1

  **References** (executor has NO interview context - be exhaustive):
  - Existing route metadata pattern: `src/app/page.tsx:23-51`
  - Existing JSON-LD pattern: `src/app/page.tsx:59-96`
  - Current homepage structure: `src/app/page.tsx:53-119`
  - Top navigation component: `src/components/LandingSections.tsx:25-32` and `src/components/LandingSections.tsx:134-212`
  - Existing contact CTA convention in nav: `src/components/LandingSections.tsx:188-197`
  - Footer component: `src/components/Footer.tsx:92-159`
  - Playwright web server/base URL config: `playwright.config.ts:3-20`

  **Acceptance Criteria** (agent-executable only):
  - [ ] `src/app/home-v2/page.tsx` exists and loads at `/home-v2`.
  - [ ] The route includes one visible `h1`, route metadata, JSON-LD, canonical, and a robots `noindex,nofollow` signal.
  - [ ] `TopNav` and `Footer` render on `/home-v2` unless a route-local reason requires omission; if omitted, smoke coverage must be intentionally updated.
  - [ ] No files that power `/` navigation or link discovery are changed to expose `/home-v2`.
  - [ ] `bun run build` passes after the scaffold exists.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: /home-v2 loads as a real route with the right structural shell
    Tool: Playwright
    Steps: Open `/home-v2`; assert a 200 response, one visible `h1`, visible `header nav`, and visible `footer`.
    Expected: The route loads cleanly with no console/page errors and with the shared shell intact.
    Evidence: .sisyphus/evidence/task-2-route-shell.png

  Scenario: /home-v2 is isolated from public site navigation
    Tool: Playwright
    Steps: Open `/`; collect all internal `a[href]` values the same way `e2e/smoke-all-pages.spec.ts` does; verify `/home-v2` is absent.
    Expected: `/home-v2` is reachable directly but not discoverable via existing homepage navigation/link lists.
    Evidence: .sisyphus/evidence/task-2-route-isolation.txt
  ```

  **Commit**: YES | Message: `feat(home-v2): scaffold route and metadata shell` | Files: `src/app/home-v2/page.tsx`, metadata/JSON-LD helpers if needed

- [x] 3. Build the v2 shared primitives layer without refactoring the current homepage

  **What to do**: Create a small v2-specific primitives layer (recommended: `src/components/homepage-v2/` or similar) that wraps the established editorial tokens, section spacing, `FlickeringGrid`, `Eyebrow`, and reveal motion so the new page can stay consistent without importing preview pages directly. Extract only the primitives needed for v2.
  **Must NOT do**: Do not turn this into a repo-wide design-system rewrite. Do not move or rename existing current-homepage components just for cleanliness. Do not hardcode duplicate color tokens when the existing teardown constants already define them.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: shared frontend primitives for a single new route.
  - Skills: [`frontend-design`, `redesign-existing-projects`] - `frontend-design` for editorial quality; `redesign-existing-projects` for adapting proven patterns cleanly.
  - Omitted: [`nextjs-web-craft`] - Reason: this is component-level reuse, not route architecture.

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: 4, 5, 6, 7, 8, 9 | Blocked By: 1

  **References** (executor has NO interview context - be exhaustive):
  - Token exports: `src/components/homepage/teardown-parts.tsx:25-37`
  - `FlickeringGrid`: `src/components/homepage/teardown-parts.tsx:41-159`
  - `Eyebrow`: `src/components/homepage/teardown-parts.tsx:206-229`
  - `ScrollReveal`: `src/components/homepage/teardown-parts.tsx:232-259`
  - Visual/motion context from preview section 2: `src/app/preview/section-2-v6/page.tsx:119-220`
  - Accordion motion pattern: `src/components/ContactFaq.tsx:51-100`

  **Acceptance Criteria** (agent-executable only):
  - [ ] A v2 primitives file/folder exists and is the only place new shared v2 wrappers are introduced.
  - [ ] The primitives layer reuses existing token exports (`INK`, `SHELL`, `ROSE_DEEP`, `HAIRLINE`, etc.) instead of duplicating new theme constants.
  - [ ] No production component imports `src/app/preview/**/page.tsx`.
  - [ ] New v2 sections can use shared wrappers for eyebrow/headline/body/reveal/background without copy-pasting large preview chunks.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: The new primitives compile and are production-safe
    Tool: Bash
    Steps: Run `bun run build` after creating the v2 primitives layer and any import rewiring needed by `/home-v2`.
    Expected: The build passes with no circular preview-route imports or type errors.
    Evidence: .sisyphus/evidence/task-3-primitives-build.txt

  Scenario: No preview route page is imported into production code
    Tool: Bash
    Steps: Add a targeted test or static assertion that fails if imports reference `src/app/preview/` from production components; run `bun run test`.
    Expected: Tests pass and prove preview concepts were adapted, not route-coupled.
    Evidence: .sisyphus/evidence/task-3-no-preview-imports.txt
  ```

  **Commit**: YES | Message: `feat(home-v2): add shared v2 primitives` | Files: `src/components/homepage-v2/**`

- [x] 4. Implement Section 01 Hero with proof tile, trust strip, and anchorable demo surface

  **What to do**: Build the v2 hero using the locked copy, one above-fold proof tile labeled as sample work, a primary conversion CTA to `/contact`, a secondary demo CTA targeting the in-page proof/demo surface, and the trust strip. Keep the hero editorial and mobile-first; use only one of the two allowed italic-navy accents here (`director now`).
  **Must NOT do**: Do not reuse the old “autonomous social media team” framing. Do not insert fake counters or testimonials. Do not exceed the accent-budget rule.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: hero design, proof presentation, and responsive layout.
  - Skills: [`frontend-design`, `adapt`, `clarify`] - `frontend-design` for impact, `adapt` for 375px integrity, `clarify` for precise information hierarchy.
  - Omitted: [`animate`] - Reason: motion should stay subordinate to clarity here.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 9 | Blocked By: 1, 2, 3

  **References** (executor has NO interview context - be exhaustive):
  - Hero copy: `newest_website_copy_v7.txt:31-73`
  - Current homepage hero mount: `src/app/page.tsx:98-105`
  - Existing shell usage of `TopNav`: `src/app/page.tsx:56-58`
  - Token/motion primitives: `src/components/homepage/teardown-parts.tsx:25-37` and `src/components/homepage/teardown-parts.tsx:232-259`

  **Acceptance Criteria** (agent-executable only):
  - [ ] The hero renders under `data-testid="home-v2-hero"`.
  - [ ] The visible `h1` is exactly “Your business has a director now.”
  - [ ] The proof/demo tile renders under `data-testid="home-v2-hero-proof"` and is visibly labeled as sample/example work.
  - [ ] The primary CTA points to `/contact`.
  - [ ] The secondary CTA targets the proof/demo surface by anchor or equivalent in-page behavior.
  - [ ] The trust strip shows: `No credit card`, `Setup in 10 minutes`, `Cancel anytime`.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Hero content and CTA wiring are correct on mobile and desktop
    Tool: Playwright
    Steps: Open `/home-v2` at 390x844 and 1440x900; assert `[data-testid="home-v2-hero"]`, `[data-testid="home-v2-hero-proof"]`, the exact h1 text, a primary CTA href of `/contact`, and the trust strip text.
    Expected: The hero is visible, unclipped, and CTA wiring matches the contract at both viewports.
    Evidence: .sisyphus/evidence/task-4-hero.png

  Scenario: Hero remains free of banned proof patterns
    Tool: Playwright
    Steps: Query hero text and verify no founder block, fake testimonial, or live customer number appears unless explicitly placeholder-labeled.
    Expected: Hero proof remains sample-labeled and policy-compliant.
    Evidence: .sisyphus/evidence/task-4-hero-guardrails.txt
  ```

  **Commit**: YES | Message: `feat(home-v2): implement hero and proof tile` | Files: `src/components/homepage-v2/hero*`, related route composition

- [x] 5. Adapt Section 02 Teardown from the approved preview into a production section

  **What to do**: Rebuild the section-2-v6 concept as a production-ready teardown section inside `/home-v2`, preserving the case-file structure, exhibit arithmetic, `InvoiceCard`, `ToolsGrid`, `ToolsMarquee`, verdict, and bridge line. Keep the copy aligned to v7, but render the teardown in plain ink because the two italic-navy accents are reserved elsewhere in the page contract.
  **Must NOT do**: Do not import the preview route page. Do not rename the core teardown argument. Do not add competitor callouts beyond the approved toolkit/agency framing.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: adaptation of an existing high-fidelity preview into production code.
  - Skills: [`frontend-design`, `redesign-existing-projects`] - best fit for adaptation without regression.
  - Omitted: [`adapt`] - Reason: responsive quality still matters, but the primary challenge is faithful adaptation.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 9 | Blocked By: 1, 2, 3

  **References** (executor has NO interview context - be exhaustive):
  - Canonical teardown copy: `newest_website_copy_v7.txt:75-122`
  - Preview route source: `src/app/preview/section-2-v6/page.tsx:119-220`
  - Existing imported teardown pieces: `src/app/preview/section-2-v6/page.tsx:3-22`
  - Token/motion primitives: `src/components/homepage/teardown-parts.tsx:25-37` and `src/components/homepage/teardown-parts.tsx:232-259`

  **Acceptance Criteria** (agent-executable only):
  - [ ] The section renders under `data-testid="home-v2-teardown"`.
  - [ ] Exhibit A includes `$2,000/month for instructions.` and `$24,000 a year. For someone to hand you a shot list.`
  - [ ] Exhibit B includes `$150–600/month for auto-complete.` and `5 subscriptions. 3 logins. Still no posts.`
  - [ ] `InvoiceCard`, `ToolsGrid`, and `ToolsMarquee` (or production-equivalent adaptations) are present.
  - [ ] The section ends with the approved bridge line: `That's the gap Solara was built for.`

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Teardown section preserves the arithmetic and exhibit structure
    Tool: Playwright
    Steps: Open `/home-v2`; scroll to `[data-testid="home-v2-teardown"]`; assert both exhibit headings, both arithmetic lines, and the bridge line are visible.
    Expected: The teardown reads as the approved two-exhibit case file and matches the v7 copy.
    Evidence: .sisyphus/evidence/task-5-teardown.png

  Scenario: Teardown remains mobile-safe
    Tool: Playwright
    Steps: Open `/home-v2` at 375px width; verify no horizontal overflow and that the exhibit content stacks without clipped text or overflowing cards.
    Expected: Section 02 remains readable and overflow-free on mobile.
    Evidence: .sisyphus/evidence/task-5-teardown-mobile.png
  ```

  **Commit**: YES | Message: `feat(home-v2): adapt teardown section` | Files: `src/components/homepage-v2/teardown*`

- [x] 6. Adapt Section 04 Walkthrough/Bridge from the approved preview into a production section

  **What to do**: Rebuild the section-4-bridge concept as the production walkthrough/bridge section for `/home-v2`, including the two-column bridge introduction, the 5 numbered scenes, the 10 production credits, the time totals, director’s note, and the closing callback. Preserve the editorial framing and reuse the existing phone/mockup language where appropriate.
  **Must NOT do**: Do not simplify the workflow into “press record once.” Do not omit the human-in-loop implications. Do not burn time rebuilding phone primitives that already exist.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: high-detail visual adaptation with structured workflow content.
  - Skills: [`frontend-design`, `redesign-existing-projects`, `adapt`] - design fidelity plus responsive control for a complex section.
  - Omitted: [`harden`] - Reason: accessibility hardening is handled more explicitly later unless a blocker appears here.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 9 | Blocked By: 1, 2, 3

  **References** (executor has NO interview context - be exhaustive):
  - Canonical bridge copy: `newest_website_copy_v7.txt:188-245`
  - Preview bridge scene data and production credits seed: `src/app/preview/section-4-bridge/page.tsx:29-131`
  - Preview bridge tokens/imports: `src/app/preview/section-4-bridge/page.tsx:13-27`
  - Existing phone frame helper import pattern: `src/app/preview/section-4-bridge/page.tsx:27`

  **Acceptance Criteria** (agent-executable only):
  - [ ] The section renders under `data-testid="home-v2-bridge"`.
  - [ ] The intro uses the approved “bridge between AI and authentic content” framing.
  - [ ] All 5 scene rows are visible and ordered 01-05.
  - [ ] All 10 production-credit items are present.
  - [ ] Time totals and the closer line `You already have everything except the part Solara replaces.` are present.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Bridge section contains the full 5-scene walkthrough and production credits
    Tool: Playwright
    Steps: Open `/home-v2`; scroll to `[data-testid="home-v2-bridge"]`; count scene markers 01-05 and production credit pills/items 10.
    Expected: The full walkthrough and all ten downstream production jobs are visible.
    Evidence: .sisyphus/evidence/task-6-bridge.png

  Scenario: Bridge section preserves timing/value framing
    Tool: Playwright
    Steps: Assert the presence of `5 min 21 sec`, `~3 hours`, the director’s note, and the closer callback text.
    Expected: The section keeps the time arithmetic and value translation intact.
    Evidence: .sisyphus/evidence/task-6-bridge-copy.txt
  ```

  **Commit**: YES | Message: `feat(home-v2): adapt walkthrough bridge section` | Files: `src/components/homepage-v2/bridge*`

- [x] 7. Build Section 03 Showcase with accessible vertical-industry tabs and sample output cards

  **What to do**: Implement the new showcase section as a controlled, accessible tabs experience with at least the six initial industries from the copy (`Pizza Shop`, `Salon`, `Gym`, `Coffee Shop`, `Dental`, `Realtor`). Each tab must swap the sample brief and the four output cards while staying mobile-first and horizontally scrollable on smaller screens.
  **Must NOT do**: Do not present sample work as real customer proof. Do not build a generic tabs framework for the whole repo. Do not hide tab state in URL params for this standalone route.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: this is one of the two intentional net-new interaction builds.
  - Skills: [`frontend-design`, `adapt`, `harden`] - design quality, mobile usability, and keyboard/touch behavior all matter here.
  - Omitted: [`nextjs-web-craft`] - Reason: route architecture is already set.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 9 | Blocked By: 1, 2, 3

  **References** (executor has NO interview context - be exhaustive):
  - Canonical showcase copy: `newest_website_copy_v7.txt:123-187`
  - Bridge scene structure to reuse for the brief card language: `newest_website_copy_v7.txt:144-179`
  - Existing motion/eyebrow utilities: `src/components/homepage/teardown-parts.tsx:206-259`
  - Mobile accordion/toggle animation reference: `src/components/ContactFaq.tsx:51-100`
  - Mobile viewport expectations: `e2e/mobile-responsiveness.spec.ts:24-28` and `e2e/mobile-responsiveness.spec.ts:70-87`

  **Acceptance Criteria** (agent-executable only):
  - [ ] The section renders under `data-testid="home-v2-showcase"`.
  - [ ] The tablist renders under `data-testid="home-v2-showcase-tabs"` and exposes six initial industries.
  - [ ] Tabs are keyboard-usable (`role="tablist"`, `role="tab"`, `aria-selected`) and touch-usable.
  - [ ] Each selected tab swaps both the brief card and the associated output-card labels.
  - [ ] The sample disclaimer states the work is illustrative/sample output, not a real customer campaign.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Industry tabs change content and preserve accessibility semantics
    Tool: Playwright
    Steps: Open `/home-v2`; focus the first tab in `[data-testid="home-v2-showcase-tabs"]`; use keyboard navigation to move to another industry; assert `aria-selected` changes and the brief text updates.
    Expected: Tabs are accessible, stateful, and content changes are visible without layout breakage.
    Evidence: .sisyphus/evidence/task-7-showcase-tabs.txt

  Scenario: Showcase remains usable on narrow mobile widths
    Tool: Playwright
    Steps: Open `/home-v2` at 375px; verify the tab row is horizontally scrollable/usable, no clipping occurs, and the sample brief plus 4 output cards remain readable.
    Expected: The showcase works as a first-class mobile section.
    Evidence: .sisyphus/evidence/task-7-showcase-mobile.png
  ```

  **Commit**: YES | Message: `feat(home-v2): add industry showcase tabs` | Files: `src/components/homepage-v2/showcase*`

- [x] 8. Build Section 05 Before/After slider and Section 06 Comparison together

  **What to do**: Implement the second intentional net-new interaction (before/after slider) and pair it with the direct comparison section. The slider must compare raw vs polished output using the approved captions; the comparison section must render the approved 3-column matrix and stack gracefully on mobile.
  **Must NOT do**: Do not use avatars, fake faces, stock-owner imagery, or unapproved “AI slop” messaging. Do not add carousel libraries or extra interaction systems outside what the slider specifically needs.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: this task mixes one complex interaction with a dense, high-conversion comparison layout.
  - Skills: [`frontend-design`, `adapt`, `harden`] - interaction polish plus responsive/accessibility robustness.
  - Omitted: [`animate`] - Reason: motion is useful, but correctness and clarity are the primary success criteria.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 9 | Blocked By: 1, 2, 3

  **References** (executor has NO interview context - be exhaustive):
  - Before/after copy: `newest_website_copy_v7.txt:247-280`
  - Comparison copy: `newest_website_copy_v7.txt:281-338`
  - Existing comparison section file for structural inspiration: `src/components/homepage/ComparisonSection.tsx`
  - Existing mobile overflow assertions: `e2e/mobile-responsiveness.spec.ts:70-87`
  - Existing single-h1/footer/runtime-error smoke pattern: `e2e/smoke-all-pages.spec.ts:37-53`

  **Acceptance Criteria** (agent-executable only):
  - [ ] The craft section renders under `data-testid="home-v2-craft"` and the interactive compare under `data-testid="home-v2-before-after-slider"`.
  - [ ] The slider exposes a visible handle and a keyboard-focusable interaction target.
  - [ ] The three approved anti-fake/anti-avatar captions are visible below the slider.
  - [ ] The comparison section renders under `data-testid="home-v2-comparison"` with the approved 3-column matrix and year-1 totals.
  - [ ] Mobile layout stacks comparison content without horizontal overflow.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Before/after slider is interactive and policy-compliant
    Tool: Playwright
    Steps: Open `/home-v2`; drag or keyboard-adjust `[data-testid="home-v2-before-after-slider"]`; confirm the handle moves and the raw/polished labels remain visible along with the three approved captions.
    Expected: The slider interaction works without console errors and uses the approved copy.
    Evidence: .sisyphus/evidence/task-8-slider.png

  Scenario: Comparison section remains readable and overflow-free on mobile
    Tool: Playwright
    Steps: Open `/home-v2` at 375px; scroll to `[data-testid="home-v2-comparison"]`; assert the section is visible, stacked/readable, and that document width does not exceed viewport width.
    Expected: The comparison converts the dense matrix into a mobile-safe presentation.
    Evidence: .sisyphus/evidence/task-8-comparison-mobile.png
  ```

  **Commit**: YES | Message: `feat(home-v2): add craft slider and comparison` | Files: `src/components/homepage-v2/craft*`, `src/components/homepage-v2/comparison*`

- [x] 9. Build Sections 07-09 and compose the full canonical page

  **What to do**: Implement the Pricing, FAQ, and Close sections with their locked copy and then compose the final page in canonical order: 01 Hero → 02 Teardown → 03 Showcase → 04 Bridge → 05 Before/After → 06 Comparison → 07 Pricing → 08 FAQ → 09 Close. Retain the shared `TopNav` and `Footer`, ensure the route remains standalone, and keep the accent budget capped to the two contract-approved placements only.
  **Must NOT do**: Do not leave sections in placeholder order. Do not exceed the two italic-navy accents fixed in Task 1 (`director now`, `Solara replaces`). Do not reuse the old multi-plan pricing model.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: final page composition plus three bottom-funnel sections.
  - Skills: [`frontend-design`, `adapt`, `clarify`] - composition quality, mobile integrity, and copy clarity.
  - Omitted: [`redesign-existing-projects`] - Reason: this stage is page assembly, not conceptual adaptation.

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: 10, 11 | Blocked By: 4, 5, 6, 7, 8

  **References** (executor has NO interview context - be exhaustive):
  - Pricing copy: `newest_website_copy_v7.txt:339-393`
  - FAQ copy: `newest_website_copy_v7.txt:394-447`
  - Close copy: `newest_website_copy_v7.txt:449-480`
  - Existing pricing section for current contact CTA conventions: `src/components/PricingSection.tsx:105-125`
  - Existing accordion pattern: `src/components/ContactFaq.tsx:109-158`
  - Existing footer structure: `src/components/Footer.tsx:92-159`
  - Existing nav structure: `src/components/LandingSections.tsx:134-212`

  **Acceptance Criteria** (agent-executable only):
  - [ ] The pricing section renders under `data-testid="home-v2-pricing"` with exactly two cards: Monthly `$99` and Annual `$69`, plus the `$828/yr` and `Save 30% — equals 2.5 months free.` language.
  - [ ] The pricing section includes all 8 approved included-items and the risk-reversal strip.
  - [ ] The FAQ section renders under `data-testid="home-v2-faq"` with exactly 6 questions and one-open-at-a-time behavior.
  - [ ] The close section renders under `data-testid="home-v2-close"` with the exact headline `Your first scene starts now.` and CTA href `/contact`.
  - [ ] The full page contains all 9 sections in the canonical order and still keeps `/home-v2` absent from top-nav/footer/homepage discoverability.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Bottom-funnel sections match the locked conversion contract
    Tool: Playwright
    Steps: Open `/home-v2`; assert the pricing card values, FAQ item count of 6, close CTA href `/contact`, and the close trust strip values.
    Expected: Pricing, FAQ, and Close are complete and copy-accurate.
    Evidence: .sisyphus/evidence/task-9-bottom-funnel.png

  Scenario: Canonical section order is correct across the full page
    Tool: Playwright
    Steps: Query the DOM in order for the nine section testids; verify their order matches the canonical sequence.
    Expected: The final page composes sections in the exact approved order with no omissions.
    Evidence: .sisyphus/evidence/task-9-section-order.txt
  ```

  **Commit**: YES | Message: `feat(home-v2): compose pricing faq close and final page` | Files: `src/components/homepage-v2/pricing*`, `faq*`, `close*`, `src/app/home-v2/page.tsx`

- [ ] 10. Extend automated tests for `/home-v2` across unit, smoke, responsive, and SEO coverage

  **What to do**: Add targeted automated coverage for the new route. Extend existing route arrays where appropriate, but preserve the standalone nature of `/home-v2` by avoiding homepage-link assertions or sitemap exposure. Add a focused unit/content-contract test plus route-level Playwright assertions for structure, overflow, metadata, schema, and banned-copy rules.
  **Must NOT do**: Do not add `/home-v2` to sitemap generation or homepage link-discovery expectations. Do not rely on manual screenshots as the only QA mechanism.

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: this is multi-layer QA work across Vitest and Playwright.
  - Skills: [`playwright`, `harden`, `audit`] - browser QA, robustness, and interface-quality validation.
  - Omitted: [`review-work`] - Reason: the mandatory final review wave already covers post-implementation review separately.

  **Parallelization**: Can Parallel: YES | Wave 3 | Blocks: 11 | Blocked By: 9

  **References** (executor has NO interview context - be exhaustive):
  - Vitest config: `vitest.config.ts:5-18`
  - Playwright config: `playwright.config.ts:3-20`
  - Package scripts: `package.json:6-14`
  - Existing smoke suite: `e2e/smoke-all-pages.spec.ts:5-18` and `e2e/smoke-all-pages.spec.ts:37-53`
  - Existing responsive suite: `e2e/mobile-responsiveness.spec.ts:9-28` and `e2e/mobile-responsiveness.spec.ts:70-87`
  - Existing text-readability/touch-target checks: `e2e/mobile-responsiveness.spec.ts:180-260`
  - Existing SEO suite: `e2e/seo-validation.spec.ts:11-45` and `e2e/seo-validation.spec.ts:119-210`
  - Existing screenshot utility: `e2e/screenshots.spec.ts:3-73`

  **Acceptance Criteria** (agent-executable only):
  - [ ] A targeted Vitest spec exists for the v2 content contract and banned-copy assertions.
  - [ ] Playwright smoke coverage includes `/home-v2` structural assertions.
  - [ ] Playwright responsive coverage includes `/home-v2` at minimum in 375px-equivalent and desktop contexts.
  - [ ] Playwright SEO coverage asserts title, description, canonical, JSON-LD, and no forbidden schema types on `/home-v2`.
  - [ ] A dedicated assertion covers `noindex,nofollow` for `/home-v2`.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: All automated route-level checks pass for /home-v2
    Tool: Bash
    Steps: Run `bun run test` and targeted Playwright commands covering `/home-v2` smoke, responsive, and SEO specs.
    Expected: All targeted automated checks for the route pass with zero failures.
    Evidence: .sisyphus/evidence/task-10-automated-qa.txt

  Scenario: /home-v2 remains isolated from sitemap/public-link expectations
    Tool: Playwright
    Steps: Run the updated smoke/link-integrity coverage and verify `/home-v2` is not required to appear in homepage-discovered links or sitemap assertions.
    Expected: The route is directly testable but not treated as a publicly linked production page.
    Evidence: .sisyphus/evidence/task-10-route-isolation.txt
  ```

  **Commit**: YES | Message: `test(home-v2): extend smoke responsive and seo coverage` | Files: `e2e/**`, `src/app/home-v2/*.test.ts*`

- [ ] 11. Run final hardening for accessibility, motion restraint, and evidence capture

  **What to do**: Perform the last implementation pass for keyboard/focus behavior, reduced-motion handling, overflow cleanup, and screenshot evidence generation for the hero, showcase, craft slider, pricing, and close sections. This task is the code-facing hardening pass before the mandatory multi-agent final verification wave.
  **Must NOT do**: Do not add new sections or change copy strategy here. Do not broaden into full redesign or analytics work.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: final polish remains frontend-heavy and route-specific.
  - Skills: [`adapt`, `harden`, `polish`] - responsive refinement, edge-case handling, and final-detail cleanup.
  - Omitted: [`frontend-design`] - Reason: the design system should already be set; this is a restraint-and-quality pass.

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: Final verification | Blocked By: 9, 10

  **References** (executor has NO interview context - be exhaustive):
  - Existing mobile QA expectations: `e2e/mobile-responsiveness.spec.ts:61-260`
  - Existing screenshot workflow: `e2e/screenshots.spec.ts:3-73`
  - Accordion motion/focus pattern: `src/components/ContactFaq.tsx:51-100`
  - Motion primitives and token usage: `src/components/homepage/teardown-parts.tsx:25-37` and `src/components/homepage/teardown-parts.tsx:232-259`

  **Acceptance Criteria** (agent-executable only):
  - [ ] Tabs and slider are keyboard-focusable with visible focus states.
  - [ ] Reduced-motion users do not get excessive scroll/word/slider motion.
  - [ ] No section produces horizontal overflow or clipped editorial headlines at 375px.
  - [ ] Screenshot evidence exists for the main conversion-critical sections.

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Reduced-motion and keyboard interaction remain usable
    Tool: Playwright
    Steps: Emulate reduced motion if supported in the test suite; tab through the tabs, slider handle, pricing CTA, FAQ toggles, and close CTA.
    Expected: Interactive controls stay operable with visible focus and without motion-dependent failure.
    Evidence: .sisyphus/evidence/task-11-accessibility.txt

  Scenario: Evidence screenshots capture the final route at key sections
    Tool: Playwright
    Steps: Capture 1440px and 390px screenshots for hero, showcase, craft, pricing, and close sections using the route-specific screenshot flow.
    Expected: Evidence files are saved and show the final route without clipping or layout breakage.
    Evidence: .sisyphus/evidence/task-11-screenshots.png
  ```

  **Commit**: YES | Message: `fix(home-v2): harden accessibility and responsive polish` | Files: `/home-v2` components, route-specific test/evidence helpers

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.
- [ ] F1. Plan Compliance Audit — oracle
- [ ] F2. Code Quality Review — unspecified-high
- [ ] F3. Real Manual QA — unspecified-high (+ playwright if UI)
- [ ] F4. Scope Fidelity Check — deep

## Commit Strategy
- Local RED checkpoints are allowed for test-first validation, but commits must be green.
- Recommended commit sequence:
  1. `feat(home-v2): scaffold standalone route contract`
  2. `feat(home-v2): add shared v2 primitives and metadata shell`
  3. `feat(home-v2): adapt teardown and bridge sections`
  4. `feat(home-v2): add showcase tabs and before-after slider`
  5. `feat(home-v2): compose homepage v2 pricing faq and close`
  6. `test(home-v2): extend route smoke responsive and seo coverage`
- Every commit must keep lint/build/relevant tests passing.

## Success Criteria
- `/home-v2` exists as an App Router page and is not linked from the current homepage/nav.
- The page renders all nine approved sections in canonical order.
- Existing preview concepts are reused through production components, not imported route pages.
- The route follows the established Stanley visual system and motion language.
- The route is mobile-safe, accessible for the new interactions, and metadata/schema-complete.
- The route passes lint, build, Vitest, and targeted Playwright coverage.
