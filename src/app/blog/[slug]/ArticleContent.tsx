"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Article, type ArticleSection } from "@/lib/articles";

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

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function RenderSection({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p className="text-[0.95rem] leading-[1.85] text-ink-700/80">
          {section.text}
        </p>
      );

    case "heading":
      return (
        <h2
          id={slugify(section.text)}
          data-heading
          className="mt-2 scroll-mt-28 text-ink-900"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
          }}
        >
          {section.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="text-[1rem] font-semibold text-ink-900">
          {section.text}
        </h3>
      );

    case "list":
      return (
        <ul className="space-y-2.5 pl-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-ink-700/75">
              <span className="mt-[0.4em] h-1 w-1 shrink-0 rounded-full bg-ink-900/30" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="rounded-xl border border-line bg-shell px-6 py-5">
          <p className="italic text-[0.88rem] leading-relaxed text-ink-700/80">
            {section.text}
          </p>
        </div>
      );

    case "tool":
      return (
        <div>
          <h2
            id={slugify(section.name)}
            data-heading
            className="mt-2 scroll-mt-28 text-ink-900"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
            }}
          >
            {section.number}. {section.name}
          </h2>
          {section.image && (
            <Image
              src={section.image}
              alt={section.name}
              width={900}
              height={480}
              className="mt-4 h-auto w-full rounded-xl object-cover"
              unoptimized
            />
          )}
          <p className="mt-3 text-[0.95rem] leading-[1.85] text-ink-700/80">
            {section.description}
          </p>
          <ul className="mt-3 space-y-2.5 pl-1">
            {section.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-ink-700/75">
                <span className="mt-[0.4em] h-1 w-1 shrink-0 rounded-full bg-ink-900/30" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[0.8rem] text-ink-700/45 uppercase tracking-[0.14em]">
            Pricing: {section.pricing}
          </p>
        </div>
      );

    default:
      return null;
  }
}

export function ArticleContent({ article }: { article: Article }) {
  const headings = article.content
    .filter((s) => s.type === "heading" || s.type === "tool")
    .map((s) => {
      if (s.type === "tool") {
        const label = `${s.number}. ${s.name}`;
        return { text: label, id: slugify(s.name) };
      }
      return { text: s.text, id: slugify(s.text) };
    });

  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    document.querySelectorAll("[data-heading]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10">
      <div className="relative flex gap-16 pt-12">

        {/* Sticky TOC — left side */}
        {headings.length > 0 && (
          <aside className="hidden w-48 shrink-0 xl:block">
            <div className="sticky top-28">
              <p className="mb-4 text-[0.58rem] uppercase tracking-[0.22em] text-ink-700/40">
                On this page
              </p>
              <nav className="flex flex-col">
                {headings.map(({ text, id }) => {
                  const isActive = activeId === id;
                  return (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className="group relative py-2 text-left"
                    >
                      {/* Active bar */}
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px transition-all duration-300 ${
                          isActive ? "h-full bg-ink-900" : "h-0 bg-line group-hover:h-full group-hover:bg-line"
                        }`}
                      />
                      <span
                        className={`block pl-4 text-[0.68rem] leading-snug transition-all duration-200 ${
                          isActive
                            ? "text-ink-900 font-medium"
                            : "text-ink-700/40 hover:text-ink-700/70"
                        }`}
                      >
                        {text}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Reading progress bar */}
              <ReadingProgress />
            </div>
          </aside>
        )}

        {/* Article body */}
        <div className="min-w-0 flex-1">

          {/* Header — title, meta, author */}
          <div className="pt-10 pb-8 border-b border-line">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.16em] ${tagColors[article.tag] ?? "bg-fog text-ink-700/60"}`}>
                {article.tag}
              </span>
              <span className="text-[0.65rem] text-ink-700/40">{article.readTime}</span>
              <span className="text-[0.65rem] text-ink-700/40">{article.date}</span>
            </div>

            <h1
              className="leading-tight tracking-[-0.02em] text-ink-900"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
              }}
            >
              {article.title}
            </h1>

            <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-700/60">
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-line shrink-0">
                <Image src={AUTHOR.avatar} alt={AUTHOR.name} fill className="object-cover" unoptimized />
              </div>
              <div>
                <p className="text-[0.72rem] font-medium text-ink-900">{AUTHOR.name}</p>
                <p className="text-[0.62rem] text-ink-700/45">Author</p>
              </div>
            </div>
          </div>

          <article className="space-y-7 py-14">
            {article.content.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
          </article>

          {/* Back link */}
          <div className="border-t border-line py-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-ink-700/50 transition-colors hover:text-ink-900"
            >
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min((scrolled / total) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mt-8">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[0.55rem] uppercase tracking-[0.2em] text-ink-700/30">Progress</span>
        <span className="text-[0.55rem] tabular-nums text-ink-700/30">{Math.round(progress)}%</span>
      </div>
      <div className="h-px w-full bg-line">
        <div
          className="h-px bg-ink-900 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
