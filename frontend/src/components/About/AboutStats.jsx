import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../../data/AboutData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.astat-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 90%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0B1E3A] py-16 px-[clamp(1.5rem,5vw,4rem)] border-b-4 border-orange-500">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 lg:divide-x divide-white/10">
        
        {aboutData.stats.map((stat, idx) => (
          <div key={idx} className="astat-item flex items-start gap-4 px-0 lg:px-8 first:pl-0">
            <div className="text-slate-300 flex-shrink-0 mt-1">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {stat.icon}
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-3xl leading-none mb-1">
                {stat.number}
              </span>
              <span className="text-white font-semibold text-sm mb-2">
                {stat.title}
              </span>
              <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}