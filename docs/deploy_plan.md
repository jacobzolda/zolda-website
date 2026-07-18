# Phase 4 — Vercel Deploy Plan

## Context

The site is a fully static Astro build (content collections + `getStaticPaths`,
no SSR, no adapter needed). `npm run build` passes clean (19 pages) as of the last
commit. All MVP content work (Phases 0–3) is done and committed:

- `ac63068` — media assets (resume PDF, converted project photos/PDFs) in `public/`
- `4a9353d` — MVP build-out: real project content, home/resume pages, Vox Ex Machina
  flagship treatment, content-pipeline fixes

Repo state confirmed before handoff:
- Remote: `https://github.com/jacobzolda/zolda-website.git`
- Local `main` is already in sync with `origin/main` — nothing to push.
- No `vercel.json`, no adapter, no `site` field in `astro.config.mjs` yet.

This doc is meant to be handed to a fresh Claude Code session. That session should
start by running `npm run build` itself to reconfirm a clean baseline before touching
anything, since time may have passed since this was written.

## Steps

1. **Connect the repo in Vercel** (manual, dashboard — cannot be automated from the
   CLI without an interactive OAuth/browser flow):
   - Sign in to vercel.com with GitHub.
   - "Add New Project" → import `jacobzolda/zolda-website`.
   - Framework preset: Vercel should auto-detect **Astro**. If it doesn't, set:
     - Build command: `npm run build`
     - Output directory: `dist`
     - Install command: `npm install` (default)
   - No environment variables are needed — the site has no API keys/secrets.
   - Deploy. This produces a first live URL like `zolda-website.vercel.app`
     (exact subdomain depends on availability).

2. **Set the canonical `site` URL** (code change, do this *after* step 1 gives you the
   real URL):
   - In `astro.config.mjs`, add `site: "https://<the-vercel-url>"` (or the custom
     domain, if one gets set up — see step 4) to the `defineConfig({...})` call.
   - This matters for correct canonical/OG URLs if a sitemap or social preview
     integration gets added later; not required for the site to function.
   - Commit and push — Vercel auto-deploys on every push to `main`.

3. **Post-deploy verification** — load the live URL and check:
   - Home page: flagship image, featured work grid, toolbox all render.
   - `/vox-ex-machina`, a couple of `/gallery/<slug>` pages, `/resume` — images,
     video embeds (YouTube/Vimeo iframes actually play), and PDF download links
     (`/files/*.pdf`) all resolve correctly on the live domain, not just locally.
   - Check a project page from each section (cinematography, game-design, hardware,
     mocap, software) so nothing was missed.
   - Test on mobile width (devtools or an actual phone) — nothing in this codebase
     was screenshot-tested in a real browser during the build (no headless browser
     tool was available in that session), so this is the first real visual check.

4. **Optional follow-ups** (not MVP-blocking, only do if asked):
   - Custom domain: if the user wants `<name>.com` instead of the `.vercel.app`
     subdomain, add it under Vercel project → Settings → Domains, then update the
     `site` field from step 2 to match.
   - `@astrojs/sitemap` integration for SEO.
   - OpenGraph/social preview images per page.
   - Revisit `dist/` staleness — the `dist/` folder is gitignored and gets rebuilt
     fresh on every Vercel deploy, so no action needed there.

## Known content gaps (carried over, not deploy-blockers)

These were flagged during the MVP build and are still open — worth a final check
before or shortly after going live, but they don't block deployment:
- Broker's Special, The Northman, and Darkheart Slash project body copy are
  lightly-drafted (grounded in available facts, not fully verified prose) — see
  `src/content/projects/cine-brokers.md`, `gd-northman.md`, `gd-darkheart-slash.md`.
- No screenshots/visual QA have been done in an actual browser at any point in this
  project's history — step 3 above is the first opportunity to catch a real layout
  bug.
