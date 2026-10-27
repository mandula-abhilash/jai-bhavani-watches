import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { GearCluster } from "./Services";

export default function FinalCta({ site }) {
  return (
    <section aria-label="Contact" className="bg-ink px-4 pb-16 sm:px-5 md:px-8 md:pb-24">
      <div data-reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#efdcae] via-[#c7aa73] to-[#8f733e] px-6 py-12 text-ink md:px-14 md:py-20">
        <GearCluster className="pointer-events-none absolute -right-24 -top-24 hidden h-[420px] w-[420px] opacity-20 mix-blend-multiply md:block" mono />
        <div className="relative max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink/70">Watch stopped? Glass cracked? Strap broken?</p>
          <h2 className="mt-4 font-serif text-[36px] font-medium leading-[1.05] md:text-[60px]">
            Send it to Deepu. Get it ticking again.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink py-3 pl-2.5 pr-6 text-[15px] font-semibold text-ivory transition hover:bg-ink-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#128c4a]">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </span>
              WhatsApp {site.whatsapp.display}
            </a>
            <a href={`tel:${site.phone.tel}`} className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/30 px-6 py-3 text-[15px] font-semibold transition hover:bg-ink/10">
              <PhoneIcon className="h-[18px] w-[18px]" />
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
