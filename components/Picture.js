// Responsive local WebP image. Files live at `${src}-${width}.webp`.
export default function Picture({ src, sizes, w, h, alt, className = "", imgSizes = "100vw", priority = false }) {
  const largest = sizes[sizes.length - 1];
  return (
    <img
      src={`${src}-${largest}.webp`}
      srcSet={sizes.map((s) => `${src}-${s}.webp ${s}w`).join(", ")}
      sizes={imgSizes}
      width={w}
      height={h}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}
