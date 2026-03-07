"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";

export default function AuraPortfolio() {
  const techStack = ["GSAP", "Three.js", "WebGL", "Next.js 15"];

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-yellow-500/30">
      <Navbar />

      {/* FIXED FLOATING NAV - The "Sanctum" Button */}
      <Link 
        href="/archives" 
        className="fixed top-24 left-8 z-50 group flex items-center gap-3 px-6 py-3 bg-yellow-500 text-black font-black text-[10px] tracking-[3px] uppercase rounded-full transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(255,204,0,0.4)]"
      >
        <i className="fas fa-magic transition-transform group-hover:rotate-12"></i>
        Back to Sanctum
      </Link>

      {/* ELITE HEADER SECTION */}
      <header className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-gradient from-yellow-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-500 text-[10px] font-black uppercase tracking-[8px] mb-4 block"
          >
            Personal Branding Artifact
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8"
          >
            Aura <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 italic font-serif">Portfolio v2</span>
          </motion.h1>

          <div className="flex justify-center gap-3 flex-wrap">
            {techStack.map((tech, i) => (
              <span key={i} className="px-5 py-2 bg-yellow-500/5 border border-yellow-500/20 rounded-full text-yellow-500 text-[9px] font-bold uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* CORE CONTENT GRID */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT COLUMN: THE LORE */}
          <div className="space-y-16">
            <div className="relative pl-8 border-l-2 border-yellow-500/50 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500 scale-0 group-hover:scale-100 transition-transform" />
              <h4 className="text-yellow-500 font-black text-xs uppercase tracking-[4px] mb-4">The Challenge</h4>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                A senior software engineer needed to showcase high-fidelity 3D projects without sacrificing <span className="text-white font-medium">mobile performance</span> or load speeds.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-yellow-500/50 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500 scale-0 group-hover:scale-100 transition-transform" />
              <h4 className="text-yellow-500 font-black text-xs uppercase tracking-[4px] mb-4">The Solution</h4>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                We engineered a custom <span className="text-white font-medium">WebGL background</span> that reacts to spatial input, combined with a "headless" engine for zero-latency content delivery.
              </p>
            </div>

            <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/5 space-y-6">
              <h5 className="text-white font-black text-xs uppercase tracking-[4px]">Artifact Metrics:</h5>
              <ul className="space-y-4">
                {[
                  { icon: "fa-bolt", text: "98/100 Lighthouse Performance" },
                  { icon: "fa-expand", text: "Custom 3D Viewport" },
                  { icon: "fa-calendar-alt", text: "Automated Booking Ecosystem" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400 group">
                    <i className={`fas ${item.icon} text-yellow-500 group-hover:animate-pulse`} />
                    <span className="text-sm font-medium group-hover:text-white transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: THE VISUAL */}
          <div className="sticky top-32">
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-yellow-900/10">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                alt="Aura Portfolio Preview" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* TESTIMONIAL CARD */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="mt-8 p-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-[2.5rem] border border-white/10 relative overflow-hidden"
            >
              <i className="fas fa-quote-right text-6xl text-yellow-500/10 absolute -top-4 -right-4" />
              <p className="text-gray-300 text-lg italic leading-relaxed relative z-10 mb-6">
                "The Scarlet Wizards took my boring PDF resume and turned it into a weapon. I now have recruiters reaching out to me daily."
              </p>
              <div className="text-yellow-500 font-black text-[10px] uppercase tracking-[4px]">
                — Senior Lead Developer, Global Tech
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <Contact />
    </main>
  );
}