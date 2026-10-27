"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { ArrowIcon, PlayIcon, YouTubeIcon } from "./Icons";

// One big player and a playlist. The YouTube player loads only after a tap.
export default function Videos({ site }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = site.videos[active];

  const pick = (i) => {
    setActive(i);
    setPlaying(true);
  };

  return (
    <section id="videos" aria-labelledby="videos-title" className="relative scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="videos-title"
            eyebrow="Work videos"
            title="Watch the repairs,"
            accent="start to finish."
            intro="Each watch is opened, serviced and closed on camera. Here are six of his videos."
          />
          <a
            href={site.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-ivory px-4 py-2.5 text-[14px] font-semibold transition hover:border-brass md:self-auto"
          >
            <YouTubeIcon className="h-5 w-5 text-[#e02424]" />
            All videos on YouTube
            <ArrowIcon />
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.65fr_1fr]">
          <div data-reveal className="overflow-hidden rounded-3xl bg-ink text-ivory shadow-[0_40px_80px_-40px_rgba(10,21,16,0.6)]">
            <div className="relative aspect-video">
              {playing ? (
                <iframe
                  key={v.id}
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video: ${v.title}`} className="group absolute inset-0">
                  <img src={v.thumb} alt="" width={640} height={360} className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory/15 backdrop-blur-md transition group-hover:scale-110">
                    <span className="btn-brass grid h-14 w-14 place-items-center rounded-full">
                      <PlayIcon className="ml-0.5 h-6 w-6" />
                    </span>
                  </span>
                </button>
              )}
            </div>
            <div className="p-5 md:p-7">
              <p className="eyebrow text-[10.5px] text-brass">Now showing · {String(active + 1).padStart(2, "0")} of {String(site.videos.length).padStart(2, "0")}</p>
              <h3 className="mt-2 font-serif text-[24px] font-medium leading-tight md:text-[30px]">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ivory/60">{v.work}</p>
            </div>
          </div>

          <ul className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1 sm:-mx-5 sm:px-5 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
            {site.videos.map((item, i) => (
              <li key={item.id} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-auto">
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={i === active}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-2.5 text-left transition ${
                    i === active ? "border-brass bg-ivory shadow-[0_12px_30px_-18px_rgba(60,80,50,0.6)]" : "border-line bg-ivory/60 hover:border-brass/50"
                  }`}
                >
                  <span className="relative aspect-video w-24 shrink-0 sm:w-28 overflow-hidden rounded-xl bg-ink md:w-32">
                    <img src={item.thumb} alt="" width={640} height={360} loading="lazy" className="h-full w-full object-cover" />
                    {i === active && (
                      <span className="absolute inset-0 grid place-items-center bg-ink/40">
                        <span className="flex items-end gap-0.5">
                          <span className="h-3 w-1 animate-pulse rounded bg-brass" />
                          <span className="h-4 w-1 animate-pulse rounded bg-brass [animation-delay:150ms]" />
                          <span className="h-2.5 w-1 animate-pulse rounded bg-brass [animation-delay:300ms]" />
                        </span>
                      </span>
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10.5px] text-brass-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mt-0.5 line-clamp-2 block text-[14.5px] font-semibold leading-snug">{item.title}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
