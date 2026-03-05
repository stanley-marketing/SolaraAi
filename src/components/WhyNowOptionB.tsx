const proofPoints = [
  "acts as your marketing manager",
  "optimizes your ads",
  "creates your content",
  "manages your social",
  "grows your business",
];

export function WhyNowOptionB() {
  return (
    <section className="relative border-t border-black/10 bg-white">
      <div className="w-full px-6 py-24 sm:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-black/55">
              Section 1 / Option B
            </span>
            <h2
              className="mt-4 text-[clamp(2rem,3.1vw,3rem)] leading-[0.95] text-black"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              Why now
            </h2>
            <p className="mt-5 max-w-[16rem] text-[0.95rem] leading-relaxed text-black/58">
              Editorial sticky-rail layout with a dramatic statement finish.
            </p>
          </aside>

          <article className="relative overflow-hidden rounded-[2.6rem] border border-black/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.96)_0%,rgba(248,248,248,0.88)_100%)] px-6 py-8 shadow-[0_30px_110px_-72px_rgba(0,0,0,0.55)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0)_72%)]" />
            <div className="pointer-events-none absolute -right-28 -bottom-24 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0)_75%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-24 h-px bg-gradient-to-r from-transparent via-black/12 to-transparent" />

            <p className="relative max-w-4xl text-[clamp(1.04rem,1.4vw,1.25rem)] leading-[1.68] tracking-[0.01em] text-black/82">
              Marketing is more important now than ever. It turns a business into a brand and makes
              sure people know you exist. But marketing has also never been this fragmented: more
              channels, more tools, more noise, and less clarity than ever before.
            </p>

            <div className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="border-t border-black/12 pt-3">
                  <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-black/66">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <p
                className="text-[clamp(2.2rem,5.1vw,4.3rem)] leading-[0.9] text-black"
                style={{ fontFamily: "var(--font-display-playfair)" }}
              >
                That era is ending.
              </p>

              <p className="max-w-xl text-[clamp(1rem,1.24vw,1.14rem)] leading-[1.72] tracking-[0.006em] text-black/78">
                Solara AI is the AI for marketing. Stop burying yourself in endless tasks, wasting
                time, money, and your sanity trying to figure it out, and start watching marketing
                actually work for you.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
