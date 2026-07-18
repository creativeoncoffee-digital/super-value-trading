import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// 1. Import the background image explicitly
import heroBg from '../../assets/img/hero-skyline.jpg';

export default function HomeHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP staggered animation for text elements
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-[95vh] flex items-center bg-[#0f172a] overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Dubai skyline" 
          className="w-full h-full object-cover object-right opacity-30" 
        />
        {/* A subtle gradient to ensure text remains readable on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3A] via-[#0B1E3A]/80 to-transparent"></div>
      </div>

      {/* Hero Content aligned to the left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <div className="max-w-3xl">
          
          {/* Eyebrow with the exact orange dash */}
          <div className="hero-anim flex items-center gap-4 mb-6">
            {/* <span className="w-10 h-[2px] bg-orange-500"></span> */}
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-xs md:text-xs">
              Multi-Sector Trading — Dubai, UAE
            </p>
          </div>

          {/* Headline */}
          <h1 className="hero-anim text-5xl md:text-[64px] font-bold tracking-wide leading-[1.1] text-white mb-8">
            Sourcing the world's<br /> finest brands for <br />
            <span className="text-orange-500">global markets.</span>
          </h1>

          {/* Description paragraph */}
          <p className="hero-anim text-base  md:text-lg text-slate-300 mb-12 max-w-[1000px] leading-relaxed">
            Super Value General Trading LLC is a premier trading enterprise incorporated in Dubai, specialising in the sourcing, distribution and cross-border trade of high-demand commodities and consumer goods — delivered across 90 countries on five continents.
          </p>

          {/* Buttons */}
          <div className="hero-anim flex flex-wrap gap-4">
            <Link to="/business" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-3 px-8 rounded transition-colors">
              Explore our sectors
            </Link>
            <Link to="/contact" className="border border-slate-500 hover:border-white text-white font-semibold text-sm py-3 px-8 rounded transition-colors">
              Get in touch
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}