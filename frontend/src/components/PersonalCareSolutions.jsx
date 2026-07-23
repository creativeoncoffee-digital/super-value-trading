import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PersonalCareSolutions() {
  const sectionRef = useRef(null);

  // Data array for the solution cards
  const solutions = [
    {
      title: "Hair Care",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 7.5a3 3 0 11-6 0" />
        </svg>
      )
    },
    {
      title: "Skin Care",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      title: "Bath & Shower",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 7.5V5.25m0 0a2.25 2.25 0 10-4.5 0v2.25m4.5 0a2.25 2.25 0 11-4.5 0m4.5 0h.008v.008H15V7.5zm-4.5 0h.008v.008H10.5V7.5zm-2.25 3h10.5c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5H8.25c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5z" />
        </svg>
      )
    },
    {
      title: "Oral Care",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.43 3 12c0 4.556 4.03 8.25 9 8.25z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
        </svg>
      )
    },
    {
      title: "Men's Grooming",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      title: "Feminine Care",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate text on the left
      gsap.fromTo('.pcs-text',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // Animate the cards popping in sequentially
      gsap.fromTo('.pcs-card',
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'back.out(1.2)', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-24 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center xl:items-stretch gap-12 xl:gap-8">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="w-full xl:w-[35%] flex flex-col justify-center max-w-2xl xl:max-w-none pr-0 xl:pr-8">
          
          <div className="pcs-text w-10 h-[2px] bg-orange-500 mb-6"></div>
          
          <h2 className="pcs-text text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1E3A] leading-tight mb-6 tracking-tight">
            Trusted Personal Care Solutions for Every Lifestyle
          </h2>
          
          <p className="pcs-text text-slate-500 text-base md:text-lg leading-relaxed">
            From daily essentials to premium care, we deliver a wide range of personal care products that meet the highest standards of quality, safety and value.
          </p>

        </div>

        {/* --- RIGHT SIDE: CATEGORY CARDS --- */}
        <div className="w-full xl:w-[65%]">
          {/* 
            Container allows horizontal scrolling on mobile/tablet, 
            but displays as a perfect row on large screens 
          */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto xl:overflow-visible pb-8 xl:pb-0 pt-4 px-2 -mx-2 xl:px-0 xl:mx-0 snap-x snap-mandatory hide-scrollbar">
            
            {solutions.map((item, index) => (
              <div 
                key={index}
                className="pcs-card group flex flex-col items-center justify-between bg-white rounded-3xl p-6 w-[140px] md:w-[160px] min-h-[200px] md:min-h-[220px] flex-shrink-0 snap-center cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-slate-50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Top Icon */}
                <div className="text-[#0B1E3A] group-hover:text-orange-500 transition-colors duration-300 mt-2 transform group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Bottom Content (Title & Arrow) */}
                <div className="flex flex-col items-center gap-3 w-full">
                  <h3 className="text-[#0B1E3A] font-bold text-sm md:text-base text-center leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Small Right Arrow */}
                  <div className="text-slate-400 group-hover:text-orange-500 transition-all duration-300 transform group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}