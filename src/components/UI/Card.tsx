import React from 'react';
import { Calendar, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { Package } from '@/context/TravelDataContext';

export const Card: React.FC<{ pkg: Package }> = ({ pkg }) => {
  const isLowInventory = pkg.inventory.minSeatsLeft <= 3;

  return (
    <div className="group bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Tier Badges */}
        <span className="absolute top-3 left-3 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded shadow-sm bg-slate-950 text-amber-400 border border-amber-500/30 flex items-center gap-1">
          <Sparkles size={10} /> {pkg.category} Luxury
        </span>

        {isLowInventory && (
          <span className="absolute bottom-3 right-3 bg-red-600 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md animate-pulse flex items-center gap-1">
            <AlertTriangle size={11} /> Only {pkg.inventory.minSeatsLeft} Private Enclaves Left
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
          <Calendar size={13} className="text-amber-500" />
          <span>{pkg.duration} Days Customized Itinerary</span>
        </div>

        <h3 className="font-bold text-slate-900 text-lg line-clamp-2 mb-3 group-hover:text-amber-600 transition-colors tracking-tight">
          {pkg.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {pkg.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-slate-50 text-slate-500 border border-slate-100 px-2 py-0.5 rounded font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-widest">Bespoke Fare From</span>
            <span className="text-xl font-black text-slate-950">{pkg.pricing.formatting}</span>
          </div>
          <button className="bg-slate-950 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-400 p-2.5 rounded-lg transition-all duration-300">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
