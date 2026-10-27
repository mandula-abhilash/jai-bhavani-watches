import { StarIcon, WhatsAppIcon } from "./Icons";
import HeroCarousel from "./HeroCarousel";
import OpenStatus from "./OpenStatus";

// Desktop: copy on the left, his work turning in a 3D ring on the right.
// Phones and tablets: copy first, carousel below.
export default function Hero({ site }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,#22432f_0,#10241a_40%,#0a1510_75%)] lg:bg-[radial-gradient(ellipse_at_75%_50%,#22432f_0,#10241a_38%,#0a1510_72%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-10 sm:px-5 md:px-8 md:pb-14 md:pt-14 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:py-12">
        <div className="max-w-xl lg:max-w-none">
          <p className="hero-in inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brass">
            <span className="h-px w-6 bg-brass" />
            {site.address.street}, {site.address.city}
          </p>
          <h1 id="hero-title" className="hero-in mt-4 font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.015em] sm:text-[52px] xl:text-[62px]" style={{ "--d": "60ms" }}>
            Watch sales &amp; repair in <span className="text-brass">Sangareddy</span>
          </h1>
          <p className="hero-in mt-5 max-w-lg text-[16px] leading-relaxed text-ivory/75 md:text-[17px]" style={{ "--d": "120ms" }}>
            New wrist watches and wall clocks for sale. Full service, restoration, glass, battery, crown and strap work by{" "}
            <strong className="font-semibold text-ivory">{site.owner}</strong>, from vintage HMT to Seiko, Titan and Swiss watches.
          </p>
          <p lang="te" className="hero-in mt-2 font-telugu text-[16px] text-ivory/45" style={{ "--d": "120ms" }}>{site.nameTelugu}</p>
          <div className="hero-in mt-7 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ "--d": "180ms" }}>
            <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="btn-brass inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-semibold">
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              WhatsApp a photo of your watch
            </a>
            <a href="#shop" className="inline-flex h-12 items-center justify-center rounded-full border border-ivory/25 px-6 text-[15px] font-semibold text-ivory transition hover:border-brass">
              Buy a watch
            </a>
          </div>
          <div className="hero-in mt-6 flex flex-wrap items-center gap-x-5 gap-y-3" style={{ "--d": "240ms" }}>
            <OpenStatus site={site} tone="dark" />
            <a href={site.google.profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] text-ivory/70 hover:text-ivory">
              <StarIcon className="h-4 w-4 text-brass" />
              <span>
                <strong className="font-semibold text-ivory">{site.google.rating}</strong> on Google · {site.google.reviewCount} reviews
              </span>
            </a>
          </div>
        </div>

        <div className="hero-in relative -mx-4 sm:-mx-5 md:-mx-8 lg:mx-0" style={{ "--d": "200ms" }}>
          <HeroCarousel items={site.showcase} />
        </div>
      </div>
    </section>
  );
}
