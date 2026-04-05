"use client";

import { motion } from "framer-motion";
import { User, Package, Heart, Settings, Wand2, LogOut, ArrowRight, Clock, MapPin, CreditCard } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

export default function DashboardPage() {
  const { wishlist } = useWishlist();

  const dashboardSections = [
    { icon: Package, name: "Order History", href: "/dashboard/orders", count: "0 Observed", color: "bg-accent-blue/10 text-accent-blue" },
    { icon: Wand2, name: "My Designs", href: "/dashboard/designs", count: "2 Heritage Drafts", color: "bg-accent-violet/10 text-accent-violet" },
    { icon: Heart, name: "Wishlist", href: "/wishlist", count: `${wishlist.length} Items`, color: "bg-red-500/10 text-red-500" },
    { icon: Settings, name: "Security Protocols", href: "/dashboard/settings", count: "Verified", color: "bg-accent-gold/10 text-accent-gold" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] text-black transition-colors duration-700">
      <Navbar />
      <main className="flex-1 pt-40 pb-24 px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-20">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-lvl-1 border-black/5 text-[11px] font-bold tracking-[0.5em] text-accent-violet/60 uppercase mb-4 shadow-sm"
               >
                  <User size={14} className="animate-pulse" />
                  Digital Identity
               </motion.div>
               <h1 className="text-7xl md:text-9xl font-bold font-outfit tracking-tighter leading-none">
                  Alex <span className="text-black/20 italic">Vane</span>
               </h1>
               <p className="text-[10px] font-bold text-black/40 uppercase tracking-[0.5em]">Protocol Level 09 // Verified Artisan Patron</p>
            </div>
            
            <button className="flex items-center gap-3 px-8 py-4 rounded-3xl glass-lvl-1 border-black/5 text-black/40 hover:text-red-500 transition-all font-bold text-[10px] uppercase tracking-[0.3em] group">
               <LogOut size={16} className="group-hover:translate-x-1 transition-transform" />
               Terminate Session
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {dashboardSections.map((section, i) => (
                <Link key={section.name} href={section.href}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-lvl-1 p-10 rounded-[56px] border border-black/5 hover:glass-lvl-3 transition-all duration-700 shadow-sm flex flex-col items-center text-center space-y-6 group cursor-pointer"
                  >
                     <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${section.color} group-hover:scale-110 transition-all duration-500 shadow-xl shadow-current opacity-20 group-hover:opacity-100`}>
                        <section.icon size={28} strokeWidth={1.5} className="opacity-100" />
                     </div>
                     <div className="space-y-2">
                        <h2 className="text-xl font-bold font-outfit tracking-tight leading-none">{section.name}</h2>
                        <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em]">{section.count}</p>
                     </div>
                  </motion.div>
                </Link>
             ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             {/* Recent Activity */}
             <div className="lg:col-span-2 space-y-8">
                <div className="flex justify-between items-center px-4">
                   <h2 className="text-2xl font-bold font-outfit tracking-tight">Recent Fabrications</h2>
                   <Link href="/dashboard/orders" className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20 hover:text-accent-violet transition-colors">View All Signal Traffic</Link>
                </div>
                <div className="glass-lvl-1 rounded-[64px] border-black/5 p-16 flex flex-col items-center justify-center text-center space-y-8 min-h-[400px]">
                   <div className="w-20 h-20 rounded-full glass-lvl-2 flex items-center justify-center text-black/10
                      <Clock size={40} strokeWidth={1} />
                   </div>
                   <div className="space-y-2">
                      <h2 className="text-2xl font-bold font-outfit tracking-tight">Protocol 09 // No Recent Activity</h2>
                      <p className="text-sm font-light text-black/40 max-w-xs mx-auto">Manifest your first signature item to observe real-time order telemetry here.</p>
                   </div>
                   <Link href="/shop" className="px-10 py-5 rounded-[24px] bg-black text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl group">
                      Enter Gallery <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                   </Link>
                </div>
             </div>

             {/* Sidebar Info */}
             <div className="space-y-8">
                <div className="px-4">
                   <h2 className="text-2xl font-bold font-outfit tracking-tight">Registry Details</h2>
                </div>
                <div className="glass-lvl-3 rounded-[56px] border-black/5 p-12 space-y-10">
                   <div className="space-y-6">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-2xl glass-lvl-1 flex items-center justify-center text-accent-blue"><MapPin size={20} /></div>
                         <div className="text-left font-bold font-outfit">
                            <p className="text-[9px] uppercase tracking-[0.3em] text-black/20">Default Delivery Hub</p>
                            <p className="text-sm">742 Evergreen Terrace, Springfield</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-2xl glass-lvl-1 flex items-center justify-center text-accent-gold"><CreditCard size={20} /></div>
                         <div className="text-left font-bold font-outfit">
                            <p className="text-[9px] uppercase tracking-[0.3em] text-black/20">Payment Signature</p>
                            <p className="text-sm">VISA ending in 4022</p>
                         </div>
                      </div>
                   </div>
                   <button className="w-full py-5 rounded-[24px] border border-black/5 font-bold text-[10px] uppercase tracking-[0.4em] text-black/20 hover:text-black hover:glass-lvl-2 transition-all">Update Registry</button>
                </div>

                <div className="glass-lvl-1 rounded-[56px] border border-accent-violet/10 p-10 bg-accent-violet/[0.02]">
                   <p className="text-accent-violet font-bold font-outfit text-center">Protocol V2.4 Active</p>
                   <p className="text-[9px] font-bold text-accent-violet/40 uppercase tracking-[0.3em] text-center pt-2 italic">Neural Artisan Sync: 100%</p>
                </div>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
