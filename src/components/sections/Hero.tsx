"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, ChevronRight, Wand2, ShieldCheck, Crown, Terminal, Box } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yArtifactR = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Removed Grids & Watermarks for Clean Experience */}
      
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 58, 242, 0.08), transparent 80%)`
        }}
      />

      <div className="relative z-20 w-full max-w-[1400px] px-8 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
        <motion.div style={{ y: yText, opacity: opacityFade }} className="flex-1 space-y-8">
           <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass-lvl-1 border border-black/5 text-[10px] font-black tracking-[0.5em] text-accent-violet mb-12 shadow-sm bg-white"
           >
              <Crown size={14} className="animate-pulse" />
              The New Standard of Personal Luxury
           </motion.div>

           <div className="space-y-8">
             <h1 className="text-[64px] md:text-[96px] lg:text-[115px] font-bold font-outfit leading-[0.8] tracking-tighter text-black select-none">
               Digital <br />
               <span className="text-black/10 italic">
                 <TypewriterText text="Heirloom" />
               </span>
             </h1>
             
             <div className="h-12 flex items-center justify-center lg:justify-start text-black/40">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentMessage}
                    initial={{ y: 10, opacity: 0, filter: "blur(2px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -10, opacity: 0, filter: "blur(2px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-3xl font-extralight italic tracking-tight font-outfit"
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
             className="mt-20 flex flex-col sm:flex-row gap-6 items-center lg:justify-start"
           >
             <Link href="/shop" className="group relative px-12 py-7 rounded-[32px] bg-black text-white font-bold flex items-center gap-7 transition-all hover:scale-105 shadow-2xl hover:shadow-black/20 text-lg">
                Enter The Studio
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                   <ChevronRight size={22} />
                </div>
             </Link>
             <Link href="/my-creations" className="group px-12 py-7 rounded-[28px] glass-lvl-1 border border-black/10 font-bold flex items-center gap-5 hover:glass-lvl-3 transition-all duration-500 shadow-sm text-black/40 hover:text-black">
                <Wand2 size={20} className="text-accent-violet" />
                Manifest Profile
             </Link>
          </motion.div>
        </div>

        {/* Technical Data Display - Refined & Clean */}
        <motion.div style={{ y: yArtifactR }} className="flex-1 hidden lg:flex flex-col gap-12 items-end">
           <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-10 rounded-[56px] border border-black/5 w-[520px] space-y-10 relative overflow-hidden shadow-2xl bg-white"
           >
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white">
                    <Terminal size={32} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-black/20">Protocol v3.1</span>
              </div>
              
              <div className="space-y-6">
                 <div className="h-1.5 w-full bg-black/[0.03] rounded-full overflow-hidden">
                    <motion.div 
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                       className="h-full w-1/3 bg-accent-violet/60" 
                    />
                 </div>
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-black/30">
                    <span>Rendering Identity</span>
                    <span className="text-accent-violet/60">98% Sig. Fidelity</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-10">
                 <div className="p-8 rounded-3xl bg-[#F0F7FF]/30 border border-black/[0.03] shadow-sm">
                    <ShieldCheck size={24} className="text-accent-blue mb-4 opacity-40" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/20 mb-1">Security</p>
                    <p className="text-base font-bold text-black/60">ENCRYPTED</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-[#FAF5FF]/30 border border-black/[0.03] shadow-sm">
                    <Box size={24} className="text-accent-violet mb-4 opacity-40" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/20 mb-1">Manifest</p>
                    <p className="text-base font-bold text-black/60">12.8K UNITS</p>
                 </div>
              </div>
           </motion.div>
           
           <div className="flex gap-8 group/socials pr-12">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-black/10 group-hover/socials:text-black/30 transition-colors cursor-default">Manifestation ID: Protocol_001</span>
              <div className="w-16 h-px bg-black/5 mt-2" />
           </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-10 flex items-center gap-6 text-black/10"
      >
        <span className="text-[11px] font-black uppercase tracking-[1em]">Scroll</span>
        <div className="w-24 h-px bg-black/[0.05]" />
      </motion.div>
    </section>
  );
}
