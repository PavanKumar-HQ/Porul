"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Box, Banknote, Sparkles } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Revenue", value: "₹124,500", trend: "+12.5%", icon: Banknote },
  { label: "Active Crafts", value: "34", trend: "+4.2%", icon: Sparkles },
  { label: "New Customers", value: "892", trend: "+22.1%", icon: Users },
  { label: "Inventory Elements", value: "1,204", trend: "-1.4%", icon: Box },
];

export default function AdminDashboardOverview() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <header className="flex justify-between items-end border-b border-foreground/5 pb-8">
         <div>
            <h1 className="text-4xl font-bold font-outfit uppercase tracking-tighter text-foreground">Store Overview</h1>
            <p className="text-foreground/40 text-sm mt-2 font-light">Global overview of digital heritage operations.</p>
         </div>
         <div className="flex gap-4">
            <Link href="/admin/products/new" className="h-12 px-8 bg-foreground text-background flex items-center justify-center rounded-[20px] font-bold text-[10px] uppercase tracking-widest gap-2 hover:scale-[1.02] transition-transform shadow-xl">
               Add Element
               <ArrowUpRight size={14} />
            </Link>
         </div>
      </header>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {stats.map((stat, i) => (
           <motion.div 
             key={stat.label}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="glass-lvl-1 border border-foreground/5 p-8 rounded-[32px] group hover:border-accent-violet/30 transition-colors"
           >
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 rounded-full glass-lvl-3 flex items-center justify-center text-foreground/40 group-hover:text-accent-violet transition-colors">
                    <stat.icon size={20} />
                 </div>
                 <span className={`text-[10px] font-bold font-mono px-3 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {stat.trend}
                 </span>
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold font-outfit text-foreground tracking-tighter">{stat.value}</p>
           </motion.div>
         ))}
      </div>

      {/* Quick Action & Recent Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 glass-lvl-1 border border-foreground/5 rounded-[40px] p-10 min-h-[400px]">
             <div className="flex justify-between items-center mb-8">
                 <h2 className="text-xl font-bold font-outfit tracking-tight text-foreground">Recent Products</h2>
                 <Link href="/admin/orders" className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-violet hover:underline">View All</Link>
             </div>
             <div className="flex items-center justify-center h-48 border border-dashed border-foreground/10 rounded-3xl group cursor-pointer hover:border-accent-violet/30 transition-all">
                 <p className="text-xs font-bold text-foreground/40 tracking-widest uppercase group-hover:text-accent-violet transition-colors">Loading data...</p>
             </div>
         </div>
         <div className="glass-lvl-1 border border-foreground/5 rounded-[40px] p-10 bg-gradient-to-br from-background to-accent-violet/5">
             <h2 className="text-xl font-bold font-outfit tracking-tight text-foreground mb-4">System Status</h2>
             <div className="space-y-6 mt-8">
                 <div className="flex items-center justify-between">
                     <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/50">User Auth</span>
                     <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-green-500">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Active
                     </div>
                 </div>
                 <div className="flex items-center justify-between">
                     <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/50">Database</span>
                     <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-green-500">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Attached
                     </div>
                 </div>
                 <div className="flex items-center justify-between">
                     <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/50">Cloud Storage</span>
                     <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-accent-gold">
                         <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" /> Pending Config
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
}
