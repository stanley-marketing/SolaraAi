"use client";

import { HelpCircle, Zap, Globe, Clock } from "lucide-react";

import {
  PartnerPageShell,
  PartnerHero,
  PartnerPitchBlock,
  PartnerBenefitsGrid,
  PartnerProcessSteps,
  PartnerFinalCta,
} from "@/components/partners";

/* ──────────────────────────────────────────────────────────────
   MarketerPage
   Product persona page for solo marketers and small teams.
   Route: /for/marketers
   No globe, no partner/affiliate language, no whileInView.
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
    title: "White-label reports",
    body: "Send clients and stakeholders polished, branded reports without spending hours in spreadsheets.",
  },
  {
    title: "White-label tech stack",
    body: "Present a seamless, branded experience across every tool in your marketing workflow.",
    comingSoon: true,
  },
  {
    title: "Early access to features",
    body: "Get new Solara capabilities before they roll out broadly — stay ahead of the curve.",
  },
  {
    title: "Co-branded case studies",
    body: "Turn your results into proof. Solara helps you document and publish what you've built.",
  },
  {
    title: "Major discounts",
    body: "Access Solara at rates that make sense for solo marketers and lean teams.",
  },
  {
    title: "And way more",
    body: "The platform keeps expanding. Early adopters shape what gets built next.",
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

const FAQ_ITEMS: { question: string; answer: string; icon: React.ReactNode }[] =
  [
    {
      question: "How does Solara help solo marketers?",
      answer:
        "Solara connects every channel you run — ads, email, content, landing pages — into a single system that monitors, cross-references, and prepares fixes automatically. Instead of spending your day diagnosing what's wrong and coordinating changes, you spend it reviewing what Solara has already prepared. One marketer with Solara can operate at the output level of a full team.",
      icon: <Zap size={18} strokeWidth={1.5} className="text-purple-500" />,
    },
    {
      question: "What channels does Solara connect?",
      answer:
        "Solara integrates with your paid ads, email platform, landing pages, content, and analytics. The system maps how each channel affects the others — so when your ad CTR drops, Solara already knows whether it's a creative issue, a landing page mismatch, or a shift in search intent. You get the full picture, not just a single metric.",
      icon: <Globe size={18} strokeWidth={1.5} className="text-purple-500" />,
    },
    {
      question: "How long until I see results?",
      answer:
        "Most marketers see their first Solara-prepared recommendations within the first week of connecting their channels. The system learns your setup quickly. By week two, you'll have a queue of approved changes live in market. The compounding effect — where every channel learns from every other — typically becomes visible within the first 30 days.",
      icon: <Clock size={18} strokeWidth={1.5} className="text-purple-500" />,
    },
  ];

export function MarketerPage() {
  return (
    <PartnerPageShell>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PartnerHero
        eyebrow="SOLARA FOR MARKETERS"
        headline="Be the one employee who delivers what a full team couldn't."
        subhead="Not by working harder. By being the person whose marketing is connected — where every channel sees every other channel and the whole system self-corrects while you focus on the decisions that matter."
        primaryCta={{
          label: "Get the Free Marketer Guide",
          href: "/for/marketers/guide",
        }}
        secondaryCta={{
          label: "See What Marketers Are Doing With Solara",
          href: "/for/marketers#results",
        }}
        useGlobe={false}
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
      <section className="border-t border-gray-100 bg-[#fafafa] px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <HelpCircle size={16} strokeWidth={1.5} className="text-purple-500" />
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.14em",
                fontWeight: 500,
                color: "#9ca3af",
                textTransform: "uppercase",
              }}
            >
              Common questions
            </span>
          </div>

          <h2
            className="text-ink-900"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "3rem",
            }}
          >
            Questions from marketers like you
          </h2>

          <div className="flex flex-col gap-0">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.question}
                className="py-8"
                style={{
                  borderTop: i === 0 ? "1px solid #eaecf0" : "1px solid #eaecf0",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ border: "1px solid #e9d5ff", background: "#faf5ff" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="text-ink-900"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        lineHeight: 1.3,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {item.question}
                    </h3>
                    <p
                      className="text-neutral-500"
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        fontFamily: "var(--font-body)",
                        maxWidth: "60ch",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <PartnerFinalCta
        headline="Stop being the bridge between ten disconnected tools. Start being the brain that approves the right moves."
        subtext="Solara connects your entire marketing. When something changes, everything adapts. You just say yes."
        primaryCta={{
          label: "Get the Free Marketer Guide",
          href: "/for/marketers/guide",
        }}
      />
    </PartnerPageShell>
  );
}
