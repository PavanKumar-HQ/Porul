"use client";

import { CheckCircle2, TicketPercent, Plus, Trash2, Power } from "lucide-react";
import Link from "next/link";

const mockDiscounts = [
  { id: "PROMO-1", code: "HERITAGE20", type: "Percentage", value: "20%", uses: 142, status: "Active" },
  { id: "PROMO-2", code: "FREESHIP", type: "Fixed", value: "₹25.00", uses: 89, status: "Active" },
  { id: "PROMO-3", code: "WINTERVIOLET", type: "Percentage", value: "15%", uses: 34, status: "Inactive" },
];

export default function AdminDiscounts() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <header className="flex justify-between items-end border-b border-foreground/5 pb-8">
         <div>
            <h1 className="text-4xl font-bold font-outfit uppercase tracking-tighter text-foreground">Discounts</h1>
            <p className="text-foreground/40 text-sm mt-2 font-light">Manage access keys and value manipulations.</p>
         </div>
         <div className="flex gap-4">
            <button className="h-12 px-8 bg-foreground text-background flex items-center justify-center rounded-[20px] font-bold text-[10px] uppercase tracking-widest gap-2 hover:scale-[1.02] transition-transform shadow-xl">
               Generate Protocol
               <Plus size={14} />
            </button>
         </div>
      </header>

      <div className="glass-lvl-1 rounded-[40px] border-foreground/5 overflow-hidden shadow-2xl">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-foreground/5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/20 bg-foreground/[0.01]">
                  <th className="px-8 py-6">Coupon Code</th>
                  <th className="px-8 py-6">Discount Value</th>
                  <th className="px-8 py-6 text-center">Total Uses</th>
                  <th className="px-8 py-6 text-center">Status</th>
                  <th className="px-8 py-6 text-right">Actions</th>
               </tr>
            </thead>
            <tbody>
               {mockDiscounts.map((discount) => (
                  <tr key={discount.id} className="border-b border-foreground/5 group hover:bg-foreground/[0.01] transition-all duration-500">
                     <td className="px-8 py-8">
                        <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl glass-lvl-1 border-foreground/5">
                            <TicketPercent size={18} className="text-accent-violet" />
                            <span className="font-mono text-sm font-bold text-foreground tracking-widest">{discount.code}</span>
                        </div>
                     </td>
                     <td className="px-8 py-8">
                        <div className="flex flex-col gap-1">
                           <span className="font-bold text-base text-foreground">{discount.value}</span>
                           <span className="text-[9px] uppercase text-foreground/30 tracking-[0.2em] font-bold">{discount.type} Protocol</span>
                        </div>
                     </td>
                     <td className="px-8 py-8 text-center font-mono font-bold text-foreground/60">
                        {discount.uses}
                     </td>
                     <td className="px-8 py-8 text-center">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-lvl-1 border-foreground/5 text-[9px] font-bold uppercase tracking-[0.3em] ${discount.status === 'Active' ? 'text-green-500 bg-green-500/[0.03]' : 'text-foreground/40 bg-foreground/[0.02]'}`}>
                           <div className={`w-1.5 h-1.5 rounded-full ${discount.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-foreground/20'}`} />
                           {discount.status}
                        </div>
                     </td>
                     <td className="px-8 py-8 text-right">
                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                           <button className="p-3 rounded-2xl glass-lvl-1 border-foreground/5 text-foreground/40 hover:text-foreground hover:glass-lvl-2 transition-all shadow-sm">
                              <Power size={16} />
                           </button>
                           <button className="p-3 rounded-2xl glass-lvl-1 border-foreground/5 text-foreground/40 hover:text-red-500 hover:glass-lvl-2 transition-all shadow-sm">
                              <Trash2 size={16} />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}
