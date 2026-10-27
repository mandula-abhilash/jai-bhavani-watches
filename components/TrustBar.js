import { CalendarIcon, PinIcon, StarIcon, YouTubeIcon } from "./Icons";

export default function TrustBar({ site }) {
  const items = [
    { icon: StarIcon, strong: `${site.google.rating} on Google`, text: `${site.google.reviewCount} reviews` },
    { icon: CalendarIcon, strong: "Open daily", text: "10 AM to 10 PM" },
    { icon: YouTubeIcon, strong: "Sales & repair", text: `${site.brands.length} brands on YouTube` },
    { icon: PinIcon, strong: site.address.street, text: site.address.city },
  ];
  return (
    <section aria-label="Quick facts" className="relative z-10 border-y border-ivory/10 bg-ink-2 text-ivory">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, strong, text }, i) => (
          <li
            key={strong}
            className={`flex min-w-0 items-center gap-2.5 px-4 py-4 sm:gap-3 sm:px-5 lg:justify-center md:px-6 md:py-6 ${i % 2 ? "border-l border-ivory/10" : ""} ${i > 1 ? "border-t border-ivory/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brass/30 bg-brass/10 text-brass sm:h-10 sm:w-10">
              <Icon className="h-[17px] w-[17px]" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[14px] font-semibold md:text-[15px]">{strong}</span>
              <span className="block truncate text-[12.5px] text-ivory/60 md:text-[13px]">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
