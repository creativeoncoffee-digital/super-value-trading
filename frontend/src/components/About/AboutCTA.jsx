import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../../data/AboutData';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const sectionRef = useRef(null);
  const data = aboutData.cta;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.cta-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-24 px-[clamp(1.5rem,5vw,4rem)] overflow-hidden">
      
      {/* Faint Map Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${data.mapImage})` }}
      ></div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start max-w-xl">
          <div className="cta-anim flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              {data.label}
            </h3>
          </div>
          <h2 className="cta-anim text-3xl md:text-5xl font-bold text-[#0B1E3A] leading-tight mb-4">
            {data.titlePart1} <br/>
            <span className="text-orange-500">{data.titlePart2}</span>
          </h2>
          <p className="cta-anim text-slate-500 text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Right Button */}
        <div className="cta-anim w-full md:w-1/2 flex justify-start md:justify-end">
          <Link to="/contact" className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20 hover:-translate-y-1 group">
            {data.buttonText}
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}