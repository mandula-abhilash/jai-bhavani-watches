# Jai Bhavani Watch Sales & Service

One page website for Jai Bhavani Watch Sales & Service, Habeeb Nagar, Sangareddy.

Next.js (App Router, JavaScript only), Tailwind CSS, static export.

## Design

Palette: forest ink `#0a1510`, cream `#f0eee5`, gold `#c7aa73`, ruby `#d32b45` (tokens in `app/globals.css`).
Fonts: Fraunces (headings), Inter (body), JetBrains Mono (labels), Mallanna (Telugu name).

Hero: keyword H1, actions, then a 3D carousel of his work (`components/HeroCarousel.js`, styles under "Hero 3D carousel" in `app/globals.css`). It turns to the next card, zooms in, holds, then turns again. Pauses on hover and supports swipe and arrows.

Carousel photos: `public/images/work-*.webp`, portrait 4:5, 432 x 540. To swap in new edits, keep the same file names, or edit the `showcase` list in `data/site.js`.

Reduced motion: only the entrance fades stop. The marquee and the carousel keep running, because Windows turns reduced motion on whenever "Animation effects" is off.

Location: exact shop pin in `data/site.js` (`geo`). The map embed and directions link use the coordinates, not a name search.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output goes to `out/`.

## Deploy (Cloudflare Pages)

| Setting | Value |
|---|---|
| Production branch | master |
| Framework preset | None |
| Build command | npm run build |
| Output directory | out |
| Environment variable | NODE_VERSION = 22 |

Live address: https://jaibhavani.abhilashmandula.com, set as `siteUrl` in `data/site.js`. It feeds the canonical link, Open Graph and the LocalBusiness schema.
