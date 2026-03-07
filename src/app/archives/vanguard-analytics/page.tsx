"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
// Fixed the import to match standard component naming conventions
import Contact from "@/components/Contacts"; 

export default function VanguardAnalytics() {
  const features = [
    { 
      icon: "fa-layer-group", 
      title: "The Stack", 
      desc: "Microservices architecture utilizing Python (FastAPI) for high-speed data processing and Next.js for the UI." 
    },
    { 
      icon: "fa-brain", 
      title: "Intelligence", 
      desc: "Integrated AI models predicting stock depletion up to 14 days in advance with 92% validated accuracy." 
    },
    { 
      icon: "fa-lock", 
      title: "Security", 
      desc: "End-to-end AES-256 encryption and MFA protocols protecting sensitive corporate logistics data." 
    }
  ];

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      <Navbar />

      {/* FIXED NAV: Exit Secure Node */}
      <Link 
        href="/archives" 
        className="fixed top-24 left-8 z-50 group flex items-center gap-3 px-6 py-3 bg-white text-black font-black text-[10px] tracking-[3px] uppercase rounded-full transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
      >
        <i className="fas fa-shield-halved transition-transform group-hover:rotate-12"></i>
        Exit Secure Node
      </Link>

      {/* CYBER HERO SECTION */}
      <header className="relative h-[85vh] flex items-center overflow-hidden border-b border-cyan-500/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/85 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600" 
            className="w-full h-full object-cover scale-105" 
            alt="Vanguard Data Background" 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-500 text-[9px] font-black uppercase tracking-[3px]">System Live: V.4.0</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
          >
            Vanguard <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Analytics</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-xl font-light max-w-xl leading-relaxed"
          >
            A high-precision SaaS platform for real-time logistics tracking and predictive inventory management for enterprise giants.
          </motion.p>
        </div>
      </header>

      {/* CORE CAPABILITIES */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, borderColor: "rgba(6, 182, 212, 0.4)" }}
              className="bg-white/5 border border-cyan-500/10 p-10 rounded-[2.5rem] transition-all hover:bg-cyan-500/5"
            >
              <i className={`fas ${f.icon} text-cyan-500 text-3xl mb-8`}></i>
              <h4 className="text-white font-black text-xl uppercase tracking-tight mb-4">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* IMPACT CASE STUDY */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-[1px] border border-white/5 rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent"
        >
          <div className="bg-[#030303] rounded-[3.4rem] p-8 md:p-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">The Impact</h2>
                <p className="text-gray-400 text-xl font-light leading-relaxed mb-10">
                  Deployed for a regional logistics giant in Kenya. Before Vanguard, they faced a 15% discrepancy in inventory. After our wizardry, that number dropped to <span className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-8 decoration-2">less than 1.2%</span>.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-cyan-500 text-black font-black text-[10px] tracking-[4px] uppercase rounded-full hover:bg-white transition-all shadow-xl shadow-cyan-900/20"
                >
                  Request Demo Access
                </motion.button>
              </div>
              
              <div className="lg:col-span-5">
                <div className="relative rounded-[2rem] overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    alt="Dashboard Interface" 
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Contact />
    </main>
  );
}