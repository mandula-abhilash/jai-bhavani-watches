import { PhoneIcon, WhatsAppIcon } from "./Icons";

// Always visible on phones so WhatsApp is one tap away on every screen.
export default function MobileBar({ site }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-midnight/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2.5">
        <a
          href={site.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[4px] bg-whatsapp text-[15px] font-semibold text-white"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
        <a
          href={`tel:${site.phone.tel}`}
          aria-label={`Call ${site.phone.display}`}
          className="grid h-12 w-12 place-items-center rounded-[4px] border border-white/30 text-white"
        >
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
}
