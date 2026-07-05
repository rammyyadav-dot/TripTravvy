import React from 'react';
import { useTravelData } from '@/context/TravelDataContext';

export const TabSwitcher = () => {
  const { selectedSeason, setSelectedSeason } = useTravelData();
  const seasons = ['all', 'Winter', 'Summer', 'Monsoon'];

  return (
    <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 px-4 scrollbar-none">
      <div className="bg-slate-100 p-1.5 rounded-xl flex gap-1.5 border border-slate-200/50">
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
              selectedSeason === season
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/40'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {season === 'all' ? 'All Seasons' : `${season} Escapes`}
          </button>
        ))}
      </div>
    </div>
  );
};
