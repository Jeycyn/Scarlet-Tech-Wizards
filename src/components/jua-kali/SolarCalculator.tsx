"use client";

import React, { useState, useEffect } from 'react';

export default function SolarCalculator() {
  const [bill, setBill] = useState<number>(10000);
  const [systemSize, setSystemSize] = useState<number>(3);
  const [annualSavings, setAnnualSavings] = useState<number>(108000);

  // Re-calculate whenever bill or systemSize changes
  useEffect(() => {
    const savingsPercent = 0.90; 
    const calculated = bill * 12 * savingsPercent;
    setAnnualSavings(calculated);
  }, [bill]);

  return (
    <div className="max-w-[1000px] mx-auto -mt-[60px] bg-white p-10 rounded-xl shadow-2xl grid md:grid-cols-2 gap-10 relative z-10" data-aos="zoom-in">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Solar Savings Calculator</h3>
        <p className="text-sm text-slate-500 mb-8">Find out how much you save by switching to sustainable energy.</p>
        
        <div className="mb-6">
          <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Monthly KPLC Bill (KSh)</label>
          <input 
            type="number" 
            className="w-full p-3 border border-slate-200 rounded-lg text-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        
        <div className="mb-8">
          <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">System Size (kW)</label>
          <input 
            type="number" 
            className="w-full p-3 border border-slate-200 rounded-lg text-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
            value={systemSize}
            onChange={(e) => setSystemSize(Number(e.target.value))}
          />
        </div>

        <button className="w-full bg-[#facc15] text-[#1e293b] py-4 rounded-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-yellow-500/20">
          REQUEST INSTALLATION QUOTE
        </button>
      </div>

      <div className="bg-[#1e293b] text-white p-8 rounded-lg flex flex-col justify-center text-center">
        <p className="text-[10px] uppercase tracking-[3px] opacity-70 mb-2">Estimated Annual Savings</p>
        <h2 className="text-4xl md:text-5xl font-black text-[#facc15] my-4">
          KSh {annualSavings.toLocaleString()}
        </h2>
        <p className="text-sm opacity-60">Payback Period: ~2.4 Years</p>
      </div>
    </div>
  );
}
