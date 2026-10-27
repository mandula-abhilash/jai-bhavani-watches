// Structured data built only from verified data in data/site.js.
// Store is a LocalBusiness subtype: he repairs and also sells watches and clocks.
export function localBusinessSchema(site) {
  const url = site.siteUrl ? `${site.siteUrl}/` : undefined;
  const business = {
    "@type": ["Store", "LocalBusiness"],
    name: site.name,
    alternateName: [site.nameTelugu, "Jai Bhavani Watch Centre"],
    description: site.meta.description,
    founder: { "@type": "Person", name: site.owner },
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
    areaServed: { "@type": "City", name: "Sangareddy" },
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
    knowsAbout: ["Watch repair", "Watch servicing", "Watch restoration", "Wall clocks", ...site.brands.map((b) => b.name)],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Watch sales and service",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Watches and clocks for sale",
          // Plain offers, not Product items, so Google does not expect prices on this page.
          itemListElement: site.sales.map((p) => ({
            "@type": "Offer",
            name: p.title,
            description: p.text,
            availability: "https://schema.org/InStoreOnly",
          })),
        },
        {
          "@type": "OfferCatalog",
          name: "Watch repair services",
          itemListElement: site.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text },
          })),
        },
      ],
    },
  };

  if (!site.siteUrl) return { "@context": "https://schema.org", ...business };

  business["@id"] = `${site.siteUrl}/#business`;
  business.url = url;
  business.logo = `${site.siteUrl}/icon-512.png`;
  business.image = [
    `${site.siteUrl}/og.jpg`,
    `${site.siteUrl}/images/shop-front-1200.webp`,
    `${site.siteUrl}/images/deepu-at-shop-800.webp`,
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "WebSite",
        "@id": `${site.siteUrl}/#website`,
        url,
        name: site.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${site.siteUrl}/#business` },
      },
    ],
  };
}
