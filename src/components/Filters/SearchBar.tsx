'use client';

import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { useTravelData } from '@/context/TravelDataContext';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useTravelData();

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900 p-4 sm:p-5 rounded-xl shadow-2xl border border-white/10 -mt-14 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative flex items-center">
          <MapPin size={16} className="absolute left-3 text-amber-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bespoke destinations..."
            className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 rounded-lg pl-10 pr-4 py-3 text-xs tracking-wider uppercase focus:outline-none focus:border-amber-500 transition-all"
          />
        </div>

        <div className="relative flex items-center">
          <Calendar size={16} className="absolute left-3 text-amber-400" />
          <input
            type="date"
            className="w-full bg-slate-950 border border-slate-800 text-slate-400 rounded-lg pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-amber-500 transition-all"
          />
        </div>

        <button className="w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.99] text-slate-950 font-bold uppercase tracking-widest rounded-lg py-3 px-6 text-xs transition-all flex items-center justify-center gap-2 shadow-lg">
          <Search size={14} /> Initialize Scan
        </button>
      </div>
    </div>
  );
};
