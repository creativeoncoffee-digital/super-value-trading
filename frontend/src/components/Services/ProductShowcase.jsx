import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData'; // Ensure path is correct

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase({ category = 'personal-care' }) {
  const containerRef = useRef(null);
  const data = productData[category]?.productShowcase;

  useEffect(() => {
    if (!data) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      gsap.set('.text-1', { opacity: 0, x: -50 });
      gsap.set('.text-2', { opacity: 0, x: 50 });
      gsap.set('.text-3', { opacity: 0, y: 50 });
      gsap.set('.showcase-img', { transformPerspective: 1000 });

      timeline.to('.showcase-img', { scale: 0.9, x: '25vw', y: '5vh', rotation: 5, rotationY: 15, duration: 1 }, 0)
        .to('.glow-effect', { x: '25vw', duration: 1 }, 0)
        .to('.text-1', { opacity: 1, x: 0, duration: 1 }, 0)
        
        .to('.text-1', { opacity: 0, x: -50, duration: 1 }, 1.5)
        .to('.showcase-img', { scale: 0.95, x: '-25vw', y: '-5vh', rotation: -5, rotationY: -15, duration: 1.5 }, 1.5)
        .to('.glow-effect', { x: '-25vw', duration: 1.5 }, 1.5)
        .to('.text-2', { opacity: 1, x: 0, duration: 1 }, 2)
        
        .to('.text-2', { opacity: 0, x: 50, duration: 1 }, 3.5)
        // FIX: Changed y from '-10vh' to '-24vh' and scale to 0.9 so the tire clears the bottom text
        .to('.showcase-img', { scale: 0.9, x: '0vw', y: '-24vh', rotation: 0, rotationY: 0, duration: 1.5 }, 3.5)
        .to('.glow-effect', { x: '0vw', scale: 1.5, duration: 1.5 }, 3.5)
        .to('.text-3', { opacity: 1, y: 0, duration: 1 }, 4);
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className={`relative w-full h-[300vh] ${data.backgroundClass || 'bg-white'} font-sans`}>
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        <div className={`glow-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] ${data.glowClass || 'bg-orange-500/10'} rounded-full blur-[120px] pointer-events-none`}></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[800px] flex justify-center">
          <img
            src={data.image}
            alt={data.imageAlt || 'Product showcase'}
            className="showcase-img w-[50%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          />
        </div>

        <div className="text-1 absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          <div className="about-text flex items-center gap-4 mb-4">
            <span className={`w-8 h-[2px] ${data.accentClass || 'bg-orange-500'}`}></span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
              {data.panels?.left?.eyebrow}
            </h2>
          </div>
          <p className="about-text text-slate-600 text-lg md:text-xl leading-relaxed ml-12 mb-10">
            {data.panels?.left?.description}
          </p>
          <div className="about-text">
            <Link
              to={data.panels?.left?.ctaHref || '/contact'}
              className={`inline-flex items-center ml-12 gap-3 ${data.ctaClass || 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30'} text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1`}
            >
              {data.panels?.left?.ctaLabel || 'Inquiry Now'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        <div className="text-2 absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] flex flex-col items-start justify-center z-40 pointer-events-auto">
          <div className="about-text flex items-center gap-4 mb-4">
            <span className={`w-8 h-[2px] ${data.accentClass || 'bg-orange-500'}`}></span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
              {data.panels?.right?.eyebrow}
            </h2>
          </div>
          <p className="about-text text-slate-600 text-lg md:text-xl leading-relaxed ml-12 mb-10">
            {data.panels?.right?.description}
          </p>
          <div className="about-text">
            <Link
              to={data.panels?.right?.ctaHref || '/contact'}
              className={`inline-flex items-center ml-12 gap-3 ${data.ctaClass || 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30'} text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1`}
            >
              {data.panels?.right?.ctaLabel || 'Inquiry Now'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        <div className="text-3 absolute bottom-[10%] left-1/2 -translate-x-1/2 max-w-xl z-40 pointer-events-none text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] leading-tight mb-4 tracking-tight">
            {data.panels?.bottom?.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            {data.panels?.bottom?.description}
          </p>
        </div>
      </div>
    </section>
  );
}