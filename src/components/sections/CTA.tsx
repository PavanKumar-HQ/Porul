"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-8 relative overflow-hidden bg-black text-white group/cta-section">
      {/* Cinematic Background Artifacts (Space Maximization) */}
      <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFFFFF05_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF05_1px,transparent_1px)] bg-[size:60px_60px]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.015] uppercase tracking-tighter select-none pointer-events-none group-hover/cta-section:text-accent-violet/[0.03] transition-colors duration-1000">MANIFEST</div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="glass-lvl-3 px-12 py-16 rounded-[48px] border border-white/10 relative overflow-hidden shadow-[0_48px_120px_-20px_rgba(0,0,0,0.8)] bg-black/60 group/card flex flex-col lg:flex-row items-center justify-between gap-16"
        >
           {/* Left Content Cluster (Wide Layout) */}
           <div className="flex-1 text-center lg:text-left space-y-8">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border border-white/10 text-[9px] font-black tracking-[0.4em] text-accent-violet uppercase shadow-sm bg-black/40"
              >
                <Sparkles size={12} className="animate-pulse" />
                The Final Chapter
              </motion.div>

              <h2 className="text-4xl md:text-[64px] font-bold font-outfit tracking-tighter text-white leading-[0.9] select-none">
                Manifest Your <br />
                <span className="text-white/5 group-hover/card:text-accent-violet transition-colors duration-1000 italic pr-2">Signature</span>
              </h2>

              <p className="text-white/40 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-extralight leading-relaxed font-outfit italic">
                Join <span className="text-white font-bold not-italic">50,000+ collectors</span> who have manifested their deepest emotions into enduring physical reality.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-60">
                 <div className="flex items-center gap-2">
                    <Lock size={12} className="text-white/40" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Secured Origin</span>
                 </div>
                 <div className="w-1 h-1 rounded-full bg-white/10" />
                 <div className="flex items-center gap-2">
                    <Heart size={12} className="text-white/40" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Heritage Source</span>
                 </div>
                 <div className="w-1 h-1 rounded-full bg-white/10" />
                 <div className="flex items-center gap-2">
                    <Star size={12} fill="currentColor" className="text-white/40" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Premium Elite</span>
                 </div>
              </div>
           </div>

           {/* Right Action Cluster (Wide Layout) */}
           <div className="flex flex-col gap-6 w-full lg:w-auto">
              <Link href="/shop" className="group relative px-10 py-6 bg-white text-black font-bold rounded-[28px] transition-all hover:scale-105 flex items-center gap-6 shadow-[0_24px_80px_-15px_rgba(255,255,255,0.2)] hover:shadow-white/20 group/btn">
                 <Wand2 size={24} className="group-hover/btn:rotate-12 transition-transform duration-500 text-accent-violet" />
                 <div className="text-left">
                    <p className="text-lg tracking-tight leading-none">Enter The Studio</p>
                    <p className="text-[9px] font-black text-black/30 uppercase tracking-[0.2em] mt-1.5">Identification Protocol v2.2</p>
                 </div>
                 <ArrowRight size={24} className="group-hover/btn:translate-x-1.5 transition-transform duration-500 text-accent-violet" />
              </Link>
              
              <Link href="/about" className="px-8 py-5 rounded-[24px] glass-lvl-1 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white hover:glass-lvl-3 transition-all text-center">
                 Discover Heritage
              </Link>
           </div>

           {/* Background Highlights for Wide Card */}
           <motion.div 
              animate={{ x: [-20, 20, -20], scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-accent-violet/5 rounded-full blur-[120px] -z-10" 
           />
        </motion.div>
      </div>
    </section>
  );
}
