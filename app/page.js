import { site } from "@/data/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BrandMarquee from "@/components/BrandMarquee";
import Services from "@/components/Services";
import Sales from "@/components/Sales";
import Process from "@/components/Process";
import Videos from "@/components/Videos";
import Brands from "@/components/Brands";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <Header site={site} />
      <main id="main">
        <Hero site={site} />
        <TrustBar site={site} />
        <BrandMarquee site={site} />
        <Services site={site} />
        <Sales site={site} />
        <Process site={site} />
        <Videos site={site} />
        <Brands site={site} />
        <Reviews site={site} />
        <Visit site={site} />
        <FinalCta site={site} />
      </main>
      <Footer site={site} />
      <MobileBar site={site} />
      <Reveal />
    </>
  );
}
