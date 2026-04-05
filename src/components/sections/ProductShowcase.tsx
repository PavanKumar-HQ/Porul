"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Wand2, ShoppingBag, Eye, Heart, Star, ShieldCheck, Crown } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useRef } from "react";

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLabel = useTransform(scrollYProgress, [0, 1], [-100, 100]);

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
    <section ref={containerRef} className="py-24 overflow-hidden bg-[#F0F7FF]/50 text-black relative group/showcase-section border-t border-black/[0.08]">
      {/* Structural Differentiation: Section Identity Badge */}
      <div className="absolute top-0 right-[15%] py-2.5 px-8 rounded-b-[24px] bg-black text-white text-[9px] font-black uppercase tracking-[0.6em] z-20 shadow-2xl">
         Sector 02: Exhibition Hall
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0070f308_1px,transparent_1px),linear-gradient(to_bottom,#0070f308_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Parallax Label */}
      <motion.div 
         style={{ y: yLabel }}
         className="absolute top-20 left-1/2 -translate-x-1/2 text-[15vw] font-black text-black/[0.015] uppercase tracking-tighter select-none pointer-events-none group-hover/showcase-section:text-accent-blue/[0.03] transition-colors duration-1000"
      >
         COLLECT
      </motion.div>

      <div className="px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-12 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 px-5 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue mb-8 shadow-sm bg-white"
          >
             <Crown size={14} className="animate-pulse" />
             The Curated Atelier
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter leading-[0.85] text-black"
          >
            Elite <br />
            <span className="text-black/20 italic">Gallery</span>
          </motion.h2>
        </div>
        <div className="flex gap-6">
           <button 
             onClick={scrollLeft}
             className="w-16 h-16 rounded-[24px] glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-16 h-16 rounded-[24px] glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      {/* Product Scroller */}
      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto px-8 scrollbar-hide pb-16 snap-x snap-mandatory relative z-20"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-start group"
          >
              <div className="relative aspect-[4/5.2] bg-white rounded-[56px] overflow-hidden border border-black/10 transition-all duration-1000 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl bg-white">
                 <div className="absolute top-8 left-8 z-30">
                    <div className="px-5 py-2 rounded-full glass-lvl-2 border-black/10 text-[9px] font-black uppercase tracking-[0.3em] text-accent-blue bg-white group-hover:bg-black group-hover:text-white transition-all duration-700">
                       Elite Sign
                    </div>
                 </div>

                 <div className="absolute inset-x-8 top-24 bottom-1/2 flex items-center justify-center group-hover:scale-[1.08] transition-transform duration-1000 bg-[#F0F7FF]/30 rounded-[40px] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-100"
                    />
                    
                    <div className="absolute top-6 right-6 flex flex-col gap-4 translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-12 h-12 rounded-2xl glass-lvl-3 flex items-center justify-center shadow-xl border border-black/10 transition-all hover:scale-110 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black/30 hover:text-red-500 bg-white'}`}
                       >
                          <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                       </button>
                    </div>
                 </div>

                 <div className="absolute inset-x-0 bottom-0 p-12 flex justify-between items-end bg-gradient-to-t from-white via-white/80 to-transparent">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] font-inter">{product.category}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold font-outfit tracking-tighter group-hover:text-accent-blue transition-colors text-black duration-700">{product.name}</h3>
                      <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="px-8 py-4.5 rounded-[24px] bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-accent-blue shadow-2xl active:scale-95 transition-all"
                       >
                          <ShoppingBag size={14} />
                          Acquisition
                       </button>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold font-outfit text-black/80 tracking-tight">${product.price.toFixed(0)}</p>
                      <Link 
                        href={`/shop/${product.id}`}
                        className="text-[10px] font-black text-black/30 hover:text-accent-blue uppercase tracking-[0.4em] flex items-center justify-end gap-3 mt-6 group/link transition-colors"
                      >
                        Studio <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
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
