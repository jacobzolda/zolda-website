Personal Portfolio Website Design Plan:
Step 1 — Create the project (local + GitHub)
    Install prerequisites

    Node.js LTS (v20+ recommended)

    VS Code

    Git already set up (you said you’re good)

    Scaffold Astro

    When prompted:

    Template: “Empty” (best for learning + custom design)

    TypeScript: Yes (helps later; you can write JS inside TS projects)

    Install dependencies: Yes

    Now open the folder in VS Code and confirm it runs at http://localhost:4321.

    Initialize Git + push

Step 2 — Add Tailwind (fast, modern styling)
    Now you can style with Tailwind classes right in your .astro components. This is the easiest way to learn layout and “good spacing” fast.

Step 3 — Define your site structure (routes + layout)
Pages you’ll create
    Inside src/pages/:

    index.astro (Home)

    work/index.astro (All projects w/ filters)

    cinematography/index.astro

    game-design/index.astro

    mocap/index.astro

    vox-ex-machina/index.astro

    hardware/index.astro

    resume/index.astro

    contact/index.astro (optional but helpful)

    Core components

    Inside src/components/:

    Nav.astro

    Footer.astro

    ProjectCard.astro

    TagPill.astro

    VideoEmbed.astro

    ImageGallery.astro (later)

    Shared layout

    Inside src/layouts/:

    BaseLayout.astro

    ProjectLayout.astro (for individual project pages)

    This keeps the site consistent and makes it feel “designed,” not stitched together

Step 4 — Use Markdown “Content Collections” for projects (the killer feature)

    This is how you keep your portfolio easy to maintain.

    Content folder

    Create:

    src/content/projects/

    Each project becomes a Markdown file like:

    vox-ex-machina.md

    wearable-eda-hrv.md

    mocap-reel.md

    short-film-title.md

    Frontmatter schema (the metadata)

    We’ll standardize fields so everything can auto-generate:

    title

    date

    section (cinematography, game-design, mocap, vox, hardware)

    tags (list)

    role (list)

    tools (list)

    description (1–2 sentences)

    media:

    youtube / vimeo URLs

    images

    links:

    GitHub / itch.io / PDF script / writeup / press

    Why this stands out: your “Work” page can auto-filter and still feel curated.

Step 5 — Design direction for “Hybrid” (film + engineering)
    A hybrid site can look messy unless it has a consistent visual language. This is the “stand out” part.

    Recommended visual system

    Typography-first (big titles, clean body text)

    Two-tone accent (one accent for “creative”, one for “technical”)

    Cards + case studies: short summaries, then deep dives

    Home page structure (high conversion for hiring)

    Hero: name + “Creative Technologist / ECE + Film/Game/Mocap”

    Featured work (3–6 cards):

    Vox Ex Machina (flagship)

    Wearable EDA/HRV (flagship if you want it public)

    Best film

    Best game-writing/scripting piece

    Hardware repair/mod highlight

    Toolbox strip (C, Python, Embedded, Motion Control, Editing, etc.)

    Short bio + resume button + contact

Step 6 — Media embeds done right (YouTube + Vimeo)
    You’ll want a reusable component so embeds are responsive and consistent.

    VideoEmbed component idea

    Takes a URL + platform

    Renders an iframe with a responsive container

    Adds optional caption/credit line

    This keeps your film/mocap pages clean and prevents layout weirdness on mobile.

Step 7 — Add “just enough JavaScript” to feel modern
    Astro lets you keep JS minimal.

    Good “stand-out” features that are doable:

    Work page filters (tags/section) using a tiny JS script

    Smooth page transitions (optional)

    Dark mode toggle (optional)

    Start with filters — employers love seeing interactive UI that’s still performant.

Step 8 — Deploy free (Cloudflare Pages recommended)
    Cloudflare Pages is fast and free.

    How:

    Create a Cloudflare account

    Pages → “Connect to Git”

    Select your portfolio repo

    Build command: npm run build

    Output directory: dist

    Every push to main auto-deploys.