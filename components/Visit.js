import OpenStatus from "./OpenStatus";
import Picture from "./Picture";
import SectionHeading from "./SectionHeading";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon, YouTubeIcon } from "./Icons";

export default function Visit({ site }) {
  const rows = [
    { icon: PinIcon, label: "Address", value: site.address.line, sub: `Plus code ${site.address.plusCode}`, href: site.google.directions, external: true },
    { icon: ClockIcon, label: "Hours", value: `${site.hours.label}, ${site.hours.time}` },
    { icon: PhoneIcon, label: "Call", value: site.phone.display, href: `tel:${site.phone.tel}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: `${site.whatsapp.display} (WhatsApp only)`, href: site.whatsapp.url, external: true },
  ];

  return (
    <section id="visit" aria-labelledby="visit-title" className="relative scroll-mt-20 overflow-hidden bg-ink text-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-fade-y opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
        {/* Meet Deepu */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait: the shop frame is the container, Deepu is a cut out layer that steps out of it,
              head above the top edge and feet below the bottom edge. */}
          <figure data-reveal className="relative mx-auto w-full max-w-[340px] pb-[22%] pt-[15%] sm:max-w-[380px]">
            <div className="relative aspect-[720/1062] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
              <img
                src="/images/deepu-scene-720.webp"
                srcSet="/images/deepu-scene-420.webp 420w, /images/deepu-scene-720.webp 720w"
                sizes="(min-width: 640px) 380px, 340px"
                alt=""
                width="720"
                height="1062"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full"
              />
              <div aria-hidden="true" className="absolute -bottom-[10%] left-1/2 h-[6%] w-[70%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-xl" />
              <img
                src="/images/deepu-cutout-440.webp"
                srcSet="/images/deepu-cutout-300.webp 300w, /images/deepu-cutout-440.webp 440w"
                sizes="(min-width: 640px) 232px, 208px"
                alt={site.photos.owner.alt}
                width="440"
                height="1262"
                loading="lazy"
                decoding="async"
                className="absolute left-[19.9%] top-[-9.9%] w-[61%] drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)]"
              />
            </div>
            <figcaption className="absolute bottom-0 left-0 right-0 text-center">
              <span className="block font-serif text-[24px] font-medium leading-tight">{site.owner}</span>
              <span className="eyebrow text-[10px] text-brass">At the shop, Habeeb Nagar</span>
            </figcaption>
          </figure>
          <div>
            <SectionHeading
              eyebrow="The watchmaker"
              title="Meet"
              accent={site.owner}
              tone="dark"
              intro={`He runs ${site.name} in Habeeb Nagar, Sangareddy. He films his repairs and shares them on YouTube, from vintage HMT and Allwyn to Seiko, Citizen and Swiss watches. The shop also sells watches and wall clocks.`}
            />
            <figure data-reveal className="mt-8 border-l-2 border-brass pl-5">
              <blockquote className="font-serif text-[20px] leading-snug text-ivory/90 md:text-[22px]">“{site.reviews[2].text}”</blockquote>
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
        <div data-reveal className="mt-16 overflow-hidden rounded-[24px] border border-ivory/10 bg-ink-2 md:mt-24 md:rounded-[32px]">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="p-5 sm:p-7 md:p-10">
              <OpenStatus site={site} tone="dark" />
              <h2 id="visit-title" className="mt-5 font-serif text-[32px] font-medium leading-[1.08] md:text-[48px]">
                Bring your watch to <span className="text-brass">Habeeb Nagar.</span>
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {rows.map(({ icon: Icon, label, value, sub, href, external }) => {
                  const inner = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brass/15 text-brass">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0">
                        <span className="eyebrow block text-[10px] text-ivory/45">{label}</span>
                        <span className="mt-1 block text-[15px] font-medium leading-snug">{value}</span>
                        {sub && <span className="mt-0.5 block text-[12.5px] text-ivory/50">{sub}</span>}
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={site.google.directions} target="_blank" rel="noopener noreferrer" className="btn-brass inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold">
                  <PinIcon className="h-[18px] w-[18px]" />
                  Get directions
                </a>
                <a href={`tel:${site.phone.tel}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ivory/20 px-6 text-[15px] font-semibold transition hover:border-brass/60">
                  <PhoneIcon className="h-[18px] w-[18px]" />
                  Call the shop
                </a>
              </div>
            </div>
            <div className="relative grid grid-rows-[auto_1fr]">
              <Picture {...site.photos.front} imgSizes="(min-width: 1024px) 640px, 100vw" className="aspect-[8/3] h-auto w-full object-cover" />
              <iframe
                src={site.google.embed}
                title={`Map showing ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full bg-ink-3 lg:min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
