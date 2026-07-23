import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function FMCGShowcase({ category = "personal-care" }) {
  const containerRef = useRef(null);
  const data = productData[category]?.showcase;

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      gsap.fromTo('.fmcg-img', { opacity: 0, x: -50, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.fmcg-about-trigger', start: 'top 80%' } });
      gsap.fromTo('.fmcg-text-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.fmcg-about-trigger', start: 'top 80%' } });
      gsap.fromTo('.cat-header', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 85%' } });
      gsap.fromTo('.cat-card', { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 80%' } });
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-[#f8fafc] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* ABOUT SECTION */}
      <div className="fmcg-about-trigger max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-32 md:mb-40">
        <div className="fmcg-img w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[600px] aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50 group">
            <img src={data.about.image} alt="Showcase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="fmcg-text-item flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h3 className="text-[#0B1E3A] font-bold uppercase tracking-[0.15em] text-sm">{data.about.title}</h3>
          </div>
          <h2 className="fmcg-text-item text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight mb-4">
            {data.about.headline} <span className="text-orange-500">{data.about.highlight}</span>
          </h2>
          <p className="fmcg-text-item text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">{data.about.description}</p>
          
          <div className="fmcg-text-item w-full bg-white border border-slate-100 rounded-2xl p-6 flex items-center justify-between divide-x divide-slate-100 shadow-sm mb-10">
            {data.about.stats.map((stat, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-orange-500 mb-1">{stat.value}</span>
                <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          <button className="fmcg-text-item bg-orange-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-all">Know More</button>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="cat-grid-trigger max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        <div className="cat-header flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1E3A] tracking-tight">Our Product Categories</h2>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.categories.map((cat, index) => (
            <div key={index} className="cat-card group relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow bg-[#0B1E3A]">
              <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/90 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{cat.title}</h3>
                <p className="text-slate-300 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}