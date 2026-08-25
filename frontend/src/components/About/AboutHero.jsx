import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Smooth staggered entrance for all text elements
      gsap.fromTo('.about-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[90vh] flex flex-col justify-center bg-[#07101E] overflow-hidden font-sans pt-32 pb-16">
      
      {/* ========================================================= */}
      {/* BACKGROUND IMAGE & CINEMATIC GRADIENT MASK                */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0">
        <img 
          // You can update this placeholder banner later as requested
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop" 
          alt="Global Trade Dubai" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-lighten grayscale"
        />
        {/* Gradients that fade the image smoothly into the dark navy background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101E] via-[#07101E]/95 to-transparent lg:w-[75%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/40 to-transparent"></div>
      </div>

      {/* ========================================================= */}
      {/* FOREGROUND CONTENT                                        */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="w-full lg:w-[65%] xl:w-[60%]">

          {/* Main Heading (From Screenshot) */}
          <h1 className="about-anim text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Global Reach. <br />End-to-End Excellence.
          </h1>

          {/* Description (From Screenshot) */}
          <p className="about-anim text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Super Value Trading is a Dubai-based international trading company helping brands launch, grow, and scale across global markets with trust, strategy, and expertise.
          </p>

          {/* ======================================================= */}
          {/* STATS ROW (From Screenshot)                             */}
          {/* ======================================================= */}
          <div className="about-anim flex flex-col sm:flex-row gap-8 sm:gap-12 mb-6">
            
            {/* Stat 1: 80+ Countries */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0  group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl leading-tight mb-1">80+ Countries</span>
                <span className="text-slate-400 text-xs md:text-sm font-medium">Strong Global Presence</span>
              </div>
            </div>

            {/* Stat 2: 23+ Years */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl leading-tight mb-1">23+ Years</span>
                <span className="text-slate-400 text-xs md:text-sm font-medium">of Global Experience</span>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="about-anim pt-2">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm md:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(243,121,10,0.4)] hover:shadow-[0_6px_25px_rgba(243,121,10,0.6)] hover:-translate-y-1 group"
            >
              Partner With Us
              <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}