# Jai Bhavani Watch Sales & Service

One page website for Jai Bhavani Watch Sales & Service, Habeeb Nagar, Sangareddy.

Next.js (App Router, JavaScript only), Tailwind CSS, static export.

## Design

Palette: forest ink `#0a1510`, cream `#f0eee5`, gold `#c7aa73`, ruby `#d32b45` (tokens in `app/globals.css`).
Fonts: Italiana (headings), Inter (body), JetBrains Mono (labels), Mallanna (Telugu name).

Hero: an illustrated watch made of 16 SVG parts placed in CSS 3D (`components/watch/WatchExplosion.js`). It plays on a loop: assembled, apart, held, back together. Play, Pause and the slider sit under it (`components/Hero.js`). No 3D library and no image files.

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
