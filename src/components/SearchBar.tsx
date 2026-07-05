import React from 'react';
import { Search } from 'lucide-react';
import { useTravelData } from '@/context/TravelDataContext';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useTravelData();

  return (
    <div className="w-full max-w-xl mx-auto mb-8 relative">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
        <Search size={18} />
      </div>
      <input
        type="text"
        placeholder="Search destinations, packages, or cruise styles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm transition-all duration-200 text-sm"
      />
    </div>
  );
};
