import Picture from "./Picture";
import SectionHeading from "./SectionHeading";
import { CheckIcon, PinIcon, WhatsAppIcon } from "./Icons";

// The shop also sells watches and clocks. Real shop photos, no stock images.
export default function Sales({ site }) {
  return (
    <section id="shop" aria-labelledby="shop-title" className="relative scroll-mt-20 border-t border-line bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-5 md:px-8 md:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div data-reveal className="grid grid-cols-5 gap-3 lg:order-2">
          <figure className="col-span-3 overflow-hidden rounded-2xl border border-line md:rounded-3xl">
            <Picture {...site.photos.inside} imgSizes="(min-width: 1024px) 360px, 60vw" className="aspect-[3/4] h-full w-full object-cover" />
          </figure>
          <div className="col-span-2 grid gap-3">
            <figure className="overflow-hidden rounded-2xl border border-line md:rounded-3xl">
              <Picture {...site.photos.display} imgSizes="(min-width: 1024px) 240px, 40vw" className="aspect-square h-full w-full object-cover" />
            </figure>
            <div className="flex flex-col justify-end rounded-2xl bg-ink p-4 text-ivory md:rounded-3xl md:p-5">
              <p className="font-serif text-[22px] font-medium leading-tight md:text-[26px]">Sales &amp; service</p>
              <p className="mt-1 text-[13px] leading-snug text-ivory/65">Buy and repair under one roof</p>
            </div>
          </div>
        </div>

        <div className="lg:order-1">
          <SectionHeading
            id="shop-title"
            eyebrow="Watch shop"
            title="Buy watches and wall clocks"
            accent="in Sangareddy."
            intro={`${site.name} is a watch shop as well as a repair bench. Walk in to see what is on display, or ask on WhatsApp first.`}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.sales.map((item, i) => (
              <li key={item.title} data-reveal style={{ "--d": `${i * 60}ms` }} className="flex gap-3 rounded-2xl border border-line bg-ivory p-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-brass">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="block text-[16px] font-semibold">{item.title}</span>
                  <span className="mt-0.5 block text-[14.5px] leading-relaxed text-muted">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={site.whatsapp.salesUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-ink px-6 text-[15px] font-semibold text-ivory transition hover:bg-ink-3">
              <WhatsAppIcon className="h-[18px] w-[18px] text-[#3ccf7a]" />
              Ask what is in stock
            </a>
            <a href={site.google.directions} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-text/20 px-6 text-[15px] font-semibold transition hover:border-brass-ink">
              <PinIcon className="h-[18px] w-[18px]" />
              Visit the shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
