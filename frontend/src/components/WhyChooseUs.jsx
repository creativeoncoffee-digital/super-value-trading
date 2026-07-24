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
      gsap.fromTo('.stat-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.stats-bar', start: 'top 90%' } });
      gsap.fromTo('.left-content', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } });
      gsap.fromTo('.right-img', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } });
      gsap.fromTo('.floating-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } });
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="w-full bg-white font-sans overflow-hidden">
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

      <div className="main-content max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-24 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center lg:items-start">
        <div className="w-full lg:w-5/12 flex flex-col pr-0 lg:pr-8">
          <h2 className="left-content text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1E3A] leading-tight mb-6">
            {data.headlinePrefix} <br />
            <span className="inline-block w-8 h-[2px] bg-orange-500 mr-3 align-middle"></span>
            {data.headlineEmphasis}
          </h2>

          <p className="left-content text-slate-500 text-base leading-relaxed mb-10 max-w-md">
            {data.description}
          </p>

          <div className="flex flex-col gap-8">
            {data.features.map((feature, index) => (
              <div key={index} className="left-content flex items-start gap-5">
                <div className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#0B1E3A] font-bold text-base mb-1">{feature.title}</h4>
                  <p className="text-slate-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-7/12 relative mt-8 lg:mt-0 pb-16 lg:pb-0">
          <div className="right-img w-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={data.image}
              alt={data.imageAlt || 'Why choose us'}
              className="w-full h-auto max-h-[600px] object-cover"
              // Add this line to force GSAP to recalculate when the image loads
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>

          <div className="floating-card absolute bottom-0 left-4 md:left-10 lg:-left-12 translate-y-12 lg:translate-y-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 max-w-[360px] md:max-w-[400px] border border-slate-50 z-10">
            <h3 className="text-2xl font-bold text-[#0B1E3A] leading-tight mb-4">
              {data.cardTitle}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              {data.cardDescription}
            </p>

            <button className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 group shadow-lg shadow-orange-500/20 w-fit">
              {data.cardCtaLabel}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}