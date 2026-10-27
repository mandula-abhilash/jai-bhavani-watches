import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";

export default function Brands({ site }) {
  return (
    <section id="brands" aria-labelledby="brands-title" className="relative scroll-mt-20 overflow-hidden bg-ink text-ivory">
      <div aria-hidden="true" className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(199,170,115,0.18),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
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
            <div data-reveal className="mt-10 hidden gap-3 lg:grid">
              <div className="grid grid-cols-3 gap-3">
                {["rado", "tag-heuer", "tissot"].map((id, i) => {
                  const w = site.showcase.find((x) => x.src.endsWith(`work-${id}.webp`));
                  return (
                    <figure key={id} className={`overflow-hidden rounded-2xl border border-ivory/10 ${i === 1 ? "-translate-y-4" : ""}`}>
                      <img src={w.src} alt={`${w.title}, ${w.note}`} width="520" height="650" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" />
                    </figure>
                  );
                })}
              </div>
              <div className="flex items-end justify-between gap-4 rounded-2xl border border-brass/30 bg-gradient-to-b from-brass/15 to-transparent p-5">
                <p className="font-serif text-[56px] font-medium leading-none text-brass-grad">{site.brands.length}</p>
                <p className="max-w-[12rem] text-right text-[14px] leading-snug text-ivory/65">brands serviced on camera, from HMT to Swiss</p>
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap gap-2 sm:grid sm:grid-cols-3 md:gap-3">
            {site.brands.map((b) => (
              <li key={b.name}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full items-center justify-between gap-2 overflow-hidden rounded-full border border-ivory/15 bg-ivory/[0.04] px-4 py-2 transition duration-300 hover:border-brass/60 hover:bg-brass/10 sm:rounded-xl sm:px-4 sm:py-4 md:px-5 md:py-5"
                >
                  <span className="min-w-0 text-[15px] font-medium leading-[1.2] sm:font-serif sm:text-[20px] sm:font-normal md:text-[23px]">{b.name}</span>
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
