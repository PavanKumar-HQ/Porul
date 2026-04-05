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
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Mouse-Follow Aura (Alabaster Edition) */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-10"
        animate={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 58, 242, 0.06), transparent 80%)`
        }}
      />

      {/* Floating Artifacts (Compact Scale) */}
      <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-10">
         <motion.div
           animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[30%] left-[20%] w-24 h-24 md:w-40 md:h-40 opacity-30 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[24px] overflow-hidden border border-black/5 p-2 rotate-12 bg-white shadow-lg">
               <img src="/tee.png" alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[25%] right-[18%] w-32 h-32 md:w-48 md:h-48 opacity-30 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[32px] overflow-hidden border border-black/5 p-2 -rotate-12 bg-white shadow-lg">
               <img src="/watch.png" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
         </motion.div>
      </div>

      <div className="relative z-20 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border border-black/5 text-[8px] font-black tracking-[0.4em] text-accent-violet mb-10 shadow-sm bg-white"
        >
           <Sparkles size={10} className="animate-pulse" />
           The New Standard of Personal Luxury
        </motion.div>

        <motion.div style={{ y: y1, opacity }} className="space-y-6">
          <h1 className="text-[48px] md:text-[72px] font-bold font-outfit leading-[0.9] tracking-tighter text-black select-none">
            Digital<br />
            <span className="text-black/10 italic">
              <TypewriterText text="Heirloom" />
            </span>
          </h1>
          
          <div className="h-10 flex items-center justify-center">
             <AnimatePresence mode="wait">
               <motion.p 
                 key={currentMessage}
                 initial={{ y: 10, opacity: 0, filter: "blur(2px)" }}
                 animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                 exit={{ y: -10, opacity: 0, filter: "blur(2px)" }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-lg md:text-2xl font-extralight text-black/40 italic tracking-tight font-outfit"
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
          className="mt-16 flex flex-col sm:flex-row gap-5 items-center"
        >
          <Link href="/shop" className="group relative px-8 py-5 rounded-[24px] bg-black text-white font-bold flex items-center gap-4 transition-all hover:scale-105 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)] hover:shadow-black/20 text-sm">
             Enter The Atelier Studio
             <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/my-creations" className="group px-8 py-5 rounded-[20px] glass-lvl-1 border border-black/5 font-bold flex items-center gap-4 hover:glass-lvl-3 transition-all duration-500 shadow-sm text-black/40 hover:text-black text-xs">
             <Wand2 size={14} />
             Signature Archive
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-black/10"
      >
        <span className="text-[7px] font-black uppercase tracking-[0.6em]">Scroll Protocol</span>
        <motion.div
           animate={{ y: [0, 6, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <ArrowDown size={28} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Atmospheric Alabaster Orbs */}
      <motion.div 
        animate={{ 
           rotate: [0, 360],
           x: [0, 30, 0],
           y: [0, 20, 0]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-accent-violet/[0.04] rounded-full blur-[100px] -z-10"
      />
    </section>
  );
}
