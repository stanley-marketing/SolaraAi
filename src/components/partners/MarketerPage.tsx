"use client";



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
   MarketerPage
   Product persona page for solo marketers and small teams.
   Route: /partners/marketers
   Globe enabled, no partner/affiliate language, no whileInView.
   ────────────────────────────────────────────────────────────── */

const PITCH_BLOCKS: [
  { headline: string; body: string },
  { headline: string; body: string },
  { headline: string; body: string },
] = [
  {
    headline: "Your team doesn't need more people. It needs you on Solara.",
    body: "One marketer connected to Solara delivers what used to take a team of four in a typical week — because you're not the one stitching everything together anymore. When conversion drops on a landing page, you're not the one digging through analytics to figure out why. Solara already cross-referenced it with what's working in your emails, what your ICP is searching for, and what your competitors just changed. You wake up Monday morning to five items in your approval queue. Not five problems. Five solutions waiting for your sign-off.",
  },
  {
    headline: "Be the person your team gets excited about.",
    body: "You know that feeling when someone on the team just ships? Doesn't talk about it for three weeks — just launches the campaign, delivers the results, moves the number? That's you now. While everyone else is still in a meeting about the brief, you've already approved three campaign updates that Solara prepared overnight. You become the person the team rallies around because things actually happen when you're involved.",
  },
  {
    headline: "Your talent is the ceiling. Solara removes the floor.",
    body: "This isn't about replacing your instincts or your creativity. It's about removing every gap between your idea and it being live across every channel. Today you have the strategy but spend 80% of your typical workweek on execution and coordination. Solara handles the execution and coordination. You handle the judgment. The gap between what you know you can do and what actually ships — that gap disappears.",
  },
];

const BENEFITS_ITEMS = [
  {
    title: "AI-generated content across every channel",
    body: "Blog posts, social captions, email sequences, and ad copy — all produced in minutes, not days.",
  },
  {
    title: "Campaign performance that compounds",
    body: "Solara learns your brand voice and audience over time, improving results with every campaign you run.",
    comingSoon: false,
  },
  {
    title: "One platform, every channel",
    body: "Manage SEO, social, email, and paid ads from a single dashboard. No more juggling five tools.",
  },
  {
    title: "Reporting your CMO will actually read",
    body: "Auto-generated performance summaries with plain-English insights, ready to share in one click.",
  },
  {
    title: "Always-on content calendar",
    body: "Never stare at a blank page again. Solara fills your calendar with on-brand ideas tailored to your goals.",
  },
  {
    title: "Built for lean teams",
    body: "Whether you're a team of one or ten, Solara scales with you — no agency retainer required.",
  },
];

const PROCESS_STEPS: [
  { number: string; label: string; body: string },
  { number: string; label: string; body: string },
  { number: string; label: string; body: string },
] = [
  {
    number: "01",
    label: "Get the guide",
    body: "See exactly how solo marketers are using Solara to outperform entire departments. Not theory. Real workflows.",
  },
  {
    number: "02",
    label: "Connect your marketing",
    body: "Plug your channels into Solara. The system starts mapping connections between everything — your ads, your emails, your pages, your content, your data.",
  },
  {
    number: "03",
    label: "Approve and ship",
    body: "Solara works. You review. Monday morning you open your queue: landing page fix, email update, content draft, ad reallocation. Approve, edit, or reject. That's your job now.",
  },
];

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How does Solara help solo marketers?",
    answer:
      "Solara connects every channel you run — ads, email, content, landing pages — into a single system that monitors, cross-references, and prepares fixes automatically. Instead of spending your day diagnosing what's wrong and coordinating changes, you spend it reviewing what Solara has already prepared. One marketer with Solara can operate at the output level of a full team.",
  },
  {
    question: "What channels does Solara connect?",
    answer:
      "Solara integrates with your paid ads, email platform, landing pages, content, and analytics. The system maps how each channel affects the others — so when your ad CTR drops, Solara already knows whether it's a creative issue, a landing page mismatch, or a shift in search intent. You get the full picture, not just a single metric.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most marketers see their first Solara-prepared recommendations within the first week of connecting their channels. The system learns your setup quickly. By week two, you'll have a queue of approved changes live in market. The compounding effect — where every channel learns from every other — typically becomes visible within the first 30 days.",
  },
];

interface MarketerPageProps {
  jsonLd?: string[];
}

export function MarketerPage({ jsonLd }: MarketerPageProps) {
  return (
    <PartnerPageShell jsonLd={jsonLd}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PartnerHero
        eyebrow="SOLARA FOR MARKETERS"
        headline="Be the one employee who delivers what a full team couldn't."
        subhead="Not by working harder. By being the person whose marketing is connected — where every channel sees every other channel and the whole system self-corrects while you focus on the decisions that matter."
        primaryCta={{
          label: "Get the Free Marketer Guide",
          href: getCtaHref("marketers", "primary"),
        }}
        secondaryCta={{
          label: "See What Marketers Are Doing With Solara",
          href: getCtaHref("marketers", "secondary"),
        }}
        useGlobe={true}
      />

      {/* ── Pitch blocks ─────────────────────────────────────── */}
      <PartnerPitchBlock blocks={PITCH_BLOCKS} />

      {/* ── Benefits grid ────────────────────────────────────── */}
      <PartnerBenefitsGrid
        headline="Everything you need to operate like a full marketing department."
        items={BENEFITS_ITEMS}
      />

      {/* ── Process steps ────────────────────────────────────── */}
      <PartnerProcessSteps steps={PROCESS_STEPS} />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {/* ── FAQ ──────────────────────────────────────────────── */}
      <PartnerFaq items={FAQ_ITEMS} />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <PartnerFinalCta
        headline="Stop being the bridge between ten disconnected tools. Start being the brain that approves the right moves."
        subtext="Solara connects your entire marketing. When something changes, everything adapts. You just say yes."
        primaryCta={{
          label: "Get the Free Marketer Guide",
          href: getCtaHref("marketers", "primary"),
        }}
      />
    </PartnerPageShell>
  );
}
