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
  // APPAREL SECTION
  {
    id: "classic-cotton-tee",
    name: "Classic Cotton Tee",
    price: 45.00,
    category: "Signature Apparel",
    description: "Premium heavy-weight cotton tee with a luxurious hand-feel. Architecturally cut for the modern curator.",
    image: "/media__1775390170580.png",
    color: "from-blue-900 to-indigo-950",
    materials: ["100% Pima Cotton"],
    specs: [{ label: "Weight", value: "280 GSM" }, { label: "Fit", value: "Tailored Protocol" }]
  },
  {
    id: "artifact-hoodie",
    name: "Artifact Hoodie",
    price: 85.00,
    category: "Signature Apparel",
    description: "Ultra-heavy architectural hoodie. A cocoon of luxury for digital explorers.",
    image: "/luxury_black_hoodie_mockup_1775394993918.png",
    color: "from-zinc-900 to-black",
    materials: ["450gsm Cotton Fleese"],
    specs: [{ label: "Weight", value: "450 GSM" }, { label: "Fit", value: "Oversized Elite" }]
  },
  {
    id: "tech-cap",
    name: "Protocol Cap",
    price: 38.00,
    category: "Signature Apparel",
    description: "Water-resistant tech-twill with a low-profile silhouette and hidden pocket.",
    image: "/media__1775390448821.png",
    color: "from-zinc-700 to-zinc-900",
    materials: ["Performance Twill", "Velcro Adjuster"],
    specs: [{ label: "Structure", value: "6 Panel" }, { label: "Size", value: "Universal" }]
  },

  // ACCESSORIES SECTION
  {
    id: "minimalist-watch",
    name: "Architect Watch",
    price: 120.00,
    category: "Artifact Accessories",
    description: "Clean aesthetic meets precision engineering. A timeless piece of horological craftsmanship.",
    image: "/minimalist_watch_mockup_1775390243781.png",
    color: "from-purple-900 to-fuchsia-950",
    materials: ["316L Stainless Steel", "Sapphire Crystal"],
    specs: [{ label: "Movement", value: "Swiss Quartz" }, { label: "Diameter", value: "38mm" }]
  },
  {
    id: "heritage-ring",
    name: "Heritage Ring",
    price: 150.00,
    category: "Artifact Accessories",
    description: "Solid silver artifact engraved with the signature Porul pattern for identity preservation.",
    image: "/luxury_silver_ring_mockup_1775395022481.png",
    color: "from-slate-400 to-zinc-600",
    materials: ["925 Sterling Silver"],
    specs: [{ label: "Material", value: "Solid Silver" }, { label: "Engraving", value: "Manifest Pattern" }]
  },
  {
    id: "digital-wallet",
    name: "Cold Storage Wallet",
    price: 95.00,
    category: "Artifact Accessories",
    description: "Aerospace-grade aluminum case with a high-friction grip for secure artifact preservation.",
    image: "/media__1775390551505.png",
    color: "from-zinc-400 to-slate-500",
    materials: ["Anodized Aluminum", "Nidec Magnets"],
    specs: [{ label: "Storage", value: "12 Cards" }, { label: "Shield", value: "RFID Archive" }]
  },

  // ESSENTIALS SECTION
  {
    id: "premium-planner",
    name: "Heritage Planner",
    price: 32.00,
    category: "Studio Essentials",
    description: "Elegant architectural layout for the modern custodian's linear and non-linear planning.",
    image: "/luxury_leather_planner_mockup_1775395550734.png",
    color: "from-amber-950 to-orange-950",
    materials: ["Heritage Leather", "Acid-Free Paper"],
    specs: [{ label: "Pages", value: "240" }, { label: "Size", value: "A5 Heritage" }]
  },
  {
    id: "obsidian-mug",
    name: "The Obsidian Mug",
    price: 34.00,
    category: "Studio Essentials",
    description: "A minimalist ceramic mug with a deep matte obsidian finish, designed for deep focus sessions.",
    image: "/obsidian_mug_mockup_1775390207355.png",
    color: "from-zinc-950 to-zinc-800",
    materials: ["Ceramic", "Matte Obsidian Coating"],
    specs: [{ label: "Volume", value: "350ml" }, { label: "Origin", value: "Kyoto" }]
  },
  {
    id: "desk-mat",
    name: "Store Desk Mat",
    price: 55.00,
    category: "Studio Essentials",
    description: "Double-layered wool felt surface for precise pointer control and acoustic insulation.",
    image: "/media__1775391604920.png",
    color: "from-zinc-600 to-zinc-800",
    materials: ["Merino Wool Filt", "Natural Cork"],
    specs: [{ label: "Size", value: "900x400mm" }, { label: "Base", value: "Anti-Slip" }]
  },

  // GIFTS SECTION
  {
    id: "obsidian-candle",
    name: "Obsidian Candle",
    price: 42.00,
    category: "Memory Objects",
    description: "A sensory anchor for your sanctuary. Cedar, digital leather, and smoked amber.",
    image: "/luxury_scented_candle_mockup_1775395045889.png",
    color: "from-zinc-900 to-black",
    materials: ["Soy Wax", "Obsidian Glass"],
    specs: [{ label: "Burn Time", value: "60 Hours" }, { label: "Scent", value: "Dark Cedar" }]
  },
  {
    id: "perfume-artifact",
    name: "Scent-ID 01",
    price: 110.00,
    category: "Memory Objects",
    description: "Olfactory portrait of an ancient library translated for the digital age.",
    image: "/media__1775394474571.png",
    color: "from-amber-800 to-yellow-950",
    materials: ["Oil Extraction", "Treated Glass"],
    specs: [{ label: "Volume", value: "50ml" }, { label: "Notes", value: "Paper, Ink, Wood" }]
  },
  {
    id: "crystal-obelisk",
    name: "Focus Obelisk",
    price: 240.00,
    category: "Memory Objects",
    description: "Solid quartz prism that refracts light into focused spectral patterns.",
    image: "/media__1775395506554.png",
    color: "from-cyan-100 to-blue-200",
    materials: ["Leaded Crystal", "Black Marble Base"],
    specs: [{ label: "Refraction", value: "High Spectrum" }, { label: "Hand-Cut", value: "Yes" }]
  }
];
