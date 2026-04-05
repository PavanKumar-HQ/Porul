"use client";

import { CheckCircle2, Eye, Paintbrush2, PackageOpen, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// We will eventually fetch this from Supabase
const mockProducts = [
  { id: "1", name: "The Obsidian Mug", price: 24, category: "Custom Gifts", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070" },
  { id: "2", name: "Signature Thread", price: 45, category: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080" },
];

export default function AdminProducts() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <header className="flex justify-between items-end border-b border-foreground/5 pb-8">
         <div>
            <h1 className="text-4xl font-bold font-outfit uppercase tracking-tighter text-foreground">Product Store</h1>
            <p className="text-foreground/40 text-sm mt-2 font-light">Manage the digital inventory of physical objects.</p>
         </div>
         <div className="flex gap-4">
            <Link href="/admin/products/new" className="h-12 px-8 bg-foreground text-background flex items-center justify-center rounded-[20px] font-bold text-[10px] uppercase tracking-widest gap-2 hover:scale-[1.02] transition-transform shadow-xl">
               Add New Product
               <Plus size={14} />
            </Link>
         </div>
      </header>

      <div className="glass-lvl-1 rounded-[40px] border-foreground/5 overflow-hidden shadow-2xl">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-foreground/5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/20 bg-foreground/[0.01]">
                  <th className="px-8 py-6 w-24">Image</th>
                  <th className="px-8 py-6">Identity</th>
                  <th className="px-8 py-6 text-center">Protocol Category</th>
                  <th className="px-8 py-6 text-center">Value</th>
                  <th className="px-8 py-6 text-right">Actions</th>
               </tr>
            </thead>
            <tbody>
               {mockProducts.map((product) => (
                  <tr key={product.id} className="border-b border-foreground/5 group hover:bg-foreground/[0.01] transition-all duration-500">
                     <td className="px-8 py-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden relative border border-foreground/5">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                     </td>
                     <td className="px-8 py-8">
                        <span className="font-bold text-base text-foreground block">{product.name}</span>
                        <span className="font-mono text-[9px] font-bold text-foreground/30 tracking-wider">ID-{product.id}</span>
                     </td>
                     <td className="px-8 py-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-lvl-1 border-foreground/5 text-[9px] font-bold uppercase tracking-[0.3em] text-accent-blue bg-accent-blue/[0.03]">
                           {product.category}
                        </div>
                     </td>
                     <td className="px-8 py-8 text-center font-outfit font-bold text-lg text-foreground">
                        ${product.price}
                     </td>
                     <td className="px-8 py-8 text-right">
                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                           <button className="p-3 rounded-2xl glass-lvl-1 border-foreground/5 text-foreground/40 hover:text-foreground hover:glass-lvl-2 transition-all shadow-sm">
                              <Paintbrush2 size={16} />
                           </button>
                           <button className="p-3 rounded-2xl glass-lvl-1 border-foreground/5 text-foreground/40 hover:text-red-500 hover:glass-lvl-2 transition-all shadow-sm">
                              <Trash2 size={16} />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
               {mockProducts.length === 0 && (
                   <tr>
                       <td colSpan={5} className="py-20 text-center text-xs font-bold text-foreground/20 uppercase tracking-widest">
                           No elements fabricated yet.
                       </td>
                   </tr>
               )}
            </tbody>
         </table>
      </div>
    </div>
  );
}
