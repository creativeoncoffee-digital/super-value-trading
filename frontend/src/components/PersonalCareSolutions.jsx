import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function PersonalCareSolutions({ category = "personal-care" }) {
  const sectionRef = useRef(null);
  const data = productData[category]?.solutions;

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      gsap.fromTo('.pcs-text', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      gsap.fromTo('.pcs-card', { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-24 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center xl:items-stretch gap-12 xl:gap-8">
        
        <div className="w-full xl:w-[35%] flex flex-col justify-center max-w-2xl xl:max-w-none pr-0 xl:pr-8">
          <div className="pcs-text w-10 h-[2px] bg-orange-500 mb-6"></div>
          <h2 className="pcs-text text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1E3A] leading-tight mb-6 tracking-tight">
            {data.headline}
          </h2>
          <p className="pcs-text text-slate-500 text-base md:text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="w-full xl:w-[65%]">
          <div className="flex gap-4 md:gap-6 overflow-x-auto xl:overflow-visible pb-8 pt-4 snap-x snap-mandatory hide-scrollbar">
            {data.cards.map((item, index) => (
              <div key={index} className="pcs-card group flex flex-col items-center justify-between bg-white rounded-3xl p-6 w-[140px] md:w-[160px] min-h-[200px] md:min-h-[220px] flex-shrink-0 snap-center cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-[#0B1E3A] group-hover:text-orange-500 transition-colors duration-300 mt-2 transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-[#0B1E3A] font-bold text-sm md:text-base text-center mt-auo">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}