import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-auto border-t border-white/5">
      {/* Trust Gateway Banner */}
      <div className="bg-amber-500/10 border-y border-amber-500/20 py-4 px-6 sm:px-8 text-amber-200 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <ShieldCheck className="text-amber-400 shrink-0" size={18} />
          <p className="leading-relaxed tracking-wide">
            <strong className="text-amber-400 uppercase text-[10px] tracking-widest block sm:inline mr-1">Trip Travvy Security Gateway:</strong> 
            Please be aware that payments are strictly handled via secure application routers. Do not process transactions through unverified outbound source hooks[cite: 1].
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-xs sm:text-sm">
        <div>
          <h4 className="text-white font-extrabold tracking-widest text-sm uppercase mb-4">Trip Travvy Elite</h4>
          <p className="leading-relaxed text-slate-400 font-light">
            Architecting high-fidelity, customized boutique luxury travel ecosystems based on structural travel schemas[cite: 1].
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold tracking-wider text-xs uppercase mb-3">Regulatory Pillars</h4>
          <ul className="space-y-2 text-slate-500 font-medium">
            <li>Automated Encrypted Invoicing Infrastructure</li>
            <li>Bespoke Carrier Licensing Integration</li>
            <li>TCS Compliance Routing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold tracking-wider text-xs uppercase mb-3">Concierge Access Matrix</h4>
          <p className="leading-relaxed text-slate-500 font-medium">
            Corporate Operations Lounge, Mumbai, India.<br />
            Gateway Router Comms: 1800 209 3344
          </p>
        </div>
      </div>
      <div className="border-t border-slate-900 py-6 text-center text-[11px] tracking-wider text-slate-600 bg-black">
        © 2026 Trip Travvy Atelier Ecosystems. Engineered using Next.js Server Routing Architecture.
      </div>
    </footer>
  );
};
