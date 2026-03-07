import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import type { Article } from "@/lib/articles";

const AUTHOR = {
  name: "Yuval Strutti",
  avatar:
    "https://cdn.prod.website-files.com/68e66fb12d1f1e9f896f220b/690750f26031dfaacaf32be1_iV_Hy7-_vh6qz7lMknoxU%20(1).jpg",
};

const tagColors: Record<string, string> = {
  Comparison: "bg-fog text-ink-700/60",
  Guide: "bg-amber-50 text-amber-700",
  Strategy: "bg-rose-50 text-rose-700",
  Trends: "bg-stone-100 text-ink-700/60",
};

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
      <span className="text-[0.65rem] text-ink-700/50">{AUTHOR.name}</span>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col bg-white transition-colors duration-150 hover:bg-shell"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
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
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-[0.56rem] uppercase tracking-[0.16em] ${tagColors[article.tag] ?? "bg-fog text-ink-700/60"}`}
          >
            {article.tag}
          </span>
          <span className="text-[0.6rem] text-ink-700/35">{article.readTime}</span>
        </div>

        <h3
          className="mt-3 flex-1 leading-snug tracking-[-0.01em] text-ink-900"
          style={{
            fontFamily: "var(--font-soehne)",
            fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
          }}
        >
          {article.title}
        </h3>

        <p className="mt-2 text-[0.73rem] leading-relaxed text-ink-700/50 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <AuthorChip />
          <span className="text-[0.6rem] text-ink-700/35">{article.date}</span>
        </div>
      </div>
    </Link>
  );
}

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = articles.filter((a) => a.slug !== currentSlug).slice(0, 6);

  return (
    <section className="border-t border-line px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50">
          More articles
        </p>
        <div className="grid grid-cols-1 gap-x-px gap-y-8 border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 [&>*]:bg-white">
          {related.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
