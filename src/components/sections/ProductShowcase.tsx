"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="py-32 overflow-hidden bg-[#FDFDFD]">
      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-8 mb-32">
        <div className="w-full h-px bg-black/[0.03]" />
      </div>

      <div className="px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-12 text-black">
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
            <Link href={`/shop/${product.id}`}>
              <div className="relative aspect-[4/5.2] glass-lvl-1 rounded-[64px] overflow-hidden border-black/5 group-hover:glass-lvl-3 transition-all duration-1000 shadow-sm hover:shadow-2xl bg-white">
                {/* Background Glow (Pearlescent) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[80px] -z-10`} />
                
                {/* Image Stage */}
                <div className="absolute inset-x-10 top-10 bottom-44 glass-lvl-1 border-black/5 rounded-[40px] flex items-center justify-center group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-1000 bg-white/50 backdrop-blur-3xl group-hover:shadow-black/5 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`} />
                    
                    {/* Centered Interaction Anchor */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                        <div className="w-16 h-16 rounded-full glass-lvl-3 flex items-center justify-center text-accent-violet shadow-2xl">
                           <Wand2 size={24} />
                        </div>
                    </div>
                </div>

                {/* Product Info (Onyx) */}
                <div className="absolute inset-x-0 bottom-0 p-12 pt-0 flex justify-between items-end text-black">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.4em] font-inter">{product.category}</span>
                      <h3 className="text-3xl font-bold font-outfit tracking-tighter group-hover:text-accent-violet transition-colors">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold font-outfit text-black/80 tracking-tight">${product.price.toFixed(0)}</p>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.2em] flex items-center gap-2 mt-4 group opacity-0 group-hover:opacity-100 transition-all duration-500"
                      >
                        Enter Studio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
