import SectionHeading from "./SectionHeading";
import { ArrowIcon, PlayIcon, ServiceIcons, WhatsAppIcon } from "./Icons";

const yt = (id) => `https://www.youtube.com/watch?v=${id}`;

export default function Services({ site }) {
  const [featured, wide, ...rest] = site.services;
  const FIcon = ServiceIcons[featured.icon];
  const WIcon = ServiceIcons[wide.icon];

  return (
    <section id="services" aria-labelledby="services-title" className="relative scroll-mt-20 bg-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-light mask-fade-y" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="Every part of the watch,"
            accent="fixed at the bench."
            intro="Each service below is shown in one of his own repair videos. Tap any card to watch it being done."
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {/* Featured */}
          <a
            href={yt(featured.video.id)}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-ivory sm:col-span-2 md:min-h-[420px] md:p-9 lg:row-span-2"
          >
            <img src="/images/work-kohinoor.webp" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[50%_35%] opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-55" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brass/40 bg-brass/15 text-brass backdrop-blur">
                <FIcon className="h-6 w-6" />
              </span>
              <p className="eyebrow mt-6 text-brass">Most asked</p>
              <h3 className="mt-2 font-serif text-[28px] font-medium leading-[1.1] md:text-[40px]">{featured.title}</h3>
              <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ivory/70">{featured.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-ivory px-4 py-2 text-[13.5px] font-semibold text-ink transition group-hover:bg-brass-2">
                <PlayIcon className="h-4 w-4" />
                Watch: {featured.video.label}
              </span>
            </div>
          </a>

          {/* Wide */}
          <a
            href={yt(wide.video.id)}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ "--d": "80ms" }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#e9e6d6] to-paper p-6 sm:col-span-2 md:p-7"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-brass">
                <WIcon className="h-6 w-6" />
              </span>
              <span className="eyebrow rounded-full border border-brass-ink/25 px-3 py-1 text-[10px] text-brass-ink">Before and after</span>
            </div>
            <div className="mt-6">
              <h3 className="font-serif text-[24px] font-medium leading-[1.15] md:text-[28px]">{wide.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">{wide.text}</p>
              <CardLink label={wide.video.label} />
            </div>
          </a>

          {rest.map((s, i) => {
            const Icon = ServiceIcons[s.icon];
            return (
              <a
                key={s.title}
                href={yt(s.video.id)}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={{ "--d": `${(i % 4) * 70}ms` }}
                className="group relative grid grid-cols-[44px_1fr] gap-x-4 overflow-hidden rounded-2xl border border-line bg-paper p-4 transition duration-300 hover:border-brass/50 hover:shadow-[0_24px_50px_-28px_rgba(60,80,50,0.45)] sm:flex sm:flex-col sm:rounded-3xl sm:p-6"
              >
                <span className="row-span-1 grid h-11 w-11 place-items-center rounded-2xl border border-brass/30 bg-gradient-to-b from-[#f3efe0] to-[#e7e0c8] text-brass-ink transition group-hover:bg-none group-hover:bg-ink group-hover:text-brass">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-[16.5px] font-semibold leading-snug sm:mt-5 sm:text-[17px]">{s.title}</h3>
                  <p className="mt-1 flex-1 text-[14.5px] leading-relaxed text-muted sm:mt-1.5">{s.text}</p>
                  <CardLink label={s.video.label} />
                </div>
              </a>
            );
          })}

          {/* CTA card */}
          <a
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#e6cf94] via-[#c7aa73] to-[#9a7d45] p-6 text-ink sm:col-span-2 md:p-7"
          >
            <GearCluster className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 opacity-20 mix-blend-multiply" mono />
            <div className="relative">
              <p className="eyebrow text-ink/70">Not sure what it needs?</p>
              <h3 className="mt-2 max-w-sm font-serif text-[26px] font-medium leading-[1.1] md:text-[30px]">Send a photo of your watch on WhatsApp.</h3>
            </div>
            <span className="relative inline-flex w-fit items-center gap-2.5 rounded-full bg-ink py-2 pl-2 pr-5 text-[14px] font-semibold text-ivory">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#128c4a]">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              {site.whatsapp.display}
              <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CardLink({ label }) {
  return (
    <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-text sm:mt-4">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-brass transition group-hover:bg-brass group-hover:text-ink">
        <PlayIcon className="h-3 w-3" />
      </span>
      <span className="underline decoration-line underline-offset-4 transition group-hover:decoration-brass-ink">{label}</span>
    </span>
  );
}

// Two meshing gears, drawn in SVG. Static decoration.
export function GearCluster({ className = "", mono = false }) {
  const teeth = (n, r, d) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      const st = (Math.PI * 2) / n;
      const pts = [
        [r - d, a],
        [r, a + st * 0.18],
        [r, a + st * 0.42],
        [r - d, a + st * 0.6],
      ];
      return pts.map(([rr, aa]) => `${(Math.cos(aa) * rr).toFixed(2)},${(Math.sin(aa) * rr).toFixed(2)}`).join(" ");
    }).join(" ");
  const stroke = mono ? "#1b1813" : "url(#gc-b)";
  return (
    <svg aria-hidden="true" viewBox="-100 -100 200 200" className={className}>
      <defs>
        <linearGradient id="gc-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3e2b4" />
          <stop offset="1" stopColor="#9a7d45" />
        </linearGradient>
      </defs>
      <g>
        <g transform="translate(-20 -10)">
          <polygon points={teeth(40, 58, 6)} fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle r="40" fill="none" stroke={stroke} strokeWidth="1" />
          <circle r="8" fill="none" stroke={stroke} strokeWidth="1.4" />
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" y1="0" x2={(Math.cos((i / 5) * 6.283) * 40).toFixed(2)} y2={(Math.sin((i / 5) * 6.283) * 40).toFixed(2)} stroke={stroke} strokeWidth="1" />
          ))}
        </g>
      </g>
      <g>
        <g transform="translate(58 52)">
          <polygon points={teeth(20, 30, 5)} fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle r="6" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle r="18" fill="none" stroke={stroke} strokeWidth="0.8" strokeDasharray="2 3" />
        </g>
      </g>
    </svg>
  );
}
