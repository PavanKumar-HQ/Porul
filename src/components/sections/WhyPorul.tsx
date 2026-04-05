"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Zap, Heart, Globe, Sparkles } from "lucide-react";
import { useRef } from "react";

const axioms = [
  {
    id: "AX-01",
    title: "Signature Fidelity",
    description: "Every pixel of your manifestation is translated with artisan-grade precision into physical reality.",
    icon: <ShieldCheck size={24} />,
    color: "bg-white", 
    accent: "text-black",
    tag: "Protocol Level 1"
  },
  {
    id: "AX-02",
    title: "Atelier Velocity",
    description: "Immediate rendering meet heritage craftsmanship. We manifest your vision in record-breaking cycles.",
    icon: <Zap size={24} />,
    color: "bg-white",
    accent: "text-black",
    tag: "Protocol Level 2"
  },
  {
    id: "AX-03",
    title: "Soul Provenance",
    description: "Your digital identity, physically anchored. Each object carries the signature of its creator.",
    icon: <Heart size={24} />,
    color: "bg-white",
    accent: "text-black",
    tag: "Protocol Level 3"
  },
  {
    id: "AX-04",
    title: "Heritage Reach",
    description: "Architected for global collectors. We deliver your handcrafted signature to every corner of the world.",
    icon: <Globe size={24} />,
    color: "bg-white",
    accent: "text-black",
    tag: "Protocol Level 4"
  }
];

export default function WhyPorul() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLabel = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={containerRef} className="py-24 px-8 bg-[#FAF5FF]/50 relative overflow-hidden group/why-section border-t border-black/[0.12] items-start">
      {/* Top Sector Badge */}
      <div className="absolute top-0 right-[25%] py-2.5 px-8 rounded-b-[24px] bg-black text-white text-[10px] font-black uppercase tracking-[0.6em] z-20 shadow-2xl">
         Sector 03: Protocol Axioms
      </div>

      <div className="absolute inset-x-0 inset-y-0 opacity-[0.05] select-none pointer-events-none -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(126,58,242,0.1),transparent_50%)]" />
      
      {/* Parallax Label */}
      <motion.div 
         style={{ y: yLabel }}
         className="absolute top-20 left-10 text-[15vw] font-black text-black/[0.04] uppercase tracking-tighter select-none pointer-events-none group-hover/why-section:text-accent-violet/[0.06] transition-colors duration-1000"
      >
         AXIOMS
      </motion.div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 space-y-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-black/20 text-[11px] font-black tracking-[0.4em] text-accent-violet mb-4 uppercase shadow-sm bg-white"
            >
               Axiom Protocol
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-bold font-outfit tracking-tighter text-black leading-none uppercase"
            >
              The Porul Axioms
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
           {axioms.map((axiom, index) => (
             <motion.div
               key={axiom.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group/pod relative p-10 rounded-[48px] border border-black/15 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:scale-[1.02] transition-all duration-700 overflow-hidden"
             >
                <div className="space-y-10 relative z-10">
                   <div className="flex justify-between items-start">
                      <div className={`w-14 h-14 rounded-[20px] border border-black/15 flex items-center justify-center text-black bg-white shadow-xl group-hover/pod:bg-black group-hover/pod:text-white transition-all`}>
                         {axiom.icon}
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-black/60 group-hover/pod:text-black transition-colors">{axiom.id}</span>
                   </div>

                   <div className="space-y-4">
                      <h3 className="text-2xl font-bold font-outfit tracking-tight text-black group-hover/pod:translate-x-1 transition-transform duration-700 uppercase">{axiom.title}</h3>
                      <p className="text-base font-medium text-black/70 leading-relaxed group-hover/pod:text-black transition-colors">{axiom.description}</p>
                   </div>

                   <div className="pt-6 border-t border-black/10 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
                      <span className={`text-[10px] font-black uppercase tracking-[0.3em] text-black`}>{axiom.tag}</span>
                   </div>
                </div>

                <div className="absolute -bottom-10 -right-10 text-[100px] font-black text-black/[0.04] uppercase tracking-tighter select-none pointer-events-none group-hover/pod:text-black/[0.08] transition-colors rotate-12">{axiom.id.split('-')[1]}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
