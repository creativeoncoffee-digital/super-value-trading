import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../../data/AboutData';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.wwa-text',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo('.wwa-img',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-[clamp(1.5rem,5vw,4rem)]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-8">
          <div className="wwa-text flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              {aboutData.whoWeAre.label}
            </h3>
          </div>
          <h2 className="wwa-text text-3xl md:text-5xl font-bold text-[#0B1E3A] leading-tight mb-6">
            {aboutData.whoWeAre.title}
          </h2>
          <p className="wwa-text text-slate-500 text-base md:text-lg leading-relaxed">
            {aboutData.whoWeAre.description}
          </p>
        </div>

        <div className="wwa-img w-full lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src={aboutData.whoWeAre.image} 
            alt="Warehouse Operations" 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

      </div>
    </section>
  );
}