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
  },
  {
    id: "atelier-glass-vessel",
    name: "Atelier Glass Vessel",
    price: 85.00,
    category: "Special Artifact",
    description: "A hand-blown glass sculpture designed for the modern sanctuary. Features a unique refractive signature that evolves with sunlight.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800",
    color: "from-cyan-100 to-blue-200",
    materials: ["Borosilicate Glass", "Refractive Particles"],
    specs: [
        { label: "Height", value: "300mm" },
        { label: "Refraction", value: "Elite Grade" },
        { label: "Origin", value: "Venice, IT" }
    ]
  },
  {
    id: "heritage-leather-portfolio",
    name: "Leather Portfolio",
    price: 180.00,
    category: "Signature Series",
    description: "Full-grain vegetable-tanned leather portfolio meant to age with your career. A physical repository for your intellectual heirs.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-900 to-amber-950",
    materials: ["Vachetta Leather", "Brass Fixtures"],
    specs: [
        { label: "Weight", value: "1.2kg" },
        { label: "Tanning", value: "Artisan Wood-Bark" },
        { label: "Warranty", value: "Lifetime Tenure" }
    ]
  },
  {
    id: "manifest-tech-sleeve",
    name: "Elite Tech Sleeve",
    price: 65.00,
    category: "Artifacts",
    description: "Protective technical envelope with magnetic closure systems. Minimalist protection for your primary digital manifest.",
    image: "https://images.unsplash.com/photo-1611186871348-b1aa696e5239?auto=format&fit=crop&q=80&w=800",
    color: "from-zinc-100 to-zinc-400",
    materials: ["Technical Felt", "Rare Earth Magnets"],
    specs: [
        { label: "Closure", value: "Solenoid Feedback" },
        { label: "Padding", value: "EVA High-Density" },
        { label: "Size", value: "14\"/16\" Universal" }
    ]
  },
  {
    id: "heritage-ink-pen",
    name: "Identity Ink Pen",
    price: 150.00,
    category: "Special Artifact",
    description: "Precision-balanced fountain pen with a titanium nib. Designed to manifest your handwriting into a permanent digital-standard ink signature.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800",
    color: "from-zinc-800 to-black",
    materials: ["Titanium Nib", "Carbon Fiber Body"],
    specs: [
        { label: "Balance", value: "Perfect Center" },
        { label: "Nib", value: "F-Fine Precision" },
        { label: "Filling", value: "Vacuum Piston" }
    ]
  }
];
