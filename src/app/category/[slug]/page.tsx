"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Filter, ChevronDown, ShoppingBag, Heart, Eye, Star, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");
  
  // Filter products by category
  const categoryProducts = products.filter(p => p.category.toLowerCase().includes(slug.toLowerCase()));

  const toggleWishlist = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickAdd = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, "", "Inter", "#000000");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8">
        <div className="max-w-[1400px] mx-auto space-y-20">
          {/* Header Architecture */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 pb-16 border-b border-black/[0.08]">
            <div className="space-y-6">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border border-black/10 text-[11px] font-black tracking-[0.4em] text-accent-violet uppercase shadow-sm bg-white"
               >
                  <Sparkles size={14} className="animate-pulse" />
                  Collection Protocol: {slug.toUpperCase()}
               </motion.div>
               <h1 className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter text-black leading-none uppercase">
                  {categoryName.split(" ")[0]} <span className="text-black/30 italic">{categoryName.split(" ").slice(1).join(" ") || "Archives"}</span>
               </h1>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="hidden md:flex flex-col items-end mr-4">
                  <span className="text-[10px] font-black text-black/40 uppercase tracking-widest">Atelier Registry</span>
                  <span className="text-xl font-bold font-outfit">{categoryProducts.length} Artifacts</span>
               </div>
               <button className="flex items-center gap-3 px-8 py-4 rounded-[24px] bg-black text-white text-[11px] font-black uppercase tracking-widest hover:bg-accent-violet transition-all shadow-xl active:scale-95">
                  <Filter size={16} />
                  Filters
               </button>
            </div>
          </div>

          {/* Product Grid Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pt-12">
            <AnimatePresence>
               {categoryProducts.map((product, index) => (
                  <motion.div 
                     key={product.id}
                     initial={{ opacity: 0, scale: 0.95, y: 30 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                     <Link href={`/shop/${product.id}`} className="group block">
                        <div className="relative aspect-[1/1.25] rounded-[56px] overflow-hidden border border-black/10 bg-white shadow-[0_48px_80px_-20px_rgba(0,0,0,0.08)] group-hover:shadow-2xl transition-all duration-1000 group">
                           {/* Background Blur Image */}
                           <div className="absolute inset-0 overflow-hidden pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]">
                              <div className={`absolute inset-0 ${product.color} opacity-40`} />
                              <img 
                                 src={product.image} 
                                 alt={product.name} 
                                 className="w-full h-full object-cover opacity-15 grayscale blur-[30px] group-hover:blur-0 group-hover:opacity-60 transition-all duration-1000" 
                              />
                           </div>

                           <div className="p-12 relative z-20 flex flex-col h-full justify-between">
                              <div className="flex justify-between items-start">
                                 <button 
                                   onClick={(e) => toggleWishlist(product, e)}
                                   className={`w-12 h-12 rounded-2xl glass-lvl-1 flex items-center justify-center transition-all shadow-xl hover:scale-110 ${isInWishlist(product.id) ? 'text-red-500 bg-white' : 'text-black bg-white/60 hover:text-red-500'}`}
                                 >
                                    <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} strokeWidth={2.5} />
                                 </button>
                                 <div className="text-right">
                                    <span className="text-[10px] font-black text-black/60 uppercase tracking-[0.4em]">Sector {index + 1}</span>
                                 </div>
                              </div>

                              <div className="space-y-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                 <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                       <div className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                                       <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent-violet">{product.category}</span>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold font-outfit tracking-tighter text-black leading-tight">{product.name}</h3>
                                    <p className="text-sm font-normal text-black/60 line-clamp-2">{product.description}</p>
                                 </div>

                                 <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <button 
                                      onClick={(e) => handleQuickAdd(product, e)}
                                      className="flex-1 py-5 rounded-[24px] bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-accent-violet shadow-2xl transition-all"
                                    >
                                       Quick Add
                                    </button>
                                 </div>
                              </div>

                              <div className="pt-8 border-t border-black/10 flex justify-between items-end group-hover:opacity-0 transition-opacity duration-500">
                                 <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Manifested Artifact</span>
                                    <p className="text-2xl font-bold font-outfit">${product.price}</p>
                                 </div>
                                 <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/20">
                                    <ArrowRight size={18} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Link>
                  </motion.div>
               ))}
            </AnimatePresence>
          </div>
          
          {categoryProducts.length === 0 && (
             <div className="py-60 text-center space-y-12">
                <div className="w-24 h-24 rounded-full bg-black/5 flex items-center justify-center mx-auto">
                   <Filter size={40} className="text-black/10" />
                </div>
                <div className="space-y-4">
                   <h2 className="text-5xl font-bold font-outfit tracking-tighter text-black/20">No Artifacts Observed</h2>
                   <p className="text-black/40 font-inter text-lg">The {slug} registry is currently undergoing manifestation protocols.</p>
                </div>
                <Link href="/shop" className="inline-flex items-center gap-4 px-10 py-5 rounded-[32px] bg-black text-white text-[12px] font-black uppercase tracking-[0.4em] hover:bg-accent-violet transition-all shadow-2xl">
                   Explore Global Archive
                   <ArrowRight size={18} />
                </Link>
             </div>
          )}

          <div className="py-24 text-center border-t border-black/[0.08]">
             <p className="text-black/40 font-black uppercase tracking-[1em] text-[11px] hover:text-accent-violet transition-colors cursor-default">End of Protocol // More Artifacts Initializing</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
