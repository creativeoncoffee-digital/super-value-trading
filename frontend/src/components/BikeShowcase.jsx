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
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      gsap.set('.bike-wrapper', { y: '100vh', x: '0vw' });
      gsap.set('.auto-text-panel', { opacity: 0, x: -50 });
      gsap.set('.bike-img', { scale: 0.9, filter: 'blur(4px)' });

      timeline.to('.bike-wrapper', { y: '0vh', ease: 'power3.out', duration: 2 }, 0)
        .to('.bike-img', { scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' }, 0.5)
        .to('.bike-wrapper', { x: '15vw', ease: 'power2.inOut', duration: 1.5 }, 2.5)
        .to('.auto-text-panel', { opacity: 1, x: 0, ease: 'power2.out', duration: 1.5 }, 2.5)
        .to({}, { duration: 1.5 })
        .to('.auto-text-panel', { opacity: 0, x: -50, duration: 1 }, 5.5)
        .to('.bike-wrapper', { y: '-120vh', ease: 'power3.in', duration: 2 }, 5.5)
        .to('.bike-img', { scale: 0.85, filter: 'blur(3px)', duration: 1.5, ease: 'power2.in' }, 6);
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className={`relative w-full h-[300vh] ${data.backgroundClass || 'bg-[#0A101D]'} font-sans`}>
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] ${data.glowClass || 'bg-blue-500/10'} rounded-full blur-[150px] pointer-events-none`}></div>

        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-20">
          <div className="w-[2px] h-full bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)] bg-[length:100%_60px]"></div>
        </div>

        <div className="auto-text-panel absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-[40%] flex flex-col items-start justify-center z-40 pointer-events-auto">
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

        <div className="bike-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[400px] flex justify-center">
          <img
            src={data.image}
            alt={data.imageAlt || 'Vehicle showcase'}
            className="bike-img w-[80%] md:w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </section>
  );
}