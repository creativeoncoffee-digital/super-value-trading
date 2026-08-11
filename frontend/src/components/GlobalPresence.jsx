import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your map image here (SVG or PNG with a dotted/transparent background)
import mapImg from '../assets/Home/globalPresence.svg'; 

gsap.registerPlugin(ScrollTrigger);

export default function GlobalPresence() {
  const sectionRef = useRef(null);
  const statsRefs = useRef([]);
  const [activeLocation, setActiveLocation] = useState("UAE");

  // =========================================================================
  // GLOBAL LOCATION DATA
  // To move a dot on your map, adjust the 'top' and 'left' percentages below.
  // =========================================================================
  const locations = [
    // --- Middle East & GCC ---
    { id: "UAE", country: "UAE", city: "Dubai", top: "45%", left: "62%" },
    { id: "Saudi Arabia", country: "Saudi Arabia", city: "Riyadh", top: "43%", left: "59%" },
    { id: "GCC", country: "GCC Region", city: "Multiple Hubs", top: "46%", left: "60%" },
    { id: "Iraq", country: "Iraq", city: "Baghdad", top: "38%", left: "58%" },
    
    // --- Africa ---
    { id: "Algeria", country: "Algeria", city: "Algiers", top: "40%", left: "46%" },
    { id: "Nigeria", country: "Nigeria", city: "Abuja", top: "55%", left: "48%" },
    { id: "Morocco", country: "Morocco", city: "Rabat", top: "38%", left: "43%" },
    { id: "Tunisia", country: "Tunisia", city: "Tunis", top: "37%", left: "48%" },
    { id: "Burkina Faso", country: "Burkina Faso", city: "Ouagadougou", top: "52%", left: "44%" },
    { id: "Ghana", country: "Ghana", city: "Accra", top: "56%", left: "45%" },
    { id: "Libya", country: "Libya", city: "Tripoli", top: "39%", left: "50%" },
    { id: "Angola", country: "Angola", city: "Luanda", top: "68%", left: "51%" },
    { id: "Uganda", country: "Uganda", city: "Kampala", top: "60%", left: "56%" },
    { id: "Ivory Coast", country: "Ivory Coast", city: "Yamoussoukro", top: "55%", left: "43%" },

    // --- Asia ---
    { id: "China", country: "China", city: "Shanghai", top: "38%", left: "80%" },
    { id: "Malaysia", country: "Malaysia", city: "Kuala Lumpur", top: "58%", left: "78%" },
    { id: "Vietnam", country: "Vietnam", city: "Hanoi", top: "52%", left: "79%" },
    { id: "Singapore", country: "Singapore", city: "Singapore", top: "60%", left: "79%" },
    { id: "Turkey", country: "Turkey", city: "Istanbul", top: "35%", left: "55%" },

    // --- Europe ---
    { id: "UK", country: "United Kingdom", city: "London", top: "25%", left: "45%" },
    { id: "Ireland", country: "Ireland", city: "Dublin", top: "24%", left: "43%" },
    { id: "Spain", country: "Spain", city: "Madrid", top: "34%", left: "44%" },
    { id: "Italy", country: "Italy", city: "Rome", top: "32%", left: "49%" },

    // --- Americas ---
    { id: "USA", country: "USA", city: "New York", top: "35%", left: "22%" },
    { id: "Canada", country: "Canada", city: "Toronto", top: "25%", left: "20%" },
    { id: "Mexico", country: "Mexico", city: "Mexico City", top: "45%", left: "15%" },
    { id: "Venezuela", country: "Venezuela", city: "Caracas", top: "55%", left: "25%" },
    { id: "Chile", country: "Chile", city: "Santiago", top: "80%", left: "23%" }
  ];

  // Alphabetize the list for the dropdown menu
  const sortedLocations = [...locations].sort((a, b) => a.country.localeCompare(b.country));

  // =========================================================================
  // UPDATED STATS DATA
  // =========================================================================
  const stats = [
    { id: 1, suffix: "+", target: 23, label: "YEARS EXPERIENCE", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: 2, suffix: "+", target: 80, label: "COUNTRIES SERVED", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: 3, suffix: "+", target: 2000, label: "PRODUCTS SUPPLIED", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { id: 4, suffix: "", target: 5, label: "CONTINENTS REACHED", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" }
  ];

  const addToStatsRefs = (el) => {
    if (el && !statsRefs.current.includes(el)) {
      statsRefs.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Reveal Header & Controls
      gsap.fromTo('.reveal-up',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // 2. Reveal Map
      gsap.fromTo('.map-anim',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: '.map-container', start: 'top 75%' } }
      );

      // 3. Pop-in Map Markers sequentially
      gsap.fromTo('.marker-anim',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(2)', scrollTrigger: { trigger: '.map-container', start: 'top 60%' } }
      );

      // 4. Reveal Stats Row
      gsap.fromTo('.stat-box',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.stats-row', start: 'top 85%' } }
      );

      // 5. Animate Numbers Counting Up
      statsRefs.current.forEach((el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        gsap.fromTo(el,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2.5,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: function () {
              // Automatically add commas to large numbers (e.g., 2,000)
              el.innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString('en-US');
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-20 px-8 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl">
          <h2 className="reveal-up text-3xl md:text-5xl font-bold text-[#0B1E3A] mb-4 tracking-tight">
            We're global to privilege you
          </h2>
          <p className="reveal-up text-slate-500 text-base leading-relaxed">
            Operating from the world's most strategic logistical hubs, ensuring seamless cross-border trade, compliance, and distribution worldwide.
          </p>
        </div>

        {/* Controls (Interactive Dropdown & Button) */}
        <div className="reveal-up flex flex-col sm:flex-row items-center gap-4 z-30 relative shadow-xl shadow-slate-200/50 rounded-lg bg-white p-2 border border-slate-100">
          <div className="relative flex items-center bg-white px-4 py-3 rounded-md w-full sm:w-64">
            <span className="mr-3 text-lg">🌍</span>
            
            {/* Dynamic Select mapping over your locations array */}
            <select 
              value={activeLocation || "UAE"}
              onChange={(e) => setActiveLocation(e.target.value)}
              className="bg-transparent text-slate-700 font-semibold w-full outline-none appearance-none cursor-pointer"
            >
              {sortedLocations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.country}
                </option>
              ))}
            </select>
            
            <svg className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <button className="brand-button brand-button-primary w-full sm:w-auto">
            See Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 12h15"></path></svg>
          </button>
        </div>

        {/* Map Container */}
        <div className="map-container map-anim relative w-full max-w-7xl my-10 aspect-[2/1] md:aspect-[2.5/1]">
          <img 
            src={mapImg} 
            alt="Global Map" 
            className="w-full h-full object-contain opacity-40 select-none pointer-events-none"
          />

          {/* Dynamic Map Markers */}
          {locations.map((loc) => {
            const isActive = activeLocation === loc.id;
            
            return (
              <div 
                key={loc.id}
                className="marker-anim absolute group cursor-pointer"
                style={{ 
                  top: loc.top, 
                  left: loc.left,
                  zIndex: isActive ? 50 : 10 
                }}
                onMouseEnter={() => setActiveLocation(loc.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                {/* Outer Ripple Effect - Highlights when active */}
                {isActive && (
                  <div className="absolute -inset-2 bg-orange-500/40 rounded-full animate-ping opacity-75 pointer-events-none"></div>
                )}
                
                {/* Inner Dot */}
                <div className={`relative rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] border-2 border-white transition-all duration-300 ${
                  isActive 
                  ? 'w-3 h-3 md:w-4 md:h-4 bg-orange-500 scale-125' 
                  : 'w-2 h-4 md:w-3 md:h-3 bg-orange-500 group-hover:scale-125'
                }`}></div>

                {/* Tooltip */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white rounded-lg shadow-2xl px-4 py-2 border border-slate-100 min-w-[120px] text-center transition-all duration-300 origin-bottom pointer-events-none ${
                  isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-2'
                }`}>
                  <h4 className="text-orange-500 font-bold text-sm uppercase tracking-wider">{loc.country}</h4>
                  <p className="text-slate-700 text-xs font-semibold whitespace-nowrap">{loc.city || "Trade Hub"}</p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Row */}
        <div className="stats-row w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-box flex flex-col items-center text-center group">
              {/* SVG Icon */}
              <div className="w-12 h-12 mb-4 text-orange-500 group-hover:-translate-y-1 transition-transform duration-300">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={stat.icon}></path>
                </svg>
              </div>
              
              {/* Number Counter */}
              <div className="flex items-baseline mb-1">
                {stat.prefix && <span className="text-3xl md:text-5xl font-bold text-[#0B1E3A]">{stat.prefix}</span>}
                <span 
                  ref={addToStatsRefs} 
                  data-target={stat.target} 
                  className="text-4xl md:text-5xl font-black text-[#0B1E3A] tracking-tighter"
                >
                  0
                </span>
                {/* Dynamically adds the + suffix in orange */}
                {stat.suffix && <span className="text-3xl md:text-4xl font-bold text-orange-500 ml-1">{stat.suffix}</span>}
              </div>
              
              {/* Label */}
              <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}