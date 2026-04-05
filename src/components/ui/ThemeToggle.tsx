"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem("porul-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("porul-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("porul-theme", "light");
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl glass-lvl-1 border-black/5 dark:border-white/5 hover:glass-lvl-3 transition-all duration-500 group overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: 20, rotate: 45, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: -20, rotate: -45, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
            >
              <Moon size={18} className="text-accent-violet fill-accent-violet/20" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, rotate: -45, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: -20, rotate: 45, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
            >
              <Sun size={18} className="text-accent-gold fill-accent-gold/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glossy Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </button>
  );
}
