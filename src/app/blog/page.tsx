import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

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

const articles = [
  {
    id: 1,
    title: "Top 8 UGC Video Editing Apps for Content Creators [2026]",
    excerpt: "The best mobile and desktop apps for editing raw footage into polished UGC — compared on speed, AI features, and output quality for creators in 2026.",
    readTime: "9 min read",
    date: "Jan 2026",
    tag: "Comparison",
    href: "/blog/top-ugc-video-editing-apps",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/691f218f40e04cbc0fbb2540_Frame%202131330149.webp",
  },
  {
    id: 2,
    title: "8 Best Synthesia.io Alternatives for AI Video Making",
    excerpt: "Looking beyond Synthesia? We tested 8 alternatives on avatar quality, voice realism, language support, and price-to-output ratio.",
    readTime: "9 min read",
    date: "Dec 2025",
    tag: "Comparison",
    href: "/blog/synthesia-io-alternatives",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/691e1634576c6ab2ae11e221_Frame%202131330148.webp",
  },
  {
    id: 3,
    title: "How to Add CTAs to AI-Generated UGC Videos [Full Guide]",
    excerpt: "A step-by-step guide on layering effective calls-to-action into AI-generated user content — without killing the authentic feel that makes UGC convert.",
    readTime: "7 min read",
    date: "Dec 2025",
    tag: "Guide",
    href: "/blog/how-to-add-ctas-to-ai-generated-ugc-videos",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/691e1383b5c545966f6f2901_How%20to%20Add%20CTAs%20to%20AI-Generated%20UGC%20Videos.webp",
  },
  {
    id: 4,
    title: "9 Best Influencer Marketing Tools for Brands [Comparison]",
    excerpt: "Discovery, outreach, contract management, and analytics — we ranked the platforms that actually help brands run influencer programs at scale.",
    readTime: "10 min read",
    date: "Nov 2025",
    tag: "Comparison",
    href: "/blog/best-influencer-marketing-tools",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/691e0e926c7b03dfb10d2fb6_Frame%202131330150.webp",
  },
  {
    id: 5,
    title: "8 Best AI Marketing Tools for Smarter Campaigns [Comparison]",
    excerpt: "A deep comparison of the best AI-powered marketing platforms helping brands cut costs, automate execution, and improve campaign performance.",
    readTime: "9 min read",
    date: "Nov 2025",
    tag: "Comparison",
    href: "/blog/best-ai-marketing-tools",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/691b7ae2e5cf906b3c6e7571_Frame%202131330147.webp",
  },
  {
    id: 6,
    title: "How to Become a UGC Creator: A Complete Step-by-Step Guide",
    excerpt: "From niche selection to pitching brands — everything you need to build a consistent UGC income stream as a solo creator.",
    readTime: "8 min read",
    date: "Oct 2025",
    tag: "Guide",
    href: "/blog/how-to-become-a-ugc-creator",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/6913ae55826650a54ae6f03e_Frame%202131330144.webp",
  },
  {
    id: 7,
    title: "Top 8 Higgsfield AI Alternatives for Video Creation [Compared]",
    excerpt: "Higgsfield set a new bar for cinematic AI video — here are 8 tools that match or surpass it for specific creative and marketing use cases.",
    readTime: "9 min read",
    date: "Oct 2025",
    tag: "Comparison",
    href: "/blog/higgsfield-ai-alternatives",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/6913ab47b4444dc208657f9d_Frame%202131330143.webp",
  },
  {
    id: 8,
    title: "Top 8 AI Marketing Automation Trends to Watch in 2025",
    excerpt: "From autonomous content pipelines to AI voice agents — the eight shifts reshaping how brands run marketing end-to-end without growing headcount.",
    readTime: "10 min read",
    date: "Sep 2025",
    tag: "Trends",
    href: "/blog/ai-marketing-automation-trends",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/6913a90358981f4d43ad38ff_Frame%202131330142.png",
  },
  {
    id: 9,
    title: "8 Strategies to Make Your E-Commerce Ads Sell [+Pro Tips]",
    excerpt: "Practical frameworks for writing ad copy, structuring offers, and matching creative to intent — so your paid campaigns stop bleeding budget.",
    readTime: "9 min read",
    date: "Sep 2025",
    tag: "Strategy",
    href: "/blog/ecommerce-advertising-strategies",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/690a2a93b4380403a8542603_Frame%202131330141.webp",
  },
  {
    id: 10,
    title: "8 Best AI Ad Generators for High-Converting Campaigns in 2025",
    excerpt: "We tested the top AI ad creation tools for copy, creative, and targeting. Here's what actually moves the needle on conversion rates.",
    readTime: "9 min read",
    date: "Aug 2025",
    tag: "Comparison",
    href: "/blog/best-ai-ad-generators",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/6900a9e906c8dbf86e98a7c7_Frame%202131330140.webp",
  },
  {
    id: 11,
    title: "9 Creative Product Advertisement Ideas for 2025 [Examples]",
    excerpt: "Real examples and frameworks for ads that stop the scroll — from lifestyle storytelling to problem-first hooks and social proof formats.",
    readTime: "9 min read",
    date: "Aug 2025",
    tag: "Strategy",
    href: "/blog/creative-product-advertisement",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/68ff570d0941b30df9bf03e4_Frame%202131330135.webp",
  },
  {
    id: 12,
    title: "8 Ocoya Alternatives Marketers Should Try [2025 Comparison]",
    excerpt: "If Ocoya isn't cutting it for your social scheduling and AI content needs, here are 8 tools that handle planning, creation, and publishing better.",
    readTime: "10 min read",
    date: "Jul 2025",
    tag: "Comparison",
    href: "/blog/ocoya-alternatives",
    thumbnail: "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/68ff54b37e98595191251e1f_Frame%202131330137.webp",
  },
];

const tagColors: Record<string, string> = {
  Comparison: "bg-fog text-[#344054]",
  Guide: "bg-amber/10 text-[#B54708]",
  Strategy: "bg-rose/10 text-[#B42318]",
  Trends: "bg-gold/10 text-[#7A5C00]",
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
              <Link
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
              </Link>
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
