"use client";

import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    quote: "The digital craftsmanship is beyond compare. Every pixel feels like it was hand-stitched for my signature legacy.",
    author: "Adrian Vane",
    role: "Digital Architect",
    rating: 5
  },
  {
    quote: "I've never seen such high-fidelity customization. It's like having a master artisan at my digital fingertips.",
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
    quote: "A spatial Store that understands the depth of digital value. This is the future of luxury acquisition.",
    author: "Julian Reed",
    role: "Spatial Designer",
    rating: 5
  }
];

export default function Testimonials() {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-8 bg-[#FAF9F6] relative overflow-hidden group/test-section border-y border-black/[0.12]">
      {/* Top Sector Badge */}
      <div className="absolute top-0 left-[20%] py-2.5 px-8 rounded-b-[24px] bg-black text-white text-[10px] font-black uppercase tracking-[0.6em] z-20 shadow-2xl">
         Customer Reviews
      </div>

      <div className="absolute inset-x-0 inset-y-0 opacity-[0.04] select-none pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,112,243,0.1),transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-black text-black/[0.04] uppercase tracking-tighter select-none pointer-events-none group-hover/test-section:text-accent-violet/[0.08] transition-all duration-1000">VOICE</div>

      <div className="max-w-[1400px] mx-auto relative z-10 mb-20">
        <div className="text-center space-y-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/20 text-[11px] font-black tracking-[0.4em] text-accent-violet uppercase bg-white shadow-sm"
            >
               Real Customer Stories
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-6xl md:text-8xl font-bold font-outfit tracking-tighter text-black leading-none uppercase"
            >
              What Customers Say
            </motion.h2>
        </div>
      </div>

      {/* Marquee Implementation - MAX Contrast */}
      <div className="flex overflow-hidden relative group/marquee items-start">
         <motion.div 
            className="flex gap-10 py-10 px-4 whitespace-nowrap min-w-full items-start"
            animate={{ x: [0, -1500] }}
            transition={{ 
               duration: 50, 
               repeat: Infinity, 
               ease: "linear" 
            }}
         >
            {doubledTestimonials.map((test, index) => (
               <div
                  key={index}
                  className="relative w-[520px] flex-shrink-0 p-12 rounded-[56px] border border-black/15 bg-white shadow-[0_48px_80px_-20px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:scale-[1.02] transition-all duration-1000 group/card overflow-hidden whitespace-normal"
               >
                  <div className="absolute -top-6 -right-6 text-black/[0.04] group-hover/card:text-accent-violet/[0.08] transition-colors duration-1000">
                     <Quote size={120} strokeWidth={5} />
                  </div>
                  
                  <div className="relative z-10 space-y-10">
                     <div className="flex gap-2">
                        {[...Array(test.rating)].map((_, i) => (
                           <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                        ))}
                     </div>

                     <p className="text-2xl font-medium text-black leading-relaxed font-outfit tracking-tight">
                        "{test.quote}"
                     </p>

                     <div className="flex items-center gap-6 pt-10 border-t border-black/10">
                        <div className="w-16 h-16 rounded-[24px] border border-black/15 flex items-center justify-center text-black group-hover/card:bg-black group-hover/card:text-white transition-all bg-white shadow-xl">
                           <User size={32} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold font-outfit tracking-tighter text-black uppercase leading-none">{test.author}</h4>
                           <p className="text-[11px] font-black uppercase tracking-[0.3em] text-black/60 mt-2">{test.role}</p>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </motion.div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#FAF9F6] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#FAF9F6] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
