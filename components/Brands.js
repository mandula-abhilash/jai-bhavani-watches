import Picture from "./Picture";
import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";

export default function Brands({ site }) {
  return (
    <section id="brands" aria-labelledby="brands-title" className="scroll-mt-16 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <SectionHeading
              id="brands-title"
              eyebrow="Brands"
              title="Watches he has worked on"
              intro="From vintage HMT and Allwyn to Seiko, Citizen and Swiss watches. Each name opens his video of that watch."
            />
            <ul className="mt-8 grid grid-cols-2 border-t border-ink sm:grid-cols-3">
              {site.brands.map((b) => (
                <li key={b.name} className="border-b border-rule">
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 pr-4 text-[15px] font-medium transition hover:text-champagne-dark"
                  >
                    {b.name}
                    <ArrowIcon className="h-3 w-3 text-steel opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 content-start gap-2">
            <Picture
              {...site.photos.restored}
              imgSizes="(min-width: 768px) 420px, 100vw"
              className="col-span-2 aspect-[16/10] h-auto w-full rounded-[4px] object-cover"
            />
            <Picture
              {...site.photos.display}
              imgSizes="(min-width: 768px) 210px, 50vw"
              className="aspect-square h-auto w-full rounded-[4px] object-cover"
            />
            <Picture
              {...site.photos.inside}
              imgSizes="(min-width: 768px) 210px, 50vw"
              className="aspect-square h-auto w-full rounded-[4px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
