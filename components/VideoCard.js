"use client";

import { useState } from "react";
import { PlayIcon } from "./Icons";

// Shows the thumbnail first and loads the YouTube player only on tap.
export default function VideoCard({ video }) {
  const [play, setPlay] = useState(false);
  return (
    <article className="border-t border-white/15 pt-4">
      <div className="relative aspect-video overflow-hidden rounded-[4px] bg-midnight-2">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0"
          >
            <img
              src={video.thumb}
              alt=""
              width={640}
              height={360}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100"
            />
            <span className="absolute bottom-3 right-3 inline-flex h-10 items-center gap-2 rounded-[4px] bg-white px-3.5 text-[13px] font-semibold text-ink">
              <PlayIcon className="h-4 w-4" />
              Play
            </span>
          </button>
        )}
      </div>
      <h3 className="mt-4 font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] text-white">{video.title}</h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-white/60">{video.work}</p>
    </article>
  );
}
