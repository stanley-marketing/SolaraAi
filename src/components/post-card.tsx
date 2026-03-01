"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatDate, readingTime } from "@/lib/utils";
import type { Post } from "@/data/posts";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <motion.article
        className={`relative overflow-hidden rounded-2xl surface-card transition-all duration-300 ${
          featured ? "md:grid md:grid-cols-2" : ""
        }`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-bg-secondary ${
            featured ? "aspect-[16/10] md:aspect-auto" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? "md:p-8 md:flex md:flex-col md:justify-center" : ""}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-text-secondary bg-bg-secondary px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-text-tertiary">
              {readingTime(post.content)}
            </span>
          </div>
          <h3
            className={`font-heading font-semibold leading-tight mb-3 ${
              featured ? "text-2xl md:text-3xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>
          <p
            className={`text-text-secondary leading-relaxed mb-4 ${
              featured ? "text-base" : "text-sm line-clamp-2"
            }`}
          >
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full overflow-hidden bg-bg-secondary relative">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-text-tertiary">
              <span className="font-medium text-text-secondary">
                {post.author.name}
              </span>
              <span>&middot;</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
