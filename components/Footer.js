import { FacebookIcon, LogoMark, PhoneIcon, PinIcon, WhatsAppIcon, YouTubeIcon } from "./Icons";

export default function Footer({ site }) {
  const links = [
    { label: "WhatsApp", href: site.whatsapp.url, icon: WhatsAppIcon, external: true },
    { label: "Call", href: `tel:${site.phone.tel}`, icon: PhoneIcon },
    { label: "YouTube", href: site.youtube.url, icon: YouTubeIcon, external: true },
    { label: "Facebook", href: site.facebook.url, icon: FacebookIcon, external: true },
    { label: "Google Maps", href: site.google.profile, icon: PinIcon, external: true },
  ];
  return (
    <footer className="border-t border-ivory/10 bg-ink pb-28 text-ivory md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-11 w-11" />
            <div>
              <p className="font-serif text-[26px] leading-none">{site.name}</p>
              <p lang="te" className="mt-1 font-telugu text-[15px] text-ivory/45">{site.nameTelugu}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-ivory/55">
            Watch servicing, restoration and repair by {site.owner}. {site.address.line}. {site.hours.label}, {site.hours.time}.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 self-start sm:grid-cols-3">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-12 items-center gap-2.5 rounded-xl border border-ivory/10 px-4 text-[14px] font-medium text-ivory/75 transition hover:border-brass/50 hover:text-ivory"
              >
                <Icon className="h-4 w-4 text-brass" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-[12.5px] text-ivory/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>
            Designed &amp; developed by{" "}
            <a href="https://www.visdak.com/" target="_blank" rel="noopener noreferrer" className="text-ivory/70 hover:text-brass">
              VISDAK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
