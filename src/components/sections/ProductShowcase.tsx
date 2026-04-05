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
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-48 overflow-hidden bg-[#FAF9F6] text-black relative group/showcase-section">
      {/* Space Utilization: Atmospheric Layer Masks */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FDFDFD] to-transparent pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 text-[12vw] font-black text-black/[0.015] uppercase tracking-tighter select-none pointer-events-none group-hover/showcase-section:text-accent-violet/[0.03] transition-colors duration-1000">SIGNATURE</div>

      <div className="px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-10 relative z-10">
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border border-black/5 text-[9px] font-black uppercase tracking-[0.4em] text-accent-violet mb-8 shadow-sm bg-white"
          >
             <Crown size={14} className="animate-pulse" />
             The Curated Atelier
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter leading-[0.85] text-black"
          >
            Elite <br />
            <span className="text-black/10 italic">Gallery</span>
          </motion.h2>
        </div>
        <div className="flex gap-4">
           <button 
             onClick={scrollLeft}
             className="w-14 h-14 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-14 h-14 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20 group bg-white"
           >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-8 scrollbar-hide pb-20 snap-x snap-mandatory relative z-20"
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
              <div className="relative aspect-[4/5.2] bg-white rounded-[56px] overflow-hidden border border-black/[0.04] group-hover:border-accent-violet/20 transition-all duration-1000 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white">
                <div className="absolute inset-0 glass-lvl-1 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000" />
                
                {/* Background Letter */}
                <div className="absolute inset-x-0 bottom-28 text-center select-none pointer-events-none">
                   <span className="text-[140px] font-black text-black/[0.015] uppercase tracking-tighter group-hover:text-black/[0.03] transition-colors duration-1000">{product.name.charAt(0)}</span>
                </div>

                <div className="absolute top-8 left-8 flex gap-3 z-30">
                   <div className="px-4 py-1.5 rounded-full glass-lvl-2 border-black/5 text-[8px] font-black uppercase tracking-widest text-accent-violet flex items-center gap-2 group-hover:bg-black group-hover:text-white transition-all duration-700 bg-white/60">
                      <Sparkles size={10} className="animate-pulse" />
                      Manifested
                   </div>
                </div>
                
                {/* Image Stage */}
                <div className="absolute inset-x-6 top-20 bottom-52 bg-white/40 border border-black/[0.02] rounded-[36px] flex items-center justify-center group-hover:scale-[1.02] transition-all duration-1000 backdrop-blur-3xl overflow-hidden group/stage">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-1000`} />

                    {/* Actions */}
                    <div className="absolute top-5 right-5 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-10 h-10 rounded-full glass-lvl-3 flex items-center justify-center transition-all shadow-lg hover:scale-110 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black/30 hover:text-red-500 bg-white/60'}`}
                       >
                          <Heart size={16} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                       </button>
                    </div>

                    {/* Quick Add */}
                    <div className="absolute inset-x-5 bottom-5 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-30">
                       <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="w-full py-4 rounded-[20px] bg-black text-white font-bold text-[9px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 transition-all group-hover:bg-accent-violet duration-700"
                       >
                          <ShoppingBag size={12} />
                          Acquisition
                       </button>
                    </div>
                </div>

                {/* Info Footer */}
                <div className="absolute inset-x-0 bottom-0 p-10 pt-0 flex justify-between items-end">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-black/20 uppercase tracking-[0.3em] font-inter">{product.category}</span>
                        <div className="flex gap-0.5">
                           {[1,2,3].map(i => <Star key={i} size={6} className="fill-accent-gold text-accent-gold" />)}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-outfit tracking-tighter group-hover:text-accent-violet transition-colors text-black duration-700">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold font-outfit text-black/70 tracking-tight">${product.price.toFixed(0)}</p>
                      <Link 
                        href={`/shop/${product.id}`}
                        className="text-[8px] font-black text-black/30 hover:text-accent-blue uppercase tracking-[0.3em] flex items-center justify-end gap-2 mt-4 group/link transition-colors"
                      >
                        Studio <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                </div>
              </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-20 flex items-center gap-5 opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity duration-1000">
         <div className="flex-1 h-px bg-black/5" />
         <span className="text-[8px] font-black uppercase tracking-[0.4em]">Protocol Signature v2.2</span>
         <div className="flex-1 h-px bg-black/5" />
      </div>
    </section>
  );
}
