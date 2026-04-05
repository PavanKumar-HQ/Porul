"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles, Wand2, ShoppingBag, Eye, Heart, Star, ShieldCheck, Crown } from "lucide-react";
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
    <section className="py-56 overflow-hidden bg-[#FAF9F6] text-black relative group/showcase-section">
      {/* Space Utilization: Atmospheric Layer Masks */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-[#FDFDFD] to-transparent pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 text-[10vw] font-black text-black/[0.02] uppercase tracking-tighter select-none pointer-events-none group-hover/showcase-section:text-accent-violet/[0.04] transition-colors duration-1000">SIGNATURE</div>

      <div className="px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-32 gap-12 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-accent-violet mb-10 shadow-sm bg-white"
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
            <span className="text-black/15 italic text-black/25">Gallery</span>
          </motion.h2>
        </div>
        <div className="flex gap-6">
           <button 
             onClick={scrollLeft}
             className="w-16 h-16 rounded-full glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-16 h-16 rounded-full glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto px-8 scrollbar-hide pb-20 snap-x snap-mandatory relative z-20"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[480px] snap-start group"
          >
              <div className="relative aspect-[4/5.5] bg-white rounded-[64px] overflow-hidden border border-black/10 group-hover:border-accent-violet/20 transition-all duration-1000 shadow-[0_32px_100px_-24px_rgba(0,0,0,0.08)] hover:shadow-[0_48px_120px_-20px_rgba(0,0,0,0.15)] bg-white">
                <div className="absolute inset-0 glass-lvl-1 opacity-20 pointer-events-none" />
                
                {/* Background Letter (Higher Visibility) */}
                <div className="absolute inset-x-0 bottom-32 text-center select-none pointer-events-none">
                   <span className="text-[180px] font-black text-black/[0.02] uppercase tracking-tighter group-hover:text-black/[0.04] transition-colors duration-1000">{product.name.charAt(0)}</span>
                </div>

                <div className="absolute top-8 left-8 flex gap-4 z-30">
                   <div className="px-5 py-2 rounded-full glass-lvl-2 border-black/10 text-[9px] font-black uppercase tracking-widest text-accent-violet flex items-center gap-2 group-hover:bg-black group-hover:text-white transition-all duration-700 bg-white/80">
                      <Sparkles size={12} className="animate-pulse" />
                      Manifested
                   </div>
                </div>
                
                {/* Image Stage */}
                <div className="absolute inset-x-8 top-24 bottom-56 bg-white/60 border border-black/5 rounded-[44px] flex items-center justify-center group-hover:scale-[1.02] transition-all duration-1000 backdrop-blur-3xl overflow-hidden group/stage">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-15 group-hover:opacity-25 transition-opacity duration-1000`} />

                    {/* Actions */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-12 h-12 rounded-full glass-lvl-3 flex items-center justify-center transition-all shadow-xl hover:scale-110 border border-black/10 ${isInWishlist(product.id) ? 'text-red-500 bg-white shadow-red-500/10' : 'text-black/40 hover:text-red-500 bg-white/80'}`}
                       >
                          <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                       </button>
                    </div>

                    {/* Quick Add */}
                    <div className="absolute inset-x-6 bottom-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-30">
                       <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="w-full py-5 rounded-[24px] bg-black text-white font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all group-hover:bg-accent-violet duration-700"
                       >
                          <ShoppingBag size={14} />
                          Acquisition
                       </button>
                    </div>
                </div>

                {/* Info Footer */}
                <div className="absolute inset-x-0 bottom-0 p-12 pt-0 flex justify-between items-end">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.3em] font-inter">{product.category}</span>
                        <div className="flex gap-1">
                           {[1,2,3,4,5].map(i => <Star key={i} size={8} className="fill-accent-gold text-accent-gold" />)}
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold font-outfit tracking-tighter group-hover:text-accent-violet transition-colors text-black duration-700">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold font-outfit text-black/80 tracking-tight">${product.price.toFixed(0)}</p>
                      <Link 
                        href={`/shop/${product.id}`}
                        className="text-[9px] font-black text-black/40 hover:text-accent-blue uppercase tracking-[0.3em] flex items-center justify-end gap-2 mt-4 group/link transition-colors"
                      >
                        Studio <ArrowRight size={12} className="group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                </div>
              </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-24 flex items-center gap-6 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000">
         <div className="flex-1 h-px bg-black/10" />
         <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">Protocol Signature v2.2</span>
         <div className="flex-1 h-px bg-black/10" />
      </div>
    </section>
  );
}
