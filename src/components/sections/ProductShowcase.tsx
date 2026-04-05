"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Wand2, ShoppingBag, Eye, Heart, Star, ShieldCheck, Crown, Cpu, MapPin } from "lucide-react";
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
        <div className="max-w-2xl text-left">
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

      {/* Improvised Product Scroller */}
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
            className="flex-shrink-0 w-[85vw] md:w-[480px] snap-start group/p-card"
          >
              <div className="relative aspect-[4/5.5] bg-white rounded-[64px] overflow-hidden border border-black/10 transition-all duration-1000 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_48px_120px_-20px_rgba(0,112,243,0.15)] bg-white group-hover/p-card:border-accent-blue/30">
                 
                 {/* Top Badge: Technical Label */}
                 <div className="absolute top-8 left-8 right-8 z-30 flex justify-between items-center">
                    <div className="px-5 py-2 rounded-2xl glass-lvl-2 border-black/10 text-[9px] font-black uppercase tracking-[0.3em] text-accent-blue bg-white group-hover/p-card:bg-black group-hover/p-card:text-white transition-all duration-700">
                       {product.category.replace(' ', ' • ')}
                    </div>
                    <button 
                       onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                       className={`w-12 h-12 rounded-2xl glass-lvl-3 flex items-center justify-center shadow-xl border border-black/10 transition-all hover:scale-110 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black/30 hover:text-red-500 bg-white'}`}
                    >
                       <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </button>
                 </div>

                 {/* Image Core with Fluid Reveal */}
                 <div className="absolute inset-x-8 top-28 bottom-[35%] flex items-center justify-center rounded-[48px] overflow-hidden bg-gradient-to-br from-[#F0F7FF] to-white group-hover/p-card:scale-[1.02] transition-transform duration-1000">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover/p-card:scale-110 group-hover/p-card:scale-105"
                    />
                    
                    {/* Hover Technical Specs */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xl opacity-0 group-hover/p-card:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-12 text-center text-white space-y-6">
                       <Cpu size={32} className="text-accent-blue animate-pulse mb-2" />
                       <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">Technical Specs</p>
                       <div className="grid grid-cols-1 gap-4 w-full">
                          {product.specs.slice(0,3).map(spec => (
                             <div key={spec.label} className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/30">{spec.label}</span>
                                <span className="text-xs font-bold font-inter tracking-tight">{spec.value}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Information Hub */}
                 <div className="absolute inset-x-0 bottom-0 p-12 space-y-8 bg-white">
                    <div className="flex justify-between items-end">
                       <div className="space-y-2">
                          <div className="flex items-center gap-2 text-accent-blue/40 group-hover/p-card:text-accent-blue transition-colors">
                             <MapPin size={10} />
                             <span className="text-[8px] font-black uppercase tracking-[0.4em] font-inter">Verified Origin</span>
                          </div>
                          <h3 className="text-4xl font-bold font-outfit tracking-tighter text-black duration-700">{product.name}</h3>
                       </div>
                       <div className="text-right">
                          <p className="text-4xl font-bold font-outfit text-black tracking-tight">${product.price.toFixed(0)}</p>
                          <p className="text-[9px] font-black text-black/20 uppercase tracking-widest mt-1">Excl. Manifesto Tax</p>
                       </div>
                    </div>

                    <div className="flex gap-4 items-center pt-2">
                       <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="flex-1 py-5 rounded-[28px] bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-accent-blue shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] active:scale-95 transition-all group/btn"
                       >
                          <ShoppingBag size={14} className="group-hover/btn:rotate-12 transition-transform" />
                          Quick Acquisition
                       </button>
                       <Link 
                          href={`/shop/${product.id}`}
                          className="w-16 h-16 rounded-[28px] glass-lvl-1 border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all text-black/30"
                       >
                          <ArrowRight size={22} />
                       </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6 opacity-20 group-hover/p-card:opacity-40 transition-opacity">
                       <div className="h-px flex-1 bg-black/10" />
                       <span className="text-[9px] font-black uppercase tracking-[0.3em]">Manifest Protocol v2.2</span>
                       <div className="h-px flex-1 bg-black/10" />
                    </div>
                 </div>
              </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
