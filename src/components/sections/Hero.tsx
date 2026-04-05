"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, ChevronRight, Wand2 } from "lucide-react";
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
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Mouse-Follow Aura (Alabaster Edition) */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-10"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 58, 242, 0.08), transparent 80%)`
        }}
      />

      {/* Floating Artifacts (Refined Scale) */}
      <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-10">
         <motion.div
           animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[25%] left-[15%] w-32 h-32 md:w-56 md:h-56 opacity-40 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[32px] overflow-hidden border border-black/5 p-3 rotate-12 bg-white shadow-xl">
               <img src="/tee.png" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[20%] right-[12%] w-40 h-40 md:w-64 md:h-64 opacity-40 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-2 rounded-[40px] overflow-hidden border border-black/5 p-3 -rotate-12 bg-white shadow-xl">
               <img src="/watch.png" alt="" className="w-full h-full object-cover rounded-[24px]" />
            </div>
         </motion.div>
      </div>

      <div className="relative z-20 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border border-black/5 text-[9px] font-black tracking-[0.5em] text-accent-violet mb-12 shadow-sm bg-white"
        >
           <Sparkles size={12} className="animate-pulse" />
           The New Standard of Personal Luxury
        </motion.div>

        <motion.div style={{ y: y1, opacity }} className="space-y-8">
          <h1 className="text-[64px] md:text-[110px] font-bold font-outfit leading-[0.9] tracking-tighter text-black select-none">
            Digital<br />
            <span className="text-black/10 italic">
              <TypewriterText text="Heirloom" />
            </span>
          </h1>
          
          <div className="h-12 flex items-center justify-center">
             <AnimatePresence mode="wait">
               <motion.p 
                 key={currentMessage}
                 initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                 animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                 exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-xl md:text-3xl font-extralight text-black/40 italic tracking-tight font-outfit"
               >
                 {messages[currentMessage]}
               </motion.p>
             </AnimatePresence>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link href="/shop" className="group relative px-10 py-6 rounded-[32px] bg-black text-white font-bold flex items-center gap-5 transition-all hover:scale-105 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-black/20 text-base">
             Enter The Atelier Studio
             <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link href="/my-creations" className="group px-10 py-6 rounded-[28px] glass-lvl-1 border border-black/5 font-bold flex items-center gap-4 hover:glass-lvl-3 transition-all duration-500 shadow-sm text-black/40 hover:text-black text-sm">
             <Wand2 size={16} className="text-accent-violet group-hover:rotate-12 transition-transform" />
             Signature Archive
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-black/10"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.8em]">Atelier Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Atmospheric Alabaster Orbs */}
      <motion.div 
        animate={{ 
           rotate: [0, 360],
           x: [0, 50, 0],
           y: [0, 30, 0]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[120px] -z-10"
      />
    </section>
  );
}
