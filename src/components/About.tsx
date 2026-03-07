export default function About() {
  return (
    <section id="about" className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-900/10 blur-[120px] rounded-full -z-10 opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: THE PHILOSOPHY */}
          <div className="animate-fadeInLeft">
            <div className="inline-block px-4 py-1 border border-red-600/30 rounded-full mb-8">
               <h6 className="text-red-600 text-[10px] font-black tracking-[5px] uppercase">The Alchemy of Code</h6>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              Elite Solutions for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-600 to-red-800">
                Modern Sovereign.
              </span>
            </h2>
            
            <p className="text-gray-400 text-xl leading-relaxed mb-10 font-light max-w-xl">
              At <span className="text-white font-bold">Scarlet Tech Wizards</span>, we view digital architecture as high-art. We don't just deploy scripts; we transform raw business requirements into <span className="text-white italic">Digital Gold</span> through precision engineering.
            </p>

            {/* CORE PILLARS */}
            <div className="grid sm:grid-cols-2 gap-10 mb-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900/40 to-transparent flex items-center justify-center text-red-600 border border-red-900/20 group-hover:border-red-600 transition-all duration-500 shadow-lg">
                    <i className="fas fa-microchip"></i>
                  </div>
                  <h6 className="font-bold text-white tracking-widest text-sm uppercase">Boundary Tech</h6>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Leveraging Next.js and Cloud-Native ecosystems to ensure your platform is built for absolute speed and infinite scale.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-900/40 to-transparent flex items-center justify-center text-yellow-500 border border-yellow-900/20 group-hover:border-yellow-500 transition-all duration-500 shadow-lg">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="font-bold text-white tracking-widest text-sm uppercase">Unique Identity</h6>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We reject the mediocrity of templates. Every pixel is hand-crafted to reflect the singular DNA of your brand.
                </p>
              </div>
            </div>

            <a href="#services" className="inline-flex items-center gap-4 text-white font-black text-[10px] tracking-[4px] uppercase group">
              Explore our methodology 
              <span className="w-12 h-[1px] bg-red-600 group-hover:w-20 transition-all duration-500"></span>
            </a>
          </div>

          {/* RIGHT SIDE: THE ARTIFACT (OATH CARD) */}
          <div className="relative">
            {/* Glassmorphism Card */}
            <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] p-12 md:p-16 border border-white/10 shadow-2xl overflow-hidden group">
              {/* Internal Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 blur-3xl rounded-full group-hover:bg-red-600/40 transition-all duration-700" />
              
              <div className="relative z-10">
                <h4 className="font-black text-red-600 text-[10px] tracking-[6px] uppercase mb-8">The Wizard's Oath</h4>
                <p className="text-3xl md:text-4xl text-gray-200 font-serif italic leading-[1.4] mb-12">
                  "To provide premium digital artifacts that don't just exist on the web, but <span className="text-white font-bold not-italic">dominate</span> it. From Kenya to the global stage, we bridge the gap between imagination and execution."
                </p>
                
                {/* METRIC STRIP */}
                <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-white">100%</h3>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Fortified</p>
                  </div>
                  <div className="text-center border-x border-white/5">
                    <h3 className="text-2xl font-black text-yellow-500">24/7</h3>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Vigilance</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-white">Global</h3>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Footprint</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Frame */}
            <div className="absolute -inset-4 border border-red-600/10 rounded-[3.5rem] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}