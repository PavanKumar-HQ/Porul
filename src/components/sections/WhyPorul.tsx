"use client";

import { motion } from "framer-motion";
import { Hammer, Truck, Sparkles, Wand2, ShieldCheck, Microscope } from "lucide-react";

const features = [
  {
    title: "Artisanal Logic",
    description: "Every object is meticulously crafted using high-grade materials to ensure longevity and a bespoke digital pulse.",
    icon: Hammer,
  },
  {
    title: "Design Studio",
    description: "Our proprietary customization atelier lets you manifest your unique vision into physical reality.",
    icon: Wand2,
  },
  {
    title: "Global Protocol",
    description: "Experience white-glove global shipping with tracked delivery, ensuring your creations reach you with care.",
    icon: Truck,
  },
  {
    title: "Heritage Grade",
    description: "From sustainable elements to aerospace-grade ceramics, we only use materials worthy of your story.",
    icon: Microscope,
  },
];

export default function WhyPorul() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto bg-[#F9F9F9] rounded-[64px] my-12 shadow-sm border border-black/[0.02]">
      {/* Section Divider */}
      <div className="w-full h-px bg-black/[0.03] mb-32" />

      <div className="text-center mb-24 text-black">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-2 border-black/5 text-[10px] font-bold uppercase tracking-[0.4em] text-accent-violet mb-8 shadow-sm"
        >
           <ShieldCheck size={14} className="text-accent-violet/60" />
           The Porul Philosophy
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter"
        >
          Why Define <span className="text-black/30">With Us?</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-lvl-2 p-12 rounded-[56px] border-black/5 hover:glass-lvl-3 transition-all duration-1000 flex flex-col items-center text-center text-black hover:shadow-3xl"
          >
            <div className="w-20 h-20 rounded-[32px] glass-lvl-1 mb-10 flex items-center justify-center text-black/40 group-hover:text-accent-violet group-hover:glass-lvl-3 transition-all duration-700 shadow-sm group-hover:shadow-black/5">
              <feature.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-5 font-outfit tracking-tight">{feature.title}</h3>
            <p className="text-black/60 text-sm leading-relaxed font-light font-inter px-4">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
