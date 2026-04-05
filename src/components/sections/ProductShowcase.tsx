"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles, Wand2, ShoppingBag, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 overflow-hidden bg-[#FDFDFD] text-black">
      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-8 mb-32">
        <div className="w-full h-px bg-black/[0.03]" />
      </div>

      <div className="px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border-black/5 text-[10px] font-bold uppercase tracking-[0.4em] text-accent-violet mb-8 font-inter"
          >
             <Sparkles size={14} className="animate-pulse" />
             The Curated Atelier
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter"
          >
            Signature Creations
          </motion.h2>
        </div>
        <div className="flex gap-6">
           <button 
             onClick={scrollLeft}
             className="w-16 h-16 rounded-full glass-lvl-1 border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group"
           >
              <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-16 h-16 rounded-full glass-lvl-1 border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group"
           >
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto px-8 scrollbar-hide pb-20 snap-x snap-mandatory"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-84 md:w-[480px] snap-start group"
          >
              <div className="relative aspect-[4/5.2] bg-white rounded-[72px] overflow-hidden border border-black/5 group-hover:border-accent-violet/20 transition-all duration-1000 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]">
                {/* Product Section Differentiation: Elite Glass */}
                <div className="absolute inset-0 glass-lvl-1 opacity-50 pointer-events-none" />
                {/* Background Glow (Pearlescent) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[80px] -z-10`} />
                
                {/* Image Stage */}
                <div className="absolute inset-x-10 top-10 bottom-44 bg-white border border-black/5 rounded-[40px] flex items-center justify-center group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-1000 backdrop-blur-3xl group-hover:shadow-black/5 overflow-hidden group/stage">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`} />
                    
                    {/* Floating BG Letter */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-white/10 font-black text-[180px] uppercase tracking-tighter select-none rotate-12">{product.name.charAt(0)}</span>
                    </div>

                    {/* Actions Overlay */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-12 h-12 rounded-full glass-lvl-3 flex items-center justify-center transition-all shadow-xl hover:scale-110 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black/40 hover:text-red-500 bg-white/40'}`}
                       >
                          <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} strokeWidth={2} />
                       </button>
                    </div>

                    {/* Quick Add Professional Button */}
                    <div className="absolute inset-x-6 bottom-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-30">
                       <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="w-full py-4 rounded-2xl bg-black text-white font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
                       >
                          <ShoppingBag size={14} />
                          Quick Acquisition
                       </button>
                    </div>
                </div>

                {/* Product Info (Onyx) */}
                <div className="absolute inset-x-0 bottom-0 p-12 pt-0 flex justify-between items-end">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] font-inter">{product.category}</span>
                      <h3 className="text-3xl font-bold font-outfit tracking-tighter group-hover:text-accent-violet transition-colors text-black">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold font-outfit text-black/80 tracking-tight">${product.price.toFixed(0)}</p>
                      <Link 
                        href={`/shop/${product.id}`}
                        className="text-[10px] font-bold text-black/40 hover:text-accent-blue uppercase tracking-[0.2em] flex items-center gap-2 mt-4 group/link transition-colors"
                      >
                        Enter Studio <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                </div>
              </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
