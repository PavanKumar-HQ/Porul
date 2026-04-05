"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-40 px-8 relative overflow-hidden bg-[#FDFDFD]">
      <div className="absolute inset-0 bg-accent-blue/[0.03] blur-[180px] -z-10" />
      
      <div className="max-w-7xl mx-auto glass-lvl-3 px-16 py-32 md:px-32 rounded-[72px] border-black/5 text-center relative overflow-hidden shadow-2xl">
        {/* Animated Cinematic Orbs (Soft Alabaster Tints) */}
        <motion.div 
           animate={{ x: [-25, 25, -25], y: [-25, 25, -25] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-10 left-10 w-48 h-48 bg-accent-violet/10 rounded-full blur-[120px]" 
        />
        <motion.div 
           animate={{ x: [25, -25, 25], y: [25, -25, 25] }}
           transition={{ duration: 12, repeat: Infinity, delay: 6, ease: "easeInOut" }}
           className="absolute bottom-10 right-10 w-48 h-48 bg-accent-blue/10 rounded-full blur-[120px]" 
        />

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-lvl-1 border-black/5 text-[11px] font-bold tracking-[0.5em] text-accent-violet mb-12 uppercase shadow-sm"
        >
          <Sparkles size={16} className="animate-pulse" />
          The Final Chapter of Your Story
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[100px] font-bold font-outfit mb-12 tracking-tighter text-black leading-[0.9]"
        >
          Manifest Your <br />
          <span className="text-black/30 italic">Signature</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-black/60 text-2xl max-w-2xl mx-auto mb-20 font-extralight leading-relaxed font-outfit italic"
        >
          Join 50k+ collectors who have translated their emotion into physical heirs. The Porul Atelier is now open for your manifest.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="flex justify-center"
        >
           <Link href="/shop" className="group relative px-20 py-8 bg-black text-white font-bold rounded-[40px] transition-all hover:scale-105 flex items-center gap-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] hover:shadow-black/20">
              <Wand2 size={24} className="group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-lg tracking-tight">Enter The Atelier Studio</span>
              <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
