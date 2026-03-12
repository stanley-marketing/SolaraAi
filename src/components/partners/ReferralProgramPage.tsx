import { ChevronDown } from "lucide-react";

import { getCtaHref } from "@/lib/partners/cta-flows";
import {
  PartnerPageShell,
  PartnerHero,
  PartnerPitchBlock,
  PartnerProcessSteps,
  PartnerFinalCta,
} from "@/components/partners";
import { PartnerTierCards } from "@/components/partners/PartnerTierCards";

/* ──────────────────────────────────────────────────────────────
   ReferralProgramPage
   Full page content for /partners/referral-program.
   Server component — no interactivity needed.
   ────────────────────────────────────────────────────────────── */

interface ReferralProgramPageProps {
  jsonLd?: string[];
}

const REFERRAL_SIGNUP_URL = getCtaHref("referral-program", "primary");
const REWARDS_ANCHOR = getCtaHref("referral-program", "secondary");

export function ReferralProgramPage({ jsonLd }: ReferralProgramPageProps) {
  return (
    <PartnerPageShell jsonLd={jsonLd}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PartnerHero
        eyebrow="SOLARA REFERRAL PROGRAM"
        headline="Make money giving businesses what they've been wishing for."
        subhead="Every business you know is running marketing with disconnected tools and a human trying to hold it all together. You're about to hand them something that actually fixes that — and get paid every time you do."
        primaryCta={{ label: "Get Your Referral Link", href: REFERRAL_SIGNUP_URL }}
        secondaryCta={{ label: "See the Full Reward Breakdown", href: REWARDS_ANCHOR }}
        useGlobe={true}
      />

      {/* ── Pitch blocks ─────────────────────────────────────── */}
      <PartnerPitchBlock
        blocks={[
          {
            headline: "You already know who needs this.",
            body: "That founder who spends Sunday nights checking if ads match the landing page. That marketing lead stitching together Mailchimp, Google Analytics, and Canva — manually — every single week. That agency owner who can't scale because every new client means more manual work, not more leverage. You know these people. You talk to them. Now you have something real to hand them. Not another tool to add to the pile — a system that connects everything they already have and makes it act as one.",
          },
          {
            headline: "Not a one-time payout. A long-term income.",
            body: "This isn't a referral code that earns you a gift card. You earn recurring revenue share on every paying user you bring in. They stay, you get paid. Month after month. The more you refer, the higher your percentage climbs. This compounds — because once a business connects their marketing into Solara and sees it self-correct for the first time, they don't leave.",
          },
          {
            headline: "Become a crucial voice in the AI marketing world.",
            body: "The people who help businesses discover connected marketing right now won't just earn money — they'll become the names people trust in the space. Every business is about to ask \"how do I actually make AI work for my marketing?\" You'll be the person with the answer. Not a spectator watching the shift happen. A partner shaping how businesses move into it.",
          },
        ]}
      />

      {/* ── Tier cards ───────────────────────────────────────── */}
      <PartnerTierCards
        headline="The more you refer, the more you make. Every tier unlocks more."
        tiers={[
          {
            tier: "Tier 1",
            threshold: "10 paying users",
            revenueShare: "20%",
            perks: [
              "Solara Partner badge",
              "Partner profile page",
            ],
          },
          {
            tier: "Tier 2",
            threshold: "25 paying users",
            revenueShare: "25%",
            cashBonus: "$1,000",
            perks: [
              "Listed on official partner page",
            ],
          },
          {
            tier: "Tier 3",
            threshold: "50 paying users",
            revenueShare: "30%",
            cashBonus: "$2,500",
            perks: [
              "Solara promotes your content",
            ],
          },
          {
            tier: "Tier 4",
            threshold: "100+ paying users",
            revenueShare: "30%",
            cashBonus: "$5,000",
            perks: [
              "Official Solara Ambassador",
              "Full co-marketing support",
            ],
          },
        ]}
        finePrint="Only paying users count. Revenue share is calculated on the referred user's subscription for the first 12 months."
      />

      {/* ── How it works ─────────────────────────────────────── */}
      <PartnerProcessSteps
        steps={[
          {
            number: "01",
            label: "Sign up — Get your unique referral link in 30 seconds.",
            body: "Create your referral account and receive a unique link you can share anywhere.",
          },
          {
            number: "02",
            label: "Share — Post it, tweet it, put it in your newsletter, DM it, drop it in your community. However you reach people.",
            body: "There's no right way to share. Use the channels you already have — your audience, your network, your community.",
          },
          {
            number: "03",
            label: "Earn — Every time someone connects their marketing through your link and pays, you earn. Dashboard shows your referrals and revenue in real time.",
            body: "Track every referral and every dollar in your partner dashboard. Payouts are automatic.",
          },
        ]}
      />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <ReferralFaq />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <PartnerFinalCta
        headline="They're running marketing with ten disconnected tools and hope. You have the answer. Get paid for it."
        subtext="Join the referral program and start earning recurring revenue today."
        primaryCta={{ label: "Get Your Referral Link", href: REFERRAL_SIGNUP_URL }}
      />
    </PartnerPageShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   ReferralFaq
   3 referral-specific questions. Server component.
   ────────────────────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    question: "How do I get my referral link?",
    answer:
      "Sign up for the referral program using the button above. Once your account is created, your unique referral link is available immediately in your partner dashboard — no approval process, no waiting.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Revenue share is paid out monthly, 30 days after the referred user's payment clears. Cash bonuses are paid within 14 business days of hitting the qualifying tier threshold. You can track all pending and completed payouts in your dashboard.",
  },
  {
    question: "What counts as a paying user?",
    answer:
      "A paying user is someone who signs up through your referral link and completes a paid subscription — free trials and cancelled accounts do not count. Revenue share is calculated on their subscription payments for the first 12 months from their sign-up date.",
  },
];

function ReferralFaq() {
  return (
    <section className="border-t border-gray-100 bg-white px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
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
          Common questions
        </h2>

        <div className="flex flex-col divide-y divide-gray-100">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-6">
              <summary
                className="flex cursor-pointer list-none items-start justify-between gap-4"
                style={{ WebkitAppearance: "none" }}
              >
                <span
                  className="text-ink-900"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.35,
                  }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden
                  className="mt-0.5 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                  size={18}
                  strokeWidth={1.5}
                />
              </summary>
              <p
                className="mt-4 text-neutral-500"
                style={{
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.7,
                  maxWidth: "60ch",
                }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
