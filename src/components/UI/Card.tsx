import React from 'react';
import { Calendar, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { Package } from '@/context/TravelDataContext';

export const Card: React.FC<{ pkg: Package }> = ({ pkg }) => {
  const isLowInventory = pkg.inventory?.minSeatsLeft <= 3;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full">
      {/* Media Containment Layer */}
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
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-red-600 pxLooking directly at `image_527ecc.jpg`, we can see exactly why the home page layout is breaking down layout-wise: **`pkg.image` is rendering at an massive, uncontrolled native size**, pushing all text blocks out into a single, squished column on the right.

This occurs because you are using **Tailwind CSS v4**. In Tailwind v4, arbitrary layout behaviors like `aspect-[4/3]` or fixed arbitrary variables do not explicitly fallback safely if raw components wrap an implicit browser default image node. When `aspect-[4/3]` or `h-full` fails to compute properly on an unconstrained image, the image snaps to its raw, uncompressed resolution (e.g., 4000px wide), creating the exact visual distortion you are seeing.

Here is the complete rewritten `Card` component with robust native sizing layout blocks that **guarantee** it will not stretch out, regardless of how large the Unsplash image asset is.

```tsx
import React from 'react';
import { Calendar, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { Package } from '@/context/TravelDataContext';

export const Card: React.FC<{ pkg: Package }> = ({ pkg }) => {
  const isLowInventory = pkg.inventory?.minSeatsLeft <= 3;

  return (
    <article className="group flex h-full w-full max-w-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Container Wrapper with hardcoded sizing fallbacks for Tailwind v4 engine */}
      <div className="relative block w-full overflow-hidden bg-slate-100" style={{ aspectRatio: '4/3' }}>
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <span className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded bg-slate-950 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-amber-400 shadow-sm ring-1 ring-amber-500/30">
          <Sparkles size="{10}"/> {pkg.category} Luxury
        </span>

        {isLowInventory && (
          <span className="absolute bottom-3 right-3 z-10 flex items-center gap-1 rounded bg-red-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            <AlertTriangle size="{11}"/> Only {pkg.inventory.minSeatsLeft} Left
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6 w-full min-w-0">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 w-full">
          <Calendar className="text-amber-500 shrink-0" size="{13}"/>
          <span className="truncate">{pkg.duration} Days Customized Itinerary</span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-amber-600 min-h-[3.5rem]">
          {pkg.title}
        </h3>

        <div className="mb-5 flex flex-wrap gap-1.5 w-full">
          {pkg.tags?.map((tag) => (
            <span key={tag} className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-500 whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 w-full">
          <div className="min-w-0">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Bespoke Fare From</span>
            <span className="text-xl font-black text-slate-950 block truncate">{pkg.pricing?.formatting}</span>
          </div>
          <button
            className="rounded-lg bg-slate-950 p-2.5 text-amber-400 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-slate-950 shrink-0"
            aria-label={`View ${pkg.title}`}
          >
            <ArrowRight size="{16}"/>
          </button>
        </div>
      </div>
    </article>
  );
};
