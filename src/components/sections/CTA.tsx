"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-8 relative overflow-hidden bg-white text-black group/cta-section">
      {/* Space Utilization: Alabaster Sub-grid */}
      <div className="absolute inset-0 bg-[#FDFDFD] overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/[0.015] uppercase tracking-tighter select-none pointer-events-none group-hover/cta-section:text-accent-violet/[0.03] transition-colors duration-1000">MANIFEST</div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="glass-lvl-3 px-10 py-12 md:px-20 md:py-16 rounded-[56px] border border-black/10 relative overflow-hidden shadow-[0_48px_120px_-20px_rgba(0,0,0,0.06)] bg-white group/card flex flex-col lg:flex-row items-center justify-between gap-12"
        >
           {/* Left Content Cluster (Extreme Visibility & High Contrast) */}
           <div className="flex-1 text-center lg:text-left space-y-6">
              <motion.div
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black tracking-[0.4em] text-accent-violet uppercase bg-white/40"
              >
                <Sparkles size={14} className="animate-pulse" />
                The Final Chapter
              </motion.div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tighter text-black leading-[0.85] select-none">
                Manifest Your <br />
                <span className="text-accent-violet italic pr-3 drop-shadow-[0_0_30px_rgba(126,58,242,0.15)]">Signature</span>
              </h2>

              <p className="text-black/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed font-outfit italic">
                Join <span className="text-black font-bold not-italic font-inter">50,000+ collectors</span> who have manifested their deepest emotions into enduring physical reality.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center group-hover/item:bg-black group-hover/item:text-white transition-all bg-white shadow-sm">
                       <Lock size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Secured Origin</span>
                 </div>
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center group-hover/item:bg-black group-hover/item:text-white transition-all bg-white shadow-sm">
                       <Heart size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Heritage Source</span>
                 </div>
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center group-hover/item:bg-black group-hover/item:text-black transition-all bg-white shadow-sm">
                       <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Premium Elite</span>
                 </div>
              </div>
           </div>

           {/* Right Action Cluster */}
           <div className="flex flex-col gap-6 w-full lg:w-auto min-w-[320px]">
              <Link href="/shop" className="group relative px-8 py-5 bg-black text-white font-bold rounded-[28px] transition-all hover:scale-105 flex items-center gap-6 shadow-2xl hover:shadow-black/20 group/btn">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-accent-violet transition-colors">
                    <Wand2 size={22} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                 </div>
                 <div className="text-left flex-1">
                    <p className="text-xl tracking-tight leading-none text-white">Enter The Studio</p>
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mt-1.5 font-inter">ID Protocol v2.2</p>
                 </div>
                 <ArrowRight size={22} className="group-hover/btn:translate-x-1.5 transition-transform duration-500 text-accent-violet" />
              </Link>
              
              <Link href="/about" className="px-8 py-4 rounded-[24px] glass-lvl-1 border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-black/40 hover:text-black hover:glass-lvl-3 transition-all text-center bg-white/40">
                 Discover Heritage
              </Link>
           </div>
        </motion.div>
      </div>

      {/* Atmospheric Glow */}
      <motion.div 
         animate={{ x: [-20, 20, -20], scale: [1, 1.1, 1] }}
         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/[0.05] rounded-full blur-[140px] -z-10" 
      />
    </section>
  );
}
