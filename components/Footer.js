import { FacebookIcon, PhoneIcon, PinIcon, WhatsAppIcon, YouTubeIcon } from "./Icons";

export default function Footer({ site }) {
  const links = [
    { label: "WhatsApp", href: site.whatsapp.url, icon: WhatsAppIcon, external: true },
    { label: "Call", href: `tel:${site.phone.tel}`, icon: PhoneIcon },
    { label: "YouTube", href: site.youtube.url, icon: YouTubeIcon, external: true },
    { label: "Facebook", href: site.facebook.url, icon: FacebookIcon, external: true },
    { label: "Google Maps", href: site.google.profile, icon: PinIcon, external: true },
  ];
  return (
    <footer className="bg-midnight pb-24 text-white md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <p className="font-display text-[22px] font-semibold tracking-[-0.02em]">{site.name}</p>
        <p className="mt-1 text-[14px] text-white/60">{site.address.line}</p>
        <p className="text-[14px] text-white/60">{site.hours.label} · {site.hours.time}</p>
        <ul className="mt-7 grid grid-cols-2 border-t border-white/15 sm:grid-cols-5">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label} className="border-b border-white/10">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-12 items-center gap-2.5 text-[14px] font-medium text-white/80 transition hover:text-champagne"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[12px] text-white/55">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
