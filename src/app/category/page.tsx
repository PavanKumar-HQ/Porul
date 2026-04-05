"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, ShoppingBag, Wand2, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const categoryCards = [
  { 
    name: "Custom Gifts", 
    href: "/category/gifts", 
    description: "Personalized artifacts for meaningful connection.",
    icon: Star,
    bg: "bg-accent-violet/5"
  },
  { 
    name: "Apparel", 
    href: "/category/apparel", 
    description: "Premium textiles engineered for your signature.",
    icon: ShoppingBag,
    bg: "bg-accent-blue/5"
  },
  { 
    name: "Accessories", 
    href: "/category/accessories", 
    description: "Essential digital and physical accompaniments.",
    icon: Box,
    bg: "bg-accent-gold/5"
  },
  { 
    name: "Corporate Kits", 
    href: "/category/corporate", 
    description: "Heritage-grade identities for the modern team.",
    icon: Wand2,
    bg: "bg-black/5"
  }
];

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-12">
            <h1 className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter text-black">
              Discovery <span className="text-black/20 italic">Protocols</span>
            </h1>
            <p className="text-2xl font-light text-black/40 max-w-2xl mx-auto leading-relaxed">
              Browse our curated collection paths. Every category is a gateway to high-fidelity customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categoryCards.map((category, i) => (
              <Link key={category.name} href={category.href}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative glass-lvl-2 p-12 rounded-[64px] border border-black/5 overflow-hidden transition-all duration-700 hover:glass-lvl-3 hover:shadow-2xl ${category.bg}`}
                >
                   <div className="relative z-10 flex flex-col items-start space-y-8">
                      <div className="w-16 h-16 rounded-3xl glass-lvl-1 flex items-center justify-center text-black group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                         <category.icon size={32} strokeWidth={1} />
                      </div>
                      <div className="space-y-4">
                         <h2 className="text-4xl font-bold font-outfit tracking-tight text-gradient">{category.name}</h2>
                         <p className="text-xl font-light text-black/40 max-w-sm">{category.description}</p>
                      </div>
                      <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 group-hover:text-black transition-colors pt-4">
                         Initialize Discovery
                         <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                   </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
