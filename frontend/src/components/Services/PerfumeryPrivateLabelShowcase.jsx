import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function PerfumeryPrivateLabelShowcase({ category = "perfumery" }) {
  const containerRef = useRef(null);
  
  // Pulling the privateLabelShowcase data (Value, Premium, Luxury)
  const data = productData[category]?.privateLabelShowcase;

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Intro header animation
      gsap.fromTo('.pl-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );

      // Alternating rows animation
      gsap.utils.toArray('.pl-row').forEach((row) => {
        gsap.fromTo(row, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 75%' } }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-24 md:py-32 overflow-hidden font-sans border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        {/* ========================================== */}
        {/* SECTION HEADER */}
        {/* ========================================== */}
        <div className="pl-header flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Private Label Tiers
            </h4>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1E3A] tracking-tight max-w-3xl leading-tight">
            One Category. <br />
            <span className="text-slate-400 font-light">Endless Brand Possibilities.</span>
          </h2>
        </div>

        {/* ========================================== */}
        {/* ALTERNATING GRID LAYOUT */}
        {/* ========================================== */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {data.map((item, index) => {
            // Logic to alternate the layout: Even indexes (0, 2) are Image Left. Odd indexes (1) are Image Right.
            const isImageLeft = index % 2 === 0;

            return (
              <div 
                key={item.id} 
                className={`pl-row flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}
              >
                
                {/* IMAGE HALF */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(7,19,38,0.08)] bg-slate-100 group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    />
                    {/* Subtle luxury gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>

                {/* TEXT CONTENT HALF */}
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
                  
                  {/* Category Label */}
                  <h4 className="text-orange-500 font-bold uppercase tracking-[0.15em] text-xs md:text-sm mb-3">
                    Positioning — {item.label}
                  </h4>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1E3A] tracking-tight mb-6 leading-[1.1]">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                    {item.desc}
                  </p>
                  
                  {/* Luxury Divider & CTA */}
                  <div className="w-full pt-6 border-t border-slate-200">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors group"
                    >
                      Explore {item.label} Direction 
                      <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Link>
                  </div>

                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}