"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, CreditCard, Clock, Truck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border-black/5 text-[11px] font-bold tracking-[0.5em] text-accent-violet/60 uppercase mb-4 shadow-sm"
            >
               <ShieldCheck size={14} className="animate-pulse" />
               Secure Portal
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter text-black">
               Finalize <span className="text-black/20 italic">Creation</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
               <div className="glass-lvl-3 rounded-[40px] border-black/5 p-12 space-y-10 shadow-2xl">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-2xl glass-lvl-1 flex items-center justify-center text-accent-violet">
                        <CreditCard size={20} />
                     </div>
                     <h2 className="text-xl font-bold font-outfit text-black tracking-tight">Payment Protocol</h2>
                  </div>
                  <div className="space-y-6">
                     <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] text-black/20">
                        <span>Checkout ID: P-00X12-AF</span>
                        <span>Estimated Craft Time: 12-14 Days</span>
                     </div>
                     <button className="w-full py-6 rounded-[32px] bg-black text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] transition-all duration-500 shadow-2xl group">
                        Initiate Payment
                        <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                     </button>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               <div className="glass-lvl-1 rounded-[40px] border-black/5 p-12 space-y-12 shadow-sm">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-2xl glass-lvl-2 flex items-center justify-center text-accent-gold">
                        <Clock size={20} />
                     </div>
                     <h2 className="text-xl font-bold font-outfit text-black tracking-tight">Order Telemetry</h2>
                  </div>
                  <div className="space-y-6">
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-light text-black/40">Subtotal</span>
                        <span className="font-bold text-black">$0.00</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-light text-black/40">Crafting Fee</span>
                        <span className="font-bold text-black">$0.00</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-light text-black/40">Insured Shipping</span>
                        <span className="font-bold text-accent-blue uppercase tracking-widest text-[9px]">Included</span>
                     </div>
                     <div className="h-px bg-black/5" />
                     <div className="flex justify-between items-end">
                        <span className="text-sm font-bold uppercase tracking-widest text-black/40">Total</span>
                        <span className="text-5xl font-bold font-outfit text-black">$0.00</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
