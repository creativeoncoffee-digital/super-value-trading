import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import leafImg from "../../assets/About/AboutSilvermax.png"

gsap.registerPlugin(ScrollTrigger);

const researchFeatures = [
  {
    title: "PRODUCT & PROCESS R&D",
    desc: "Improving formulations, materials, manufacturing processes and product performance.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    title: "MARKET INTELLIGENCE",
    desc: "Studying demand, pricing, competition and category trends across markets.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "PRODUCT DEVELOPMENT",
    desc: "Turning market insights into products and solutions relevant to specific markets.",
    icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
  {
    title: "TECHNOLOGY & ENGINEERING",
    desc: "Our CRYO® sputtering technology reflects our focus on precision engineering and continuous innovation.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }
];

export default function ResearchIntelligence() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.rnd-image-anim',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo('.rnd-text-anim',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-20 md:py-28 font-sans overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        
        {/* Left Image */}
        <div className="rnd-image-anim w-full lg:w-[45%] relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] lg:aspect-auto lg:h-[600px]">
          <img src={leafImg} alt="Research and Development" className="w-full h-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start lg:py-6">
          
          {/* Centered on mobile, left on desktop */}
          <div className="rnd-text-anim w-full flex justify-center lg:justify-start items-center gap-4 mb-2">
            <span className="text-[#f3790a] font-bold uppercase tracking-[0.2em] text-[12px] text-center lg:text-left">
              R&D & MARKET INTELLIGENCE
            </span>
          </div>
          
          {/* Centered on mobile, left on desktop */}
          <h2 className="rnd-text-anim w-full text-center lg:text-left text-3xl md:text-[42px] font-bold text-[#0B1E3A] tracking-tight leading-[1] mb-4">
            Research That <br />
            <span className="text-[#f3790a]">Drives Better Decisions.</span>
          </h2>
          
          {/* Centered on mobile, left on desktop */}
          <p className="rnd-text-anim w-full text-center lg:text-left text-slate-600 text-sm md:text-[15px] leading-relaxed mb-6">
            Our research and development work spans both product innovation and market intelligence — helping us improve what we make, understand where opportunities exist, and develop products suited to evolving market needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 w-full">
            {researchFeatures.map((feature, idx) => (
            
              <div key={idx} className="rnd-text-anim flex flex-col items-center lg:items-start text-center lg:text-left group">
                <svg className="w-6 h-6 text-slate-700 mb-4 group-hover:text-orange-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon}></path>
                </svg>
                <h4 className="text-[#0B1E3A] font-bold text-[10px] uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-slate-500 text-[13px] leading-relaxed lg:pr-2">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}