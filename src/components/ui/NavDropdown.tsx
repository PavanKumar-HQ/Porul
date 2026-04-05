"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1.5 text-[10px] font-bold text-black/40 uppercase tracking-[0.3em] transition-colors hover:text-black py-4">
        {title}
        <ChevronDown size={14} className={`transition-transform duration-500 ${isOpen ? "rotate-180 text-accent-violet" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 min-w-[320px] z-50 pointer-events-auto"
          >
            <div className="glass-lvl-3 rounded-[32px] border border-black/5 p-6 shadow-2xl space-y-2">
              {items.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between p-4 rounded-2xl hover:bg-black/5 transition-all duration-300"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-black tracking-tight font-outfit">{item.name}</p>
                    <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.15em]">{item.description}</p>
                  </div>
                  <ArrowRight size={16} className="text-black/0 group-hover:text-accent-violet group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
