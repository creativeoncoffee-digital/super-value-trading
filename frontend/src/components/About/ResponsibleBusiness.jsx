import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your plant/leaf image here
import leafImg from "../../assets/About/AboutPersonal.png"; // Replace with your actual image path

gsap.registerPlugin(ScrollTrigger);

const responsibilityData = [
  {
    title: "RESPONSIBLE SOURCING",
    desc: "Working with established suppliers and manufacturing partners.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    )
  },
  {
    title: "SMARTER PACKAGING",
    desc: "Where suitable, exploring more efficient and environmentally conscious packaging solutions.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
    )
  },
  {
    title: "RESOURCE EFFICIENCY",
    desc: "Looking for more efficient approaches across production, packaging and supply operations.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
    )
  },
  {
    title: "LONG-TERM PARTNERSHIPS",
    desc: "Building relationships based on reliability, transparency and sustainable business growth.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    )
  }
];

export default function ResponsibleBusiness() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.rb-text-anim',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.rb-img-anim',
        { opacity: 0, scale: 0.95, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.rb-grid-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.rb-grid-wrapper', start: 'top 90%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-13 md:py-15 font-sans overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        {/* ======================================================= */}
        {/* TOP SECTION: Text (Left) & Image (Right)                */}
        {/* ======================================================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          
          {/* Left Text */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start">
            
            {/* Centered on mobile, left on desktop */}
            <div className="rb-text-anim w-full flex justify-center lg:justify-start items-center gap-3 mb-6">
              <h4 className="text-[#f3790a] font-bold uppercase tracking-[0.2em] text-[12px] md:text-xs text-center lg:text-left">
                RESPONSIBLE BUSINESS
              </h4>
            </div>
            
            {/* Centered on mobile, left on desktop */}
            <h2 className="rb-text-anim w-full text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B1E3A] tracking-tight leading-[1.1] mb-6">
              Building for <br />
              <span className="text-[#f3790a]">the Long Term.</span>
            </h2>
            
            {/* Centered on mobile, left on desktop */}
            <p className="rb-text-anim w-full text-center lg:text-left text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
              We believe responsible business goes beyond the products we sell. It includes how we source, manufacture, package, move and build relationships across our business.
            </p>

          </div>

          {/* Right Image */}
          <div className="rb-img-anim w-full lg:w-[45%] relative rounded-2xl md:rounded-[2rem] overflow-hidden min-h-[250px] md:min-h-[350px] shadow-lg">
            <div className="absolute inset-0 bg-[#071326] w-full h-full object-cover">
               <img src={leafImg} alt="Responsible Business" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
            
            <div className="absolute top-8 right-8 md:top-12 md:right-12 text-right flex flex-col items-end">
              <h4 className="text-white font-bold text-sm md:text-lg tracking-widest uppercase leading-snug mb-3 text-right">
                A MORE <br />
                RESPONSIBLE <br />
                TOMORROW
              </h4>
              <div className="w-10 h-[2px] bg-white/70"></div>
            </div>
          </div>

        </div>

  
        <div className="rb-grid-wrapper w-full border-t border-slate-200 pt-12">
          {/* Changed to grid-cols-2 to force 2 items per row on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full">
            {responsibilityData.map((item, index) => (
             
              <div key={index} className="rb-grid-anim flex flex-col items-center lg:items-start text-center lg:text-left group">
                
                <div className="w-8 h-8 flex items-center justify-center text-slate-600 group-hover:text-orange-500 transition-colors duration-300 mb-3 shrink-0">
                  {item.icon}
                </div>
                
                <div className="flex flex-col pt-1">
                  <h4 className="text-[#0B1E3A] font-bold text-[10px] md:text-[11px] uppercase tracking-wider mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}