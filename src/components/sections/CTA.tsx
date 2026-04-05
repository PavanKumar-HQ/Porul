"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-60 px-8 relative overflow-hidden bg-black text-white group/cta-section">
      {/* Space Utilization: Inverted Global Backdrop */}
      <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFFFFF05_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] shadow-2xl" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] uppercase tracking-tighter select-none pointer-events-none group-hover/cta-section:text-accent-violet/[0.03] transition-colors duration-1000">MANIFEST</div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
         {/* Floating Dark Artifacts */}
         <motion.div
           animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-[15%] left-[5%] w-48 h-48 opacity-20 hover:opacity-50 transition-opacity duration-1000"
         >
            <div className="relative w-full h-full glass-lvl-3 rounded-[32px] overflow-hidden border border-white/5 p-4 bg-black shadow-2xl">
               <img src="/tee.png" alt="" className="w-full h-full object-cover rounded-2xl invert opacity-80" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
           transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute bottom-[15%] right-[5%] w-56 h-56 opacity-20 hover:opacity-50 transition-opacity duration-1000"
         >
            <div className="relative w-full h-full glass-lvl-3 rounded-[40px] overflow-hidden border border-white/5 p-4 bg-black shadow-2xl">
               <img src="/watch.png" alt="" className="w-full h-full object-cover rounded-[24px] invert opacity-80" />
            </div>
         </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto glass-lvl-3 px-12 py-24 md:px-24 rounded-[64px] border border-white/5 text-center relative overflow-hidden shadow-[0_48px_120px_-20px_rgba(0,0,0,0.8)] bg-black/60 group/card">
        {/* Soft Violet Orbs (Dark Context) */}
        <motion.div 
           animate={{ x: [-20, 20, -20], y: [-20, 20, -20], scale: [1, 1.2, 1] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 left-0 w-80 h-80 bg-accent-violet/10 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
           animate={{ x: [20, -20, 20], y: [20, -20, 20], scale: [1, 1.1, 1] }}
           transition={{ duration: 12, repeat: Infinity, delay: 6, ease: "easeInOut" }}
           className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px] -z-10" 
        />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass-lvl-1 border border-white/10 text-[11px] font-black tracking-[0.5em] text-accent-violet mb-12 uppercase shadow-sm"
        >
          <Sparkles size={16} className="animate-pulse" />
          The Final Chapter of Your Story
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-6xl md:text-[100px] font-bold font-outfit tracking-tighter text-white leading-[0.85] select-none">
            Manifest Your<br />
            <span className="text-white/5 group-hover/card:text-accent-violet transition-colors duration-1000 italic pr-3">Signature</span>
          </h2>
          <div className="flex items-center justify-center gap-8 mt-12 opacity-60">
             <div className="flex items-center gap-3 group/item">
                <div className="w-10 h-10 rounded-full glass-lvl-1 border border-white/5 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black transition-all">
                   <Lock size={14} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Secured Protocol</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-white/10" />
             <div className="flex items-center gap-3 group/item">
                <div className="w-10 h-10 rounded-full glass-lvl-1 border border-white/5 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black transition-all">
                   <Heart size={14} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Heritage Source</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-white/10" />
             <div className="flex items-center gap-3 group/item">
                <div className="w-10 h-10 rounded-full glass-lvl-1 border border-white/5 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black transition-all">
                   <Star size={14} fill="currentColor" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Premium Elite</span>
             </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-2xl md:text-3xl max-w-2xl mx-auto mb-20 font-extralight leading-relaxed font-outfit italic"
        >
          Join <span className="text-white font-bold not-italic">50,000+ collectors</span> who have manifested their deepest emotions into physical reality.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
           <Link href="/shop" className="group relative px-12 py-7 bg-white text-black font-bold rounded-[32px] transition-all hover:scale-105 flex items-center gap-7 shadow-[0_24px_80px_-15px_rgba(255,255,255,0.2)] hover:shadow-white/20 group/btn">
              <Wand2 size={24} className="group-hover/btn:rotate-12 transition-transform duration-500 text-accent-violet" />
              <div className="text-left">
                 <p className="text-xl tracking-tight leading-none">Enter The Studio</p>
                 <p className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] mt-2">Protocol Identification Required</p>
              </div>
              <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform duration-500 text-accent-violet" />
           </Link>
           
           <Link href="/about" className="px-10 py-6 rounded-[28px] glass-lvl-1 border border-white/10 text-[11px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white hover:glass-lvl-3 transition-all">
              Discover Heritage
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
