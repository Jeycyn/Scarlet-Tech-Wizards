"use client";
import React, { useState, useEffect } from 'react';

export default function QuoteCalculator() {
  const [weight, setWeight] = useState<number>(5);
  const [distance, setDistance] = useState<number>(350);
  const [total, setTotal] = useState<string>("40,000");

  useEffect(() => {
    const baseFee = 5000;
    const ratePerKmTon = 20; // 20 KSh per km per ton
    const calculation = baseFee + (weight * distance * ratePerKmTon);
    setTotal(calculation.toLocaleString());
  }, [weight, distance]);

  return (
    <div className="bg-white/5 p-8 rounded-lg border border-slate-600">
      <div className="mb-6">
        <label className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400">Cargo Weight (Tons)</label>
        <input 
          type="number" 
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full bg-transparent border border-slate-600 p-3 mt-2 text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="mb-8">
        <label className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400">Distance (KM)</label>
        <input 
          type="number" 
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="w-full bg-transparent border border-slate-600 p-3 mt-2 text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="bg-orange-600 p-6 rounded text-center shadow-lg shadow-orange-900/20">
        <p className="text-[10px] font-black uppercase text-orange-100 mb-1">Estimated Shipping Cost</p>
        <h2 className="text-3xl font-black text-white">KSh {total}</h2>
      </div>
      
      <p className="text-[10px] text-slate-500 text-center mt-4 italic">
        *Estimate includes fuel surcharge and port levies.
      </p>
    </div>
  );
}