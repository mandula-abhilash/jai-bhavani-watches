# Jai Bhavani Watch Sales & Service

One page website for Jai Bhavani Watch Sales & Service, Habeeb Nagar, Sangareddy.

Next.js (App Router, JavaScript only), Tailwind CSS, static export.

## Edit content

All content is in `data/site.js`: contact details, hours, services, brands, videos and reviews. Every fact there was checked on 24 Oct 2026 against the Google Business Profile, the YouTube channel and the Facebook page.

Images are in `public/images` (WebP). Open Graph image is `public/og.jpg`.

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
