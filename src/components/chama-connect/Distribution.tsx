import React from 'react';

export default function Distribution() {
  const stats = [
    { label: 'Active Loans', value: 'KSh 1.2M', color: 'bg-emerald-500' },
    { label: 'Group Savings', value: 'KSh 4.5M', color: 'bg-blue-500' },
    { label: 'Emergency Fund', value: 'KSh 850K', color: 'bg-amber-500' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Transparent Treasury</h2>
        <p className="text-slate-500 mb-16">See exactly where your community's money is working.</p>
        
        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-10 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className={`w-3 h-3 rounded-full ${stat.color} mx-auto mb-4`} />
              <h4 className="text-slate-400 text-xs font-bold uppercase mb-2">{stat.label}</h4>
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}