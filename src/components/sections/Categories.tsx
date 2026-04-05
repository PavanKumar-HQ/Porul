"use client";

import { motion } from "framer-motion";
import { Gift, Shirt, Watch, Briefcase, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";

const categories = [
  {
    title: "Signature Gifts",
    description: "Meaningful objects tailored for your professional and personal legacies.",
    icon: Gift,
    href: "/shop/obsidian-mug",
    color: "from-blue-500/10 to-cyan-500/10",
    image: "/mug.png"
  },
  {
    title: "Artisanal Apparel",
    description: "Premium heavy-weight fabrics meet your unique visual identity.",
    icon: Shirt,
    href: "/shop/classic-cotton-tee",
    color: "from-purple-500/10 to-pink-500/10",
    image: "/tee.png"
  },
  {
    title: "Precision Accessories",
    description: "The fine details that define your daily rhythm and style.",
    icon: Watch,
    href: "/shop/minimalist-watch",
    color: "from-orange-500/10 to-red-500/10",
    image: "/watch.png"
  },
  {
    title: "Corporate Atelier",
    description: "Elevate your brand with custom professional sets and kits.",
    icon: Briefcase,
    href: "/shop/premium-planner",
    color: "from-emerald-500/10 to-teal-500/10",
    image: "/planner.png"
  }
];

export default function Categories() {
  return (
    <section className="py-40 px-8 max-w-7xl mx-auto bg-[#F9F9F9] rounded-[80px] my-24 shadow-sm border border-black/[0.02] relative overflow-hidden group/cat">
      {/* Space Utilization: Background Identity Backdrop */}
      <div className="absolute top-10 right-10 text-[15vw] font-black text-black/[0.02] uppercase tracking-tighter select-none pointer-events-none group-hover/cat:text-accent-violet/[0.04] transition-colors duration-1000">COLLECTION</div>
      
      {/* Subtle Section Divider */}
      <div className="w-full h-px bg-black/[0.04] mb-40 relative z-10" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 text-black">
        <div className="max-w-2xl">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-violet mb-6 font-inter"
          >
             The Categories
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold font-outfit mb-6 tracking-tighter"
          >
            Curated Collections
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/40 text-xl font-light leading-relaxed font-inter"
          >
            Explore our range of premium customizable products designed to elevate your personal and professional narrative.
          </motion.p>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <Link href="/shop" className="group flex items-center gap-4 px-8 py-3.5 rounded-full glass-lvl-1 border border-black/5 text-black/60 hover:text-black hover:glass-lvl-3 transition-all font-bold uppercase tracking-widest text-[10px] font-inter shadow-sm hover:shadow-black/5">
            View All Collections
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <TiltCard key={category.title} maxRotate={8}>
            <Link href={category.href} className="block h-full group">
              <div className="bg-[#F4F4F4] aspect-square p-10 rounded-[48px] border border-black/[0.05] hover:bg-white hover:shadow-2xl transition-all duration-700 flex flex-col justify-between relative overflow-hidden group">
                {/* Category Identity: Soft Material Glass */}
                <div className="absolute inset-0 glass-lvl-1 opacity-20 pointer-events-none" />
                {/* Image Background Layer */}
                <div className="absolute inset-0 z-0 m-4 rounded-[40px] overflow-hidden">
                   <img src={category.image} alt="" className="w-full h-full object-cover opacity-10 group-hover:opacity-40 transition-opacity duration-1000 scale-125 group-hover:scale-100" />
                   <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40`} />
                </div>

                <div className="absolute top-10 right-10 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                   <Sparkles size={16} className="text-accent-gold" />
                </div>

                <div className="relative z-10 text-black">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="w-16 h-16 rounded-[28px] glass-lvl-1 mb-10 flex items-center justify-center text-black/20 group-hover:text-accent-violet group-hover:glass-lvl-3 transition-all duration-500 shadow-sm"
                  >
                    <category.icon size={28} strokeWidth={1} />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-2xl font-bold mb-4 font-outfit tracking-tight"
                  >
                    {category.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="text-sm text-black/30 leading-relaxed font-light font-inter"
                  >
                    {category.description}
                  </motion.p>
                </div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: index * 0.1 + 0.5 }}
                   className="mt-16 flex items-center justify-between relative z-10"
                >
                   <span className="text-xs font-bold uppercase tracking-[0.4em] text-black/40 group-hover:text-accent-violet transition-colors font-inter">Begin Manifestation</span>
                   <div className="w-12 h-12 rounded-full border border-black/5 glass-lvl-1 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm hover:shadow-black/10">
                      <ArrowUpRight size={20} />
                   </div>
                </motion.div>
              </div>
            </Link>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
