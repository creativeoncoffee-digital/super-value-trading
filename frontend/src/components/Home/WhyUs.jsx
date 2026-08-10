import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import whyPic from '../../assets/Home/HomeWhyUsPic.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text slides in from the left
      gsap.fromTo('.why-text-anim',
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } 
        }
      );

      // Image placeholder slides in from the right
      gsap.fromTo('.why-img-anim',
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[linear-gradient(135deg,#084ea3_0%,#0b57a8_55%,#071326_100%)] py-20 px-[clamp(1.5rem,5vw,4rem)] overflow-hidden brand-section">
      
      {/* Expanded Container for a bigger image */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col w-full lg:w-1/2">
          
          <div className="why-text-anim mb-4 flex items-center gap-3">
            <span className="brand-icon-chip text-white bg-white/10 border border-white/10">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l2.6 5.2 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4.1 5.8-.8L12 3z" /></svg>
            </span>
            <span className="text-white/70 text-xs font-bold uppercase tracking-[0.24em]">Why choose us</span>
          </div>

          <h2 className="why-text-anim text-white font-bold text-3xl md:text-5xl leading-tight mb-6 max-w-xl">
            Why Choose Super Value General Trading LLC
          </h2>
<ul className="why-text-anim text-white text-sm md:text-base leading-snug space-y-3 md:space-y-6">
  
  <li className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3  transition-colors hover:bg-white/10">
    <span className="shrink-0 flex items-center justify-center p-2 rounded-lg bg-[#ff7b1c]/20 text-[#ff7b1c] mt-0.5">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16M12 4v16" /></svg>
    </span>
    <p className="text-white/90 leading-relaxed">
      <strong className="text-white font-bold">Strategic Global Location</strong> – Headquartered in Dubai, a world-class logistics and trade hub, enabling seamless international sourcing and distribution.
    </p>
  </li>

  <li className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-white/10">
    <span className="shrink-0 flex items-center justify-center p-2 rounded-lg bg-[#0b57a8]/20 text-[#4da6ff] mt-0.5">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
    </span>
    <p className="text-white/90 leading-relaxed">
      <strong className="text-white font-bold">Diverse Trading Expertise</strong> – Serving multiple industries with a broad portfolio of high-demand commodities and consumer goods.
    </p>
  </li>

  <li className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-white/10">
    <span className="shrink-0 flex items-center justify-center p-2 rounded-lg bg-white/10 text-white mt-0.5">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 2l2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2z" /></svg>
    </span>
    <p className="text-white/90 leading-relaxed">
      <strong className="text-white font-bold">Reliable Global Supply Chain</strong> – Strong sourcing network and efficient logistics ensure timely deliveries and consistent product quality.
    </p>
  </li>

  <li className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-white/10">
    <span className="shrink-0 flex items-center justify-center p-2 rounded-lg bg-[#f3790a]/20 text-[#f3790a] mt-0.5">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m6-4a4 4 0 100-8 4 4 0 000 8zm-7 4a4 4 0 118 0v2H6v-2z" /></svg>
    </span>
    <p className="text-white/90 leading-relaxed">
      <strong className="text-white font-bold">Customer-Centric & Trusted</strong> – Committed to transparency, competitive pricing, and building long-term business relationships through dependable service.
    </p>
  </li>

</ul>
          
        </div>

        {/* Right Side: Image Container (Made significantly larger) */}
          <div className="why-img-anim w-full lg:w-1/2 flex  mt-20 justify-center lg:justify-end items-center">
          
          <div className="relative w-full max-w-[600px] lg:max-w-[700px] aspect-square flex items-center justify-center rounded-3xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
            <img 
              src={whyPic} 
              alt="Super Value Core Strengths" 
              className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl transition-transform duration-700 hover:scale-105" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}