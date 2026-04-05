"use client";

import { useState } from "react";
import { ArrowLeft, Save, Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Custom Gifts",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Send data and image to Supabase/Cloudinary API
    setTimeout(() => {
        setLoading(false);
        router.push("/admin/products");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="flex justify-between items-end border-b border-foreground/5 pb-8">
         <div>
            <Link href="/admin/products" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground mb-4 transition-colors">
               <ArrowLeft size={14} /> Back to Store
            </Link>
            <h1 className="text-4xl font-bold font-outfit uppercase tracking-tighter text-foreground">New Product</h1>
         </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
         <div className="glass-lvl-1 rounded-[40px] border border-foreground/5 p-10 space-y-8 shadow-2xl">
            <div className="space-y-6">
                <h2 className="text-xl font-bold font-outfit tracking-tighter">Core Identity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-foreground/40 px-6">Artifact Designation</label>
                        <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            placeholder="e.g. The Obsidian Mug" 
                            className="w-full h-16 rounded-3xl bg-background border border-foreground/5 px-8 text-sm font-medium focus:border-accent-violet focus:shadow-xl transition-all outline-none" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-foreground/40 px-6">Value Protocol (₹)</label>
                        <input 
                            type="number" 
                            required
                            min="0"
                            step="0.01"
                            value={formData.price}
                            onChange={e => setFormData({...formData, price: e.target.value})}
                            placeholder="24.00" 
                            className="w-full h-16 rounded-3xl bg-background border border-foreground/5 px-8 text-sm font-medium focus:border-accent-violet focus:shadow-xl transition-all outline-none" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-foreground/40 px-6">Category Array</label>
                        <select 
                            value={formData.category}
                            onChange={e => setFormData({...formData, category: e.target.value})}
                            className="w-full h-16 rounded-3xl bg-background border border-foreground/5 px-8 text-sm font-medium focus:border-accent-violet focus:shadow-xl transition-all outline-none appearance-none"
                        >
                            <option>Custom Gifts</option>
                            <option>Apparel</option>
                            <option>Accessories</option>
                            <option>Corporate Kits</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="h-px bg-foreground/5 w-full my-8" />

            <div className="space-y-6">
                <h2 className="text-xl font-bold font-outfit tracking-tighter flex items-center gap-2">
                    Visual Data <Sparkles size={16} className="text-accent-violet" />
                </h2>
                
                <div className="w-full h-48 rounded-3xl border-2 border-dashed border-foreground/10 bg-background flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-accent-violet transition-colors relative overflow-hidden">
                    <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                    <div className="w-12 h-12 rounded-full glass-lvl-1 flex items-center justify-center group-hover:bg-accent-violet group-hover:text-white transition-all text-foreground/40">
                        <ImageIcon size={20} />
                    </div>
                    <div className="text-center">
                        <p className="text-xs font-bold text-foreground">Upload to Cloudinary Proxy</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-foreground/40 mt-1">JPEG, PNG up to 5MB</p>
                    </div>
                </div>
            </div>
         </div>

         <div className="flex justify-end gap-4">
            <button 
                type="button"
                onClick={() => router.back()}
                className="px-10 h-16 rounded-[24px] glass-lvl-1 border border-foreground/5 font-bold uppercase tracking-widest text-[10px] hover:glass-lvl-3 transition-all"
            >
                Cancel
            </button>
            <button 
                type="submit"
                disabled={loading}
                className="px-10 h-16 rounded-[24px] bg-foreground text-background font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-[1.02] transition-transform shadow-xl disabled:opacity-50"
            >
                {loading ? "Synthesizing..." : "Fabricate Element"}
                {!loading && <Save size={16} />}
            </button>
         </div>
      </form>
    </div>
  );
}
