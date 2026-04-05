"use client";

import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      
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
  }, [cursorX, cursorY, isVisible]);

  if (!isMounted) return null;

  return (
    <>
      {/* Visibility Fix: Inject Global cursor-none only when Mounted */}
      <style jsx global>{`
        body, a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>

      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay select-none overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      {/* Modern High-End Cursor Core */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black/80 pointer-events-none z-[10000] flex items-center justify-center overflow-hidden"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 2.2 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isPointer ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
          borderColor: isPointer ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.8)",
        }}
        transition={{ type: "spring", damping: 40, stiffness: 400 }}
      >
         <AnimatePresence>
            {isPointer && (
               <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="w-1 h-1 bg-white rounded-full"
               />
            )}
         </AnimatePresence>
      </motion.div>

      {/* Subtle Outer Ring / Trail */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-black/5 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.4 : 1,
          opacity: isVisible ? 0.3 : 0,
        }}
      />
    </>
  );
}
