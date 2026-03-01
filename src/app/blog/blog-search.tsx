"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { posts, type Post } from "@/data/posts";

export function BlogSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results: Post[] = query.length >= 2
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-lg">
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Search articles..."
          className="w-full h-12 pl-11 pr-4 rounded-full bg-bg-secondary border border-border text-text-primary text-sm outline-none focus:border-border-strong transition-colors placeholder:text-text-tertiary"
        />
      </div>

      <AnimatePresence>
        {focused && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 w-full bg-bg-primary border border-border rounded-2xl shadow-lg overflow-hidden z-20"
          >
            {results.slice(0, 5).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-center gap-4 px-4 py-3 hover:bg-bg-secondary transition-colors border-b border-border last:border-b-0"
                onClick={() => {
                  setFocused(false);
                  setQuery("");
                }}
              >
                <span className="text-xs font-medium text-text-tertiary bg-bg-secondary px-2 py-0.5 rounded-full shrink-0">
                  {post.category}
                </span>
                <span className="text-sm text-text-primary line-clamp-1">
                  {post.title}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
