"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { StarIcon, WhatsAppIcon } from "./Icons";
import OpenStatus from "./OpenStatus";
import WatchExplosion from "./watch/WatchExplosion";

export default function Hero({ site }) {
  const watchRef = useRef(null);
  const sliderRef = useRef(null);
  const outRef = useRef(null);
  const sectionRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  // Desktop: scrolling through the pinned hero opens the watch (like dragging the slider).
  // Pressing Play runs the loop until the next scroll. Phones keep the auto loop.
  useEffect(() => {
    const section = sectionRef.current;
    const mq = window.matchMedia("(min-width: 1024px)");
    const clamp = (v) => Math.max(0, Math.min(1, v));
    const fromScroll = () => {
      if (!mq.matches || !watchRef.current) return;
      const r = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      watchRef.current.setProgress(clamp(-r.top / total / 0.9));
    };
    fromScroll();
    window.addEventListener("scroll", fromScroll, { passive: true });
    window.addEventListener("resize", fromScroll);
    return () => {
      window.removeEventListener("scroll", fromScroll);
      window.removeEventListener("resize", fromScroll);
    };
  }, []);

  // The watch reports its state; slider is updated directly so React does not re-render every frame.
  const onState = useCallback(({ playing: p, progress }) => {
    setPlaying(p);
    const v = Math.round(progress * 100);
    if (sliderRef.current) sliderRef.current.value = v;
    if (outRef.current) outRef.current.textContent = String(v).padStart(2, "0") + "%";
  }, []);

  const toggle = () => {
    const w = watchRef.current;
    if (!w) return;
    w.isPlaying() ? w.pause() : w.play();
  };

  return (
    <section ref={sectionRef} id="top" aria-label={site.name} className="relative bg-ink text-ivory lg:h-[220svh]">
      <div className="relative overflow-hidden lg:sticky lg:top-0 lg:h-[100svh]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,#21402e_0,#10241a_32%,#0a1510_70%)] max-lg:bg-[radial-gradient(ellipse_at_50%_72%,#21402e_0,#10241a_36%,#0a1510_74%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect filter='url(%23n)' width='160' height='160'/%3E%3C/svg%3E&quot;)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-2 px-5 pb-10 pt-24 md:px-8 lg:h-full lg:min-h-[100svh] lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:pb-12 lg:pt-20">
        {/* Copy */}
        <div className="relative z-10">
          <p className="eyebrow inline-flex items-center gap-3 text-brass max-sm:text-[10px]">
            <span className="h-px w-8 bg-brass max-sm:w-5" />
            Watch sales &amp; service · Sangareddy
          </p>
          <h1 className="mt-5 font-serif text-[54px] leading-[0.98] tracking-[-0.02em] sm:text-[68px] lg:mt-7 lg:text-[clamp(64px,6.4vw,100px)]">
            Restored.
            <br />
            Inside <span className="text-brass">&amp; out.</span>
          </h1>
          <p className="mt-4 max-w-[26rem] text-[15px] leading-relaxed text-ivory/70 lg:mt-6 lg:text-[16px]">
            Servicing, restoration and repair by <span className="text-ivory">{site.owner}</span>. Every part of your watch, cared for in Habeeb Nagar.
          </p>
          <p lang="te" className="mt-2 font-telugu text-[16px] text-ivory/40">{site.nameTelugu}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-8">
            <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-3 bg-brass pl-4 pr-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-brass-2">
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              WhatsApp Deepu
            </a>
            <a href="#services" className="border-b border-ivory/35 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory/85 transition hover:border-brass hover:text-ivory">
              See our services ↗
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <OpenStatus site={site} tone="dark" />
            <a href={site.google.profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] text-ivory/60 hover:text-ivory">
              <StarIcon className="h-4 w-4 text-brass" />
              <span>
                <strong className="font-semibold text-ivory">{site.google.rating}</strong> on Google · {site.google.reviewCount} reviews
              </span>
            </a>
          </div>
        </div>

        {/* Watch */}
        <div className="relative">
          <WatchExplosion ref={watchRef} onState={onState} className="!h-[min(420px,108vw)] lg:!h-[min(78svh,760px)]" />
          <div className="relative z-10 mt-1 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 lg:-mt-6">
            <button
              type="button"
              onClick={toggle}
              aria-pressed={playing}
              className="shrink-0 rounded-full border border-[#a0ad96]/30 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-ivory/85 transition hover:border-brass"
            >
              {playing ? "Ⅱ Pause animation" : "▷ Play animation"}
            </button>
            <div className="w-full max-w-[260px]">
              <label htmlFor="jb-sep" className="mb-3 flex justify-between text-[9.5px] uppercase tracking-[0.16em] text-[#a5b2a5]">
                Assembled <output ref={outRef} className="text-brass">00%</output> Exploded
              </label>
              <input
                id="jb-sep"
                ref={sliderRef}
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                onInput={(ev) => watchRef.current && watchRef.current.setProgress(+ev.currentTarget.value / 100)}
                aria-label="Watch parts separation"
                className="block h-[3px] w-full cursor-ew-resize accent-brass"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#9ba99c] lg:flex">
        <span className="grid h-9 w-5 place-items-center rounded-full border border-[#667c69] text-brass">↓</span>
        Scroll to reveal the inside
      </div>
      </div>
    </section>
  );
}
