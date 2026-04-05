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
    tag: "Textile Protocol",
    asymmetricClass: "mt-0 aspect-[4/5.5]"
  },
  { 
    name: "Artifact Accessories", 
    href: "/category/accessories", 
    image: "/watch.png", 
    description: "Heritage digital accents crafted for the modern selective curator.",
    icon: <Gem size={22} />,
    color: "bg-[#F0F7FF]",
    tag: "Jewelry Protocol",
    asymmetricClass: "mt-16 aspect-[4/5]"
  },
  { 
    name: "Studio Essentials", 
    href: "/category/essentials", 
    image: "/planner.png", 
    description: "Physical tools engineered for the digital architect's sanctuary.",
    icon: <Layers size={22} />,
    color: "bg-[#FAF5FF]",
    tag: "Workspace Protocol",
    asymmetricClass: "mt-8 aspect-[4/6]"
  },
  { 
    name: "Memory Objects", 
    href: "/category/gifts", 
    image: "/mug.png", 
    description: "Physical anchors for your deepest digital stories and heirloom moments.",
    icon: <Box size={22} />,
    color: "bg-[#FFFBF0]",
    tag: "Gift Protocol",
    asymmetricClass: "mt-24 aspect-[4/5.2]"
  }
];

export default function Categories() {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLabel = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="py-24 px-8 bg-[#FAF9F6] relative overflow-hidden group/cat-section border-t border-black/[0.08]">
      {/* Structural Differentiation: Section Identity Badge */}
      <div className="absolute top-0 right-[20%] py-2.5 px-8 rounded-b-[24px] bg-black text-white text-[9px] font-black uppercase tracking-[0.6em] z-20 shadow-2xl">
         Sector 01: The Curatorium
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Parallax Label */}
      <motion.div 
         style={{ y: yLabel }}
         className="absolute top-20 right-10 text-[18vw] font-black text-black/[0.01] uppercase tracking-tighter select-none pointer-events-none group-hover/cat-section:text-accent-violet/[0.03] transition-colors duration-1000"
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
               Asymmetric Discovery
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter leading-[0.85]"
            >
              Curated <br />
              <span className="text-black/15 italic">Museum</span>
            </motion.h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-10">
             <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl font-light text-black/30 leading-relaxed max-w-sm font-inter text-left md:text-right italic"
             >
                "A non-linear architecture of artifacts, staggered by their protocol of manifestation."
             </motion.p>
             <div className="flex gap-4">
                <button 
                  onClick={scrollLeft}
                  className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl bg-white"
                >
                   <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl bg-white"
                >
                   <ArrowRight size={18} />
                </button>
             </div>
          </div>
        </div>

        {/* ASYMMETRIC Carousel Architecture */}
        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto pb-40 pt-10 scrollbar-hide snap-x snap-mandatory relative z-20 items-start"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex-shrink-0 w-[85vw] md:w-[420px] snap-start group/card relative ${category.asymmetricClass}`}
            >
               <div className="relative h-full w-full rounded-[64px] overflow-hidden border border-black/10 bg-white transition-all duration-1000 shadow-[0_48px_100px_-20px_rgba(0,0,0,0.1)] group-hover/card:shadow-2xl">
                  
                  {/* Category Image - Large & Blurred in background */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none group-hover/card:scale-[1.15] transition-all duration-[2000ms]">
                     <div className={`absolute inset-0 ${category.color} opacity-30`} />
                     <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover opacity-10 grayscale transition-all blur-[40px] group-hover/card:blur-0 group-hover/card:opacity-40 duration-1000" 
                     />
                  </div>
                  
                  <div className="p-12 relative z-20 flex flex-col h-full justify-between">
                     <div className="flex justify-between items-start">
                        <motion.div 
                          whileHover={{ rotate: 90 }}
                          className="w-16 h-16 rounded-[28px] glass-lvl-1 flex items-center justify-center text-black/80 group-hover/card:bg-black group-hover/card:text-white transition-all duration-700 shadow-xl bg-white/40 border border-black/5"
                        >
                           {category.icon}
                        </motion.div>
                        <div className="text-right">
                           <span className="text-[10px] font-black text-black/10 uppercase tracking-[0.5em] font-inter group-hover/card:text-black/30 transition-colors">Sector V.{index + 1}</span>
                        </div>
                     </div>

                     <div className="space-y-12">
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent-violet">{category.tag}</span>
                           </div>
                           <h3 className="text-4xl lg:text-5xl font-bold font-outfit tracking-tighter text-black leading-none">{category.name}</h3>
                           <p className="text-base font-light text-black/40 leading-relaxed group-hover/card:text-black/70 transition-colors">{category.description}</p>
                        </div>

                        <div className="flex gap-4">
                           <Link 
                              href={category.href}
                              className="flex-1 py-5.5 rounded-[28px] bg-black text-white text-[11px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-accent-violet shadow-2xl transition-all active:scale-95"
                           >
                              Enter Studio
                           </Link>
                        </div>
                     </div>

                     <div className="pt-8 border-t border-black/5 flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-black/20 group-hover/card:opacity-0 transition-opacity">
                        <span>Heritage</span>
                        <span>0{index + 1}</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
          
          {/* Asymmetric Final "View All" CTA Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="flex-shrink-0 w-[85vw] md:w-[420px] snap-start group/cta mt-32 aspect-[4/5.5]"
          >
             <Link href="/shop" className="relative h-full w-full rounded-[64px] overflow-hidden border border-black/10 bg-black flex flex-col items-center justify-center text-center p-14 transition-all duration-1000 shadow-2xl hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(126,58,242,0.15),transparent_70%)]" />
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mb-10 group-hover/cta:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                   <ArrowRight size={40} className="text-white group-hover:text-black" />
                </div>
                <h3 className="text-4xl font-bold font-outfit text-white tracking-tighter mb-6 leading-tight">The Global <br /> Repository</h3>
                <p className="text-white/30 text-base font-light tracking-wide max-w-[220px]">Access the complete archive of all manifestable heritage artifacts.</p>
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
