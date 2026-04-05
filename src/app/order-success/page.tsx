"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Package, Truck, ShoppingBag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 rounded-full glass-lvl-1 flex items-center justify-center text-accent-violet mx-auto shadow-2xl"
          >
             <CheckCircle size={48} strokeWidth={1} />
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter text-black"
            >
              Order <span className="text-black/20 italic text-8xl md:text-[120px]">Confirmed</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-lvl-3 rounded-[40px] border border-black/5 p-12 shadow-2xl max-w-2xl mx-auto space-y-8"
            >
               <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Protocol 12 // Fabrication Initiated</span>
                  <p className="text-2xl font-bold font-outfit text-black tracking-tight">Order #PRL-9782-XF</p>
               </div>
               
               <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-8">
                  <div className="space-y-2">
                     <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/20">Estimated Delivery</p>
                     <p className="text-lg font-bold font-outfit text-black">April 18, 2026</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 underline decoration-accent-violet/20 underline-offset-4">Tracking Protocol</p>
                     <p className="text-lg font-bold font-outfit text-black">Active</p>
                  </div>
               </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-12"
          >
            <Link href="/dashboard/orders" className="group px-10 py-5 rounded-[32px] bg-black text-white font-bold flex items-center gap-4 transition-all hover:scale-105 shadow-2xl">
               Track Your Artifact
               <Truck size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link href="/shop" className="group px-10 py-5 rounded-[32px] glass-lvl-1 border-black/5 font-bold flex items-center gap-4 hover:glass-lvl-3 transition-all duration-500 shadow-sm">
               <ShoppingBag size={20} className="text-accent-violet" />
               Continue Discovery
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
