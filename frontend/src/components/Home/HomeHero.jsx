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
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', overwrite: true }
    );
  }, [currentSlide]);

  return (
    // Added mb-16 to give the overlapping badge space to breathe above the next section
    <section className="relative w-full h-[85vh] min-h-[600px] px-5 mt-1 bg-white mb-2">
      
      {/* Banner Container (overflow hidden keeps image rounded) */}
      <div ref={sliderRef} className="w-full h-full rounded-2xl relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
         
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
            
            {/* Cleaner, smoother gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-[#071326]/40 to-transparent"></div>
            
            {/* Simple, Professional Text Area */}
            <div className="relative z-20 flex flex-col w-full max-w-[1200px] mx-auto pb-4">
              
              {/* Premium Subtitle with Icon */}
              <div className="slide-anim flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Global Markets
                </p>
              </div>

              {/* Bold, Clean Title */}
              <h1 className="slide-anim text-white font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8 drop-shadow-md">
                {slide.title}
              </h1>
              
              {/* Refined Button */}
              <div className="slide-anim flex flex-col">
                <span className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white font-bold px-8 py-4 rounded-xl w-max transition-all duration-300 hover:bg-orange-600 shadow-lg shadow-orange-500/20 hover:-translate-y-1">
                  Explore Sector
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}

        {/* Slide Indicators */}
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

      {/* Floating Badge - Positioned 50% inside and 50% outside the banner */}
      <Link 
        to="/contact"
        className="absolute bottom-0 right-10 md:right-14 translate-y-1/3 z-40 w-32 h-32 md:w-40 md:h-40 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 hover:bg-orange-600 transition-transform duration-300 group/badge"
      > 
        <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
          <path id="textPath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
          <text>
            <textPath href="#textPath" startOffset="0%" fill="white" className="text-[10.5px] font-bold tracking-[0.12em] uppercase">
              Your Trusted Logistic Partner • 2018 • 
            </textPath>
          </text>
        </svg>
        <div className="relative z-10 w-12 h-12 border-2 border-white/90 rounded-full flex items-center justify-center group-hover/badge:translate-y-1 transition-transform duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </Link>
    </section>
  );
}