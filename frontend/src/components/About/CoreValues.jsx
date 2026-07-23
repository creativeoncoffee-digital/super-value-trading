import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../../data/AboutData';

gsap.registerPlugin(ScrollTrigger);

export default function CoreValues() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.cv-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, 
          duration: 0.8, stagger: 0.1, 
          ease: 'power2.out', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } 
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pb-24 px-[clamp(1.5rem,5vw,4rem)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {aboutData.coreValues.map((val, idx) => (
          <div key={idx} className="cv-card group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {val.icon}
              </svg>
            </div>
            <h4 className="text-[#0B1E3A] font-bold text-lg mb-3">{val.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}