import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeStats() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const nodesRef = useRef([]);
  
  // Refs for the numbers
  const yearRef = useRef(null);
  const countriesRef = useRef(null);
  const productsRef = useRef(null);
  const continentsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Reveal the entire section
      gsap.fromTo('.stat-item', 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 85%',
            once: true 
          }
        }
      );

      // 2. Animate the SVG route line
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true
        }
      });

      tl.fromTo(pathRef.current, 
        { strokeDasharray: 1500, strokeDashoffset: 1500 },
        { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }
      )
      .fromTo(nodesRef.current,
        { scale: 0, transformOrigin: 'center', opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=1.5'
      );

      // 3. Number Counter Animation with comma formatting
      const countUp = (target, ref, format = false) => {
        gsap.fromTo(ref.current, 
          { innerHTML: 0 }, 
          { 
            innerHTML: target, 
            duration: 2.5, 
            ease: 'power2.out',
            snap: { innerHTML: 1 }, 
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true
            },
            onUpdate: function () {
              if (format) {
                ref.current.innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString('en-US');
              }
            }
          }
        );
      };

      // Passed the exact requested data
      countUp(23, yearRef);
      countUp(80, countriesRef);
      countUp(2000, productsRef, true); // true adds the comma (2,000)
      countUp(5, continentsRef);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0B1E3A] pt-24 pb-20 px-8 text-white overflow-hidden font-sans border-b-4 border-orange-500">
      
      {/* Animated SVG Route Band */}
      <div className="absolute top-0 left-0 w-full h-[60px] opacity-40 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path 
            ref={pathRef}
            fill="none" 
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray="1500"
            d="M0,30 Q120,6 240,30 T480,30 T720,30 T960,30 T1200,30 T1440,30" 
          />
          {[240, 720, 1200].map((cx, i) => (
            <g key={cx} ref={el => nodesRef.current[i] = el}>
              <circle cx={cx} cy="30" r="9" fill="transparent" stroke="#f97316" strokeWidth="1" opacity="0.5" />
              <circle cx={cx} cy="30" r="4" fill="#f97316" />
            </g>
          ))}
        </svg>
      </div>

      {/* Stats Grid with Icons and precise alignment */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/10">
        
        {/* Stat 1: Years */}
        <div className="stat-item flex flex-col items-center">
          <div className="w-12 h-12 mb-4 text-orange-500 bg-orange-500/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="flex items-baseline mb-1">
            <span ref={yearRef} className="text-5xl md:text-6xl font-bold text-white tracking-tight">0</span>
            <span className="text-4xl md:text-5xl font-bold text-orange-500 ml-1">+</span>
          </div>
          <div className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest mt-2">Years Experience</div>
        </div>

        {/* Stat 2: Countries */}
        <div className="stat-item flex flex-col items-center">
          <div className="w-12 h-12 mb-4 text-orange-500 bg-orange-500/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="flex items-baseline mb-1">
            <span ref={countriesRef} className="text-5xl md:text-6xl font-bold text-white tracking-tight">0</span>
            <span className="text-4xl md:text-5xl font-bold text-orange-500 ml-1">+</span>
          </div>
          <div className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest mt-2">Countries Served</div>
        </div>

        {/* Stat 3: Products */}
        <div className="stat-item flex flex-col items-center">
          <div className="w-12 h-12 mb-4 text-orange-500 bg-orange-500/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
          <div className="flex items-baseline mb-1">
            <span ref={productsRef} className="text-5xl md:text-6xl font-bold text-white tracking-tight">0</span>
            <span className="text-4xl md:text-5xl font-bold text-orange-500 ml-1">+</span>
          </div>
          <div className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest mt-2">Products Supplied</div>
        </div>

        {/* Stat 4: Continents */}
        <div className="stat-item flex flex-col items-center">
          <div className="w-12 h-12 mb-4 text-orange-500 bg-orange-500/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
          </div>
          <div className="flex items-baseline mb-1">
            <span ref={continentsRef} className="text-5xl md:text-6xl font-bold text-white tracking-tight">0</span>
          </div>
          <div className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest mt-2">Continents Reached</div>
        </div>

      </div>
    </section>
  );
}