"use client";

import { useEffect, useState } from "react";
import { LogoMark, WhatsAppIcon } from "./Icons";

const NAV = [
  ["Services", "#services"],
  ["Shop", "#shop"],
  ["How it works", "#process"],
  ["Videos", "#videos"],
  ["Brands", "#brands"],
  ["Reviews", "#reviews"],
  ["Visit", "#visit"],
];

// Always solid so it reads on every section, light or dark.
export default function Header({ site }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-ink text-ivory shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-5 md:h-[72px] md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label={`${site.name}, home`} onClick={() => setOpen(false)}>
          <LogoMark className="h-12 w-12 shrink-0" />
          <span className="min-w-0 leading-none">
            <span className="block truncate font-serif text-[20px] font-medium">Jai Bhavani</span>
            <span className="mt-1 block truncate text-[10.5px] font-medium uppercase tracking-[0.14em] text-brass">Watch Sales &amp; Service</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 text-[14px] text-ivory/75 lg:flex">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-3.5 py-2 transition hover:bg-ivory/10 hover:text-ivory">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brass hidden h-10 items-center gap-2 rounded-full pl-1.5 pr-4 text-[14px] font-semibold transition sm:inline-flex"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#128c4a] text-white">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-ivory/10 bg-ink lg:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4 sm:px-5">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="flex h-12 items-center rounded-xl border border-ivory/10 px-4 text-[15px] font-medium text-ivory/85">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
