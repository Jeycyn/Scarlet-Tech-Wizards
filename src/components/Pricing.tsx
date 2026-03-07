export default function Pricing() {
  const tiers = [
    {
      title: "Essential Spell",
      price: "15,000",
      focus: "Market Entry",
      features: [
        "High-Performance Landing Page",
        "Mobile-First Responsive Design",
        "5-Day Rapid Deployment",
        "Standard WhatsApp Support"
      ],
      btn: "Start My Journey",
      highlight: false,
      color: "border-white/10"
    },
    {
      title: "Strategic Potion",
      price: "45,000",
      focus: "Growth & Logic",
      features: [
        "Full E-Commerce / SaaS Setup",
        "Custom Database Integration",
        "10-Day Tactical Sprint",
        "Priority 24/7 Support"
      ],
      btn: "Scale My Brand",
      highlight: true,
      color: "border-red-600"
    },
    {
      title: "Sovereign Artifact",
      price: "120,000",
      focus: "Elite Legacy",
      features: [
        "Immersive 3D/Next.js Experience",
        "Advanced SEO & Performance Max",
        "21-Day Masterpiece Cycle",
        "Direct Line Partnership"
      ],
      btn: "Dominate the Market",
      highlight: false,
      color: "border-yellow-500"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 border border-red-600/20 rounded mb-4">
            <h6 className="text-red-600 font-black tracking-[6px] text-[10px] uppercase">Kenya Market Tiers</h6>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 font-serif italic">Investment</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto font-light leading-relaxed text-lg">
            High-fidelity digital solutions, priced for the Kenyan visionary.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative group p-10 rounded-[3rem] border transition-all duration-700 ${
                tier.highlight 
                ? 'bg-[#0a0a0a] border-red-600 shadow-[0_0_60px_-15px_rgba(220,38,38,0.4)] scale-105 z-20' 
                : `bg-transparent ${tier.color} hover:border-white/20`
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-[9px] font-black uppercase tracking-[3px] py-2 px-6 rounded-full shadow-lg">
                  Most Requested
                </div>
              )}

              <div className="mb-10 text-center">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[4px] mb-2">{tier.focus}</p>
                <h4 className={`text-2xl font-black mb-6 ${tier.highlight ? 'text-white' : 'text-gray-300'}`}>{tier.title}</h4>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-gray-400 text-sm font-bold mt-[-10px]">KSh</span>
                  <span className="text-5xl font-black text-white tracking-tighter">{tier.price}</span>
                </div>
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-2">Starting Base</p>
              </div>

              <ul className="space-y-5 mb-12">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    <i className="fas fa-bolt text-[10px] text-red-600"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-[10px] tracking-[4px] uppercase transition-all duration-500 ${
                tier.highlight 
                ? 'bg-red-600 text-white hover:bg-white hover:text-black shadow-xl shadow-red-900/20' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
              }`}>
                {tier.btn}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-600 text-[10px] font-bold tracking-[3px] uppercase">
            Payment Plans & Installments Available via 
            <span className="text-white hover:text-red-600 cursor-pointer ml-2 transition-colors border-b border-red-600/30">
              M-PESA / Direct Briefing
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}