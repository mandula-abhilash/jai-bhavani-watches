import SectionHeading from "./SectionHeading";
import { ArrowIcon, QuoteIcon, StarIcon } from "./Icons";

export default function Reviews({ site }) {
  const pct = (parseFloat(site.google.rating) / 5) * 100;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative scroll-mt-20 bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading id="reviews-title" eyebrow="Reviews" title="What customers say" accent="on Google." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={site.google.profile}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-7 text-ivory"
          >
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(199,170,115,0.35),transparent_65%)]" />
            <div className="relative">
              <p className="eyebrow text-brass">Google rating</p>
              <p className="mt-4 font-serif text-[84px] leading-none">{site.google.rating}</p>
              <div className="relative mt-3 inline-flex" aria-label={`${site.google.rating} out of 5`}>
                <span className="flex text-ivory/20">
                  {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} className="h-6 w-6" />)}
                </span>
                <span className="absolute inset-0 flex overflow-hidden text-brass" style={{ width: `${pct}%` }}>
                  {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} className="h-6 w-6 shrink-0" />)}
                </span>
              </div>
              <p className="mt-3 text-[15px] text-ivory/60">From {site.google.reviewCount} reviews</p>
            </div>
            <span className="relative mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-brass-2">
              Read all reviews on Google
              <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          {site.reviews.map((r, i) => (
              <div
                key={r.name}
                data-reveal
                style={{ "--d": `${(i % 4) * 90}ms` }}
                className={`flex flex-col justify-between rounded-3xl border border-line bg-paper p-7 ${i === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}
              >
                <div>
                  <QuoteIcon className="h-7 w-7 text-brass" />
                  <blockquote className={`mt-4 leading-relaxed text-text ${i === 0 ? "font-serif text-[26px] leading-[1.25] md:text-[32px]" : "text-[16.5px]"}`}>
                    {r.text}
                  </blockquote>
                </div>
                <p className="mt-6 flex items-center gap-3 text-[14px]">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-[#e6cf94] to-[#a98c55] font-semibold text-ink">{r.name[0]}</span>
                  <span>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block text-[12.5px] text-muted">Google review</span>
                  </span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
