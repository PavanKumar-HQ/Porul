"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-8 relative overflow-hidden bg-white text-black group/cta-section border-t border-black/[0.04]">
      {/* Alabaster Sub-grid (Cleaned) */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="px-10 py-12 md:px-20 md:py-16 rounded-[64px] border border-black/[0.05] relative overflow-hidden shadow-2xl bg-[#FDFDFD] group/card flex flex-col lg:flex-row items-center justify-between gap-12"
        >
           {/* Left Content Cluster (Extreme Visibility & High Contrast) */}
           <div className="flex-1 text-center lg:text-left space-y-6">
              <motion.div
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/[0.05] text-[10px] font-black tracking-[0.4em] text-accent-violet/60 uppercase bg-white/40 shadow-sm"
              >
                The Final Chapter
              </motion.div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tighter text-black leading-[0.85] select-none">
                Manifest Your <br />
                <span className="text-black/10 italic pr-3">Signature</span>
              </h2>

              <p className="text-black/40 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed font-outfit italic">
                Join <span className="text-black/60 font-bold not-italic font-inter">50,000+ collectors</span> who have manifested their deepest emotions into enduring physical reality.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full border border-black/[0.03] flex items-center justify-center text-black/10 group-hover/item:bg-black group-hover/item:text-white transition-all bg-white shadow-sm">
                       <Lock size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20">Secured Origin</span>
                 </div>
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full border border-black/[0.03] flex items-center justify-center text-black/10 group-hover/item:bg-black group-hover/item:text-white transition-all bg-white shadow-sm">
                       <Heart size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20">Heritage Source</span>
                 </div>
              </div>
           </div>

           {/* Right Action Cluster */}
           <div className="flex flex-col gap-6 w-full lg:w-auto min-w-[320px]">
              <Link href="/shop" className="group relative px-8 py-5 bg-black text-white font-bold rounded-[32px] transition-all hover:scale-105 flex items-center gap-6 shadow-2xl hover:shadow-black/20 group/btn">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-accent-violet transition-colors">
                    <Wand2 size={22} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                 </div>
                 <div className="text-left flex-1">
                    <p className="text-xl tracking-tight leading-none text-white">Enter The Studio</p>
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mt-1.5 font-inter">ID Protocol v2.2</p>
                 </div>
                 <ArrowRight size={22} className="group-hover/btn:translate-x-1.5 transition-transform duration-500 text-accent-violet" />
              </Link>
           </div>
        </motion.div>
      </div>

      {/* Atmospheric Glow (Cleaned & Subtler) */}
      <motion.div 
         animate={{ x: [-20, 20, -20], scale: [1, 1.1, 1] }}
         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[140px] -z-10" 
      />
    </section>
  );
}
