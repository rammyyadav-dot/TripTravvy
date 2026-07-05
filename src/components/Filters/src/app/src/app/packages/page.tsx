'use client';

import React, { useState } from 'react';
import { useTravelData } from '@/context/TravelDataContext';
import { Card } from '@/components/UI/Card';
import { SlidersHorizontal } from 'lucide-react';

export default function PackagesPage() {
  const { packages } = useTravelData();
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [maxBudget, setMaxBudget] = useState<number>(300000);

  const toggleCategory = (cat: string) => {
    setSelectedCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const directoryFiltered = packages.filter(pkg => {
    const matchesCat = selectedCats.length === 0 || selectedCats.includes(pkg.category);
    const matchesBudget = pkg.pricing.basePrice <= maxBudget;
    return matchesCat && matchesBudget;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-200">
        <SlidersHorizontal className="text-slate-950" size={20} />
        <h1 className="text-xl font-black tracking-widest text-slate-950 uppercase">Private Vault Catalogs</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <aside className="w-full lg:w-64 bg-white p-6 border border-slate-200 rounded-xl shrink-0 sticky top-28 shadow-sm">
          <h3 className="font-extrabold text-slate-950 text-xs mb-5 tracking-widest uppercase">Refine Parameters</h3>
          
          <div className="mb-6">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Enclave Tier</h4>
            <div className="space-y-3">
              {['domestic', 'international', 'spiritual'].map(cat => (
                <label key={cat} className="flex items-center gap-3 text-xs uppercase font-bold text-slate-600 cursor-pointer tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedCats.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="rounded text-amber-500 focus:ring-amber-500 w-4 h-4 border-slate-300"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Max Threshold</h4>
              <span className="text-xs font-bold text-amber-600">₹{maxBudget.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={40000}
              max={300000}
              step={10000}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
        </aside>

        <div className="flex-grow w-full">
          {directoryFiltered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {directoryFiltered.map(pkg => (
                <Card key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Zero Formats Match Matrix</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
