import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your images here when ready
import nubiaImg from '../../assets/Products/Gallery/Nubia.png'; 
import santaluxeImg from '../../assets/Products/Gallery/Santaluxe.png';

gsap.registerPlugin(ScrollTrigger);

export default function OurBrands() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered reveal for each block in the row
      gsap.fromTo('.brand-block',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#f8fafc] py-13 md:py-16 px-4 md:px-8 font-sans overflow-hidden border-t border-slate-200">
      
      {/* 
        Grid Setup:
        Mobile: 1 column (stacks vertically)
        Tablet: 2 columns (Text / Image)
        Desktop: 4 columns (Text / Image / Text / Image) -> exactly one row
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full min-h-[450px] lg:min-h-[350px]">
        
        {/* ========================================= */}
        {/* BRAND 1: NUBIA TEXT                       */}
        {/* ========================================= */}
        <div className="brand-block flex flex-col justify-center p-5 md:p-8 bg-white border-r border-slate-100">
          
          <div className="flex items-center gap-3 md:-mt-10 md:mb-14 mb-10 items-center justify-center md:justify-start ">
            {/* <span className="w-8 h-[2px] bg-orange-500"></span> */}
            <h4 className="text-[#f3790a] font-bold uppercase tracking-[0.2em] text-[14px]">
              OUR BRANDS
            </h4>
          </div>
          
          <h2 className="text-4xl md:text-4xl font-semibold  text-[#0B1E3A] tracking-tight uppercase mb-2">
            NUBIA
          </h2>
          
          <h3 className="text-slate-500 font-medium tracking-wider text-[11px] md:text-xs uppercase mb-2">
            A WORLD OF RARE BEAUTY
          </h3>
          
          <p className="text-slate-600 text-sm leading-relaxed">
            A contemporary fragrance concept inspired by heritage, nature and the world of fine perfumery.
          </p>

        </div>

        {/* ========================================= */}
        {/* BRAND 1: NUBIA IMAGE                      */}
        {/* ========================================= */}
        <div className="brand-block relative w-full h-[300px] md:h-auto bg-orange-50/50">
          {/* Replace this div with your img tag when ready */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center border-r border-slate-100">
            <img src={nubiaImg} alt="Nubia" className="w-full h-full object-cover" />
            {/* <span className="text-slate-400 font-medium text-sm">Nubia Image Placeholder</span> */}
          </div>
        </div>

        {/* ========================================= */}
        {/* BRAND 2: SANTALUXE TEXT                   */}
        {/* ========================================= */}
        <div className="brand-block flex flex-col justify-center p-5 md:p-8 bg-white border-r border-slate-100">
          
          {/* Spacer to align with Nubia since Santaluxe doesn't have "OUR BRANDS" kicker in the image */}
          <div className="h-[22px] mb-4 hidden lg:block"></div>
          
          <h2 className="text-4xl md:text-4xl font-semibold text-[#0B1E3A] tracking-tight uppercase mb-2 mt-2 lg:mt-0">
            SANTALUXE
          </h2>
          
          <h3 className="text-slate-500 font-medium tracking-wider text-[11px] md:text-xs uppercase mb-2">
            TRADITION IN EVERY BREATH
          </h3>
          
          <p className="text-slate-600 text-sm leading-relaxed">
            A fragrance and bakhoor concept built around warmth, richness and modern Arabian character.
          </p>

        </div>

        {/* ========================================= */}
        {/* BRAND 2: SANTALUXE IMAGE                  */}
        {/* ========================================= */}
        <div className="brand-block relative w-full h-[300px] md:h-auto bg-blue-50/50">
          {/* Replace this div with your img tag when ready */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <img src={santaluxeImg} alt="Santaluxe" className="w-full h-full object-cover" />
            {/* <span className="text-slate-400 font-medium text-sm">Santaluxe Image Placeholder</span> */}
          </div>
        </div>

      </div>
    </section>
  );
}