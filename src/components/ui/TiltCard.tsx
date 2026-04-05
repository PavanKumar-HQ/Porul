"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxRotate?: number;
}

export default function TiltCard({ children, className, maxRotate = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxRotate, -maxRotate]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxRotate, maxRotate]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const currentX = (e.clientX - left) / width - 0.5;
    const currentY = (e.clientY - top) / height - 0.5;
    x.set(currentX);
    y.set(currentY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group perspective-1000 ${className}`}
    >
      {/* Dynamic Depth Shadow */}
      <motion.div 
         style={{
           translateX: useTransform(x, [-0.5, 0.5], [20, -20]),
           translateY: useTransform(y, [-0.5, 0.5], [20, -20]),
           opacity: useTransform(y, [-0.5, 0.5], [0.1, 0.3]),
         }}
         className="absolute inset-0 bg-black/60 blur-3xl -z-10 rounded-[inherit]"
      />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
