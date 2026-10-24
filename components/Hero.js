import { preload } from "react-dom";
import ContactButtons from "./ContactButtons";
import Picture from "./Picture";
import { StarIcon } from "./Icons";

export default function Hero({ site }) {
  const photo = site.photos.hero;
  preload(`${photo.src}-${photo.sizes[photo.sizes.length - 1]}.webp`, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: photo.sizes.map((s) => `${photo.src}-${s}.webp ${s}w`).join(", "),
    imageSizes: "(min-width: 768px) 50vw, 100vw",
  });

  return (
    <section id="top" className="bg-midnight text-white">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2 md:items-stretch">
        <div className="px-5 pb-8 pt-9 md:px-8 md:py-24">
          <p className="label text-champagne">Watch service · Sangareddy</p>
          <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[60px]">
            Jai Bhavani Watch
            <span className="block text-white/55">Sales &amp; Service</span>
          </h1>
          <p lang="te" className="mt-3 text-[19px] leading-none text-white/50" style={{ fontFamily: "var(--font-telugu), sans-serif" }}>
            {site.nameTelugu}
          </p>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/80">{site.tagline}</p>
          <ContactButtons site={site} tone="dark" className="mt-7" />
          <a
            href={site.google.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[14px] text-white/65 hover:text-white"
          >
            <StarIcon className="h-4 w-4 text-champagne" />
            <span>
              <strong className="font-semibold text-white">{site.google.rating}</strong> on Google · {site.google.reviewCount} reviews
            </span>
          </a>
        </div>
        <div className="relative">
          <Picture
            {...photo}
            priority
            imgSizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] h-full w-full object-cover md:aspect-auto"
          />
        </div>
      </div>
      <div className="border-t border-white/10">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 text-[14px] md:grid-cols-3">
          <div className="px-5 py-4 md:px-8">
            <dt className="label text-[10px] text-white/45">Open</dt>
            <dd className="mt-1 font-medium">Every day, 10 AM to 10 PM</dd>
          </div>
          <div className="px-5 py-4 md:px-8">
            <dt className="label text-[10px] text-white/45">Shop</dt>
            <dd className="mt-1 font-medium">{site.address.street}, {site.address.city}</dd>
          </div>
          <div className="hidden px-8 py-4 md:block">
            <dt className="label text-[10px] text-white/45">WhatsApp</dt>
            <dd className="mt-1 font-medium">{site.whatsapp.display}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
