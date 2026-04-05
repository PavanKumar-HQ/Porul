"use client";

import { motion, AnimatePresence } from "framer-motion";

import Footer from "@/components/layout/Footer";
import { Sparkles, Wand2, ArrowRight, Share2, Trash2, Heart, History, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import TiltCard from "@/components/ui/TiltCard";

// Mock saved creations for demonstration
const mockCreations = [
  {
    id: "cr-1",
    name: "Ceramic Signature Mug",
    content: "Purity",
    font: "font-serif",
    color: "#121212",
    date: "2024-04-05",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800",
    isMasterpiece: true
  },
  {
    id: "cr-2",
    name: "Luxury Cotton Tee",
    content: "The Ghost",
    font: "font-mono",
    color: "#7E3AF2",
    date: "2024-04-04",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    isMasterpiece: false
  }
];

export default function MyCreationsPage() {
  const [creations, setCreations] = useState(mockCreations);

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col text-black">
      <main className="flex-1 pt-32 pb-24 px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="mb-24 text-center space-y-8">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-lvl-1 border-accent-gold/20 text-[10px] font-bold tracking-[0.4em] text-accent-gold uppercase"
           >
              <History size={14} />
              Your Signature Archive
           </motion.div>
           <h1 className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter text-black leading-none">
              Signature <br />
              <span className="text-gradient">Creations</span>
           </h1>
           <p className="text-black/40 text-xl font-light max-w-2xl mx-auto leading-relaxed font-inter">
              Every creation is a piece of your digital legacy. Review, recraft, or share your identity with the world.
           </p>
        </header>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <AnimatePresence>
             {creations.map((creation, index) => (
               <motion.div
                 key={creation.id}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ delay: index * 0.1 }}
               >
                 <TiltCard maxRotate={8}>
                    <div className={`relative glass-lvl-1 rounded-[56px] overflow-hidden border-black/5 p-10 transition-all duration-700 group hover:glass-lvl-2 ${creation.isMasterpiece ? 'shadow-[0_20px_80px_rgba(212,175,55,0.08)] border-accent-gold/20' : 'hover:border-black/20'}`}>
                       
                       {creation.isMasterpiece && (
                         <div className="absolute top-10 left-10 z-20 flex items-center gap-3 px-4 py-2 rounded-full glass-lvl-3 border-accent-gold/30 text-[9px] font-bold tracking-[0.3em] text-accent-gold uppercase">
                            <Sparkles size={12} />
                            Masterpiece
                         </div>
                       )}

                       <div className="absolute top-10 right-10 z-20 flex gap-4">
                          <button className="p-4 rounded-[20px] glass-lvl-2 border-black/5 text-black/20 hover:text-black transition-all">
                             <Share2 size={18} />
                          </button>
                          <button 
                             onClick={() => setCreations(prev => prev.filter(c => c.id !== creation.id))}
                             className="p-4 rounded-[20px] glass-lvl-2 border-black/5 text-black/10 hover:text-red-500 transition-all"
                          >
                             <Trash2 size={18} />
                          </button>
                       </div>

                       {/* Preview Canvas (Pristine Style) */}
                       <div className="relative aspect-video rounded-[40px] overflow-hidden bg-neutral-50 border border-black/5 mb-10 group shadow-sm">
                          <Image src={creation.image} alt={creation.name} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-40" />
                          
                          {/* Design Snapshot Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center p-12 text-center pointer-events-none">
                             <span className={`text-4xl md:text-5xl font-bold tracking-tighter leading-none drop-shadow-sm ${creation.font}`} style={{ color: creation.color }}>
                                {creation.content}
                             </span>
                          </div>
                       </div>

                       <div className="flex justify-between items-end">
                          <div className="space-y-3">
                             <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em]">{creation.date}</span>
                             </div>
                             <h3 className="text-2xl font-bold font-outfit text-black leading-none">{creation.name}</h3>
                          </div>
                          <Link href={`/shop/signature-mug`} className="inline-flex items-center gap-4 px-8 py-4 rounded-3xl bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl">
                             <Wand2 size={18} />
                             Recraft Design
                          </Link>
                       </div>
                    </div>
                 </TiltCard>
               </motion.div>
             ))}
           </AnimatePresence>

           {/* Empty State / Add Card (Alabaster Dash) */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="glass-lvl-1 rounded-[56px] border-dashed border-2 border-black/5 p-16 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-black/20 transition-all shadow-sm"
           >
              <div className="w-20 h-20 rounded-[32px] glass-lvl-1 border-black/5 flex items-center justify-center text-black/10 group-hover:text-black group-hover:scale-110 transition-all duration-500 mb-8">
                 <ArrowRight size={40} />
              </div>
              <h3 className="text-2xl font-bold text-black/30 group-hover:text-black transition-colors">Start a New Chapter</h3>
              <p className="text-sm text-black/20 mt-3 font-light">Create another unique digital heirloom today.</p>
           </motion.div>
        </div>

        {/* 📜 Trust Section (Alabaster Edition) */}
        <section className="mt-40 pt-16 border-t border-black/5 flex flex-wrap justify-between items-center gap-12 gap-y-10">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-[24px] glass-lvl-1 border-black/5 flex items-center justify-center text-accent-gold shadow-sm">
                 <ShieldCheck size={32} />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-black uppercase tracking-[0.3em]">Signature Archive</p>
                 <p className="text-sm text-black/40 font-light mt-1">Your designs are stored in our secure alabaster vault.</p>
              </div>
           </div>
           
           <div className="flex gap-6">
              <button className="px-8 py-4 rounded-3xl glass-lvl-1 border-black/5 text-[10px] font-bold text-black/30 uppercase tracking-widest hover:bg-black hover:text-white transition-all">Export Portfolio</button>
              <button className="px-8 py-4 rounded-3xl glass-lvl-1 border-black/5 text-[10px] font-bold text-black/30 uppercase tracking-widest hover:bg-black hover:text-white transition-all">Global Registry</button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
