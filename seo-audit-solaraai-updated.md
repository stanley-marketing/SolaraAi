# 🔍 SEO Audit Report — solaraai.com (Updated)

| Field | Details |
|---|---|
| Website | https://solaraai.com (and https://www.solaraai.com) |
| Business | AI-powered marketing platform for SMBs |
| Platform | Next.js on Vercel |
| Audit date | 2026-03-29 |
| Baseline | March 10, 2026 audit (`seo-audit-solaraai.md`) |
| Data sources | DataForSEO OnPage, Lighthouse, Labs, Keywords, Backlinks, SERP |

---

## 1) Executive Summary

Since the March audit, Solara AI has improved technical SEO quality (crawl health + Lighthouse SEO scores), but still has a large visibility/authority gap in non-branded search.

### Scores: March vs Now

| Area | March | Now | Confidence | Notes |
|---|---:|---:|---|---|
| Technical SEO | 78 | **86** | High | No 4xx/5xx, no redirect chains, strong Lighthouse SEO |
| On-Page SEO | 55 | **72** | High | Metadata issues concentrated in `/case-study`; title length still long across many pages |
| Content & Search Visibility | 15 | **22** | High | Ranked keywords grew 2 → 6, but still shallow non-branded footprint |
| AI/LLM Visibility | 35 | **26** | Medium | Model-level LLM mentions endpoint returned 404; AI Overview visibility for target queries remains weak |
| Backlink & Authority | 15 | **18** | High | Fresh backlink data now available; large competitive gap persists |
| Competitor Gap | 20 | **24** | High | Competitors dominate both referring domains and ranking keyword footprint |

### Overall

- **March overall:** 36/100
- **Now overall:** **45/100**

### Top 5 priorities

1. Fix **LCP on `/contact` (11.56s)** and **`/about` (9.35s)**.
2. Fix `/case-study` metadata/H1 completeness.
3. Build non-branded category pages for high-intent terms (`ai ad generator`, `ai marketing agency`, `ai marketing platform`).
4. Execute backlink acquisition on domains already linking to 4/4 competitors but not Solara.
5. Resolve DataForSEO LLM endpoint access/route issue (404) to unlock model-level mention tracking.

---

## 2) Technical SEO Findings

### Current crawl snapshot (DataForSEO OnPage)

- Crawl status: `status_code=20000`, `task_status=20000`, progress = `finished`
- Crawled pages: **56**
- HTTPS pages: **56**
- 4xx pages: **0**
- 5xx pages: **0**
- Redirect chains: **0**
- Pages with links to redirects: **1**
- Canonical present: **55** pages

### Lighthouse (mobile) key pages

| URL | Performance | Accessibility | Best Practices | SEO | LCP | FCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 92 | 96 | 100 | 100 | 3.11s | 1.03s | 0.00000 | 151ms |
| `/pricing` | 94 | 96 | 100 | 100 | 2.91s | 0.96s | 0.00000 | 146.5ms |
| `/contact` | 70 | 96 | 77 | 100 | **11.56s** | 0.94s | 0.00013 | 171.5ms |
| `/blog` | 96 | 96 | 100 | 100 | 2.61s | 1.02s | 0.00000 | 132ms |
| `/about` | 74 | 96 | 100 | 100 | **9.35s** | 0.97s | 0.00000 | 133.5ms |

### Technical findings (Issue template)

| Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|
| Slow LCP on conversion/core pages | High | `/contact` 11.56s, `/about` 9.35s | Optimize hero/render path, defer non-critical scripts, compress/priority-load LCP element | P1 |
| Render-blocking resources sitewide | Medium | `has_render_blocking_resources` on 55/56 pages | Critical CSS extraction + defer non-critical JS | P1 |
| Internal links still hit redirect | Medium | `has_links_to_redirects` on 1 page | Replace redirected internal URLs with final URLs | P2 |

### March comparison

- Improved: March had 3 broken links and 1 HTTP page; now 0 4xx/5xx and full HTTPS in crawl.
- Remaining: performance bottlenecks on `/contact` and `/about`.

---

## 3) On-Page SEO Findings

### Metadata and structure status

- Missing title: **1** (`https://solaraai.com/case-study`)
- Missing description: **1** (`https://solaraai.com/case-study`)
- Missing H1: **1** (`https://solaraai.com/case-study`)
- Title too short: **4** pages
- Title too long: **32** pages flagged (`title_too_long`)

### Media/semantic checks

- Pages with `no_image_alt`: **1** (homepage)
- Pages with `no_image_title`: **55**
- Pages with `has_micromarkup`: **0** by OnPage checker

> Note: OnPage micromarkup checks can miss JS-injected JSON-LD. Validate with rendered schema tests.

### On-page findings (Issue template)

| Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|
| `/case-study` missing basic SEO fields | High | No title/description/H1 | Add unique metadata + H1 immediately | P1 |
| Overlong title tags in blog set | Medium | 32 pages flagged | Rewrite to 50–60 chars, front-load primary keyword | P2 |
| Image attribute hygiene inconsistent | Medium | 55 pages missing image title attribute | Standardize image metadata generation in templates | P2 |

### March comparison

- Improved from March’s broader missing-description issues.
- Main remaining on-page debt is now concentrated and fixable quickly.

---

## 4) Content Findings

### Organic footprint now (DataForSEO Labs)

- Ranked keywords (US): **6**
- Top 3: **1**
- Top 10: **1**
- Top 20: **1**

| Keyword | Search volume | Rank (group) | URL |
|---|---:|---:|---|
| solara ai | 260 | 1 | `/` |
| ugc videos examples | 140 | 74 | `/blog/ugc-video-examples` |
| solara website | 110 | 44 | `/` |
| solara logo | 40 | 59 | `/` |
| free ugc videos | 30 | 82 | `/blog/ugc-video-examples` |
| ugc commercial | 30 | 70 | `/blog/ugc-video-examples` |

### Demand opportunities (keyword overview)

| Keyword | Volume | KD | Competition |
|---|---:|---:|---|
| ai ad generator | 2,400 | 68 | Medium |
| ai marketing agency | 1,600 | 53 | Medium |
| ai marketing platform | 720 | 83 | Low |
| best ai marketing tools | 590 | 24 | Medium |
| ai tools for social media content creation | 210 | 20 | Medium |
| ai marketing for small business | 110 | 15 | Medium |

### Content findings (Issue template)

| Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|
| Non-branded visibility remains low | High | 6 total ranked terms; mostly branded/UGC long-tail | Build category + comparison landing pages mapped to high-intent terms | P1 |
| Existing 41-article library under-leveraged | Medium | Strong inventory, weak non-branded rankings | Cluster internal linking from spokes to commercial pillars | P2 |

### March comparison

- Improvement: ranked keywords increased from 2 to 6.
- Still far behind category leaders for non-branded discovery.

---

## 5) AI/LLM Visibility Findings

### LLM mentions endpoint attempts (model-level)

For each query (`ai marketing platform`, `ai ad generator`, `ai marketing agency`, `ai marketing for small business`, `best ai marketing tools`, `ai social media management`), the endpoint request returned:

- HTTP `404`
- DataForSEO response `status_code=40400`, `status_message="Not Found."`

Attempted endpoint:

- `/v3/dataforseo_labs/ai_optimization/llm_mentions/live`

So model-level mention extraction for ChatGPT/Claude/Gemini/Perplexity was **not returned by API** in this run.

### SERP AI Overview fallback (real collected data)

| Query | AI Overview present | Solara cited in AIO references | Solara organic result |
|---|---|---|---|
| ai marketing platform | No | No | Not found |
| ai ad generator | No | No | Not found |
| ai marketing agency | No | No | Not found |
| ai marketing for small business | Yes (9 refs) | No | Not found |
| best ai marketing tools | Yes (10 refs) | No | Not found |
| ai social media management | No | No | Not found |

### AI findings (Issue template)

| Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|
| No observed non-branded AI citation | High | 0/6 target queries cited Solara in AIO references | Publish citation-structured content (definitions, stats, comparison blocks) | P1 |
| Model-level monitoring blocked in API | Medium | LLM mentions endpoint returns 40400 | Verify endpoint entitlement/path with DataForSEO support and rerun baseline | P1 |

---

## 6) Backlink & Authority Findings

### Fresh backlink profile (DataForSEO Backlinks API)

- Domain rank: **122**
- Total backlinks: **202** (bulk endpoint: 195)
- Referring domains: **77**
- Referring main domains: **70**
- Referring pages: **142**
- Referring IPs: **53**
- Backlink spam score: **17**
- Target spam score: **12**

### Competitive backlink gap (bulk referring domains)

| Domain | Referring domains | Gap vs Solara |
|---|---:|---:|
| solaraai.com | 77 | — |
| jasper.ai | 33,711 | 437.8x |
| copy.ai | 24,556 | 318.9x |
| blaze.ai | 3,633 | 47.2x |
| anyword.com | 5,416 | 70.3x |

### Competitive backlink gap (bulk backlinks)

| Domain | Backlinks | Gap vs Solara |
|---|---:|---:|
| solaraai.com | 195 | — |
| jasper.ai | 217,556 | 1,115.7x |
| copy.ai | 177,951 | 912.6x |
| blaze.ai | 22,619 | 116.0x |
| anyword.com | 30,625 | 157.1x |

### Domain intersection opportunities (442 total)

Sample high-value domains linking to all 4 competitors (not Solara):

- clickup.com
- toolify.ai
- beehiiv.com
- topai.tools
- hubspot.com
- unite.ai
- ranktracker.com
- quickcreator.io
- seektool.ai
- best-ai-tools.org

### Backlink findings (Issue template)

| Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|
| Severe authority gap vs direct competitors | High | Solara 77 referring domains vs 3,633–33,711 competitors | Prioritize digital PR and link outreach on 4-way intersection domains | P1 |
| Elevated spam score vs peers | Medium | Solara spam score 17 vs Jasper 8 / Copy 10 / Anyword 10 | Audit link profile quality and disavow candidates where needed | P2 |

---

## 7) Prioritized Action Plan (P1 / P2 / P3)

### P1 (0–2 weeks)

| Action | Owner | Dependency | Success metric |
|---|---|---|---|
| Fix `/case-study` title/description/H1 | SEO + Engineering | Content approval | No `no_title/no_description/no_h1_tag` flags |
| LCP remediation for `/contact` and `/about` | Engineering | Perf profiling | LCP under 3.5s mobile for both pages |
| Launch 3 money pages (`/ai-ad-generator`, `/ai-marketing-agency`, `/ai-marketing-platform`) | SEO + Content | Briefs + design/dev | Indexed + ranking for target terms |
| Start intersection link outreach (first 50 domains) | SEO + PR | Outreach list | +30 new referring domains in 60 days |
| Resolve LLM mentions API route/access with DataForSEO | SEO Ops | Vendor support | Model-level mentions baseline available |

### P2 (2–6 weeks)

| Action | Owner | Dependency | Success metric |
|---|---|---|---|
| Title rewrite pass across 32 long titles | SEO Content | Editorial | <10 long-title flags |
| Internal-link cluster rollout across 41 blogs | SEO | Cluster map | Each pillar gets ≥12 contextual internal links |
| Add/validate structured data on revenue pages | SEO Tech | QA | Rich result eligibility checks pass |

### P3 (6–12 weeks)

| Action | Owner | Dependency | Success metric |
|---|---|---|---|
| Publish competitor alternative cluster pages | Content | Product positioning | Top-30 rankings on alternative keywords |
| Scale authority campaigns (directories, guest posts, data assets) | PR + Content | Asset calendar | +100 net new referring domains in 90 days |
| Monthly AI visibility benchmark pack | SEO Ops | API access | Track citation share trend per query set |

---

## Appendix — Verification snapshots

- Backlinks summary: `status_code=20000`, `task_status=20000`
- Bulk referring domains: `status_code=20000`, `task_status=20000`
- Backlink domain intersection: `status_code=20000`, `task_status=20000`, total opportunities = **442**
- LLM mentions endpoint attempts: HTTP `404` + DataForSEO `40400 Not Found` on all 6 required queries
- SERP AI Overview fallback calls: `status_code=20000`, `task_status=20000` for all 6 required queries
