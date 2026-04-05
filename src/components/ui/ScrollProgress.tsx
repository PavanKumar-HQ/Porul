"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-0 lg:left-8 top-1/2 -translate-y-1/2 flex h-48 w-1 lg:w-1.5 flex-col items-center gap-4 z-[100] group">
       <span className="text-[8px] font-black uppercase tracking-[0.5em] -rotate-90 origin-center translate-y-[-20px] text-black/20 group-hover:text-black transition-colors">Progress</span>
       <div className="flex-1 w-px bg-black/5 relative rounded-full overflow-hidden">
          <motion.div 
             className="absolute top-0 inset-x-0 bg-accent-violet rounded-full origin-top"
             style={{ scaleY: scrollYProgress }} 
          />
       </div>
       <span className="text-[8px] font-black uppercase tracking-[0.5em] rotate-90 origin-center translate-y-[20px] text-black/20 group-hover:text-black transition-colors">Manifest</span>
    </div>
  );
}
