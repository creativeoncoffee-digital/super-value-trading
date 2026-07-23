import React from 'react';

export default function TrustedMarkets() {
  // Array of 6 placeholders. Swap the src with your background-removed logos.
  const logos = [
    { id: 1, name: "Silvermax", src: "/assets/Products/one.png" },
    { id: 2, name: "Gillette", src: "/assets/Products/two.png" },
    { id: 3, name: "Nivea", src: "/assets/Products/three.png" },
    { id: 4, name: "Dove", src: "/assets/Products/four.png" },
    { id: 5, name: "Colgate", src: "/assets/Products/five.png" },
    { id: 6, name: "Unilever", src: "/assets/Products/six.png" }
  ];

  return (
    // Added pt-20 to give space for the overlapping HeroBadgeBar above it
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Custom Header with Lines */}
        <div className="flex items-center justify-center w-full max-w-4xl mx-auto gap-4 md:gap-6">
          {/* Left Line Group */}
          <div className="flex-1 h-[1px] bg-slate-200 flex justify-end">
            <div className="w-12 md:w-20 h-[2px] bg-orange-500"></div>
          </div>
          
          {/* Header Text */}
          <h3 className="text-[#0B1E3A] font-bold uppercase tracking-[0.2em] text-xs md:text-sm whitespace-nowrap">
            Trusted By Global Markets
          </h3>
          
          {/* Right Line Group */}
          <div className="flex-1 h-[1px] bg-slate-200 flex justify-start">
            <div className="w-12 md:w-20 h-[2px] bg-orange-500"></div>
          </div>
        </div>

        {/* Gray Logo Container */}
        <div className="w-full bg-[#f8fafc] rounded-2xl py-8 md:py-10 px-8 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 border border-slate-100">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="w-28 md:w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {/* 
                Replace this placeholder text with your <img> tag when ready:
                <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
              */}
              <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}