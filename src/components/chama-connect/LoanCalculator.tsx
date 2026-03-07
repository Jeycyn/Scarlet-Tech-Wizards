"use client";
import React, { useState, useEffect } from 'react';

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [period, setPeriod] = useState(3);
  const [repayment, setRepayment] = useState(0);

  useEffect(() => {
    const interest = 0.05; // 5% Chama rate
    const total = amount + (amount * interest * period);
    setRepayment(Math.round(total / period));
  }, [amount, period]);

  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Instant Loan Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Loan Amount (KSh)</label>
              <input 
                type="range" min="1000" max="100000" step="1000"
                value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <p className="mt-2 text-xl font-black text-slate-800">KSh {amount.toLocaleString()}</p>
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Repayment Period (Months)</label>
              <select 
                value={period} onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-full p-3 bg-slate-100 rounded-lg outline-none border-none font-bold"
              >
                <option value={1}>1 Month</option>
                <option value={3}>3 Months</option>
                <option value={6}>6 Months</option>
              </select>
            </div>
          </div>

          <div className="bg-[#064e3b] p-8 rounded-2xl text-white text-center flex flex-col justify-center">
            <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-2">Monthly Installment</p>
            <h3 className="text-4xl font-black">KSh {repayment.toLocaleString()}</h3>
            <p className="text-emerald-100/50 text-[10px] mt-4">Calculated at a flat 5% community interest rate.</p>
            <button className="mt-8 bg-[#10b981] text-[#064e3b] py-3 rounded-xl font-bold hover:bg-emerald-400 transition-colors">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}