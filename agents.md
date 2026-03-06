# SolaraAI Website — Agent Index

This file is the canonical reference for AI agents working on this codebase. Read it fully before making any changes.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| React | 19.2.3 |
| Styling | Tailwind CSS v4 (no config file — configured entirely via `globals.css`) |
| Fonts | Playfair Display (display), Helvetica Neue (body) |
| Animation | Framer Motion 12, CSS keyframes |
| 3D | Three.js + @react-three/fiber |
| Language | TypeScript 5 |

No `tailwind.config.ts` exists. All theme tokens are in `src/app/globals.css` under `@theme inline { ... }`.

---

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout — loads fonts, applies body classes
│   ├── page.tsx                 # Home page: TopNav + hero + SectionIndex
│   ├── globals.css              # Tailwind v4 theme + global styles
│   ├── favicon.ico
│   ├── articles/
│   │   ├── page.tsx             # Articles listing page (12 cards + featured)
│   │   └── [slug]/
│   │       ├── page.tsx         # Dynamic article page (server component)
│   │       └── ArticleContent.tsx  # Client component: sticky TOC + article body
│   ├── pricing/
│   │   └── page.tsx             # Pricing page (billing toggle + 4 plans + FAQ + CTA)
│   └── case-study/
│       └── page.tsx             # Placeholder (empty <main />)
├── components/
│   ├── LandingSections.tsx      # TopNav — the only export
│   ├── SectionIndex.tsx         # Fixed left sidebar with 01–06 section list
│   ├── WebGLShader.tsx          # Hero background (WebGL aurora effect)
│   └── RotatingText.tsx         # Hero subtitle rotating animation
└── lib/
    └── articles.ts              # Article data: types + 4 full articles + getArticle() + getAllSlugs()
```

---

## Design System (Tailwind v4 tokens)

All defined in `src/app/globals.css` under `@theme inline`:

```css
--color-white:    #ffffff
--color-shell:    #fafafa   /* page backgrounds, card hover, CTA sections */
--color-fog:      #f1f1f1   /* subtle fills */
--color-line:     #e3e3e3   /* borders, dividers */
--color-ink-700:  #626262   /* secondary text */
--color-ink-900:  #111111   /* primary text, headings, dark elements */
--color-black:    #000000

--font-display:   var(--font-display-playfair), "Times New Roman", serif
--font-body:      "Helvetica Neue", "Helvetica", "Arial", sans-serif
```

**Usage patterns:**
- `bg-shell` — section backgrounds, card hovers
- `border-line` — all borders and dividers
- `text-ink-900` — headings and primary text
- `text-ink-700/60` — muted body text
- `font-[family-name:var(--font-display)]` or `style={{ fontFamily: "var(--font-display-playfair)" }}` — display headings

**Typography scale (headings):**
```tsx
style={{
  fontFamily: "var(--font-display-playfair)",
  fontSize: "clamp(Xrem, Yvw, Zrem)",
}}
```
Always use `clamp()` for fluid heading sizes. Never use Inter, Roboto, or system fonts.

**Uppercase labels:**
```tsx
className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
```

---

## Components

### `TopNav` (`src/components/LandingSections.tsx`)
- Fixed, `z-50`, floats at `top-4`
- Scrolled state: border + `bg-white/82` + `backdrop-blur-xl` + shadow (triggers at `scrollY > 16`)
- Nav links: Home `/`, Case Study `/case-study`, Pricing `/pricing`, Articles `/articles`
- Book A Call CTA: opens `https://calendly.com/ilay-mor-solaraai/30min?utm_source=website&utm_medium=nav_cta&utm_campaign=book-a-call&month=2026-03` in new tab

### `SectionIndex` (`src/components/SectionIndex.tsx`)
- `position: fixed`, left side, vertically centered (`top-1/2 -translate-y-1/2`)
- Vertical list: 01 Signal Map → 06 Reporting (placeholder labels, not yet wired to sections)
- White/blur card with `border-line`, `backdrop-blur-md`
- First item bold/`ink-900`, rest muted `ink-700/50`

### `WebGLShader` (`src/components/WebGLShader.tsx`)
- Hero background WebGL aurora — fills `absolute inset-0`

### `RotatingText` (`src/components/RotatingText.tsx`)
- Rotating subtitle in hero section below the main `h1`

---

## Pages

### Home (`src/app/page.tsx`)
- `TopNav` (fixed)
- Hero section: full-screen, `WebGLShader` bg, Playfair h1 "The new era of marketing", `RotatingText`, two CTAs
  - "Start free trial" → `/contact`
  - "Talk To Our Experts" → `/product`
- `SectionIndex` fixed left

### Pricing (`src/app/pricing/page.tsx`)
- Client component with `BillingPeriod` toggle state: `monthly | quarterly | yearly`
- 4 plans: Starter $29, Pro $69, Premium $119 (featured — dark `ink-900` card with grain overlay), Agency (custom)
- Metrics strip: 4 real stats in a `gap-px bg-line` grid
- FAQ accordion (4 questions)
- CTA footer: `bg-shell`, Playfair heading "Turn your marketing engine on.", Start free trial + Book a call buttons
- CTAs: `https://app.solaraai.com/auth/signup` (new tab), `https://calendly.com/ilay-mor-solaraai/30min` (new tab)

### Articles listing (`src/app/articles/page.tsx`)
- Featured card (first article, full-width split layout)
- 11-card grid: `grid-cols-3`, `gap-x-px gap-y-8 bg-line [&>*]:bg-white border border-line`
- Author chip: Yuval Strutti avatar `https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/690750f26031dfaacaf32be1_iV_Hy7-_vh6qz7lMknoxU%20(1).jpg`, `h-6 w-6 rounded-full`
- Tag colors: Comparison `bg-fog`, Guide `bg-amber-50`, Strategy `bg-rose-50`, Trends `bg-stone-100`
- Internal links (4 built articles): `/articles/best-ai-marketing-tools`, `/articles/ai-marketing-automation-trends`, `/articles/best-ai-ad-generators`, `/articles/top-ugc-video-editing-apps`
- Remaining 8 articles still link to `solaraai.com/blog/...`

### Article page (`src/app/articles/[slug]/page.tsx`)
- Server component — `async`, awaits `params: Promise<{ slug: string }>`
- `generateStaticParams()` from `getAllSlugs()`
- Layout: `TopNav` → full-width thumbnail (no fixed height, `width=1200 height=630`) → `ArticleContent` → CTA footer
- CTA footer same as pricing page

### `ArticleContent` (`src/app/articles/[slug]/ArticleContent.tsx`)
- Client component — handles scroll tracking for TOC + progress bar
- Two-column layout: sticky TOC (left, `xl:w-56`) + article body (right)
- TOC: `IntersectionObserver` on `[data-heading]` elements, active item gets `ink-900` left bar
- Progress bar below TOC: `scrollY / (scrollHeight - innerHeight)`
- Article header (inside right column): tag pill, read time, date, Playfair title, excerpt, Yuval avatar chip — no border-top on author row
- Content renderer handles: `paragraph`, `heading`, `subheading`, `list`, `callout`, `tool`
- Tool cards: image on top (`rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-none`, no `overflow-hidden` on card), then `p-6` content div, features with checkmarks, pricing strip at bottom

---

## Article Data (`src/lib/articles.ts`)

### Types
```ts
export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "tool"; number: number; name: string; description: string; features: string[]; pricing: string; image?: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tag: string;
  thumbnail: string;
  content: ArticleSection[];
}
```

### Helper functions
```ts
getArticle(slug: string): Article | undefined
getAllSlugs(): string[]
```

### Built articles (4)
| Slug | Title | Tag | Date |
|---|---|---|---|
| `best-ai-marketing-tools` | 8 Best AI Marketing Tools for Smarter Campaigns | Comparison | Nov 17, 2025 |
| `ai-marketing-automation-trends` | Top 8 AI Marketing Automation Trends to Watch in 2025 | Trends | Nov 11, 2025 |
| `best-ai-ad-generators` | 8 Best AI Ad Generators for High-Converting Campaigns in 2025 | Comparison | Oct 28, 2025 |
| `top-ugc-video-editing-apps` | Top 8 UGC Video Editing Apps for Content Creators [2026] | Comparison | Nov 20, 2025 |

All article thumbnails hosted at `cdn.prod.website-files.com`. Domain is whitelisted in `next.config.ts`.

---

## External Links & CTAs

| Purpose | URL |
|---|---|
| Sign up | `https://app.solaraai.com/auth/signup` |
| Book a call (nav) | `https://calendly.com/ilay-mor-solaraai/30min?utm_source=website&utm_medium=nav_cta&utm_campaign=book-a-call&month=2026-03` |
| Book a call (generic) | `https://calendly.com/ilay-mor-solaraai/30min` |
| Original site | `https://solaraai.com` |
| Original blog | `https://solaraai.com/blog` |

---

## Brand Context

**Company:** SolaraAI — autonomous AI marketing platform  
**Tagline:** AI That Runs Your Marketing on auto-pilot  
**Value prop:** Full marketing department in software — plans, creates, executes, and improves end-to-end

**Key metrics from real clients:**
- 50 hrs/week saved (avg client)
- 67.3% CTR increase across campaigns
- 3× ROI on same ad budget
- 80% increase in conversions
- 38% sales increase in 30 days (Omer, Maison Remodeling)

**Real clients:** Sharon Regev Tours, LEAD Ogilvy, Ness Digital Engineering, Recoverli, RE/MAX, Dentaluxe, Rose Poet, Fortitude Boxing, Northlane Renovations, Citrus & Clay Skincare, PeakForm Fitness, JD Ward Law Office, Maison Remodeling Group

**Core products:** Website Foundation, Autonomous SEO, Avatar Twin (AI video presenter), AI Voice Secretary

**Author for all articles:** Yuval Strutti  
Avatar: `https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/690750f26031dfaacaf32be1_iV_Hy7-_vh6qz7lMknoxU%20(1).jpg`

---

## Next.js Config (`next.config.ts`)

```ts
images: {
  remotePatterns: [{ protocol: "https", hostname: "cdn.prod.website-files.com" }]
}
```

To add more external image domains, add entries to `remotePatterns`.

---

## Common Patterns

### Adding a new article
1. Add an `Article` object to the array in `src/lib/articles.ts`
2. Update `src/app/articles/page.tsx` — change the article's `href` from the external URL to `/articles/[slug]`
3. The `[slug]/page.tsx` dynamic route picks it up automatically via `generateStaticParams`

### Adding a new page
1. Create `src/app/[route]/page.tsx`
2. Import `TopNav` from `@/components/LandingSections`
3. Follow the pattern: `TopNav` → content sections → CTA footer (`bg-shell`, Playfair heading, two CTA buttons)

### CTA footer (reusable pattern)
```tsx
<section className="border-t border-line bg-shell px-6 py-20 text-center sm:px-10">
  <h2 style={{ fontFamily: "var(--font-display-playfair)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
      className="mx-auto max-w-xl leading-tight tracking-[-0.015em]">
    Turn your marketing engine on.
  </h2>
  <p className="mx-auto mt-4 max-w-sm text-[0.88rem] text-ink-700/60">
    Start free. No credit card required.
  </p>
  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
    <a href="https://app.solaraai.com/auth/signup" target="_blank" rel="noopener noreferrer"
       className="inline-flex items-center rounded-xl bg-ink-900 px-7 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90">
      Start free trial
    </a>
    <a href="https://calendly.com/ilay-mor-solaraai/30min" target="_blank" rel="noopener noreferrer"
       className="inline-flex items-center rounded-xl border border-line bg-white px-7 py-3.5 text-[0.82rem] font-medium tracking-[0.08em] text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900/30">
      Book a call
    </a>
  </div>
</section>
```

### Section label (reusable pattern)
```tsx
<p className="mb-3 text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50">Label</p>
```

### Featured / dark card (like Premium pricing card)
- `bg-ink-900 text-white border-ink-900`
- Grain texture overlay: `bg-[url("data:image/svg+xml,...")]` with `opacity-[0.045]`
- CTA inside: `bg-white text-ink-900 hover:bg-fog`
