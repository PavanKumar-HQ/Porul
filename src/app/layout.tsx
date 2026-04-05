import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import CartDrawer from "@/components/cart/CartDrawer";
import MotionProvider from "@/components/providers/MotionProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import { Auth0Provider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import PageTransition from "@/components/providers/PageTransition";

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
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
      <ThemeProvider>
        <Auth0Provider>
          <body className="min-h-screen bg-background text-foreground selection:bg-accent-blue/10 overflow-x-hidden transition-colors duration-500">
            <CartProvider>
              <WishlistProvider>
                <ScrollProgress />

              {/* Alabaster Aura System - Softer Sunlight Tints */}
              <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/5 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-violet/5 blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent-gold/5 blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_70%)]" />
              </div>
              
              <Navbar />
              
              <main className="relative z-10 flex flex-col min-h-screen pt-40">
                <MotionProvider>
                  <PageTransition>
                    {children}
                  </PageTransition>
                </MotionProvider>
              </main>
              <CartDrawer />
            </WishlistProvider>
          </CartProvider>
        </body>
      </Auth0Provider>
    </ThemeProvider>
  </html>
  );
}
