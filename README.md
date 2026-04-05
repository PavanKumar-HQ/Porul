# Porul — Modern E-Commerce Platform

### Premium Print-on-Demand Experience.
Porul is a high-fidelity, mobile-first e-commerce platform optimized for custom print-on-demand products. It features a stunning modern design with vibrant aesthetics, smooth animations, and a seamless user flow.

---

## ✨ Key Features

### 1. Product Customization (`/customize`)
An interactive design studio where customers can customize their favorite products in real-time.
- **Live Preview**: Real-time typography and color simulation on product mockups.
- **Simple UI**: Intuitive steps to choose products, add text, and review designs.

### 2. Premium Aesthetics
A bespoke visual language utilizing advanced glassmorphism, smooth gradients, and cinematic interactions.
- **Mobile-First Design**: Optimized for a flawless experience across all devices.
- **Dynamic Interactions**: Powered by **Framer Motion** for a "living" interface.

### 3. Comprehensive E-Commerce Flow
- **Rupee (₹) Integration**: Fully localized for the Indian market.
- **Auth0 Authentication**: Secure login and signup integrated into the checkout flow.
- **Admin Dashboard**: Specialized panel for managing Orders, Products, and Discounts.
- **Coupon System**: Dynamic discount application in the checkout summary.

---

## 🛠️ Technical Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) & [Tailwind CSS](https://tailwindcss.com)
- **Database**: [Supabase](https://supabase.com) (SQL Schema included)
- **Auth**: [Auth0](https://auth0.com)
- **Media**: [Cloudinary](https://cloudinary.com) (Storage for product images)
- **Animation**: [Framer Motion](https://framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm/yarn/pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/pavankumarofficial1231/Porul.git
   cd Porul
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup Environment Variables:
   Create a `.env` file based on `.env.example` with your credentials for Supabase, Auth0, and Cloudinary.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. View the App:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Architecture Overview

```bash
src/
├── app/             # Next.js Routes (Shop, Customize, Admin, Checkout, etc.)
├── components/      
│   ├── layout/      # Global components (Navbar, Footer)
│   ├── sections/    # Modular UI sections (Hero, Customer Reviews)
│   └── ui/          # Atomic components (ThemeToggle, Marquee)
├── context/         # Global State (Cart, Theme)
├── data/            # Static Product Metadata
└── provider/        # Framer Motion & Layout Providers
```

---

## 📜 Database Setup
The repository includes a `supabase_schema.sql` file in the root. Run this in your Supabase SQL Editor to initialize the necessary tables for products, orders, and discounts.

---

## 🏛️ License
Developed by the Porul Team. All rights reserved.

---
> [!TIP]
> Use the **Heritage20** coupon code in checkout to test the discount logic!
