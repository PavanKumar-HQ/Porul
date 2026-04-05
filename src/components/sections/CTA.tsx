"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 px-8 relative overflow-hidden bg-black text-white group/cta-section">
      {/* Space Utilization: Inverted Global Backdrop */}
      <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFFFFF05_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF05_1px,transparent_1px)] bg-[size:60px_60px]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] uppercase tracking-tighter select-none pointer-events-none group-hover/cta-section:text-accent-violet/[0.04] transition-colors duration-1000">MANIFEST</div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="glass-lvl-3 px-10 py-12 md:px-20 md:py-16 rounded-[56px] border border-white/10 relative overflow-hidden shadow-[0_48px_120px_-20px_rgba(0,0,0,0.8)] bg-black/80 group/card flex flex-col lg:flex-row items-center justify-between gap-12"
        >
           {/* Left Content Cluster (Increased Contrast & Visibility) */}
           <div className="flex-1 text-center lg:text-left space-y-6">
              <motion.div
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border border-white/20 text-[10px] font-black tracking-[0.4em] text-accent-violet uppercase bg-black/40"
              >
                <Sparkles size={14} className="animate-pulse" />
                The Final Chapter
              </motion.div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tighter text-white leading-[0.85] select-none">
                Manifest Your <br />
                <span className="text-accent-violet italic pr-3 drop-shadow-[0_0_30px_rgba(126,58,242,0.3)]">Signature</span>
              </h2>

              <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed font-outfit italic">
                Join <span className="text-white font-bold not-italic">50,000+ collectors</span> who have manifested their deepest emotions into enduring physical reality.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full glass-lvl-1 border border-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black transition-all">
                       <Lock size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Secured Origin</span>
                 </div>
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full glass-lvl-1 border border-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black transition-all">
                       <Heart size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Heritage Source</span>
                 </div>
                 <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full glass-lvl-1 border border-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black transition-all">
                       <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Premium Elite</span>
                 </div>
              </div>
           </div>

           {/* Right Action Cluster */}
           <div className="flex flex-col gap-6 w-full lg:w-auto min-w-[320px]">
              <Link href="/shop" className="group relative px-8 py-5 bg-white text-black font-bold rounded-[28px] transition-all hover:scale-105 flex items-center gap-6 shadow-2xl hover:shadow-white/20 group/btn">
                 <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white group-hover:bg-accent-violet transition-colors">
                    <Wand2 size={22} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                 </div>
                 <div className="text-left flex-1">
                    <p className="text-xl tracking-tight leading-none text-black">Enter The Studio</p>
                    <p className="text-[9px] font-black text-black/30 uppercase tracking-[0.2em] mt-1.5 font-inter">ID Protocol v2.2</p>
                 </div>
                 <ArrowRight size={22} className="group-hover/btn:translate-x-1.5 transition-transform duration-500 text-accent-violet" />
              </Link>
              
              <Link href="/about" className="px-8 py-4 rounded-[20px] glass-lvl-1 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white hover:glass-lvl-3 transition-all text-center">
                 Discover Heritage
              </Link>
           </div>
        </motion.div>
      </div>

      {/* Decorative Gloss (Increased contrast for "Proper" look) */}
      <motion.div 
         animate={{ x: [-20, 20, -20], scale: [1, 1.1, 1] }}
         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[140px] -z-10" 
      />
    </section>
  );
}
