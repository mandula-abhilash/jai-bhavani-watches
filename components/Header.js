"use client";

import { useEffect, useState } from "react";
import { LogoMark, WhatsAppIcon } from "./Icons";

const NAV = [
  ["Services", "#services"],
  ["How it works", "#process"],
  ["Videos", "#videos"],
  ["Brands", "#brands"],
  ["Reviews", "#reviews"],
  ["Visit", "#visit"],
];

export default function Header({ site }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-ivory transition-[background,border-color,backdrop-filter] duration-500 ${
        solid ? "border-b border-ivory/10 bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name}, home`}>
          <LogoMark className="h-9 w-9" />
          <span className="leading-none">
            <span className="block font-serif text-[22px] tracking-[0.01em]">Jai Bhavani</span>
            <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.22em] text-brass">Watch Sales &amp; Service</span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full border border-ivory/10 bg-ivory/[0.04] p-1 text-[13.5px] text-ivory/70 backdrop-blur lg:flex">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-3.5 py-1.5 transition hover:bg-ivory/10 hover:text-ivory">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={site.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brass inline-flex h-10 items-center gap-2 rounded-full pl-1.5 pr-4 text-[13.5px] font-semibold transition"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#128c4a] text-white">
            <WhatsAppIcon className="h-4 w-4" />
          </span>
          WhatsApp
        </a>
      </div>
    </header>
  );
}
