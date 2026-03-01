"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { PostCard } from "@/components/post-card";
import { BlogSearch } from "./blog-search";
import { posts } from "@/data/posts";

export function BlogContent() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16">
        <Section>
          <Reveal>
            <p className="section-label mb-4">The Blog</p>
            <h1 className="heading text-5xl md:text-6xl font-bold mb-8 max-w-xl">
              Insights &amp; Resources
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <BlogSearch />
          </Reveal>
        </Section>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <Section>
          <Reveal>
            <PostCard post={featured} featured />
          </Reveal>
        </Section>
      </section>

      {/* Post Grid */}
      <section className="pb-[var(--section-gap)]">
        <Section>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <PostCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </section>
    </>
  );
}
