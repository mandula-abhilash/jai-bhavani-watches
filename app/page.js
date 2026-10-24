import { site } from "@/data/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Videos from "@/components/Videos";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header site={site} />
      <main id="main">
        <Hero site={site} />
        <Services site={site} />
        <Brands site={site} />
        <Videos site={site} />
        <Reviews site={site} />
        <Visit site={site} />
      </main>
      <Footer site={site} />
      <MobileBar site={site} />
    </>
  );
}
