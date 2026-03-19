"use client";
import { useState, useEffect } from "react";
import ParticlesBg from "@/components/ParticlesBg";

export default function Hero() {
  const [showArtifactsButton, setShowArtifactsButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowArtifactsButton(true);
      } else {
        setShowArtifactsButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // CHANGED: items-center to items-start for vertical top-alignment (optional) 
    // and justify-center to justify-start for left alignment
    <section className="relative flex items-center justify-start min-h-[130vh] py-24 bg-[#050505] overflow-hidden">
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-[#050505] z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBg />
      </div>

      {/* Hero Content */}
      {/* CHANGED: text-center to text-left | mx-auto removed to keep it left | Added md:ml-20 for breathing room */}
      <div className="z-10 text-left px-6 max-w-5xl md:ml-20">
        
        {/* Status Ribbon */}
        {/* CHANGED: justify-center to justify-start */}
        <div className="flex justify-start mb-12 animate-fadeInDown">
          <div className="px-4 py-1.5 border border-red-600/30 rounded-full bg-red-950/10 backdrop-blur-md flex items-center gap-3">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
             </span>
             <p className="text-[9px] font-black text-white uppercase tracking-[4px]">
                Available for Select Q2 2026 Partnerships
             </p>
          </div>
        </div>

        {/* CHANGED: Reduced sizes from 8xl/10rem to 5xl/7xl */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white tracking-tighter animate-zoomIn">
          WE ARCHITECT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-800 italic font-serif">
            SOVEREIGNTY.
          </span>
        </h1>

        {/* CHANGED: Removed mx-auto to keep text left-aligned */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed animate-fadeInUp">
          At <span className="text-white font-bold">Scarlet Tech Wizards</span>, we don't just weave webs. We engineer digital artifacts that command authority and work while you sleep.
        </p>

        {/* REFINED CTA HIERARCHY */}
        {/* CHANGED: justify-center to justify-start */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-start animate-fadeInUp">
          <div className="flex gap-4">
            <a
              href="/archives"
              className="px-8 py-5 border border-white/10 text-white font-black text-[10px] tracking-[4px] uppercase rounded-xl hover:bg-white hover:text-black transition-all"
            >
              The Archives
            </a>

            <a
              href="/#services"
              className="px-8 py-5 border border-white/10 text-white font-black text-[10px] tracking-[4px] uppercase rounded-xl hover:bg-white hover:text-black transition-all"
            >
              Our Spells
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
         <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* FLOATING ARTIFACTS POPUP */}
      <div 
        className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 transform ${
          showArtifactsButton ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <a 
          href="/archives"
          className="group relative flex items-center gap-4 bg-white text-black p-2 pr-6 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-red-600 hover:text-white transition-all"
        >
          <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM208,192H48V64H208Z"></path></svg>
          </div>
          View All Artifacts
        </a>
      </div>

    </section>
  );
}