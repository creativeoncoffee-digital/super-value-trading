import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function AestheticShowcase({ category = 'personal-care' }) {
  const containerRef = useRef(null);
  const data = productData[category]?.aestheticShowcase;

  useEffect(() => {
    if (!data) return;

    let ctx = gsap.context(() => {
      // Headline Animation
      gsap.fromTo('.aes-header-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      // Staggered Image Reveal (Simulating a masonry drop-in)
      gsap.fromTo('.aes-img-anim', 
        { opacity: 0, y: 50, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
      );

      // Stats Banner Slide-up
      gsap.fromTo('.aes-banner-anim', 
        { opacity: 0, y: 60 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.aes-banner-trigger', start: 'top 90%' } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-[#faf9f8] py-24 md:py-32 font-sans overflow-hidden brand-section">
      
      {/* 
        Full-width Container 
        Uses a highly customized 4-column grid on desktop to mimic the editorial layout 
      */}
      <div className="max-w-[1600px] mx-auto px-[clamp(1rem,3vw,2rem)]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-auto">

          {/* ========================================== */}
          {/* HEADER SECTION (Spans Columns 2 & 3 on Desktop) */}
          {/* ========================================== */}
          <div className="lg:col-start-2 lg:col-span-2 lg:row-start-1 flex flex-col items-center text-center pt-8 pb-16 z-20">
            <h2 className="aes-header-anim text-4xl md:text-5xl lg:text-7xl font-serif text-[#0B1E3A] tracking-tight leading-[1.02] mb-6 whitespace-pre-line brand-title">
              {data.headline}
            </h2>
            <p className="aes-header-anim brand-lead text-lg md:text-xl leading-relaxed mb-8 whitespace-pre-line font-medium">
              {data.subhead}
            </p>
            <div className="aes-header-anim">
              <Link 
                to={data.btnLink}
                className="brand-button brand-button-primary"
              >
                {data.btnText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 12h15"></path></svg>
              </Link>
            </div>
          </div>

          {/* ========================================== */}
          {/* ASYMMETRICAL IMAGE GRID */}
          {/* ========================================== */}
          
          {/* Image 1: Tall Left */}
          <div className="aes-img-anim lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col gap-4">
            <div className={`w-full aspect-[3/4] overflow-hidden ${data.images[0].shape} bg-slate-200 shadow-md`}>
              <img src={data.images[0].src} alt="Showcase 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {data.images[0].title && (
              <div className="px-2">
                <h4 className="font-bold text-[#0B1E3A] text-lg tracking-tight">{data.images[0].title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{data.images[0].desc}</p>
              </div>
            )}
          </div>

          {/* Image 2: Mid-Left Floating */}
          <div className="aes-img-anim lg:col-start-2 lg:row-start-2 flex flex-col gap-4 mt-12 lg:-mt-12">
            <div className={`w-full aspect-square overflow-hidden ${data.images[1].shape} bg-slate-200 shadow-md`}>
              <img src={data.images[1].src} alt="Showcase 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Image 3: Center Small Circle */}
          <div className="aes-img-anim lg:col-start-3 lg:row-start-2 flex justify-center items-center p-8">
            <div className={`w-48 h-48 overflow-hidden ${data.images[2].shape} bg-slate-200 shadow-xl border-8 border-white`}>
              <img src={data.images[2].src} alt="Showcase 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Image 4: Top Right Organic */}
          <div className="aes-img-anim lg:col-start-4 lg:row-start-1 flex flex-col gap-4 mt-12">
            <div className={`w-full aspect-[4/3] overflow-hidden ${data.images[3].shape} bg-slate-200 shadow-md`}>
              <img src={data.images[3].src} alt="Showcase 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {data.images[3].title && (
              <div className="px-2">
                <h4 className="font-bold text-[#0B1E3A] text-lg tracking-tight">{data.images[3].title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{data.images[3].desc}</p>
              </div>
            )}
          </div>

          {/* Image 5: Bottom Left Wide */}
          <div className="aes-img-anim lg:col-start-1 lg:col-span-2 lg:row-start-3 flex flex-col gap-4 mt-8">
            <div className={`w-full h-80 overflow-hidden ${data.images[4].shape} bg-slate-200 shadow-md`}>
              <img src={data.images[4].src} alt="Showcase 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Image 6: Bottom Mid Right */}
          <div className="aes-img-anim lg:col-start-3 lg:row-start-3 flex flex-col gap-4 mt-8">
             <div className={`w-full aspect-[3/4] overflow-hidden ${data.images[5].shape} bg-slate-200 shadow-md`}>
              <img src={data.images[5].src} alt="Showcase 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* ========================================== */}
          {/* THE DARK STATS BANNER (Bottom Right) */}
          {/* ========================================== */}
          <div className={`aes-banner-trigger aes-banner-anim lg:col-start-4 lg:row-start-2 lg:row-span-2 flex flex-col justify-between ${data.statsBg} rounded-3xl overflow-hidden mt-8 lg:mt-0 shadow-2xl`}>
            
            {/* Top Stats Grid */}
            <div className="grid grid-cols-3 gap-2 p-8 border-b border-white/10">
              {data.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="text-[#0a53a6] font-serif text-3xl md:text-4xl font-light mb-1">{stat.number}</span>
                  <span className="text-white text-[10px] tracking-[0.2em] uppercase font-bold">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Middle Title */}
            <div className="p-8 flex-grow flex items-center justify-center text-center">
              <h3 className="text-white font-bold text-xl md:text-2xl leading-snug tracking-wide whitespace-pre-line">
                {data.bannerText}
              </h3>
            </div>

            {/* Bottom Image Slice */}
            <div className="w-full h-48 bg-slate-800">
               <img src={data.images[0].src} alt="Banner Graphic" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}