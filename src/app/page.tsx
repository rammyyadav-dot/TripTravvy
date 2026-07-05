"use iron";
"use client";

import { useTravelData } from "@/context/TravelDataContext";
import { SearchBar } from "@/components/Filters/SearchBar";
import { TabSwitcher } from "@/components/Filters/TabSwitcher";
import { Card } from "@/components/UI/Card";
import { Compass } from "lucide-react";

export default function HomePage() {
  const { packages, searchQuery, selectedSeason } = useTravelData();

  // Filter matrix logic run on client context threads
  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSeason = selectedSeason === "all" || pkg.season === selectedSeason;
    return matchesSearch && matchesSeason;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex p-3 bg-amber-500/10 text-amber-600 rounded-full mb-4 border border-amber-500/20">
          <Compass size={24} className="animate-spin-slow" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 sm:mb-3">
          Bespoke Luxury Collections
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
          Filter through pristine private villas, exclusive seasonal escapes, and tailored itineraries curated specifically for global wanderers.
        </p>
      </div>

      {/* Core Filter Systems */}
      <SearchBar />
      <TabSwitcher />

      {/* Dynamic Render Grid */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-slate-200 rounded-2xl bg-white max-w-xl mx-auto">
          <p className="text-slate-400 font-medium text-sm">No luxury destinations match your current filter parameters.</p>
          <p className="text-xs text-slate-300 mt-1">Try modifying your search query or season switch options.</p>
        </div>
      )}
    </div>
  );
}
