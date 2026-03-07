"use client";
import ParticlesBg from "./ParticlesBg"; 

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-[#050505] overflow-hidden">
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-[#050505] z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBg />
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center px-6 max-w-5xl">
        
        {/* Status Ribbon */}
        <div className="flex justify-center mb-8 animate-fadeInDown">
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

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-white tracking-tighter animate-zoomIn">
          WE ARCHITECT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-800 italic font-serif">
            SOVEREIGNTY.
          </span>
        </h1>

        <p className="mt-10 text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-fadeInUp">
          At <span className="text-white font-bold">Scarlet Tech Wizards</span>, we don't just weave webs. We engineer digital artifacts that command authority and work while you sleep.
        </p>

        {/* REFINED CTA HIERARCHY */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center animate-fadeInUp">
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

        {/* SCROLL CUE */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
           <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  );
}