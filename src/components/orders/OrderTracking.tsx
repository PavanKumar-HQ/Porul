"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, hammer, Package, ShieldCheck, Sparkles, Truck } from "lucide-react";

const stages = [
  {
    id: "received",
    title: "Design Received",
    description: "Your creative intent has been captured and verified by our system.",
    status: "completed",
    icon: Sparkles
  },
  {
    id: "crafting",
    title: "Handcrafting Stage",
    description: "Artisans are currently translating your design onto the physical medium.",
    status: "current",
    icon: Clock
  },
  {
    id: "quality",
    title: "Quality Curation",
    description: "A final inspection to ensure the craftsmanship meets Porul standards.",
    status: "upcoming",
    icon: ShieldCheck
  },
  {
    id: "shipped",
    title: "Legacy Dispatched",
    description: "Your digital heirloom is securely packaged and in transit.",
    status: "upcoming",
    icon: Truck
  }
];

export default function OrderTracking() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-12 px-6">
      <header className="text-center space-y-4 mb-16">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lvl-1 border-white/10 text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">
            Order #PRL-9921-X
         </div>
         <h2 className="text-3xl font-bold font-outfit text-white tracking-tight">The Craftsmanship Timeline</h2>
         <p className="text-sm text-white/30 font-light translate-y-[-10px]">Follow the journey of your signature creation.</p>
      </header>

      <div className="relative space-y-12">
        {/* Continuous Line */}
        <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-white/5" />
        
        {stages.map((stage, index) => (
          <motion.div 
            key={stage.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-16 group"
          >
            {/* Status Node */}
            <div className={`absolute left-0 top-0 w-12 h-12 rounded-2xl glass-lvl-2 border flex items-center justify-center transition-all duration-700 ${stage.status === 'completed' ? 'border-accent-violet/40 bg-accent-violet/5 text-accent-violet' : stage.status === 'current' ? 'border-white/20 bg-white/5 text-white animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'border-white/5 bg-transparent text-white/10'}`}>
               <stage.icon size={20} strokeWidth={1.5} />
            </div>

            <div className="space-y-2">
               <div className="flex items-center gap-3">
                  <h3 className={`text-xl font-bold font-outfit tracking-tight ${stage.status === 'upcoming' ? 'text-white/20' : 'text-white'}`}>
                     {stage.title}
                  </h3>
                  {stage.status === 'completed' && <CheckCircle2 size={16} className="text-accent-violet" />}
               </div>
               <p className={`text-sm leading-relaxed max-w-lg transition-colors duration-700 ${stage.status === 'upcoming' ? 'text-white/10' : 'text-white/40'}`}>
                  {stage.description}
               </p>
               
               {stage.status === 'current' && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="pt-4 flex items-center gap-2"
                 >
                    <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }}
                         animate={{ x: "0%" }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                       />
                    </div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest whitespace-nowrap">Active Stage</span>
                 </motion.div>
               )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 glass-lvl-1 rounded-[32px] border-white/5 text-center">
         <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-4">Secured Handcrafting</p>
         <div className="flex justify-center gap-8 opacity-40">
            <ShieldCheck size={20} />
            <Package size={20} />
            <Sparkles size={20} />
         </div>
      </div>
    </div>
  );
}
