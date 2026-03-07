import Image from "next/image";
import { notFound } from "next/navigation";
import { TopNav } from "@/components/LandingSections";
import { getArticle, getAllSlugs } from "@/lib/articles";
import { ArticleContent } from "./ArticleContent";
import { RelatedArticles } from "./RelatedArticles";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white text-ink-900">
      <TopNav />

      {/* Thumbnail — full width above the two-column layout */}
      <section className="pt-32">
        <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={1200}
              height={630}
              className="h-auto w-full"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Header + TOC + Content — all in one two-column layout */}
      <ArticleContent article={article} />

      <RelatedArticles currentSlug={slug} />

      {/* CTA */}
      <section className="border-t border-line bg-shell px-6 py-20 text-center sm:px-10">
        <h2
          className="mx-auto max-w-xl leading-tight tracking-[-0.015em]"
          style={{
            fontFamily: "var(--font-soehne)",
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
          }}
        >
          Turn your marketing engine on.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-[0.88rem] text-ink-700/60">
          Start free. No credit card required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://app.solaraai.com/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-ink-900 px-7 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Start free trial
          </a>
          <a
            href="https://calendly.com/ilay-mor-solaraai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-line bg-white px-7 py-3.5 text-[0.82rem] font-medium tracking-[0.08em] text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900/30"
          >
            Book a call
          </a>
        </div>
      </section>
    </main>
  );
}
