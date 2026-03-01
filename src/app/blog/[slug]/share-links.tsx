"use client";

import { toast } from "sonner";

interface ShareLinksProps {
  title: string;
  slug: string;
}

export function ShareLinks({ title, slug }: ShareLinksProps) {
  const url = `https://solaraai.com/blog/${slug}`;

  function copyLink() {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
        Share
      </span>
      <div className="flex gap-2">
        <button
          onClick={copyLink}
          className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-strong transition-colors"
          aria-label="Copy link"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-strong transition-colors"
          aria-label="Share on X"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-strong transition-colors"
          aria-label="Share on LinkedIn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
