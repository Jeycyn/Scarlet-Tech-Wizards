export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* LEFT SIDE: BRAND AUTHORITY */}
          <div className="animate-fadeInLeft">
            <div className="inline-block px-3 py-1 border border-red-600/20 rounded mb-6">
               <h6 className="text-red-600 font-black tracking-[6px] text-[10px] uppercase">Secure Channel</h6>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                Ascend?
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-md font-light">
              We are selective with our partnerships. If you have a vision that demands elite execution, reach out through our encrypted channel.
            </p>

            {/* TACTICAL CONTACT CARDS */}
            <div className="space-y-6">
              <a href="mailto:jeffjeycyn@gmail.com" className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-600/40 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-red-950/30 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Direct Correspondence</p>
                  <p className="text-white font-bold group-hover:text-red-600 transition-colors">jeffjeycyn@gmail.com</p>
                </div>
              </a>

              <a href="tel:+254114346186" className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-600/40 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Encrypted Line</p>
                  <p className="text-white font-bold group-hover:text-yellow-400 transition-colors">0114 346186</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: THE PROJECT INTAKE */}
          <div className="relative animate-fadeInRight">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative">
              <h4 className="text-white font-bold text-2xl mb-8">Project Intake Form</h4>
              
              <form className="space-y-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full py-4 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-gray-700"
                  />
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Professional Email" 
                    className="w-full py-4 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-gray-700"
                  />
                </div>

                <div className="relative group">
                  <textarea 
                    placeholder="Describe your vision..." 
                    rows={4} 
                    className="w-full py-4 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-gray-700 resize-none"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-5 rounded-xl font-black text-xs tracking-[4px] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-red-900/20"
                  >
                    Initiate Project
                  </button>
                  <p className="text-center text-[9px] text-gray-600 mt-6 uppercase tracking-widest font-bold">
                    Average Response Time: <span className="text-white">1-4 Business Hours</span>
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}