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
            className="fixed inset-0 bg-white/60 backdrop-blur-md z-[100]"
          />

          {/* Drawer (Alabaster Panel) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-lg glass-lvl-3 border-l border-black/15 z-[101] shadow-[0_0_120px_rgba(0,0,0,0.15)] flex flex-col bg-white"
          >
            <div className="p-10 border-b border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-2xl border border-black/15 flex items-center justify-center text-black shadow-xl">
                    <ShoppingBag size={24} />
                 </div>
                 <div className="flex flex-col">
                    <h2 className="text-2xl font-bold font-outfit uppercase tracking-tighter text-black">Atelier Bag</h2>
                    <span className="text-[11px] font-black text-black/60 uppercase tracking-[0.2em]">
                       {cart.length} Artifacts in registry
                    </span>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-4 hover:bg-black hover:text-white rounded-3xl transition-all text-black/40 shadow-sm border border-black/5"
              >
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 p-12 flex flex-col items-center justify-center text-center space-y-8">
                 <div className="w-24 h-24 rounded-full border border-black/10 flex items-center justify-center text-black/10">
                    <ShoppingBag size={48} strokeWidth={1.5} />
                 </div>
                 <div className="space-y-4">
                    <p className="font-bold text-black/60 text-xl">The registry is empty.</p>
                    <p className="text-black/40 text-base font-normal">Your curated artifacts will appear here.</p>
                 </div>
                 <button 
                    onClick={() => setIsOpen(false)}
                    className="px-10 py-4 rounded-[28px] bg-black text-white text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all"
                 >
                   Return to Registry
                 </button>
              </div>
            ) : (
              <>
                {/* 🚚 Registry Transit Status */}
                <div className="mx-10 mt-8 p-8 rounded-[40px] bg-black text-white shadow-2xl relative overflow-hidden group/shipping">
                   <div className="absolute inset-0 bg-accent-violet/10 pointer-events-none" />
                   <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-end">
                         <span className="text-[11px] font-black uppercase tracking-[0.4em]">Transit Protocol</span>
                         <span className="text-[11px] font-bold text-white/80">
                            {total >= 500 ? 'Unlocked: Complimentary Global Delivery' : `Manifest $${(500 - total).toFixed(0)} more for Registry Delivery`}
                         </span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${Math.min(100, (total / 500) * 100)}%` }}
                           className={`h-full ${total >= 500 ? 'bg-green-400' : 'bg-accent-violet'} transition-all duration-1000`}
                         />
                      </div>
                   </div>
                </div>

                <div className="flex-1 overflow-y-auto py-10 px-10 space-y-8 scrollbar-hide">
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id + item.customText}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-6 p-6 rounded-[40px] border border-black/10 bg-white relative group transition-all duration-700 hover:shadow-2xl"
                    >
                      <div className="relative w-28 h-28 rounded-[28px] overflow-hidden bg-neutral-100 flex-shrink-0 border border-black/10">
                         <div className="absolute inset-0 flex items-center justify-center p-3 text-center overflow-hidden z-10">
                            <span className={`text-[10px] font-black leading-none ${item.customFont} text-black/80`} style={{ color: item.customColor }}>
                               {item.customText}
                            </span>
                         </div>
                         <img src={item.image || '/placeholder.jpg'} alt={item.name} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1 text-black">
                         <div>
                            <div className="flex justify-between items-start">
                               <h3 className="font-bold text-lg tracking-tighter leading-tight uppercase">{item.name}</h3>
                               <button 
                                  onClick={() => removeFromCart(item.id, item.customText)}
                                  className="w-10 h-10 rounded-2xl hover:bg-red-50 text-black/40 hover:text-red-500 transition-all border border-transparent hover:border-red-100 flex items-center justify-center"
                               >
                                  <Trash2 size={18} />
                                </button>
                            </div>
                            <p className="text-[11px] font-black text-black/60 uppercase tracking-[0.3em] mt-2">
                               Manifest: {item.customText} • {item.category}
                            </p>
                         </div>

                         <div className="flex justify-between items-center mt-6">
                            <div className="flex items-center gap-4 border border-black/20 rounded-[20px] px-4 py-2 bg-white">
                               <button 
                                  onClick={() => updateQuantity(item.id, item.customText, item.quantity - 1)}
                                  className="w-6 h-6 flex items-center justify-center hover:text-black transition-colors text-black/40"
                                >
                                  <Minus size={14} />
                               </button>
                               <span className="text-[14px] font-black w-6 text-center text-black">{item.quantity}</span>
                               <button 
                                  onClick={() => updateQuantity(item.id, item.customText, item.quantity + 1)}
                                  className="w-6 h-6 flex items-center justify-center hover:text-black transition-colors text-black/40"
                                >
                                  <Plus size={14} />
                               </button>
                            </div>
                            <span className="font-bold text-lg text-black">${(item.price * item.quantity).toFixed(0)}</span>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-12 space-y-10 border-t border-black/10 bg-white shadow-2xl relative z-10">
                   {/* 🛡️ Secure Badges - MAX Contrast */}
                   <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-black/80">
                         <ShieldCheck size={18} className="text-accent-gold" />
                         Certified Craft
                      </div>
                      <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-black/80">
                         <Truck size={18} className="text-accent-blue" />
                         Insured Global
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="flex justify-between items-end">
                         <span className="text-black/80 font-black uppercase tracking-widest text-[11px]">Total Investment</span>
                         <span className="text-5xl font-bold font-outfit text-black tracking-tighter">${total.toFixed(0)}</span>
                      </div>
                      
                      <button className="w-full py-7 rounded-[32px] bg-black text-white font-black text-[13px] uppercase tracking-[0.4em] flex items-center justify-center gap-6 hover:bg-accent-violet transition-all duration-700 shadow-2xl active:scale-95 group">
                         Initiate Acquisition
                         <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
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
