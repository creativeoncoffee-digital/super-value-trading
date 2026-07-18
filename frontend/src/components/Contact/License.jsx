import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the compliance documents image
import documentsImg from '../../assets/img/documents.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function License() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Info Cards Staggered Reveal
      gsap.fromTo('.info-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: { trigger: '.info-section', start: 'top 85%' }
        }
      );

      // 2. Compliance Text Reveal
      gsap.fromTo('.comp-text',
        { opacity: 0, x: -30 },
        {
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: { trigger: '.compliance-section', start: 'top 80%' }
        }
      );

      // 3. Compliance Data Grid Items
      gsap.fromTo('.comp-data-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.comp-grid', start: 'top 85%' }
        }
      );

      // 4. Image Reveal with subtle scale
      gsap.fromTo('.comp-image-wrap',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          ease: 'power2.out',
          scrollTrigger: { trigger: '.compliance-section', start: 'top 80%' }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col">
      
      {/* --- SECTION 1: DARK INFO STRIP --- */}
      <section className="info-section bg-[#0f172a] pt-10 pb-10 px-8 relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Card 1: Office */}
          <div className="info-card group bg-[#1e293b] p-10 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-orange-500/10 cursor-default">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-orange-500 group-hover:w-10 transition-all duration-300"></span>
              <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest">Office</h4>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Office 1707, Damac XL Tower<br />
              Marasi Drive, Business Bay<br />
              Dubai, UAE
            </p>
          </div>

          {/* Card 2: Direct */}
          <div className="info-card group bg-[#1e293b] p-10 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-orange-500/10 cursor-default">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-orange-500 group-hover:w-10 transition-all duration-300"></span>
              <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest">Direct</h4>
            </div>
            <div className="flex flex-col gap-2">
              <a href="mailto:gosupervalue@outlook.com" className="text-slate-300 hover:text-white transition-colors text-sm">gosupervalue@outlook.com</a>
              <a href="tel:+971529607401" className="text-slate-300 hover:text-white transition-colors text-sm">+971 52 960 7401</a>
              <a href="tel:+97144250333" className="text-slate-300 hover:text-white transition-colors text-sm">+971 4 425 0333</a>
            </div>
          </div>

          {/* Card 3: Registration */}
          <div className="info-card group bg-[#1e293b] p-10 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-orange-500/10 cursor-default">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-orange-500 group-hover:w-10 transition-all duration-300"></span>
              <h4 className="text-orange-500 text-xs font-bold uppercase tracking-widest">Registration</h4>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm mb-2">
              Commercial License No.<br/>
              <span className="text-white font-semibold">822355</span>
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Dubai Chamber Membership No.<br/>
              <span className="text-white font-semibold">313811</span>
            </p>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: COMPLIANCE & REGULATORY --- */}
      <section className="compliance-section bg-white py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text & Grid */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <div className="comp-text flex items-center gap-4 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Compliance & Regulatory Standing
                </p>
              </div>
              <h2 className="comp-text text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Fully licensed and compliant
              </h2>
              <p className="comp-text text-slate-600 text-lg leading-relaxed">
                Super Value General Trading LLC maintains full compliance with all UAE regulatory requirements, including Dubai Department of Economy and Tourism (DET) regulations and active membership with Dubai Chamber of Commerce & Industry[cite: 3].
              </p>
            </div>

            {/* Sleek 2x2 Data Grid */}
            <div className="comp-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="comp-data-item bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-orange-200 transition-colors">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Commercial License No.</p>
                <p className="text-2xl font-bold text-slate-900">822355</p>
              </div>
              
              <div className="comp-data-item bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-orange-200 transition-colors">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Dubai Chamber No.</p>
                <p className="text-2xl font-bold text-slate-900">313811</p>
              </div>
              
              <div className="comp-data-item bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-orange-200 transition-colors">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">License Valid Until</p>
                <p className="text-lg font-bold text-slate-900">25 December 2026</p>
              </div>
              
              <div className="comp-data-item bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-orange-200 transition-colors">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Regulatory Authority</p>
                <p className="text-lg font-bold text-slate-900">Dubai DET</p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="comp-image-wrap relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={documentsImg} 
                alt="Legal and compliance documentation" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Decorative background element behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>

        </div>
      </section>

    </div>
  );
}