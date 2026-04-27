"use client";

import type { ReactNode } from "react";
import {
  BODY,
  DISPLAY,
  Eyebrow,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_MUTED,
  InvoiceCard,
  MarqueeKeyframes,
  ROSE_DEEP,
  ScrollReveal,
  ToolsGrid,
  ToolsMarquee,
  Verdict,
} from "@/components/homepage/teardown-parts";
import {
  V2Section,
  V2SectionInner,
  V2HeadlineBlock,
} from "@/components/homepage-v2/primitives";

function NumberedMarker({ number }: { number: string }) {
  return (
    <div
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
      style={{
        background: INK,
        color: "#fff",
        fontFamily: BODY,
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
      }}
    >
      {number}
    </div>
  );
}

function ExhibitRow({
  number,
  label,
  title,
  prose,
  arithmetic,
  children,
  flip = false,
}: {
  number: string;
  label: string;
  title: string;
  prose: ReactNode;
  arithmetic: ReactNode;
  children: ReactNode;
  flip?: boolean;
}) {
  return (
    <ScrollReveal margin="-15%">
      <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div className={flip ? "lg:order-2" : undefined}>
          <div className="flex items-center gap-4">
            <NumberedMarker number={number} />
            <Eyebrow color={ROSE_DEEP}>{label}</Eyebrow>
          </div>

          <h3
            className="mt-5 max-w-[460px]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.55rem, 2.8vw, 2.15rem)",
              fontWeight: 600,
              letterSpacing: "-0.028em",
              lineHeight: 1.1,
              color: INK,
            }}
          >
            {title}
          </h3>

          <p
            className="mt-4 max-w-[440px]"
            style={{
              fontFamily: BODY,
              fontSize: "0.96rem",
              lineHeight: 1.7,
              color: INK_MUTED,
            }}
          >
            {prose}
          </p>

          <div
            className="mt-6 max-w-[440px] border-l-2 pl-4"
            style={{ borderColor: ROSE_DEEP }}
          >
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontWeight: 600,
                letterSpacing: "-0.018em",
                lineHeight: 1.4,
                color: INK,
              }}
            >
              {arithmetic}
            </p>
          </div>
        </div>

        <div className={flip ? "lg:order-1" : undefined}>{children}</div>
      </div>
    </ScrollReveal>
  );
}

export function TeardownV2() {
  return (
    <V2Section id="home-v2-teardown">
      <MarqueeKeyframes />
      <V2SectionInner>
        <V2HeadlineBlock
          eyebrow="02 · THE TEARDOWN"
          headline={
            <>You&rsquo;ve tried both. Both make you the bottleneck.</>
          }
          sub={
            <>
              There&rsquo;s the agency that bills you to direct you. And the
              toolkit that promises autopilot but can&rsquo;t decide what to
              post. Here&rsquo;s what each one actually is.
            </>
          }
        />

        <div
          className="relative mt-10"
          style={{
            borderLeft: `1px solid ${HAIRLINE_HEAVY}`,
            paddingLeft: "clamp(20px, 4vw, 40px)",
          }}
        >
          <ExhibitRow
            number="01"
            label="Exhibit A · The agency"
            title="$2,000/month for instructions."
            prose={
              <>
                On-site or on Zoom, they arrive with one thing: a list of
                things to film this week. You bring the clips. They process
                everything later on a laptop without you &mdash; captions,
                edits, schedule, report.
              </>
            }
            arithmetic={<>$24,000 a year. For someone to hand you a shot list.</>}
          >
            <InvoiceCard compact staticLines />
          </ExhibitRow>

          <div
            className="my-2"
            style={{ borderTop: `1px dashed ${HAIRLINE}` }}
          />

          <ExhibitRow
            number="02"
            label="Exhibit B · The toolkit"
            title="$150–600/month for auto-complete."
            flip
            prose={
              <>
                A scheduler doesn&rsquo;t know what to schedule. A caption
                tool doesn&rsquo;t know your customer. A trend feed
                doesn&rsquo;t know what works for{" "}
                <strong style={{ color: INK, fontWeight: 600 }}>your</strong>{" "}
                business. Auto-complete on a blank page is still a blank page.
              </>
            }
            arithmetic={<>5 subscriptions. 3 logins. Still no posts.</>}
          >
            <ToolsGrid compact columns={2} />
          </ExhibitRow>
        </div>

        <ScrollReveal delay={0.15} margin="-10%">
          <div className="mt-12">
            <ToolsMarquee />
          </div>
        </ScrollReveal>
      </V2SectionInner>

      <div
        className="mt-10 border-t"
        style={{ borderColor: HAIRLINE, borderTopWidth: 2 }}
      >
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Verdict compact />
        </div>
      </div>

      <div className="border-t" style={{ borderColor: HAIRLINE }}>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.55rem, 3.2vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.036em",
              lineHeight: 1.08,
              color: INK,
            }}
          >
            That&rsquo;s the gap Solara was built for.
          </p>
        </div>
      </div>
    </V2Section>
  );
}
