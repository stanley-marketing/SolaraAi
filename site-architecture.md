# Solara AI — Site Architecture Plan

> Based on competitive research across 10 SaaS companies (HubSpot, Zapier, Canva, Stripe, ElevenLabs, Jasper.ai, Linear, Mintlify, AdCreative.ai, Ocoya) and the solaraai.com SEO audit (March 2026).

---

## Site Map

```
solaraai.com/
│
├── /                                Homepage
├── /pricing                         Pricing (exists)
├── /about                           Company, team, mission
├── /contact                         Sales + support
│
├── /ads                             AI Ads Manager
├── /seo                             AI SEO Manager
├── /content                         AI Content Manager
├── /social                          AI Social Media Manager
├── /website                         AI Website Builder
│
├── /solutions/
│   ├── small-business               For SMBs
│   ├── agencies                     For marketing agencies
│   └── ecommerce                    For online stores
│
├── /vs/
│   ├── jasper-ai                    Solara vs Jasper
│   ├── adcreative-ai               Solara vs AdCreative
│   ├── ocoya                        Solara vs Ocoya
│   └── hubspot-marketing            Solara vs HubSpot Marketing
│
├── /integrations/
│   ├── google-ads
│   ├── meta-ads
│   ├── shopify
│   ├── instagram
│   ├── tiktok
│   └── [platform]
│
├── /tools/
│   ├── ad-copy-generator
│   ├── marketing-roi-calculator
│   └── social-caption-generator
│
├── /blog/
│   └── [slug]
│
├── /learn/
│   ├── ai-marketing-platform        Pillar: "What is an AI marketing platform?"
│   ├── ai-ads-management            Pillar: "AI ads management guide"
│   └── best-ai-marketing-tools      Pillar: "Best AI marketing tools [year]"
│
├── /case-studies/
│   └── [client-slug]
│
├── /switch                           Migration guide for new customers
├── /changelog                        Product updates
│
├── /legal/
│   ├── privacy
│   └── terms
│
├── /robots.txt
└── /sitemap.xml
```

---

## Phase Breakdown

### Phase 1 — Foundation `Week 1`

Fix what's broken. Establish core identity pages. Lay the technical SEO groundwork.

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 1 — PAGES                                                │
│                                                                 │
│  /              Homepage (fix copy, add Organization schema)    │
│  /about         Team bios, founder story, sameAs links          │
│  /contact       Lead capture, NAP consistency                   │
│  /pricing       Fix meta tags, add SoftwareApplication schema   │
│  /legal/*       Privacy + Terms                                 │
│                                                                 │
│  TECHNICAL                                                      │
│  robots.txt     Allow GPTBot, PerplexityBot, Google-Extended    │
│  sitemap.xml    Auto-generated, submitted to GSC                │
│  Schema         Organization, WebSite, BreadcrumbList on all    │
│  Analytics      GA4 + Google Search Console setup               │
└─────────────────────────────────────────────────────────────────┘
```

**Schema per page:**

| Page | Schema Types |
|------|-------------|
| `/` | `Organization`, `WebSite`, `SearchAction`, `Speakable` |
| `/about` | `Organization`, `Person` (founders), `sameAs` |
| `/pricing` | `SoftwareApplication` + `Offer`, `FAQPage` |
| `/contact` | `LocalBusiness`, `ContactPoint` |

**GEO requirements:**
- Homepage first 60 words must directly answer "What is Solara AI?"
- `/about` must link to LinkedIn, Crunchbase, Twitter/X, GitHub (sameAs)
- `robots.txt` must allow: `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `Google-Extended`, `CCBot`

---

### Phase 2 — Authority Pages `Weeks 2–4`

Build the core product pages, solution pages, and blog. Establish topical pillars.

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 2 — CAPABILITY PAGES (root level)                        │
│                                                                 │
│  /ads            AI Ads Manager          "ai ads management"    │
│  /seo            AI SEO Manager          "ai seo tool"          │
│  /content        AI Content Manager      "ai content creation"  │
│  /social         AI Social Media         "ai social media mgmt" │
│  /website        AI Website Builder      "ai website builder"   │
│                                                                 │
│  SOLUTION PAGES                                                 │
│                                                                 │
│  /solutions/small-business     "ai marketing small business"    │
│  /solutions/agencies           "white label ai marketing"       │
│  /solutions/ecommerce          "ai marketing ecommerce"         │
│                                                                 │
│  BLOG HUB                                                       │
│                                                                 │
│  /blog/[slug]    Editorial content, main domain, 4 categories   │
│                  Categories: AI Marketing, SEO, Social, Ads     │
└─────────────────────────────────────────────────────────────────┘
```

**Why root-level capabilities?** Stripe (`/payments`), ElevenLabs (`/text-to-speech`), and Linear (`/plan`, `/build`) all place core products at root. Shorter URLs, stronger keyword signals, easier to remember.

**Each capability page must include:**

```
┌──────────────────────────────────────┐
│  H1: Primary keyword                 │
│  First 60 words: Direct definition   │  ← AI extraction target
│  ────────────────────────────────    │
│  How it works (3–4 steps)            │
│  Key features (bullet list)          │
│  Statistics / proof points           │  ← +37–78% GEO visibility
│  ────────────────────────────────    │
│  FAQ (3–5 questions)                 │  ← FAQPage schema
│  ────────────────────────────────    │
│  CTA → /pricing                      │
│  Internal links → related /solutions │
│  Internal links → 2–3 blog posts     │
└──────────────────────────────────────┘
```

**Schema per page type:**

| Page Type | Schema Types |
|-----------|-------------|
| Capability (`/ads`, `/seo`, etc.) | `SoftwareApplication`, `FAQPage`, `HowTo`, `BreadcrumbList` |
| Solution (`/solutions/*`) | `WebPage`, `FAQPage`, `BreadcrumbList` |
| Blog post (`/blog/*`) | `Article`, `Person` (author), `BreadcrumbList` |

**Internal linking map:**

```
                    ┌──────────┐
                    │ Homepage │
                    └────┬─────┘
           ┌─────────┬──┴──┬──────────┬─────────┐
           ▼         ▼     ▼          ▼         ▼
        /ads      /seo  /content   /social   /website
           │         │     │          │         │
           └────┬────┘     │     ┌────┘         │
                ▼          ▼     ▼              ▼
          /solutions/small-business    /solutions/agencies
                │                            │
                └──────────┬─────────────────┘
                           ▼
                     /blog/[slug]
                           │
                           ▼
                       /pricing
```

Every capability page links to:
- 1–2 related `/solutions/*` pages
- 2–3 related `/blog/*` posts
- `/pricing`

Every blog post links to:
- Its parent capability page
- 2–3 related blog posts
- `/pricing` or `/contact`

---

### Phase 3 — High-Intent Traffic `Months 2–3`

Capture commercial investigation traffic. Comparison pages, pillar content, case studies.

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 3 — COMPARISON PAGES                                     │
│                                                                 │
│  /vs/jasper-ai             "jasper ai alternative"    140/mo    │
│  /vs/adcreative-ai        "adcreative alternative"    90/mo     │
│  /vs/ocoya                 "ocoya alternative"         40/mo    │
│  /vs/hubspot-marketing     "hubspot alternative"      210/mo    │
│                                                                 │
│  PILLAR CONTENT                                                 │
│                                                                 │
│  /learn/ai-marketing-platform        260/mo    3000+ words      │
│  /learn/ai-ads-management            170/mo    3000+ words      │
│  /learn/best-ai-marketing-tools      300+/mo   Listicle format  │
│                                                                 │
│  CASE STUDIES                                                   │
│                                                                 │
│  /case-studies/[client-slug]         Problem → Solution → Result│
└─────────────────────────────────────────────────────────────────┘
```

**Comparison page template:**

```
┌──────────────────────────────────────┐
│  H1: "Solara AI vs [X]: Honest       │
│       Comparison [Year]"             │
│  40-word summary                     │  ← AI extraction target
│  ────────────────────────────────    │
│  Side-by-side feature table          │  ← AI models parse tables
│  Pricing comparison                  │
│  "Best for" section (honest)         │
│  ────────────────────────────────    │
│  FAQ: "Is [X] better than Solara?"   │  ← FAQPage schema
│  ────────────────────────────────    │
│  CTA → /pricing                      │
└──────────────────────────────────────┘
```

**Why this matters for GEO:** "vs" comparison pages receive 4.88% of all AI-generated traffic. Jasper, AdCreative, ElevenLabs, and Linear have ZERO comparison pages — open field.

**Pillar page structure:**

```
┌──────────────────────────────────────┐
│  "Quick Answer" box (50 words max)   │  ← #1 AI citation target
│  ────────────────────────────────    │
│  Table of contents                   │
│  ────────────────────────────────    │
│  H2s framed as questions             │  ← Maps to AI chatbot queries
│  10+ cited external sources          │  ← +115–141% GEO visibility
│  5+ statistics with sources          │  ← +37–78% GEO visibility
│  ────────────────────────────────    │
│  FAQ (8–10 questions)                │
│  ────────────────────────────────    │
│  Links to 8–12 supporting blog posts │
└──────────────────────────────────────┘
```

**Schema per page type:**

| Page Type | Schema Types |
|-----------|-------------|
| Comparison (`/vs/*`) | `FAQPage`, `Product` (both sides), `BreadcrumbList` |
| Pillar (`/learn/*`) | `Article`, `FAQPage`, `Speakable`, `BreadcrumbList` |
| Case study | `Article`, `Organization` (client), `BreadcrumbList` |

---

### Phase 4 — Scale `Months 3–6`

Programmatic pages, free tools, integrations, competitive displacement assets.

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 4 — INTEGRATION PAGES (programmatic template)             │
│                                                                  │
│  /integrations/              Hub page                            │
│  /integrations/google-ads    "solara ai google ads"              │
│  /integrations/meta-ads      "solara ai facebook ads"            │
│  /integrations/shopify       "shopify ai marketing"              │
│  /integrations/instagram     "instagram ai marketing"            │
│  /integrations/tiktok        "tiktok ai marketing"               │
│  /integrations/linkedin      "linkedin ai marketing"             │
│                                                                  │
│  FREE TOOLS (flat URLs, lead capture)                            │
│                                                                  │
│  /tools/ad-copy-generator             Link magnet + demo         │
│  /tools/marketing-roi-calculator      Interactive calculator     │
│  /tools/social-caption-generator      High-volume keyword        │
│                                                                  │
│  COMPETITIVE DISPLACEMENT                                        │
│                                                                  │
│  /switch            Migration guide for new customers            │
│  /changelog         Product updates as marketing content         │
└─────────────────────────────────────────────────────────────────┘
```

**Integration page template** (one template, many pages):

```
┌──────────────────────────────────────┐
│  H1: "Connect [Platform] to Solara"   │
│  What it does (40 words)              │  ← AI extraction target
│  ────────────────────────────────     │
│  How to connect (3 steps)             │  ← HowTo schema
│  What you get (feature list)          │
│  ────────────────────────────────     │
│  FAQ (3 questions)                    │  ← FAQPage schema
│  CTA → /pricing                       │
└──────────────────────────────────────┘
```

**Schema per page type:**

| Page Type | Schema Types |
|-----------|-------------|
| Integration (`/integrations/*`) | `SoftwareApplication`, `HowTo`, `FAQPage`, `BreadcrumbList` |
| Free tool (`/tools/*`) | `SoftwareApplication`, `FAQPage`, `BreadcrumbList` |
| Changelog | `Article`, `BreadcrumbList` |
| Switch | `WebPage`, `HowTo`, `FAQPage`, `BreadcrumbList` |

---

## Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  TOP NAV (4 items + CTA)                                         │
│                                                                  │
│  Product ▼              Pricing        Blog        Contact       │
│  ┌──────────────┐                                  [Get Started]│
│  │ Ads           │                                                │
│  │ SEO           │                                                │
│  │ Content       │                                                │
│  │ Social Media  │                                                │
│  │ Website       │                                                │
│  │ ──────────── │                                                │
│  │ Integrations  │                                                │
│  │ Solutions ►   │                                                │
│  └──────────────┘                                                │
└─────────────────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────┐
│  FOOTER (5 columns)                                              │
│                                                                  │
│  Product       Solutions       Resources      Compare    Company │
│  ─────────    ──────────      ──────────     ────────   ─────── │
│  Ads           Small Biz       Blog           vs Jasper  About   │
│  SEO           Agencies        Learn           vs AdCr.  Contact │
│  Content       Ecommerce       Case Studies   vs Ocoya   Pricing │
│  Social                        Changelog      vs HubSpot Legal   │
│  Website                       Tools                             │
│  Integrations                                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## GEO Checklist — Every Page

Applied to ALL pages across all phases. Non-negotiable.

| Element | Rule | Impact |
|---------|------|--------|
| **First 60 words** | Direct answer to the page's primary question | AI models extract opening paragraph |
| **H2s as questions** | Frame headers as natural-language questions | Maps to AI chatbot queries |
| **Statistics** | 2+ per page, with source citations | +37–78% GEO visibility |
| **Source citations** | Link to authoritative external sources | +115–141% GEO visibility |
| **Quotations** | Client quotes, expert quotes | +112–115% GEO visibility |
| **Summary box** | "Key Takeaway" or "Quick Answer" at top | Directly extractable by AI |
| **FAQ schema** | 3–5 questions per page | Structured data for AI parsing |
| **Tables** | Feature comparisons, pricing | AI models parse tables well |
| **Breadcrumbs** | `BreadcrumbList` schema on all pages | Helps AI understand hierarchy |
| **dateModified** | On all Article schema | AI prefers fresh content |
| **Author byline** | `Person` schema on all blog/learn content | E-E-A-T signal |

---

## Off-Site Presence (Equally Important)

GEO research shows branded web mentions (0.664 correlation) matter MORE than on-page optimization for AI citations.

```
┌─────────────────────────────────────────────────────────────────┐
│  MUST-HAVE LISTINGS                                              │
│                                                                  │
│  G2.com              Product review    → AggregateRating schema  │
│  Capterra            Product review    → Social proof            │
│  Product Hunt        Launch            → Backlinks + mentions    │
│  Crunchbase          Company profile   → Entity authority        │
│  LinkedIn            Company page      → sameAs link             │
│  Wikipedia           Article           → Knowledge Graph entry   │
│  Wikidata            Entity entry      → Gemini / Google KG      │
│                                                                  │
│  HIGH-VALUE CHANNELS                                             │
│                                                                  │
│  Reddit              r/smallbusiness, r/marketing, r/entrepreneur│
│  YouTube             Product demos, tutorials                    │
│  "Best AI tools"     Pitch for inclusion in roundup articles     │
│  HARO / Quoted.ai    Expert citations in press                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Traffic Projections

| Phase | Timeline | New Pages | Est. Monthly Organic | Cumulative |
|-------|----------|-----------|---------------------|------------|
| 1 | Week 1 | 5 core | ~150 | 150 |
| 2 | Weeks 2–4 | 12–15 | ~500–800 | ~1,000 |
| 3 | Months 2–3 | 10–15 | ~1,500–2,500 | ~3,500 |
| 4 | Months 3–6 | 10–20 | ~3,000–5,000 | ~8,000+ |

---

## Key Decisions Backed by Research

| Decision | Evidence |
|----------|----------|
| Capabilities at root (`/ads`, `/seo`) not `/features/ads` | Stripe, ElevenLabs, Linear all use root-level product URLs |
| Blog on main domain, never subdomain | Ocoya's `blog.ocoya.com` is an anti-pattern — kills SEO equity |
| Free tools as flat URLs | HubSpot, Canva, ElevenLabs, Jasper all do this — proven traffic drivers |
| Dedicated `/vs/` comparison pages | HubSpot has 20+. Jasper/AdCreative/ElevenLabs have zero — open field |
| `/switch` displacement page | Linear + Mintlify pattern — helps buyers switch without naming competitors |
| `/learn/` for pillar content | Separates definitive guides from blog posts (HubSpot, Canva pattern) |
| 4-item top nav | Linear (3), Mintlify (5), Stripe (4) — less is more |
| Footer as SEO asset | HubSpot (35+ links), Canva (7 columns) — distribute PageRank |
| GEO = PR strategy, not just on-page | Branded mentions (0.664) > Domain Rating (0.326) for AI citations |
