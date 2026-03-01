import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getRelatedPosts, getAllSlugs } from "@/data/posts";
import { formatDate, readingTime } from "@/lib/utils";
import { Section } from "@/components/section";
import { PostCard } from "@/components/post-card";
import { ReadingProgress } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { ShareLinks } from "./share-links";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Solara AI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <ReadingProgress />

      {/* Header */}
      <section className="pt-36 pb-12">
        <Section narrow>
          <div className="mb-4 flex items-center gap-3">
            <Link
              href="/blog"
              className="text-xs text-text-tertiary hover:text-text-primary transition-colors"
            >
              &larr; Back to Blog
            </Link>
            <span className="text-text-tertiary">&middot;</span>
            <span className="text-xs font-medium text-text-secondary bg-bg-secondary px-2.5 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="display text-4xl sm:text-5xl md:text-[56px] leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-bg-secondary relative">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">
                {post.author.name}
              </p>
              <p className="text-xs text-text-tertiary">
                {post.author.role} &middot; {formatDate(post.date)} &middot;{" "}
                {readingTime(post.content)}
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* Cover */}
      <section className="pb-12">
        <Section>
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden bg-bg-secondary">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </Section>
      </section>

      {/* Content + TOC */}
      <section className="pb-[var(--section-gap)]">
        <Section>
          <div className="grid lg:grid-cols-[1fr_240px] gap-16">
            {/* Article */}
            <article
              className="prose max-w-none lg:max-w-[720px]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents />
            </aside>
          </div>
        </Section>
      </section>

      {/* Share + Author */}
      <section className="pb-[var(--section-gap)]">
        <Section narrow>
          <div className="border-t border-border pt-8 mb-12">
            <ShareLinks title={post.title} slug={post.slug} />
          </div>

          {/* Author Box */}
          <div className="p-6 rounded-2xl border border-border bg-bg-secondary flex items-start gap-5">
            <div className="h-14 w-14 rounded-full overflow-hidden bg-bg-tertiary relative shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <p className="font-heading font-semibold text-base mb-1">
                {post.author.name}
              </p>
              <p className="text-text-tertiary text-xs mb-2">{post.author.role}</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Writing about the intersection of AI and marketing. Passionate about 
                helping teams work smarter, not harder.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-[var(--section-gap)] bg-bg-secondary">
          <Section>
            <h2 className="heading text-3xl font-bold mb-10">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </Section>
        </section>
      )}
    </>
  );
}
