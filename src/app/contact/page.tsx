"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#333333]">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <div className="bg-[#FAF8F5] pt-48 pb-24 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#C68D76] uppercase">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#2D2D2D] font-serif">
              I'd love to hear from you
            </h1>
            <p className="text-lg text-[#666666] font-light max-w-2xl mx-auto leading-relaxed">
              For questions about a piece, custom requests, styling help, or anything else, feel free to reach out.
            </p>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-medium font-serif text-[#2D2D2D]">Send a Message</h2>
                <p className="text-[#666666] font-light">Fill out the form below and I'll get back to you as soon as I can.</p>
                <p className="text-sm text-[#888888] font-light pt-2">
                  Fields marked with <span className="text-[#C68D76]">*</span> are required. Enter at least one of email or mobile number.
                </p>
              </div>

              <form className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#444444]">Name <span className="text-[#C68D76]">*</span></label>
                    <input type="text" placeholder="Your name" className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3.5 outline-none focus:border-[#C68D76] transition-colors placeholder:text-[#AAAAAA] text-[#333333] bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#444444]">Email</label>
                    <input type="email" placeholder="you@example.com" className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3.5 outline-none focus:border-[#C68D76] transition-colors placeholder:text-[#AAAAAA] text-[#333333] bg-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#444444]">Mobile Number</label>
                  <div className="flex gap-4">
                    <div className="relative w-1/3">
                      <select className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3.5 outline-none focus:border-[#C68D76] transition-colors text-[#333333] bg-white appearance-none cursor-pointer">
                        <option>India (+91)</option>
                        <option>USA (+1)</option>
                        <option>UK (+44)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#888888]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                    <input type="tel" placeholder="Mobile number" className="w-2/3 border border-[#E5E5E5] rounded-xl px-4 py-3.5 outline-none focus:border-[#C68D76] transition-colors placeholder:text-[#AAAAAA] text-[#333333] bg-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#444444]">Subject <span className="text-[#C68D76]">*</span></label>
                  <input type="text" placeholder="What's this about?" className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3.5 outline-none focus:border-[#C68D76] transition-colors placeholder:text-[#AAAAAA] text-[#333333] bg-white" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#444444]">Message <span className="text-[#C68D76]">*</span></label>
                  <textarea placeholder="Tell us more about your inquiry..." className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3.5 outline-none focus:border-[#C68D76] transition-colors placeholder:text-[#AAAAAA] text-[#333333] bg-white h-40 resize-none" />
                </div>

                <div className="pt-4">
                   <button type="button" className="px-10 py-4 bg-[#2D2D2D] text-white rounded-xl font-medium tracking-wide hover:bg-[#C68D76] transition-colors duration-300">
                     Send Message
                   </button>
                </div>
              </form>
            </motion.div>

            {/* Details Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-2/5 space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-medium font-serif text-[#2D2D2D]">Studio Details</h2>
                <p className="text-[#666666] font-light">You can also reach out directly using the details below.</p>
              </div>

              <div className="space-y-8 pt-4">
                <div className="flex gap-6 border-b border-[#F0F0F0] pb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#FDF6F3] flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-[#C68D76]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-[#2D2D2D]">Studio Address</h3>
                    <p className="text-[#666666] font-light leading-relaxed">JRC WildWoods, Chikkanayakanahalli, Bengaluru, Karnataka, 560035</p>
                  </div>
                </div>

                <div className="flex gap-6 border-b border-[#F0F0F0] pb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#FDF6F3] flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-[#C68D76]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-[#2D2D2D]">Email</h3>
                    <p className="text-[#666666] font-light leading-relaxed">sturdystudioofficial@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FDF6F3] flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-[#C68D76]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-[#2D2D2D]">Working Hours</h3>
                    <p className="text-[#666666] font-light leading-relaxed">Monday – Saturday: 10 AM – 6 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
