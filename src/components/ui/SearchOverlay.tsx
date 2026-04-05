"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";
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
          className="fixed inset-0 z-[100] glass-lvl-3 flex flex-col items-center justify-start pt-[15vh] px-8"
        >
          <button 
            onClick={onClose}
            className="absolute top-12 right-12 p-3 hover:bg-black/5 rounded-2xl transition-all text-black/20 hover:text-black group"
          >
            <X size={32} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-500" />
            <span className="sr-only">Close Search</span>
          </button>

          <div className="w-full max-w-4xl space-y-12">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <SearchIcon size={40} className="absolute left-0 top-1/2 -translate-y-1/2 text-black/10 group-focus-within:text-accent-violet transition-colors duration-500" strokeWidth={1} />
              <input 
                type="text" 
                autoFocus
                placeholder="Search the Atelier..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent-violet outline-none py-8 pl-16 text-4xl md:text-6xl font-bold font-outfit tracking-tighter text-black placeholder:text-black/5 transition-all duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
               <h3 className="text-[10px] font-bold text-black/20 uppercase tracking-[0.5em]">Curated Discoveries</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {quickLinks.map((link, i) => (
                   <button 
                     key={link}
                     className="group flex items-center justify-between p-6 rounded-[32px] glass-lvl-1 border-black/5 hover:glass-lvl-3 transition-all duration-500 text-left hover:shadow-xl"
                   >
                     <span className="text-xl font-bold text-black tracking-tight font-outfit">{link}</span>
                     <ArrowRight size={20} className="text-black/10 group-hover:text-accent-violet group-hover:translate-x-2 transition-all" />
                   </button>
                 ))}
               </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
