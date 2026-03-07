import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#064e3b] text-white py-20 px-6 text-center lg:text-left lg:flex items-center justify-between">
      <div className="max-w-3xl mx-auto lg:mx-0">
        <span className="bg-[#10b981]/20 text-[#10b981] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Community-Led Finance
        </span>
        <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
          Modernizing the <br /><span className="text-[#10b981]">Chama Experience.</span>
        </h1>
        <p className="mt-6 text-emerald-100/70 text-lg max-w-xl leading-relaxed">
          Automate contributions, simplify loan applications, and track your group's growth with transparent, real-time data.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#10b981] hover:bg-emerald-400 text-[#064e3b] px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
            Create a Group
          </button>
          <button className="border border-emerald-500 hover:bg-emerald-500/10 px-8 py-4 rounded-xl font-bold transition-all">
            Join via Invite
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-1/3">
         {/* Abstract UI Decoration */}
         <div className="relative p-8 border border-emerald-500/30 rounded-3xl bg-emerald-900/50 backdrop-blur-xl">
            <div className="h-4 w-24 bg-emerald-500/20 rounded mb-4" />
            <div className="h-10 w-48 bg-emerald-500/40 rounded mb-8" />
            <div className="flex gap-2">
               {[1,2,3,4].map(i => <div key={i} className="h-12 w-12 rounded-full bg-emerald-700" />)}
            </div>
         </div>
      </div>
    </section>
  );
}