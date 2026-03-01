# Solara AI — Website Rebuild Plan

A comprehensive plan for rebuilding solaraai.com as a production-grade, animation-rich Next.js website with a luxury B&W aesthetic.

---

## Brand Context

**Solara AI** — "AI That Runs Your Marketing on Auto-Pilot"

A full marketing department in software. Recently closed $1M Pre-Seed. Two core audiences:

1. **Business Owners** ("The One Steering the Ship") — Want calm confidence. Marketing runs like a trusted partner. Relief from the mental load of "did we post? is the ad wasting money?"
2. **Marketers** ("Your AI Wingman in the Arena") — Want true backup. No blank-page panic, no last-minute scrambles. A relentless partner who learns fast and amplifies their best work.

**Three Pillars**: Storytelling (connect), Strategy (guide), Research (know)

**Core Message**: "Marketing isn't magic. It's storytelling that connects, strategy that guides, and research that knows."

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15** (App Router, `src/` directory) | Latest stable, SSG, great DX |
| Styling | **Tailwind CSS v4** (`@theme inline` tokens) | Utility-first, latest version |
| Animations | **Framer Motion** | Scroll reveals, page transitions, staggered entrances, tab animations, gesture effects |
| Smooth Scroll | **Lenis** | Buttery smooth scrolling — the single biggest "premium feel" upgrade |
| Toasts | **Sonner** | Elegant notifications for form submissions |
| Fonts | **Instrument Serif** (display accents) + **Bricolage Grotesque** (headlines/UI) + **DM Sans** (body) via `next/font/google` | Distinctive, editorial, luxury — avoids generic Inter/Roboto |
| Language | **TypeScript** | Type safety |
| Images | **Unsplash** (downloaded locally) | High-quality, real photography |

---

## Design System — "Luxury B&W"

### Philosophy
Near-black and white. Swiss-design influenced minimalism. Generous whitespace. Editorial numbered sections. The design should feel like a luxury fashion brand's website crossed with a premium SaaS product. Not sterile — sophisticated.

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#FAFAFA` | Main background (near-white) |
| `--bg-secondary` | `#F0F0F0` | Section alternates, cards |
| `--bg-tertiary` | `#E8E8E8` | Subtle card fills, hover states |
| `--bg-inverse` | `#0A0A0A` | Dark sections (hero, CTA, footer) |
| `--text-primary` | `#0A0A0A` | Headings, body text |
| `--text-secondary` | `#555555` | Captions, muted text |
| `--text-tertiary` | `#999999` | Subtle labels, placeholders |
| `--text-inverse` | `#FAFAFA` | Text on dark backgrounds |
| `--accent` | `#0A0A0A` | Primary CTAs (black pill buttons) |
| `--accent-hover` | `#1A1A1A` | Button hover state |
| `--accent-subtle` | `#F5F5F5` | Light accent backgrounds, tags |
| `--border` | `#E0E0E0` | Subtle borders |
| `--border-strong` | `#CCCCCC` | Emphasized borders |

### Typography Scale

| Element | Font | Size | Weight | Tracking |
|---------|------|------|--------|----------|
| Display (Hero) | Instrument Serif | 72-88px | 400 | -0.03em |
| H1 | Bricolage Grotesque | 56-64px | 700 | -0.02em |
| H2 (Section) | Bricolage Grotesque | 40-48px | 600 | -0.01em |
| H3 (Subsection) | Bricolage Grotesque | 28-32px | 600 | 0 |
| H4 | DM Sans | 22-24px | 600 | 0 |
| Body | DM Sans | 17-18px | 400 | 0 |
| Body Small | DM Sans | 15px | 400 | 0 |
| Caption | DM Sans | 13-14px | 400 | 0.02em |
| Nav/UI | DM Sans | 15px | 500 | 0.01em |

### Spacing
- Section padding: 120-160px vertical
- Content max-width: 1200px
- Card padding: 32-48px
- Grid gap: 24-32px

### Signature Design Elements
- **Pill buttons**: Rounded-full, black fill with white text (primary), border with black text (secondary)
- **Editorial numbered sections**: "01 /", "02 /", "03 /" labels — distinctive Linear-inspired pattern
- **Horizontal rules**: Thin 1px borders separating sections
- **Oversized typography**: Hero text intentionally large
- **Serif accents**: Instrument Serif used sparingly for key display moments (hero, pull quotes, section intros) to add editorial warmth
- **Noise texture**: Subtle SVG grain overlay on dark sections for tactile depth

---

## Page Architecture

### Navigation Order
Home, Use Cases, Pricing, Blog, Resources, About, Contact

### 1. Home Page (`/`)

The flagship page. Editorial flow, luxury feel, every section a visual statement.

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Dark (inverted) full-viewport section. Display serif headline with word-cycling animation ("Your marketing on `auto-pilot` / `overdrive` / `lock-in`"). Subtext: "A full marketing department in software." Two pill CTAs: "Book a Free Call" (white) + "Watch Demo" (outline white). Product screenshot floating below with subtle parallax. Noise texture overlay. |
| 02 | **Logo Cloud** | Light section. "Trusted by forward-thinking teams" — logos for Sharon Regev, LEAD Ogilvy, Ness Digital, Recoverli, RE/MAX, Dentaluxe, Rose Poet. Infinite subtle marquee. |
| 03 | **Three Pillars** | "Marketing Isn't Magic." — Bento grid layout. 3 cards for Storytelling, Strategy, Research. One card spans 2 cols (large), two cards stack (small). Each has an icon, title, and 2-line description. Black border, hover lift. |
| 04 | **Persona Section** | Interactive toggle tab: "For Business Owners" / "For Marketers". Each tab reveals a panel with the persona copy (condensed), 3-4 value bullets, and relevant product screenshot. AnimatePresence transition. Instrument Serif pull quote from persona copy. |
| 05 | **How It Works** | "How Solara Works" — 4 numbered steps in horizontal timeline (desktop) / vertical (mobile): 01 Scan & Research, 02 Plan & Strategize, 03 Create & Launch, 04 Optimize & Grow. Each step has icon + description. Connecting line between steps. |
| 06 | **Feature Tabs** | Tabbed product showcase (marketer.com pattern). Tabs: Content Creation, Ad Management, SEO Engine, Analytics. Each tab: description + feature list + product screenshot. layoutId pill animation on active tab. |
| 07 | **Stats Strip** | Dark inverted section. 4 animated counters: "50+" hrs saved/week, "67%" CTR increase, "3x" average ROI, "500+" brands trust us. Count-up animation on scroll-into-view. Noise overlay. |
| 08 | **Testimonials** | Card grid (2 rows x 3 cols). Each: star rating, quote, name, role, company, result metric badge ("+35% ROAS", etc.). Staggered reveal. |
| 09 | **Final CTA** | Dark inverted. "Ready to feel that calm confidence?" — Instrument Serif display. Book a Call pill button. AvatarStack social proof ("Join 500+ marketers"). Noise overlay. |

### 2. About Page (`/about`)

| Section | Description |
|---------|-------------|
| **Hero** | "The Story Behind Solara" — large Instrument Serif headline. Background image with white overlay + noise. Short origin paragraph. |
| **Mission** | Two-column: mission text left, stats card right (Year founded, Team size, Brands served, Funding raised $1M). Stats use Counter animation. |
| **Values** | 3 numbered values: "01 / Human-First AI", "02 / Radical Transparency", "03 / Compounding Growth". Each with 2-3 sentence description. |
| **Founder** | Spotlight card: photo, name, title, bio paragraph, social links. Subtle parallax on photo. |
| **Timeline** | Horizontal milestone timeline: key company moments. Dots connected by line. |
| **CTA** | Subscribe to newsletter + Book a call. |

### 3. Use Cases Page (`/use-cases`)

| Section | Description |
|---------|-------------|
| **Hero** | "Solara Works For You" — editorial headline with serif accent. |
| **Business Owners** | Full editorial section: "For The One Steering The Ship". 4 value cards (Calm Confidence, Autopilot Growth, Budget Intelligence, Focus on Big Things). Each card: icon + title + description extracted from persona copy. Product screenshot. |
| **Marketers** | Full editorial section: "For Your AI Wingman in the Arena". 4 value cards (No Blank-Page Panic, Real-Time Campaigns, Creative Headspace, Relentless Partner). Same card pattern. Different product screenshot. |
| **Use Case Grid** | 3 columns: Creative (avatar, content, video), Engagement Agents (ads, social, email), SEO & Website (audits, keywords, pages). 6 items per column. |
| **CTA** | "Which one are you?" — two pill buttons side by side, each links to Book a Call. |

### 4. Pricing Page (`/pricing`)

| Section | Description |
|---------|-------------|
| **Header** | "Simple, Transparent Pricing" with billing toggle: Monthly / Quarterly (20% off) / Yearly (40% off). Animated pill switcher. |
| **Tier Cards** | 4 cards side by side: Starter ($39), Pro ($89), Premium ($179, highlighted), Agency (Custom). Each: name, price (animated on toggle), description, feature checklist, CTA pill button. Premium gets black fill + "Most Popular" badge. |
| **Comparison** | Optional: full feature comparison table below cards. |
| **FAQ** | 4-5 pricing-specific questions in accordion. |
| **CTA** | "Not sure? Book a call and we'll help you choose." |

### 5. Blog Page (`/blog` + `/blog/[slug]`)

**Listing:**
| Section | Description |
|---------|-------------|
| **Header** | "Insights & Resources" + search bar with live dropdown filtering. |
| **Featured** | Top post as large hero card (full-width, image + title + excerpt + author). |
| **Grid** | 3-column grid of PostCards. Ken Burns zoom on hover, gradient overlay, category tag. |

**Detail (`/blog/[slug]`):**
| Section | Description |
|---------|-------------|
| **Progress** | Reading progress bar fixed at top. |
| **Header** | Category tag, title (Instrument Serif), author + date + reading time, cover image (16:9). |
| **Content** | Centered prose (max 720px). Drop caps on first paragraph. Styled headings, blockquotes, code blocks. |
| **Sidebar** | Sticky table of contents — auto-extracts h2/h3, highlights current section. Desktop only. |
| **Footer** | Share links (copy, Twitter, LinkedIn) with toast on copy. Author box. 3 related posts. |

**Mock Data:** 6 realistic blog posts about AI marketing, full HTML body content, 3 authors.

### 6. Contact Page (`/contact`)

| Section | Description |
|---------|-------------|
| **Split Layout** | Left: "Let's Talk" (Instrument Serif), subtext, email, phone, location, social links. Right: underline-style form (Name, Email, Company, Subject dropdown, Message), pill submit button, AnimatePresence success state + Sonner toast. |

### 7. FAQ Page (`/faq`)

| Section | Description |
|---------|-------------|
| **Header** | "Frequently Asked Questions" |
| **Sections** | Grouped accordion: General (5 Qs), Product (5 Qs), Pricing (4 Qs), Getting Started (4 Qs). AnimatePresence expand/collapse. |
| **CTA** | "Still have questions?" → Contact page link. |

### 8. Resources Page (`/resources`)

| Section | Description |
|---------|-------------|
| **Header** | "AI Marketing Toolkit" |
| **Filters** | Animated category tabs: All, Content, SEO, Ads, Analytics, Social. layoutId pill animation. |
| **Grid** | 12-16 curated AI tools. Each card: name, description, category badge, "Visit" link, hover lift + border accent. |

### 9. Custom 404 Page

| Section | Description |
|---------|-------------|
| **Content** | Animated "404" large typography with line-through animation. Witty copy. "Go Home" magnetic pill button. |

---

## Shared Components

| Component | File | Purpose |
|-----------|------|---------|
| `Navbar` | `navbar.tsx` | Sticky, glass blur on scroll, logo left, links center, "Book a Call" pill right, mobile hamburger with animated menu + staggered links, active underline with layoutId |
| `Footer` | `footer.tsx` | Dark inverted, 4-column grid (Product, Company, Legal, Subscribe), logo, social links, copyright, noise texture |
| `Section` | `section.tsx` | Max-width container wrapper with consistent padding |
| `Reveal` | `reveal.tsx` | Framer Motion `whileInView` — 6 variants: fade-up, fade-in, fade-left, fade-right, scale, blur |
| `Counter` | `counter.tsx` | Animated number counting using FM `animate()`, triggers on scroll into view |
| `TextReveal` | `text-reveal.tsx` | Word-by-word blur-to-clear animation for hero headings |
| `WordCycle` | `word-cycle.tsx` | Vertical word-cycling animation in hero |
| `Magnetic` | `magnetic.tsx` | Cursor-following hover effect on CTA buttons |
| `Noise` | `noise.tsx` | SVG grain texture overlay for dark sections |
| `Parallax` | `parallax.tsx` | Scroll-linked parallax using useScroll + useTransform |
| `SmoothScroll` | `smooth-scroll.tsx` | Lenis smooth scroll provider wrapping entire app |
| `StaggerContainer` | `stagger-children.tsx` | Wrapper for staggered child animations |
| `StaggerItem` | `stagger-children.tsx` | Individual stagger item |
| `AvatarStack` | `avatar-stack.tsx` | Overlapping circular photos with spring entrance, `inverted` prop |
| `FeatureTabs` | `feature-tabs.tsx` | Animated pill tab bar + content panels with layoutId transitions |
| `PersonaToggle` | `persona-toggle.tsx` | "Business Owner / Marketer" switcher with AnimatePresence content |
| `TestimonialGrid` | `testimonial-grid.tsx` | 6 card testimonials with stars, quotes, result metrics |
| `PricingToggle` | `pricing-toggle.tsx` | Monthly/Quarterly/Yearly pill switcher |
| `SubscribeForm` | `subscribe-form.tsx` | Email + button, AnimatePresence success + Sonner toast |
| `PostCard` | `post-card.tsx` | Blog card with Ken Burns zoom, gradient overlay |
| `ReadingProgress` | `reading-progress.tsx` | Scroll progress bar for blog posts |
| `TableOfContents` | `table-of-contents.tsx` | Sticky sidebar TOC with active section highlighting |
| `Faq` | `faq.tsx` | Accordion with AnimatePresence expand/collapse |
| `ContactForm` | `contact-form.tsx` | Underline-style form with AnimatePresence + toast |
| `RoiCalculator` | `roi-calculator.tsx` | Optional: interactive sliders for ROI estimation |

---

## Images (Unsplash)

All images downloaded to `public/images/`:

| Image | Purpose | Unsplash Search Query |
|-------|---------|----------------------|
| `hero-product.png` | Product screenshot in hero | (custom mockup or screenshot) |
| `post-1.jpg` through `post-6.jpg` | Blog post cover images | "ai marketing", "digital strategy", "content creation", "data analytics", "social media", "brand storytelling" |
| `about-hero.jpg` | About page background | "modern office", "startup team" |
| `founder.jpg` | Founder portrait | "professional portrait" |
| `avatar-1.jpg` through `avatar-5.jpg` | Social proof avatar stack | "professional headshot" |
| `use-case-owner.jpg` | Business owner section | "business leader", "ceo" |
| `use-case-marketer.jpg` | Marketer section | "creative professional", "marketer working" |

---

## Build Phases

| Phase | What | Details |
|-------|------|---------|
| **1** | Project Setup | Next.js 15, Tailwind v4, TypeScript, fonts, design tokens in globals.css, layout shell (Navbar, Footer, SmoothScroll, Toaster) |
| **2** | Component Library | All shared components: Reveal, Counter, TextReveal, WordCycle, Section, Magnetic, Noise, Parallax, Stagger, AvatarStack, FeatureTabs, PersonaToggle, SubscribeForm, PostCard, Faq |
| **3** | Home Page | All 9 sections — the flagship page that sets the standard |
| **4** | Content Pages | About, Contact, FAQ — editorial/form pages |
| **5** | Blog System | Mock data (6 posts, 3 authors), listing page with search, detail page with TOC |
| **6** | Conversion Pages | Pricing (4 tiers + toggle), Use Cases (dual persona + grid) |
| **7** | Utility Pages | Resources (tools directory + filters), 404 page |
| **8** | Images | Fetch from Unsplash, scan for quality/fit, download locally |
| **9** | Polish | Animation tuning, mobile responsive pass, cross-browser QA, performance |

---

## Key Design Principles

1. **Luxury through restraint**: B&W palette forces every element to earn its place. No color crutches.
2. **Typography is the hero**: Instrument Serif for display moments creates editorial warmth in a monochrome world.
3. **Animation with purpose**: Lenis smooth scroll + Framer Motion reveals make the site feel alive without being distracting.
4. **Dual persona, unified experience**: Business owners and marketers see themselves reflected without the site feeling fragmented.
5. **Editorial numbered sections**: "01 /", "02 /" labels create a distinctive, intentional feel borrowed from Linear's design language.
6. **Noise texture on dark**: Subtle grain prevents flat, lifeless dark sections.
7. **Pill buttons everywhere**: Rounded-full buttons are the signature interaction pattern.
8. **Content-first**: Real, compelling copy (from the persona document) drives every page — not lorem ipsum.

---

## Reference Sources

- **marketer.com**: Word-cycling hero, tabbed product showcase, partner logos, testimonial marquee, FAQ accordion, dark premium aesthetic
- **ai-marketing-academy process.md**: Phased build methodology, component architecture, Lenis/Framer Motion/Sonner stack, editorial numbered sections, bento grid patterns
- **solaraai.com (current)**: Existing content (pricing tiers, features, use cases, testimonials, logo cloud) to preserve and elevate
- **Persona document**: Core messaging, two audience profiles, emotional positioning, three pillars

---

*Plan created: March 2026*
*Ready to build.*
