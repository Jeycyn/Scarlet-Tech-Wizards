"use client";
import { useState, useEffect } from "react";

export default function CalculatorSection() {
  const [homePrice, setHomePrice] = useState(15000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(13.5);
  const [loanTerm, setLoanTerm] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const P = homePrice * (1 - downPayment / 100);
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthly = r === 0 ? P / n : P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(Math.round(monthly));
  };

  useEffect(() => {
    calculateMortgage();
  }, []);

  return (
    <section className="py-24 px-8 bg-blue-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6 text-center font-bold">Investment Calculator</h2>
        <p className="text-center text-white/70 mb-12">
          Estimate your monthly repayments for your dream home in Eldoret.
        </p>
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block mb-2 text-sm tracking-wide">HOME PRICE (KSH)</label>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full p-4 rounded-lg bg-white/10 border border-white/20 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm tracking-wide">DOWN PAYMENT (%)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full p-4 rounded-lg bg-white/10 border border-white/20 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm tracking-wide">INTEREST RATE (%)</label>
              <input
                type="number"
                value={interestRate}
                step={0.1}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-4 rounded-lg bg-white/10 border border-white/20 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm tracking-wide">LOAN TERM (YEARS)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-4 rounded-lg bg-white/10 border border-white/20 outline-none"
              />
            </div>
          </div>

          <div className="text-center border-t border-white/20 pt-8">
            <h3 className="uppercase text-sm tracking-widest text-white/70 mb-2">Estimated Monthly Payment</h3>
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-4">
              KSh {monthlyPayment.toLocaleString()}
            </div>
            <button
              onClick={calculateMortgage}
              className="w-full bg-yellow-700 py-3 rounded-full font-bold text-white"
            >
              UPDATE CALCULATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}