import React from 'react';

export default function HeroBadgeBar() {
  const badges = [
    {
      title: "Premium Quality",
      desc: "International Standards",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7l6-4 6 4m-6-4v14m0-14L3 7m12 0l6 4m-6-4v14m6-14l-6 4" />
        </svg>
      ) 
    },
    {
      title: "Safe & Reliable",
      desc: "Dermatologically Tested",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Global Reach",
      desc: "80+ Countries",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Better Tomorrow",
      desc: "Sustainable Growth",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ) 
    }
  ];

  return (
    <div className="w-full px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 py-6 px-4 md:px-8">
        
        {/* FIX: Changed mobile from a single vertical column to a 2x2 grid to save space */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-2 md:flex md:flex-row items-start md:items-center justify-between md:divide-x divide-slate-200">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-3 md:gap-4 py-2 md:py-0 px-2 md:px-6 w-full md:w-1/4 justify-center md:justify-start group text-center sm:text-left">
              
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1E3A] flex-shrink-0 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors duration-300">
                {badge.icon}
              </div>
              
              <div className="flex flex-col">
                <h4 className="text-[#0B1E3A] font-bold text-xs md:text-sm lg:text-base">
                  {badge.title}
                </h4>
                <p className="text-slate-400 text-[10px] md:text-xs lg:text-sm">
                  {badge.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}