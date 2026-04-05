"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Box, PenTool, Gem } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { 
    name: "Signature Apparel", 
    href: "/category/apparel", 
    image: "/tee.png", 
    description: "Manifest your soul into luxury cotton and precision stitching.",
    icon: <PenTool size={16} />,
    color: "bg-[#FDF8F2]", // Alabaster Sand
    span: "col-span-2 row-span-2"
  },
  { 
    name: "Artifact Accessories", 
    href: "/category/accessories", 
    image: "/watch.png", 
    description: "Heritage digital accents for the modern curator.",
    icon: <Gem size={16} />,
    color: "bg-[#F0F7FF]", // Alabaster Cool
    span: "col-span-1 row-span-1"
  },
  { 
    name: "Studio Essentials", 
    href: "/category/essentials", 
    image: "/planner.png", 
    description: "Tools for the digital architect's sanctuary.",
    icon: <Layers size={16} />,
    color: "bg-[#FAF5FF]", // Alabaster Violet
    span: "col-span-1 row-span-1"
  },
  { 
    name: "Memory Objects", 
    href: "/category/gifts", 
    image: "/mug.png", 
    description: "Physical anchors for your deepest digital stories.",
    icon: <Box size={16} />,
    color: "bg-[#FFFBF0]", // Alabaster Gold
    span: "col-span-2 row-span-1"
  }
];

export default function Categories() {
  return (
    <section className="py-32 px-8 bg-[#FDFDFD] relative overflow-hidden group/cat-section">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-black">
          <div className="max-w-lg">
            <motion.div 
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-lvl-1 border border-black/5 text-[8px] font-black uppercase tracking-[0.3em] text-accent-violet mb-6 shadow-sm bg-white"
            >
               <Sparkles size={12} className="animate-pulse" />
               The Multi-Faceted Atelier
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-[56px] font-bold font-outfit tracking-tighter leading-[0.9] mb-4"
            >
              Curated <br />
              <span className="text-black/10 italic">Museum</span>
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-lg font-extralight text-black/25 leading-relaxed max-w-[280px] font-inter italic"
          >
            "A specialized architecture of artifacts, categorized by manifestation."
          </motion.p>
        </div>

        {/* Bento Grid Architecture (Compact Scale) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${category.span} group relative rounded-[32px] overflow-hidden border border-black/5 shadow-sm hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-1000 ${category.color}`}
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
              
              <div className="p-8 relative z-20 flex flex-col h-full justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl glass-lvl-3 flex items-center justify-center text-black/30 group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-sm bg-white/60">
                       {category.icon}
                    </div>
                    <Link 
                      href={category.href}
                      className="w-8 h-8 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-700 text-black/20 group-hover:text-black bg-white/30"
                    >
                       <ArrowRight size={14} />
                    </Link>
                 </div>

                 <div className="space-y-4">
                    <div>
                       <h3 className="text-xl font-bold font-outfit tracking-tight text-black mb-1.5">{category.name}</h3>
                       <p className="text-[11px] font-light text-black/30 leading-relaxed max-w-[200px]">{category.description}</p>
                    </div>
                    <Link 
                      href={category.href}
                      className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-accent-blue hover:text-black transition-colors"
                    >
                       Enter Collection <ArrowRight size={10} />
                    </Link>
                 </div>
              </div>

              {/* Floating Image Preview */}
              <div className="absolute inset-x-5 bottom-5 top-24 overflow-hidden rounded-[20px] pointer-events-none group-hover:scale-[1.02] transition-transform duration-1000">
                 <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 blur-[20px] group-hover:blur-0" 
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
