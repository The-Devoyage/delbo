export interface Product {
  id: number;
  title: string;
  description: string;
  src: string;
  price: string;
}

export const eggProducts: Product[] = [
  {
    id: 1,
    title: "2-4 Dozen",
    description: "Seasonal, from June through October.",
    src: "/EggCarton.jpg",
    price: "$6.00/Doz.",
  },
  {
    id: 2,
    title: "6-10 Dozen",
    description: "Seasonal, from June through October.",
    src: "/EggCarton.jpg",
    price: "$5.50/Doz.",
  },
  {
    id: 3,
    title: "12-20 Dozen*",
    description: "Seasonal, from June through October.",
    src: "/EggCarton.jpg",
    price: "$5.00/Doz.",
  },
  {
    id: 4,
    title: "22 Doz or More*",
    description: "Seasonal, from June through October.",
    src: "/EggCarton.jpg",
    price: "$6.00/Doz.",
  },
];

export const pickeledEggs: Product[] = [
  {
    id: 5,
    title: "1-4 Jars",
    description: "25 Eggs/Jar - Spiced Beet, Red Wine Beet, or Blended Mustard",
    src: "/SpicedBeetEggs.jpg",
    price: "$25/Jar, 5+ Jars for $24/Jar",
  },
  {
    id: 8,
    title: "24 Eggs Platter",
    description: "DESCCRIPTION NEEDED",
    src: "/BlendedMustardEggs.jpg",
    price: "$35.00",
  },
  {
    id: 9,
    title: "48 Eggs Platter",
    description: "DESCCRIPTION NEEDED",
    src: "/BlendedMustardEggs.jpg",
    price: "$70.00",
  },
];

export const quailProducts: Product[] = [
  {
    id: 1,
    title: "1-9 Pounds",
    description: "1-9 Pounds",
    src: "/RawQuail2.jpg",
    price: "$16.00/lb",
  },
  {
    id: 2,
    title: "10-19 Pounds",
    description: "10-19 Pounds",
    src: "/RawQuail2.jpg",
    price: "$15.50/lb",
  },
  {
    id: 3,
    title: "20-49 Pounds",
    description: "20-49 Pounds",
    src: "/RawQuail2.jpg",
    price: "$15.00/lb",
  },
  {
    id: 4,
    title: "50+ Pounds",
    description: "50+ Pounds",
    src: "/RawQuail2.jpg",
    price: "$14.50/lb",
  },
];
