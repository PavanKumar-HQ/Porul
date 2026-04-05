"use client";

import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    quote: "The digital craftsmanship is beyond compare. Every pixel feels like it was hand-stitched for my legacy.",
    author: "Adrian Vane",
    role: "Digital Architect",
    rating: 5
  },
  {
    quote: "I've never seen such high-fidelity customization. It's like having a master artisan at my fingertips.",
    author: "Sasha Grey",
    role: "Modern Curator",
    rating: 5
  },
  {
    quote: "Porul has redefined what it means to own a physical piece of your digital identity. Pure elite execution.",
    author: "Marcus Thorne",
    role: "Heritage Collector",
    rating: 5
  },
  {
    quote: "The acquisition protocol is seamless. My signature was translated onto obsidian glass with true artisan spirit.",
    author: "Elena Vance",
    role: "Visual Director",
    rating: 5
  },
  {
    quote: "A spatial atelier that understands the weight of digital value. This is the future of luxury acquisition.",
    author: "Julian Reed",
    role: "Spatial Designer",
    rating: 5
  }
];

export default function Testimonials() {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 px-8 bg-[#F0F7FF]/10 relative overflow-hidden group/test-section border-t border-black/[0.04]">
      {/* Structural Differentiation (Cleaned) */}
      <div className="max-w-[1400px] mx-auto relative z-10 mb-16">
        <div className="text-center space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-black/[0.05] text-[10px] font-black tracking-[0.4em] text-accent-violet/60 uppercase bg-white/40"
            >
               Atelier Conversations
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-6xl font-bold font-outfit tracking-tighter text-black leading-[0.85]"
            >
              The Voice of <span className="text-black/5 italic">Heritage</span>
            </motion.h2>
        </div>
      </div>

      {/* Marquee Implementation (Cleaned) */}
      <div className="flex overflow-hidden relative group/marquee">
         <motion.div 
            className="flex gap-8 py-8 px-4 whitespace-nowrap min-w-full items-center"
            animate={{ x: [0, -1500] }}
            transition={{ 
               duration: 60, 
               repeat: Infinity, 
               ease: "linear" 
            }}
         >
            {doubledTestimonials.map((test, index) => (
               <div
                  key={index}
                  className="relative w-[450px] flex-shrink-0 p-8 rounded-[40px] border border-black/[0.05] bg-white shadow-lg hover:shadow-2xl transition-all duration-700 group/card overflow-hidden whitespace-normal"
               >
                  <div className="relative z-10 space-y-6">
                     <div className="flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                        {[...Array(test.rating)].map((_, i) => (
                           <Star key={i} size={12} className="fill-accent-gold text-accent-gold" />
                        ))}
                     </div>

                     <p className="text-lg font-light text-black/50 italic leading-relaxed font-outfit group-hover:text-black/70 transition-colors">
                        "{test.quote}"
                     </p>

                     <div className="flex items-center gap-4 pt-4 border-t border-black/[0.03]">
                        <div className="w-12 h-12 rounded-2xl border border-black/[0.03] flex items-center justify-center text-black/20 group-hover/card:bg-black group-hover/card:text-white transition-all bg-white shadow-sm">
                           <User size={20} />
                        </div>
                        <div>
                           <h4 className="text-base font-bold font-outfit tracking-tight text-black/60 group-hover:text-black transition-colors">{test.author}</h4>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20">{test.role}</p>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </motion.div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/60 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/60 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
