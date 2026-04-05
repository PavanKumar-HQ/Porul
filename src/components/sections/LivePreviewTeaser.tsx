"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Type, Palette, Sparkles, Wand2 } from "lucide-react";

export default function LivePreviewTeaser() {
  const [text, setText] = useState("Your Story");
  const [activeFont, setActiveFont] = useState("font-serif");
  const [activeColor, setActiveColor] = useState("#121212"); // Inverted for Alabaster

  const fonts = [
    { name: "Serif", class: "font-serif" },
    { name: "Sans", class: "font-sans" },
    { name: "Mono", class: "font-mono" },
    { name: "Luxury", class: "font-outfit" }
  ];

  const colors = ["#121212", "#3B82F6", "#7E3AF2", "#D4AF37"];

  return (
    <section className="py-24 px-8 bg-white border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        
        {/* Left: Interactive Controls (Alabaster Edition) */}
        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-lvl-1 border-black/5 text-[10px] font-bold tracking-[0.3em] text-accent-violet mb-6 uppercase">
               <Wand2 size={14} className="animate-pulse" />
               Experience the Magic
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8 text-black leading-tight">Instant <br />Personalization</h2>
            <p className="text-black/40 text-lg mb-12 font-light leading-relaxed">
               "See your vision come to life instantly. Our high-fidelity rendering engine gives you a pixel-perfect preview of your creation."
            </p>

            <div className="space-y-10">
              {/* Text Input */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-black/20 font-bold ml-1">Custom Text</label>
                <div className="relative group">
                   <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-violet/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700" />
                   <input 
                      type="text" 
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      maxLength={20}
                      className="w-full bg-black/[0.01] border border-black/5 rounded-3xl p-6 py-7 text-3xl font-medium outline-none focus:bg-white focus:shadow-2xl transition-all font-outfit text-black"
                      placeholder="Your Story..."
                   />
                </div>
              </div>

              {/* Font & Color Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-[0.4em] text-black/20 font-bold ml-1">Select Font</label>
                   <div className="flex flex-wrap gap-2">
                      {fonts.map((f) => (
                        <button 
                          key={f.name}
                          onClick={() => setActiveFont(f.class)}
                          className={`px-4 py-2.5 rounded-2xl text-[10px] font-bold transition-all uppercase tracking-widest ${activeFont === f.class ? 'bg-black text-white shadow-xl scale-105' : 'glass-lvl-1 border-black/5 hover:border-black/20 text-black/40'}`}
                        >
                          {f.name}
                        </button>
                      ))}
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-[0.4em] text-black/20 font-bold ml-1">Style Tone</label>
                   <div className="flex gap-4">
                      {colors.map((c) => (
                        <button 
                           key={c}
                           onClick={() => setActiveColor(c)}
                           className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-125 ${activeColor === c ? 'border-black scale-125 shadow-lg' : 'border-transparent'}`}
                           style={{ backgroundColor: c }}
                        />
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Live Preview Engine (Alabaster HD Simulation) */}
        <div className="flex-1 w-full flex items-center justify-center relative py-12">
           {/* Decorative Aura Blobs */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] -z-10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-black/5 rounded-full -z-10 animate-spin-slow opacity-20" />
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative w-80 h-[500px] md:w-96 md:h-[580px]"
           >
              {/* Product Preview Stage (Alabaster Version) */}
              <div className="absolute inset-0 glass-lvl-3 rounded-[56px] border-black/5 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.12)] flex flex-col justify-between overflow-hidden">
                 <div className="w-full h-[70%] glass-lvl-1 rounded-[40px] bg-white/50 border-black/5 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-white opacity-50" />
                    
                    <div className="relative z-10 w-full px-10 text-center break-words select-none transition-all duration-700 overflow-hidden" 
                         style={{ color: activeColor }}>
                       <AnimatePresence mode="wait">
                         <motion.span
                           key={text + activeFont + activeColor}
                           initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                           animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                           exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
                           transition={{ duration: 0.5 }}
                           className={`text-5xl font-bold tracking-tighter leading-none block drop-shadow-sm ${activeFont}`}
                         >
                           {text || "..."}
                         </motion.span>
                       </AnimatePresence>
                    </div>

                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 glass-lvl-2 border-black/10 rounded-full" />
                    <div className="absolute bottom-10 right-10 text-[8px] font-bold text-black/10 tracking-[0.4em] uppercase">Signature Edition</div>
                 </div>

                 <div className="p-6 pb-8 space-y-6">
                    <div className="flex justify-between items-center">
                       <div className="space-y-1">
                          <span className="block text-[8px] font-bold text-black/20 uppercase tracking-[0.3em]">Signature SKU</span>
                          <span className="block text-xs font-mono text-black/40 uppercase tracking-widest">PRL-ALAB-22</span>
                       </div>
                       <div className="glass-lvl-1 border-black/5 px-4 py-1.5 rounded-full text-[9px] font-bold text-accent-violet uppercase tracking-widest shadow-sm">
                          Pristine Render
                       </div>
                    </div>
                    <div className="w-full h-1 bg-black/[0.03] rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: "0%" }}
                         whileInView={{ width: "78%" }}
                         transition={{ duration: 2, ease: "circOut" }}
                         className="h-full bg-black shadow-sm" 
                       />
                    </div>
                    <div className="flex justify-between items-end">
                       <span className="text-3xl font-bold font-outfit text-black">$54.00</span>
                       <button className="px-6 py-2.5 bg-black text-white rounded-2xl text-[9px] font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">Acquire</button>
                    </div>
                 </div>
              </div>

              <div className="absolute -right-10 top-1/4 glass-lvl-2 p-5 rounded-3xl flex flex-col items-center gap-2 border-black/5 shadow-2xl animate-bounce-slow">
                 <Sparkles size={18} className="text-accent-gold" />
                 <span className="text-[9px] font-bold text-black/60 uppercase tracking-widest">4K Alpha</span>
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
