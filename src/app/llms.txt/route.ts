const SITE_URL = "https://solaraai.com";

const content = `# Solara AI

> AI-powered marketing platform that manages ads, social media, SEO, and content for growing businesses.

Solara AI is a full-stack AI marketing platform designed for small-to-medium businesses, marketing agencies, and solo entrepreneurs. It automates campaign management across Google Ads, Meta Ads, TikTok, social media scheduling, SEO optimization, and content creation — replacing the need for multiple marketing tools or agency retainers.

Founded in 2024. Pre-seed funded ($1.2M). Headquartered remotely.

## Key Pages

- [Homepage](${SITE_URL}/): Platform overview, value proposition, and feature summary
- [Pricing](${SITE_URL}/pricing): Two paths — Self-managed (Starter $49, Growth $99, Pro $199, Advanced $319/mo) and Solara Expert (Essential $499, Growth $999, Scale custom/mo). 40% off annual.
- [About](${SITE_URL}/about): Company story, mission, founding team
- [Contact](${SITE_URL}/contact): Sales inquiries, demo requests, support
- [Blog](${SITE_URL}/blog): Marketing guides, product updates, industry insights

## Partner Pages

- [For Agencies](${SITE_URL}/partners/agencies): White-label AI marketing for agencies managing multiple clients
- [For Marketers](${SITE_URL}/partners/marketers): AI-powered workflows for in-house marketing teams
- [Referral Program](${SITE_URL}/partners/referral-program): Earn 20–30% revenue share for 12 months per referral
- [For Setup Operators](${SITE_URL}/partners/setup-operators): Onboarding and setup services for Solara AI customers

## Case Studies

- [Maison Remodeling Group Case Study](${SITE_URL}/case-study/maison-remodeling-group): Home remodeling contractor achieves marketing automation results with AI-driven campaigns

## Optional

- [Full LLM Context](${SITE_URL}/llms-full.txt): Expanded product details, pricing breakdown, feature list, and FAQs
`;

export function GET() {
  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
