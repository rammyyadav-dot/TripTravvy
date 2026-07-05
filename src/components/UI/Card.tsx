import React from 'react';
import { Calendar, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { Package } from '@/context/TravelDataContext';

export const Card: React.FC<{ pkg: Package }> = ({ pkg }) => {
  const isLowInventory = pkg.inventory.minSeatsLeft <= 3;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 flex items-center gap-1 rounded bg-slate-950 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-amber-400 shadow-sm ring-1 ring-amber-500/30">
          <Sparkles size={10} /> {pkg.category} Luxury
        </span>

        {isLowInventory && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-red-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            <AlertTriangle size={11} /> Only {pkg.inventory.minSeatsLeft} Left
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Calendar size={13} className="text-amber-500" />
          <span>{pkg.duration} Days Customized Itinerary</span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-amber-600">
          {pkg.title}
        </h3>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {pkg.tags.map((tag) => (
            <span key={tag} className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Bespoke Fare From</span>
            <span className="text-xl font-black text-slate-950">{pkg.pricing.formatting}</span>
          </div>
          <button
            className="rounded-lg bg-slate-950 p-2.5 text-amber-400 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-slate-950"
            aria-label={`View ${pkg.title}`}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};
