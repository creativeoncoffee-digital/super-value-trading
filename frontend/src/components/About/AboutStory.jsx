import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const storyCards = [
  {
    title: "Dubai-Based Company",
    desc: "Serving clients across Middle East, Africa, Europe, Asia, and beyond.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  },
  {
    title: "More Than a Trading Company",
    desc: "We are your international business growth partner.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  },
  {
    title: "One-Stop Solution",
    desc: "From product sourcing to market entry and distribution — all under one roof.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  {
    title: "Trusted by Distributors & Brands",
    desc: "Personally connected relationships that drive results.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Professional. Reliable. Global.",
    desc: "We deliver with integrity, commitment, and excellence.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Solutions-Oriented Approach",
    desc: "Tailored strategies to meet your unique business needs.",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
  }
];

export default function AboutStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Left side text animation
      gsap.fromTo('.story-text-anim',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // Right side cards animation
      gsap.fromTo('.story-card-anim',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.story-grid', start: 'top 85%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-24 md:py-25 font-sans overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        
        {/* ======================================================= */}
        {/* LEFT COLUMN: TEXT CONTENT                               */}
        {/* ======================================================= */}
        <div className="w-full lg:w-[35%] flex flex-col items-start pt-2">
          
          <div className="story-text-anim flex items-center gap-3 mb-4">
            <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              Our Story
            </h4>
          </div>

          <h2 className="story-text-anim text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#0B1E3A] tracking-tight leading-[1.15] mb-6">
            Building Value <br className="hidden md:block" />
            Beyond Borders
          </h2>


          <p className="story-text-anim text-slate-600 text-sm md:text-[15px] leading-relaxed mb-6">
            With over 23+ years of international business experience and a leadership team with global exposure, Super Value Trading has evolved into a one-stop solution for businesses seeking reliable import-export support, product sourcing, brand development, and market entry.
          </p>

          <p className="story-text-anim text-slate-600 text-sm md:text-[15px] leading-relaxed font-medium">
            We don't just trade products — we build long-term partnerships that create lasting global value.
          </p>

        </div>

        {/* ======================================================= */}
        {/* RIGHT COLUMN: 2x3 CARD GRID                             */}
        {/* ======================================================= */}
        <div className="story-grid w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {storyCards.map((card, index) => (
            <div 
              key={index}
              className="story-card-anim group bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,30,58,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col items-start cursor-default"
            >
              {/* FIX: Icon Box with explicit text-white on hover to prevent contrast issues */}
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:-translate-y-1 transition-all duration-300 shadow-sm group-hover:shadow-md">
                {/* SVG explicitly forces stroke-white on group hover */}
                <svg className="w-6 h-6 text-orange-500 group-hover:text-white group-hover:stroke-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={card.icon}></path>
                </svg>
              </div>

              {/* Card Title */}
              <h3 className="text-[#0B1E3A] font-semibold text-[15px] md:text-base leading-tight mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-500 text-xs md:text-[13px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}