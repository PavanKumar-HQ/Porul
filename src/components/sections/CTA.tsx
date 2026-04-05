"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-8 relative overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Background Artifacts (Subtle Overlay) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center -z-10">
         <span className="text-[10vw] font-black text-black uppercase tracking-tighter select-none rotate-2">MANIFEST</span>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
         <motion.div
           animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-[20%] left-[12%] w-32 h-32 grayscale opacity-20 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[24px] overflow-hidden border border-black/5 p-3 bg-white shadow-lg">
               <img src="/planner.png" alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
           transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute bottom-[20%] right-[12%] w-40 h-40 grayscale opacity-20 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[32px] overflow-hidden border border-black/5 p-3 bg-white shadow-lg">
               <img src="/mug.png" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
         </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto glass-lvl-3 px-10 py-20 rounded-[48px] border border-black/5 text-center relative overflow-hidden shadow-[0_24px_60px_-24px_rgba(0,0,0,0.06)] bg-white group/card">
        {/* Soft Alabaster Orbs */}
        <motion.div 
           animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 left-0 w-48 h-48 bg-accent-violet/[0.03] rounded-full blur-[80px] -z-10" 
        />
        <motion.div 
           animate={{ x: 10, y: 10 }}
           transition={{ duration: 12, repeat: Infinity, delay: 6, ease: "easeInOut" }}
           className="absolute bottom-0 right-0 w-48 h-48 bg-accent-blue/[0.03] rounded-full blur-[80px] -z-10" 
        />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border border-black/5 text-[8px] font-black tracking-[0.4em] text-accent-violet mb-10 uppercase shadow-sm bg-white"
        >
          <Sparkles size={10} className="animate-pulse" />
          The Final Chapter of Your Story
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3 mb-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[64px] font-bold font-outfit tracking-tighter text-black leading-tight select-none">
            Manifest Your <br />
            <span className="text-black/10 group-hover/card:text-accent-violet transition-colors duration-1000 italic pr-2">Signature</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8 opacity-25">
             <div className="flex items-center gap-1.5">
                <Lock size={10} />
                <span className="text-[7px] font-black uppercase tracking-widest text-black">Secured</span>
             </div>
             <div className="w-0.5 h-0.5 rounded-full bg-black/15" />
             <div className="flex items-center gap-1.5">
                <Heart size={10} />
                <span className="text-[7px] font-black uppercase tracking-widest text-black">Heritage</span>
             </div>
             <div className="w-0.5 h-0.5 rounded-full bg-black/15" />
             <div className="flex items-center gap-1.5">
                <Star size={10} fill="currentColor" />
                <span className="text-[7px] font-black uppercase tracking-widest text-black">Elite</span>
             </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-black/40 text-base md:text-lg max-w-xl mx-auto mb-14 font-extralight leading-relaxed font-outfit italic"
        >
          Join <span className="text-black font-bold not-italic">50,000+ collectors</span> who have translated their deepest emotions into enduring physical heirs. The Porul Atelier is now open for your manifest signature.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
           <Link href="/shop" className="group relative px-8 py-5 bg-black text-white font-bold rounded-[24px] transition-all hover:scale-105 flex items-center gap-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)] hover:shadow-black/20 group/btn">
              <Wand2 size={18} className="group-hover/btn:rotate-12 transition-transform duration-500" />
              <div className="text-left">
                 <p className="text-sm tracking-tight leading-none">Enter The Atelier Studio</p>
                 <p className="text-[7px] font-bold text-white/20 uppercase tracking-[0.2em] mt-1">Atelier Identification Protocol</p>
              </div>
              <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform duration-500 text-accent-violet" />
           </Link>
           
           <Link href="/about" className="px-6 py-4 rounded-[20px] glass-lvl-1 border border-black/5 text-[8px] font-black uppercase tracking-[0.3em] text-black/30 hover:text-black hover:glass-lvl-2 transition-all">
              Discover Heritage
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
