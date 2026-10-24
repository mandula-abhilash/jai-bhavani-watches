export default function SectionHeading({ id, eyebrow, title, intro, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className="max-w-2xl">
      <p className={`label ${dark ? "text-champagne" : "text-champagne-dark"}`}>{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] md:text-[42px]">
        {title}
      </h2>
      {intro && <p className={`mt-3 text-[16px] leading-relaxed ${dark ? "text-white/65" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}
