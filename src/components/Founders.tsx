"use client";
import { useState } from "react";

export default function Founder() {
  // State to track the currently expanded image
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const founders = [
    {
      name: "Jeycyn Jeff",
      role: "Founder & Lead Wizard",
      image: "jeycyn.png",
      bio: "Master of conversion architecture and boundary-pushing digital engineering.",
      linkedin: "https://linkedin.com/in/jeycyn-jeff-3ba769313/",
      email: "jeffjeycyn@gmail.com",
      color: "border-red-600",
      glow: "from-red-600"
    },
    {
      name: "Bilha Warui",
      role: "Co-Founder & Chief Operations",
      image: "bilha.png",
      bio: "Strategic mastermind specializing in operational precision and client-success ecosystems.",
      linkedin: "#",
      email: "mailto:info@scarlettechwizards.com",
      color: "border-yellow-500",
      glow: "from-yellow-500"
    },
    {
      name: "Graham Bell",
      role: "Co-Founder & Creative Director",
      image: "graham.jfif", 
      bio: "The visionary eye behind the magic, specializing in cinematic UI and disruptive visual narratives.",
      linkedin: "#", 
      email: "mailto:graham111838052@gmail.com",
      color: "border-orange-600",
      glow: "from-orange-600"
    }
  ];

  return (
    <section id="founder" className="py-32 bg-[#050505] relative overflow-hidden">
      
      {/* 1. IMAGE MODAL OVERLAY */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full flex justify-center">
             <button 
                className="absolute -top-12 right-0 text-white font-light text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                onClick={() => setSelectedImage(null)}
             >
                Close [×]
             </button>
             <img 
               src={selectedImage} 
               alt="Expanded Wizard" 
               className="max-h-[80vh] w-auto rounded-3xl shadow-[0_0_50px_rgba(220,38,38,0.2)] border border-white/10 animate-zoomIn"
             />
          </div>
        </div>
      )}

      {/* Decorative Brand Text */}
      <div className="absolute top-0 right-0 opacity-[0.02] text-[150px] font-black uppercase pointer-events-none tracking-tighter">
        Council
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 border border-red-600/20 rounded mb-4">
            <h6 className="text-red-600 font-black tracking-[6px] text-[10px] uppercase">The Master Wizards</h6>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">Founding Council</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {founders.map((f, i) => (
            <div key={i} className={`group bg-[#0a0a0a] border border-white/5 p-8 rounded-[3rem] transition-all duration-500 hover:bg-[#111] border-b-4 ${f.color} flex flex-col items-center text-center`}>
              
              <div className="relative mb-8 cursor-zoom-in">
                <div className={`absolute inset-0 bg-gradient-to-tr ${f.glow} to-transparent opacity-20 rounded-2xl blur-lg group-hover:opacity-40 transition-opacity`} />
                <img 
                  src={f.image} 
                  alt={f.name} 
                  // Trigger state on click
                  onClick={() => setSelectedImage(f.image)}
                  className="w-40 h-40 object-cover rounded-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl active:scale-95"
                />
                {/* Hint Text for User */}
                <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity text-white/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                </div>
              </div>
              
              <h4 className="text-white font-black text-2xl tracking-tight mb-1">{f.name}</h4>
              <p className={`text-[10px] font-black tracking-[3px] uppercase mb-4 ${i === 0 ? 'text-red-600' : i === 1 ? 'text-yellow-500' : 'text-orange-500'}`}>
                {f.role}
              </p>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 italic px-4">
                "{f.bio}"
              </p>
              
              <div className="flex gap-4 mt-auto">
                <a href={f.linkedin} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <i className="fab fa-linkedin-in text-xs"></i>
                </a>
                <a href={f.email} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all">
                  <i className="fas fa-envelope text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* UNIFIED MANIFESTO */}
        <div className="mt-24 max-w-4xl mx-auto text-center animate-fadeInUp">
          <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 relative shadow-2xl">
              <i className="fas fa-quote-left text-4xl text-red-600/20 absolute top-10 left-10"></i>
              <h5 className="text-white font-bold text-xl mb-6 tracking-wide uppercase">The Scarlet Doctrine</h5>
              <p className="text-gray-300 text-xl font-light leading-relaxed italic">
                "We united to bridge the gap between imagination and execution. Scarlet Tech Wizards is more than a firm—it's a global standard for digital excellence."
              </p>
              <div className="mt-10">
                <a href="#contact" className="inline-block bg-red-600 text-white px-10 py-4 rounded-full font-black text-[10px] tracking-[4px] uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-red-900/20">
                  Summon the Council
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}