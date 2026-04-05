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
    variants: ["Obsidian Mug", "Heritage Vessel", "Memory Sphere"]
  }
];

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-40 px-8 bg-[#FDFDFD] relative overflow-hidden group/cat-section">
      {/* Dynamic Grid Background (Increased Visibility) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 text-black">
          <div className="max-w-xl">
            <motion.div 
               initial={{ opacity: 0, x: -15 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-accent-violet mb-10 shadow-sm bg-white"
            >
               <Sparkles size={14} className="animate-pulse" />
               The Multi-Faceted Atelier
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-bold font-outfit tracking-tighter leading-[0.85] mb-8"
            >
              Curated <br />
              <span className="text-black/20 italic">Museum</span>
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-2xl font-extralight text-black/40 leading-relaxed max-w-sm font-inter italic"
          >
            "A specialized architecture of artifacts, categorized by manifestation."
          </motion.p>
        </div>

        {/* Bento Grid Architecture (Enhanced Mouse Effects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:auto-rows-[400px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              transition={{ delay: index * 0.1 }}
              className={`${category.span} group relative rounded-[48px] overflow-hidden border border-black/10 shadow-sm hover:shadow-[0_48px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-1000 ${category.color} bg-white`}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
              
              <div className="p-12 relative z-20 flex flex-col h-full justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-[24px] glass-lvl-3 flex items-center justify-center text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-sm bg-white">
                       {category.icon}
                    </div>
                    <Link 
                      href={category.href}
                      className="w-12 h-12 rounded-full glass-lvl-1 border border-black/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-700 text-black/40 group-hover:text-black bg-white/40"
                    >
                       <ArrowRight size={20} />
                    </Link>
                 </div>

                 <div className="space-y-8">
                    <div className="group-hover:-translate-y-4 transition-transform duration-1000">
                       <h3 className="text-3xl lg:text-4xl font-bold font-outfit tracking-tight text-black mb-3">{category.name}</h3>
                       <p className="text-sm font-light text-black/40 leading-relaxed max-w-[280px]">{category.description}</p>
                    </div>

                    {/* Mouse Over Option Preview (Differential Enhancement) */}
                    <div className="absolute bottom-12 left-12 right-12 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                       <div className="flex flex-wrap gap-2 mb-6">
                          {category.variants.map((v) => (
                             <span key={v} className="px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-black/5 text-black/60 border border-black/5">
                                {v}
                             </span>
                          ))}
                       </div>
                       <Link 
                          href={category.href}
                          className="w-full py-4 rounded-2xl bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-accent-violet transition-colors"
                       >
                          Explore Collection <ArrowRight size={14} />
                       </Link>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/20 group-hover:opacity-0 transition-all">
                       <ShoppingBag size={14} />
                       Enter {category.name.split(' ')[1]}
                    </div>
                 </div>
              </div>

              {/* Enhanced Image Presentation */}
              <div className="absolute inset-x-8 bottom-8 top-32 overflow-hidden rounded-[32px] pointer-events-none group-hover:scale-[1.1] transition-transform duration-[2000ms]">
                 <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover opacity-10 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-[2000ms] blur-[40px] group-hover:blur-0" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
