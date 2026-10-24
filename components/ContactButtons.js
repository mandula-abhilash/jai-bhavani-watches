import { PhoneIcon, WhatsAppIcon } from "./Icons";

// The two main actions. WhatsApp is always first.
export default function ContactButtons({ site, tone = "light", className = "" }) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={site.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center gap-2.5 rounded-[4px] bg-whatsapp px-6 text-[15px] font-semibold text-white transition hover:brightness-110"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a
        href={`tel:${site.phone.tel}`}
        className={`inline-flex h-12 items-center gap-2.5 rounded-[4px] border px-6 text-[15px] font-semibold transition ${
          dark ? "border-white/35 text-white hover:border-white" : "border-ink/25 text-ink hover:border-ink"
        }`}
      >
        <PhoneIcon />
        Call<span className="hidden sm:inline"> {site.phone.display}</span>
      </a>
    </div>
  );
}
