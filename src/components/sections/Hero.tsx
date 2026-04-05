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

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yArtifactR = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBgLabel = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Background Infrastructure */}
      <motion.div 
         style={{ y: yGrid }}
         className="absolute inset-0 bg-[linear-gradient(to_right,#0000000F_1px,transparent_1px),linear-gradient(to_bottom,#0000000F_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" 
      />
      
      <motion.div 
         style={{ y: yBgLabel, opacity: opacityFade }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-black/[0.04] uppercase tracking-tighter select-none pointer-events-none"
      >
         HEIRLOOM
      </motion.div>

      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 58, 242, 0.2), transparent 80%)`
        }}
      />

      <div className="relative z-20 w-full max-w-[1400px] px-8 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
        <motion.div style={{ y: yText, opacity: opacityFade }} className="flex-1 space-y-12">
           <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/30 text-[11px] font-black tracking-[0.5em] text-black uppercase mb-8 shadow-sm bg-white"
           >
              Identity Protocol
           </motion.div>

           <div className="space-y-10">
             <h1 className="text-[64px] md:text-[96px] lg:text-[110px] font-bold font-outfit leading-none tracking-tighter text-black select-none uppercase">
                Digital <span className="text-black/50 italic"><TypewriterText text="Heirloom" /></span>
             </h1>
             
             <div className="h-12 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                   <motion.p 
                     key={currentMessage}
                     initial={{ y: 5, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: -5, opacity: 0 }}
                     className="text-2xl md:text-3xl font-medium text-black/80 italic tracking-tight font-outfit"
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
              <Link href="/shop" className="group relative px-12 py-7 rounded-[28px] bg-black text-white font-black uppercase tracking-[0.3em] flex items-center gap-6 transition-all hover:scale-105 shadow-2xl hover:bg-accent-violet text-[12px]">
                 Enter Studio
                 <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/my-creations" className="group px-12 py-7 rounded-[28px] border border-black/30 font-black uppercase tracking-[0.3em] flex items-center gap-6 hover:bg-black hover:text-white transition-all duration-500 shadow-sm text-black text-[12px]">
                 <Wand2 size={18} />
                 Manifest Profile
              </Link>
           </motion.div>
        </motion.div>

        {/* Technical Data Display - MAX Contrast */}
        <motion.div style={{ y: yArtifactR }} className="flex-1 hidden lg:flex flex-col gap-12 items-end">
           <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-lvl-3 p-10 rounded-[64px] border border-black/30 w-[520px] space-y-12 relative overflow-hidden shadow-2xl bg-white"
           >
              <div className="flex justify-between items-start">
                 <div className="w-16 h-16 rounded-[28px] bg-black flex items-center justify-center text-white shadow-xl">
                    <Terminal size={32} />
                 </div>
                 <span className="text-[11px] font-black uppercase tracking-widest text-black">SECTOR-PROT: V3.1</span>
              </div>
              
              <div className="space-y-6">
                 <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden">
                    <motion.div 
                       animate={{ x: ["-100%", "100%"] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                       className="h-full w-1/3 bg-black" 
                    />
                 </div>
                 <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.5em] text-black">
                    <span className="font-bold">SIG FIDELITY</span>
                    <span className="font-bold">98% OPTIMAL</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 <div className="p-8 rounded-[36px] bg-[#F0F7FF] border border-black/20 shadow-sm">
                    <ShieldCheck size={28} className="text-black mb-4" />
                    <p className="text-[11px] font-black uppercase tracking-widest text-black/80 mb-2 font-inter">Secured</p>
                    <p className="text-lg font-bold text-black uppercase tracking-tight">ENCRYPTED</p>
                 </div>
                 <div className="p-8 rounded-[36px] bg-[#FAF5FF] border border-black/20 shadow-sm">
                    <Box size={28} className="text-black mb-4" />
                    <p className="text-[11px] font-black uppercase tracking-widest text-black/80 mb-2 font-inter">Verified</p>
                    <p className="text-lg font-bold text-black uppercase tracking-tight">ARCHIVED</p>
                 </div>
              </div>

              <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-black/[0.05] -rotate-12 select-none pointer-events-none">SIGN</div>
           </motion.div>
           
           <div className="flex gap-8 items-center pr-12">
              <span className="text-[12px] font-black uppercase tracking-[0.5em] text-black font-inter">Manifest Registry protocol</span>
              <div className="w-20 h-px bg-black/40" />
           </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-10 flex items-center gap-10 text-black"
      >
        <span className="text-[12px] font-black uppercase tracking-[1em]">Explore Registry</span>
        <div className="w-16 h-px bg-black/40" />
      </motion.div>
    </section>
  );
}
