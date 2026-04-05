"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="text-center space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border-black/5 text-[11px] font-bold tracking-[0.5em] text-accent-violet/60 uppercase mb-8 shadow-sm"
            >
               <MessageCircle size={14} className="animate-pulse" />
               The Dialogue
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter text-black"
            >
              Contact <span className="text-black/20 italic">Us</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-light text-black/40 leading-relaxed"
            >
              Every signature creation begins with a conversation. We’re here to help you manifest your identity.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-lvl-3 rounded-[64px] border border-black/5 p-16 shadow-2xl space-y-12"
          >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                   <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">The Atelier Email</h2>
                   <p className="text-2xl font-bold font-outfit text-black underline-offset-8 decoration-accent-violet/20 underline decoration-2">atelier@porul.digital</p>
                </div>
                <div className="space-y-4">
                   <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Custom Support</h2>
                   <p className="text-2xl font-bold font-outfit text-black underline-offset-8 decoration-accent-violet/20 underline decoration-2">+1 800 PORUL ART</p>
                </div>
             </div>
             
             <div className="pt-12 border-t border-black/5 space-y-8">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Manifest A Request</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input type="text" placeholder="Full Identity" className="glass-lvl-1 border-black/5 rounded-2xl p-6 outline-none focus:border-accent-violet transition-colors text-black placeholder:text-black/10 font-bold tracking-tight" />
                   <input type="email" placeholder="Digital Signal (Email)" className="glass-lvl-1 border-black/5 rounded-2xl p-6 outline-none focus:border-accent-violet transition-colors text-black placeholder:text-black/10 font-bold tracking-tight" />
                   <textarea placeholder="Message Protocol" className="glass-lvl-1 border-black/5 rounded-2xl p-6 outline-none focus:border-accent-violet transition-colors text-black placeholder:text-black/10 font-bold tracking-tight col-span-1 md:col-span-2 h-40 resize-none" />
                </div>
                <button className="w-full py-6 rounded-[32px] bg-black text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] transition-all duration-500 shadow-2xl group">
                   Submit Signature
                   <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
             </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
