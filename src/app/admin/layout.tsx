"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PackageOpen, Receipt, TicketPercent, LayoutDashboard, Settings } from "lucide-react";
import PageTransition from "@/components/providers/PageTransition";

const menuItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Orders", href: "/admin/orders", icon: Receipt },
  { name: "Product Store", href: "/admin/products", icon: PackageOpen },
  { name: "Discounts", href: "/admin/discounts", icon: TicketPercent },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Admin Sidebar */}
      <aside className="w-72 fixed top-40 left-0 h-[calc(100vh-10rem)] border-r border-foreground/5 p-8 flex flex-col gap-8 hidden lg:flex">
        <div className="space-y-1">
           <h2 className="text-xs font-bold font-outfit uppercase tracking-widest text-foreground/40">Admin Protocol</h2>
        </div>
        
        <nav className="flex-1 space-y-2">
           {menuItems.map((item) => {
             const Icon = item.icon;
             const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
             return (
               <Link 
                  key={item.name} 
                  href={item.href}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all font-bold text-[10px] uppercase tracking-widest group ${
                    isActive 
                      ? "bg-foreground text-background shadow-xl" 
                      : "text-foreground/40 hover:bg-foreground/[0.02] hover:text-foreground"
                  }`}
               >
                  <Icon size={18} className={isActive ? "text-background" : "group-hover:text-accent-violet transition-colors"} />
                  {item.name}
               </Link>
             )
           })}
        </nav>

        <div className="pt-8 border-t border-foreground/5">
           <Link 
              href="/admin/settings"
              className="flex items-center gap-4 p-4 rounded-2xl transition-all font-bold text-[10px] uppercase tracking-widest text-foreground/40 hover:bg-foreground/[0.02] hover:text-foreground group"
           >
              <Settings size={18} className="group-hover:text-foreground transition-colors" />
              Settings
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 pb-24 px-8 pt-8">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
}
