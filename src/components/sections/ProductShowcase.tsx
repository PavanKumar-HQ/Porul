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
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-40 overflow-hidden bg-[#FAF9F6] text-black relative group/showcase-section">
      {/* Space Utilization: Atmospheric Layer Masks */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#FDFDFD] to-transparent pointer-events-none" />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-[10vw] font-black text-black/[0.01] uppercase tracking-tighter select-none pointer-events-none group-hover/showcase-section:text-accent-violet/[0.02] transition-colors duration-1000">SIGNATURE</div>

      <div className="px-8 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-8 relative z-10">
        <div className="max-w-lg">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-lvl-1 border border-black/5 text-[8px] font-black uppercase tracking-[0.3em] text-accent-violet mb-6 shadow-sm bg-white"
          >
             <Crown size={12} className="animate-pulse" />
             The Curated Atelier
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[56px] font-bold font-outfit tracking-tighter leading-[0.9] text-black"
          >
            Elite <br />
            <span className="text-black/10 italic">Gallery</span>
          </motion.h2>
        </div>
        <div className="flex gap-3">
           <button 
             onClick={scrollLeft}
             className="w-12 h-12 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-black/20 group bg-white"
           >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
             onClick={scrollRight}
             className="w-12 h-12 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-black/20 group bg-white"
           >
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 scrollbar-hide pb-16 snap-x snap-mandatory relative z-20"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[75vw] md:w-[380px] snap-start group"
          >
              <div className="relative aspect-[4/5] bg-white rounded-[40px] overflow-hidden border border-black/[0.04] group-hover:border-accent-violet/10 transition-all duration-1000 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.08)] bg-white">
                <div className="absolute inset-0 glass-lvl-1 opacity-10 pointer-events-none" />
                
                {/* Background Letter */}
                <div className="absolute inset-x-0 bottom-24 text-center select-none pointer-events-none">
                   <span className="text-[110px] font-black text-black/[0.012] uppercase tracking-tighter group-hover:text-black/[0.024] transition-colors duration-1000">{product.name.charAt(0)}</span>
                </div>

                <div className="absolute top-6 left-6 flex gap-2 z-30">
                   <div className="px-3 py-1.5 rounded-full glass-lvl-2 border-black/5 text-[7px] font-black uppercase tracking-widest text-accent-violet flex items-center gap-1.5 group-hover:bg-black group-hover:text-white transition-all duration-700 bg-white/60">
                      <Sparkles size={8} />
                      Manifested
                   </div>
                </div>
                
                {/* Image Stage */}
                <div className="absolute inset-x-5 top-16 bottom-44 bg-white/40 border border-black/[0.01] rounded-[28px] flex items-center justify-center group-hover:scale-[1.02] transition-all duration-1000 backdrop-blur-3xl overflow-hidden group/stage">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-15 transition-opacity duration-1000`} />

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-30">
                       <button 
                         onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                         className={`w-9 h-9 rounded-full glass-lvl-3 flex items-center justify-center transition-all shadow-lg hover:scale-110 border border-black/5 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black/30 hover:text-red-500 bg-white/60'}`}
                       >
                          <Heart size={14} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                       </button>
                    </div>

                    {/* Quick Add */}
                    <div className="absolute inset-x-4 bottom-4 translate-y-16 group-hover:translate-y-0 transition-transform duration-500 z-30">
                       <button 
                         onClick={() => addToCart(product, "", "Inter", "#000000")}
                         className="w-full py-3.5 rounded-[16px] bg-black text-white font-bold text-[8px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 transition-all group-hover:bg-accent-violet duration-700"
                       >
                          <ShoppingBag size={10} />
                          Acquisition
                       </button>
                    </div>
                </div>

                {/* Info Footer */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-0 flex justify-between items-end">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-black text-black/20 uppercase tracking-[0.2em] font-inter">{product.category}</span>
                        <div className="flex gap-0.5">
                           {[1,2,3].map(i => <Star key={i} size={5} className="fill-accent-gold text-accent-gold" />)}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold font-outfit tracking-tighter group-hover:text-accent-violet transition-colors text-black duration-700">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold font-outfit text-black/60 tracking-tight">${product.price.toFixed(0)}</p>
                      <Link 
                        href={`/shop/${product.id}`}
                        className="text-[7px] font-black text-black/30 hover:text-accent-blue uppercase tracking-[0.2em] flex items-center justify-end gap-1.5 mt-3 group/link transition-colors"
                      >
                        Studio <ArrowRight size={10} className="group-hover/link:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                </div>
              </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 mt-16 flex items-center gap-4 opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity duration-1000">
         <div className="flex-1 h-px bg-black/5" />
         <span className="text-[7px] font-black uppercase tracking-[0.4em]">Protocol Signature v2.2</span>
         <div className="flex-1 h-px bg-black/5" />
      </div>
    </section>
  );
}
