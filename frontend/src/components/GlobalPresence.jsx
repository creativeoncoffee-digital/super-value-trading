import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your map image here (SVG or PNG with a dotted/transparent background)
import mapImg from '../assets/Home/globalPresence.svg'; 

gsap.registerPlugin(ScrollTrigger);

export default function GlobalPresence() {
  const sectionRef = useRef(null);
  const statsRefs = useRef([]);
  const [activeLocation, setActiveLocation] = useState(null);

  // Map Marker Data - Adjust 'top' and 'left' percentages based on your exact map image proportions
  const locations = [
    { id: 1, country: "Brazil", city: "Rio De Janeiro", top: "70%", left: "32%" },
    { id: 2, country: "UAE", city: "Dubai", top: "45%", left: "62%" },
    { id: 3, country: "India", city: "New Delhi", top: "42%", left: "70%" },
    { id: 4, country: "USA", city: "New York", top: "35%", left: "22%" },
    { id: 5, country: "China", city: "Shanghai", top: "38%", left: "80%" },
    { id: 6, country: "South Africa", city: "Cape Town", top: "80%", left: "55%" },
    { id: 7, country: "Germany", city: "Berlin", top: "28%", left: "52%" },
  ];

  // Stats Data
  const stats = [
    { id: 1, prefix: "+", target: 10, label: "AWARDS", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
    { id: 2, prefix: "+", target: 190, label: "CASE STUDIES", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: 3, prefix: "+", target: 2781, label: "CUSTOMERS", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { id: 4, prefix: "+", target: 9, label: "OFFICES", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }
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
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)', scrollTrigger: { trigger: '.map-container', start: 'top 60%' } }
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
              // Add commas to numbers over 999
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

        {/* Controls (Dropdown & Button) */}
        <div className="reveal-up flex flex-col sm:flex-row items-center gap-4  z-20 relative shadow-xl shadow-slate-200/50 rounded-lg bg-white p-2 border border-slate-100">
          <div className="relative flex items-center bg-white px-4 py-3 rounded-md w-full sm:w-64">
            <span className="mr-3 text-lg">🌍</span>
            <select className="bg-transparent text-slate-700 font-semibold w-full outline-none appearance-none cursor-pointer">
              <option>United Arab Emirates</option>
              <option>India</option>
              <option>Brazil</option>
              <option>United States</option>
            </select>
            <svg className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
            See Services
          </button>
        </div>

        {/* Map Container */}
        <div className="map-container map-anim relative w-full max-w-7xl my-10 aspect-[2/1] md:aspect-[2.5/1]">
          {/* Replace src with your actual map image */}
          <img 
            src={mapImg} 
            alt="Global Map" 
            className="w-full h-full object-contain opacity-40 select-none pointer-events-none"
          />

          {/* Map Markers */}
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className="marker-anim absolute group cursor-pointer"
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setActiveLocation(loc.id)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              {/* Outer Ripple Effect */}
              <div className="absolute -inset-2 bg-orange-500/30 rounded-full animate-ping opacity-75"></div>
              
              {/* Inner Dot */}
              <div className="relative w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] border-2 border-white transition-transform duration-300 group-hover:scale-125"></div>

              {/* Tooltip */}
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white rounded-lg shadow-2xl px-4 py-2 border border-slate-100 min-w-[120px] text-center transition-all duration-300 origin-bottom pointer-events-none ${activeLocation === loc.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <h4 className="text-orange-500 font-bold text-sm uppercase tracking-wider">{loc.country}</h4>
                <p className="text-slate-700 text-xs font-semibold whitespace-nowrap">{loc.city}</p>
                {/* Tooltip Triangle */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
              </div>
            </div>
          ))}
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