import { Fraunces, Inter, JetBrains_Mono, Mallanna } from "next/font/google";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

// Headings: Fraunces reads well at every size, unlike thin display faces.
const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-face",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
  preload: false,
});

// Telugu shop name only.
const telugu = Mallanna({
  subsets: ["telugu"],
  weight: "400",
  variable: "--font-telugu-face",
  display: "swap",
  preload: false,
});

const ogImage = "/og.jpg";

export const metadata = {
  metadataBase: new URL(site.siteUrl),
  alternates: { canonical: "/" },
  title: site.meta.title,
  description: site.meta.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  category: "Watch repair",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_IN",
    siteName: site.name,
    title: site.meta.title,
    description: site.meta.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.name} logo with a serviced HMT Kohinoor watch` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: [ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "geo.region": "IN-TS",
    "geo.placename": "Sangareddy",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const viewport = {
  themeColor: "#0a1510",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${mono.variable} ${telugu.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(site)) }}
        />
        {children}
      </body>
    </html>
  );
}
