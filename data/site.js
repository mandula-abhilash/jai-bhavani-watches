// All content for the site. Every fact here was verified on 24 Oct 2026 against
// his Google Business Profile, his YouTube channel or his Facebook page.
// Rule: no em dashes or en dashes anywhere.

const yt = (id) => `https://www.youtube.com/watch?v=${id}`;

const WHATSAPP_NUMBER = "919154032039"; // from his YouTube descriptions: "9154032039 only on WhatsApp"
const WHATSAPP_TEXT = "Hi, I found your website. I want to get my watch checked.";

export const site = {
  // Set this to the live address when deploying. Used for canonical, Open Graph and schema.
  siteUrl: "https://jaibhavani.abhilashmandula.com",

  name: "Jai Bhavani Watch Sales & Service",
  nameTelugu: "జై భవానీ వాచ్ సేల్స్ & సర్వీస్",
  owner: "Deepu Kulkarni",
  tagline: "Watch servicing and restoration in Sangareddy, by Deepu Kulkarni.",
  meta: {
    title: "Jai Bhavani Watch Sales & Service · Watch repair in Sangareddy",
    description:
      "Watch servicing and restoration in Habeeb Nagar, Sangareddy. Cleaning and oiling, glass replacement, case polishing, luminous compound, crowns, gaskets and batteries. Open every day, 10 AM to 10 PM.",
  },

  phone: { display: "099490 69498", tel: "+919949069498" },
  whatsapp: {
    display: "91540 32039",
    number: WHATSAPP_NUMBER,
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`,
  },

  address: {
    line: "Habeeb Nagar, Sangareddy, Telangana 502001",
    street: "Habeeb Nagar",
    city: "Sangareddy",
    region: "Telangana",
    postalCode: "502001",
    country: "IN",
    plusCode: "J38J+CF Sangareddy",
  },
  geo: { lat: 17.6161063, lng: 78.0811591 },
  hours: { label: "Open every day", time: "10:00 AM to 10:00 PM", opens: "10:00", closes: "22:00" },

  google: {
    profile: "https://maps.google.com/?cid=15113356896526980821",
    directions: "https://www.google.com/maps/dir/?api=1&destination=17.6161063,78.0811591",
    embed:
      "https://maps.google.com/maps?q=Jai%20Bhavani%20Watch%20Sales%20%26%20Service%2C%20Habeeb%20Nagar%2C%20Sangareddy&ll=17.6161063,78.0811591&z=17&output=embed",
    rating: "4.4",
    reviewCount: "153",
  },
  youtube: {
    url: "https://www.youtube.com/@jaibhavaniwatchdeepukulkar2562",
    handle: "@jaibhavaniwatchdeepukulkar2562",
  },
  facebook: { url: "https://www.facebook.com/Sangareddi/" },

  photos: {
    hero: { src: "/images/restored-green-dial", sizes: [640, 900, 1200], w: 1600, h: 900, alt: "A serviced watch with a green dial on the bench at Jai Bhavani Watch" },
    owner: { src: "/images/deepu-at-shop", sizes: [480, 800], w: 1600, h: 2133, alt: "Deepu Kulkarni at the entrance of Jai Bhavani Watch Sales & Service" },
    front: { src: "/images/shop-front", sizes: [640, 1200], w: 1600, h: 600, alt: "Shop front of Jai Bhavani Watch Sales & Service in Sangareddy" },
    inside: { src: "/images/shop-inside", sizes: [640, 1000], w: 1600, h: 1200, alt: "Inside the shop: wall clocks and watch display counters" },
    display: { src: "/images/watch-display", sizes: [640, 1000], w: 1600, h: 1200, alt: "Watches on display in the shop" },
    restored: { src: "/images/restored-white-dial", sizes: [640, 1000], w: 1600, h: 901, alt: "A watch with a white dial and jubilee bracelet after service" },
  },

  // Each service is backed by his own video description.
  services: [
    {
      title: "Movement cleaning and oiling",
      icon: "gear",
      text: "The movement is taken apart, given a chemical wash and oiled again.",
      video: { id: "B7cTnkqu2m8", label: "HMT Kohinoor service" },
    },
    {
      title: "Rusty and water damaged watches",
      icon: "drop",
      text: "Watches with rust or mud inside are cleaned part by part and put back together.",
      video: { id: "7Yz-qQKOj6M", label: "Rusty and muddy Allwyn" },
    },
    {
      title: "Glass replacement",
      icon: "glass",
      text: "Acrylic, mineral and sapphire crystal glass, fitted to the watch.",
      video: { id: "ot2QD9BLlPI", label: "Seiko 5 mineral glass" },
    },
    {
      title: "Case buffing and polishing",
      icon: "polish",
      text: "Scratches and small dents are buffed out and the case is polished.",
      video: { id: "B7cTnkqu2m8", label: "HMT Kohinoor case" },
    },
    {
      title: "Luminous compound and enamel on hands",
      icon: "lume",
      text: "Fresh luminous compound on hands and dial markers, and enamel on faded hands.",
      video: { id: "6j9WrZBzdyM", label: "HMT Kohinoor hands" },
    },
    {
      title: "Crowns, stems and gaskets",
      icon: "crown",
      text: "New crown, stem, case pipe and case back gasket when the old ones are worn.",
      video: { id: "5Ff0rzwD6U4", label: "Casio Edifice crown and gasket" },
    },
    {
      title: "Movement parts",
      icon: "spring",
      text: "Balance wheel, hairspring, mainspring, jewels and wheels replaced when needed.",
      video: { id: "DpujK9u1OhQ", label: "HMT Tara balance and hairspring" },
    },
    {
      title: "Quartz circuit repair",
      icon: "chip",
      text: "Circuit board track lines soldered on quartz movements.",
      video: { id: "jBghLct_mks", label: "Pierre Cardin circuit soldering" },
    },
    {
      title: "Battery replacement",
      icon: "battery",
      text: "New battery for quartz watches, with the movement cleaned.",
      video: { id: "yxa3TVfQdy8", label: "Swiss Military battery" },
    },
    {
      title: "Straps and bracelets",
      icon: "strap",
      text: "New leather straps and metal chains, and broken bracelet clamps replaced.",
      video: { id: "drKwNo5LOqU", label: "HMT automatic metal strap" },
    },
  ],

  // Every brand is named in the title of one of his videos.
  brands: [
    ["Allwyn", "7Yz-qQKOj6M"],
    ["Archi", "vEtaan1sgbk"],
    ["Binger", "_Fw8tT2MiHg"],
    ["Casio", "5Ff0rzwD6U4"],
    ["Chairos", "oXDMe90D1o4"],
    ["Citizen", "YvkHc_4g53w"],
    ["Fastrack", "HmbtT5y1B1g"],
    ["Favre-Leuba", "qPNzGFOhU-E"],
    ["Fossil", "XDLCgvh6Qe4"],
    ["GC", "eRoHDN9SusQ"],
    ["Henri Sandoz", "ymuHBTgDJcw"],
    ["HMT", "B7cTnkqu2m8"],
    ["Jemis", "_HnmUjb22m4"],
    ["Jowissa", "wDWXbH9VBkA"],
    ["Kenneth Cole", "UZ2sXVx_P50"],
    ["Lorus", "Hb5mMKpNYBI"],
    ["Nautica", "7c2Qc839svA"],
    ["Orient", "kAiv2poLb9w"],
    ["Pierre Cardin", "jBghLct_mks"],
    ["Rado", "Uw9WKfO2M8c"],
    ["Raymond Weil", "s6IrvSxAerU"],
    ["Seiko", "ot2QD9BLlPI"],
    ["Swiss Military", "yxa3TVfQdy8"],
    ["Tag Heuer", "rK__2bRIVao"],
    ["Timex", "z7cbZEn5xoY"],
    ["Tissot", "cFiqy__o-KU"],
    ["Titan", "DGCk2FOXioE"],
    ["Tommy Hilfiger", "PdADvtaRHJs"],
    ["U-Boat", "z-jF6XrYYQc"],
    ["Viceroy", "AOurBAHqT3M"],
    ["Westar", "xpFcXIKKMPU"],
  ].map(([name, id]) => ({ name, url: yt(id) })),

  // Six of his videos. All are on his channel and allow embedding.
  videos: [
    { id: "B7cTnkqu2m8", title: "HMT Kohinoor vintage watch service", work: "Chemical wash, oiling, acrylic glass, luminous compound on hands, dents and scratches polished out, new strap." },
    { id: "ot2QD9BLlPI", title: "Seiko 5 automatic, buffing and polishing", work: "Cleaning, oiling, buffing and polishing, mineral glass, luminous compound on hands and dial, hairspring and balance repair." },
    { id: "qPNzGFOhU-E", title: "Favre-Leuba Geneve Sea-King vintage service", work: "Chemical wash, oiling, acrylic glass, new crown, case polishing, new leather strap." },
    { id: "7Yz-qQKOj6M", title: "Allwyn vintage watch service", work: "A rusty and muddy watch cleaned and put back together. Chemical wash, oiling, acrylic glass." },
    { id: "jBghLct_mks", title: "Pierre Cardin Swiss multifunction service", work: "Chemical wash, oiling, polishing, new battery, circuit board track soldering, pusher gaskets." },
    { id: "5Ff0rzwD6U4", title: "Casio Edifice, rusty watch service", work: "Cleaning, oiling, 3D lens crystal glass, battery, case back gasket, crown and case pipe." },
  ].map((v) => ({ ...v, url: yt(v.id), thumb: `/images/yt-${v.id}.webp` })),

  // Short excerpts from real Google reviews, reviewer first name only.
  reviews: [
    { name: "Roger", text: "I gave my seiko 5 automatic watch, for restoration, never in my wildest dreams did i expect my watch to come back in such pristine condition." },
    { name: "Sugnan", text: "My old watch restored here, and the workmanship was excellent. My old watch looks brand new again!" },
    { name: "Aviral", text: "He explains everything patiently and thoroughly, which really builds trust and understanding." },
    { name: "Subhan", text: "I have been a loyal customer of Jai Bhavani Watch Centre for over 5 years, and they have never once failed to impress." },
    { name: "Animesh", text: "Skills like restoring a watch are rare and unique. Highly recommend his service." },
  ],
};
