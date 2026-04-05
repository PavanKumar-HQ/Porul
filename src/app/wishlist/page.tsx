"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight, Trash2, Wand2, Star, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const wishlistTotal = wishlist.reduce((acc, item) => acc + item.price, 0);

  const handleMoveToBag = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, "", "Inter", "#000000");
    removeFromWishlist(product.id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black">
      <Navbar />
      <main className="flex-1 pt-48 pb-24 px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-24">
          <header className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-8">
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
                className="text-xl font-light text-black/40 leading-relaxed max-w-xl font-inter"
              >
                Curate your personal collection of digital heirlooms. These objects await your signature and manifestation.
              </motion.p>
            </div>

            {wishlist.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="glass-lvl-3 rounded-[40px] border border-black/5 p-10 flex items-center gap-12 shadow-2xl"
              >
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] mb-2">Total Collection Value</p>
                    <p className="text-5xl font-bold font-outfit text-black tracking-tighter">${wishlistTotal.toFixed(0)}</p>
                 </div>
                 <div className="h-16 w-px bg-black/5" />
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full glass-lvl-1 flex items-center justify-center text-accent-gold">
                       <CheckCircle2 size={24} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-black/20 text-center">Protocol Level 4<br/>Secured Storage</span>
                 </div>
              </motion.div>
            )}
          </header>

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
                    <Link href={`/shop/${product.id}`} className="block h-full group/card">
                      <div className="relative aspect-[1/1.2] bg-white rounded-[40px] overflow-hidden border border-black/[0.04] group-hover:border-accent-violet/20 transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] flex flex-col h-full bg-white group">
                         <div className="absolute inset-0 glass-lvl-1 opacity-10 pointer-events-none" />
                         
                         {/* Image Background */}
                         <div className="flex-1 relative overflow-hidden m-4 rounded-[32px]">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 blur-[60px]`} />
                            
                            {/* BG Letter */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                               <span className="text-white/5 font-outfit font-black text-[120px] uppercase tracking-tighter select-none rotate-12">{product.name.charAt(0)}</span>
                            </div>

                            {/* Move to Bag Action Overlay */}
                            <div className="absolute inset-x-6 bottom-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-30">
                               <button 
                                 onClick={(e) => handleMoveToBag(product, e)}
                                 className="w-full py-4 rounded-2xl bg-black text-white font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
                               >
                                  <ShoppingBag size={14} />
                                  Acquire Signature
                               </button>
                            </div>
                         </div>

                         <div className="p-10 pt-2 min-h-[120px] space-y-4">
                            <div className="flex justify-between items-end">
                               <div className="space-y-1">
                                  <h3 className="text-2xl font-bold font-outfit tracking-tight leading-none group-hover/card:text-accent-violet transition-colors">{product.name}</h3>
                                  <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] font-inter pt-1">{product.category}</p>
                               </div>
                               <span className="text-xl font-bold font-outfit text-black/40">${product.price.toFixed(0)}</span>
                            </div>
                            
                            <div className="flex items-center gap-4 pt-2">
                               <div className="flex gap-0.5">
                                  {[1,2,3,4,5].map(i => <Star key={i} size={8} className="fill-accent-gold text-accent-gold" />)}
                               </div>
                               <span className="text-[8px] font-black uppercase tracking-widest text-black/10">Archive Verified</span>
                            </div>
                         </div>
                      </div>
                    </Link>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromWishlist(product.id);
                      }}
                      className="absolute top-8 right-8 w-10 h-10 rounded-full glass-lvl-3 flex items-center justify-center text-black/40 hover:text-red-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500 bg-white/40 shadow-xl z-20"
                    >
                       <Trash2 size={16} />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-40 space-y-10 glass-lvl-2 rounded-[64px] border border-black/5 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-96 h-96 bg-accent-violet/5 blur-[120px]" />
                 <div className="w-24 h-24 rounded-[32px] glass-lvl-1 flex items-center justify-center text-black/10 shadow-sm">
                    <Heart size={48} strokeWidth={1} />
                 </div>
                 <div className="space-y-4 text-center">
                    <h2 className="text-4xl font-bold font-outfit tracking-tighter text-black">Your Wishlist is Empty</h2>
                    <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] font-inter">Identify Artifacts to begin manifestation protocol.</p>
                 </div>
                 <Link href="/shop" className="px-12 py-5 rounded-[32px] bg-black text-white font-bold text-lg font-outfit flex items-center justify-center gap-4 hover:scale-105 transition-all duration-500 shadow-2xl group">
                    Enter Artifact Gallery
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
