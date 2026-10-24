"use client";

import { useEffect, useState } from "react";

// Open or closed right now, based on India time and the shop hours in data/site.js.
export function shopStatus(site) {
  const d = new Date(Date.now() + 5.5 * 3600 * 1000);
  const mins = d.getUTCHours() * 60 + d.getUTCMinutes();
  const [oh, om] = site.hours.opens.split(":").map(Number);
  const [ch, cm] = site.hours.closes.split(":").map(Number);
  const open = mins >= oh * 60 + om && mins < ch * 60 + cm;
  return { open, text: open ? "Open now, till 10 PM" : "Closed now, opens 10 AM" };
}

export default function OpenStatus({ site, tone = "dark", className = "" }) {
  const [s, setS] = useState(null);
  useEffect(() => {
    const tick = () => setS(shopStatus(site));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [site]);

  const dark = tone === "dark";
  const label = s ? s.text : `${site.hours.label}, 10 AM to 10 PM`;
  const color = !s ? "bg-brass text-brass" : s.open ? "bg-[#3ccf7a] text-[#3ccf7a]" : "bg-ruby text-ruby";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${
        dark ? "border-ivory/15 bg-ivory/5 text-ivory/85" : "border-line bg-paper text-text"
      } ${className}`}
    >
      <span className={`h-2 w-2 animate-pulse-dot rounded-full ${color}`} />
      {label}
      <span className={dark ? "text-ivory/35" : "text-muted/60"}>·</span>
      <span className={dark ? "text-ivory/60" : "text-muted"}>Every day</span>
    </span>
  );
}
