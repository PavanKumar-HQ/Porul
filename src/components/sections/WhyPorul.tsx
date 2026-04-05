"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Heart, Globe, Sparkles } from "lucide-react";

const axioms = [
  {
    id: "AX-01",
    title: "Signature Fidelity",
    description: "Every pixel of your manifestation is translated with artisan-grade precision into physical heirloom reality.",
    icon: <ShieldCheck size={20} />,
    color: "bg-[#FDF8F2]", // Sand
    accent: "text-accent-gold",
    tag: "Protocol Level 1"
  },
  {
    id: "AX-02",
    title: "Atelier Velocity",
    description: "Immediate rendering meet heritage craftsmanship. We manifest your vision in record-breaking artisan cycles.",
    icon: <Zap size={20} />,
    color: "bg-[#F0F7FF]", // Blue
    accent: "text-accent-blue",
    tag: "Protocol Level 2"
  },
  {
    id: "AX-03",
    title: "Soul Provenance",
    description: "Your digital identity, physically anchored. Each object carries the indelible signature of its creator.",
    icon: <Heart size={20} />,
    color: "bg-[#FAF5FF]", // Violet
    accent: "text-accent-violet",
    tag: "Protocol Level 3"
  },
  {
    id: "AX-04",
    title: "Heritage Reach",
    description: "Architected for the global collector. We deliver your handcrafted signature to every corner of the modern world.",
    icon: <Globe size={20} />,
    color: "bg-[#FFFBF0]", // Gold
    accent: "text-[#D4AF37]",
    tag: "Protocol Level 4"
  }
];

export default function WhyPorul() {
  return (
    <section className="py-32 px-8 bg-white relative overflow-hidden group/why-section">
      <div className="absolute inset-x-0 inset-y-0 opacity-[0.015] select-none pointer-events-none -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(126,58,242,0.1),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full glass-lvl-1 border border-black/5 text-[8px] font-black tracking-[0.3em] text-accent-violet/60 mb-4 uppercase shadow-sm bg-white"
            >
               <Sparkles size={12} className="animate-pulse text-accent-violet" />
               The Axiom Protocol
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-[56px] font-bold font-outfit tracking-tighter text-black leading-[0.85]"
            >
              The Porul <br />
              <span className="text-black/10 italic">Axioms</span>
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-lg font-light text-black/25 leading-relaxed max-w-[400px] mx-auto font-inter italic"
            >
              "The foundational principles that govern the manifestation protocol."
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {axioms.map((axiom, index) => (
             <motion.div
               key={axiom.id}
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`group/${axiom.id} relative p-8 rounded-[36px] border border-black/5 hover:border-black/10 transition-all duration-1000 overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.02] cursor-default bg-white group/pod`}
             >
                <div className={`absolute inset-0 ${axiom.color} opacity-0 group-hover/pod:opacity-100 transition-opacity duration-1000 -z-10`} />
                
                <div className="space-y-8 relative z-10">
                   <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 rounded-2xl glass-lvl-1 flex items-center justify-center ${axiom.accent} bg-white/60 group-hover/pod:bg-black group-hover/pod:text-white transition-all duration-700 shadow-sm`}>
                         {axiom.icon}
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-black/10 group-hover/pod:text-black/30 transition-colors">{axiom.id}</span>
                   </div>

                   <div className="space-y-3">
                      <h3 className="text-lg font-bold font-outfit tracking-tight text-black group-hover/pod:translate-x-1 transition-transform duration-700">{axiom.title}</h3>
                      <p className="text-[11px] font-light text-black/30 leading-relaxed group-hover/pod:text-black/50 transition-colors">{axiom.description}</p>
                   </div>

                   <div className="pt-2 flex items-center gap-2">
                      <div className="w-0.5 h-0.5 rounded-full bg-accent-violet animate-pulse" />
                      <span className={`text-[7px] font-black uppercase tracking-[0.2em] ${axiom.accent} opacity-40`}>{axiom.tag}</span>
                   </div>
                </div>

                <div className="absolute -bottom-6 -right-6 text-[80px] font-black text-black/[0.012] uppercase tracking-tighter select-none pointer-events-none group-hover/pod:text-black/[0.024] transition-colors rotate-12">{axiom.id.split('-')[1]}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
