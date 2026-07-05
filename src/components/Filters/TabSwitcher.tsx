'use client';

import React from 'react';
import { useTravelData } from '@/context/TravelDataContext';
import { Snowflake, Sun, CloudRain } from 'lucide-react';

export const TabSwitcher = () => {
  const { selectedSeason, setSelectedSeason } = useTravelData();
  const seasons: ('Winter' | 'Summer' | 'Monsoon')[] = ['Winter', 'Summer', 'Monsoon'];

  return (
    <div className="flex justify-center mb-10">
      <div className="flex space-x-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs uppercase font-extrabold tracking-widest transition-all ${
              selectedSeason === season
                ? 'bg-slate-950 text-amber-400 shadow-md'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {season === 'Winter' && <Snowflake size={13} />}
            {season === 'Summer' && <Sun size={13} />}
            {season === 'Monsoon' && <CloudRain size={13} />}
            {season} Collection
          </button>
        ))}
      </div>
    </div>
  );
};
