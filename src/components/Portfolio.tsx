"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const items = [
  {
    type: "web",
    slug: "bakery-hub",
    title: "The Bakery Hub",
    badge: "Corporate",
    desc: "Premium E-commerce and automated ordering ecosystem.",
    stack: "Next.js • Stripe • Tailwind",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format",
    accent: "#c9a84c",
  },
  {
    type: "app",
    slug: "vanguard-analytics",
    title: "Vanguard Analytics",
    badge: "SaaS",
    desc: "High-velocity inventory management for complex logistics.",
    stack: "React • Node.js • PostgreSQL",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
    accent: "#f5e0a0",
  },
  {
    type: "resume",
    slug: "aura-portfolio",
    title: "Aura Portfolio v2",
    badge: "Personal Branding",
    desc: "Interactive 3D narrative for high-tier industry placement.",
    stack: "Three.js • GSAP • Framer",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format",
    accent: "#c9a84c",
  },
];

const FILTERS = ["all", "web", "app", "resume"];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <>
      <style>{`
        /* Hover scan sweep on card image */
        @keyframes imgScan {
          0%   { top: 0%;   opacity: 0.6; }
          100% { top: 100%; opacity: 0;   }
        }
        .portfolio-card:hover .img-scan {
          animation: imgScan 0.8s ease forwards;
        }

        /* Gold shimmer on active filter */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .filter-active {
          background: linear-gradient(90deg, #c9a84c, #f5e0a0, #c9a84c);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }

        /* Dot pulse */
        @keyframes dotPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }

        /* Circuit bg */
        .circuit-bg {
          background-image:
            linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Arrow button rotate on hover */
        .arrow-btn { transition: background 0.4s, transform 0.5s; }
        .portfolio-card:hover .arrow-btn {
          transform: rotate(45deg);
        }
      `}</style>

      <section id="portfolio" className="py-32 bg-[#050505] relative overflow-hidden circuit-bg">

        {/* Watermark */}
        <div className="absolute top-10 left-10 opacity-[0.02] text-[150px] font-black uppercase pointer-events-none tracking-tighter text-white select-none">
          Archive
        </div>

        {/* Ambient glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(201,168,76,0.04) 0%,transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c9a84c]/20 rounded mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
                style={{ boxShadow: "0 0 5px #c9a84c", animation: "dotPulse 2s infinite" }} />
              <h6 className="text-[#c9a84c] font-black tracking-[6px] text-[10px] uppercase">
                Curated Exhibition
              </h6>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase">
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#f5e0a0] to-[#c9a84c] font-serif italic">
                Artifacts
              </span>
            </h2>
            <p className="text-gray-500 mt-4 text-sm font-light max-w-md mx-auto">
              Each project is a testament to precision engineering and sovereign design.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 text-[10px] font-black uppercase tracking-[3px] transition-all duration-300 border rounded-full ${filter === cat
                    ? "text-black border-transparent filter-active shadow-[0_0_20px_rgba(201,168,76,0.35)]"
                    : "bg-transparent border-white/10 text-gray-500 hover:border-[#c9a84c]/30 hover:text-[#c9a84c]"
                  }`}
              >
                {cat === "all" ? "All Artifacts" : `${cat}s`}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="portfolio-card group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-all duration-700"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.accent}33`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px -10px ${item.accent}22`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Image container */}
                  <div className="h-80 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />

                    {/* Scan sweep on hover */}
                    <div className="img-scan absolute left-0 right-0 h-[2px] pointer-events-none"
                      style={{
                        top: 0,
                        background: `linear-gradient(90deg,transparent,${item.accent},transparent)`,
                        opacity: 0,
                      }}
                    />

                    {/* Badge over image */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                        style={{
                          color: item.accent,
                          background: `${item.accent}12`,
                          borderColor: `${item.accent}30`,
                        }}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-8 relative">
                    {/* Gold left border accent */}
                    <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full transition-all duration-700 rounded-b"
                      style={{ background: `linear-gradient(to bottom,${item.accent},transparent)` }} />

                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-3 tracking-wider">
                      {item.stack}
                    </p>

                    <h4 className="font-black text-2xl tracking-tight mb-3 transition-colors duration-300 text-white"
                      style={{}}
                      onMouseEnter={e => (e.currentTarget.style.color = item.accent)}
                      onMouseLeave={e => (e.currentTarget.style.color = "white")}
                    >
                      {item.title}
                    </h4>

                    <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.desc}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <Link
                        href={`/archives/${item.slug}`}
                        className="flex items-center gap-3 font-black text-[10px] tracking-widest uppercase group/link text-white hover:text-[#c9a84c] transition-colors"
                      >
                        Explore Case Study
                        <span className="h-[1px] w-8 group-hover/link:w-14 transition-all duration-400"
                          style={{ background: item.accent }} />
                      </Link>

                      <Link
                        href={`/archives/${item.slug}`}
                        className="arrow-btn w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/5 hover:text-black"
                        style={{}}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = item.accent;
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                        }}
                      >
                        →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View all CTA */}
          <div className="mt-20 text-center">
            <Link
              href="/archives"
              className="inline-flex items-center gap-4 font-black text-[10px] tracking-[4px] uppercase border px-10 py-5 rounded-xl transition-all duration-300 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black"
              style={{
                borderColor: "rgba(201,168,76,0.35)",
                boxShadow: "0 0 20px rgba(201,168,76,0.08)",
              }}
            >
              View Full Archives
              <span className="h-[1px] w-8 bg-[#c9a84c]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}