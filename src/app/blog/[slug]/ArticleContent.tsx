"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Article, type ArticleSection } from "@/lib/articles";

const AUTHOR = {
  name: "Yuval Strutti",
  avatar:
    "/blog/images/690750f26031dfaacaf32be1_iV_Hy7-_vh6qz7lMknoxU-(1).jpg",
};

const tagColors: Record<string, string> = {
  Comparison: "bg-fog text-[#344054]",
  Guide: "bg-amber-50 text-amber-700",
  Strategy: "bg-rose-50 text-rose-700",
  Trends: "bg-stone-100 text-[#344054]",
  Knowledge: "bg-sky-50 text-[#0E6BA8]",
};

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getSectionKey(section: ArticleSection, index: number) {
  switch (section.type) {
    case "paragraph":
    case "heading":
    case "subheading":
    case "callout":
      return `${section.type}-${section.text.slice(0, 40)}-${index}`;
    case "list":
      return `${section.type}-${section.items.join("|").slice(0, 60)}-${index}`;
    case "image":
      return `${section.type}-${section.src.slice(-30)}-${index}`;
    case "tool":
      return `${section.type}-${section.number}-${section.name}`;
    default:
      return `${index}`;
  }
}

function RenderSection({ section, isLead = false }: { section: ArticleSection; isLead?: boolean }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p
          className={`font-[family-name:var(--font-blog)] font-normal tracking-[-0.14px] text-[#0F141F] whitespace-pre-wrap break-words ${
            isLead
              ? "mb-5 text-[18px] leading-[1.85] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[3.6rem] first-letter:leading-[0.82] first-letter:font-medium"
              : "mb-[14px] text-[16px] leading-[1.6]"
          }`}
        >
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
              fontFamily: "var(--font-blog)",
              fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
              fontWeight: 700,
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
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-blog)] text-[16px] leading-relaxed text-[#0F141F]">
              <svg aria-hidden="true" focusable="false" className="mt-[3px] h-4 w-4 shrink-0 text-[#0f141f]" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="rounded-xl border border-line bg-shell px-6 py-5">
          <p className="italic font-[family-name:var(--font-blog)] text-[0.88rem] leading-relaxed text-[#0F141F]">
            {section.text}
          </p>
        </div>
      );

    case "image":
      return (
        <figure className="my-6">
          <Image
            src={section.src}
            alt={section.alt}
            width={900}
            height={500}
            className="h-auto w-full rounded-xl object-cover"
            unoptimized
          />
        </figure>
      );

    case "tool":
      return (
        <div className="border-t border-line pt-10">
          <h2
            id={slugify(section.name)}
            data-heading
            className="scroll-mt-28 text-ink-900"
            style={{
              fontFamily: "var(--font-blog)",
              fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
              fontWeight: 700,
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
              className="mt-6 h-auto w-full rounded-xl object-cover"
              unoptimized
            />
          )}
          <p className="mt-5 font-[family-name:var(--font-blog)] text-[16px] font-normal leading-[1.7] text-[#0F141F]">
            {section.description}
          </p>

          {/* Feature list card */}
          <div className="mt-5 rounded-lg border border-line/60 bg-[#FAFBFC] px-5 py-4">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#344054]">Key features</p>
            <ul className="space-y-2.5">
              {section.features.map((f) => (
                <li key={f} className="flex items-start gap-3 font-[family-name:var(--font-blog)] text-[15px] leading-relaxed text-[#0F141F]">
                  <svg aria-hidden="true" focusable="false" className="mt-[3px] h-4 w-4 shrink-0 text-[#0f141f]" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-line/60 pt-3">
              <p className="text-[14px] text-[#344054]">
                <span className="font-semibold text-[#0F141F]">Pricing:</span>{" "}
                {section.pricing}
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function ArticleContent({ article }: { article: Article }) {
  const headings = useMemo(
    () =>
      article.content
        .filter((s) => s.type === "heading" || s.type === "tool")
        .map((s) => {
          if (s.type === "tool") {
            const label = `${s.number}. ${s.name}`;
            return { text: label, id: slugify(s.name) };
          }
          return { text: s.text, id: slugify(s.text) };
        }),
    [article.content]
  );

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
  }, [headings]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 font-[family-name:var(--font-blog)]">
      <div className="relative flex gap-36 pt-12">

        {/* Article body */}
        <div className="min-w-0 flex-1">



          <article className="space-y-7 py-14">
            {article.content.map((section, i) => (
              <RenderSection
                key={getSectionKey(section, i)}
                section={section}
                isLead={i === 0 && section.type === "paragraph"}
              />
            ))}
          </article>
        </div>

        {/* Sticky TOC — right side */}
        {headings.length > 0 && (
          <aside className="hidden w-48 shrink-0 xl:block">
            <div className="sticky top-28">
              <p className="mb-4 text-[14px] uppercase tracking-[0.22em] text-[#344054]">
                On this page
              </p>
              <nav className="flex flex-col">
                {headings.map(({ text, id }) => {
                  const isActive = activeId === id;
                  return (
                    <button
                      type="button"
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
                        className={`block pl-4 text-[14px] leading-snug transition-all duration-200 ${
                          isActive
                            ? "text-ink-900 font-medium"
                            : "text-[#667085] hover:text-[#344054]"
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
      </div>
    </div>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector("article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleBottom = articleTop + rect.height;
      const viewportBottom = window.scrollY + window.innerHeight;
      const total = articleBottom - articleTop;
      const scrolled = Math.max(0, viewportBottom - articleTop);
      setProgress(total > 0 ? Math.min((scrolled / total) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mt-8">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[#344054]">Progress</span>
        <span className="text-[0.55rem] tabular-nums text-[#344054]">{Math.round(progress)}%</span>
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
