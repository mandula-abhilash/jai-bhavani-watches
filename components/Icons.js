const base = { "aria-hidden": "true", focusable: "false" };

export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.08.8.82-3-.2-.31a8.2 8.2 0 1 1 6.94 3.84zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.75 4.75 0 0 0 1 2.53 10.9 10.9 0 0 0 4.17 3.68c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.29z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h3l1.5 4-2 1.3a11 11 0 0 0 5.2 5.2L14 12.5l4 1.5v3a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3.1 1.2-6.3L2.8 9.5l6.4-.8z" />
    </svg>
  );
}

export function PlayIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.86.25-1.45 1.5-1.45h1.5V4.5a20 20 0 0 0-2.2-.1c-2.2 0-3.7 1.34-3.7 3.8v2.3H8.1v3h2.5V21z" />
    </svg>
  );
}

const line = { ...base, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

// Brand mark: a small dial with hands at ten past ten.
export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg {...base} viewBox="0 0 40 40" className={className}>
      <defs>
        <linearGradient id="lm-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3e2b4" />
          <stop offset="0.5" stopColor="#c7aa73" />
          <stop offset="1" stopColor="#9a7d45" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="none" stroke="url(#lm-b)" strokeWidth="2.4" />
      <circle cx="20" cy="20" r="13.5" fill="none" stroke="url(#lm-b)" strokeWidth="0.8" strokeDasharray="0.8 2.73" />
      <path d="M20 20 L12.5 15.5" stroke="url(#lm-b)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20 20 L28.5 13" stroke="url(#lm-b)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 20 L20 30" stroke="#d0303f" strokeWidth="1" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2" fill="url(#lm-b)" />
    </svg>
  );
}

export const ServiceIcons = {
  gear: (p) => (
    <svg {...line} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
      <circle cx="12" cy="12" r="6.6" />
    </svg>
  ),
  drop: (p) => (
    <svg {...line} {...p}>
      <path d="M12 3.2s6 6.4 6 10.6a6 6 0 0 1-12 0C6 9.6 12 3.2 12 3.2z" />
      <path d="M9.2 14.5a2.9 2.9 0 0 0 2.8 2.6" />
    </svg>
  ),
  glass: (p) => (
    <svg {...line} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M7.5 9.5a5 5 0 0 1 3-3M8 13l5-5M10.5 15l5.5-5.5" opacity="0.7" />
    </svg>
  ),
  polish: (p) => (
    <svg {...line} {...p}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </svg>
  ),
  lume: (p) => (
    <svg {...line} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12V6.5M12 12l3.8 2.4" />
      <path d="M12 2v1.4M12 20.6V22M2 12h1.4M20.6 12H22" opacity="0.6" />
    </svg>
  ),
  crown: (p) => (
    <svg {...line} {...p}>
      <rect x="3" y="8" width="9" height="8" rx="2" />
      <path d="M12 12h3.2" />
      <path d="M15.2 9.2h3.6a1.2 1.2 0 0 1 1.2 1.2v3.2a1.2 1.2 0 0 1-1.2 1.2h-3.6z" />
      <path d="M16.6 9.2v5.6M18.2 9.2v5.6" opacity="0.6" />
    </svg>
  ),
  spring: (p) => (
    <svg {...line} {...p}>
      <path d="M12 12a1 1 0 1 1 1-1 2.6 2.6 0 0 1-2.6 2.6A4 4 0 0 1 6.4 9.6 5.6 5.6 0 0 1 12 4a7.2 7.2 0 0 1 7.2 7.2A8.6 8.6 0 0 1 10.6 19.8" />
    </svg>
  ),
  chip: (p) => (
    <svg {...line} {...p}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
      <path d="M9.5 12h2l1-2 1 4 1-2h1" />
    </svg>
  ),
  battery: (p) => (
    <svg {...line} {...p}>
      <ellipse cx="12" cy="9" rx="8" ry="3.2" />
      <path d="M4 9v5c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V9" />
      <path d="M12 7.6v2.8M10.6 9h2.8" />
    </svg>
  ),
  strap: (p) => (
    <svg {...line} {...p}>
      <path d="M8 2.5h8v5M8 2.5v5M8 16.5v5h8v-5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 21.5v0M12 19v0" />
    </svg>
  ),
};

export function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg {...line} className={className} strokeWidth="2">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M10 6.5C6.6 7.6 4.5 10.3 4.5 14v3.5h6V12H7.6c.3-1.9 1.4-3.2 3.1-3.9zM19.5 6.5c-3.4 1.1-5.5 3.8-5.5 7.5v3.5h6V12h-2.9c.3-1.9 1.4-3.2 3.1-3.9z" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...line} className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}
