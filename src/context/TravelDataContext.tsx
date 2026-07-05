'use client';

import React, { createContext, useContext, useState } from 'react';

export type Season = 'Winter' | 'Summer' | 'Monsoon';
export type SeasonFilter = 'all' | Season;

export interface Package {
  id: string;
  title: string;
  duration: number;
  pricing: {
    basePrice: number;
    currency: string;
    formatting: string;
  };
  image: string;
  category: 'international' | 'domestic' | 'spiritual';
  tags: string[];
  season: Season;
  inventory: {
    minSeatsLeft: number;
    totalCapacity: number;
  };
}

interface TravelDataContextProps {
  packages: Package[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedSeason: SeasonFilter;
  setSelectedSeason: (season: SeasonFilter) => void;
}

const TravelDataContext = createContext<TravelDataContextProps | undefined>(undefined);

export const TravelDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState<SeasonFilter>('all');

  const [packages] = useState<Package[]>([
    {
      id: 'bhutan-dom',
      title: 'Breathtaking Bhutan - Bespoke Regional Experience',
      duration: 6,
      pricing: { basePrice: 64000, currency: 'INR', formatting: '₹ 64,000' },
      image: 'https://images.unsplash.com/photo-1578593139811-292ee2531cd8?q=80&w=600&auto=format&fit=crop',
      category: 'domestic',
      tags: ['Boutique Luxury', 'Himalayan Valleys', 'Private Chauffeur'],
      season: 'Summer',
      inventory: { minSeatsLeft: 2, totalCapacity: 12 },
    },
    {
      id: 'bhutan-int',
      title: 'Breathtaking Bhutan - Ultra-Luxe International Access',
      duration: 7,
      pricing: { basePrice: 82000, currency: 'INR', formatting: '₹ 82,000' },
      image: 'https://images.unsplash.com/photo-1548259461-8255ef1c855a?q=80&w=600&auto=format&fit=crop',
      category: 'international',
      tags: ['Premium Charter', 'Cultural immersion', 'Aman Villas'],
      season: 'Winter',
      inventory: { minSeatsLeft: 5, totalCapacity: 8 },
    },
    {
      id: 'japan-splendors',
      title: 'Japan Splendors (Boutique Tokyo, Kyoto Ryokans, Osaka)',
      duration: 9,
      pricing: { basePrice: 274258, currency: 'INR', formatting: '₹ 2,74,258' },
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
      category: 'international',
      tags: ['First Class Bullet Train', 'Michelin Dining', 'Private Guide'],
      season: 'Winter',
      inventory: { minSeatsLeft: 1, totalCapacity: 6 },
    },
    {
      id: 'sea-premium',
      title: 'Premium Tailor-Made Thailand Malaysia Singapore Journey',
      duration: 11,
      pricing: { basePrice: 195720, currency: 'INR', formatting: '₹ 1,95,720' },
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=600&auto=format&fit=crop',
      category: 'international',
      tags: ['Multi-Country Loft', 'Yacht Escapes', 'Curated Leisure'],
      season: 'Summer',
      inventory: { minSeatsLeft: 3, totalCapacity: 10 },
    },
    {
      id: 'char-jyotirlinga',
      title: 'Gujarat And Madhya Pradesh - Premium Char Jyotirlinga Tour',
      duration: 8,
      pricing: { basePrice: 46600, currency: 'INR', formatting: '₹ 46,600' },
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop',
      category: 'spiritual',
      tags: ['VIP Darshan Pro', 'Luxury Logistics', 'Heritage Stay'],
      season: 'Monsoon',
      inventory: { minSeatsLeft: 3, totalCapacity: 15 },
    },
    {
      id: 'passionate-paris',
      title: 'Passionate Paris Private Atelier Escape',
      duration: 4,
      pricing: { basePrice: 81746, currency: 'INR', formatting: '₹ 81,746' },
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
      category: 'international',
      tags: ['Penthouse Views', 'Curated Arts', 'Elite Chauffeur'],
      season: 'Winter',
      inventory: { minSeatsLeft: 4, totalCapacity: 8 },
    },
    {
      id: 'bali-honeymoon',
      title: 'Wonderful Bali - Sanctuary Honeymoon Special',
      duration: 5,
      pricing: { basePrice: 65000, currency: 'INR', formatting: '₹ 65,000' },
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      category: 'international',
      tags: ['Infinity Pool Villas', 'Private Beach Dinner', 'Wellness Spa'],
      season: 'Monsoon',
      inventory: { minSeatsLeft: 2, totalCapacity: 6 },
    },
  ]);

  return (
    <TravelDataContext.Provider
      value={{
        packages,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedSeason,
        setSelectedSeason,
      }}
    >
      {children}
    </TravelDataContext.Provider>
  );
};

export const useTravelData = () => {
  const context = useContext(TravelDataContext);
  if (!context) throw new Error('useTravelData must be used within TravelDataProvider');
  return context;
};
