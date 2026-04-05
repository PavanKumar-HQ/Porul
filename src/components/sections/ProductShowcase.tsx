"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Wand2, ShoppingBag, Eye, Heart, Star, ShieldCheck, Crown } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useRef } from "react";

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
    <section className="py-20 overflow-hidden bg-[#F0F7FF]/30 text-black relative group/showcase-section border-y border-black/5">
      {/* Space Optimization: Differentiated Sub-grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0070f305_1px,transparent_1px),linear-gradient(to_bottom,#0070f305_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[10vw] font-black text-black/[0.015] uppercase tracking-tighter select-none pointer-events-none group-hover/showcase-section:text-accent-blue/[0.03] transition-colors duration-1000">COLLECT</div>

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
            className="text-6xl md:text-7xl font-bold font-outfit tracking-tighter leading-[0.85] text-black"
          >
            Elite <br />
            <span className="text-black/15 italic">Gallery</span>
          </motion.h2>
        </div>
        <div className="flex gap-6">
           <button 
             onClick={scrollLeft}
             className="w-14 h-14 rounded-full glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-14 h-14 rounded-full glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      {/* Product Scroller */}
      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto px-8 scrollbar-hide pb-12 snap-x snap-mandatory relative z-20"
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
              <div className="relative aspect-[4/5] bg-white rounded-[48px] overflow-hidden border border-black/10 transition-all duration-1000 shadow-xl hover:shadow-2xl bg-white">
                 <div className="absolute top-6 left-6 z-30">
                    <div className="px-4 py-1.5 rounded-full glass-lvl-2 border-black/10 text-[9px] font-black uppercase tracking-widest text-accent-blue bg-white group-hover:bg-black group-hover:text-white transition-all duration-700">
                       Elite Sign
                    </div>
                 </div>

                 <div className="absolute inset-x-6 top-20 bottom-1/2 flex items-center justify-center group-hover:scale-[1.05] transition-transform duration-1000 bg-[#F0F7FF]/20 rounded-[32px] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-100"
                    />
                    
                    <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-10 h-10 rounded-full glass-lvl-3 flex items-center justify-center shadow-xl border border-black/10 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black/40 hover:text-red-500 bg-white'}`}
                       >
                          <Heart size={16} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                       </button>
                    </div>
                 </div>

                 <div className="absolute inset-x-0 bottom-0 p-10 flex justify-between items-end">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] font-inter">{product.category}</span>
                      </div>
                      <h3 className="text-3xl font-bold font-outfit tracking-tighter group-hover:text-accent-blue transition-colors text-black duration-700">{product.name}</h3>
                      <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="px-6 py-3 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-accent-blue transition-all"
                       >
                          <ShoppingBag size={14} />
                          Acquisition
                       </button>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold font-outfit text-black/80 tracking-tight">${product.price.toFixed(0)}</p>
                      <Link 
                        href={`/shop/${product.id}`}
                        className="text-[9px] font-black text-black/30 hover:text-black uppercase tracking-[0.2em] flex items-center justify-end gap-2 mt-4 group/link transition-colors"
                      >
                        Studio <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
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
