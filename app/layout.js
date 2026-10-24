import { Inter, Italiana, JetBrains_Mono, Mallanna } from "next/font/google";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const serif = Italiana({
  subsets: ["latin"],
  weight: "400",
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
