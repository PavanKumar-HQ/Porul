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
    icon: <PenTool size={20} />,
    color: "bg-[#FDF8F2]", // Alabaster Sand
    span: "col-span-2 row-span-2"
  },
  { 
    name: "Artifact Accessories", 
    href: "/category/accessories", 
    image: "/watch.png", 
    description: "Heritage digital accents for the modern curator.",
    icon: <Gem size={20} />,
    color: "bg-[#F0F7FF]", // Alabaster Cool
    span: "col-span-1 row-span-1"
  },
  { 
    name: "Studio Essentials", 
    href: "/category/essentials", 
    image: "/planner.png", 
    description: "Tools for the digital architect's sanctuary.",
    icon: <Layers size={20} />,
    color: "bg-[#FAF5FF]", // Alabaster Violet
    span: "col-span-1 row-span-1"
  },
  { 
    name: "Memory Objects", 
    href: "/category/gifts", 
    image: "/mug.png", 
    description: "Physical anchors for your deepest digital stories.",
    icon: <Box size={20} />,
    color: "bg-[#FFFBF0]", // Alabaster Gold
    span: "col-span-2 row-span-1"
  }
];

export default function Categories() {
  return (
    <section className="py-60 px-8 bg-[#FDFDFD] relative overflow-hidden group/cat-section">
      {/* Dynamic Grid Background (Space Utilization) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 text-black">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass-lvl-1 border border-black/5 text-[11px] font-black uppercase tracking-[0.5em] text-accent-violet mb-10 shadow-sm"
            >
               <Sparkles size={16} className="animate-pulse" />
               The Multi-Faceted Atelier
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-6xl md:text-[100px] font-bold font-outfit tracking-tighter leading-[0.8] mb-8"
            >
              Curated <br />
              <span className="text-black/10 italic">Museum</span>
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-2xl font-extralight text-black/40 leading-relaxed max-w-sm font-inter italic"
          >
            "A specialized architecture of artifacts, categorized by the emotion they manifest."
          </motion.p>
        </div>

        {/* Bento Grid Architecture (Space Utilization) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[300px] md:auto-rows-[400px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${category.span} group relative rounded-[48px] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-1000 ${category.color}`}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
              
              <div className="p-12 relative z-20 flex flex-col h-full justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-[24px] glass-lvl-3 flex items-center justify-center text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-sm">
                       {category.icon}
                    </div>
                    <Link 
                      href={category.href}
                      className="w-12 h-12 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-700 text-black/40 group-hover:text-black"
                    >
                       <ArrowRight size={20} />
                    </Link>
                 </div>

                 <div className="space-y-6">
                    <div>
                       <h3 className="text-3xl font-bold font-outfit tracking-tight text-black mb-3">{category.name}</h3>
                       <p className="text-sm font-light text-black/40 leading-relaxed max-w-[280px]">{category.description}</p>
                    </div>
                    <Link 
                      href={category.href}
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-accent-blue hover:text-black transition-colors"
                    >
                       Enter Collection <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>

              {/* Floating Image Preview */}
              <div className="absolute inset-x-8 bottom-8 top-32 overflow-hidden rounded-[32px] pointer-events-none group-hover:scale-[1.02] transition-transform duration-1000">
                 <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 blur-[40px] group-hover:blur-0" 
                 />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
