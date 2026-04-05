import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import LivePreviewTeaser from "@/components/sections/LivePreviewTeaser";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WhyPorul from "@/components/sections/WhyPorul";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Categories />
        <LivePreviewTeaser />
        <ProductShowcase />
        <WhyPorul />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
