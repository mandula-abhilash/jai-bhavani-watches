import SectionHeading from "./SectionHeading";
import { ArrowIcon, StarIcon } from "./Icons";

export default function Reviews({ site }) {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="reviews-title" eyebrow="Reviews" title="What customers say on Google" />
          <a href={site.google.profile} target="_blank" rel="noopener noreferrer" className="flex items-end gap-3 self-start md:self-auto">
            <span className="font-display text-[48px] font-semibold leading-none tracking-[-0.03em]">{site.google.rating}</span>
            <span className="pb-1 text-[13px] leading-snug text-muted">
              <span className="flex items-center gap-1 font-semibold text-ink">
                <StarIcon className="h-3.5 w-3.5 text-champagne-dark" />
                Google rating
              </span>
              {site.google.reviewCount} reviews
            </span>
          </a>
        </div>

        <ul className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {site.reviews.map((r, i) => (
            <li
              key={r.name}
              className={`flex w-[84%] shrink-0 snap-start flex-col justify-between border-t-2 border-ink pt-5 md:w-auto ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <blockquote className={`leading-relaxed text-ink ${i === 0 ? "text-[19px] font-medium md:text-[23px]" : "text-[17px]"}`}>
                “{r.text}”
              </blockquote>
              <p className="mt-5 text-[14px] font-semibold">
                {r.name}
                <span className="font-normal text-muted"> · Google review</span>
              </p>
            </li>
          ))}
        </ul>

        <a
          href={site.google.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-semibold underline decoration-rule underline-offset-4 hover:decoration-ink"
        >
          Read all reviews on Google
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
