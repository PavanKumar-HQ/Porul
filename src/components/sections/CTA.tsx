"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-8 relative overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Background Artifacts (Increased Contrast for Visibility) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex items-center justify-center -z-10">
         <span className="text-[10vw] font-black text-black uppercase tracking-tighter select-none rotate-2">MANIFEST</span>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
         <motion.div
           animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-[20%] left-[12%] w-32 h-32 opacity-40 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[24px] overflow-hidden border border-black/10 p-3 bg-white shadow-lg">
               <img src="/planner.png" alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
           transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute bottom-[20%] right-[12%] w-40 h-40 opacity-40 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[32px] overflow-hidden border border-black/10 p-3 bg-white shadow-lg">
               <img src="/mug.png" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
         </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto glass-lvl-3 px-10 py-24 rounded-[48px] border border-black/10 text-center relative overflow-hidden shadow-[0_24px_60px_-24px_rgba(0,0,0,0.08)] bg-white group/card">
        {/* Soft Alabaster Orbs (Increased Visibility) */}
        <motion.div 
           animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 left-0 w-64 h-64 bg-accent-violet/[0.05] rounded-full blur-[100px] -z-10" 
        />
        <motion.div 
           animate={{ x: 10, y: 10 }}
           transition={{ duration: 12, repeat: Infinity, delay: 6, ease: "easeInOut" }}
           className="absolute bottom-0 right-0 w-64 h-64 bg-accent-blue/[0.05] rounded-full blur-[100px] -z-10" 
        />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black tracking-[0.4em] text-accent-violet mb-12 uppercase shadow-sm bg-white"
        >
          <Sparkles size={12} className="animate-pulse" />
          The Final Chapter of Your Story
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-outfit tracking-tighter text-black leading-tight select-none">
            Manifest Your <br />
            <span className="text-black/20 group-hover/card:text-accent-violet transition-colors duration-1000 italic pr-2">Signature</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mt-10 opacity-60">
             <div className="flex items-center gap-2">
                <Lock size={12} className="text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Secured Protocol</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-black/30" />
             <div className="flex items-center gap-2">
                <Heart size={12} className="text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Heritage Source</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-black/30" />
             <div className="flex items-center gap-2">
                <Star size={12} fill="currentColor" className="text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Elite Handcraft</span>
             </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-black/60 text-lg md:text-xl max-w-xl mx-auto mb-16 font-light leading-relaxed font-outfit italic"
        >
          Join <span className="text-black font-bold not-italic">50,000+ collectors</span> who have translated their deepest emotions into enduring physical heirs. The Porul Atelier is now open for your manifest signature.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
           <Link href="/shop" className="group relative px-10 py-6 bg-black text-white font-bold rounded-[32px] transition-all hover:scale-105 flex items-center gap-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] hover:shadow-black/20 group/btn">
              <Wand2 size={20} className="group-hover/btn:rotate-12 transition-transform duration-500 text-accent-violet" />
              <div className="text-left">
                 <p className="text-base tracking-tight leading-none">Enter The Atelier Studio</p>
                 <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mt-1.5">Atelier Identification Required</p>
              </div>
              <ArrowRight size={20} className="group-hover/btn:translate-x-1.5 transition-transform duration-500 text-accent-violet" />
           </Link>
           
           <Link href="/about" className="px-8 py-5 rounded-[24px] glass-lvl-1 border border-black/20 text-[10px] font-black uppercase tracking-[0.3em] text-black/60 hover:text-black hover:glass-lvl-2 transition-all">
              Discover Heritage
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
