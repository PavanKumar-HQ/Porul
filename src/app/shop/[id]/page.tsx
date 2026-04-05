"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, ShoppingBag, ArrowLeft, ShieldCheck, Truck, RotateCcw, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === params.id);
  const [selectedTexture, setSelectedTexture] = useState(product?.availableTextures?.[0]?.id || "default");
  
  if (!product) return (
    <div className="min-h-screen flex items-center justify-center font-outfit">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Artifact Not Found</h1>
        <Link href="/shop" className="text-accent-violet hover:underline flex items-center gap-2 justify-center">
          <ArrowLeft size={16} /> Return to Shop
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black transition-colors duration-700">
      <Navbar />
      
      <main className="flex-1 pt-40 pb-24 px-8 max-w-7xl mx-auto w-full">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-black/40 hover:text-black mb-12 group transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to Gallery</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-[4/5] rounded-[64px] glass-lvl-1 border-black/5 relative overflow-hidden group">
               <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 blur-[100px]`} />
               <div className="absolute inset-0 flex items-center justify-center p-20">
                  <div className="w-full h-full glass-lvl-2 rounded-[48px] border-white/20 shadow-2xl flex items-center justify-center text-black/5 font-outfit font-black text-9xl uppercase tracking-tighter select-none rotate-12">
                    {product.name.charAt(0)}
                  </div>
               </div>
               
               {/* Floating Tag */}
               <div className="absolute top-10 left-10 glass-lvl-3 px-6 py-2 rounded-full border-white/20 shadow-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-violet flex items-center gap-2">
                    <Star size={12} className="fill-accent-violet" />
                    Signature Edition
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-3xl glass-lvl-1 border-black/5 hover:glass-lvl-3 transition-all cursor-pointer overflow-hidden border-2 border-transparent hover:border-accent-violet/20">
                   <div className="w-full h-full bg-black/[0.02]" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full glass-lvl-1 border-black/5 text-[9px] font-bold uppercase tracking-[0.3em] text-black/40">Artifact</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent-gold">Serial #PRL-97X</span>
               </div>
               <h1 className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter leading-none">{product.name}</h1>
               <p className="text-4xl font-bold font-outfit text-black/20">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-xl font-light text-black/60 leading-relaxed max-w-xl">
               {product.description}
            </p>

            <div className="h-px bg-black/5" />

            {/* Customization Preview Teaser */}
            <div className="space-y-6">
               <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Artisan Metadata</h3>
               <div className="grid grid-cols-2 gap-8">
                  {product.specs?.map((spec) => (
                    <div key={spec.label} className="space-y-1">
                       <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">{spec.label}</p>
                       <p className="text-lg font-bold font-outfit">{spec.value}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-8 pt-8">
               <div className="flex gap-4">
                  <button 
                    onClick={() => addToCart(product, "", "Inter", "#000000")}
                    className="flex-1 py-6 rounded-[32px] bg-black text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl group"
                  >
                    Initiate Acquisition
                    <ShoppingBag size={22} className="group-hover:translate-y-[-2px] transition-transform" />
                  </button>
                  <button className="w-20 rounded-[32px] glass-lvl-1 border-black/5 flex items-center justify-center text-black/40 hover:text-red-500 hover:glass-lvl-3 transition-all">
                    <Heart size={24} />
                  </button>
               </div>

               <Link href="/customize" className="flex items-center justify-between p-8 rounded-[40px] glass-lvl-1 border-black/5 hover:glass-lvl-3 transition-all group">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 rounded-2xl bg-accent-violet flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform">
                        <Star size={24} />
                     </div>
                     <div className="text-left">
                        <p className="text-xl font-bold font-outfit tracking-tight">Enter Digital Atelier</p>
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em]">Signature Protocol Required</p>
                     </div>
                  </div>
                  <ChevronRight size={24} className="text-black/20 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-black/5">
                {[
                  { icon: ShieldCheck, label: "LIFETIME" },
                  { icon: Truck, label: "GLOBAL" },
                  { icon: RotateCcw, label: "REFUND" }
                ].map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-3 text-center">
                    <badge.icon size={18} className="text-accent-blue" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">{badge.label}</span>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
