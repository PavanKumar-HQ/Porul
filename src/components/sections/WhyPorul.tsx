"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Heart, Globe, Sparkles } from "lucide-react";

const axioms = [
  {
    id: "AX-01",
    title: "Signature Fidelity",
    description: "Every pixel of your manifestation is translated with artisan-grade precision into physical heirloom reality.",
    icon: <ShieldCheck size={24} />,
    color: "bg-white", 
    accent: "text-accent-gold",
    tag: "Protocol Level 1"
  },
  {
    id: "AX-02",
    title: "Atelier Velocity",
    description: "Immediate rendering meet heritage craftsmanship. We manifest your vision in record-breaking artisan cycles.",
    icon: <Zap size={24} />,
    color: "bg-white",
    accent: "text-accent-blue",
    tag: "Protocol Level 2"
  },
  {
    id: "AX-03",
    title: "Soul Provenance",
    description: "Your digital identity, physically anchored. Each object carries the indelible signature of its creator.",
    icon: <Heart size={24} />,
    color: "bg-white",
    accent: "text-accent-violet",
    tag: "Protocol Level 3"
  },
  {
    id: "AX-04",
    title: "Heritage Reach",
    description: "Architected for the global collector. We deliver your handcrafted signature to every corner of the modern world.",
    icon: <Globe size={24} />,
    color: "bg-white",
    accent: "text-[#D4AF37]",
    tag: "Protocol Level 4"
  }
];

export default function WhyPorul() {
  return (
    <section className="py-20 px-8 bg-[#FAF5FF]/30 relative overflow-hidden group/why-section border-y border-black/5">
      {/* Space Optimization: Differentiated Violet Backdrop */}
      <div className="absolute inset-x-0 inset-y-0 opacity-[0.03] select-none pointer-events-none -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(126,58,242,0.1),transparent_50%)]" />
      <div className="absolute top-20 left-10 text-[10vw] font-black text-black/[0.012] uppercase tracking-tighter select-none pointer-events-none group-hover/why-section:text-accent-violet/[0.03] transition-colors duration-1000">AXIOMS</div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-12 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black tracking-[0.4em] text-accent-violet mb-4 uppercase shadow-sm bg-white"
            >
               <Sparkles size={14} className="animate-pulse" />
               The Axiom Protocol
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter text-black leading-[0.85]"
            >
              The Porul <br />
              <span className="text-black/15 italic text-black/25">Axioms</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {axioms.map((axiom, index) => (
             <motion.div
               key={axiom.id}
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group/pod relative p-8 rounded-[40px] border border-black/5 bg-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-700 overflow-hidden"
             >
                <div className="space-y-8 relative z-10">
                   <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 rounded-2xl glass-lvl-1 flex items-center justify-center ${axiom.accent} bg-white shadow-sm group-hover/pod:bg-black group-hover/pod:text-white transition-all`}>
                         {axiom.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/20 group-hover/pod:text-black/40 transition-colors">{axiom.id}</span>
                   </div>

                   <div className="space-y-3">
                      <h3 className="text-xl font-bold font-outfit tracking-tight text-black group-hover/pod:translate-x-1 transition-transform duration-700">{axiom.title}</h3>
                      <p className="text-sm font-light text-black/50 leading-relaxed group-hover/pod:text-black/70 transition-colors">{axiom.description}</p>
                   </div>

                   <div className="pt-4 flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-accent-violet animate-pulse" />
                      <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${axiom.accent} opacity-60`}>{axiom.tag}</span>
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
