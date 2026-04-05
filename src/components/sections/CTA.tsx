"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, Star, Lock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-60 px-8 relative overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Background Artifacts (Space Utilization) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center -z-10">
         <span className="text-[20vw] font-black text-black/[0.03] uppercase tracking-tighter select-none rotate-6">MANIFEST</span>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
         <motion.div
           animate={{ y: [0, -40, 0], rotate: [0, 12, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-[10%] left-[5%] w-64 h-64 grayscale group-hover:grayscale-0 transition-all opacity-40 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[40px] overflow-hidden border border-black/5 p-4 flex items-center justify-center bg-white shadow-2xl">
               <img src="/planner.png" alt="" className="w-full h-full object-cover rounded-3xl" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 40, 0], rotate: [0, -12, 0] }}
           transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
           className="absolute bottom-[10%] right-[5%] w-72 h-72 grayscale group-hover:grayscale-0 transition-all opacity-40 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[56px] overflow-hidden border border-black/5 p-4 flex items-center justify-center bg-white shadow-2xl">
               <img src="/mug.png" alt="" className="w-full h-full object-cover rounded-[32px]" />
            </div>
         </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto glass-lvl-3 px-16 py-32 md:px-32 rounded-[80px] border border-black/5 text-center relative overflow-hidden shadow-[0_48px_100px_-24px_rgba(0,0,0,0.12)] bg-white group/card">
        {/* Soft Alabaster Orbs */}
        <motion.div 
           animate={{ x: [-25, 25, -25], y: [-25, 25, -25] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 left-0 w-96 h-96 bg-accent-violet/5 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
           animate={{ x: [25, -25, 25], y: [25, -25, 25] }}
           transition={{ duration: 12, repeat: Infinity, delay: 6, ease: "easeInOut" }}
           className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" 
        />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-4 px-8 py-3 rounded-full glass-lvl-1 border border-black/5 text-[11px] font-black tracking-[0.6em] text-accent-violet mb-16 uppercase shadow-sm bg-white"
        >
          <Sparkles size={16} className="animate-pulse" />
          The Final Chapter of Your Story
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 mb-16"
        >
          <h2 className="text-7xl md:text-[140px] font-bold font-outfit tracking-tighter text-black leading-[0.8] select-none">
            Manifest Your<br />
            <span className="text-black/10 group-hover/card:text-accent-violet transition-colors duration-1000 italic pr-4">Signature</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mt-12 opacity-40">
             <div className="flex items-center gap-2">
                <Lock size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Secured Origin</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
             <div className="flex items-center gap-2">
                <Heart size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Heritage Source</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
             <div className="flex items-center gap-2">
                <Star size={14} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-widest">Premium Handcrafted</span>
             </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-black/40 text-2xl md:text-3xl max-w-3xl mx-auto mb-20 font-extralight leading-tight font-outfit italic"
        >
          Join <span className="text-black font-bold not-italic">50,000+ collectors</span> who have translated their deepest emotions into enduring physical heirs. The Porul Atelier is now open for your manifest signature.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
           <Link href="/shop" className="group relative px-20 py-10 bg-black text-white font-bold rounded-[48px] transition-all hover:scale-105 flex items-center gap-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] hover:shadow-black/20 group/btn">
              <Wand2 size={28} className="group-hover/btn:rotate-12 transition-transform duration-500" />
              <div className="text-left">
                 <p className="text-xl tracking-tight leading-none">Enter The Atelier Studio</p>
                 <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">Protocol Identification Required</p>
              </div>
              <ArrowRight size={28} className="group-hover/btn:translate-x-3 transition-transform duration-500 text-accent-violet" />
           </Link>
           
           <Link href="/about" className="px-10 py-6 rounded-[32px] glass-lvl-1 border border-black/5 text-[11px] font-black uppercase tracking-[0.4em] text-black/30 hover:text-black hover:glass-lvl-3 transition-all">
              Discover Heritage
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
