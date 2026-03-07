export default function Services() {
  const serviceManifesto = [
    { 
      icon: "fas fa-shopping-bag", 
      title: "E-Commerce Magic", 
      focus: "Conversion Architecture",
      desc: "We don't just build stores; we engineer psychological checkout flows that transform passive browsers into brand disciples.",
      tech: "Stripe • Shopify Headless • Next.js"
    },
    { 
      icon: "fas fa-microchip", 
      title: "Web App Potions", 
      focus: "Logic Orchestration",
      desc: "Bespoke internal tools and SaaS dashboards designed to handle high-velocity data with absolute zero latency.",
      tech: "PostgreSQL • Real-time Sync • AWS"
    },
    { 
      icon: "fas fa-crown", 
      title: "Pro Portfolios", 
      focus: "Legacy Branding",
      desc: "The digital equivalent of a tailored suit. We create interactive narratives that position you as the only logical choice in your field.",
      tech: "Framer Motion • 3D Intros • SEO Max"
    },
    { 
      icon: "fas fa-id-card", 
      title: "Identity & Print", 
      focus: "Physical Authority",
      desc: "Tangible brand assets. From high-GSM business cards to cinematic posters, we ensure your physical presence matches your digital aura.",
      tech: "Vector Precision • Print-Ready CMYK"
    },
  ];

  return (
    <section id="services" className="py-32 bg-[#050505] relative border-y border-white/5 overflow-hidden">
      {/* Background Brand Watermark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[180px] font-black leading-none uppercase tracking-tighter">Capabilities</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 border border-red-600/20 rounded mb-4">
             <h6 className="text-red-600 font-black tracking-[6px] text-[10px] uppercase">Tactical Offerings</h6>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Wizardry.</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-light text-lg">
            Our interventions are surgical. We deploy high-fidelity code to solve the most complex commercial frictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceManifesto.map((s, i) => (
            <div 
              key={i} 
              className="group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] transition-all duration-500 hover:bg-[#111] hover:border-red-600/40 hover:shadow-[0_0_60px_-15px_rgba(220,38,38,0.3)]"
            >
              {/* Index Numbering */}
              <span className="absolute top-8 right-10 text-white/5 font-black text-5xl group-hover:text-red-600/10 transition-colors duration-500">
                0{i + 1}
              </span>

              {/* Icon Box */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-gradient-to-br from-red-950/30 to-transparent text-red-600 border border-red-600/10 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-2xl">
                <i className={`${s.icon} text-2xl`}></i>
              </div>
              
              <p className="text-red-600 text-[9px] font-black tracking-[3px] uppercase mb-2">{s.focus}</p>
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">{s.desc}</p>
              
              {/* Technical Footprint */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-[9px] font-mono text-gray-600 group-hover:text-gray-300 transition-colors uppercase tracking-wider">
                   {s.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
            <p className="text-gray-600 text-[10px] font-bold tracking-[3px] uppercase">
              Custom enchantments available upon 
              <span className="text-white hover:text-red-600 cursor-pointer ml-2 transition-colors border-b border-red-600/50 pb-1">
                Direct Inquiry
              </span>
            </p>
        </div>
      </div>
    </section>
  );
}