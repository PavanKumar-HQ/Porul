"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight, Trash2, Wand2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black transition-colors duration-700">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-24">
          <div className="text-center space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border-black/5 text-[11px] font-bold tracking-[0.5em] text-accent-violet/60 uppercase mb-8 shadow-sm"
            >
               <Heart size={14} className="animate-pulse" />
               Saved Objects
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter leading-none"
            >
              My <span className="text-black/20 italic">Wishlist</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-light text-black/40 leading-relaxed max-w-3xl mx-auto font-inter"
            >
              Curate your personal collection of digital heirlooms. These objects await your signature and manifestation.
            </motion.p>
          </div>

          <AnimatePresence mode="popLayout">
            {wishlist.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
              >
                {wishlist.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative"
                  >
                    <Link href={`/shop/${product.id}`} className="block h-full">
                      <div className="aspect-[1/1.2] glass-lvl-1 rounded-[48px] overflow-hidden border-black/5 group-hover:glass-lvl-2 transition-all duration-700 hover:shadow-2xl relative flex flex-col h-full bg-white">
                        {/* Image Background */}
                        <div className="flex-1 relative overflow-hidden m-4 rounded-[32px]">
                           <img 
                             src={product.image} 
                             alt={product.name}
                             className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-black/5" />
                           <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 blur-[60px]`} />
                           
                           {/* BG Letter */}
                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <span className="text-white/10 font-outfit font-black text-[120px] uppercase tracking-tighter select-none rotate-12">{product.name.charAt(0)}</span>
                           </div>
                        </div>

                        <div className="p-10 pt-2 min-h-[120px]">
                           <div className="flex justify-between items-end">
                              <div>
                                 <h3 className="text-2xl font-bold font-outfit tracking-tight leading-none">{product.name}</h3>
                                 <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em] font-inter pt-3">{product.category}</p>
                              </div>
                              <span className="text-xl font-bold font-outfit text-black/40">${product.price.toFixed(0)}</span>
                           </div>
                        </div>
                      </div>
                    </Link>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromWishlist(product.id);
                      }}
                      className="absolute top-6 right-6 w-12 h-12 rounded-full glass-lvl-3 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-red-500 hover:text-white shadow-xl z-20"
                    >
                       <Trash2 size={20} />
                    </button>
                    
                    <Link 
                      href="/customize"
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 py-4 rounded-full bg-black text-white font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 shadow-2xl hover:scale-105 z-20"
                    >
                       <Wand2 size={14} />
                       Customize
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-40 space-y-8 glass-lvl-2 rounded-[64px] border border-black/5"
              >
                 <div className="w-24 h-24 rounded-full glass-lvl-1 flex items-center justify-center text-black/10">
                    <Heart size={48} strokeWidth={1} />
                 </div>
                 <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold font-outfit tracking-tight">Your Wishlist is Empty</h2>
                    <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] font-inter">Protocol 04 // No Artifacts Recorded</p>
                 </div>
                 <Link href="/shop" className="px-12 py-5 rounded-[24px] bg-black text-white font-bold text-lg font-outfit flex items-center justify-center gap-4 hover:scale-105 transition-all duration-500 shadow-2xl group">
                    Enter The Atelier
                    <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                 </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}
