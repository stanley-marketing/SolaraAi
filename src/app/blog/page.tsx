import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { articles as allArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Solara AI Blog | Marketing Guides, Comparisons, and Strategy",
  description:
    "Frameworks, tools, and strategies for marketers who want to move faster with AI, SEO, GEO, paid ads, and content systems.",
  alternates: {
    canonical: "https://solaraai.com/blog",
  },
  openGraph: {
    title: "Solara AI Blog | Marketing Guides, Comparisons, and Strategy",
    description:
      "Frameworks, tools, and strategies for marketers who want to move faster with AI, SEO, GEO, paid ads, and content systems.",
    url: "https://solaraai.com/blog",
    siteName: "Solara AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara AI Blog | Marketing Guides, Comparisons, and Strategy",
    description:
      "Frameworks, tools, and strategies for marketers who want to move faster with AI, SEO, GEO, paid ads, and content systems.",
  },
};

const AUTHOR = {
  name: "Yuval Strutti",
  avatar: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/690750f26031dfaacaf32be1_iV_Hy7-_vh6qz7lMknoxU%20(1).jpg",
};

const articles = allArticles.map((a, i) => ({
  id: i + 1,
  title: a.title,
  excerpt: a.excerpt,
  readTime: a.readTime,
  date: a.date,
  tag: a.tag,
  href: `/blog/${a.slug}`,
  thumbnail: a.thumbnail,
}));

const tagColors: Record<string, string> = {
  Comparison: "bg-fog text-[#344054]",
  Guide: "bg-amber/10 text-[#B54708]",
  Strategy: "bg-rose/10 text-[#B42318]",
  Trends: "bg-gold/10 text-[#7A5C00]",
  Knowledge: "bg-sky-50 text-[#0E6BA8]",
};

const [featured, ...rest] = articles;

function AuthorChip() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-6 w-6 overflow-hidden rounded-full border border-line">
        <Image
          src={AUTHOR.avatar}
          alt={AUTHOR.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <span className="text-[13px] text-[#667085]">{AUTHOR.name}</span>
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <>
    <main className="min-h-screen bg-white text-ink-900">
      <TopNav />

      {/* CollectionPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Solara AI Blog | Marketing Guides, Comparisons, and Strategy",
            url: "https://solaraai.com/blog",
            description:
              "Frameworks, tools, and strategies for marketers who want to move faster with AI, SEO, GEO, paid ads, and content systems.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://solaraai.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://solaraai.com/blog",
                },
              ],
            },
            isPartOf: {
              "@type": "WebSite",
              name: "Solara AI",
              url: "https://solaraai.com",
            },
          }),
        }}
      />

      <div className="font-[family-name:var(--font-blog)]">
      {/* Header */}
      <section className="px-6 pb-4 pt-40 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50">
            Articles
          </p>
          <div className="flex items-end justify-between gap-6">
            <h1
              className="leading-[0.92] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontFamily: "var(--font-display)",
              }}
            >
              The Knowledge Hub
            </h1>
            <p className="mb-1 hidden max-w-xs text-right text-[16px] leading-relaxed text-ink-700/50 sm:block">
              Frameworks, tools, and strategies for marketers who want to move faster.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-line" />
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href={featured.href}
            className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-line transition-shadow duration-300 hover:shadow-[0_12px_48px_-16px_rgba(17,17,17,0.14)] lg:grid-cols-2"
          >
            {/* Thumbnail */}
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-[360px]">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                unoptimized
              />
              <div className="absolute inset-0 bg-ink-900/20" />
              <div className="absolute left-6 top-6">
                <span className="inline-block rounded-full border border-white/30 bg-white/10 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between bg-shell p-8 lg:p-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] ${tagColors[featured.tag] ?? "bg-fog text-[#344054]"}`}>
                    {featured.tag}
                  </span>
                  <span className="text-[13px] text-[#667085]">{featured.readTime}</span>
                </div>
                <h2
                  className="mt-4 leading-tight tracking-[-0.015em] text-ink-900"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  }}
                >
                  {featured.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#344054]">
                  {featured.excerpt}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <AuthorChip />
                <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink-900 underline-offset-4 group-hover:underline">
                  Read article
                  <svg aria-hidden="true" focusable="false" className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-32 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <a
                key={article.id}
                href={article.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-150 hover:shadow-md hover:bg-shell"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] ${tagColors[article.tag] ?? "bg-fog text-[#344054]"}`}>
                      {article.tag}
                    </span>
                    <span className="text-[13px] text-[#667085]">{article.readTime}</span>
                  </div>

                  <h3
                    className="mt-3 flex-1 leading-snug tracking-[-0.01em] text-ink-900"
                    style={{
                      fontFamily: "var(--font-blog)",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {article.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-relaxed text-[#344054] line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <AuthorChip />
                    <span className="text-[13px] text-[#667085]">{article.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </div>
    </main>
    <Footer />
  </>
  );
}
