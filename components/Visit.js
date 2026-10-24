import ContactButtons from "./ContactButtons";
import Picture from "./Picture";
import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";

export default function Visit({ site }) {
  const rows = [
    { label: "Address", value: site.address.line },
    { label: "Hours", value: `${site.hours.label}, ${site.hours.time}` },
    { label: "Call", value: site.phone.display, href: `tel:${site.phone.tel}` },
    { label: "WhatsApp", value: site.whatsapp.display, href: site.whatsapp.url, external: true },
  ];

  return (
    <section id="visit" aria-labelledby="visit-title" className="scroll-mt-16 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div>
            <SectionHeading id="visit-title" eyebrow="Visit the shop" title="Bring your watch to Habeeb Nagar" />
            <ul className="mt-8 border-t border-ink">
              {rows.map(({ label, value, href, external }) => (
                <li key={label} className="grid grid-cols-[6.5rem_1fr] border-b border-rule py-4">
                  <p className="pt-0.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
                  <p className="text-[16px] font-medium">
                    {href ? (
                      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <ContactButtons site={site} className="mt-7" />
            <a
              href={site.google.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold underline decoration-rule underline-offset-4 hover:decoration-ink"
            >
              Get directions in Google Maps
              <ArrowIcon />
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <Picture
              {...site.photos.front}
              imgSizes="(min-width: 768px) 600px, 100vw"
              className="aspect-[8/3] h-auto w-full rounded-[4px] object-cover"
            />
            <div className="grid grid-cols-[0.8fr_1.2fr] gap-2">
              <Picture
                {...site.photos.owner}
                imgSizes="(min-width: 768px) 240px, 40vw"
                className="aspect-[3/4] h-full w-full rounded-[4px] object-cover object-top"
              />
              <div className="overflow-hidden rounded-[4px] bg-white">
                <iframe
                  src={site.google.embed}
                  title={`Map showing ${site.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[240px] w-full"
                />
              </div>
            </div>
            <p className="mt-1 text-[13px] text-muted">The shop also sells watches and wall clocks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
