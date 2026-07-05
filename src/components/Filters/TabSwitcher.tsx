import React from 'react';
import { SeasonFilter, useTravelData } from '@/context/TravelDataContext';

const seasons: SeasonFilter[] = ['all', 'Winter', 'Summer', 'Monsoon'];

export const TabSwitcher = () => {
  const { selectedSeason, setSelectedSeason } = useTravelData();

  return (
    <div className="flex justify-center gap-2 overflow-x-auto px-1 pb-1 scrollbar-none">
      <div className="flex gap-1.5 rounded-xl border border-slate-200/70 bg-slate-100 p-1.5">
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`whitespace-nowrap rounded-lg px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              selectedSeason === season
                ? 'border border-slate-200/40 bg-white text-slate-900 shadow-sm'
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
