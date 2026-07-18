import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LeadershipHero() {
  const containerRef = useRef(null);
  
  // Refs for the SVG animation
  const pathRef = useRef(null);
  const nodesRef = useRef([]);
  const ringsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Text Entrance Animation
      gsap.fromTo('.hero-content',
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out' 
        }
      );

      // 2. SVG Route Line Animation
      const tl = gsap.timeline({ delay: 0.4 });
      
      // Draw the dotted line
      tl.fromTo(pathRef.current,
        { strokeDasharray: 2000, strokeDashoffset: 2000 },
        { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' }
      )
      // Pop the solid nodes in
      .fromTo(nodesRef.current,
        { scale: 0, transformOrigin: 'center' },
        { scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=1.5' // Start before the line finishes drawing
      )
      // Start the continuous pulsing rings
      .fromTo(ringsRef.current,
        { scale: 0.5, opacity: 0, transformOrigin: 'center' },
        { 
          scale: 1.2, 
          opacity: 0.5, 
          duration: 1.2, 
          stagger: 0.2, 
          repeat: -1, 
          yoyo: true, 
          ease: 'sine.inOut' 
        },
        '-=1'
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to attach refs to arrays
  const addToNodes = (el) => {
    if (el && !nodesRef.current.includes(el)) nodesRef.current.push(el);
  };
  const addToRings = (el) => {
    if (el && !ringsRef.current.includes(el)) ringsRef.current.push(el);
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#0f172a] pt-32 pb-24 px-8 overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          
          {/* Eyebrow with Orange Dash */}
          <div className="hero-content flex items-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Ownership & management
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="hero-content text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-8">
          The people behind Super Value.
          </h1>

          {/* Subtext */}
          <p className="hero-content text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
An equal ownership partnership, backed by a leadership team with decades of experience across FMCG, perfumery, cosmetics, food commodities and automotive trade.
          </p>

        </div>
      </div>

      {/* Animated SVG Route Band at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none opacity-80">
        <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          
          {/* The connecting path */}
          <path
            ref={pathRef}
            fill="none"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            d="M0,80 Q240,40 480,80 T960,80 T1440,80"
          />
          
          {/* Node 1 (Left) */}
          <g transform="translate(320, 71)">
            <circle ref={addToRings} cx="0" cy="0" r="12" fill="transparent" stroke="#f97316" strokeWidth="1" />
            <circle ref={addToNodes} cx="0" cy="0" r="4.5" fill="#f97316" />
          </g>

          {/* Node 2 (Center) */}
          <g transform="translate(720, 80)">
            <circle ref={addToRings} cx="0" cy="0" r="12" fill="transparent" stroke="#f97316" strokeWidth="1" />
            <circle ref={addToNodes} cx="0" cy="0" r="4.5" fill="#f97316" />
          </g>

          {/* Node 3 (Right) */}
          <g transform="translate(1120, 71)">
            <circle ref={addToRings} cx="0" cy="0" r="12" fill="transparent" stroke="#f97316" strokeWidth="1" />
            <circle ref={addToNodes} cx="0" cy="0" r="4.5" fill="#f97316" />
          </g>

        </svg>
      </div>

    </section>
  );
}   