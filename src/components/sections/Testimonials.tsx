"use client";

import { motion } from "framer-motion";
import { Quote, Star, Sparkles, User } from "lucide-react";

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
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-8 bg-white relative overflow-hidden group/test-section">
      {/* Dynamic Background (Reduced Empty Feel) */}
      <div className="absolute inset-x-0 inset-y-0 opacity-[0.02] select-none pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(126,58,242,0.1),transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/[0.015] uppercase tracking-tighter select-none pointer-events-none group-hover/test-section:text-accent-violet/[0.03] transition-colors duration-1000">VOICES</div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full glass-lvl-1 border border-black/10 text-[10px] font-black tracking-[0.4em] text-accent-violet mb-4 uppercase bg-white/40"
            >
               <Star size={12} className="animate-pulse text-accent-gold" fill="currentColor" />
               Atelier Conversations
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter text-black leading-[0.85]"
            >
              The Voice <br />
              <span className="text-black/15 italic text-black/25">of Heritage</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {testimonials.map((test, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="relative p-10 rounded-[40px] border border-black/5 bg-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-700 group/card overflow-hidden"
             >
                <div className="absolute -top-6 -right-6 text-black/[0.03] group-hover/card:text-accent-violet/[0.06] transition-colors duration-700">
                   <Quote size={120} strokeWidth={4} />
                </div>
                
                <div className="relative z-10 space-y-8">
                   <div className="flex gap-1.5">
                      {[...Array(test.rating)].map((_, i) => (
                         <Star key={i} size={14} className="fill-accent-gold text-accent-gold" />
                      ))}
                   </div>

                   <p className="text-xl font-light text-black/60 italic leading-relaxed font-outfit">
                      "{test.quote}"
                   </p>

                   <div className="flex items-center gap-5 pt-4 border-t border-black/5">
                      <div className="w-14 h-14 rounded-2xl glass-lvl-2 border border-black/5 flex items-center justify-center text-black/30 group-hover/card:bg-black group-hover/card:text-white transition-all bg-white shadow-sm">
                         <User size={24} />
                      </div>
                      <div>
                         <h4 className="text-lg font-bold font-outfit tracking-tight text-black">{test.author}</h4>
                         <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">{test.role}</p>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
