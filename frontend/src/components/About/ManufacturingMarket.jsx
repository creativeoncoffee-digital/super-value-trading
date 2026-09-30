import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import p from "../../assets/About/AboutSilvermax.png"

gsap.registerPlugin(ScrollTrigger);

const manufacturingFeatures = [
  {
    title: "MULTI-CATEGORY MANUFACTURING",
    desc: "Production capabilities across personal care, grooming, fragrance and selected consumer categories.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  },
  {
    title: "BRANDED PRODUCTS",
    desc: "Development and supply of established and own-brand products.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
  {
    title: "OEM & PRIVATE LABEL",
    desc: "Custom product development, formulation, packaging and production for business partners.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  },
  {
    title: "QUALITY & PRODUCTION CONTROL",
    desc: "Structured processes, product specifications and quality checks across manufacturing operations.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

export default function ManufacturingMarket() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.mfg-text-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo('.mfg-image-anim',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 md:py-28 font-sans overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="mfg-text-anim text-3xl md:text-5xl font-bold text-[#0B1E3A] tracking-tight leading-[1.15] mb-6">
            From Manufacturing <br className="hidden md:block" />
            <span className="text-[#f3790a]">to Market.</span>
          </h2>
          <p className="mfg-text-anim text-slate-600 text-sm md:text-[15px] leading-relaxed mb-12 max-w-lg">
            Our manufacturing capabilities allow us to develop, produce and supply products across multiple categories. With established operations in India and further facilities in development worldwide, we continue to build a stronger production network closer to the markets we serve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {manufacturingFeatures.map((feature, idx) => (
              <div key={idx} className="mfg-text-anim flex flex-col items-start group">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors duration-300">
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-orange-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon}></path>
                  </svg>
                </div>
                <h4 className="text-[#0B1E3A] font-bold text-[10px] uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-slate-500 text-[13px] leading-relaxed pr-4">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image/Collage Space */}
        <div className="mfg-image-anim w-full lg:w-1/2 relative rounded-3xl overflow-hidden bg-slate-100 aspect-square md:aspect-[4/3] border border-slate-200">
          <img src={p} alt="Manufacturing Operations" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[200px] border border-white/20">
            <p className="text-orange-500 font-bold text-[10px] uppercase tracking-widest mb-1">Our Manufacturing Capabilities</p>
            <p className="text-[#0B1E3A] font-bold text-sm leading-tight">REAL PRODUCTS.<br/>REAL OPPORTUNITIES.</p>
          </div>
        </div>

      </div>
    </section>
  );
}