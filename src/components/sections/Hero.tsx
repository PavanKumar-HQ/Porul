"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, ChevronRight, Wand2, Star, ShieldCheck } from "lucide-react";
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
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Mouse-Follow Aura (Enhanced for 'Proper' Look) */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-25"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 58, 242, 0.12), transparent 80%)`
        }}
      />

      <div className="relative z-20 w-full max-w-[1400px] px-8 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        <div className="flex-1 space-y-6">
           <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black tracking-[0.5em] text-accent-violet mb-8 shadow-sm bg-white"
           >
              <ShieldCheck size={14} className="animate-pulse" />
              The New Standard of Personal Luxury
           </motion.div>

           <motion.div style={{ y: y1, opacity }} className="space-y-6">
             <h1 className="text-[56px] md:text-[84px] lg:text-[96px] font-bold font-outfit leading-[0.8] tracking-tighter text-black select-none">
               Digital <br />
               <span className="text-black/20 italic">
                 <TypewriterText text="Heirloom" />
               </span>
             </h1>
             
             <div className="h-10 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentMessage}
                    initial={{ y: 10, opacity: 0, filter: "blur(2px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -10, opacity: 0, filter: "blur(2px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-3xl font-extralight text-black/50 italic tracking-tight font-outfit"
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
             className="mt-16 flex flex-col sm:flex-row gap-5 items-center lg:justify-start"
           >
             <Link href="/shop" className="group relative px-10 py-6 rounded-[28px] bg-black text-white font-bold flex items-center gap-6 transition-all hover:scale-105 shadow-2xl hover:shadow-black/20 text-base">
                Enter The Studio
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 ml-2">
                   <ChevronRight size={18} />
                </div>
             </Link>
             <Link href="/my-creations" className="group px-10 py-6 rounded-[24px] glass-lvl-1 border border-black/10 font-bold flex items-center gap-4 hover:glass-lvl-3 transition-all duration-500 shadow-sm text-black/50 hover:text-black text-sm">
                <Wand2 size={16} className="text-accent-violet" />
                Archive Protocol
             </Link>
          </motion.div>
        </div>

        {/* Right Artifact Preview (Wider + Proper Look) */}
        <div className="flex-1 hidden lg:flex items-center justify-center relative h-[400px]">
           <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 opacity-60 mix-blend-multiply hover:opacity-100 transition-opacity duration-700"
           >
              <div className="relative w-full h-full glass-lvl-1 rounded-[40px] overflow-hidden border border-black/10 p-3 rotate-6 bg-white shadow-2xl">
                 <img src="/tee.png" alt="" className="w-full h-full object-cover rounded-2xl" />
                 <div className="absolute top-4 left-4 w-8 h-8 rounded-full glass-lvl-3 flex items-center justify-center">
                    <Star size={14} className="text-accent-gold" fill="currentColor" />
                 </div>
              </div>
           </motion.div>
           <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute bottom-0 left-0 w-80 h-80 opacity-60 mix-blend-multiply hover:opacity-100 transition-opacity duration-700"
           >
              <div className="relative w-full h-full glass-lvl-1 rounded-[48px] overflow-hidden border border-black/10 p-3 -rotate-6 bg-white shadow-2xl">
                 <img src="/watch.png" alt="" className="w-full h-full object-cover rounded-2xl" />
                 <div className="absolute bottom-4 right-4 text-[8px] font-black uppercase tracking-widest text-black/30">Protocol Verified</div>
              </div>
           </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-10 flex items-center gap-4 text-black/20"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Atelier Studio v2.2</span>
        <div className="w-20 h-px bg-black/10" />
      </motion.div>
    </section>
  );
}
