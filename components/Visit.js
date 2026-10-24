import OpenStatus from "./OpenStatus";
import Picture from "./Picture";
import SectionHeading from "./SectionHeading";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon, YouTubeIcon } from "./Icons";

export default function Visit({ site }) {
  const rows = [
    { icon: PinIcon, label: "Address", value: site.address.line, href: site.google.directions, external: true },
    { icon: ClockIcon, label: "Hours", value: `${site.hours.label}, ${site.hours.time}` },
    { icon: PhoneIcon, label: "Call", value: site.phone.display, href: `tel:${site.phone.tel}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: `${site.whatsapp.display} (WhatsApp only)`, href: site.whatsapp.url, external: true },
  ];

  return (
    <section id="visit" aria-labelledby="visit-title" className="relative scroll-mt-20 overflow-hidden bg-ink text-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-fade-y opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        {/* Meet Deepu */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-reveal className="relative mx-auto w-full max-w-[420px]">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[36px] border border-brass/20 md:-inset-4" />
            <div aria-hidden="true" className="absolute -inset-8 hidden rounded-[44px] border border-brass/10 md:block" />
            <div className="relative overflow-hidden rounded-[28px]">
              <Picture {...site.photos.owner} imgSizes="(min-width: 1024px) 420px, 90vw" className="aspect-[4/5] h-auto w-full object-cover object-top" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5">
                <span className="block font-serif text-[26px] leading-tight">{site.owner}</span>
                <span className="eyebrow text-[10px] text-brass">At the shop, Habeeb Nagar</span>
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="The watchmaker"
              title="Meet"
              accent={site.owner}
              tone="dark"
              intro={`He runs ${site.name} in Habeeb Nagar, Sangareddy. He films his repairs and shares them on YouTube, from vintage HMT and Allwyn to Seiko, Citizen and Swiss watches. The shop also sells watches and wall clocks.`}
            />
            <figure data-reveal className="mt-8 border-l-2 border-brass pl-5">
              <blockquote className="font-serif text-[24px] leading-snug text-ivory/90">“{site.reviews[2].text}”</blockquote>
              <figcaption className="mt-2 text-[13px] text-ivory/50">{site.reviews[2].name}, Google review</figcaption>
            </figure>
            <a href={site.youtube.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-brass-2 hover:text-brass">
              <YouTubeIcon className="h-5 w-5" />
              See his YouTube channel
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Visit card */}
        <div data-reveal className="mt-20 overflow-hidden rounded-[32px] border border-ivory/10 bg-ink-2 md:mt-28">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="p-7 md:p-10">
              <OpenStatus site={site} tone="dark" />
              <h2 id="visit-title" className="mt-5 font-serif text-[40px] leading-[1.02] md:text-[56px]">
                Bring your watch to <span className="text-brass-grad">Habeeb Nagar.</span>
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {rows.map(({ icon: Icon, label, value, href, external }) => {
                  const inner = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brass/15 text-brass">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0">
                        <span className="eyebrow block text-[10px] text-ivory/45">{label}</span>
                        <span className="mt-1 block text-[15px] font-medium leading-snug">{value}</span>
                      </span>
                    </>
                  );
                  const cls = "flex h-full items-start gap-3.5 rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-4 transition";
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${cls} hover:border-brass/50`}>
                          {inner}
                        </a>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.google.directions} target="_blank" rel="noopener noreferrer" className="btn-brass inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold">
                  <PinIcon className="h-[18px] w-[18px]" />
                  Get directions
                </a>
                <a href={`tel:${site.phone.tel}`} className="inline-flex h-12 items-center gap-2 rounded-full border border-ivory/20 px-6 text-[15px] font-semibold transition hover:border-brass/60">
                  <PhoneIcon className="h-[18px] w-[18px]" />
                  Call the shop
                </a>
              </div>
            </div>
            <div className="relative grid min-h-[360px] grid-rows-[auto_1fr] lg:min-h-[420px]">
              <Picture {...site.photos.front} imgSizes="(min-width: 1024px) 640px, 100vw" className="aspect-[8/3] h-auto w-full object-cover" />
              <iframe
                src={site.google.embed}
                title={`Map showing ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[300px] w-full [filter:grayscale(0.4)_sepia(0.25)_contrast(1.05)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
