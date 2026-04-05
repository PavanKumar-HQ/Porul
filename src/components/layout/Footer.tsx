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
    <footer className="pt-32 pb-16 px-10 border-t border-black/[0.12] bg-white relative overflow-hidden">
      {/* Alabaster Decorative Infrastructure */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-violet/[0.03] blur-[150px] -z-10 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24 text-black">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <h2 className="text-5xl font-bold font-outfit tracking-tighter uppercase">PORUL</h2>
            <p className="text-black/70 max-w-sm text-xl leading-relaxed font-medium font-inter">
               Handcrafted digital heirlooms architected for the modern collector and specialized curator.
            </p>
            <div className="flex gap-8">
              {[
                { icon: InstagramIcon, href: "#" },
                { icon: TwitterIcon, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-14 h-14 rounded-2xl border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm">
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40">The Atelier</h3>
            <ul className="space-y-5 text-sm font-black text-black/80 uppercase tracking-widest">
              {["Signature Collection", "Limited Series", "Bespoke Request", "Gift Curation"].map((item) => (
                <li key={item}>
                   <Link href="#" className="hover:text-accent-violet transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                   </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40">Company</h3>
            <ul className="space-y-5 text-sm font-black text-black/80 uppercase tracking-widest">
              {["Our Philosophy", "Craftsmanship", "Sustainability", "Journal"].map((item) => (
                <li key={item}>
                   <Link href="#" className="hover:text-accent-violet transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-10 text-[11px] font-black uppercase tracking-[0.5em] text-black/60">
          <p>© {currentYear} PORUL DIGITAL HEIRLOOMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
