# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Production build
npm run lint       # Run ESLint
npm run purge-themes  # Remove unused theme CSS (permanent — prompts for theme to keep)
```

No test suite is configured.

## Architecture

This is a **Next.js 16 / React 19** landing page for **XVE Studio** — a Santo Domingo web design agency.

### Active Theme
`src/app/styles/xve.css` — dark-first (black/red/white/dark-gray). Toggle between dark and light mode at runtime via `data-mode="light"` on `<body>` (handled in `SiteHeader.tsx` with `localStorage` persistence). The body class is `theme-xve` set in `layout.tsx`.

### Content Layer
All copy lives in **`src/content/site-data.ts`** (`siteData`). Sections: `general`, `navigation`, `hero`, `logos`, `features`, `about`, `testimonials`, `pricing`, `faq`, `cta`, `footer`. Pricing items require: `name`, `price`, `priceEnd`, `desc`, `features[]`, `cta`, `isFeatured`, `badge | null`, `isSoftware`.

### Page Composition
`src/app/page.tsx` assembles all blocks in order. Blocks live in `src/components/blocks/`. The `About` block is a new addition (not present in example routes). Section IDs for nav anchors: `#services`, `#work`, `#about`, `#pricing`, `#contact`.

### 3D Hero
`Hero.tsx` uses Framer Motion `useMotionValue` + `useSpring` for mouse-tracking parallax. Floating shapes are CSS `perspective + rotateX/Y` boxes in a separate `FloatingShape` component (required to use `useTransform` inside the component due to Rules of Hooks). The shape data array `SHAPES` is defined at module level.

### Logo
The XVE logo is `<span class="xve-logo-xv">XV</span><span class="xve-logo-e">E Studio</span>`. Color is controlled by CSS variables `--logo-xv` (white/black per mode) and `--logo-e` (always red). Used in `SiteHeader.tsx` and `Footer.tsx`.

### SEO
`src/lib/seo-config.ts` exports `constructMetadata()` and `generateJsonLd()`. Targets Dominican Republic (`geo.region: "DO"`, locale `es_DO`).

### Work/Portfolio Section
`src/components/blocks/Work.tsx` — HUD-aesthetic portfolio with 3D tilt card, project list with animated active bar (`layoutId="work-bar"`), and a full-screen bottom-sheet modal. Each project has: `id`, `title`, `client`, `category`, `tags`, `year`, `gradient` (CSS), `mockType` (one of `dashboard | ecommerce | corporate | landing | startup`), `business`, `challenge`, `solution[]`, `results`. Add projects to `siteData.work.items`.

### Custom Cursor
`src/components/cursor/CustomCursor.tsx` — dot + spring-physics ring cursor. Only mounts on `(hover: hover) and (pointer: fine)` devices. Detects hover context (`button`, `project`, `link`, `text`) to change ring size/color and show "VER"/"CLICK" labels. Imported in `page.tsx`. `cursor: none` applied via CSS media query in `xve.css`.

### Icons
Uses **lucide-react**. Icon names are referenced by string in `siteData.features.items[].icon` and mapped in `Features.tsx` via `IconMap`.
