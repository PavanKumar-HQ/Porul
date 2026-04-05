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
          {/* Header Architecture - Top Aligned */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 pb-16 border-b border-black/[0.12]">
            <div className="space-y-6 text-black">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/20 text-[11px] font-black tracking-[0.4em] text-accent-violet uppercase shadow-sm bg-white"
               >
                  Collection Protocol: {slug.toUpperCase()}
               </motion.div>
               <h1 className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter leading-none uppercase">
                  {categoryName.split(" ")[0]} <span className="text-black/50 italic">{categoryName.split(" ").slice(1).join(" ") || "Archives"}</span>
               </h1>
            </div>
            
            <div className="flex items-center gap-6">
               <div className="hidden md:flex flex-col items-end">
                  <span className="text-[11px] font-black text-black/60 uppercase tracking-widest">Registry Census</span>
                  <span className="text-2xl font-bold font-outfit text-black">{categoryProducts.length} Artifacts</span>
               </div>
               <button className="flex items-center gap-3 px-10 py-5 rounded-[28px] bg-black text-white text-[11px] font-black uppercase tracking-widest hover:bg-accent-violet transition-all shadow-xl active:scale-95">
                  <Filter size={18} />
                  Registry Filters
               </button>
            </div>
          </div>

          {/* TOP ALIGNED Product Grid Architecture - MAX Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pt-12 items-start">
            <AnimatePresence>
               {categoryProducts.map((product, index) => (
                  <motion.div 
                     key={product.id}
                     initial={{ opacity: 0, scale: 0.95, y: 30 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     transition={{ delay: index * 0.1, duration: 0.8 }}
                  >
                     <Link href={`/shop/${product.id}`} className="group block">
                        <div className="relative aspect-[1/1.3] rounded-[64px] overflow-hidden border border-black/15 bg-white shadow-[0_48px_100px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-2xl transition-all duration-1000 group">
                           {/* Background Discovery */}
                           <div className="absolute inset-0 overflow-hidden pointer-events-none group-hover:scale-115 transition-transform duration-[2000ms]">
                              <div className={`absolute inset-0 ${product.color} opacity-40`} />
                              <img 
                                 src={product.image} 
                                 alt={product.name} 
                                 className="w-full h-full object-cover opacity-20 grayscale transition-all blur-[35px] group-hover:blur-0 group-hover:opacity-60 duration-1000" 
                              />
                           </div>

                           <div className="p-12 relative z-20 flex flex-col h-full bg-gradient-to-t from-white via-white/80 to-transparent">
                              <div className="flex justify-between items-start mb-8">
                                 <button 
                                   onClick={(e) => toggleWishlist(product, e)}
                                   className={`w-12 h-12 rounded-2xl glass-lvl-1 flex items-center justify-center transition-all shadow-xl hover:scale-110 ${isInWishlist(product.id) ? 'text-red-500 bg-white border-red-100' : 'text-black bg-white border border-black/10 hover:text-red-500'}`}
                                 >
                                    <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} strokeWidth={3} />
                                 </button>
                                 <div className="text-right">
                                    <span className="text-[11px] font-black text-black/80 uppercase tracking-[0.5em] font-inter">Sector 0{index + 1}</span>
                                 </div>
                              </div>

                              <div className="space-y-10 group-hover:translate-y-0 transition-transform duration-1000">
                                 <div className="space-y-5">
                                    <div className="flex items-center gap-3">
                                       <div className="w-2.5 h-2.5 rounded-full bg-accent-violet animate-pulse" />
                                       <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent-violet">PROT-ID: {product.id}</span>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-bold font-outfit tracking-tighter text-black leading-tight uppercase">{product.name}</h3>
                                    <p className="text-base font-medium text-black/80 leading-relaxed line-clamp-2 transition-colors cursor-text">{product.description}</p>
                                 </div>

                                 <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <button 
                                      onClick={(e) => handleQuickAdd(product, e)}
                                      className="flex-1 py-5.5 rounded-[28px] bg-black text-white text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-accent-violet shadow-2xl transition-all"
                                    >
                                       Add to registry
                                    </button>
                                 </div>
                              </div>

                              <div className="mt-8 pt-8 border-t border-black/15 flex justify-between items-end group-hover:opacity-0 transition-all">
                                 <div className="space-y-1">
                                    <span className="text-[11px] font-black uppercase tracking-widest text-black/60">Registry Value</span>
                                    <p className="text-4xl font-bold font-outfit text-black tracking-tighter">${product.price}</p>
                                 </div>
                                 <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black shadow-sm group-hover:bg-black group-hover:text-white transition-all">
                                    <ArrowRight size={22} />
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
                <div className="w-32 h-32 rounded-full bg-black/5 flex items-center justify-center mx-auto border border-black/10">
                   <Filter size={50} className="text-black/30" />
                </div>
                <div className="space-y-6">
                   <h2 className="text-6xl font-bold font-outfit tracking-tighter text-black uppercase leading-none">Registry Empty</h2>
                   <p className="text-black/60 font-inter text-xl max-w-lg mx-auto leading-relaxed">The {slug} archives are currently undergoing synchronization protocols.</p>
                </div>
                <Link href="/shop" className="inline-flex items-center gap-6 px-12 py-6 rounded-[32px] bg-black text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-accent-violet transition-all shadow-2xl">
                   Explore Global Archive
                   <ArrowRight size={22} />
                </Link>
             </div>
          )}

          <div className="py-24 text-center border-t border-black/[0.12]">
             <p className="text-black/80 font-black uppercase tracking-[1em] text-[12px] hover:text-accent-violet transition-colors cursor-default">Manifest Synchronization Optimized // Registry Update Complete</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
