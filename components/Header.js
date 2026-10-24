import { WhatsAppIcon } from "./Icons";

export default function Header({ site }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-[17px] font-semibold tracking-[-0.02em]">Jai Bhavani</span>
          <span className="label text-[10px] text-champagne">Watch</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 text-[14px] text-white/70 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#brands" className="hover:text-white">Brands</a>
          <a href="#videos" className="hover:text-white">Videos</a>
          <a href="#reviews" className="hover:text-white">Reviews</a>
          <a href="#visit" className="hover:text-white">Visit</a>
        </nav>
        <a
          href={site.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-[4px] bg-whatsapp px-3.5 text-[13px] font-semibold text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
