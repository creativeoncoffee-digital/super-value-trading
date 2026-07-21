import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import slide1 from '../../assets/Home/HomeBanner1.png';
import slide2 from '../../assets/Home/HomeBanner2.png';
import slide3 from '../../assets/Home/HomeBanner3.png';

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    { id: 1, image: slide1, title: "Premium Perfumery", link: "/business" },
    { id: 2, image: slide2, title: "FMCG & Personal Care", link: "/business" },
    { id: 3, image: slide3, title: "Automotive Solutions", link: "/business" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const textElements = sliderRef.current.querySelectorAll('.slide-anim');
    gsap.fromTo(textElements, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power4.out', overwrite: true }
    );
  }, [currentSlide]);

  return (
    // Added p-3 to the outer section so the inner rounded-2xl is visible against the white background
    <section className="relative w-full h-[85vh] min-h-[600px] px-5 mt-1 bg-white">
      
      <div ref={sliderRef} className="w-full h-full rounded-2xl relative overflow-hidden group shadow-2xl">
         
        {slides.map((slide, index) => (
          <Link 
            key={slide.id}
            to={slide.link}
            className={`absolute inset-0 w-full h-full flex flex-col justify-end p-[clamp(2rem,6vw,8rem)] transition-opacity duration-1000 ease-in-out cursor-pointer ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[15000ms] group-hover:scale-105" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/80 via-[#0B1E3A]/10 to-transparent"></div>
            
            <div className="relative z-20 flex flex-col w-full max-w-[1200px]  mx-auto">
              <p className="slide-anim text-orange-500 font-bold uppercase tracking-[0.2em] text-[clamp(0.75rem,1.5vw,1rem)] mb-[clamp(0.5rem,1.5vw,1rem)] flex items-center gap-4">
                <span className="w-[30px] h-[2px] bg-orange-500"></span>
                Global Markets
              </p>
              <h1 className="slide-anim text-white font-bold text-[4rem] leading-[1.05] tracking-tight mb-[clamp(1rem,2vw,1.5rem)]">
                {slide.title}
              </h1>
              <div className="slide-anim flex flex-col">
                <span className="inline-flex items-center gap-3 bg-orange-500 text-white font-bold px-[clamp(1.2rem,3vw,2rem)] py-[clamp(0.8rem,1.5vw,1.2rem)] rounded-full w-max transition-all duration-300 hover:bg-orange-600 hover:gap-5 shadow-lg shadow-orange-500/30">
                  Explore Sector
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-[clamp(2rem,4vw,4rem)] md:left-[clamp(2rem,6vw,8rem)] md:translate-x-0 z-30 flex gap-3">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={(e) => { e.preventDefault(); setCurrentSlide(idx); }}
              className={`h-2 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-10 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Badge - Positioned slightly outside the rounded container for depth */}
      <Link 
        to="/contact"
        className="absolute bottom-8 right-8  md:bottom-3 md:right-12 z-40 w-28 h-28 md:w-36 md:h-36 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 hover:bg-orange-600 transition-all duration-300 group/badge"
      > 
        <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
          <path id="textPath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
          <text>
            <textPath href="#textPath" startOffset="0%" fill="white" className="text-[12px] font-bold tracking-[0.12em] uppercase">
              Your Trusted Logistic Partner • 2018 • 
            </textPath>
          </text>
        </svg>
        <div className="relative z-10 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center group-hover/badge:translate-y-1 transition-transform duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
       </Link>
    </section>
  );
}