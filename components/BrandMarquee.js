// Brand names from his video titles, scrolling like a watch strap.
export default function BrandMarquee({ site }) {
  const row = site.brands.map((b) => b.name);
  return (
    <section aria-label="Brands he has serviced" className="overflow-hidden border-b border-line bg-paper py-5 md:py-6">
      <div className="mask-fade-x flex">
        <ul className="flex shrink-0 animate-marquee items-center">
          {[...row, ...row].map((name, i) => (
            <li key={i} aria-hidden={i >= row.length ? "true" : undefined} className="flex items-center">
              <span className="whitespace-nowrap px-6 font-serif text-[22px] text-text/70 md:px-8 md:text-[28px]">{name}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
