"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Search, Sparkles, Heart, Menu, X } from "lucide-react";
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

const secondaryLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { setIsOpen, cart } = useCart();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Floating Effect: Shrink slightly on scroll
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navY = useTransform(scrollY, [0, 100], [0, 4]);

  return (
    <>
      <motion.div 
        style={{ y: navY, scale: navScale }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 md:px-0 pointer-events-none"
      >
        <motion.nav 
          className="flex items-center justify-between w-full max-w-7xl px-8 py-1.5 glass-lvl-3 rounded-[40px] border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-3xl pointer-events-auto"
        >
          {/* LEFT: Logo */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black font-outfit group flex items-center gap-2">
              <span className="bg-black text-white px-2 py-0.5 rounded-lg group-hover:bg-accent-violet transition-colors">P</span>
              <span className="hidden sm:inline">PORUL</span>
            </Link>
          </div>
          
          {/* CENTER: Main Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-bold text-black/40 uppercase tracking-[0.3em] transition-colors hover:text-black px-6 py-4"
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
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <NavDropdown title="Categories" items={categoryItems} />

            {secondaryLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-bold text-black/40 uppercase tracking-[0.3em] transition-colors hover:text-black px-6 py-4"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-2 left-6 right-6 h-[2px] bg-accent-violet rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-3 text-black/40 hover:text-black transition-all hover:scale-110 active:scale-95"
            >
              <Search size={18} strokeWidth={2.5} />
            </button>

            <Link href="/wishlist" className="p-3 text-black/40 hover:text-red-500 transition-all hover:scale-110 active:scale-95 hidden sm:block">
              <Heart size={18} strokeWidth={2.5} />
            </Link>

            <button 
              onClick={() => setIsOpen(true)}
              className="p-3 text-black/40 hover:text-black transition-all relative group hover:scale-110 active:scale-95"
            >
              <ShoppingBag size={18} strokeWidth={2.5} />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-black text-white text-[9px] font-black rounded-full flex items-center justify-center animate-in zoom-in shadow-xl group-hover:bg-accent-violet transition-colors">
                  {cart.length}
                </span>
              )}
            </button>

            <div className="h-6 w-px bg-black/5 mx-2 hidden md:block" />

            <Link href="/dashboard" className="p-1 group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full glass-lvl-1 border border-black/5 flex items-center justify-center group-hover:glass-lvl-3 transition-all duration-500 overflow-hidden shadow-sm group-hover:shadow-black/5 group-hover:border-accent-violet/20">
                 <User size={18} className="text-black/40 group-hover:text-black transition-colors" />
              </div>
            </Link>

            <button className="lg:hidden p-3 text-black/40 hover:text-black">
               <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </motion.nav>
      </motion.div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
