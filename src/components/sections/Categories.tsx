"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Box, PenTool, Gem, Eye, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { 
    name: "Signature Apparel", 
    href: "/category/apparel", 
    image: "/tee.png", 
    description: "Manifest your soul into luxury cotton and precision stitching.",
    icon: <PenTool size={20} />,
    color: "bg-[#FDF8F2]", 
    span: "col-span-2 row-span-2",
    variants: ["Ultra-Weight Tee", "Manifest Hoodie", "Signature Cap"]
  },
  { 
    name: "Artifact Accessories", 
    href: "/category/accessories", 
    image: "/watch.png", 
    description: "Heritage digital accents for the modern curator.",
    icon: <Gem size={20} />,
    color: "bg-[#F0F7FF]",
    span: "col-span-1 row-span-1",
    variants: ["Chronos Watch", "Identity Ring"]
  },
  { 
    name: "Studio Essentials", 
    href: "/category/essentials", 
    image: "/planner.png", 
    description: "Tools for the digital architect's sanctuary.",
    icon: <Layers size={20} />,
    color: "bg-[#FAF5FF]",
    span: "col-span-1 row-span-1",
    variants: ["Manifest Planner", "Atelier Slate"]
  },
  { 
    name: "Memory Objects", 
    href: "/category/gifts", 
    image: "/mug.png", 
    description: "Physical anchors for your deepest digital stories.",
    icon: <Box size={20} />,
    color: "bg-[#FFFBF0]",
    span: "col-span-2 row-span-1",
    variants: ["Obsidian Mug", "Heritage Vessel"]
  }
];

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-8 bg-[#FAF9F6]/60 relative overflow-hidden group/cat-section border-t border-black/[0.08]">
      {/* Structural Differentiation: Section Identity Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 py-2 px-6 rounded-b-2xl bg-black text-white text-[8px] font-black uppercase tracking-[0.5em] z-20 shadow-xl">
         Sector 01: The Curatorium
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-black">
          <div className="max-w-xl">
            <motion.div 
               initial={{ opacity: 0, x: -15 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-4 px-5 py-1.5 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-accent-violet mb-8 shadow-sm bg-white"
            >
               <Sparkles size={14} className="animate-pulse" />
               The Multi-Faceted Atelier
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter leading-[0.9] mb-4"
            >
              Curated <br />
              <span className="text-black/20 italic">Museum</span>
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-xl font-extralight text-black/50 leading-relaxed max-w-sm font-inter italic"
          >
            "A specialized architecture of artifacts, categorized by manifestation."
          </motion.p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:auto-rows-[380px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              transition={{ delay: index * 0.1 }}
              className={`${category.span} group relative rounded-[48px] overflow-hidden border border-black/10 shadow-sm transition-all duration-1000 ${category.color} bg-white shadow-[0_24px_60px_-15px_rgba(0,0,0,0.05)]`}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
              
              <div className="p-10 relative z-20 flex flex-col h-full justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl glass-lvl-3 flex items-center justify-center text-black/60 group-hover:bg-black group-hover:text-white transition-all shadow-sm bg-white border border-black/5">
                       {category.icon}
                    </div>
                    <Link 
                      href={category.href}
                      className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all text-black/30 group-hover:text-black bg-white/40"
                    >
                       <ArrowRight size={20} />
                    </Link>
                 </div>

                 <div className="space-y-6">
                    <div className="group-hover:-translate-y-4 transition-transform duration-1000">
                       <h3 className="text-3xl lg:text-4xl font-bold font-outfit tracking-tight text-black mb-3">{category.name}</h3>
                       <p className="text-sm font-light text-black/50 leading-relaxed max-w-[300px]">{category.description}</p>
                    </div>

                    <div className="absolute bottom-10 left-10 right-10 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                       <Link 
                          href={category.href}
                          className="w-full py-4.5 rounded-[24px] bg-black text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-accent-violet shadow-2xl active:scale-95 transition-all"
                       >
                          Explore <ArrowRight size={14} />
                       </Link>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/20 group-hover:opacity-0 transition-all">
                       <ShoppingBag size={14} />
                       Manifesting {category.name.split(' ')[1]}
                    </div>
                 </div>
              </div>

              <div className="absolute inset-x-8 bottom-8 top-36 overflow-hidden rounded-[40px] pointer-events-none group-hover:scale-[1.08] transition-transform duration-[2000ms]">
                 <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-all blur-[30px] group-hover:blur-0" 
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
