"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-1 2.18-2.51 3a11 11 0 0 1-1.31 10.74A10.74 10.74 0 0 1 1 20s1.86-1.5 3-3a10.74 10.74 0 0 1-4.74-8.74c0-1.5.5-2.5 1-3.5 1 2.5 3.5 5 7 5 0-3 2-6 5-6 2 0 3 1 4 2 1.5-.5 3-1 3-1"></path>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-8 border-t border-black/5 bg-white relative overflow-hidden">
      {/* Alabaster Decorative Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-violet/5 blur-[120px] -z-10 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-black">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h2 className="text-4xl font-bold font-outfit tracking-tighter">PORUL</h2>
            <p className="text-black/40 max-w-sm text-lg leading-relaxed font-light">
               We craft more than products; we craft identities. Every object is a dialogue between craftsmanship and your personal story.
            </p>
            <div className="flex gap-6">
              {[
                { icon: InstagramIcon, href: "#" },
                { icon: TwitterIcon, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="p-3 rounded-2xl glass-lvl-1 border-black/5 hover:bg-black hover:text-white transition-all">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">The Atelier</h3>
            <ul className="space-y-4 text-sm font-bold text-black/60">
              {["Signature Collection", "Limited Series", "Bespoke Request", "Gift Curation"].map((item) => (
                <li key={item}>
                   <Link href="#" className="hover:text-black transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                   </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">Company</h3>
            <ul className="space-y-4 text-sm font-bold text-black/60">
              {["Our Philosophy", "Craftsmanship", "Sustainability", "Journal"].map((item) => (
                <li key={item}>
                   <Link href="#" className="hover:text-black transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">
          <p>© {currentYear} PORUL DIGITAL HEIRLOOMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-black transition-colors">Privacy Privacy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
