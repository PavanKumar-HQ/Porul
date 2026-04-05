export interface ProductVariant {
  name: string;
  priceModifier: number;
}

export interface Texture {
  id: string;
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  color: string;
  materials: string[];
  specs: { label: string; value: string }[];
  variants?: ProductVariant[];
  availableTextures?: Texture[];
}

export const products: Product[] = [
  {
    id: "obsidian-mug",
    name: "The Obsidian Mug",
    price: 34.00,
    category: "Signature Series",
    description: "A minimalist ceramic mug with a deep matte obsidian finish. Perfect for your daily rituals and crafted to maintain precise thermal energy.",
    image: "/mug.png",
    color: "from-zinc-900 to-zinc-800",
    materials: ["Ceramic", "Matte Obsidian Coating", "Heat-Resistant Glass"],
    specs: [
      { label: "Volume", value: "350ml" },
      { label: "Weight", value: "420g" },
      { label: "Origin", value: "Artisanal Forge, Kyoto" }
    ],
    availableTextures: [
      { id: "matte", name: "Matte Obsidian", image: "" },
      { id: "brushed", name: "Brushed Metal", image: "" },
      { id: "sand", name: "Sandblast", image: "" }
    ]
  },
  {
    id: "classic-cotton-tee",
    name: "Classic Cotton Tee",
    price: 45.00,
    category: "Apparel",
    description: "Premium heavy-weight cotton tee with a luxurious hand-feel. Engineered for a tailored fit that evolves with your signature style.",
    image: "/tee.png",
    color: "from-blue-900 to-indigo-900",
    materials: ["100% Pima Cotton", "Double-Stitched Seams"],
    specs: [
      { label: "Weight", value: "280 GSM" },
      { label: "Fit", value: "Signature Tailored" },
      { label: "Wash", value: "Cold Protocol Only" }
    ]
  },
  {
    id: "minimalist-watch",
    name: "Minimalist Watch",
    price: 120.00,
    category: "Accessories",
    description: "Clean aesthetic meets precision engineering. A timeless piece that bridges the gap between digital and physical elegance.",
    image: "/watch.png",
    color: "from-purple-900 to-fuchsia-900",
    materials: ["316L Stainless Steel", "Sapphire Crystal", "Italian Vachetta Leather"],
    specs: [
      { label: "Movement", value: "Swiss Quartz" },
      { label: "Diameter", value: "38mm" },
      { label: "Water", value: "5 ATM" }
    ]
  },
  {
    id: "premium-planner",
    name: "Premium Planner",
    price: 28.00,
    category: "Stationery",
    description: "Elegant layout for your complex day. Crafted with fountain-pen friendly paper and a soft-touch architectural cover.",
    image: "/planner.png",
    color: "from-emerald-900 to-teal-900",
    materials: ["120gsm Acid-Free Paper", "Soft-Touch Polyurethane"],
    specs: [
      { label: "Pages", value: "240 Pages" },
      { label: "Size", value: "A5 Heritage" },
      { label: "Binding", value: "Smyth Sewn" }
    ]
  }
];
