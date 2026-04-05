"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, ChevronRight, Wand2, ShieldCheck, Crown, Terminal, Box } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
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

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Improvised Space Optimization: Architectural Blueprint Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/[0.015] uppercase tracking-tighter select-none pointer-events-none">HEIRLOOM</div>

      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-25"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 58, 242, 0.12), transparent 80%)`
        }}
      />

      <div className="relative z-20 w-full max-w-[1400px] px-8 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
        <div className="flex-1 space-y-8">
           <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black tracking-[0.5em] text-accent-violet mb-12 shadow-sm bg-white"
           >
              <Crown size={14} className="animate-pulse" />
              The New Standard of Personal Luxury
           </motion.div>

           <motion.div style={{ y: y1, opacity }} className="space-y-8">
             <h1 className="text-[64px] md:text-[96px] lg:text-[110px] font-bold font-outfit leading-[0.8] tracking-tighter text-black select-none">
               Digital <br />
               <span className="text-black/20 italic">
                 <TypewriterText text="Heirloom" />
               </span>
             </h1>
             
             <div className="h-12 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentMessage}
                    initial={{ y: 10, opacity: 0, filter: "blur(2px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -10, opacity: 0, filter: "blur(2px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-4xl font-extralight text-black/50 italic tracking-tight font-outfit"
                  >
                    {messages[currentMessage]}
                  </motion.p>
                </AnimatePresence>
             </div>
           </motion.div>

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

        {/* Improved Horizontal Layout: Technical Data Display */}
        <div className="flex-1 hidden lg:flex flex-col gap-12 items-end">
           <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-lvl-3 p-10 rounded-[56px] border border-black/10 w-[480px] space-y-8 relative overflow-hidden"
           >
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white">
                    <Terminal size={32} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Protocol v3.1</span>
              </div>
              <div className="space-y-4">
                 <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       className="h-full w-1/3 bg-accent-violet" 
                    />
                 </div>
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
                    <span>Rendering Identity</span>
                    <span className="text-accent-violet">98% Signature</span>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                 <div className="p-6 rounded-3xl bg-[#F0F7FF]/40 border border-black/5">
                    <ShieldCheck size={20} className="text-accent-blue mb-3" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-black/30">Vault Status</p>
                    <p className="text-sm font-bold text-black mt-1">SECURED</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-[#FAF5FF]/40 border border-black/5">
                    <Box size={20} className="text-accent-violet mb-3" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-black/30">Manifest Count</p>
                    <p className="text-sm font-bold text-black mt-1">12K+</p>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-black/[0.015] -rotate-12 select-none pointer-events-none">SIGN</div>
           </motion.div>
           
           <div className="flex gap-8 group/socials">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-black/20 group-hover/socials:text-black/40 transition-colors">Protocol Identity (Manifesto)</span>
              <div className="w-20 h-px bg-black/10 mt-1.5" />
           </div>
        </div>
      </div>

      {/* Floating Status Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-black/20"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.8em]">Atelier Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
