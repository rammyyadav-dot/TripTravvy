'use client';

import React, { useState } from 'react';
import { useTravelData } from '@/context/TravelDataContext';
import { SearchBar } from '@/components/Filters/SearchBar';
import { TabSwitcher } from '@/components/Filters/TabSwitcher';
import { Card } from '@/components/UI/Card';
import { Sparkles, Download } from 'lucide-react';

export default function HomePage() {
  const { packages, selectedSeason, searchQuery } = useTravelData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZipping, setIsZipping] = useState(false);

  const carouselData = [
    { title: "The Luxury of Traveling Your Way", subtitle: "Private Van Tours for Families & Small Groups. Starting @ ₹ 49,000.00* Per Person" },
    { title: "Atelier Curated Expeditions", subtitle: "High-fidelity logistics mapping discrete elite routes across international boundaries." }
  ];

  const filtered = packages.filter(pkg => {
    return pkg.season === selectedSeason && pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Client-Side Structural Zip Export Compilation Generator Engine
  const triggerZipCompilationExport = async () => {
    setIsZipping(true);
    try {
      // Dynamic internal initialization of lazy-loaded compression packages
      const { default: JSZip } = await import('jszip');
      const { saveAs } = await import('file-saver');
      const zip = new JSZip();

      // Project Architecture Manifest Modeling Maps
      zip.file("README.md", `# Trip Travvy Architecture\nTailor-Made Boutique Luxury Tours framework structured on advanced corporate schemas.`);
      zip.file("package.json", JSON.stringify({ name: "trip-travvy-portal", version: "1.0.0", private: true, dependencies: { next: "latest", react: "latest", tailwindcss: "latest", lucide: "latest" } }, null, 2));
      
      const src = zip.folder("src");
      if (src) {
        src.file("context/TravelDataContext.tsx", `// Travel Data Layer State Engine Context Module Configuration`);
        src.file("components/UI/Navbar.tsx", `// Navigation View System Component`);
        src.file("components/UI/Card.tsx", `// Core Architectural Grid Card Component`);
        src.file("components/UI/Footer.tsx", `// Regulatory Protection Footer Grid`);
        src.file("app/page.tsx", `// Main Client-Side Grid Entry Router Component`);
      }

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "trip-travvy-architecture-source.zip");
    } catch (err) {
      console.error("Compilation error handling compression streaming output maps", err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="pb-20">
      {/* Banner System */}
      <div className="relative bg-slate-950 h-[520px] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center mix-blend-color-dodge" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md inline-flex items-center gap-1.5 mb-4 animate-bounce">
            <Sparkles size={12} /> Tailor-Made Boutique Travel
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl leading-[1.1] text-white">
            {carouselData[currentSlide].title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-light tracking-wide leading-relaxed">
            {carouselData[currentSlide].subtitle}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-lg transition shadow-xl">
              Reserve Portfolio
            </button>
            <button 
              onClick={triggerZipCompilationExport}
              disabled={isZipping}
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-xs tracking-widest uppercase px-6 py-4 rounded-lg transition flex items-center gap-2 backdrop-blur-sm disabled:opacity-50"
            >
              <Download size={14} /> {isZipping ? 'Compiling Archive...' : 'Download Code Bundle .ZIP'}
            </button>
          </div>
        </div>

        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
          {carouselData.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2.5 h-2.5 rounded-full ${currentSlide === idx ? 'bg-amber-400 scale-125' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>

      <SearchBar />

      {/* Grid Container */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-slate-950 tracking-tight uppercase">Seasonal Ateliers</h2>
          <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">Filtered dynamically through private metadata indexes.</p>
        </div>

        <TabSwitcher />

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(pkg => (
              <Card key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-slate-300 rounded-xl bg-white">
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider">No matching boutique architectures active inside this index.</p>
          </div>
        )}
      </section>
    </div>
  );
}
