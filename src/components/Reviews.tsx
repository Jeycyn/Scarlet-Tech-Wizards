export default function Reviews() {
  const reviews = [

     { 
    name: "Hon. George Innocent", 
    role: "Member of County Assembly / Tech Advocate", 
    text: "The digital infrastructure created by this team is a masterclass in scalability. They aren't just coding; they are building the future of our regional digital economy.", 
    img: "Hon.Innocent.png", 
    rating: 5
  },

    { 
      name: "Veliswa T.", 
      role: "Founder, Fintech Startup", 
      text: "Scarlet Tech Wizards didn't just build a site; they architected a digital experience. The conversion flow is pure magic.", 
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    { 
      name: "John M.", 
      role: "Director, Logistics Firm", 
      text: "The attention to detail on our custom dashboard is unmatched. Functional, fast, and visually enchanting.", 
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    { 
      name: "Eiden S.", 
      role: "Creative Director", 
      text: "Working with Jeycyn and the team was like watching a spell come to life. They bridge the gap between art and code perfectly.", 
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
  ];

  return (
    <section id="reviews" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative Background Quote Mark */}
      <i className="fas fa-quote-right absolute top-10 right-10 text-[200px] text-white/5 pointer-events-none"></i>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 border border-red-600/20 rounded mb-4">
            <h6 className="text-red-600 font-black tracking-[6px] text-[10px] uppercase">Client Echoes</h6>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 font-serif italic">Enchantments</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] transition-all duration-700 hover:border-red-600/30 hover:bg-[#111]"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(r.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-[10px] text-yellow-500"></i>
                ))}
              </div>

              <p className="text-gray-400 text-lg leading-relaxed italic mb-10 font-light">
                "{r.text}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="relative">
                   <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                   <img 
                    src={r.img} 
                    alt={r.name} 
                    className="w-14 h-14 rounded-full object-cover relative z-10 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight">{r.name}</h4>
                  <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BAR */}
        <div className="mt-24 py-10 border-y border-white/5 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
           <p className="text-white font-black tracking-[4px] text-xs uppercase">Trusted by Innovators Across East Africa</p>
           {/* You can add small grayscale logos of companies you've worked with here */}
        </div>
      </div>
    </section>
  );
}