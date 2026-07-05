'use client';

import { useTravelData } from '@/context/TravelDataContext';
import { SearchBar } from '@/components/Filters/SearchBar';
import { TabSwitcher } from '@/components/Filters/TabSwitcher';
import { Card } from '@/components/UI/Card';
import { Compass, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function HomePage() {
  const { packages, searchQuery, selectedSeason } = useTravelData();

  const filteredPackages = packages.filter((pkg) => {
    const normalizedSearch = searchQuery.toLowerCase();
    const matchesSearch =
      pkg.title.toLowerCase().includes(normalizedSearch) ||
      pkg.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));
    const matchesSeason = selectedSeason === 'all' || pkg.season === selectedSeason;

    return matchesSearch && matchesSeason;
  });

  const internationalPackages = packages.filter((pkg) => pkg.category === 'international').length;
  const lowInventoryCount = packages.filter((pkg) => pkg.inventory.minSeatsLeft <= 3).length;

  return (
    <div className="bg-slate-50">
      <section className="relative isolate overflow-hidden bg-slate-950 pt-36 text-white">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop"
          alt="Luxury resort coastline at sunset"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/60" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-amber-200">
              <Sparkles size={14} /> Private travel atelier
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Luxury journeys shaped around your rhythm.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Explore handpicked escapes, private charters, spiritual circuits, and boutique stays with fast concierge access and season-aware recommendations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#collections"
                className="rounded-lg bg-amber-500 px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-950 shadow-lg transition hover:bg-amber-400"
              >
                Explore collections
              </a>
              <a
                href="tel:18002093344"
                className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur transition hover:bg-white/15"
              >
                Call concierge
              </a>
            </div>
          </div>

          <div className="grid gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-sm backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-lg bg-slate-950/55 p-4">
              <Star className="mb-3 text-amber-300" size={18} />
              <p className="text-2xl font-black text-white">{packages.length}</p>
              <p className="text-xs font-medium text-slate-300">Curated escapes live</p>
            </div>
            <div className="rounded-lg bg-slate-950/55 p-4">
              <Compass className="mb-3 text-amber-300" size={18} />
              <p className="text-2xl font-black text-white">{internationalPackages}</p>
              <p className="text-xs font-medium text-slate-300">International itineraries</p>
            </div>
            <div className="rounded-lg bg-slate-950/55 p-4">
              <ShieldCheck className="mb-3 text-amber-300" size={18} />
              <p className="text-2xl font-black text-white">{lowInventoryCount}</p>
              <p className="text-xs font-medium text-slate-300">Limited-seat departures</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 p-3 text-amber-600">
            <Compass size={24} className="animate-spin-slow" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Bespoke Luxury Collections
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-slate-500 sm:text-base">
            Filter through private villas, exclusive seasonal escapes, and tailored itineraries curated for discerning travellers.
          </p>
        </div>

        <div className="mb-10 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <SearchBar />
          <TabSwitcher />
        </div>

        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
            <p className="text-sm font-medium text-slate-400">No luxury destinations match your current filters.</p>
            <p className="mt-1 text-xs text-slate-300">Try modifying your search query or season selection.</p>
          </div>
        )}
      </section>
    </div>
  );
}
