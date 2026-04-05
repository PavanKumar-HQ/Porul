"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/data/products";

import Footer from "@/components/layout/Footer";
import { Heart, ShoppingBag, ArrowLeft, ShieldCheck, Truck, RotateCcw, Star, ChevronRight, Plus, Minus, Check, Wand2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const product = products.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specifications");
  
  if (!product) return (
    <div className="min-h-screen flex items-center justify-center font-outfit">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-outfit text-black">Artifact Not Found</h1>
        <Link href="/shop" className="text-accent-violet hover:underline flex items-center gap-2 justify-center font-bold uppercase tracking-widest text-[10px]">
          <ArrowLeft size={16} /> Return to Shop
        </Link>
      </div>
    </div>
  );

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black transition-colors duration-700">
      <main className="flex-1 pt-48 pb-24 px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">
           <Link href="/" className="hover:text-black transition-colors">Port</Link>
           <ChevronRight size={10} />
           <Link href="/shop" className="hover:text-black transition-colors">Gallery</Link>
           <ChevronRight size={10} />
           <span className="text-black/60">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-[4/5] rounded-[64px] bg-white border border-black/5 relative overflow-hidden group shadow-sm">
               <img 
                 src={product.image} 
                 alt={product.name}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
               <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 blur-[100px] pointer-events-none`} />
               
               {/* Aesthetic BG Letter */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/5 font-outfit font-black text-9xl md:text-[240px] uppercase tracking-tighter select-none rotate-12">{product.name.charAt(0)}</span>
               </div>
               
               {/* Exclusive Badge */}
               <div className="absolute top-10 left-10 glass-lvl-3 px-6 py-2 rounded-full border-white/20 shadow-xl z-20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-violet flex items-center gap-2">
                    <Star size={12} className="fill-accent-violet" />
                    Signature Edition
                  </p>
               </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-3xl bg-white border border-black/5 hover:border-accent-violet/40 transition-all cursor-pointer overflow-hidden relative group p-1">
                   <div className="w-full h-full rounded-2xl overflow-hidden relative">
                      <img src={product.image} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                   </div>
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
            <div className="space-y-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <span className="px-3 py-1 bg-black text-white text-[8px] font-black uppercase tracking-[0.4em] rounded-md">New Object</span>
                     <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/20 font-inter">Serial #PRL-{product.id.slice(0,3).toUpperCase()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                     <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                     <span className="text-[9px] font-bold uppercase tracking-widest">In Stock // Ready to Ship</span>
                  </div>
               </div>
               <h1 className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter leading-none text-black">{product.name}</h1>
               <div className="flex items-center gap-6">
                  <p className="text-4xl font-bold font-outfit text-black/80">${product.price.toFixed(2)}</p>
                  <div className="h-4 w-px bg-black/10" />
                  <div className="flex items-center gap-1">
                     <Star size={14} className="fill-accent-gold text-accent-gold" />
                     <span className="text-sm font-bold font-outfit">4.9</span>
                     <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest ml-2">(124 Artifact Review)</span>
                  </div>
               </div>
            </div>

            <p className="text-xl font-light text-black/60 leading-relaxed max-w-xl font-inter">
               {product.description}
            </p>

            {/* Quantity Selector Professional */}
            <div className="flex items-center gap-8">
               <div className="flex items-center h-16 rounded-2xl glass-lvl-1 border border-black/5 px-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-black/40 hover:text-black hover:bg-black/5 transition-all"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold font-outfit text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-black/40 hover:text-black hover:bg-black/5 transition-all"
                  >
                    <Plus size={16} />
                  </button>
               </div>
               <p className="text-[10px] font-bold text-black/20 uppercase tracking-widest leading-tight">Identity Quantity<br/>Protocol Required</p>
            </div>

            {/* Professional Actions */}
            <div className="space-y-8 pt-4">
               <div className="flex gap-4">
                  <button 
                    onClick={() => addToCart(product, "", "Inter", "#000000")}
                    className="flex-1 h-20 rounded-[32px] bg-black text-white font-bold text-lg font-outfit flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center gap-4">
                       Acquire Signature Object
                       <ShoppingBag size={22} className="group-hover:-rotate-12 transition-transform" />
                    </span>
                  </button>
                  <button 
                    onClick={toggleWishlist}
                    className={`w-20 h-20 rounded-[32px] glass-lvl-1 border border-black/5 flex items-center justify-center transition-all ${isInWishlist(product.id) ? 'text-red-500 bg-white shadow-xl' : 'text-black/40 hover:text-red-500 hover:glass-lvl-3'}`}
                  >
                    <Heart size={24} fill={isInWishlist(product.id) ? "currentColor" : "none"} strokeWidth={2.5} />
                  </button>
               </div>

               <Link href="/customize" className="flex items-center justify-between p-8 rounded-[40px] glass-lvl-1 border border-black/5 hover:glass-lvl-3 transition-all group shadow-sm hover:shadow-xl hover:border-accent-violet/20">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 rounded-2xl bg-accent-violet flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform">
                        <Wand2 size={24} />
                     </div>
                     <div className="text-left">
                        <p className="text-xl font-bold font-outfit tracking-tight text-black">Enter Digital Store</p>
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em]">Signature Manifest Protocol</p>
                     </div>
                  </div>
                  <ChevronRight size={24} className="text-black/20 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>

            {/* Tabbed Info Professional */}
            <div className="pt-12 space-y-8">
               <div className="flex gap-10 border-b border-black/5">
                  {["specifications", "shipping", "returns"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div layoutId="product-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                      )}
                    </button>
                  ))}
               </div>
               
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="min-h-[140px]"
                  >
                     {activeTab === "specifications" && (
                        <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                           {product.specs?.map((spec) => (
                             <div key={spec.label} className="flex flex-col gap-1">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-black/20">{spec.label}</span>
                                <span className="text-base font-bold font-outfit text-black">{spec.value}</span>
                             </div>
                           ))}
                        </div>
                     )}
                     {activeTab === "shipping" && (
                        <div className="space-y-4">
                           <p className="text-sm font-light text-black/60 leading-relaxed font-inter">Global tracked delivery with our Signature White-Glove protocol. Insured door-to-door transit for all Product artifacts.</p>
                           <div className="flex items-center gap-4 text-accent-blue">
                              <Truck size={18} />
                              <span className="text-[10px] font-bold uppercase tracking-widest">3-5 Business Days Delivery</span>
                           </div>
                        </div>
                     )}
                     {activeTab === "returns" && (
                        <div className="space-y-4">
                           <p className="text-sm font-light text-black/60 leading-relaxed font-inter">All Signature artifacts are eligible for our 30-day Heritage Return policy. Product must be in original condition with all digital tags intact.</p>
                           <div className="flex items-center gap-4 text-accent-gold">
                              <RotateCcw size={18} />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Complimentary Return Shield</span>
                           </div>
                        </div>
                     )}
                  </motion.div>
               </AnimatePresence>
            </div>

            {/* Social Proof Badges */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-black/5">
                {[
                  { icon: ShieldCheck, label: "SECURE PAYMENT", color: "text-green-600" },
                  { icon: Check, label: "AUTHENTIC", color: "text-blue-600" },
                  { icon: Star, label: "5-STAR RATED", color: "text-accent-gold" }
                ].map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-3 text-center">
                    <badge.icon size={18} className={`${badge.color} opacity-60`} />
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/30 font-inter">{badge.label}</span>
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
