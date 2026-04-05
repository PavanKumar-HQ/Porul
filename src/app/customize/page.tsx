"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { products } from "@/data/products";
import Footer from "@/components/layout/Footer";
import { Sparkles, Wand2, ArrowRight, Type, Check, ChevronRight, Save, ShoppingBag, Fingerprint } from "lucide-react";
import { useCart } from "@/context/CartContext";

const fonts = [
  { name: "Inter", className: "font-inter" },
  { name: "Outfit", className: "font-outfit" },
  { name: "Serif", className: "font-serif italic" },
  { name: "Mono", className: "font-mono" },
];

const colors = [
  { hex: "#000000", name: "Onyx" },
  { hex: "#7E3AF2", name: "Violet" },
  { hex: "#007AFF", name: "Blue" },
  { hex: "#D4AF37", name: "Gold" },
];

export default function CustomizePage() {
  const { addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [customText, setCustomText] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const previewRef = useRef<HTMLDivElement>(null);

  const handleFinalize = () => {
    addToCart(selectedProduct, customText, selectedFont.name, selectedColor.hex);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black transition-colors duration-700">
      
      <main className="flex-1 px-8 max-w-7xl mx-auto w-full mb-24">
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-4 mb-20">
          {[1, 2, 3].map((s) => (
             <div key={s} className="flex items-center gap-4">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 border ${
                    step >= s ? 'bg-black text-white border-transparent' : 'glass-lvl-1 text-black/20 border-black/5'
                  }`}
                >
                   {step > s ? <Check size={14} /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-px ${step > s ? 'bg-black' : 'bg-black/5'} transition-colors duration-500`} />}
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT: Live Preview */}
          <div className="sticky top-40 space-y-8">
            <div className="aspect-square rounded-[64px] glass-lvl-1 border-black/5 relative overflow-hidden flex items-center justify-center">
               <div className={`absolute inset-0 bg-gradient-to-br ${selectedProduct.color} opacity-20 blur-[100px]`} />
               
               <motion.div 
                 key={selectedProduct.id}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="relative z-10 w-full h-full flex flex-col items-center justify-center p-20"
               >
                  {/* Symbolic Product Representative */}
                  <div className="w-full h-full glass-lvl-2 rounded-[48px] shadow-2xl flex items-center justify-center relative overflow-hidden group">
                     {/* Signature Overlay */}
                     <AnimatePresence mode="wait">
                        {customText && (
                          <motion.div 
                            key={customText + selectedFont.name + selectedColor.hex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`absolute inset-0 flex items-center justify-center p-12 pointer-events-none`}
                          >
                             <p 
                               className={`${selectedFont.className} text-5xl md:text-7xl font-bold tracking-tight text-center break-words opacity-80`}
                               style={{ color: selectedColor.hex }}
                             >
                                {customText}
                             </p>
                          </motion.div>
                        )}
                     </AnimatePresence>
                     
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
                     <p className="text-[10px] font-bold text-black/5 uppercase tracking-[0.5em] rotate-12 select-none">{selectedProduct.name}</p>
                  </div>
               </motion.div>
            </div>

            <div className="flex items-center gap-6 glass-lvl-1 p-6 rounded-[32px] border-black/5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-violet/10 text-accent-violet">
                   <Fingerprint size={24} />
                </div>
                <div className="text-left">
                   <p className="text-sm font-bold font-outfit uppercase tracking-wider text-black/40">Identification ID</p>
                   <p className="text-lg font-bold font-outfit">PROTO-SIG-098X</p>
                </div>
            </div>
          </div>

          {/* RIGHT: Controls */}
          <div className="space-y-12">
             <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                     <div className="space-y-4">
                        <h2 className="text-4xl font-bold font-outfit tracking-tighter">Choose Your <span className="text-black/20 italic">Product</span></h2>
                        <p className="text-black/40">Select the base item for your custom design.</p>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        {products.map((p) => (
                           <button 
                             key={p.id}
                             onClick={() => setSelectedProduct(p)}
                             className={`p-6 rounded-[32px] border transition-all duration-700 text-left space-y-4 group ${
                               selectedProduct.id === p.id ? 'glass-lvl-3 border-accent-violet border-2' : 'glass-lvl-1 border-black/5 hover:glass-lvl-2'
                             }`}
                           >
                              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} opacity-40 group-hover:scale-110 transition-transform`} />
                              <div>
                                 <p className="font-bold font-outfit tracking-tight">{p.name}</p>
                                 <p className="text-[9px] font-bold uppercase tracking-widest text-black/20">₹{p.price}</p>
                              </div>
                           </button>
                        ))}
                     </div>
                     <button onClick={() => setStep(2)} className="w-full py-6 rounded-[32px] bg-black text-white font-bold flex items-center justify-center gap-4 hover:scale-[1.02] shadow-2xl transition-all">
                        Customize Design <ArrowRight size={20} />
                     </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                     <div className="space-y-8">
                        <h2 className="text-4xl font-bold font-outfit tracking-tighter">Create Your <span className="text-black/20 italic">Design</span></h2>
                        <div className="space-y-4">
                           <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Custom Text</label>
                           <input 
                             type="text" 
                             maxLength={12}
                             value={customText}
                             onChange={(e) => setCustomText(e.target.value)}
                             placeholder="YOUR TEXT HERE"
                             className="w-full bg-black/[0.02] border-b-2 border-black/5 py-4 text-4xl font-bold tracking-tighter outline-none focus:border-accent-violet transition-colors placeholder:text-black/5 h-24"
                           />
                           <p className="text-[9px] font-bold text-black/20 flex justify-between uppercase">
                              <span>Max Length: 12 Characters</span>
                              <span>{customText.length}/12</span>
                           </p>
                        </div>
                     </div>

                     <div className="space-y-6">
                        <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Typography Logic</label>
                        <div className="flex flex-wrap gap-3">
                           {fonts.map((f) => (
                              <button 
                                key={f.name}
                                onClick={() => setSelectedFont(f)}
                                className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${
                                  selectedFont.name === f.name ? 'bg-black text-white' : 'glass-lvl-1 border-black/5 hover:text-accent-violet'
                                }`}
                              >
                                 {f.name}
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-6">
                        <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">Pigment Spectrum</label>
                        <div className="flex items-center gap-4">
                           {colors.map((c) => (
                              <button 
                                key={c.hex}
                                onClick={() => setSelectedColor(c)}
                                className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 active:scale-95 ${
                                  selectedColor.hex === c.hex ? 'border-accent-violet scale-110' : 'border-transparent'
                                }`}
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                              />
                           ))}
                        </div>
                     </div>

                     <div className="flex gap-4 pt-12">
                        <button onClick={() => setStep(1)} className="px-10 py-6 rounded-[32px] glass-lvl-1 border-black/5 font-bold hover:glass-lvl-3 transition-all text-black/40">Previous</button>
                        <button onClick={() => setStep(3)} className="flex-1 py-6 rounded-[32px] bg-black text-white font-bold flex items-center justify-center gap-4 hover:scale-[1.02] shadow-2xl transition-all">Review Order <ChevronRight size={20} /></button>
                     </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                     <div className="space-y-8">
                        <h2 className="text-4xl font-bold font-outfit tracking-tighter">Final <span className="text-black/20 italic">Review</span></h2>
                        <p className="text-black/40">Review your custom product before adding to cart.</p>
                     </div>

                     <div className="glass-lvl-1 rounded-[40px] border-black/5 p-10 space-y-6">
                        <div className="flex justify-between items-center text-[10px] font-bold text-black/20 uppercase tracking-[0.3em]">
                           <span>Product Base</span>
                           <span>SKU-098X</span>
                        </div>
                        <div className="flex justify-between items-end">
                           <div>
                              <p className="text-3xl font-bold font-outfit leading-none">{selectedProduct.name}</p>
                              <p className="text-sm font-light text-black/60 pt-2">{selectedProduct.category}</p>
                           </div>
                           <p className="text-4xl font-bold font-outfit">₹{selectedProduct.price}</p>
                        </div>
                        <div className="h-px bg-black/5 pt-4" />
                        <div className="space-y-4">
                           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-violet">Custom Design</p>
                           <div className="flex justify-between items-center bg-black/5 p-6 rounded-2xl">
                              <p className={`${selectedFont.className} text-3xl`} style={{ color: selectedColor.hex }}>{customText || "NONE"}</p>
                              <div className="text-right">
                                 <p className="text-[9px] font-bold uppercase tracking-widest text-black/20">Font: {selectedFont.name}</p>
                                 <p className="text-[9px] font-bold uppercase tracking-widest text-black/20">Hex: {selectedColor.hex}</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex gap-4 pt-4">
                        <button onClick={() => setStep(2)} className="px-10 py-6 rounded-[32px] glass-lvl-1 border-black/5 font-bold hover:glass-lvl-3 transition-all text-black/40">Edit</button>
                        <button 
                          onClick={handleFinalize} 
                          className="flex-1 py-6 rounded-[32px] bg-black text-white font-bold flex items-center justify-center gap-4 hover:scale-[1.02] shadow-2xl transition-all group"
                        >
                           Add to Cart
                           <ShoppingBag size={20} className="group-hover:translate-y-[-2px] transition-transform" />
                        </button>
                     </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
