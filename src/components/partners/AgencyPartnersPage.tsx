import { getCtaHref } from "@/lib/partners/cta-flows";
import {
PartnerPageShell,
PartnerHero,
PartnerPitchBlock,
PartnerBenefitsGrid,
PartnerProcessSteps,
PartnerFinalCta,
PartnerFaq,
} from "@/components/partners";

/* ──────────────────────────────────────────────────────────────
   AgencyPartnersPage
   Content component for /partners/agencies.
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

interface AgencyPartnersPageProps {
  jsonLd?: string[];
}

const PRIMARY_CTA = {
  label: "Get the Free Agency Guide",
  href: getCtaHref("agencies", "primary"),
};

const SECONDARY_CTA = {
  label: "Book a Partner Call",
  href: getCtaHref("agencies", "secondary"),
};

const PITCH_BLOCKS: [
  { headline: string; body: string },
  { headline: string; body: string },
  { headline: string; body: string },
] = [
  {
    headline: "Burnout is an old-fashioned word.",
    body: "Your team isn't burned out because they're bad at marketing. They're burned out because they're the only bridge between ten disconnected tools. Checking dashboards. Pulling data. Manually fixing what broke. Solara eliminates that entire layer. When a landing page underperforms, Solara doesn't wait for someone to notice in next month's report — it detects the drop, cross-references what's working on other channels, and prepares the fix. Your team wakes up to solutions, not problems.",
  },
  {
    headline: "Same team. 10X execution in the first 90 days.",
    body: "Solara doesn't replace your people. It connects everything they're already doing into one system that reacts. Your strategist's insight doesn't die in a doc — it flows into landing pages, emails, ads, and content simultaneously. Your junior marketer isn't stuck building reports — Solara already built them. The talent was always there. Now every channel is aware of every other channel, and your team operates like they're five times larger within the first quarter after launch.",
  },
  {
    headline: "Be the first agencies in. Not the last ones catching up.",
    body: "The agencies that plug into connected marketing infrastructure now will own the next five years of client results. The ones that wait will spend those years trying to close the gap with disconnected tools and manual processes. This is your invitation to step into the new era hand in hand with us. Your competitors are still stitching together HubSpot, Canva, and Google Sheets. You'll be running a system where everything talks to everything — and acts on it.",
  },
];

const BENEFITS_ITEMS = [
  {
    title: "White-label reports",
    body: "Deliver polished, branded performance reports to every client — without your team spending hours pulling data and formatting slides.",
  },
  {
    title: "White-label tech stack",
    body: "Present Solara's full marketing automation infrastructure under your agency's brand. Your clients see your name, not ours.",
    comingSoon: true,
  },
  {
    title: "Early access to every feature",
    body: "Agency partners get first access to every new Solara capability before it reaches the general market. Stay ahead of every competitor.",
  },
  {
    title: "Co-branded publicity",
    body: "We co-market your agency's results alongside ours. Case studies, press mentions, and partner spotlights that build your reputation.",
  },
  {
    title: "Major partner discounts",
    body: "Significant pricing advantages on Solara seats for your entire client roster. The more clients you bring, the better the economics.",
  },
  {
    title: "And way more",
    body: "Dedicated partner support, onboarding assistance, co-selling opportunities, and a direct line to the Solara product team.",
  },
];

const PROCESS_STEPS: [
  { number: string; label: string; body: string },
  { number: string; label: string; body: string },
  { number: string; label: string; body: string },
] = [
  {
    number: "01",
    label: "Apply",
    body: "Tell us about your agency, your clients, and what you need. Takes 2 minutes.",
  },
  {
    number: "02",
    label: "We talk",
    body: "A quick call to set up your co-branding, partner pricing, and access. We onboard you personally.",
  },
  {
    number: "03",
    label: "You launch",
    body: "Connect your clients' marketing into Solara. The system starts detecting, connecting, and acting. You review and approve. Your clients see results they've never seen before.",
  },
];

/* ── FAQ section ──────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    question: "How does Solara work for agencies?",
    answer:
      "Solara connects all of your clients' marketing channels — ads, email, landing pages, content — into one system that detects what's working, what isn't, and prepares fixes automatically. Your team reviews and approves. You stop being the manual bridge between disconnected tools and start delivering results that weren't possible before.",
  },
  {
    question: "What does white-label reporting include?",
    answer:
      "White-label reports include full campaign performance data across every connected channel, formatted under your agency's branding. No manual data pulling, no formatting work. Reports are generated automatically and ready to send to clients. White-label tech stack (presenting the full Solara platform under your brand) is coming soon.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "After your partner application is approved, we schedule a personal onboarding call to configure your co-branding, set up partner pricing, and connect your first client accounts. Most agencies are fully operational within one week of their onboarding call.",
  },
];

export function AgencyPartnersPage({ jsonLd }: AgencyPartnersPageProps) {
  return (
    <PartnerPageShell jsonLd={jsonLd}>
      {/* Hero */}
      <PartnerHero
        eyebrow="SOLARA FOR AGENCIES"
        headline="Burnout is an old-fashioned word."
        subhead="Your team isn't burned out because they're bad at marketing. They're burned out because they're the only bridge between ten disconnected tools. Solara eliminates that entire layer."
        primaryCta={PRIMARY_CTA}
        useGlobe={true}
      />

      {/* Section 1 — The Pitch */}
      <PartnerPitchBlock blocks={PITCH_BLOCKS} />

      {/* Section 2 — What You Get */}
      <PartnerBenefitsGrid
        headline="Everything you need to deliver impossible results without scaling headcount."
        items={BENEFITS_ITEMS}
      />

      {/* Section 3 — How It Works */}
      <PartnerProcessSteps steps={PROCESS_STEPS} />

      {/* FAQ section */}
      <PartnerFaq items={FAQ_ITEMS} />
      {/* Final CTA */}
      <PartnerFinalCta
        headline="Your agency. One connected system. Every client's marketing finally talking to itself."
        subtext="Stop being the human bridge between disconnected tools. Let Solara connect everything and let your team do what they were actually hired to do."
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
    </PartnerPageShell>
  );
}
