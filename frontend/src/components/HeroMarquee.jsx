export default function HeroMarquee({ items }) {
  // Default premium text items if none are passed via props
  const defaultItems = [
    "Global Distribution",
    "OEM Manufacturing",
    "Private Label Sourcing",
    "23+ Years Experience",
    "Premium Quality Standards",
    "80+ Countries Served",
    "End-to-End Logistics"
  ];

  const displayItems = items || defaultItems;

  // We duplicate the array multiple times to ensure a seamless infinite loop
  const marqueeTrack = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  return (
    // Rich navy background to perfectly blend the dark heroes into the white sections
    <div className="relative w-full bg-black/10 border-y border-white/5 py-5 md:py-3 border-b border-slate-100 overflow-hidden flex items-center font-sans">
      
      {/* Dynamic Keyframes for smooth infinite scrolling */}
      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infiniteScroll 40s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Dark gradient fade-outs on the edges for a cinematic look */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0B1E3A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0B1E3A] to-transparent z-10 pointer-events-none"></div> */}

      {/* The Moving Track */}
      <div className="flex w-max animate-infinite-scroll items-center cursor-default">
        {marqueeTrack.map((item, idx) => (
          <div key={idx} className="flex items-center">
            
            {/* The Text */}
            <span className="text-black hover:text-black transition-colors duration-300 font-semibold text-[13px] md:text-sm uppercase tracking-[0.15em] whitespace-nowrap">
              {item}
            </span>
            
            {/* The Separator (Orange 4-Point Star/Diamond) */}
            <span className="mx-8 md:mx-12 text-orange-500">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </span>
            
          </div>
        ))}
      </div>

    </div>
  );
}