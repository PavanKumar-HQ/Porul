"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-40 px-8 relative overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Background Artifacts */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center -z-10">
         <span className="text-[15vw] font-black text-black/[0.03] uppercase tracking-tighter select-none rotate-3">MANIFEST</span>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
         <motion.div
           animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-[15%] left-[8%] w-48 h-48 grayscale opacity-30 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[32px] overflow-hidden border border-black/5 p-4 bg-white shadow-xl">
               <img src="/planner.png" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
           transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute bottom-[15%] right-[8%] w-56 h-56 grayscale opacity-30 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[40px] overflow-hidden border border-black/5 p-4 bg-white shadow-xl">
               <img src="/mug.png" alt="" className="w-full h-full object-cover rounded-[24px]" />
            </div>
         </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto glass-lvl-3 px-12 py-24 md:px-24 rounded-[64px] border border-black/5 text-center relative overflow-hidden shadow-[0_32px_80px_-24px_rgba(0,0,0,0.08)] bg-white group/card">
        {/* Soft Alabaster Orbs */}
        <motion.div 
           animate={{ x: [-15, 15, -15], y: [-15, 15, -15] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 left-0 w-64 h-64 bg-accent-violet/5 rounded-full blur-[100px] -z-10" 
        />
        <motion.div 
           animate={{ x: [15, -15, 15], y: [15, -15, 15] }}
           transition={{ duration: 12, repeat: Infinity, delay: 6, ease: "easeInOut" }}
           className="absolute bottom-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[100px] -z-10" 
        />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-lvl-1 border border-black/5 text-[9px] font-black tracking-[0.5em] text-accent-violet mb-12 uppercase shadow-sm bg-white"
        >
          <Sparkles size={12} className="animate-pulse" />
          The Final Chapter of Your Story
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-5xl md:text-8xl font-bold font-outfit tracking-tighter text-black leading-[0.9] select-none">
            Manifest Your<br />
            <span className="text-black/10 group-hover/card:text-accent-violet transition-colors duration-1000 italic pr-3">Signature</span>
          </h2>
          <div className="flex items-center justify-center gap-5 mt-10 opacity-30">
             <div className="flex items-center gap-2">
                <Lock size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest text-black">Secured Origin</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-black/10" />
             <div className="flex items-center gap-2">
                <Heart size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest text-black">Heritage Source</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-black/10" />
             <div className="flex items-center gap-2">
                <Star size={12} fill="currentColor" />
                <span className="text-[8px] font-black uppercase tracking-widest text-black">Premium Quality</span>
             </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-black/40 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-extralight leading-relaxed font-outfit italic"
        >
          Join <span className="text-black font-bold not-italic">50,000+ collectors</span> who have translated their deepest emotions into enduring physical heirs. The Porul Atelier is now open for your manifest signature.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
           <Link href="/shop" className="group relative px-12 py-7 bg-black text-white font-bold rounded-[32px] transition-all hover:scale-105 flex items-center gap-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-black/20 group/btn">
              <Wand2 size={22} className="group-hover/btn:rotate-12 transition-transform duration-500" />
              <div className="text-left">
                 <p className="text-base tracking-tight leading-none">Enter The Atelier Studio</p>
                 <p className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1.5">Protocol Identification Required</p>
              </div>
              <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform duration-500 text-accent-violet" />
           </Link>
           
           <Link href="/about" className="px-8 py-5 rounded-[24px] glass-lvl-1 border border-black/5 text-[9px] font-black uppercase tracking-[0.3em] text-black/30 hover:text-black hover:glass-lvl-3 transition-all">
              Discover Heritage
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
