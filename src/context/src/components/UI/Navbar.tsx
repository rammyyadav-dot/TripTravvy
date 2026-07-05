'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, User, Menu, X, Compass, Ship, Grid, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Luxury Concierge Utility Bar */}
      <div className="bg-slate-950 text-slate-400 text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-gold/10">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium tracking-wide">
            <Phone size={12} className="text-amber-500" /> Executive Concierge: <b className="text-amber-400">1800 209 3344</b>
          </span>
          <span className="hidden md:inline text-slate-800">|</span>
          <span className="hidden md:inline tracking-wider uppercase text-[10px]">Boutique Operations Hub</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-amber-400 transition tracking-wide">
            <User size={12} /> Club Member Portal
          </button>
        </div>
      </div>

      {/* Glassmorphic Brand Nav Strip */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/5 px-4 sm:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-widest text-white">
          TRIP<span className="text-amber-500">TRAVVY</span>
          <Sparkles size={14} className="text-amber-400 animate-pulse hidden sm:inline" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide text-slate-300">
          <Link href="/" className="hover:text-amber-400 transition flex items-center gap-1.5"><Compass size={15}/> Escape Home</Link>
          <Link href="/packages" className="hover:text-amber-400 transition flex items-center gap-1.5"><Grid size={15}/> Bespoke Portfolios</Link>
          <Link href="/cruise" className="hover:text-amber-400 transition flex items-center gap-1.5"><Ship size={15}/> Marine Charters</Link>
        </div>

        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:scale-95 text-slate-950 px-6 py-2.5 rounded-lg font-bold text-xs tracking-widest uppercase shadow-md transition-all">
            Design My Tour
          </button>
        </div>

        {/* Mobile Controller */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl px-6 py-6 flex flex-col gap-4 animate-fadeIn text-slate-200">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 font-medium border-b border-slate-800 hover:text-amber-400">Escape Home</Link>
          <Link href="/packages" onClick={() => setIsOpen(false)} className="py-2 font-medium border-b border-slate-800 hover:text-amber-400">Bespoke Portfolios</Link>
          <Link href="/cruise" onClick={() => setIsOpen(false)} className="py-2 font-medium border-b border-slate-800 hover:text-amber-400">Marine Charters</Link>
          <button className="bg-amber-500 text-slate-950 w-full py-3 rounded-lg font-bold text-xs tracking-widest uppercase mt-2">
            Design My Tour
          </button>
        </div>
      )}
    </header>
  );
};
