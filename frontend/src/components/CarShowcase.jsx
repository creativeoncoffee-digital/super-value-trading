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
      let mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP ANIMATION
      // ==========================================
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=2500', 
            scrub: 1.2,
            pin: true,
            anticipatePin: 1
          },
        });

        gsap.set('.car-hero-img', { scale: 1.4, y: '10vh', x: '0vw', opacity: 0 });
        gsap.set('.car-bg-glow', { scale: 0.5, opacity: 0, x: '0vw' });
        gsap.set('.car-text-content', { opacity: 0, x: -60, yPercent: -50, y: 0 });

        tl.to('.car-hero-img', { opacity: 1, y: '0vh', duration: 1.5, ease: 'power2.out' })
          .to('.car-bg-glow', { opacity: 0.6, scale: 1, duration: 1.5, ease: 'power2.out' }, "<")
          .to({}, { duration: 0.5 })
          .to('.car-hero-img', { scale: 1, x: '20vw', duration: 2.5, ease: 'power3.inOut' })
          .to('.car-bg-glow', { x: '20vw', scale: 0.8, duration: 2.5, ease: 'power3.inOut' }, "<")
          .to('.car-text-content', { opacity: 1, x: 0, yPercent: -50, duration: 2, ease: 'power3.out' }, "-=1.5")
          .to({}, { duration: 3 })
          .to('.car-hero-img', { opacity: 0, y: '-10vh', scale: 0.95, duration: 1.5, ease: 'power2.in' })
          .to('.car-bg-glow', { opacity: 0, duration: 1.5 }, "<")
          .to('.car-text-content', { opacity: 0, yPercent: -70, duration: 1.5, ease: 'power2.in' }, "<");
      });

      // ==========================================
      // MOBILE ANIMATION: No Overlap Drive-Through
      // ==========================================
      mm.add("(max-width: 767px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=1500',
            scrub: 1,
            pin: true, 
            anticipatePin: 1
          },
        });

        // Initial State
        gsap.set('.car-hero-img', { y: '100vh', x: '0vw', opacity: 1, scale: 1, rotation: 0 });
        gsap.set('.car-bg-glow', { y: '100vh', x: '0vw', scale: 0.5, opacity: 0 });
        gsap.set('.car-text-content', { opacity: 0, y: 30, x: 0, yPercent: 0 });

        mobileTl
          // 1. Car drives in to upper-middle (-15vh)
          .to('.car-hero-img', { y: '-15vh', duration: 2, ease: 'power2.out' })
          .to('.car-bg-glow', { opacity: 0.6, scale: 1, y: '-15vh', duration: 2, ease: 'power2.out' }, "<")
          
          // 2. Text slides up from bottom
          .to('.car-text-content', { opacity: 1, y: 0, duration: 1 })
          
          // 3. Pause to read
          .to({}, { duration: 2.5 })
          
          // 4. Text fades out
          .to('.car-text-content', { opacity: 0, y: -20, duration: 1 })
          
          // 5. Car drives off through top
          .to('.car-hero-img', { y: '-100vh', duration: 2, ease: 'power2.in' })
          .to('.car-bg-glow', { y: '-100vh', opacity: 0, duration: 2, ease: 'power2.in' }, "<");
      });

    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] bg-[#050B14] font-sans overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-20 z-0">
          <div className="w-[2px] h-full bg-[linear-gradient(to_bottom,transparent_50%,#ffffff_50%)] bg-[length:100%_40px]"></div>
        </div>

        <div className={`car-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] ${data.glowClass || 'bg-blue-500/20'} rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-10`}></div>

        {/* VEHICLE IMAGE */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full max-w-[800px] flex justify-center">
          <img
            src={data.image}
            alt={data.imageAlt || 'Vehicle showcase'}
            className="car-hero-img w-[80%] md:w-[95%] max-h-[50vh] md:max-h-[70vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* TEXT CONTENT: Locked to bottom-[5%] on mobile, centered on desktop */}
        <div className="car-text-content absolute bottom-[5%] pb-6 md:pb-0 md:bottom-auto md:top-1/2 left-[5%] md:left-[8%] w-[90%] md:w-[45%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
            <span className={`w-8 md:w-10 h-[2px] ${data.accentClass || 'bg-blue-500'}`}></span>
            <h4 className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] ${data.accentClass ? data.accentClass.replace('bg-', 'text-') : 'text-blue-500'} drop-shadow-md`}>
              Commercial Fleet Supply
            </h4>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 md:mb-6 drop-shadow-lg">
            {data.title}
          </h2>

          <p className="text-slate-300 md:text-slate-400 text-base md:text-xl leading-relaxed mb-6 md:mb-10 max-w-[90%] md:max-w-lg font-medium md:font-light drop-shadow-md">
            {data.description}
          </p>

          <Link
            to={data.ctaHref || '/contact'}
            className={`inline-flex items-center gap-3 ${data.ctaClass || 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-[clamp(0.8rem,1.2vw,1rem)] px-[clamp(1.5rem,2.5vw,2.5rem)] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1`}
          >
            {data.ctaLabel || 'Request a Quote'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}