import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Replace this with your actual image path when ready
import Img from '../../assets/Home/HomeAbout.jpeg'; 

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Image slides in from the left
      gsap.fromTo('.about-image',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );

      // Text elements slide in from the right with a stagger
      gsap.fromTo('.about-text',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pb-10  pt-30 px-8 overflow-hidden">
      {/* Matched the max-w-7xl and flex gap to the WhatWeTrade component */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Cinematic Image */}
        <div className="about-image w-full lg:w-1/2 flex justify-center">
          {/* Matched the h-[600px] and rounded-3xl styling */}
          <div className="relative w-full h-[500px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img 
              src={Img} 
              alt="Logistics and Transport" 
              className="w-full h-full object-cover"
            />
            {/* Added a subtle gradient overlay to match the premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pl-0 lg:pl-8">
          
          <div className="about-text flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
              About Super Value
            </h2>
          </div>

          <p className="about-text text-slate-600 text-lg md:text-xl leading-relaxed ml-12 mb-10">
            Super Value General Trading LLC is a <br className="hidden xl:block" />
            <span className="text-orange-500 font-bold">premier, multi-sector trading enterprise</span><br className="hidden xl:block" />
            incorporated in <span className="text-[#0B1E3A] font-bold">Dubai, United Arab Emirates.</span><br />
            Operating from the world's most strategic<br className="hidden xl:block" />
            logistical hub, the company specialises in the<br className="hidden xl:block" />
            sourcing, distribution and cross-border trade<br className="hidden xl:block" />
            of high-demand commodities and consumer goods.
          </p>

          <div className="about-text">
            <Link 
              to="/contact" 
              className="inline-flex items-center ml-12 gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:-translate-y-1"
            >
              Inquiry Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}