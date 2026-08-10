import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({ category = 'personal-care' }) {
  const sectionRef = useRef(null);
  const data = productData[category]?.whyChooseUs;

  useEffect(() => {
    if (!data) return;

    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger after a slight delay to ensure fonts/images are loaded
      setTimeout(() => ScrollTrigger.refresh(), 200);

      gsap.fromTo('.stat-item', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.stats-bar', start: 'top 90%' } }
      );
      
      gsap.fromTo('.left-content', 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } }
      );
      
      gsap.fromTo('.right-img', 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } }
      );
      
      gsap.fromTo('.floating-card', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="w-full bg-[#fcfcfc] font-sans overflow-hidden border-t border-slate-100">
      
      {/* Top Stats Bar */}
      <div className="stats-bar w-full bg-[#071326] py-12 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-700/50">
          {data.stats.map((stat, index) => (
            <div key={index} className="stat-item flex items-start gap-4 px-0 lg:px-8 first:pl-0">
              <div className="text-orange-500 flex-shrink-0 mt-1">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl md:text-3xl leading-none mb-1">{stat.number}</span>
                <span className="text-orange-500 font-semibold text-sm mb-2">{stat.title}</span>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-24 md:py-32">
        
        {/* Strict Grid Layout ensures left text and right image NEVER overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-start">
          
          {/* LEFT SIDE: Text Content (Takes up 5 columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-12 xl:pr-16">
            
            <h2 className="left-content text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B1E3A] leading-[1.1] mb-6 tracking-tight">
              {data.headlinePrefix} <br className="hidden md:block"/>
              {data.headlineEmphasis}
            </h2>

            <p className="left-content text-slate-500 text-base md:text-lg leading-relaxed mb-12">
              {data.description}
            </p>

            <div className="flex flex-col gap-8">
              {data.features.map((feature, index) => (
                <div key={index} className="left-content flex items-start gap-4">
                  <div className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#0B1E3A] font-bold text-base mb-1.5 tracking-tight">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Image & Floating Card (Takes up 7 columns on Desktop) */}
          {/* Added pl-0 lg:pl-10 to force the gap you wanted */}
          <div className="lg:col-span-7 relative mt-16 lg:mt-0 pl-0 lg:pl-10 pb-16 lg:pb-0">
            
            <div className="right-img w-full rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
              <img
                src={data.image}
                alt={data.imageAlt || 'Why choose us'}
                className="w-full h-auto min-h-[400px] max-h-[600px] object-cover"
                onLoad={() => ScrollTrigger.refresh()}
              />
            </div>

            {/* The Floating Glass Card (Matched precisely to your reference) */}
            <div className="floating-card absolute bottom-0 left-0 md:-left-12 lg:-left-20 translate-y-10 lg:translate-y-16 bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-3xl p-8 md:p-10 w-[90%] md:w-[420px] z-10">
              <h3 className="text-2xl md:text-[1.75rem] font-extrabold text-[#0B1E3A] leading-tight mb-4 tracking-tight">
                {data.cardTitle}
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                {data.cardDescription}
              </p>

              <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-orange-200 hover:border-orange-500 text-orange-500 font-bold uppercase tracking-widest text-xs py-3 px-8 rounded-full transition-all duration-300">
                {data.cardCtaLabel}
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}