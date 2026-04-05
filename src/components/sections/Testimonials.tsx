"use client";

import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";
import Marquee from "@/components/ui/Marquee";

const testimonials = [
  {
    text: "The Atelier context is so intuitive. I could manifest my signature into a physical heirloom with real-time fidelity.",
    author: "Elena Rossi",
    role: "Visual Archetype",
    image: "/avatar1.png"
  },
  {
    text: "Porul isn't just an atelier; it's a dialogue. The attention to digital provenance and artisanal quality is unmatched.",
    author: "Marcus Chen",
    role: "Collector",
    image: "/avatar2.png"
  },
  {
    text: "Our corporate heritage feels redefined. The Alabaster aesthetic translates our brand's mission into tangible beauty.",
    author: "Sarah Jenkins",
    role: "Curator, TechFlow",
    image: "/avatar3.png"
  },
  {
    text: "The digital craftsmanship is beyond compare. Every pixel feels like it was hand-stitched for my legacy.",
    author: "Adrian Vane",
    role: "Digital Architect",
    image: "/avatar4.png"
  },
  {
    text: "I've never seen such high-fidelity customization. It's like having a master artisan at my fingertips.",
    author: "Sasha Grey",
    role: "Modern Curator",
    image: "/avatar5.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white border-y border-black/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24 text-black">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border-black/5 text-[10px] font-bold uppercase tracking-[0.4em] text-accent-violet mb-8 shadow-sm"
          >
             <Star size={14} className="fill-accent-violet/60 text-accent-violet/60" />
             Atelier Conversations
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter"
          >
            The Voice <span className="text-black/30">of Heritage</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:50s] py-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-lvl-1 p-12 rounded-[56px] border-black/5 relative flex flex-col justify-between hover:glass-lvl-3 transition-all duration-1000 text-black hover:shadow-3xl group w-[450px] mx-4"
            >
              <div className="absolute top-12 right-12 text-black/[0.02] group-hover:text-accent-violet/[0.05] transition-colors">
                <Quote size={84} strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                  <p className="text-black/70 text-xl leading-relaxed mb-16 font-light italic font-inter decoration-accent-violet/10 underline-offset-8">
                    "{testimonial.text}"
                  </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl glass-lvl-1 border-black/5 flex items-center justify-center overflow-hidden bg-neutral-50 shadow-sm group-hover:shadow-black/5 transition-all">
                   <User size={28} className="text-black/10 group-hover:text-accent-violet/40 transition-colors" />
                </div>
                <div>
                   <h4 className="font-bold text-black tracking-tight text-xl font-outfit">{testimonial.author}</h4>
                   <p className="text-[10px] font-bold text-black/20 tracking-[0.4em] uppercase">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        
        {/* Subtle Gradient Overlays for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
      </div>
    </section>
  );
}
