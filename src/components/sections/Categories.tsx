"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Wand2, ShoppingBag, Eye, Heart, Star, ShieldCheck, Crown, PenTool, Gem, Layers, Box } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const categories = [
  { 
    name: "Signature Apparel", 
    href: "/category/apparel", 
    image: "/tee.png", 
    description: "Manifest your soul into luxury cotton and precision architectural stitching.",
    icon: <PenTool size={22} />,
    color: "bg-[#FDF8F2]", 
    tag: "Textile Protocol"
  },
  { 
    name: "Artifact Accessories", 
    href: "/category/accessories", 
    image: "/watch.png", 
    description: "Heritage digital accents crafted for the modern selective curator.",
    icon: <Gem size={22} />,
    color: "bg-[#F0F7FF]",
    tag: "Jewelry Protocol"
  },
  { 
    name: "Studio Essentials", 
    href: "/category/essentials", 
    image: "/planner.png", 
    description: "Physical tools engineered for the digital architect's sanctuary.",
    icon: <Layers size={22} />,
    color: "bg-[#FAF5FF]",
    tag: "Workspace Protocol"
  },
  { 
    name: "Memory Objects", 
    href: "/category/gifts", 
    image: "/mug.png", 
    description: "Physical anchors for your deepest digital stories and heirloom moments.",
    icon: <Box size={22} />,
    color: "bg-[#FFFBF0]",
    tag: "Gift Protocol"
  }
];

export default function Categories() {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLabel = useTransform(scrollYProgress, [0, 1], [-100, 100]);

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
    <section ref={containerRef} className="py-24 px-8 bg-[#FAF9F6]/80 relative overflow-hidden group/cat-section border-t border-black/[0.08]">
      {/* Structural Differentiation: Section Identity Badge */}
      <div className="absolute top-0 left-[10%] py-2.5 px-8 rounded-b-[24px] bg-black text-white text-[9px] font-black uppercase tracking-[0.6em] z-20 shadow-2xl">
         Sector 01: The Curatorium
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Parallax Label */}
      <motion.div 
         style={{ y: yLabel }}
         className="absolute top-20 right-10 text-[15vw] font-black text-black/[0.015] uppercase tracking-tighter select-none pointer-events-none group-hover/cat-section:text-accent-violet/[0.03] transition-colors duration-1000"
      >
         ATELIER
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12 text-black">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, x: -15 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-accent-violet mb-8 shadow-sm bg-white"
            >
               <Sparkles size={14} className="animate-pulse" />
               The Multi-Faceted Forge
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter leading-[0.85]"
            >
              Curated <br />
              <span className="text-black/15 italic">Collectibles</span>
            </motion.h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-10">
             <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl font-light text-black/40 leading-relaxed max-w-sm font-inter text-left md:text-right"
             >
                "A specialized architecture of artifacts, categorized by their protocol of manifestation."
             </motion.p>
             <div className="flex gap-4">
                <button 
                  onClick={scrollLeft}
                  className="w-14 h-14 rounded-[22px] glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl bg-white"
                >
                   <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-14 h-14 rounded-[22px] glass-lvl-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl bg-white"
                >
                   <ArrowRight size={18} />
                </button>
             </div>
          </div>
        </div>

        {/* Carousel Architecture */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-16 scrollbar-hide snap-x snap-mandatory relative z-20"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-[400px] snap-start group/card relative"
            >
               <div className="relative aspect-[3/4.5] rounded-[48px] overflow-hidden border border-black/10 bg-white transition-all duration-1000 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] group-hover/card:shadow-2xl">
                  
                  {/* Category Image - Large & Blurred in background */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none group-hover/card:scale-[1.1] transition-transform duration-[2000ms]">
                     <div className={`absolute inset-0 ${category.color} opacity-40`} />
                     <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover opacity-20 grayscale transition-all blur-[20px] group-hover/card:blur-0 group-hover/card:opacity-30 duration-1000" 
                     />
                  </div>
                  
                  <div className="p-10 relative z-20 flex flex-col h-full justify-between">
                     <div className="flex justify-between items-start">
                        <div className="w-16 h-16 rounded-[24px] glass-lvl-1 flex items-center justify-center text-black/80 group-hover/card:bg-black group-hover/card:text-white transition-all duration-700 shadow-xl bg-white/40 border border-black/5">
                           {category.icon}
                        </div>
                        <div className="text-right">
                           <span className="text-[10px] font-black text-black/10 uppercase tracking-[0.4em] group-hover/card:text-black/30 transition-colors">Sector V3</span>
                        </div>
                     </div>

                     <div className="space-y-10 group-hover/card:-translate-y-4 transition-transform duration-1000">
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                              <div className="w-1 h-1 rounded-full bg-accent-violet animate-pulse" />
                              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-violet">{category.tag}</span>
                           </div>
                           <h3 className="text-4xl lg:text-5xl font-bold font-outfit tracking-tighter text-black leading-none">{category.name}</h3>
                           <p className="text-sm font-light text-black/40 leading-relaxed group-hover/card:text-black/70 transition-colors">{category.description}</p>
                        </div>

                        <div className="flex gap-4">
                           <Link 
                              href={category.href}
                              className="flex-1 py-5 rounded-[24px] bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-accent-violet shadow-2xl transition-all active:scale-95"
                           >
                              Explore Studio
                           </Link>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-black/5 flex justify-between text-[9px] font-black uppercase tracking-[0.3em] text-black/10 group-hover/card:opacity-0 transition-opacity">
                        <span>Heritage Registry</span>
                        <span>Personalized</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
          
          {/* "View All" CTA Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="flex-shrink-0 w-[85vw] md:w-[400px] snap-start group/cta"
          >
             <Link href="/shop" className="relative aspect-[3/4.5] rounded-[48px] overflow-hidden border border-black/10 bg-black flex flex-col items-center justify-center text-center p-12 transition-all duration-1000 shadow-2xl hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(126,58,242,0.1),transparent_70%)] animate-pulse" />
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover/cta:scale-110 transition-transform">
                   <ArrowRight size={32} className="text-white" />
                </div>
                <h3 className="text-4xl font-bold font-outfit text-white tracking-tighter mb-4">The Entire <br /> Repository</h3>
                <p className="text-white/40 text-sm font-light tracking-wide max-w-[200px]">Access the complete archive of manifestable artifacts.</p>
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
