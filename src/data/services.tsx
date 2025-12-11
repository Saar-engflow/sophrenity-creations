// data/services.ts

export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Birthday Decor",
    description:"Make their birthday unforgettable with custom-themed decor. Includes complete styling, balloons, backdrops, table setups, installation, and takedown — tailored perfectly to your vision and venue.",
    category: "Event Decor",
    price: 150,
    image: "/images/services/birthday.jpg"
  },
  {
    id: 2,
    name: "Proporsal Decor",
    description: "Magical marriage proposal decoration: stunning florals, fairy lights, custom marquee letters, rose petals, private setup, and full cleanup — turning your moment into pure romance.",
    category: "Event Decor",
    price: 300,
    image: "/images/services/proporsal.jpg"
  },
  {
    id: 3,
    name: "Anniversary Dinner Decor",
    description: "Romantic anniversary dinner styling: fresh flowers, glowing candles, custom place settings, soft lighting, full installation, and cleanup, creating the perfect evening to say 'I still do'.",
    category: "Event Decor",
    price: 600,
    image: "/images/services/anniversary.jpg"
  },
  {
    id: 4,
    name: "Baby Shower Decor",
    description:"Magical baby shower styling: pastel balloons, fresh flowers, personalized backdrops, dessert tables, gender-reveal touches, complete installation, and cleanup to celebrate the little one.",
    category: "Event Decor",
    price: 200,
    image: "/images/services/baby-shower.jpg"
  },
  {
    id: 5,
    name: "Wedding Decor",
    description:"Timeless wedding styling: premium flowers, romantic lighting, bespoke arches, chic tablescapes, personalized details, professional setup, and post-event cleanup for an unforgettable celebration.",
    category: "Event Decor",
    price: 250,
    image: "/images/services/wedding.jpg"
  }
];

export default services;