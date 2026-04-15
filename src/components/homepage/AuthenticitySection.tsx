import { BlurFade } from "@/components/ui/blur-fade";

export default function AuthenticitySection() {
  return (
    <section
      className="bg-white px-6 py-24 sm:px-10 sm:py-32"
      aria-label="Authenticity"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <BlurFade delay={0}>
              <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
                Not more AI content.
                <br />
                <span className="text-ink-700">
                  Content that actually sounds like you.
                </span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.12}>
              <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-ink-700">
                <p>
                  There is a version of AI-generated social content that makes
                  your brand look like it was produced by a committee and
                  approved by no one.
                </p>
                <p>
                  Same hooks. Same formats. Same lifeless tone as every other
                  AI-generated feed.
                </p>
                <p>Solara is not that.</p>
                <p>
                  Organic growth comes from authenticity — real expertise, useful
                  content, a voice that sounds like a person who knows what
                  they&apos;re talking about.
                </p>
                <p>
                  Solara is built to extract real signal from your business. Your
                  knowledge. Your environment. Your perspective. And shape it
                  into content that earns trust.
                </p>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.18} className="flex flex-col justify-center">
            <div className="border-l-2 border-ink-900 pl-8">
              <blockquote className="text-xl font-medium italic leading-relaxed tracking-tight text-ink-900 sm:text-2xl lg:text-[1.6rem] lg:leading-[1.35]">
                &ldquo;The goal isn&apos;t a full feed. The goal is content that
                makes someone watch two videos and think: this brand knows its
                market. I should reach out.&rdquo;
              </blockquote>
            </div>

            <div className="mt-16 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-line bg-shell p-5">
                <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-ink-900" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-700">
                    Generic AI content
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700 line-through opacity-60">
                    &ldquo;Excited to share our latest updates! Our team is
                    passionate about delivering value to our customers every
                    day.&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-ink-900 bg-ink-900 p-5">
                <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white opacity-60">
                    Solara content
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white">
                    &ldquo;Three mistakes we see every week on kitchen
                    renovations — and what to do instead. Number two costs most
                    homeowners an extra $4,000.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
