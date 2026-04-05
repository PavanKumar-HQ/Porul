"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, ChevronRight, Wand2, ShieldCheck, Crown, Terminal, Box, Fingerprint } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const messages = [
  "Crafted for Your Signature",
  "Manifest Your Identity",
  "Designed by Your Emotion",
  "The Atelier of One"
];

const TypewriterText = ({ text }: { text: string }) => {
  const characters = Array.from(text);
  
  return (
    <motion.span className="inline-block">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.1, delay: i * 0.05 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Diverse Parallax Transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yArtifactR = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Dynamic Aura */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        animate={{
          background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 112, 243, 0.05), transparent 80%)`
        }}
      />
      
      {/* Single Architectural Axis (Subtle) */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-black/[0.02] pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-black/[0.02] pointer-events-none" />

      <div className="relative z-20 w-full max-w-[1400px] px-8 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
        <motion.div style={{ y: yText, opacity: opacityFade, scale: scaleText }} className="flex-1 space-y-10">
           <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/[0.05] text-[10px] font-black tracking-[0.5em] text-accent-violet mb-4 shadow-sm bg-white"
           >
              <Fingerprint size={14} className="animate-pulse" />
              Manifestation Protocol Active
           </motion.div>

           <div className="space-y-4">
             <h1 className="text-[64px] md:text-[100px] lg:text-[130px] font-bold font-outfit leading-[0.75] tracking-tighter text-black select-none group">
               Digital <br />
               <span className="relative">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 via-black/40 to-black/10 italic group-hover:from-black group-hover:via-black/60 group-hover:to-black/20 transition-all duration-1000">
                    <TypewriterText text="Heirloom" />
                 </span>
                 <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 2, ease: "circOut" }}
                    className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent origin-left" 
                 />
               </span>
             </h1>
             
             <div className="h-16 flex items-center justify-center lg:justify-start text-black/30">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentMessage}
                    initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="text-2xl md:text-4xl font-extralight italic tracking-tight font-outfit"
                  >
                    {messages[currentMessage]}
                  </motion.p>
                </AnimatePresence>
             </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.2 }}
             className="mt-16 flex flex-col sm:flex-row gap-8 items-center lg:justify-start"
           >
             <Link href="/shop" className="group relative px-14 py-8 rounded-[40px] bg-black text-white font-bold flex items-center gap-7 transition-all hover:scale-105 active:scale-95 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.3)] hover:shadow-black/40 text-xl border-t border-white/10">
                Enter Studio
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/5 border border-white/10">
                   <ChevronRight size={26} />
                </div>
             </Link>
             <Link href="/my-creations" className="group px-14 py-8 rounded-[36px] bg-white border border-black/[0.08] font-bold flex items-center gap-5 hover:border-accent-violet transition-all duration-700 shadow-sm text-black/40 hover:text-black">
                <Wand2 size={24} className="text-accent-violet opacity-40 group-hover:opacity-100 transition-opacity" />
                Manifest Profile
             </Link>
          </motion.div>
        </motion.div>

        {/* Improved Technical Data Display */}
        <motion.div style={{ y: yArtifactR }} className="flex-1 hidden lg:flex flex-col gap-12 items-end">
           <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-12 rounded-[72px] border border-black/[0.04] w-[540px] space-y-12 relative overflow-hidden shadow-[0_48px_100px_-30px_rgba(0,0,0,0.06)] bg-white group/data"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/[0.02] to-transparent opacity-0 group-hover/data:opacity-100 transition-opacity duration-1000" />
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                 <div className="w-20 h-20 rounded-[28px] bg-black flex items-center justify-center text-white shadow-2xl group-hover/data:scale-105 transition-transform duration-700">
                    <Terminal size={40} />
                 </div>
                 <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-[0.8em] text-black/10 group-hover/data:text-black/30 transition-colors">Manifesto OS</span>
                    <p className="text-sm font-bold text-black/40 mt-2">KERNEL.V3.1.2</p>
                 </div>
              </div>
              
              <div className="space-y-8 relative z-10">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.5em] text-black/20">
                    <span>Sig. Alignment</span>
                    <span className="text-accent-blue/40">Verified Protocols</span>
                 </div>
                 <div className="h-2 w-full bg-black/[0.03] rounded-full overflow-hidden">
                    <motion.div 
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                       className="h-full w-1/4 bg-black/60 rounded-full" 
                    />
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-10 relative z-10">
                 <div className="p-10 rounded-[40px] bg-[#F0F7FF]/50 border border-black/[0.02] shadow-sm hover:border-accent-blue/10 transition-colors">
                    <ShieldCheck size={32} className="text-accent-blue mb-6 opacity-20" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/10 mb-2">Vault</p>
                    <p className="text-lg font-bold text-black/50">SECURED</p>
                 </div>
                 <div className="p-10 rounded-[40px] bg-[#FAF5FF]/50 border border-black/[0.02] shadow-sm hover:border-accent-violet/10 transition-colors">
                    <Box size={32} className="text-accent-violet mb-6 opacity-20" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/10 mb-2">Registry</p>
                    <p className="text-lg font-bold text-black/50">12,854+ Manifests</p>
                 </div>
              </div>
           </motion.div>
           
           <div className="flex items-center gap-10 pr-16 opacity-10 group-hover/data:opacity-30 transition-opacity">
              <span className="text-[9px] font-black uppercase tracking-[1em]">Identity Lock</span>
              <div className="w-32 h-px bg-black" />
           </div>
        </motion.div>
      </div>

      {/* Floating Artifact Indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-12 flex flex-col gap-6 text-black/20"
      >
        <div className="flex items-center gap-6">
           <span className="text-[11px] font-black uppercase tracking-[1em]">Explore</span>
           <div className="w-48 h-px bg-black/[0.1]" />
        </div>
        <div className="flex gap-10">
           <span className="text-[8px] font-bold uppercase tracking-[0.4em]">Section 00 // Intro</span>
           <span className="text-[8px] font-bold uppercase tracking-[0.4em]">Sector Grid Null</span>
        </div>
      </motion.div>
    </section>
  );
}
