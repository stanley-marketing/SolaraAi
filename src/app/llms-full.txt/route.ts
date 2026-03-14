const SITE_URL = "https://solaraai.com";
const APP_URL = "https://app.solaraai.com";

const content = `# Solara AI

> AI-powered marketing platform that manages ads, social media, SEO, and content for growing businesses.

## Company Overview

Solara AI is a full-stack AI marketing platform designed for small-to-medium businesses, marketing agencies, and solo entrepreneurs. The platform automates campaign management across Google Ads, Meta Ads, TikTok, social media scheduling, SEO optimization, and content creation — replacing the need for multiple marketing tools or agency retainers.

- **Founded:** 2024
- **Funding:** $1.2M pre-seed
- **Website:** ${SITE_URL}
- **App:** ${APP_URL}
- **Social:** [LinkedIn](https://www.linkedin.com/company/solaraai/) · [Instagram](https://www.instagram.com/solara.ai.official/) · [Facebook](https://www.facebook.com/profile.php?id=61577711271834)

## What Solara AI Does

Solara AI replaces the marketing stack most businesses cobble together — ad managers, social schedulers, SEO tools, content creators, and analytics dashboards — with a single AI-driven platform. Users connect their marketing channels, and Solara AI handles:

1. **Ad Campaign Management** — Creates, optimizes, and manages paid campaigns on Google Ads, Meta (Facebook/Instagram), and TikTok. Includes audience targeting, bid optimization, and creative generation.
2. **Social Media Management** — Schedules and publishes content across multiple social channels with AI-generated captions, hashtags, and optimal posting times.
3. **SEO & GEO Optimization** — Audits websites for search engine and generative engine visibility. Provides keyword recommendations, content optimization, and structured data guidance.
4. **Content Creation** — Generates marketing copy, blog posts, social media content, and ad creatives using AI tailored to the brand voice.
5. **Analytics & Reporting** — Unified dashboard showing campaign performance, ROI tracking, and actionable insights across all channels.
6. **Setup Assistant** — Guided onboarding that connects accounts, configures campaigns, and gets users to first value quickly.

## Pricing

All prices billed annually (monthly billing available at higher rates). All plans include a free trial.

### Starter — $29/month (billed annually)
- Manage up to 3 social media channels
- 1 active ad campaign
- AI setup assistant
- Analytics dashboard
- No website needed to get started
- Best for: Solo entrepreneurs and very small businesses just getting started with marketing

### Growth — $59/month (billed annually) — Most Popular
- Manage up to 5 social media channels
- Up to 3 active ad campaigns
- Quarterly 30-minute strategy calls with a marketing expert
- AI setup assistant
- Analytics dashboard
- Best for: Growing businesses ready to scale their marketing across multiple channels

### Pro — $119/month (billed annually)
- Full SEO + GEO optimization strategy
- Content strategy across up to 5 channels
- Unlimited active ad campaigns
- Quarterly 30-minute strategy calls with a marketing expert
- AI setup assistant
- Analytics dashboard
- Best for: Established businesses wanting comprehensive AI-driven marketing with SEO and content strategy

Monthly pricing: Starter $49/mo, Growth $99/mo, Pro $199/mo (40% savings on annual).

Sign up: ${APP_URL}/auth/signup

## Target Audience

1. **Small-to-medium businesses (SMBs)** — Companies with 1–50 employees who need marketing but lack dedicated marketing staff or budget for agencies.
2. **Marketing agencies** — Agencies managing multiple client accounts who want to white-label AI marketing capabilities and increase margins.
3. **Solo entrepreneurs and freelancers** — Individual business owners who need marketing automation without the learning curve.
4. **In-house marketing teams** — Small marketing teams (1–5 people) looking to amplify their output with AI-powered tools.

## Partner Programs

### Agency Program
Agencies can use Solara AI to manage multiple client marketing accounts from a single dashboard. Features include multi-client management, white-label reporting, and volume-based pricing.
Learn more: ${SITE_URL}/partners/agencies

### Referral Program
Earn 20–30% revenue share for 12 months per referred customer. Tiered commission structure rewards higher-volume referrers.
Learn more: ${SITE_URL}/partners/referral-program

### Setup Operator Program
Certified operators help new Solara AI customers with onboarding, campaign setup, and initial optimization. Operators earn per-setup fees.
Learn more: ${SITE_URL}/partners/setup-operators

## Key Differentiators

1. **All-in-one platform** — Replaces 4–6 separate marketing tools (ad manager + social scheduler + SEO tool + content creator + analytics + reporting).
2. **AI-native, not AI-bolted-on** — Built from the ground up with AI at the core, not a legacy tool with AI features added after the fact.
3. **No expertise required** — The setup assistant guides users through connecting channels and launching their first campaign. No marketing knowledge needed.
4. **Affordable for SMBs** — Starting at $29/month (annual), significantly cheaper than hiring an agency ($2,000–$10,000+/month) or assembling a tool stack.
5. **Multi-channel from day one** — Manages ads, social, SEO, and content in one place rather than requiring users to learn separate tools.

## Frequently Asked Questions

**What is Solara AI?**
Solara AI is an AI-powered marketing platform that automates ad campaigns, social media management, SEO optimization, and content creation for small-to-medium businesses.

**Who is Solara AI for?**
SMBs, marketing agencies, solo entrepreneurs, and small in-house marketing teams who want to run effective marketing without extensive expertise or large budgets.

**What marketing channels does Solara AI support?**
Google Ads, Meta Ads (Facebook and Instagram), TikTok Ads, and social media scheduling across major platforms.

**Do I need marketing experience to use Solara AI?**
No. The AI setup assistant guides you through connecting your accounts and launching your first campaign. The platform handles optimization automatically.

**Can I try Solara AI for free?**
Yes. All plans include a free trial. Sign up at ${APP_URL}/auth/signup.

**What's included in every plan?**
Every plan includes the AI setup assistant, analytics dashboard, and full platform access. Plans differ in the number of social channels, ad campaigns, and whether strategy calls and SEO features are included.

**Can I change my plan later?**
Yes. You can upgrade or downgrade anytime from Settings > Billing. Changes are prorated.

**How do I cancel?**
Go to Settings > Billing > Cancel Subscription. Your account remains active until the end of your current billing period.

**How do strategy calls work?**
Available on Growth and Pro plans. Quarterly 30-minute sessions with a marketing expert to review performance and discuss strategy.

## Contact

- **Sales & demos:** ${SITE_URL}/contact
- **Support:** ${SITE_URL}/contact
- **Sign up:** ${APP_URL}/auth/signup

## Key Pages

- [Homepage](${SITE_URL}/)
- [Pricing](${SITE_URL}/pricing)
- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Blog](${SITE_URL}/blog)
- [For Agencies](${SITE_URL}/partners/agencies)
- [For Marketers](${SITE_URL}/partners/marketers)
- [Referral Program](${SITE_URL}/partners/referral-program)
- [For Setup Operators](${SITE_URL}/partners/setup-operators)
- [Maison Remodeling Group Case Study](${SITE_URL}/case-study/maison-remodeling-group)
`;

export function GET() {
  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
