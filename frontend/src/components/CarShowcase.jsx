import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { productData } from '../data/ProductData'; 

gsap.registerPlugin(ScrollTrigger);

export default function CarShowcase({ category = 'automobiles' }) {
  const containerRef = useRef(null);
  const data = productData[category]?.carShowcase;

  useEffect(() => {
    if (!data) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2000', // Slows the animation to a normal speed
          scrub: 1,
          pin: true,     // Locks the 100vh section in place during scroll
          anticipatePin: 1
        },
      });

      // Initial States
      gsap.set('.car-wrapper', { y: '40vh', opacity: 0, scale: 0.8 });
      gsap.set('.car-text-panel', { opacity: 0, x: -50 });

      // Smooth Timeline Sequence
      timeline
        .to('.car-wrapper', { y: '0vh', opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
        .to({}, { duration: 0.5 })
        .to('.car-wrapper', { x: '15vw', duration: 2, ease: 'power2.inOut' })
        .to('.car-text-panel', { opacity: 1, x: 0, duration: 2, ease: 'power2.out' }, "<")
        .to({}, { duration: 2.5 }) // Hold for reading
        .to('.car-text-panel', { opacity: 0, y: -30, duration: 1.5, ease: 'power2.in' })
        .to('.car-wrapper', { y: '-30vh', opacity: 0, scale: 0.9, duration: 1.5, ease: 'power2.in' }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    // Height strictly kept at 100vh
    <section ref={containerRef} className={`relative w-full h-[100vh] ${data.backgroundClass || 'bg-[#0A101D]'} font-sans overflow-hidden`}>
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] ${data.glowClass || 'bg-blue-500/10'} rounded-full blur-[150px] pointer-events-none`}></div>

        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-20">
          <div className="w-[2px] h-full bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)] bg-[length:100%_60px]"></div>
        </div>

        <div className="car-text-panel absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-[40%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className={`w-8 h-[2px] ${data.accentClass || 'bg-blue-500'}`}></span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {data.title}
            </h2>
          </div>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed ml-12 mb-10">
            {data.description}
          </p>
          <div className="ml-12">
            <Link
              to={data.ctaHref || '/contact'}
              className={`inline-flex items-center gap-3 ${data.ctaClass || 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30'} text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1`}
            >
              {data.ctaLabel || 'Explore Solutions'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* Separated GSAP animation wrapper and added max-h-[80vh] to fix the bottom cutoff */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[700px] flex justify-center">
          <div className="car-wrapper w-full flex justify-center">
            <img
              src={data.image}
              alt={data.imageAlt || 'Vehicle showcase'}
              className="w-[75%] md:w-[90%] max-h-[80vh] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}