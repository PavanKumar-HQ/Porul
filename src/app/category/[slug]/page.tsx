"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Filter, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 pb-16 border-b border-black/5">
            <div className="space-y-6">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border-black/5 text-[10px] font-bold tracking-[0.4em] text-accent-violet/60 uppercase shadow-sm"
               >
                  Collection Protocol
               </motion.div>
               <h1 className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter text-black">
                  {categoryName.split(" ")[0]} <span className="text-black/20 italic">{categoryName.split(" ").slice(1).join(" ") || "Edition"}</span>
               </h1>
            </div>
            
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-lvl-1 border-black/5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all">
                  <Filter size={14} />
                  Filters
               </button>
               <button className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-lvl-1 border-black/5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all">
                  Sort
                  <ChevronDown size={14} />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
               >
                  <div className="aspect-[4/5] rounded-[48px] glass-lvl-1 border-black/5 overflow-hidden relative mb-8 group-hover:glass-lvl-3 transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                     <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-black/5 font-outfit font-black text-8xl uppercase tracking-tighter select-none">
                        P-0{i}
                     </div>
                     <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <button className="p-4 rounded-3xl bg-black text-white hover:scale-110 active:scale-95 transition-all shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                           <Sparkles size={20} />
                        </button>
                        <div className="text-right">
                           <p className="text-[10px] font-bold text-black uppercase tracking-widest bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">Signature Heirloom</p>
                        </div>
                     </div>
                  </div>
                  <div className="px-4 space-y-2">
                     <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold font-outfit tracking-tight">Artifact Serial-0{i}</h3>
                        <span className="font-bold text-black/40">$240.00</span>
                     </div>
                     <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em]">{categoryName} Collection</p>
                  </div>
               </motion.div>
            ))}
          </div>
          
          <div className="py-24 text-center">
             <p className="text-black/20 font-bold uppercase tracking-[0.5em] text-[10px]">End of Protocol // More Artifacts Initializing</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
