"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight, Sparkles, Filter, ChevronDown, Wand2 } from "lucide-react";

export default function ShopPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black transition-colors duration-700">
      <Navbar />
      
      <main className="flex-1 pt-40 pb-24 px-8 max-w-7xl mx-auto w-full">
        <header className="mb-24 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border-black/5 text-[10px] font-bold uppercase tracking-[0.4em] text-accent-violet/60 shadow-sm"
              >
                 <Sparkles size={12} className="animate-pulse" />
                 The Signature Collection
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter leading-none"
              >
                Artifact <span className="text-black/20 italic">Gallery</span>
              </motion.h1>
            </div>

            <div className="flex items-center gap-4">
               <div className="relative group min-w-[280px]">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20 group-focus-within:text-accent-violet transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="Identify artifact..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/[0.02] border border-black/5 rounded-[24px] pl-16 pr-6 py-5 text-sm outline-none focus:bg-white focus:shadow-2xl transition-all font-medium font-outfit"
                  />
               </div>
               <button className="p-5 glass-lvl-1 rounded-[24px] border-black/5 hover:glass-lvl-3 transition-all group">
                  <SlidersHorizontal size={22} className="text-black/40 group-hover:text-black transition-colors" />
               </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 pb-8 border-b border-black/5">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2 }}
                onClick={() => setFilter(cat)}
                className={`px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${filter === cat ? 'bg-black text-white shadow-2xl scale-105' : 'glass-lvl-1 border-black/5 text-black/40 hover:text-black'}`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </header>

        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={`/shop/${product.id}`} className="group block">
                  <div className="relative aspect-[1/1.2] glass-lvl-1 rounded-[56px] overflow-hidden border-black/5 group-hover:glass-lvl-2 transition-all duration-700 hover:shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-40 transition-opacity duration-1000 blur-[80px] -z-10`} />
                    
                    <div className="absolute inset-x-8 top-8 bottom-32 glass-lvl-1 border-white/20 rounded-[40px] flex items-center justify-center transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-2xl bg-white/5 overflow-hidden">
                       <span className="text-black/5 font-bold uppercase tracking-[1em] text-[40px] rotate-45 select-none">{product.name.charAt(0)}</span>
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="w-16 h-16 rounded-full glass-lvl-3 flex items-center justify-center text-accent-violet">
                             <Wand2 size={24} />
                          </div>
                       </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-10 pt-0 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em]">{product.category}</span>
                        <span className="text-xl font-bold font-outfit text-black/40">${product.price.toFixed(0)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-black font-outfit tracking-tight leading-none">{product.name}</h3>
                      <div className="pt-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                         <span className="text-[9px] font-black uppercase tracking-widest text-accent-blue">Manifest Creation</span>
                         <ArrowRight size={14} className="text-black/40" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center space-y-6">
            <p className="text-4xl font-bold text-black/10">No Artifacts Observed</p>
            <button onClick={() => {setFilter("All"); setSearchQuery("");}} className="text-accent-violet font-bold hover:underline">Reset Search Protocol</button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
