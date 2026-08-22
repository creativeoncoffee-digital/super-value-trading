import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAbout({ category = "personal-care" }) {
  const containerRef = useRef(null);
  const data = productData[category]?.showcase?.about;

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      gsap.fromTo('.fmcg-img', 
        { opacity: 0, x: -50, scale: 0.95 }, 
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.fmcg-about-trigger', start: 'top 80%' } }
      );
      gsap.fromTo('.fmcg-text-item', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.fmcg-about-trigger', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="fmcg-about-trigger w-full bg-[#f8fafc] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden font-sans brand-section">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="fmcg-img w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[600px] aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50 group">
            <img src={data.image} alt="Showcase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="fmcg-text-item flex items-center gap-4 mb-4">
        
            <h3 className="brand-kicker text-[#0B1E3A]">{data.title}</h3>
          </div>
          <h2 className="fmcg-text-item brand-title text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight mb-4">
            {data.headline} <span className="text-orange-500">{data.highlight}</span>
          </h2>
          <p className="fmcg-text-item brand-lead text-slate-500 mb-10 max-w-xl">{data.description}</p>
          

          {/* DYNAMIC DATA RENDERING: Positioning vs Stats */}
          {data.positioning ? (
            // PERFUMERY SPECIFIC: Market Positioning Blocks
            <div className="fmcg-text-item w-full bg-[#0B1E3A] border border-slate-700/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start justify-between gap-6 shadow-2xl shadow-black/20 mb-10">
              {data.positioning.map((pos, i) => (
                <div key={i} className="flex-1 flex flex-col border-l-2 border-orange-500 pl-4 w-full">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">{pos.title}</span>
                  <span className="text-white text-sm font-medium">{pos.desc}</span>
                </div>
              ))}
            </div>
          ) : (
            // DEFAULT: Standard Stats Block (Personal Care / Auto)
            <div className="fmcg-text-item w-full bg-white border border-slate-100 rounded-3xl p-6 flex items-center justify-between divide-x divide-slate-100 shadow-[0_20px_60px_rgba(7,19,38,0.08)] mb-10">
              {data.stats.map((stat, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-orange-500 mb-1">{stat.value}</span>
                  <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
          <button className="fmcg-text-item brand-button bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
            Know More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 12h15"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
}