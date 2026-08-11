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
    { id: 1, image: slide1, title: "Premium Perfumery", link: "/perfumery" },
    { id: 2, image: slide2, title: "FMCG & Personal Care", link: "/personal-care" },
    { id: 3, image: slide3, title: "Automotive Solutions", link: "/automobiles" }
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
    // FIX: Adjusted mobile heights so it doesn't take up too much vertical space
    <section className="relative w-full h-[70vh] lg:h-[85vh] min-h-[500px] lg:min-h-[600px] px-3 md:px-5 mt-1 bg-white mb-12 md:mb-2 brand-section">

      <div ref={sliderRef} className="w-full h-full rounded-[2rem] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.2)]">

        {slides.map((slide, index) => (
          <Link
            key={slide.id}
            to={slide.link}
            // FIX: Adjusted padding for mobile screens
            className={`absolute inset-0 w-full h-full flex flex-col justify-end p-6 pb-20 md:p-[clamp(2rem,6vw,8rem)] transition-all duration-1000 ease-in-out cursor-pointer ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[15000ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/95 via-[#071326]/50 to-transparent"></div>

            <div className="relative z-20 flex flex-col w-full max-w-[1200px] mx-auto pb-2 md:pb-4">

              <div className="slide-anim flex items-center gap-3 mb-3 md:mb-4">
                <span className="w-6 md:w-8 h-[2px] bg-orange-500"></span>
                <p className="brand-kicker text-orange-400 flex items-center gap-2 text-[10px] md:text-xs">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Global Markets
                </p>
              </div>

              {/* FIX: Scaled down text size for mobile */}
              <h1 className="slide-anim text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-[0.98] tracking-tight mb-6 md:mb-8 drop-shadow-md">
                {slide.title}
              </h1>

              <div className="slide-anim flex flex-col">
                <span className="brand-button bg-orange-500 text-white w-max text-xs md:text-sm px-5 py-2.5 md:px-7 md:py-3.5">
                  Explore Sector
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}

        {/* FIX: Moved slide indicators higher on mobile so they don't hit the bottom edge */}
        <div className="absolute bottom-6 left-6 md:bottom-[clamp(2rem,4vw,4rem)] md:left-[clamp(2rem,6vw,8rem)] md:translate-x-0 z-30 flex gap-2 md:gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.preventDefault(); setCurrentSlide(idx); }}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-8 md:w-10 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* FIX: Scaled down badge for mobile (w-28 h-28) and adjusted positioning to prevent overlap issues */}
      <Link
        to="/contact"
        className="absolute bottom-0 right-6 translate-y-[45%] md:right-14 md:translate-y-1/3 z-40 w-28 h-28 md:w-40 md:h-40 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(243,121,10,0.4)] hover:scale-105 transition-transform duration-300 group/badge"
      >
        <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
          <path id="textPath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
          <text>
            <textPath href="#textPath" startOffset="0%" fill="white" className="text-[10px] md:text-[10.5px] font-bold tracking-[0.12em] uppercase">
              Your Trusted Logistic Partner • 2018 •
            </textPath>
          </text>
        </svg>
        <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 border-2 border-white/90 rounded-full flex items-center justify-center group-hover/badge:translate-y-1 transition-transform duration-300">
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </Link>
    </section>
  );
}