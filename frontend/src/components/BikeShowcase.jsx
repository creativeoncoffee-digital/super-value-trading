import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { productData } from '../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function BikeShowcase({ category = 'automobiles' }) {
  const containerRef = useRef(null);
  const data = productData[category]?.bikeShowcase;

  useEffect(() => {
    if (!data) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          // Virtual scroll distance paces the animation beautifully
          end: '+=2500',
          scrub: 1.2, // Smooth, cinematic scrub
          pin: true,  // Locks the 100vh section in place
          anticipatePin: 1
        },
      });

      // ==========================================
      // INITIAL STATE: Cinematic framing
      // ==========================================
      gsap.set('.bike-hero-img', { scale: 1.4, y: '10vh', opacity: 0 });
      gsap.set('.bike-bg-glow', { scale: 0.5, opacity: 0 });
      gsap.set('.bike-text-content', { opacity: 0, x: -60 });

      // ==========================================
      // SCROLL SEQUENCE
      // ==========================================
      tl
        // 1. Fade in the dramatic, scaled-up bike
        .to('.bike-hero-img', { opacity: 1, y: '0vh', duration: 1.5, ease: 'power2.out' })
        .to('.bike-bg-glow', { opacity: 0.6, scale: 1, duration: 1.5, ease: 'power2.out' }, "<")
        
        // Pause to let the user admire the product
        .to({}, { duration: 0.5 })
        
        // 2. Smoothly scale down, move to the right, and reveal text on the left
        .to('.bike-hero-img', { scale: 1, x: '20vw', duration: 2.5, ease: 'power3.inOut' })
        .to('.bike-bg-glow', { x: '20vw', scale: 0.8, duration: 2.5, ease: 'power3.inOut' }, "<")
        .to('.bike-text-content', { opacity: 1, x: 0, duration: 2, ease: 'power3.out' }, "-=1.5")
        
        // Pause to let the user read the text
        .to({}, { duration: 3 })
        
        // 3. Gracefully fade everything out as the user scrolls to the next section
        .to('.bike-hero-img', { opacity: 0, y: '-10vh', scale: 0.95, duration: 1.5, ease: 'power2.in' })
        .to('.bike-bg-glow', { opacity: 0, duration: 1.5 }, "<")
        .to('.bike-text-content', { opacity: 0, y: -30, duration: 1.5, ease: 'power2.in' }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className={`relative w-full h-screen ${data.backgroundClass || 'bg-[#0A101D]'} font-sans overflow-hidden`}>
      
      {/* Container locks to full screen height */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        
        {/* Ambient Background Styling */}
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-10">
          <div className="w-[1px] h-full bg-[linear-gradient(to_bottom,transparent_50%,#ffffff_50%)] bg-[length:100%_40px]"></div>
        </div>

        {/* Dynamic Glow Behind the Bike */}
        <div className={`bike-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] ${data.glowClass || 'bg-blue-500/20'} rounded-full blur-[120px] pointer-events-none`}></div>

        {/* ========================================== */}
        {/* LEFT PANEL: Text Content */}
        {/* ========================================== */}
        <div className="bike-text-content absolute left-[5%] md:left-[8%] top-1/2 -translate-y-1/2 w-[90%] md:w-[45%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          
          <div className="flex items-center gap-4 mb-6">
            <span className={`w-10 h-[2px] ${data.accentClass || 'bg-blue-500'}`}></span>
            <h4 className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] ${data.accentClass ? data.accentClass.replace('bg-', 'text-') : 'text-blue-500'}`}>
              Premium Mobility
            </h4>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
            {data.title}
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
            {data.description}
          </p>

          <Link
            to={data.ctaHref || '/contact'}
            className={`inline-flex items-center gap-3 ${data.ctaClass || 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-[clamp(0.8rem,1.2vw,1rem)] px-[clamp(1.5rem,2.5vw,2.5rem)] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1`}
          >
            {data.ctaLabel || 'Explore Solutions'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        {/* ========================================== */}
        {/* CENTER/RIGHT PANEL: Image */}
        {/* ========================================== */}
        {/* max-h-[80vh] ensures the bike never gets clipped at the top or bottom of the screen */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[800px] flex justify-center">
          <img
            src={data.image}
            alt={data.imageAlt || 'Vehicle showcase'}
            className="bike-hero-img w-[80%] md:w-[95%] max-h-[60vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>
    </section>
  );
}