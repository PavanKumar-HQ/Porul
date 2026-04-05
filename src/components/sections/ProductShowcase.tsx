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

  const yLabel = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -440, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 440, behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="py-24 overflow-hidden bg-[#F0F7FF]/50 text-black relative group/showcase-section border-t border-black/[0.12] items-start">
      {/* Top Sector Badge */}
      <div className="absolute top-0 right-[15%] py-2.5 px-8 rounded-b-[24px] bg-black text-white text-[10px] font-black uppercase tracking-[0.6em] z-20 shadow-2xl">
         Sector 02: Exhibition Hall
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0070f308_1px,transparent_1px),linear-gradient(to_bottom,#0070f308_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Parallax Label */}
      <motion.div 
         style={{ y: yLabel }}
         className="absolute top-20 left-1/2 -translate-x-1/2 text-[12vw] font-black text-black/[0.04] uppercase tracking-tighter select-none pointer-events-none group-hover/showcase-section:text-accent-blue/[0.06] transition-colors duration-1000"
      >
         COLLECT
      </motion.div>

      <div className="px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-12 relative z-10">
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/20 text-[11px] font-black uppercase tracking-[0.4em] text-accent-blue mb-8 shadow-sm bg-white"
          >
             Artifact Gallery
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter leading-none text-black uppercase"
          >
            Digital Curiosity
          </motion.h2>
        </div>
        <div className="flex gap-4">
           <button 
             onClick={scrollLeft}
             className="w-16 h-16 rounded-[24px] border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl group bg-white"
           >
              <ArrowLeft size={22} className="text-black group-hover:text-white transition-colors" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-16 h-16 rounded-[24px] border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl group bg-white"
           >
              <ArrowRight size={22} className="text-black group-hover:text-white transition-colors" />
           </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto px-8 scrollbar-hide pb-24 snap-x snap-mandatory relative z-20 items-start"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[420px] snap-start group"
          >
              <div className="relative aspect-[3/4.8] bg-white rounded-[64px] overflow-hidden border border-black/15 transition-all duration-1000 shadow-[0_48px_80px_-20px_rgba(0,0,0,0.12)] hover:shadow-2xl bg-white group/card">
                 
                 {/* Internal BIG Image Architecture */}
                 <div className="absolute inset-x-0 top-0 bottom-[35%] overflow-hidden bg-neutral-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                    
                    <div className="absolute top-10 left-10 z-30 flex gap-3">
                       <div className="px-5 py-2.5 rounded-full border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-black bg-white/80 backdrop-blur-md shadow-xl">
                          Signature
                       </div>
                    </div>

                    <div className="absolute top-10 right-10 flex flex-col gap-4 translate-x-14 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-700 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl border border-black/10 transition-all hover:scale-110 bg-white ${isInWishlist(product.id) ? 'text-red-500' : 'text-black/40 hover:text-red-500'}`}
                       >
                          <Heart size={22} fill={isInWishlist(product.id) ? "currentColor" : "none"} strokeWidth={2.5} />
                       </button>
                    </div>
                 </div>

                 {/* Compact Architecture Block - MAX Contrast */}
                 <div className="absolute inset-x-0 bottom-0 p-12 flex flex-col justify-end gap-8 bg-white border-t border-black/10">
                    <div className="flex justify-between items-start">
                       <div className="space-y-3">
                          <span className="text-[11px] font-black text-black/60 uppercase tracking-[0.5em] font-inter">{product.category}</span>
                          <h3 className="text-3xl lg:text-4xl font-bold font-outfit tracking-tighter text-black leading-tight uppercase group-hover/card:text-accent-blue transition-colors duration-700">{product.name}</h3>
                       </div>
                       <p className="text-3xl font-bold font-outfit text-black tracking-tighter leading-none">${product.price.toFixed(0)}</p>
                    </div>

                    <div className="flex gap-4 items-center">
                       <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="flex-1 py-5.5 rounded-[28px] bg-black text-white text-[12px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-accent-violet shadow-2xl active:scale-95 transition-all"
                       >
                          Acquire Artifact
                       </button>
                       <Link 
                         href={`/shop/${product.id}`}
                         className="w-16 h-16 rounded-[28px] border border-black/15 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm group/arrow"
                       >
                          <ArrowRight size={24} className="group-hover/arrow:translate-x-1.5 transition-transform" />
                       </Link>
                    </div>

                    <div className="pt-4 border-t border-black/10 flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-black/60">
                       <span>Protocol: {product.id.slice(0, 8)}</span>
                       <span className="text-black/80">Archived Verified</span>
                    </div>
                 </div>
              </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
