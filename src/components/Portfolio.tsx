"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  // Slugs updated to match our app/archives/[slug] folder structure
  const items = [
    { 
      type: "web", 
      slug: "bakery-hub", 
      title: "The Bakery Hub", 
      badge: "Corporate", 
      desc: "Premium E-commerce and automated ordering ecosystem.", 
      stack: "Next.js • Stripe • Tailwind",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format" 
    },
    { 
      type: "app", 
      slug: "vanguard-analytics", 
      title: "Vanguard Analytics", 
      badge: "SaaS", 
      desc: "High-velocity inventory management for complex logistics.", 
      stack: "React • Node.js • PostgreSQL",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format" 
    },
    { 
      type: "resume", 
      slug: "aura-portfolio", 
      title: "Aura Portfolio v2", 
      badge: "Personal Branding", 
      desc: "Interactive 3D narrative for high-tier industry placement.", 
      stack: "Three.js • GSAP • Framer",
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format" 
    },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Ambient Text */}
      <div className="absolute top-10 left-10 opacity-[0.02] text-[150px] font-black uppercase pointer-events-none tracking-tighter">
        Archive
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 border border-red-600/20 rounded mb-4">
            <h6 className="text-red-600 font-black tracking-[6px] text-[10px] uppercase">Curated Exhibition</h6>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 font-serif italic">Artifacts</span>
          </h2>
        </div>

        {/* FILTERING SYSTEM */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {['all', 'web', 'app', 'resume'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 text-[10px] font-black uppercase tracking-[3px] transition-all border ${
                filter === cat 
                ? 'bg-red-600 border-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
                : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
              } rounded-full`}
            >
              {cat === 'all' ? 'All Artifacts' : `${cat}s`}
            </button>
          ))}
        </div>

        {/* GRID WITH MOTION REARRANGING */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/5 transition-all duration-700 hover:border-red-600/30"
              >
                {/* Image Container */}
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Overlay */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-red-600 text-[9px] font-black uppercase tracking-widest bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
                      {item.badge}
                    </span>
                    <p className="text-[10px] font-mono text-gray-600 uppercase">{item.stack}</p>
                  </div>
                  
                  <h4 className="text-white font-black text-2xl tracking-tight mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    {/* Updated to Next.js Link pointing to the [slug] route */}
                    <Link href={`/archives/${item.slug}`} className="flex items-center gap-2 text-white font-black text-[10px] tracking-widest uppercase group/link">
                      Explore Case Study
                      <span className="w-8 h-[1px] bg-red-600 group-hover/link:w-12 transition-all" />
                    </Link>
                    <Link href={`/archives/${item.slug}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:rotate-45 transition-all duration-500">
                      <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}