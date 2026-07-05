'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, User, Menu, X, Compass, Ship, Grid, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between border-b border-amber-500/10 bg-slate-950 px-4 py-2 text-xs text-slate-400 sm:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium tracking-wide">
            <Phone size={12} className="text-amber-500" /> Executive Concierge:{' '}
            <b className="text-amber-400">1800 209 3344</b>
          </span>
          <span className="hidden text-slate-800 md:inline">|</span>
          <span className="hidden text-[10px] uppercase tracking-wider md:inline">Boutique Operations Hub</span>
        </div>
        <button className="flex items-center gap-1 tracking-wide transition hover:text-amber-400">
          <User size={12} /> Club Member Portal
        </button>
      </div>

      <nav className="flex items-center justify-between border-b border-white/5 bg-slate-900/90 px-4 py-4 shadow-lg backdrop-blur-md sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-widest text-white">
          TRIP<span className="text-amber-500">TRAVVY</span>
          <Sparkles size={14} className="hidden animate-pulse text-amber-400 sm:inline" />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-slate-300 md:flex">
          <Link href="/" className="flex items-center gap-1.5 transition hover:text-amber-400">
            <Compass size={15} /> Escape Home
          </Link>
          <Link href="/packages" className="flex items-center gap-1.5 transition hover:text-amber-400">
            <Grid size={15} /> Bespoke Portfolios
          </Link>
          <Link href="/cruise" className="flex items-center gap-1.5 transition hover:text-amber-400">
            <Ship size={15} /> Marine Charters
          </Link>
        </div>

        <button className="hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-950 shadow-md transition-all hover:from-amber-600 hover:to-amber-700 active:scale-95 md:block">
          Design My Tour
        </button>

        <button
          onClick={() => setIsOpen((open) => !open)}
          className="text-white focus:outline-none md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-4 border-b border-slate-800 bg-slate-900 px-6 py-6 text-slate-200 shadow-xl md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="border-b border-slate-800 py-2 font-medium hover:text-amber-400">
            Escape Home
          </Link>
          <Link href="/packages" onClick={() => setIsOpen(false)} className="border-b border-slate-800 py-2 font-medium hover:text-amber-400">
            Bespoke Portfolios
          </Link>
          <Link href="/cruise" onClick={() => setIsOpen(false)} className="border-b border-slate-800 py-2 font-medium hover:text-amber-400">
            Marine Charters
          </Link>
          <button className="mt-2 w-full rounded-lg bg-amber-500 py-3 text-xs font-bold uppercase tracking-widest text-slate-950">
            Design My Tour
          </button>
        </div>
      )}
    </header>
  );
};
