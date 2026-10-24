import { Inter, Inter_Tight, Mallanna } from "next/font/google";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-display-face",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Telugu shop name only.
const telugu = Mallanna({
  subsets: ["telugu"],
  weight: "400",
  variable: "--font-telugu",
  display: "swap",
  preload: false,
});

const ogImage = "/og.jpg";

export const metadata = {
  ...(site.siteUrl ? { metadataBase: new URL(site.siteUrl), alternates: { canonical: "/" } } : {}),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: site.meta.title,
    description: site.meta.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: site.photos.hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: [ogImage],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#0b1420",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${telugu.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(site)) }}
        />
        {children}
      </body>
    </html>
  );
}
