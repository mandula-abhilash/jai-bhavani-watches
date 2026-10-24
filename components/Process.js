import SectionHeading from "./SectionHeading";
import { PinIcon, ServiceIcons, WhatsAppIcon } from "./Icons";

export default function Process({ site }) {
  const steps = [
    { icon: WhatsAppIcon, title: "Send a message", text: `WhatsApp ${site.whatsapp.display} with a photo of the watch and what is wrong with it.` },
    { icon: PinIcon, title: "Bring it to the shop", text: `${site.address.street}, ${site.address.city}. Open every day, 10 AM to 10 PM.` },
    { icon: ServiceIcons.gear, title: "He opens it and explains", text: "Deepu checks the watch and explains what it needs. Customers say he does this patiently." },
    { icon: ServiceIcons.lume, title: "Serviced and handed back", text: "Cleaned, repaired and closed up, ready to go back on your wrist." },
  ];
  return (
    <section id="process" aria-labelledby="process-title" className="relative scroll-mt-20 overflow-hidden bg-ink text-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-fade-y opacity-60" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(50%_60%_at_50%_0%,rgba(199,170,115,0.16),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading id="process-title" tone="dark" align="center" eyebrow="How it works" title="From your wrist to his bench," accent="and back." />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div aria-hidden="true" className="absolute left-[23px] top-6 h-[calc(100%-48px)] w-px bg-gradient-to-b from-brass via-brass/40 to-transparent md:left-[12.5%] md:right-[12.5%] md:top-6 md:h-px md:w-auto md:bg-gradient-to-r" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} data-reveal style={{ "--d": `${i * 120}ms` }} className="relative grid grid-cols-[48px_1fr] gap-5 md:grid-cols-1 md:justify-items-center md:text-center">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-brass/50 bg-ink-2 text-brass shadow-[0_0_0_6px_#0a1510,0_0_30px_rgba(199,170,115,0.35)]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-[10.5px] text-brass/80">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-serif text-[26px] leading-tight md:text-[28px]">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/60 md:mx-auto md:max-w-[15rem]">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
