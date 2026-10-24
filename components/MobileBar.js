import { PhoneIcon, WhatsAppIcon } from "./Icons";

// Always visible on phones so WhatsApp is one tap away on every screen.
export default function MobileBar({ site }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2 rounded-full border border-ivory/10 bg-ink/85 p-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="btn-brass inline-flex h-12 items-center justify-center gap-2.5 rounded-full text-[15px] font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#128c4a] text-white">
            <WhatsAppIcon className="h-4 w-4" />
          </span>
          WhatsApp Deepu
        </a>
        <a href={`tel:${site.phone.tel}`} aria-label={`Call ${site.phone.display}`} className="grid h-12 w-12 place-items-center rounded-full border border-ivory/20 text-ivory">
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
}
