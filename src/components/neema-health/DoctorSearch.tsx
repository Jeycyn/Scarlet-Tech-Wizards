"use client";
import React, { useState } from 'react';

export default function DoctorSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      alert(`Query Successful: Found 4 qualified ${query || 'specialists'} available in Eldoret.`);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 items-center border border-slate-100">
      <div className="flex-grow w-full">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Find a specialist</label>
        <input 
          type="text" 
          placeholder="e.g. Cardiologist, Pediatrician..." 
          className="w-full border-b-2 border-slate-100 py-2 outline-none focus:border-sky-500 transition-colors text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="md:w-1/3 w-full">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</label>
        <select className="w-full border-b-2 border-slate-100 py-2 outline-none bg-transparent text-lg">
          <option>Eldoret Central</option>
          <option>Annex / Elgon View</option>
          <option>Langas / Racecourse</option>
        </select>
      </div>
      <button 
        onClick={handleSearch}
        className="bg-sky-500 text-white px-10 py-4 rounded-full font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-200"
      >
        {isSearching ? 'SEARCHING...' : 'SEARCH'}
      </button>
    </div>
  );
}