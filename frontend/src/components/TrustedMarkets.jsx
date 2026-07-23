import React from 'react';
import { productData } from '../data/ProductData';

export default function TrustedMarkets({ category = "personal-care" }) {
  const data = productData[category]?.trustedMarkets;

  if (!data) return null;

  return (
    <section className="w-full bg-white pt-34 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <div className="flex items-center justify-center w-full max-w-4xl mx-auto gap-4 md:gap-6">
          <div className="flex-1 h-[1px] bg-slate-200 flex justify-end"><div className="w-12 md:w-20 h-[2px] bg-orange-500"></div></div>
          <h3 className="text-[#0B1E3A] font-bold uppercase tracking-[0.2em] text-xs md:text-sm whitespace-nowrap">
            {data.title}
          </h3>
          <div className="flex-1 h-[1px] bg-slate-200 flex justify-start"><div className="w-12 md:w-20 h-[2px] bg-orange-500"></div></div>
        </div>

        <div className="w-full bg-[#f8fafc] rounded-2xl py-8 md:py-6 px-8 flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-4 border border-slate-100">
          {data.logos.map((logo) => (
            // BLACK AND WHITE EFFECT HAPPENS HERE
            <div 
              key={logo.id} 
              className="w-24 md:w-32 h-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}