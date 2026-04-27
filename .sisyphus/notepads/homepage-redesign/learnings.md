
## Task 4 — Hero (2026-04-27)

- `V2Section` sets `background: SHELL` via inline style already — no need to override it
- `FlickeringGrid` pattern: `pointer-events-none absolute inset-0 -z-10` wrapper, FlickeringGrid inside, radial-gradient overlay div after it (`transparent 15%, rgba(248,247,244,0.92) 75%`)
- Italic-navy accent: `fontStyle: "italic", fontWeight: 400, color: ROSE_DEEP` inline on a `<span>` — never Tailwind `italic` class
- `V2Section` wraps with `data-testid={id}` automatically from its id prop — no separate data-testid needed on the outer section
- Build lock issue: stale `.next/lock` file from a prior crashed build; `rm -f .next/lock` unblocks it
- `bun run build 2>&1 > file.txt` redirects stdout+stderr cleanly for evidence capture
