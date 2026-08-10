import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

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
          // FIX 1: Add a virtual scroll distance of 2500 pixels to make it normal speed
          end: '+=2500', 
          scrub: 1.5, // Set to 1.5 for a very smooth catching-up effect
          // FIX 2: Pin the section in place while the user scrolls the 2500px
          pin: true, 
          anticipatePin: 1,
        },
      });

      // ==========================================
      // INITIAL STATE (PHASE 0)
      // ==========================================
      gsap.set('.showcase-img-anim', { x: '25vw', y: '0vh', rotation: 5, rotationY: -15, transformPerspective: 1000 });
      gsap.set('.glow-anim', { x: '25vw', y: '0vh' });
      gsap.set('.text-1-anim', { opacity: 1, x: 0 });
      gsap.set('.text-2-anim', { opacity: 0, x: 50 });
      gsap.set('.text-3-anim', { opacity: 0, y: 50 });

      // ==========================================
      // SCROLL TIMELINE
      // ==========================================
      timeline
        // PHASE 1: Image moves LEFT, Text 1 fades out, Text 2 fades in
        .to('.text-1-anim', { opacity: 0, x: -50, duration: 1 }, 0)
        .to('.showcase-img-anim', { x: '-25vw', rotation: -5, rotationY: 15, duration: 2, ease: 'power1.inOut' }, 0)
        .to('.glow-anim', { x: '-25vw', duration: 2, ease: 'power1.inOut' }, 0)
        .to('.text-2-anim', { opacity: 1, x: 0, duration: 1 }, 1) 
        
        // Pause slightly to let the user read Text 2
        .to({}, { duration: 0.5 })

        // PHASE 2: Image moves TOP-CENTER, Text 2 fades out, Text 3 fades in
        .to('.text-2-anim', { opacity: 0, x: 50, duration: 1 }, 3.5)
        .to('.showcase-img-anim', { scale: 0.85, x: '0vw', y: '-22vh', rotation: 0, rotationY: 0, duration: 2, ease: 'power1.inOut' }, 3.5)
        .to('.glow-anim', { x: '0vw', scale: 1.5, duration: 2, ease: 'power1.inOut' }, 3.5)
        .to('.text-3-anim', { opacity: 1, y: 0, duration: 1 }, 4.5);

    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    // Kept exactly at h-[100vh] as requested
    <section ref={containerRef} className={`relative w-full h-[100vh] ${data.backgroundClass || 'bg-white'} font-sans`}>
      
      {/* FIX 3: Removed "sticky" since GSAP Pin handles it. Changed to relative w-full h-full */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        
        {/* Glow Effect Wrapper */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className={`glow-anim w-[40vw] h-[40vw] ${data.glowClass || 'bg-orange-500/10'} rounded-full blur-[120px]`}></div>
        </div>

        {/* Separated Tailwind Positioning from GSAP Animation for the Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[800px] flex justify-center">
          <div className="showcase-img-anim w-full flex justify-center">
            <img
              src={data.image}
              alt={data.imageAlt || 'Product showcase'}
              className="w-[50%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

        {/* Text 1: Left Panel */}
        <div className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] z-40 pointer-events-auto">
          <div className="text-1-anim flex flex-col items-start justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className={`w-8 h-[2px]  bg-orange-500`}></span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
                {data.panels?.left?.eyebrow}
              </h2>
            </div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed ml-12 mb-10">
              {data.panels?.left?.description}
            </p>
            <div className="ml-12">
              <Link
                to={data.panels?.left?.ctaHref || '/contact'}
                className={`inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1`}
              >
                {data.panels?.left?.ctaLabel || 'Inquiry Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Text 2: Right Panel */}
        <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] z-40 pointer-events-auto">
          <div className="text-2-anim flex flex-col items-start justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className={`w-8 h-[2px]  bg-orange-500`}></span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
                {data.panels?.right?.eyebrow}
              </h2>
            </div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed ml-12 mb-10">
              {data.panels?.right?.description}
            </p>
            <div className="ml-12">
              <Link
                to={data.panels?.right?.ctaHref || '/contact'}
                className={`inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1`}
              >
                {data.panels?.right?.ctaLabel || 'Inquiry Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Text 3: Bottom Center */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 max-w-xl z-40 pointer-events-none">
          <div className="text-3-anim text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] leading-tight mb-4 tracking-tight">
              {data.panels?.bottom?.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              {data.panels?.bottom?.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}