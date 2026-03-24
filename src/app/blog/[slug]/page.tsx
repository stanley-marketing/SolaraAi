import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { getArticle, getAllSlugs } from "@/lib/articles";
import { ArticleContent } from "./ArticleContent";
import { RelatedArticles } from "./RelatedArticles";
import Link from "next/link";

const AUTHOR = {
  name: "Yuval Strutti",
  avatar:
    "/blog/images/690750f26031dfaacaf32be1_iV_Hy7-_vh6qz7lMknoxU-(1).jpg",
};

const SITE_URL = "https://solaraai.com";

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | Solara AI",
    };
  }

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: `${article.title} | Solara AI`,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "Solara AI",
      type: "article",
      images: [
        {
          url: article.thumbnail,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnail],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const isoDate = toIsoDate(article.date);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.thumbnail,
    ...(isoDate ? { datePublished: isoDate, dateModified: isoDate } : {}),
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      image: AUTHOR.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "Solara AI",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Logo.svg`,
      },
    },
    mainEntityOfPage: articleUrl,
    url: articleUrl,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white text-ink-900">
        <TopNav />

        <div className="font-[family-name:var(--font-blog)]">
        {/* Blog post header — centered */}
        <section className="pt-32 pb-8">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            {/* Back to Blog */}
            <div className="mb-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13px] text-[#667085] transition-colors hover:text-[#0F141F]"
              >
                <svg aria-hidden="true" focusable="false" className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-1.5 text-[13px] text-[#667085]">
              <Link href="/" className="transition-colors hover:text-[#0F141F]">Home</Link>
              <span>/</span>
              <Link href="/blog" className="transition-colors hover:text-[#0F141F]">Blog</Link>
              <span>/</span>
              <span className="max-w-[240px] truncate text-[#344054]">{article.title}</span>
            </nav>

            {/* Title */}
            <h1
              className="mx-auto max-w-3xl text-center leading-tight tracking-[-0.02em] text-ink-900"
              style={{
                fontFamily: "var(--font-blog)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
              }}
            >
              {article.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-center text-[18px] leading-relaxed text-[#344054]">
              {article.excerpt}
            </p>

            {/* Meta row: date · read time · author */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#667085]">
              <span>{article.date}</span>
              <span className="text-[#667085]">·</span>
              <span>{article.readTime}</span>
              <span className="text-[#667085]">·</span>
              <span className="flex items-center gap-2">
                <Image
                  src={AUTHOR.avatar}
                  alt={AUTHOR.name}
                  width={84}
                  height={84}
                  className="h-[42px] w-[42px] rounded-full border border-line object-cover"
                  unoptimized
                />
                By {AUTHOR.name}
              </span>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="pb-4">
          <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
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
        <section
          className="border-t border-line px-6 py-20 text-center sm:px-10"
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundImage:
              "linear-gradient(180deg, rgba(4,4,4,0.35) 0%, rgba(4,4,4,0.72) 100%), url('/blog-cta-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top, rgba(255,255,255,0.10), transparent 38%), linear-gradient(90deg, rgba(0,0,0,0.14), rgba(0,0,0,0.06), rgba(0,0,0,0.14))",
            }}
          />
          <div className="relative z-10">
            <h2
              className="mx-auto max-w-xl leading-tight tracking-[-0.015em] text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 300,
              }}
            >
              Turn your marketing engine on.
            </h2>
            <p
              className="mx-auto mt-4 max-w-sm text-white/78"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.6 }}
            >
              Start free. No credit card required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center rounded-[999px] bg-white px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-black transition-colors duration-200 hover:bg-gray-100"
              >
                Sign Up
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-[999px] border border-white/20 bg-white/10 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/16"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
