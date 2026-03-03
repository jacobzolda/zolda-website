Personal Portfolio Website Outline:

1) Pick an approach that matches your goals (recommended: Astro + Markdown)
    Best “learn + ship” stack (open source, modern, low cost)

    Astro (static site generator) + Markdown content + Tailwind CSS

    Astro lets you build a super fast site with components, but still feels approachable (HTML-first).

    Markdown makes adding projects easy (write like a README).

    Tailwind CSS helps you learn layout/design quickly without fighting CSS forever.

    Hosting: GitHub Pages or Cloudflare Pages (free tiers).

    This stack is perfect for a portfolio because:

    You’ll have mostly “content pages” (projects, writing, reels, embeds).

    You can still add interactive bits later (filters, animations, etc.).

    It stays cheap and open.

    (Alternate paths if you want: Next.js/React for heavier apps, or Hugo for ultra-simple static. But Astro is the best middle ground for “creative + technical portfolio.”)

2) Information architecture (make it feel like a “museum,” not a folder)

    You already have sections. The key to standing out is how you present each piece:

    Global structure (top nav)

    Home

    Work Gallery (a unified index with filters)

    Cinematography

    Game Design

    MOCAP

    Vox Ex Machina

    Hardware

    Resume / Bio

    Contact

    The “Work” page is your secret weapon

    Even though you have sections, make a single Work gallery that can filter by tags:

    Tags: film, writing, mocap, robotics, embedded, game-dev, C, Python, ESP32, etc.

    Filters: medium (video / writing / build), role (solo / team), year, tools.

    This makes the site feel intentional and curated.

3) Content model: standardize every project page (employers love this)

    Create a reusable project template so every page feels consistent and “professional studio.”

    Project page template (use this everywhere)

    Hero: title + 1-line hook (“Robotic painting system for an opera commission”)

    Quick facts: Role, Tools, Team size, Year, Links

    Media: embedded Vimeo/YouTube, image carousel, GIFs

    What I did: bullet list (concrete contributions)

    Process: brief narrative (constraints → decisions → iterations)

    Outcome: what shipped, what improved, results/metrics if you have them

    Artifacts: GitHub, scripts PDF, writeups, press, build photos

    Reflection: what you’d do next / what you learned

    This format works for:

    Cinematography (role: director/editor/cinematographer; artifacts: script, shot list, critical essay)

    Game design (role: writer/scripter; artifacts: itch.io, repo, design doc)

    MOCAP (reel + stills + breakdown of pipeline)

    Vox Ex Machina (video + links + your engineering contributions)

    Hardware (before/after, repair log, “how I diagnosed it”)

4) Design plan: “distinctive but readable”

    Standing out doesn’t mean loud — it means cohesive + confident.

    A strong “creative technologist” style that fits your mix

    Dark/light mode toggle (optional, but nice)

    Big typography (clean headline, simple body font)

    Lots of breathing room (spacing is design)

    Motion used sparingly (hover states, subtle page transitions)

    Open-source design assets (no subscription needed)

    Fonts: Google Fonts (open) or Fontsource packages

    Icons: Lucide (open)

    Code snippets: Shiki (open) if you want pretty code blocks

    Analytics (privacy-friendly): Plausible is paid; GoatCounter is free-ish; or skip analytics early

5) Step-by-step build roadmap (learn web design as you go)
    Phase A — Foundations (1–2 sessions)

    What you learn: web basics, file structure, deployment, HTML/CSS layout.

    Create a GitHub repo: portfolio

    Install Node.js + VS Code

    Scaffold Astro project

    Deploy immediately to Cloudflare Pages or GitHub Pages
    Goal: you have a live URL ASAP, even if it’s ugly.

    Deliverable: a deployed landing page + nav.

    Phase B — Core pages + navigation (2–4 sessions)

    What you learn: responsive layout, components, basic CSS patterns.

    Build global layout: header/nav/footer

    Create pages for each section

    Add a home page with:

    short bio

    “Featured work” (3–6 items)

    clear contact/LinkedIn button

    Deliverable: the full site skeleton is navigable.

    Phase C — The content system (the “real” portfolio) (3–6 sessions)

    What you learn: Markdown content collections, templating, embed handling.

    Create a “Projects” content collection:

    each project as a Markdown file with frontmatter:

    title, date, tags, tools, roles, links, hero image, video URLs

    Auto-generate:

    Work index page

    Section pages filtered by tags

    Build the Project template page.

    Deliverable: adding a new project is as easy as dropping in a Markdown file + images.

    Phase D — Media done right (2–3 sessions)

    What you learn: responsive embeds, performance, accessibility.

    Vimeo/YouTube embeds that resize properly

    Image optimization (Astro makes this easier)

    Add a “reel” page for Cinematography and MOCAP

    Deliverable: your site feels like a proper showcase, not a link dump.

    Phase E — Polish that makes employers remember you (ongoing)

    What you learn: UI polish, branding, storytelling.

    Add:

    featured project cards with hover states

    a “skills/toolbox” strip (C, Python, embedded, motion control, editing tools, etc.)

    short “case study” pages for your top 2–3 projects (Vox Ex Machina, wearable EDA/HRV, best film/game)

    SEO + social previews (OpenGraph images)

    Accessibility pass (contrast, keyboard nav, alt text)

    Deliverable: it looks expensive and intentional.

6) How your specific sections map into the site
    Cinematography

    Landing: reel + grid of films

    Each film page: embed + logline + role + credits + script PDF + stills

    Critical writing: either a “Writing” subpage or posts tagged writing

    Video game design

    Project pages: trailer/gameplay + your writing/scripting contributions

    Artifacts: design docs, narrative excerpts, repo links, itch.io

    MOCAP

    A single “MOCAP reel” page + project breakdown pages

    Show pipeline: capture → cleanup → retarget → final scene

    Vox Ex Machina

    One flagship case study page (this should be a centerpiece)

    Include: commission context, constraints, what you built, videos, links/press, your exact contributions

    Hardware

    “Repair/mod log” style works great:

    problem → diagnosis → fix → result

    Photo sets + short captions + tool list

    Resume / Bio

    Bio that matches your “creative technologist / engineer-artist” identity

    Resume as a page and a downloadable PDF

    LinkedIn + GitHub + Vimeo/YouTube links

7) Keeping it low-cost and open (practical choices)

    Free hosting: Cloudflare Pages or GitHub Pages
    Domain: optional at first (free subdomain), later ~$10–15/yr if you want yourname.com
    No paid CMS required: Markdown is the “open source CMS”
    If you want a web editor later: Decap CMS (open source) can let you edit Markdown through a UI.