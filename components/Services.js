import SectionHeading from "./SectionHeading";
import { PlayIcon } from "./Icons";

export default function Services({ site }) {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="What he does at the bench"
          intro="Every service here is shown in one of his own repair videos. Tap a link to watch it."
        />
        <ol className="mt-10 grid border-t border-ink md:grid-cols-2 md:gap-x-12">
          {site.services.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-b border-rule py-5">
              <span className="pt-0.5 text-[13px] font-semibold tabular-nums text-champagne-dark">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[17px] font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{s.text}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${s.video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
                >
                  <PlayIcon className="h-3.5 w-3.5 text-champagne-dark" />
                  Watch: {s.video.label}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
