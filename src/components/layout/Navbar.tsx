"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Search, Sparkles, Heart, Menu, X, LogOut, Settings, History, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import NavDropdown from "@/components/ui/NavDropdown";
import SearchOverlay from "@/components/ui/SearchOverlay";

const categoryItems = [
  { name: "Custom Gifts", href: "/category/gifts", description: "Bespoke treasures for loved ones" },
  { name: "Apparel", href: "/category/apparel", description: "Wear your signature" },
  { name: "Accessories", href: "/category/accessories", description: "Curated digital accents" },
  { name: "Corporate Kits", href: "/category/corporate", description: "Heritage for your team" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Customize", href: "/customize", icon: true },
];

export default function Navbar() {
  const { setIsOpen, cart } = useCart();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navY = useTransform(scrollY, [0, 100], [0, 4]);

  return (
    <>
      <motion.div 
        style={{ y: navY, scale: navScale }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-8 left-0 right-0 z-[60] flex justify-center px-4 md:px-0 pointer-events-none"
      >
        <motion.nav 
          className="flex items-center justify-between w-full max-w-7xl px-8 py-1.5 glass-lvl-3 rounded-[40px] border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-3xl pointer-events-auto"
        >
          {/* LEFT: Logo */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black font-outfit group flex items-center gap-2">
              <span className="bg-black text-white px-2 py-0.5 rounded-lg group-hover:bg-accent-violet transition-all duration-500 shadow-xl group-hover:shadow-accent-violet/20">P</span>
              <span className="hidden sm:inline">PORUL</span>
            </Link>
          </div>
          
          {/* CENTER: Main Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-bold text-black/60 uppercase tracking-[0.3em] transition-colors hover:text-black px-6 py-4"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="flex items-center gap-2">
                   {link.name}
                   {link.icon && (
                     <Sparkles size={10} className="text-accent-violet animate-pulse" />
                   )}
                </div>
                
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-2 left-6 right-6 h-[2px] bg-accent-violet rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                  />
                )}
              </Link>
            ))}

            <NavDropdown title="Collections" items={categoryItems} />
            
            <Link 
              href="/about"
              className="relative text-[10px] font-bold text-black/60 uppercase tracking-[0.3em] transition-colors hover:text-black px-6 py-4"
            >
              Heritage
            </Link>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex-1 flex items-center justify-end gap-1 md:gap-2">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-3 text-black/60 hover:text-black transition-all hover:scale-110 active:scale-95"
            >
              <Search size={18} strokeWidth={2.5} />
            </button>

            <Link href="/wishlist" className="p-3 text-black/60 hover:text-red-500 transition-all hover:scale-110 active:scale-95 hidden sm:block">
              <Heart size={18} strokeWidth={2.5} />
            </Link>

            <button 
              onClick={() => setIsOpen(true)}
              className="p-3 text-black/60 hover:text-black transition-all relative group hover:scale-110 active:scale-95"
            >
              <ShoppingBag size={18} strokeWidth={2.5} />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 min-w-[20px] h-5 bg-black text-white text-[9px] font-black rounded-full flex items-center justify-center px-1 animate-in zoom-in shadow-xl group-hover:bg-accent-violet transition-colors">
                  {cart.length}
                </span>
              )}
            </button>

            <div className="h-6 w-px bg-black/5 mx-2 hidden md:block" />

            {/* Professional User Menu Dropdown */}
            <div className="relative" onMouseEnter={() => setIsUserOpen(true)} onMouseLeave={() => setIsUserOpen(false)}>
               <button className="p-1 group flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center group-hover:glass-lvl-3 transition-all duration-500 overflow-hidden shadow-sm group-hover:shadow-black/5 group-hover:border-accent-violet/20 bg-white">
                    <User size={18} className="text-black/60 group-hover:text-black transition-colors" />
                 </div>
               </button>

               <AnimatePresence>
                 {isUserOpen && (
                   <motion.div
                     initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                     animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                     exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                     className="absolute top-full right-0 pt-4 min-w-[240px]"
                   >
                     <div className="glass-lvl-3 rounded-[32px] border border-black/5 p-4 shadow-2xl space-y-1">
                        <div className="px-4 py-3 mb-2 border-b border-black/5">
                           <p className="text-xs font-bold text-black font-outfit">Guest Custodian</p>
                           <p className="text-[10px] text-black/40 font-inter">Identify Protocol Level 1</p>
                        </div>
                        
                        <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-black/5 text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-all">
                           <History size={16} />
                           Order History
                        </Link>
                        <Link href="/my-creations" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-black/5 text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-all">
                           <Sparkles size={16} className="text-accent-violet" />
                           My Manifestations
                        </Link>
                        <Link href="/settings" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-black/5 text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-all">
                           <Settings size={16} />
                           Atelier Profile
                        </Link>
                        <Link href="/support" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-black/5 text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-all">
                           <HelpCircle size={16} />
                           Support
                        </Link>
                        
                        <div className="h-px bg-black/5 my-2" />
                        
                        <button className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-red-50 text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-red-500 transition-all">
                           <LogOut size={16} />
                           Deactivate Protocol
                        </button>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            <button className="lg:hidden p-3 text-black/60 hover:text-black transition-colors">
               <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </motion.nav>
      </motion.div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
