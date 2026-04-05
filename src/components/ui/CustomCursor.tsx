"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") !== null ||
        target.closest("a") !== null
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] mix-blend-overlay select-none overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      {/* Modern High-End Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black/10 pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isPointer ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
         <AnimatePresence>
            {isPointer && (
               <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="w-1 h-1 bg-black rounded-full"
               />
            )}
         </AnimatePresence>
      </motion.div>

      {/* Cursor Trail / Outer Aura */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-black/5 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 0.4 : 0,
        }}
      />
    </>
  );
}

import { AnimatePresence } from "framer-motion";
