"use client";

import { CheckCircle2, Eye, Paintbrush2, Clock, ShieldCheck } from "lucide-react";

const mockOrders = [
  { id: "ORD-9921", customer: "Alex Rivera", design: "Purity", product: "Ceramic Mug", color: "#121212", font: "font-serif", status: "In Crafting" },
  { id: "ORD-9922", customer: "Sarah Chen", design: "The Ghost", product: "Signature Tee", color: "#7E3AF2", font: "font-mono", status: "Received" },
];

export default function AdminOrders() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12 flex justify-between items-end border-b border-foreground/5 pb-8">
         <div>
            <h1 className="text-4xl font-bold font-outfit uppercase tracking-tighter text-foreground">Orders</h1>
            <p className="text-foreground/40 text-sm mt-2 font-light">Oversee the creation of custom orders.</p>
         </div>
         <div className="flex gap-4">
            <div className="glass-lvl-1 border-accent-violet/20 px-6 py-3 rounded-2xl flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent-violet shadow-sm">
               <Clock size={16} />
               {mockOrders.length} Pending Orders
            </div>
         </div>
      </header>

      <div className="glass-lvl-1 rounded-[40px] border-foreground/5 overflow-hidden shadow-2xl">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-foreground/5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/20 bg-foreground/[0.01]">
                  <th className="px-8 py-6">Order ID</th>
                  <th className="px-8 py-6">Product</th>
                  <th className="px-8 py-6 text-center">Design Intent</th>
                  <th className="px-8 py-6 text-center">Status</th>
                  <th className="px-8 py-6 text-right">Actions</th>
               </tr>
            </thead>
            <tbody>
               {mockOrders.map((order) => (
                  <tr key={order.id} className="border-b border-foreground/5 group hover:bg-foreground/[0.01] transition-all duration-500">
                     <td className="px-8 py-8">
                        <span className="font-mono text-sm font-bold text-foreground/60 tracking-wider transition-colors group-hover:text-foreground">{order.id}</span>
                     </td>
                     <td className="px-8 py-8">
                        <div className="flex flex-col gap-1">
                           <span className="font-bold text-base text-foreground">{order.product}</span>
                           <span className="text-[9px] uppercase text-foreground/30 tracking-[0.2em] font-bold">{order.customer}</span>
                        </div>
                     </td>
                     <td className="px-8 py-8">
                        <div className="glass-lvl-1 bg-background border-foreground/[0.03] rounded-3xl p-4 flex items-center justify-center min-w-[140px] aspect-video shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                           <span className={`text-xl font-bold tracking-tighter drop-shadow-sm transition-all duration-700 ${order.font}`} style={{ color: order.color }}>
                              {order.design}
                           </span>
                        </div>
                     </td>
                     <td className="px-8 py-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-lvl-1 border-foreground/5 text-[9px] font-bold uppercase tracking-[0.3em] text-accent-violet bg-accent-violet/[0.03]">
                           <div className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                           {order.status}
                        </div>
                     </td>
                     <td className="px-8 py-8 text-right">
                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                           <button className="p-3 rounded-2xl glass-lvl-1 border-foreground/5 text-foreground/40 hover:text-foreground hover:glass-lvl-2 transition-all shadow-sm">
                              <Eye size={16} />
                           </button>
                           <button className="p-3 rounded-2xl glass-lvl-1 border-foreground/5 text-foreground/40 hover:text-accent-gold hover:glass-lvl-2 transition-all shadow-sm">
                              <Paintbrush2 size={16} />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div className="p-8 bg-foreground/[0.01] border-t border-foreground/5 flex justify-between items-center">
            <div className="flex items-center gap-3 text-foreground/40 text-[9px] font-bold uppercase tracking-widest">
               <ShieldCheck size={16} />
               Secured Registrar Access
            </div>
            <button className="text-[9px] font-bold text-accent-violet uppercase tracking-[0.3em] hover:underline">View History Archive</button>
         </div>
      </div>
    </div>
  );
}
