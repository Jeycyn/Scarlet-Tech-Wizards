"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Archives() {
  const [filter, setFilter] = useState('all');

  const artifacts = [
    { title: "James Tailoring", type: "web", tag: "Bespoke Fashion", status: "LIVE", desc: "Elite African heritage portal designed for master tailors with digital lookbooks.", slug: "james-tailoring" },
    { title: "Eldoret Heights", type: "app", tag: "Property Tech", status: "ALPHA", desc: "Luxury residential listing engine with automated site visit scheduling.", slug: "eldoret-heights" },
    { title: "Vanguard Analytics", type: "app", tag: "Logistics", status: "SECURE", desc: "High-precision SaaS for real-time tracking and predictive inventory.", slug: "vanguard-analytics" },
    { title: "Kijani Safaris", type: "web", tag: "Tourism", status: "PLANNING", desc: "High-end expedition hub for luxury safari storytelling and itineraries.", slug: "kijani-safaris" },
    { title: "Rift Haulers", type: "app", tag: "Logistics", status: "SECURE", desc: "Supply chain management for heavy-duty transport across East Africa.", slug: "rift-haulers" },
    { title: "The Gavel Group", type: "web", tag: "Legal", status: "RESERVED", desc: "Modern legal portal with secure document submission and private scheduling.", slug: "gavel-group" },
    { title: "Mazao Digital", type: "app", tag: "Agriculture", status: "BETA", desc: "Direct-to-market platform connecting farmers to real-time grain pricing.", slug: "mazao-digital" },
    { title: "Neema Health", type: "app", tag: "Healthcare", status: "PROTOTYPE", desc: "Patient-centric diagnostic portal with cloud-based lab management.", slug: "neema-health" },
    { title: "Chama Connect", type: "app", tag: "Fintech", status: "SANDBOX", desc: "Transparency engine for investment groups to track digital dividends.", slug: "chama-connect" },
    { title: "Jua Kali Solar", type: "web", tag: "Energy", status: "ACTIVE", desc: "E-commerce and installation portal for residential solar solutions.", slug: "jua-kali-solar" },
    { title: "Rift Academy", type: "web", tag: "Ed-Tech", status: "PLANNING", desc: "Comprehensive school management system for high-standard institutions.", slug: "rift-academy" },
    { title: "Scarlet Prints", type: "design", tag: "Branding", status: "DESIGN", desc: "Premium branding, business cards, and political signature designs.", slug: "scarlet-prints" },
  ];

  const filtered = filter === 'all' ? artifacts : artifacts.filter(a => a.type === filter);

  return (
    <main className="bg-[#080808] min-h-screen text-white selection:bg-yellow-500/30">
      <Navbar />

      {/* ELITE HEADER */}
      <section className="relative pt-44 pb-24 border-b border-yellow-500/10 bg-gradient-to-b from-[#111] to-[#080808]">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[4px] text-gray-500 hover:text-yellow-500 transition-all mb-12 group">
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Return to Sanctum
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-[12px] text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-6"
          >
            The Digital Archives
          </motion.h1>
          <p className="text-gray-500 italic font-light tracking-widest uppercase text-xs">
            Scarlet Tech Wizards | Verified Deployments & Prototypes
          </p>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <div className="flex justify-center gap-4 py-12 flex-wrap">
        {['all', 'web', 'app', 'design'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 text-[9px] font-black uppercase tracking-[3px] transition-all border rounded-full ${
              filter === cat ? 'bg-yellow-500 border-yellow-500 text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10 text-gray-500 hover:border-yellow-500/50 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ARTIFACT GRID */}
      <div className="container mx-auto px-6 pb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filtered.map((item) => (
              <motion.div
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-xl hover:border-yellow-500/30 hover:bg-yellow-500/[0.01] transition-all duration-500"
              >
                {/* STATUS BADGE */}
                <div className="absolute top-6 right-6 text-[8px] font-black bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-1 rounded">
                  {item.status}
                </div>

                <span className="inline-block text-[10px] font-black uppercase tracking-[3px] text-yellow-500 border border-yellow-500/30 px-3 py-1 mb-6">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-yellow-500 transition-colors uppercase tracking-tighter">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[60px] font-light">
                  {item.desc}
                </p>

                <Link 
                  href={`/archives/${item.slug}`} 
                  className="inline-block text-[10px] font-black uppercase tracking-[2px] border-b-2 border-yellow-600 pb-1 hover:text-yellow-500 hover:tracking-[3px] transition-all"
                >
                  Open Artifact
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}