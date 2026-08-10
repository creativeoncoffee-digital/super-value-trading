import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../data/ProductData'; // Ensure path is correct

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCTA({ category = "personal-care" }) {
  const containerRef = useRef(null);
  
  // Pull dynamic data based on the category
  const data = productData[category]?.cta;

  useEffect(() => {
    if (!data) return;
    
    let ctx = gsap.context(() => {
      // Text reveals staggered from the bottom
      gsap.fromTo('.cta-text-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
      
      // Image slides in smoothly from the right
      gsap.fromTo('.cta-img-anim', 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3, scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    // Background matches the soft, warm cream/off-white from your design
    <section ref={containerRef} className="w-full bg-gradient-to-r from-[#fefdfc] to-[#f6f2ee] overflow-hidden font-sans py-8">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT SIDE: Text & Buttons */}
        <div className="w-full md:w-1/2 py-12 md:py-20 z-10 flex flex-col items-start">
          
          <h4 className="cta-text-anim text-orange-500 font-bold text-xs md:text-sm tracking-[0.15em] uppercase mb-4">
            {data.eyebrow}
          </h4>
          
          <h2 className="cta-text-anim text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1E3A] leading-[1.2] mb-5 tracking-tight max-w-xl">
            {data.title}
          </h2>
          
          <p className="cta-text-anim text-slate-500 text-base md:text-lg leading-relaxed max-w-md mb-10">
            {data.description}
          </p>
          
          {/* Buttons matching the exact design */}
          <div className="cta-text-anim flex flex-wrap items-center gap-4">
            {/* Primary Orange Button with Right Arrow */}
            <Link 
              to={data.primaryBtnLink || '/contact'}
              className="group bg-[#ff7b1c] hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-orange-500/20 transition-all duration-300 flex items-center gap-2"
            >
              {data.primaryBtnText || 'Become a Partner'}
              <svg className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
            
            {/* Secondary Outline Button with Paper Airplane */}
            <Link 
              to={data.secondaryBtnLink || '/contact'}
              className="group bg-transparent border-[1.5px] border-slate-300 text-[#0B1E3A] hover:border-[#0B1E3A] hover:bg-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              {data.secondaryBtnText || 'Get in Touch'}
              <svg className="w-5 h-5 ml-1 text-slate-600 group-hover:text-[#0B1E3A] transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </Link>
          </div>
          
        </div>

        {/* RIGHT SIDE: Dynamic Category Image */}
        <div className="cta-img-anim w-full md:w-1/2 flex justify-end items-end self-stretch mt-3 md:mt-0 relative">
          <img 
            src={data.image} 
            alt="Partner with Super Value" 
            className="w-full h-auto max-h-[400px] md:max-h-[400px] object-contain object-right-bottom drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}