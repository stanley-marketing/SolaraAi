# Solara AI — Design Kit

## Colors

### Core Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#ffffff` | Backgrounds, cards |
| `shell` | `#fafafa` | Section backgrounds (comparison, features) |
| `fog` | `#f1f1f1` | Subtle backgrounds, tab containers |
| `line` | `#e3e3e3` | Borders, dividers |
| `ink-700` | `#626262` | Secondary text |
| `ink-900` | `#111111` | Primary text, headings, buttons |
| `black` | `#000000` | Deepest contrast (rare) |

### Extended Grays (used in components)
| Hex | Usage |
|-----|-------|
| `#1f2937` | Feature text, strong body copy |
| `#374151` | Column headers, medium emphasis text |
| `#4b5563` | Subtitles, descriptions |
| `#6b7280` | Muted text, footer copy |
| `#9ca3af` | Placeholder text, disabled states |
| `#c0c5cc` | X marks in comparison (competitor miss) |
| `#d1d5db` | Light borders |
| `#e5e7eb` | Card borders, dividers |
| `#f0f1f3` | Table row dividers |
| `#f3f4f6` | Very light dividers |

### Accent Colors
| Hex | Usage |
|-----|-------|
| `#059669` | Green accent — labels ("Comparison"), badges ("Best for Business") |
| `#d1fae5` | Green accent background — badge pills, check circles |
| `#7c5cfc` | Purple — stat highlights, beam primary |
| `#a855f7` | Purple secondary — stat highlights, beam secondary |
| `#ec4899` | Pink — beam accent |
| `#f59e0b` | Orange — beam accent |

### Gradient
Purple-pink-orange gradient for emphasis text:
```css
background: linear-gradient(to right, #a855f7, #ec4899, #fb923c);
-webkit-background-clip: text;
color: transparent;
```
Tailwind: `bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent`

---

## Typography

### Fonts
| Variable | Font Stack | Usage |
|----------|-----------|-------|
| `--font-display` | Geist Sans, Helvetica Neue, Arial, sans-serif | Headings, hero text, prices |
| `--font-body` | Geist Sans, Helvetica Neue, Arial, sans-serif | Body text, features, descriptions |
| `--font-blog` | Inter | Blog content |
| `--font-display-playfair` | Playfair Display | Display accents (available, not primary) |

### Type Scale
| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| Hero H1 | `clamp(2.5rem, 6.5vw, 5rem)` | 300 | -0.02em | 1.05 |
| Section H2 | `clamp(1.8rem, 3.8vw, 2.75rem)` | 600 | -0.025em | 1.15 |
| Section label | `0.74rem` | 600 | 0.2em | — |
| Subtitle | `clamp(0.95rem, 1.5vw, 1.06rem)` | 400 | — | 1.6 |
| Body text | `0.92rem` | 500 | — | 1.5 |
| Small text | `0.82-0.85rem` | 500-600 | — | — |
| Badge text | `0.68rem` | 600 | 0.04em | — |
| Tiny label | `0.58-0.62rem` | 600 | 0.06-0.12em | — |

---

## Spacing

### Section Padding
| Breakpoint | Horizontal | Vertical |
|------------|-----------|----------|
| Mobile | `px-6` (24px) | `py-24` (96px) |
| Desktop | `sm:px-10` (40px) | `sm:py-32` (128px) |

### Max Widths
| Context | Value |
|---------|-------|
| Narrow sections (pricing) | `max-w-xl` (576px) |
| Standard sections (comparison, features) | `max-w-4xl` (896px) / `max-w-5xl` (1024px) |
| Wide sections (pricing grid) | `1320px` |

---

## Component Patterns

### Buttons
**Primary (dark)**
```
background: #111111
color: #ffffff
border-radius: 999px
padding: 14px 24px (large) / 12px 20px (medium)
font-size: 0.88-0.92rem
font-weight: 600
hover: bg-[#2a2a2a] + shadow
```

**Secondary (outlined)**
```
background: white/60
border: 1px solid #e3e3e3
color: #111111
border-radius: 999px
padding: 12px 24px
backdrop-filter: blur
hover: bg-gray-100
```

### Cards
**Standard card**
```
background: #ffffff
border: 1px solid #e5e7eb
border-radius: 16-20px
padding: 28px 22px (pricing) / 36px 32px (large)
box-shadow: 0 4px 32px rgba(0,0,0,0.06)
```

**Highlighted column (comparison)**
```
background: #ffffff
border: 1px solid #e5e7eb
border-radius: 16px
box-shadow: 0 -4px 24px rgba(0,0,0,0.04)
```

### Badges
**Green accent badge**
```
font-size: 0.68rem
font-weight: 600
color: #059669
background: #d1fae5
border-radius: 999px
padding: 4px 14px
```

### Check/X Icons (comparison)
**Solara check**: 28x28 circle, `#d1fae5` bg, `#059669` check icon
**Competitor check**: 28x28, no bg, `#9ca3af` check icon
**Competitor miss**: 28x28, no bg, `#c0c5cc` X icon

### Section Label Pattern
```
font-size: 0.74rem
font-weight: 600
letter-spacing: 0.2em
text-transform: uppercase
color: #059669
margin-bottom: 18px
text-align: center
```

---

## Animations

### Shimmer Pill
```css
@keyframes shimmer-sweep {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
}
```
2s ease-in-out infinite

### Aurora Background
Hero section uses a multi-layer aurora effect with:
- Repeating gradient columns (white + pastel rainbow)
- `filter: blur(10px) invert(1)`
- 60s linear infinite animation
- Radial mask: `ellipse at 100% 0%`

### PhotonBeam (Three.js)
WebGL beam visualization in the Advantage section. Lazy-loaded, deferred 2s after viewport entry.

---

## Logos & Icons

### Brand
- `Logo.svg` — Full "SOLARA AI" wordmark
- `solara-icon.svg` — Icon mark (black)
- `solara-icon-white.svg` — Icon mark (white)

### Social Platforms
Instagram, TikTok, LinkedIn, Facebook, YouTube, X (Twitter)

### AI Competitors
OpenAI (ChatGPT), Claude, Gemini, Perplexity, Grok, Google AI Overview

### Advertising
Google Ads, Meta

All SVGs in `/design-kit/icons/`
