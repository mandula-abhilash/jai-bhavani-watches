import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";

export default function Brands({ site }) {
  return (
    <section id="brands" aria-labelledby="brands-title" className="relative scroll-mt-20 overflow-hidden bg-ink text-ivory">
      <div aria-hidden="true" className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(199,170,115,0.18),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="brands-title"
              tone="dark"
              eyebrow="Brands"
              title="From vintage HMT"
              accent="to Swiss watches."
              intro="Every name here is in the title of one of his repair videos. Tap a brand to watch that job."
            />
            <div data-reveal className="mt-10 grid grid-cols-2 gap-3">
              <figure className="col-span-2 overflow-hidden rounded-2xl border border-ivory/10">
                <img src="/images/restored-white-dial-1000.webp" srcSet="/images/restored-white-dial-640.webp 640w, /images/restored-white-dial-1000.webp 1000w" sizes="(min-width: 1024px) 420px, 100vw" alt={site.photos.restored.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-ivory/10">
                <img src="/images/watch-display-640.webp" alt={site.photos.display.alt} loading="lazy" className="aspect-square w-full object-cover" />
              </figure>
              <div className="flex flex-col justify-end rounded-2xl border border-brass/30 bg-gradient-to-b from-brass/15 to-transparent p-5">
                <p className="font-serif text-[64px] leading-none text-brass-grad">{site.brands.length}</p>
                <p className="mt-2 text-[14px] leading-snug text-ivory/65">brands serviced on camera</p>
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">
            {site.brands.map((b, i) => (
              <li key={b.name} data-reveal style={{ "--d": `${(i % 3) * 60}ms` }}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full items-center justify-between gap-2 overflow-hidden rounded-xl border border-ivory/10 bg-ivory/[0.03] px-3.5 py-3.5 transition duration-300 hover:border-brass/60 hover:bg-brass/10 md:px-5 md:py-5"
                >
                  <span className="min-w-0 font-serif text-[19px] leading-[1.1] sm:text-[22px] md:text-[26px]">{b.name}</span>
                  <span className="hidden h-7 w-7 shrink-0 place-items-center rounded-full border border-ivory/15 sm:grid text-ivory/40 transition group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
                    <ArrowIcon className="h-3 w-3" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
