"use client";

import { motion } from "framer-motion";
import { Sparkles, Wand2, ArrowRight } from "lucide-react";

import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-40 pb-24 px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border-black/5 text-[11px] font-bold tracking-[0.5em] text-accent-violet/60 uppercase mb-8 shadow-sm"
            >
               <Sparkles size={14} className="animate-pulse" />
               The Heritage
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter text-black"
            >
              Crafting <span className="text-black/20 italic">Legacy</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-light text-black/40 max-w-3xl mx-auto leading-relaxed"
            >
              Porul is more than an Store; it’s a dialogue between artisanal heritage and digital provenance. We believe your history deserves to be carried in objects of timeless beauty.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Artisanal Logic",
                description: "Every pixel and fiber is meticulously crafted using high-grade materials to ensure longevity and a bespoke digital pulse."
              },
              {
                title: "The Alabaster Aesthetic",
                description: "Our signature visual language emphasizes purity, light, and texture—creating products that feel light as air but solid as history."
              }
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-lvl-2 p-12 rounded-[56px] border-black/5 hover:glass-lvl-3 transition-all duration-700 shadow-sm"
              >
                 <h2 className="text-3xl font-bold font-outfit tracking-tight mb-6">{feature.title}</h2>
                 <p className="text-xl font-light text-black/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
