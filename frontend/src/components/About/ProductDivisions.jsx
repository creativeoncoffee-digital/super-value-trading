import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../../data/AboutData';

gsap.registerPlugin(ScrollTrigger);

export default function ProductDivisions() {
  const sectionRef = useRef(null);
  const data = aboutData.divisions;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.pd-header', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      gsap.fromTo('.pd-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.pd-grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-24 px-[clamp(1.5rem,5vw,4rem)]">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        <div className="pd-header text-center mb-16 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              {data.label}
            </h3>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] mb-4">
            {data.title}
          </h2>
          <p className="text-slate-500 text-base">{data.subtitle}</p>
        </div>

        <div className="pd-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.cards.map((card, idx) => (
            <Link 
              to={card.link || "/"} 
              key={idx} 
              className="pd-card group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 cursor-pointer block"
            >
              
              <div className="relative w-full h-[240px] bg-slate-100">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute -bottom-6 left-8 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
              </div>

              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h4 className="text-[#0B1E3A] font-bold text-xl mb-3 group-hover:text-orange-500 transition-colors">
                  {card.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                
                {/* FIX: Added explicit "Explore" link at the bottom so mobile users immediately know it's a clickable card */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-orange-500 font-bold text-sm">
                  <span>Explore Division</span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}