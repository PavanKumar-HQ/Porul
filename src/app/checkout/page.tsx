"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, CreditCard, Clock, Truck, ChevronRight, MapPin, Package, CheckCircle2, Lock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

type CheckoutStep = "information" | "shipping" | "payment";

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const [step, setStep] = useState<CheckoutStep>("information");
  const shippingFee = total > 500 ? 0 : 25;
  const grandTotal = total + shippingFee;

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black">
      <Navbar />
      
      <main className="flex-1 pt-48 pb-24 px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Checkout Flow */}
          <div className="lg:col-span-7 space-y-12">
            {/* Steps Indicator */}
            <nav className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20 pb-8 border-b border-black/5">
               <button onClick={() => setStep("information")} className={`hover:text-black transition-colors ${step === "information" ? "text-accent-violet underline underline-offset-8" : ""}`}>01 Info</button>
               <ChevronRight size={10} />
               <button onClick={() => setStep("shipping")} className={`hover:text-black transition-colors ${step === "shipping" ? "text-accent-violet underline underline-offset-8" : ""}`}>02 Transit</button>
               <ChevronRight size={10} />
               <button onClick={() => setStep("payment")} className={`hover:text-black transition-colors ${step === "payment" ? "text-accent-violet underline underline-offset-8" : ""}`}>03 Registry</button>
            </nav>

            <AnimatePresence mode="wait">
               {step === "information" && (
                 <motion.div 
                   key="info"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-12"
                 >
                    <div className="space-y-6">
                       <h2 className="text-4xl font-bold font-outfit tracking-tighter">Contact Identity</h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[9px] font-bold uppercase tracking-widest text-black/40 px-6">Email Protocol</label>
                             <input type="email" placeholder="custodian@atelier.com" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />
                          </div>
                          <div className="space-y-2 text-black">
                             <label className="text-[9px] font-bold uppercase tracking-widest text-black/40 px-6">Signature Phone</label>
                             <input type="tel" placeholder="+1 (000) 000-0000" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />
                          </div>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <h2 className="text-4xl font-bold font-outfit tracking-tighter">Acquisition Point</h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2 space-y-2">
                             <input type="text" placeholder="Artifact Receipt Address" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />
                          </div>
                          <input type="text" placeholder="Suite / Atelier" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />
                          <input type="text" placeholder="Postal Protocol" className="w-full h-16 rounded-3xl bg-black/[0.02] border border-black/5 px-8 text-sm font-medium focus:bg-white focus:shadow-xl transition-all" />
                       </div>
                    </div>

                    <button onClick={() => setStep("shipping")} className="w-full h-20 rounded-[32px] bg-black text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl group">
                       Continue to Transit Protocol
                       <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                 </motion.div>
               )}

               {step === "shipping" && (
                 <motion.div 
                   key="shipping"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-12"
                 >
                    <div className="space-y-8">
                       <h2 className="text-4xl font-bold font-outfit tracking-tighter">Transit Protocol</h2>
                       <div className="space-y-4">
                          {[
                            { id: 'standard', name: 'Standard Handcraft', time: '12-14 Days', price: total >= 500 ? 'Included' : '$25' },
                            { id: 'express', name: 'Priority Crafting', time: '6-8 Days', price: '$85' }
                          ].map((method) => (
                            <label key={method.id} className="flex items-center justify-between p-8 rounded-[40px] glass-lvl-1 border border-black/5 hover:border-accent-violet/20 cursor-pointer group transition-all">
                               <div className="flex items-center gap-6">
                                  <input type="radio" name="transit" defaultChecked={method.id === 'standard'} className="w-5 h-5 accent-accent-violet" />
                                  <div>
                                     <p className="font-bold font-outfit text-xl text-black">{method.name}</p>
                                     <p className="text-[10px] font-bold text-black/20 uppercase tracking-widest">{method.time}</p>
                                  </div>
                               </div>
                               <span className="font-bold text-black">{method.price}</span>
                            </label>
                          ))}
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <button onClick={() => setStep("information")} className="px-10 h-20 rounded-[32px] glass-lvl-1 border border-black/5 font-bold uppercase tracking-widest text-[10px] hover:glass-lvl-3 transition-all">Back</button>
                       <button onClick={() => setStep("payment")} className="flex-1 h-20 rounded-[32px] bg-black text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl group">
                          Proceed to Payment Signature
                          <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                       </button>
                    </div>
                 </motion.div>
               )}

               {step === "payment" && (
                 <motion.div 
                   key="payment"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-12"
                 >
                    <div className="space-y-8">
                       <h2 className="text-4xl font-bold font-outfit tracking-tighter">Signature Registry</h2>
                       <div className="p-10 rounded-[48px] bg-black text-white shadow-2xl space-y-10 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/20 blur-[100px]" />
                          <div className="flex justify-between items-start relative z-10">
                              <CreditCard size={32} strokeWidth={1} />
                              <ShieldCheck size={24} className="text-white/20" />
                          </div>
                          <div className="space-y-6 relative z-10">
                             <input type="text" placeholder="CARD NUMBER" className="w-full bg-transparent border-b border-white/10 py-4 text-2xl font-bold font-outfit tracking-widest outline-none focus:border-white transition-colors" />
                             <div className="grid grid-cols-2 gap-10">
                                <input type="text" placeholder="EXPIRY" className="bg-transparent border-b border-white/10 py-4 text-sm font-bold outline-none focus:border-white transition-colors" />
                                <input type="password" placeholder="CVV" className="bg-transparent border-b border-white/10 py-4 text-sm font-bold outline-none focus:border-white transition-colors" />
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <button onClick={() => setStep("shipping")} className="px-10 h-20 rounded-[32px] glass-lvl-1 border border-black/5 font-bold uppercase tracking-widest text-[10px] hover:glass-lvl-3 transition-all">Back</button>
                       <button className="flex-1 h-20 rounded-[32px] bg-accent-violet text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl group">
                          Authorize Acquisition (${grandTotal.toFixed(2)})
                          <Lock size={20} className="group-hover:rotate-12 transition-transform" />
                       </button>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
          </div>

          {/* Order Summary Summary */}
          <div className="lg:col-span-5">
             <div className="glass-lvl-1 border border-black/5 rounded-[48px] p-10 space-y-10 sticky top-40 shadow-sm">
                <div className="flex items-center gap-4 border-b border-black/5 pb-8">
                   <Package size={22} strokeWidth={1.5} className="text-accent-blue" />
                   <h3 className="text-xl font-bold font-outfit tracking-tight text-black">Artifact Telemetry</h3>
                </div>

                <div className="space-y-6 overflow-y-auto max-h-[300px] pr-4 scrollbar-hide">
                   {cart.map((item) => (
                      <div key={item.id + item.customText} className="flex gap-4 group">
                         <div className="w-16 h-16 rounded-2xl bg-neutral-50 overflow-hidden relative border border-black/5 flex-shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover opacity-30 group-hover:scale-105 transition-transform" />
                         </div>
                         <div className="flex-1 flex justify-between items-center py-1">
                            <div className="text-black">
                               <p className="font-bold text-sm tracking-tight">{item.name}</p>
                               <p className="text-[9px] font-bold text-black/20 uppercase tracking-widest">{item.quantity} Unit</p>
                            </div>
                            <span className="font-bold font-outfit text-black/80">${(item.price * item.quantity).toFixed(0)}</span>
                         </div>
                      </div>
                   ))}
                   {cart.length === 0 && (
                      <div className="text-center py-12 space-y-4">
                         <p className="text-black/10 font-bold">Telepathic cart empty</p>
                         <Link href="/shop" className="text-accent-violet font-bold text-xs">Return to Gallery</Link>
                      </div>
                   )}
                </div>

                <div className="space-y-4 border-t border-black/5 pt-10">
                   <div className="flex justify-between items-center text-sm font-light text-black/40">
                      <span>Heritage Subtotal</span>
                      <span className="font-bold text-black">${total.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-light text-black/40">
                      <span>Insured Transit</span>
                      <span className="font-bold text-black">${shippingFee.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-light text-black/40">
                      <span>Artisan Processing</span>
                      <span className="text-[10px] font-black tracking-widest text-accent-gold uppercase">Included</span>
                   </div>
                   <div className="h-px bg-black/5 my-6" />
                   <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Total Investment</span>
                      <span className="text-5xl font-bold font-outfit text-black tracking-tighter">${grandTotal.toFixed(2)}</span>
                   </div>
                </div>

                {/* Trust Signal */}
                <div className="flex flex-col items-center gap-3 pt-4 opacity-30">
                   <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-600" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-black/60">Verified Atelier Source</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
