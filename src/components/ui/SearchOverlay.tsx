"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight, Sparkles, Wand2 } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickLinks = [
  "Silk Heirloom Scarf",
  "Engraved Titanium Flask",
  "Cashmere Signature Throw",
  "Ceramic Pulse Vase",
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-start pt-[10vh] px-8 bg-black/5 backdrop-blur-[60px]"
        >
          {/* Liquid Glass Container (Apple Aesthetic) */}
          <motion.div
             initial={{ y: 40, scale: 0.95, opacity: 0 }}
             animate={{ y: 0, scale: 1, opacity: 1 }}
             exit={{ y: 40, scale: 0.95, opacity: 0 }}
             transition={{ type: "spring", damping: 25, stiffness: 200 }}
             className="w-full max-w-5xl bg-white/60 backdrop-blur-[120px] rounded-[64px] border border-white/40 shadow-[0_64px_120px_-32px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(255,255,255,0.4)] overflow-hidden relative"
          >
             {/* Atmospheric Glass Sheen */}
             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
             
             <button 
               onClick={onClose}
               className="absolute top-10 right-10 w-14 h-14 rounded-full flex items-center justify-center hover:bg-black/10 transition-all text-black/30 hover:text-black z-50 group border border-black/5"
             >
               <X size={24} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-500" />
             </button>

             <div className="p-16 space-y-16 relative z-10">
                <div className="space-y-4">
                   <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/40 border border-white/60 text-[10px] font-black tracking-[0.4em] text-accent-violet mb-4 uppercase shadow-sm"
                   >
                      <Sparkles size={12} className="animate-pulse" />
                      Manifest Search
                   </motion.div>
                   
                   <div className="relative group/input">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-3xl bg-black flex items-center justify-center text-white scale-90 group-focus-within/input:scale-100 group-focus-within/input:bg-accent-violet transition-all duration-500 shadow-xl">
                         <SearchIcon size={24} strokeWidth={2} />
                      </div>
                      <input 
                         type="text" 
                         autoFocus
                         placeholder="Search the Store..."
                         value={query}
                         onChange={(e) => setQuery(e.target.value)}
                         className="w-full bg-transparent border-b border-black/10 focus:border-accent-violet outline-none py-10 pl-24 text-4xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tighter text-black placeholder:text-black/10 transition-all duration-700"
                      />
                   </div>
                </div>

                <div className="space-y-10">
                   <div className="flex items-center gap-6">
                      <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.5em] whitespace-nowrap">Curated Discoveries</h3>
                      <div className="w-full h-px bg-black/5" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {quickLinks.map((link, i) => (
                       <button 
                         key={link}
                         className="group relative flex items-center justify-between p-8 rounded-[40px] bg-white/40 border border-white/80 hover:bg-white hover:border-black/5 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.08)] transition-all duration-700 text-left overflow-hidden"
                       >
                         {/* Liquid Hover Fill */}
                         <div className="absolute inset-0 bg-accent-violet/5 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
                         
                         <div className="relative z-10 space-y-2">
                            <span className="text-xl font-bold text-black tracking-tight font-outfit group-hover:text-accent-violet transition-colors">{link}</span>
                            <div className="flex items-center gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
                               <Wand2 size={12} />
                               <span className="text-[9px] font-black uppercase tracking-widest text-black/60">Verified Pattern</span>
                            </div>
                         </div>
                         <ArrowRight size={24} className="text-black/10 group-hover:text-accent-violet group-hover:translate-x-2 transition-all relative z-10" strokeWidth={1.5} />
                       </button>
                     ))}
                   </div>
                </div>

                <div className="pt-8 flex justify-between items-center opacity-20 hover:opacity-50 transition-opacity group/meta">
                   <span className="text-[10px] font-black uppercase tracking-[0.8em]">Store Protocol v2.2</span>
                   <div className="flex gap-4">
                      {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/40 group-hover/meta:bg-accent-violet transition-colors" />)}
                   </div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
