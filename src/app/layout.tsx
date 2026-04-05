import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import CartDrawer from "@/components/cart/CartDrawer";
import MotionProvider from "@/components/providers/MotionProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porul | Crafted for You",
  description: "Premium customized products that carry your identity. Experience luxury personalization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen bg-[#FDFDFD] text-[#121212] selection:bg-accent-blue/10 overflow-x-hidden">
        <CartProvider>
          <WishlistProvider>
            {/* Keeping Technical Scroll Progress but Restoring Normal Cursor */}
            <ScrollProgress />

            {/* Alabaster Aura System - Softer Sunlight Tints */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/5 blur-[120px] animate-pulse" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-violet/5 blur-[120px] animate-pulse delay-700" />
              <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent-gold/5 blur-[100px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_70%)]" />
            </div>
            
            <main className="relative z-10 flex flex-col min-h-screen">
              <MotionProvider>
                {children}
              </MotionProvider>
            </main>
            <CartDrawer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
