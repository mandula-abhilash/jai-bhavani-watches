export default function SectionHeading({ id, eyebrow, title, accent, intro, tone = "light", align = "left" }) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`} data-reveal>
      <p className={`eyebrow inline-flex items-center gap-3 ${dark ? "text-brass" : "text-brass-ink"}`}>
        <span className={`h-px w-8 ${dark ? "bg-brass/60" : "bg-brass-ink/50"}`} />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-serif text-[36px] leading-[1.02] tracking-[-0.005em] sm:text-[44px] md:text-[60px]">
        {title}
        {accent && <span className={`${dark ? "text-brass-grad" : "text-brass-ink"}`}> {accent}</span>}
      </h2>
      {intro && <p className={`mt-4 text-[16px] leading-relaxed md:text-[17px] ${dark ? "text-ivory/60" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}
