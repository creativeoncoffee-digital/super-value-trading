import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function AutomotiveBrandFocus({ category = 'automobiles' }) {
  const containerRef = useRef(null);
  
  // Pull the specific editorial data we just created
  const data = productData[category]?.editorialShowcase;

  useEffect(() => {
    if (!data) return;

    let ctx = gsap.context(() => {
      // Intro Reveal
      gsap.fromTo('.aes-intro', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      // Rows Reveal
      gsap.utils.toArray('.aes-row').forEach((row) => {
        gsap.fromTo(row, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 75%' } }
        );
      });

      // Bottom Brands Reveal
      gsap.fromTo('.aes-brands', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.aes-brands', start: 'top 85%' } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-24 md:py-32 font-sans overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-24 lg:gap-32">
        
        {/* ========================================== */}
        {/* INTRO SECTION */}
        {/* ========================================== */}
        <div className="aes-intro flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1E3A] tracking-tight mb-6">
            {data.intro.title}
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            {data.intro.description}
          </p>
        </div>

        {/* ========================================== */}
        {/* ROW 01: Category 01 (Image LEFT, Content RIGHT) */}
        {/* ========================================== */}
        <div className="aes-row flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
            <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group absolute inset-0">
              <img 
                src={data.category01.image} 
                alt={data.category01.imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-orange-500 font-bold uppercase tracking-[0.15em] text-xs mb-3">
              {data.category01.label}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight mb-6">
              {data.category01.heading}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {data.category01.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Sub-Categories */}
              <div>
                <h4 className="text-[#0B1E3A] font-bold text-sm uppercase tracking-wider mb-3 border-b border-slate-200 pb-2">Sub-Categories</h4>
                <ul className="flex flex-col gap-2">
                  {data.category01.subCategories.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Brands */}
              <div>
                <h4 className="text-[#0B1E3A] font-bold text-sm uppercase tracking-wider mb-3 border-b border-slate-200 pb-2">Brands</h4>
                <div className="flex flex-wrap gap-2">
                  {data.category01.brands.map((brand, i) => (
                    <span key={i} className="px-4 py-1.5 bg-[#0B1E3A] text-white text-sm font-bold rounded-lg">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link to={data.category01.ctaHref} className="text-orange-500 font-bold hover:text-orange-600 transition-colors flex items-center gap-2 w-fit group">
              {data.category01.ctaLabel}
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>

        {/* ========================================== */}
        {/* ROW 02: Category 02 (Content LEFT, Image RIGHT) */}
        {/* ========================================== */}
        <div className="aes-row flex flex-col lg:flex-row-reverse items-stretch gap-12 lg:gap-20">
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
            <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group absolute inset-0">
              <img 
                src={data.category02.image} 
                alt={data.category02.imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-orange-500 font-bold uppercase tracking-[0.15em] text-xs mb-3">
              {data.category02.label}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight mb-6">
              {data.category02.heading}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {data.category02.description}
            </p>
            
            {/* Sub-Categories */}
            <div className="mb-10">
              <h4 className="text-[#0B1E3A] font-bold text-sm uppercase tracking-wider mb-3 border-b border-slate-200 pb-2">Sub-Categories</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.category02.subCategories.map((item, i) => (
                  <div key={i} className="text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* VISUALLY PROMINENT PRIVATE LABEL SECTION */}
            <div className="w-full bg-[#f8fafc] rounded-2xl p-6 md:p-8 border border-slate-200">
              <div className="mb-6">
                <h4 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2">Build Your Own Automotive Brand</h4>
                <h3 className="text-2xl font-bold text-[#0B1E3A] mb-3">{data.category02.privateLabel.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{data.category02.privateLabel.description}</p>
              </div>

              {/* 4 Capability Blocks */}
              <div className="grid grid-cols-2 gap-4">
                {data.category02.privateLabel.blocks.map((block, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[#0B1E3A] font-bold text-xs uppercase tracking-wider">{block.title}</span>
                    <span className="text-slate-500 text-sm">{block.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* BRAND & PRIVATE LABEL CAPABILITIES (Bottom Area) */}
        {/* ========================================== */}
        <div className="aes-brands mt-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1E3A] tracking-tight border-b-2 border-orange-500 inline-block pb-2">
              {data.brandSection.heading}
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Distributed Brands (Dark Block) */}
            <div className="w-full md:w-1/3 bg-[#0B1E3A] rounded-2xl p-8 flex flex-col justify-center text-center shadow-xl">
              <h3 className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-6">
                {data.brandSection.distributed.title}
              </h3>
              <div className="flex flex-col gap-4">
                {data.brandSection.distributed.brands.map((brand, i) => (
                  <span key={i} className="text-white text-2xl md:text-3xl font-extrabold tracking-widest opacity-90">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Private Label Categories (Light Block) */}
            <div className="w-full md:w-2/3 bg-white border border-slate-200 rounded-2xl p-8 shadow-xl flex flex-col justify-center">
              <h3 className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
                {data.brandSection.privateLabel.title}
              </h3>
              <p className="text-slate-600 text-base mb-6 whitespace-pre-line">
                {data.brandSection.privateLabel.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {data.brandSection.privateLabel.categories.map((cat, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg text-sm border border-slate-200">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}