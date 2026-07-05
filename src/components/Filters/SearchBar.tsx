import React, { useState, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { useTravelData } from '@/context/TravelDataContext';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useTravelData();
  
  // 1. Local state handles instant text updates so typing never lags
  const [localValue, setLocalValue] = useState(searchQuery);
  const [isSearching, setIsSearching] = useState(false);

  // 2. Debounce effect: Wait 300ms after the user stops typing before updating global state
  useEffect(() => {
    if (localValue !== searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setSearchQuery(localValue);
        setIsSearching(false);
      }, 300); // 300ms is the sweet spot for human typing pause

      return () => clearTimeout(timer);
    }
  }, [localValue, setSearchQuery, searchQuery]);

  // Sync local state if global state changes externally (like clicking a popular tag)
  useEffect(() => {
    setLocalValue(searchQuery);
  }, [searchQuery]);

  const handleClear = () => {
    setLocalValue('');
    setSearchQuery('');
  };

  return (
    <div className="w-full max-w-xl mx-auto mb-8 relative group">
      {/* Search Icon or Loading Spinner */}
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
        {isSearching ? (
          <Loader2 size={18} className="animate-spin text-amber-500" />
        ) : (
          <Search size={18} className="group-focus-within:text-amber-500 transition-colors" />
        )}
      </div>

      <input
        type="text"
        placeholder="Search destinations, packages, or cruise styles..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm transition-all duration-200 text-sm"
      />

      {/* Premium Clear Button: Appears only when there's text inside */}
      {localValue && (
        <button
          onClick={handleClear}
          type="button"
          className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
