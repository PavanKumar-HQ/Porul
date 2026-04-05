"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Clock, Truck } from "lucide-react";
import Image from "next/image";

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Alabaster Frost) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-white/40 backdrop-blur-md z-[100]"
          />

          {/* Drawer (Alabaster Panel) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md glass-lvl-3 border-l border-black/5 z-[101] shadow-[0_0_80px_rgba(0,0,0,0.1)] flex flex-col"
          >
            <div className="p-8 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-2xl glass-lvl-1 flex items-center justify-center text-accent-violet">
                    <ShoppingBag size={20} />
                 </div>
                 <div className="flex flex-col">
                    <h2 className="text-xl font-bold font-outfit uppercase tracking-tighter text-black">Atelier Bag</h2>
                    <span className="text-[9px] font-bold text-black/30 uppercase tracking-[0.2em]">
                       {cart.length} Signature Creations
                    </span>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 hover:bg-black/5 rounded-2xl transition-all text-black/20 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full glass-lvl-1 flex items-center justify-center text-black/10">
                   <ShoppingBag size={40} strokeWidth={1} />
                </div>
                <div className="space-y-2">
                   <p className="font-bold text-black/40 text-lg">Your bag is empty.</p>
                   <p className="text-black/20 text-sm font-light">Start your creative journey in the Atelier.</p>
                </div>
                <button 
                   onClick={() => setIsOpen(false)}
                   className="px-8 py-3 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
                >
                  Return to Collection
                </button>
              </div>
            ) : (
              <>
                {/* ⚡ V2 Urgency (Alabaster Edition) */}
                <div className="mx-8 mt-6 p-5 rounded-3xl glass-lvl-1 border-accent-gold/20 flex items-center gap-4 bg-accent-gold/5 shadow-sm">
                   <div className="w-10 h-10 rounded-2xl glass-lvl-2 flex items-center justify-center text-accent-gold animate-pulse shadow-sm">
                      <Clock size={18} />
                   </div>
                   <div className="flex-1">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-gold">Immediate Dispatch</p>
                      <p className="text-xs text-black/60">Finalize within <span className="text-black font-bold">12:44</span> for priority crafting.</p>
                   </div>
                </div>

                <div className="flex-1 overflow-y-auto py-10 px-8 space-y-6 scrollbar-hide">
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id + item.customText}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 p-5 rounded-[32px] glass-lvl-1 border-black/[0.03] relative group hover:shadow-xl transition-all duration-500"
                    >
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-black/5">
                         {/* Design Snapshot */}
                         <div className="absolute inset-0 flex items-center justify-center p-2 text-center overflow-hidden">
                            <span className={`text-[9px] font-bold leading-none ${item.customFont} opacity-60`} style={{ color: item.customColor }}>
                               {item.customText}
                            </span>
                         </div>
                         <Image src={item.image || '/placeholder.jpg'} alt={item.name} fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1 text-black">
                         <div>
                            <div className="flex justify-between items-start">
                               <h3 className="font-bold text-sm tracking-tight">{item.name}</h3>
                               <button 
                                  onClick={() => removeFromCart(item.id, item.customText)}
                                  className="text-black/10 hover:text-red-500 transition-colors"
                               >
                                  <Trash2 size={16} />
                                </button>
                            </div>
                            <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest mt-1">
                               "{item.customText}" • {item.category}
                            </p>
                         </div>

                         <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center gap-3 glass-lvl-1 border-black/5 rounded-full px-3 py-1.5">
                               <button 
                                  onClick={() => updateQuantity(item.id, item.customText, item.quantity - 1)}
                                  className="p-1 hover:text-accent-violet transition-colors text-black/20 hover:text-black"
                               >
                                  <Minus size={12} />
                               </button>
                               <span className="text-xs font-bold w-5 text-center text-black/60">{item.quantity}</span>
                               <button 
                                  onClick={() => updateQuantity(item.id, item.customText, item.quantity + 1)}
                                  className="p-1 hover:text-accent-violet transition-colors text-black/20 hover:text-black"
                               >
                                  <Plus size={12} />
                               </button>
                            </div>
                            <span className="font-bold text-sm text-black/80">${(item.price * item.quantity).toFixed(2)}</span>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-10 space-y-8 glass-lvl-3 border-t border-black/5 shadow-2xl">
                   {/* 🛡️ Secure Badges */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-black/20">
                         <ShieldCheck size={14} className="text-accent-gold" />
                         Certified Craft
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-black/20">
                         <Truck size={14} className="text-accent-blue" />
                         Insured Global
                      </div>
                   </div>

                   <div className="space-y-5">
                      <div className="flex justify-between items-end">
                         <span className="text-black/30 font-bold uppercase tracking-widest text-[10px]">Total Investment</span>
                         <span className="text-4xl font-bold font-outfit text-black">${total.toFixed(2)}</span>
                      </div>
                      
                      <button className="w-full py-6 rounded-[32px] bg-black text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl group">
                         Initiate Handcrafting
                         <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                      </button>
                   </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
