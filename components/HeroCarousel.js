"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// 3D ring of his work photos. Rhythm: turn to the next card, zoom in, hold, turn again.
// Pauses on hover, on focus and when the tab is hidden. Swipe or use the arrows to steer.
const HOLD_MS = 3400;

export default function HeroCarousel({ items }) {
  const n = items.length;
  const [step, setStep] = useState(0); // keeps counting up so the ring always turns the short way
  const [paused, setPaused] = useState(false);
  const drag = useRef(null);
  const active = ((step % n) + n) % n;

  const go = useCallback((d) => setStep((s) => s + d), []);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(1), HOLD_MS);
    return () => clearTimeout(id);
  }, [step, paused, go]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onDown = (e) => {
    drag.current = { x: e.clientX, id: e.pointerId };
  };
  const onUp = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    drag.current = null;
    if (Math.abs(dx) > 35) go(dx < 0 ? 1 : -1);
  };

  const angle = 360 / n;
  const current = items[active];

  return (
    <div
      className="hc"
      style={{ "--n": n }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="His work"
    >
      <div className="hc-stage" onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => (drag.current = null)}>
        <div className="hc-ring" style={{ transform: `translateZ(calc(var(--r) * -1)) rotateY(${-step * angle}deg)` }}>
          {items.map((it, i) => (
            <figure
              key={it.src}
              className={`hc-card ${i === active ? "is-active" : ""}`}
              style={{ transform: `rotateY(${i * angle}deg) translateZ(var(--r))` }}
              aria-hidden={i === active ? undefined : "true"}
            >
              <div className="hc-inner">
                <img src={it.src} alt={i === active ? `${it.title}, ${it.note}` : ""} width="432" height="540" draggable="false" loading={i < 3 || i > n - 3 ? "eager" : "lazy"} decoding="async" />
                <figcaption>
                  <span className="hc-title">{it.title}</span>
                  <span className="hc-note">{it.note}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <div className="hc-floor" aria-hidden="true" />
      </div>

      <div className="hc-controls">
        <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="hc-btn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <p className="hc-count" aria-live="polite">
          <span className="text-brass">{String(active + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
          <span className="sr-only">: {current.title}, {current.note}</span>
        </p>
        <button type="button" onClick={() => go(1)} aria-label="Next photo" className="hc-btn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
