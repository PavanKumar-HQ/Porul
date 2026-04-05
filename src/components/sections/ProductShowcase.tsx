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
    <section ref={containerRef} className="py-16 overflow-hidden bg-[#F0F7FF]/50 text-black relative group/showcase-section border-t border-black/[0.08]">
      {/* Structural Differentiation: Section Identity Badge */}
      <div className="absolute top-0 right-[15%] py-2 px-6 rounded-b-2xl bg-black text-white text-[8px] font-black uppercase tracking-[0.5em] z-20 shadow-xl">
         Sector 02: Exhibition Hall
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0070f305_1px,transparent_1px),linear-gradient(to_bottom,#0070f305_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Parallax Label */}
      <motion.div 
         style={{ y: yLabel }}
         className="absolute top-20 left-1/2 -translate-x-1/2 text-[12vw] font-black text-black/[0.012] uppercase tracking-tighter select-none pointer-events-none group-hover/showcase-section:text-accent-blue/[0.024] transition-colors duration-1000"
      >
         COLLECT
      </motion.div>

      <div className="px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end mb-12 gap-8 relative z-10">
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full glass-lvl-1 border border-black/10 text-[9px] font-black uppercase tracking-[0.4em] text-accent-blue mb-6 shadow-sm bg-white"
          >
             <Crown size={12} className="animate-pulse" />
             The Modern Gallery
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-outfit tracking-tighter leading-[0.85] text-black"
          >
            Digital <br />
            <span className="text-black/15 italic">Curiosity</span>
          </motion.h2>
        </div>
        <div className="flex gap-4">
           <button 
             onClick={scrollLeft}
             className="w-14 h-14 rounded-2xl glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl group bg-white"
           >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-14 h-14 rounded-2xl glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl group bg-white"
           >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      {/* Reduced Scroller Layout: SMALLER OVERALL, BIGGER INTERNAL IMAGES */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-8 scrollbar-hide pb-16 snap-x snap-mandatory relative z-20"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[80vw] md:w-[420px] snap-start group"
          >
              <div className="relative aspect-[3/4.8] bg-white rounded-[48px] overflow-hidden border border-black/10 transition-all duration-1000 shadow-[0_32px_60px_-15px_rgba(0,0,0,0.06)] hover:shadow-2xl bg-white group/card">
                 
                 {/* Internal BIG Image Architecture */}
                 <div className="absolute inset-x-0 top-0 bottom-[35%] overflow-hidden">
                    <div className="absolute inset-0 bg-[#F0F7FF]/20" />
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-[1.12] group-hover:rotate-1"
                    />
                    
                    <div className="absolute top-8 left-8 z-30 flex gap-3">
                       <div className="px-4 py-2 rounded-full glass-lvl-2 border-black/5 text-[9px] font-black uppercase tracking-[0.3em] text-accent-blue bg-white">
                          Signature
                       </div>
                    </div>

                    <div className="absolute top-8 right-8 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-11 h-11 rounded-xl glass-lvl-3 flex items-center justify-center shadow-xl border border-black/5 transition-all hover:scale-110 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black/20 bg-white'}`}
                       >
                          <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                       </button>
                    </div>
                 </div>

                 {/* Compact Architecture Block */}
                 <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end gap-6 bg-white overflow-hidden">
                    <div className="flex justify-between items-start">
                       <div className="space-y-2">
                          <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] font-inter">{product.category}</span>
                          <h3 className="text-2xl lg:text-3xl font-bold font-outfit tracking-tighter text-black leading-none group-hover/card:text-accent-blue transition-colors duration-700">{product.name}</h3>
                       </div>
                       <p className="text-2xl font-bold font-outfit text-black tracking-tight">${product.price.toFixed(0)}</p>
                    </div>

                    <div className="flex gap-4 items-center">
                       <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="flex-1 py-4.5 rounded-[20px] bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-accent-blue shadow-xl active:scale-95 transition-all"
                       >
                          <ShoppingBag size={16} />
                          Acquire
                       </button>
                       <Link 
                         href={`/shop/${product.id}`}
                         className="w-16 h-16 rounded-[20px] glass-lvl-1 border border-black/5 flex items-center justify-center text-black/20 hover:text-black hover:bg-white transition-all group/arrow overflow-hidden"
                       >
                          <ArrowRight size={22} className="group-hover/arrow:translate-x-1.5 transition-transform" />
                       </Link>
                    </div>

                    <div className="pt-2 border-t border-black/5 flex justify-between text-[8px] font-black uppercase tracking-[0.2em] text-black/10">
                       <span>Sector: {product.id.slice(0, 4)}</span>
                       <span>Verified</span>
                    </div>
                 </div>
              </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
