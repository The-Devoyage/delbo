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
    price: "$5.00/Doz.",
  },
  {
    id: 3,
    title: "12-20 Dozen*",
    description: "Seasonal, from June through October.",
    src: "/EggCarton.jpg",
    price: "$4.00/Doz.",
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
    description:
      "24 pickled eggs, sliced in half, presented on a tray, decorated with greens and condiments, upscale presentation.",
    src: "/BlendedMustardEggs.jpg",
    price: "$35.00",
  },
  {
    id: 9,
    title: "48 Eggs Platter",
    description:
      "48 pickled eggs, sliced in half, presented on a tray, decorated with greens and condiments, upscale presentation.",
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
    price: "$15.00/lb",
  },
  {
    id: 3,
    title: "20+ Pounds",
    description: "20-49 Pounds",
    src: "/RawQuail2.jpg",
    price: "$14.00/lb",
  },
];
