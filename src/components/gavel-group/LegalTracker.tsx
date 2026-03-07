"use client";

import React from 'react';

interface LegalTrackerProps {
  clientName: string;
  caseRef: string;
  matter: string;
  currentStep: 0 | 1 | 2 | 3 | 4; // Ensures only valid steps are passed
  updateText: string;
}

const steps = ["Filing", "Discovery", "Mediation", "Trial", "Verdict"];

export default function LegalTracker({ 
  clientName, 
  caseRef, 
  matter, 
  currentStep, 
  updateText 
}: LegalTrackerProps) {
  
  const progressPercent = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl border-t-4 border-[#946b2d]" data-aos="zoom-in">
      <div className="flex flex-col md:flex-row justify-between border-b border-slate-200 pb-5 mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#1e293b]">Private Client Portal</h3>
          <p className="text-sm text-slate-500">
            Welcome back, <span className="font-bold">{clientName}</span>
          </p>
        </div>
        <div className="text-[#946b2d] font-bold tracking-wider mt-2 md:mt-0 uppercase">
          CASE REF: {caseRef}
        </div>
      </div>

      <h4 className="font-bold mb-4 text-[#1e293b]">Matter: {matter}</h4>

      {/* PROGRESS TRACKER */}
      <div className="relative flex justify-between items-center my-12">
        {/* Background Line */}
        <div className="absolute top-[15px] left-0 h-[2px] bg-slate-200 w-full z-0" />
        
        {/* Animated Gold Fill */}
        <div 
          className="absolute top-[15px] left-0 h-[2px] bg-[#946b2d] transition-all duration-1000 ease-in-out z-0" 
          style={{ width: `${progressPercent}%` }}
        />

        {steps.map((step, idx) => (
          <div key={step} className="relative z-10 text-center w-1/5">
            <div className={`w-[30px] h-[30px] rounded-full mx-auto mb-2 border-2 transition-colors duration-500 ${
              idx <= currentStep ? 'bg-[#946b2d] border-[#946b2d]' : 'bg-white border-slate-200'
            }`} />
            <span className={`text-[10px] font-bold uppercase tracking-tighter ${
              idx <= currentStep ? 'text-[#1e293b]' : 'text-slate-400'
            }`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 p-6 mb-8 text-[#334155] border-l-4 border-slate-300">
        <p className="text-sm leading-relaxed italic">{updateText}</p>
      </div>

      <button className="w-full md:w-auto bg-[#1e293b] text-white px-8 py-4 font-bold tracking-[2px] hover:bg-[#946b2d] transition-colors duration-300 uppercase text-xs">
        Secure Document Upload
      </button>
    </div>
  );
}