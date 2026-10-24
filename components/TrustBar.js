import { CalendarIcon, PinIcon, StarIcon, YouTubeIcon } from "./Icons";

export default function TrustBar({ site }) {
  const items = [
    { icon: StarIcon, strong: `${site.google.rating} on Google`, text: `${site.google.reviewCount} reviews` },
    { icon: CalendarIcon, strong: "Open every day", text: "10 AM to 10 PM" },
    { icon: YouTubeIcon, strong: "Repairs on video", text: `${site.brands.length} brands on his channel` },
    { icon: PinIcon, strong: "Habeeb Nagar", text: "Sangareddy" },
  ];
  return (
    <section aria-label="Quick facts" className="relative z-10 border-y border-ivory/10 bg-ink-2 text-ivory">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {items.map(({ icon: Icon, strong, text }, i) => (
          <li
            key={strong}
            className={`flex items-center gap-3 px-5 py-5 md:justify-center md:px-6 md:py-6 ${i % 2 ? "border-l border-ivory/10" : ""} ${i > 1 ? "border-t border-ivory/10 md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass/30 bg-brass/10 text-brass">
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="leading-tight">
              <span className="block text-[14px] font-semibold md:text-[15px]">{strong}</span>
              <span className="block text-[12.5px] text-ivory/55 md:text-[13px]">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
