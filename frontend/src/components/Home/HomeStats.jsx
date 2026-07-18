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
  const continentsRef = useRef(null);
  const sectorsRef = useRef(null);

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
            once: true // Ensures it only runs once
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

      // 3. Number Counter Animation (One time)
      const countUp = (target, ref) => {
        gsap.fromTo(ref.current, 
          { innerHTML: 0 }, 
          { 
            innerHTML: target, 
            duration: 2, 
            ease: 'power2.out',
            snap: { innerHTML: 1 }, // Snaps to whole numbers
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      };

      countUp(2018, yearRef);
      countUp(90, countriesRef);
      countUp(5, continentsRef);
      countUp(4, sectorsRef);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0B1E3A] pt-24 pb-16 px-8 text-white overflow-hidden">
      
      {/* Animated SVG Route Band at the top of the section */}
      <div className="absolute top-0 left-0 w-full h-[60px] opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path 
            ref={pathRef}
            fill="none" 
            stroke="#f97316" /* Orange-500 */
            strokeWidth="2"
            strokeDasharray="1500"
            d="M0,30 Q120,6 240,30 T480,30 T720,30 T960,30 T1200,30 T1440,30" 
          />
          {/* Nodes */}
          {[240, 720, 1200].map((cx, i) => (
            <g key={cx} ref={el => nodesRef.current[i] = el}>
              <circle cx={cx} cy="30" r="9" fill="transparent" stroke="#f97316" strokeWidth="1" opacity="0.5" />
              <circle cx={cx} cy="30" r="4" fill="#f97316" />
            </g>
          ))}
        </svg>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="stat-item">
          <div ref={yearRef} className="text-6xl font-bold text-orange-500 mb-2">0</div>
          <div className="text-sm text-slate-300 uppercase tracking-wide">Founded in Dubai</div>
        </div>
        <div className="stat-item">
          <div ref={countriesRef} className="text-6xl font-bold text-orange-500 mb-2">0</div>
          <div className="text-sm text-slate-300 uppercase tracking-wide">Countries served</div>
        </div>
        <div className="stat-item">
          <div ref={continentsRef} className="text-6xl font-bold text-orange-500 mb-2">0</div>
          <div className="text-sm text-slate-300 uppercase tracking-wide">Continents reached</div>
        </div>
        <div className="stat-item">
          <div ref={sectorsRef} className="text-6xl font-bold text-orange-500 mb-2">0</div>
          <div className="text-sm text-slate-300 uppercase tracking-wide">Core trading sectors</div>
        </div>
      </div>
    </section>
  );
}   