import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { aboutData } from '../../data/AboutData';

export default function AboutHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.about-hero-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
      gsap.fromTo('.about-hero-img',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[60vh] min-h-[500px] bg-[#0A101D] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A101D] via-[#0A101D]/90 to-transparent z-10"></div>
      
      <div className="max-w-[1400px] mx-auto w-full px-[clamp(1.5rem,5vw,4rem)] flex justify-between items-center relative z-20 h-full">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-xl">
          <div className="about-hero-anim flex items-center gap-4 mb-4">
            <span className="w-10 h-[2px] bg-orange-500"></span>
            <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              {aboutData.hero.label}
            </p>
          </div>
          <h1 className="about-hero-anim text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {aboutData.hero.titlePart1} <br />
            <span className="text-orange-500">{aboutData.hero.titlePart2}</span>
          </h1>
          <p className="about-hero-anim text-slate-400 text-base md:text-lg leading-relaxed">
            {aboutData.hero.description}
          </p>
        </div>

        {/* Right Overlapping Image Container */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-[45%] about-hero-img">
          <div className="w-full h-full rounded-tl-[80px] rounded-bl-[80px] overflow-hidden border-l-4 border-y-4 border-white/5">
            <img 
              src={aboutData.hero.image} 
              alt="Premium Products" 
              className="w-full h-full object-cover opacity-80 mix-blend-lighten"
            />
            {/* Inner glow effect matching the design */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A101D]/50 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}