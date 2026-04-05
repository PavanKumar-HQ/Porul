# Porul — The Digital Heritage Atelier


### Manifesting Physical Signature into Digital Reality.
Porul is a high-fidelity, agency-grade e-commerce platform designed to showcase and customize "digital heirlooms." Built with the **Alabaster V2** design system, it emphasizes purity, texture, and cinematic interaction.

---

## ✨ Key Experience Pillars

### 1. The Digital Atelier (`/customize`)
A high-end interaction space where users can select base vessels, apply artisanal textures, and preview their unique "signature" sigil in real-time. 
- **Signature Protocol**: Real-time typography and pigment simulation.
- **Vessel Selection**: Curated base artifacts from the Signature Series.

### 2. Alabaster Aesthetics
A bespoke visual language utilizing advanced glassmorphism and subtle sunlight tints.
- **Glass-Lvl Architecture**: Three tiers of translucency based on interaction depth.
- **Nocturnal Support**: Seamless transition to "Nocturnal Mode" via the global theme toggle.

### 3. Kinetic Interaction Physics
Powered by **Framer Motion**, the entire platform feels alive and responsive.
- **Magnetic Cursors**: Contextual attraction to key CTA elements.
- **Cinematic Overlays**: Full-screen glassmorphic search and cart navigation.
- **Fluid Transitions**: Smooth, non-linear page fades and focal blurs.

---

## 🛠️ Technical Stack

- **Core**: [Next.js 16 (App Router)](https://nextjs.org) - Optimized performance and SEO.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Modern utility-first CSS with `@theme` support.
- **Animation**: [Framer Motion](https://framer.com/motion) - High-fidelity interaction physics.
- **Icons**: [Lucide React](https://lucide.dev) - Minimalist, consistent iconography.
- **State**: Context API with LocalStorage persistence for Cart and Wishlist.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/porul-project.git
   cd porul-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize development environment:
   ```bash
   npm run dev
   ```

4. Access the Atelier:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Architecture Overview

```bash
src/
├── app/             # Next.js App Router (Routes: Shop, Customize, Dashboard, etc.)
├── components/      
│   ├── layout/      # Global components (Navbar, Footer, SearchOverlay)
│   ├── sections/    # Modular section components (Hero, WhyPorul, Categories)
│   └── ui/          # Atomic components (ThemeToggle, Marquee, NavDropdown)
├── context/         # Global State management (Cart, Wishlist, Theme)
├── data/            # Static metadata (Artifact Registry, Product Specs)
└── provider/        # Framer Motion & Layout Providers
```

---

## 📜 Customization Protocol
The project utilizes a custom metadata system defined in `src/data/products.ts`. You can expand the artifact library by adding new records following the `Product` interface:

```typescript
{
  id: "artifact-id",
  name: "Artifact Name",
  price: 0.00,
  category: "Collection Name",
  description: "Artisanal backstory...",
  specs: [{ label: "Spec", value: "Value" }]
}
```

---

## 🏛️ License
Crafted with passion by the Porul Design Team. Internal use only.

---
> [!IMPORTANT]
> **Performance Note**: The platform uses high-fidelity blurs and animations. For the best experience, view on high-density displays (Retina/4K).
