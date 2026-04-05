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
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Cinematic Mouse-Follow Aura (Alabaster Edition) */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-15"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(126, 58, 242, 0.08), transparent 80%)`
        }}
      />

      {/* Floating Artifacts (Density improvisation) */}
      <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-10">
         <motion.div
           animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[20%] left-[10%] w-48 h-48 md:w-80 md:h-80 opacity-60 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-1 rounded-[40px] overflow-hidden border border-black/5 p-4 rotate-12 group scale-90 md:scale-100">
               <img src="/tee.png" alt="" className="w-full h-full object-cover rounded-3xl" />
            </div>
         </motion.div>
         <motion.div
           animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[15%] right-[8%] w-48 h-48 md:w-96 md:h-96 opacity-60 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-2 rounded-[56px] overflow-hidden border border-black/5 p-4 -rotate-12 group scale-95 md:scale-105">
               <img src="/watch.png" alt="" className="w-full h-full object-cover rounded-[32px]" />
            </div>
         </motion.div>
         <motion.div
           animate={{ x: [0, -20, 0], y: [0, 50, 0] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute top-[50%] right-[12%] w-40 h-40 opacity-40 mix-blend-multiply"
         >
            <div className="relative w-full h-full glass-lvl-3 rounded-[32px] overflow-hidden border border-black/5 p-4 rotate-6 group scale-75">
               <img src="/mug.png" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
         </motion.div>
      </div>

      <div className="relative z-20 w-full max-w-7xl px-8 flex flex-col items-center text-center mt-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-lvl-1 border border-black/5 text-[11px] font-bold tracking-[0.6em] text-accent-violet mb-16 shadow-sm"
        >
           <Sparkles size={14} className="animate-pulse" />
           The New Standard of Personal Luxury
        </motion.div>

        <motion.div style={{ y: y1, opacity }} className="space-y-12">
          <h1 className="text-[80px] md:text-[180px] font-bold font-outfit leading-[0.8] tracking-tighter text-black select-none">
            Digital<br />
            <span className="text-black/20 italic">
              <TypewriterText text="Heirloom" />
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
             <AnimatePresence mode="wait">
               <motion.p 
                 key={currentMessage}
                 initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                 animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                 exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-2xl md:text-5xl font-extralight text-black/60 italic tracking-tight font-outfit"
               >
                 {messages[currentMessage]}
               </motion.p>
             </AnimatePresence>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-24 flex flex-col sm:flex-row gap-8 items-center"
        >
          <Link href="/shop" className="group relative px-16 py-8 rounded-[40px] bg-black text-white font-bold flex items-center gap-6 transition-all hover:scale-105 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] hover:shadow-black/20 text-lg">
             Enter The Atelier Studio
             <ArrowDown size={22} className="group-hover:translate-y-2 transition-transform" />
          </Link>
          <Link href="/my-creations" className="group px-12 py-6 rounded-[32px] glass-lvl-1 border border-black/5 font-bold flex items-center gap-4 hover:glass-lvl-3 transition-all duration-500 shadow-sm text-black/60 hover:text-black">
             <Wand2 size={20} className="text-accent-violet group-hover:rotate-12 transition-transform" />
             Signature Archive
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-black/20"
      >
        <span className="text-[10px] font-bold uppercase tracking-[1em]">Protocol Scroll</span>
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <ArrowDown size={40} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Atmospheric Alabaster Orbs */}
      <motion.div 
        animate={{ 
           rotate: [0, 360],
           x: [0, 100, 0],
           y: [0, 50, 0]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-48 -left-48 w-[800px] h-[800px] bg-accent-violet/5 rounded-full blur-[140px] -z-10"
      />
    </section>
  );
}
