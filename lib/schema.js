// LocalBusiness JSON-LD built only from verified data in data/site.js.
export function localBusinessSchema(site) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: site.nameTelugu,
    description: site.meta.description,
    telephone: site.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    hasMap: site.google.profile,
    sameAs: [site.youtube.url, site.facebook.url, site.google.profile],
  };
  if (site.siteUrl) {
    schema["@id"] = `${site.siteUrl}/#business`;
    schema.url = `${site.siteUrl}/`;
    schema.image = [`${site.siteUrl}/images/shop-front-1200.webp`, `${site.siteUrl}/images/deepu-at-shop-800.webp`];
  }
  return schema;
}
