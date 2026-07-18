import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import pic from '../../assets/img/office-interior.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const nodeRef = useRef(null);
  const ringRef = useRef(null);

  // Refs for the running numbers
  const yearRef = useRef(null);
  const licenseRef = useRef(null);
  const chamberRef = useRef(null);
  const countriesRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Text Entrance
      gsap.fromTo('.hero-text',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // 2. Animated SVG Route Band
      const tlRoute = gsap.timeline({ delay: 0.5 });
      tlRoute.fromTo(pathRef.current,
        { strokeDasharray: 2000, strokeDashoffset: 2000 },
        { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }
      )
      .fromTo(nodeRef.current,
        { scale: 0, transformOrigin: 'center' },
        { scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=1.2'
      )
      .fromTo(ringRef.current,
        { scale: 0, opacity: 0, transformOrigin: 'center' },
        { scale: 1, opacity: 0.4, duration: 0.8, repeat: -1, yoyo: true },
        '-=0.8'
      );

      // 3. Our Company Section Reveal
      gsap.fromTo('.company-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.company-section',
            start: 'top 80%',
          }
        }
      );

      // 4. Stats Counter Animation
      const animateCount = (target, ref, duration = 2) => {
        gsap.fromTo(ref.current,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: duration,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: '.stats-section',
              start: 'top 85%',
              once: true
            }
          }
        );
      };

      animateCount(2018, yearRef, 1.5);
      animateCount(822355, licenseRef, 2.5);
      animateCount(313811, chamberRef, 2.5);
      animateCount(90, countriesRef, 1.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col">
      
      {/* 1. Dark Blue Hero Section */}
      <section className="bg-[#0B1E3A] text-white pt-24 pb-16 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="hero-text flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                About us
              </p>
            </div>
            <h1 className="hero-text text-5xl md:text-6xl font-bold leading-[1.15] mb-6">
              A Dubai trading house built for cross-border reach.
            </h1>
            <p className="hero-text text-slate-300 text-lg leading-relaxed max-w-2xl">
              Incorporated in the United Arab Emirates, Super Value General Trading LLC sources, distributes and trades high-demand commodities and consumer goods from the world's most strategic logistical hub.
            </p>
          </div>
        </div>

        {/* Seamless Route Band overlaying the bottom of the hero */}
        <div className="absolute -bottom-8 left-0 w-full h-[120px] opacity-60 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              ref={pathRef}
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="8 8" // Creates the dotted effect from the screenshot
              d="M0,60 Q360,100 720,60 T1440,60"
            />
            {/* The single central node from the screenshot */}
            <g transform="translate(720, 60)">
              <circle ref={ringRef} cx="0" cy="0" r="14" fill="transparent" stroke="#f97316" strokeWidth="1.5" />
              <circle ref={nodeRef} cx="0" cy="0" r="6" fill="#f97316" />
            </g>
          </svg>
        </div>
      </section>

      {/* 2. Our Company (White Section) */}
      <section className="company-section bg-white py-24 px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image - Fixed the squished aspect ratio with object-cover and a premium shadow */}
          <div className="w-full lg:w-1/2 company-reveal">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={pic} 
                alt="Super Value General Trading LLC office interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-black/5 rounded-xl"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 company-reveal">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                Our company
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Multi-sector trading, incorporated in Dubai.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Super Value General Trading LLC is a premier, multi-sector trading enterprise incorporated in Dubai, United Arab Emirates. Operating from the world's most strategic logistical hub, the company specialises in the sourcing, distribution and cross-border trade of high-demand commodities and consumer goods.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Super Value General Trading LLC ensures full compliance with UAE commercial regulations and international trade standards across every transaction, partnership and shipment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Dark Blue Stats Section */}
      <section className="stats-section bg-[#0f172a] py-16 px-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto  text-center grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div ref={yearRef} className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Incorporated in Dubai</div>
          </div>
          <div>
            <div ref={licenseRef} className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Commercial License No.</div>
          </div>
          <div>
            <div ref={chamberRef} className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Dubai Chamber Membership No.</div>
          </div>
          <div>
            <div ref={countriesRef} className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">0</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Countries reached</div>
          </div>
        </div>
      </section>

    </div>
  );
}