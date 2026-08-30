import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    value: "80+",
    title: "Countries",
    subtitle: "Global Network",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
  },
  {
    value: "23+",
    title: "Years",
    subtitle: "Of Experience",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    value: "100+",
    title: "Global Clients",
    subtitle: "Served",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    value: "1000+",
    title: "Products",
    subtitle: "Sourced",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
  {
    value: "End-to-End",
    title: "Business Support",
    subtitle: "& Execution",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
  }
];

export default function AboutStats() {
  const sectionRef = useRef(null);
  
  // State for the auto-hover wave effect
  const [autoHoverIndex, setAutoHoverIndex] = useState(-1);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.stat-header-anim',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // Stats Staggered Reveal
      gsap.fromTo('.stat-item-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.stats-grid', start: 'top 85%' } }
      );

      // AUTO-HOVER WAVE LOGIC (Slowed Down)
      ScrollTrigger.create({
        trigger: '.stats-grid',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          setTimeout(() => {
            statsData.forEach((_, i) => {
              // Trigger hover ON (400ms delay between each card instead of 150ms)
              setTimeout(() => setAutoHoverIndex(i), i * 400);
              
              // Trigger hover OFF (stays hovered for 600ms so it's clearly visible)
              setTimeout(() => {
                setAutoHoverIndex(prev => prev === i ? -1 : prev);
              }, i * 400 + 600); 
            });
          }, 2000); // Wait for the fade-in animation to finish
        }
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-15 md:py-18 pb-5 font-sans border-t border-slate-100 overflow-hidden">
      
      {/* Subtle World Map / Network Background (Mimics the faint background in your image) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0B1E3A 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* ======================================================= */}
        {/* HEADER SECTION                                          */}
        {/* ======================================================= */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-14">
          <div className="stat-header-anim flex items-center gap-4 mb-3">
            <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              Why Partner With Us
            </h4>
          </div>

          <h2 className="stat-header-anim text-3xl md:text-5xl font-semibold text-[#0B1E3A] tracking-tight mb-6">
            Experience. Network. Results.
          </h2>

          <p className="stat-header-anim text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl">
            We combine deep market knowledge, global connections, and hands-on support to help your business grow internationally.
          </p>
        </div>

        {/* ======================================================= */}
        {/* 5-COLUMN STATS GRID                                     */}
        {/* ======================================================= */}
        <div className="stats-grid w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4">
          {statsData.map((stat, index) => {
            const isAutoHovered = autoHoverIndex === index;

            return (
              <div 
                key={index}
                className="stat-item-anim group flex flex-col items-center text-center px-4 lg:border-r border-slate-200 last:border-none"
              >
                
                {/* Icon Container with Hover Lift */}
                <div className={`w-16 h-16 rounded-2xl border border-slate-100 flex items-center justify-center mb-5 transition-all duration-500 ease-out
                  ${isAutoHovered 
                    ? '-translate-y-2 bg-orange-500 text-white shadow-[0_10px_20px_rgba(243,121,10,0.3)]' 
                    : 'bg-slate-50 text-[#0B1E3A] group-hover:-translate-y-2 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(243,121,10,0.3)]'}
                `}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={stat.icon}></path>
                  </svg>
                </div>

                {/* Massive Stat Value */}
                <h3 className={`text-2xl md:text-3xl font-semibold mb-2 transition-colors duration-300 tracking-tight
                  ${isAutoHovered ? 'text-orange-500' : 'text-[#0B1E3A] group-hover:text-orange-500'}
                `}>
                  {stat.value}
                </h3>

                {/* Subtitles */}
                <p className="text-[#0B1E3A] font-bold text-sm mb-0.5">
                  {stat.title}
                </p>
                <p className="text-slate-500 text-xs md:text-[13px]">
                  {stat.subtitle}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}