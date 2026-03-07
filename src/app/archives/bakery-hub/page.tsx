"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";

export default function BakeryHub() {
  const specs = [
    { icon: "fa-code", label: "Stack", value: "React, Node.js, Stripe" },
    { icon: "fa-clock", label: "Timeline", value: "4 Weeks" },
    { icon: "fa-chart-line", label: "Growth", value: "+45% Online Sales" },
    { icon: "fa-bolt", label: "Speed", value: "0.4s Load Time" }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-red-600/30">
      <Navbar />

      {/* FIXED NAV: Return to Sanctum */}
      <Link 
        href="/archives" 
        className="fixed top-24 left-8 z-50 group flex items-center gap-3 px-6 py-3 bg-red-600 text-white font-black text-[10px] tracking-[3px] uppercase rounded-full transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(220,0,0,0.4)]"
      >
        <i className="fas fa-chevron-left transition-transform group-hover:-translate-x-1"></i>
        Return to Sanctum
      </Link>

      {/* CINEMATIC HERO */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600" 
            className="w-full h-full object-cover opacity-50" 
            alt="Bakery Background" 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-[10px] font-black uppercase mb-4 tracking-[8px]"
          >
            E-Commerce Transformation
          </motion.p>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none"
          >
            The Bakery <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Hub.</span>
          </motion.h1>
        </div>
      </header>

      {/* CORE ANALYSIS GRID */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: MISSION & SPECS */}
          <div className="lg:col-span-8 space-y-20">
            <div className="relative">
              <h2 className="text-4xl font-black uppercase mb-8 border-l-4 border-red-600 pl-6">
                The Project Mission
              </h2>
              <p className="text-gray-400 text-2xl font-light leading-relaxed max-w-3xl">
                The client, a high-volume artisanal bakery, was losing <span className="text-white font-bold">20% of their revenue</span> to missed phone orders. We stepped in to engineer an automated <span className="italic text-red-500">"Dough-to-Door"</span> pipeline.
              </p>
            </div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                alt="Bakery Interface Preview" 
              />
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-widest">The Technical Sorcery</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Utilizing a <span className="text-white font-medium">Headless Commerce</span> architecture, we decoupled the frontend from the backend. This ensures lightning-fast load times even during massive peak traffic events like Black Friday and the Holiday season.
              </p>
            </div>
          </div>

          {/* RIGHT: SIDEBAR STATS */}
          <div className="lg:col-span-4 space-y-6 sticky top-32 h-fit">
            <div className="bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl shadow-2xl">
              <h5 className="text-white font-black text-[10px] uppercase tracking-[4px] mb-8 pb-4 border-b border-white/10">Project Specs</h5>
              <div className="space-y-6">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <i className={`fas ${spec.icon}`}></i>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[9px] uppercase font-black tracking-widest">{spec.label}</p>
                      <p className="text-white text-sm font-bold">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-900 p-1 rounded-[2.5rem]">
              <div className="bg-[#0a0a0a] p-10 rounded-[2.3rem] flex flex-col items-center text-center">
                <h5 className="text-white font-black text-[10px] uppercase tracking-[4px] mb-6">Live Artifact</h5>
                <a 
                  href="https://bakery-hub.example.com" 
                  className="w-full py-4 bg-white text-black font-black text-[10px] tracking-[4px] uppercase rounded-full hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-red-900/20"
                >
                  Launch Live Site
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Contact />
    </main>
  );
}