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
    description: "A minimalist ceramic mug with a deep matte obsidian finish.",
    image: "/mug.png",
    color: "from-zinc-900 to-zinc-800",
    materials: ["Ceramic", "Matte Obsidian Coating"],
    specs: [{ label: "Volume", value: "350ml" }, { label: "Origin", value: "Kyoto" }]
  },
  {
    id: "classic-cotton-tee",
    name: "Classic Cotton Tee",
    price: 45.00,
    category: "Apparel",
    description: "Premium heavy-weight cotton tee with a luxurious hand-feel.",
    image: "/tee.png",
    color: "from-blue-900 to-indigo-900",
    materials: ["100% Pima Cotton"],
    specs: [{ label: "Weight", value: "280 GSM" }, { label: "Fit", value: "Tailored" }]
  },
  {
    id: "minimalist-watch",
    name: "Minimalist Watch",
    price: 120.00,
    category: "Accessories",
    description: "Clean aesthetic meets precision engineering. A timeless piece.",
    image: "/watch.png",
    color: "from-purple-900 to-fuchsia-900",
    materials: ["316L Stainless Steel", "Sapphire Crystal"],
    specs: [{ label: "Movement", value: "Swiss Quartz" }, { label: "Diameter", value: "38mm" }]
  },
  {
    id: "artifact-hoodie",
    name: "Artifact Hoodie",
    price: 85.00,
    category: "Apparel",
    description: "Ultra-heavy architectural hoodie. A cocoon of luxury.",
    image: "/luxury_black_hoodie_mockup_1775394993918.png",
    color: "from-zinc-900 to-black",
    materials: ["450gsm Cotton Fleese"],
    specs: [{ label: "Weight", value: "450 GSM" }, { label: "Fit", value: "Oversized Elite" }]
  },
  {
    id: "heritage-ring",
    name: "Heritage Ring",
    price: 150.00,
    category: "Accessories",
    description: "Solid silver artifact engraved with the signature Porul pattern.",
    image: "/luxury_silver_ring_mockup_1775395022481.png",
    color: "from-slate-400 to-zinc-500",
    materials: ["925 Sterling Silver"],
    specs: [{ label: "Material", value: "Solid Silver" }, { label: "Engraving", value: "Manifest Pattern" }]
  },
  {
    id: "obsidian-candle",
    name: "Obsidian Candle",
    price: 42.00,
    category: "Signature Series",
    description: "A sensory anchor for your sanctuary. Cedar and digital leather.",
    image: "/luxury_scented_candle_mockup_1775395045889.png",
    color: "from-zinc-800 to-zinc-900",
    materials: ["Soy Wax", "Obsidian Glass"],
    specs: [{ label: "Burn Time", value: "60 Hours" }, { label: "Scent", value: "Dark Cedar" }]
  },
  {
    id: "premium-planner",
    name: "Premium Planner",
    price: 32.00,
    category: "Stationery",
    description: "Elegant architectural layout for the modern custodian.",
    image: "/luxury_leather_planner_mockup_1775395550734.png",
    color: "from-amber-900 to-orange-950",
    materials: ["Heritage Leather", "Acid-Free Paper"],
    specs: [{ label: "Pages", value: "240" }, { label: "Size", value: "A5 Heritage" }]
  }
];
