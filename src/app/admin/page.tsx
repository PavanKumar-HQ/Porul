"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { CheckCircle2, Eye, Paintbrush2, ShoppingBag, Clock, ShieldCheck } from "lucide-react";

const mockOrders = [
  { id: "ORD-9921", customer: "Alex Rivera", design: "Purity", product: "Ceramic Mug", color: "#121212", font: "font-serif", status: "In Crafting" },
  { id: "ORD-9922", customer: "Sarah Chen", design: "The Ghost", product: "Signature Tee", color: "#7E3AF2", font: "font-mono", status: "Received" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black">
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto w-full">
        <header className="mb-20 flex justify-between items-end border-b border-black/5 pb-12">
           <div>
              <h1 className="text-5xl font-bold font-outfit uppercase tracking-tighter text-black">Craft Registry</h1>
              <p className="text-black/40 text-lg mt-2 font-light">Oversee the creation of digital heirlooms.</p>
           </div>
           <div className="flex gap-4">
              <div className="glass-lvl-1 border-accent-violet/20 px-6 py-3 rounded-2xl flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent-violet shadow-sm">
                 <Clock size={16} />
                 8 Pending Crafts
              </div>
           </div>
        </header>

        <div className="glass-lvl-1 rounded-[48px] border-black/5 overflow-hidden shadow-2xl">
           <table className="w-full text-left border-collapse">
              <thead>
                 <tr className="border-b border-black/5 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20 bg-black/[0.01]">
                    <th className="px-10 py-8">Order ID</th>
                    <th className="px-10 py-8">Product</th>
                    <th className="px-10 py-8 text-center">Design Intent</th>
                    <th className="px-10 py-8 text-center">Status</th>
                    <th className="px-10 py-8 text-right">Actions</th>
                 </tr>
              </thead>
              <tbody>
                 {mockOrders.map((order) => (
                    <tr key={order.id} className="border-b border-black/5 group hover:bg-black/[0.01] transition-all duration-500">
                       <td className="px-10 py-10">
                          <span className="font-mono text-sm font-bold text-black/60 tracking-wider transition-colors group-hover:text-black">{order.id}</span>
                       </td>
                       <td className="px-10 py-10">
                          <div className="flex flex-col gap-1">
                             <span className="font-bold text-lg text-black">{order.product}</span>
                             <span className="text-[10px] uppercase text-black/30 tracking-[0.2em] font-bold">{order.customer}</span>
                          </div>
                       </td>
                       <td className="px-10 py-10">
                          <div className="glass-lvl-1 bg-white border-black/[0.03] rounded-3xl p-6 flex items-center justify-center min-w-[160px] aspect-video shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                             <span className={`text-2xl font-bold tracking-tighter drop-shadow-sm transition-all duration-700 ${order.font}`} style={{ color: order.color }}>
                                {order.design}
                             </span>
                          </div>
                       </td>
                       <td className="px-10 py-10 text-center">
                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-lvl-1 border-black/5 text-[9px] font-bold uppercase tracking-[0.3em] text-accent-violet bg-accent-violet/[0.03]">
                             <div className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                             {order.status}
                          </div>
                       </td>
                       <td className="px-10 py-10 text-right">
                          <div className="flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                             <button className="p-4 rounded-2xl glass-lvl-1 border-black/5 text-black/20 hover:text-black hover:glass-lvl-2 transition-all shadow-sm">
                                <Eye size={18} />
                             </button>
                             <button className="p-4 rounded-2xl glass-lvl-1 border-black/5 text-black/20 hover:text-accent-gold hover:glass-lvl-2 transition-all shadow-sm">
                                <Paintbrush2 size={18} />
                             </button>
                          </div>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
           <div className="p-10 bg-black/[0.01] border-t border-black/5 flex justify-between items-center">
              <div className="flex items-center gap-3 text-black/20 text-[9px] font-bold uppercase tracking-widest">
                 <ShieldCheck size={16} />
                 Secured Registrar Access
              </div>
              <button className="text-[10px] font-bold text-accent-violet uppercase tracking-[0.3em] hover:underline">View History Archive</button>
           </div>
        </div>
      </main>
    </div>
  );
}
