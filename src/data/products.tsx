// data/products.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Black&White",
    description: "Elegant black-and-white Scotch plaid women's handbag: premium wool-blend, leather trim, gold hardware, dual handles, detachable strap, spacious interior. Timeless style.",
    category: "bags",
    price: 45,
    image: "/images/products/black-white.jpg"
  },
  {
    id: 2,
    name: "Green premium",
    description: "Elegant emerald green women's handbag: premium leather, gold hardware, dual handles, detachable strap, spacious lined interior. Timeless sophistication. ",
    category: "bags",
    price: 25,
    image: "/images/products/green.jpg"
  },
  {
    id: 3,
    name: "Valentine Gift",
    description: "Timeless Valentine’s gift: thoughtful, romantic, and personal—crafted to make her heart skip a beat forever.",
    category: "Seasonal gift",
    price: 35,
    image: "/images/products/valentine.jpg"
  },
  {
    id: 4,
    name: "Birthday Gift",
    description: "Elegant birthday gift: luxurious, thoughtful, and unique—perfect for making their special day unforgettable.",
    category: "Seasonal gift",
    price: 75,
    image: "/images/products/birthday.jpg"
  },
  {
    id: 5,
    name: "Appreciation Gift",
    description: "Heartfelt appreciation gift: elegant, thoughtful, and timeless—perfect for saying 'thank you' in the most meaningful way.",
    category: "Seasonal gift",
    price: 20,
    image: "/images/products/appreciation-gift.jpg"
  }
];

export default products;