import React from 'react';

// Replace these with your actual logo imports
import logo1 from '../assets/Products/one.png'; 
import logo2 from '../assets/Products/two.png';
import logo3 from '../assets/Products/three.png';
import logo4 from '../assets/Products/four.png';
import logo5 from '../assets/Products/five.png';
import logo6 from '../assets/Products/six.png';

export default function TrustedMarkets() {
  const logos = [
    { id: 1, src: logo1, alt: "Partner 1" },
    { id: 2, src: logo2, alt: "Partner 2" },
    { id: 3, src: logo3, alt: "Partner 3" },
    { id: 4, src: logo4, alt: "Partner 4" },
    { id: 5, src: logo5, alt: "Partner 5" },
    { id: 6, src: logo6, alt: "Partner 6" }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-slate-100 overflow-hidden">
      
      {/* Dynamic Keyframes for the Marquee injected via standard style block */}
      <style>
        {`
          @keyframes mobileMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-mobile-marquee {
            animation: mobileMarquee 15s linear infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        <div className="flex items-center gap-4 justify-center md:justify-start mb-8 md:mb-10">
          <span className="w-8 h-[2px] bg-orange-500"></span>
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-slate-800">
            Trusted By Global Markets
          </h4>
          <span className="w-8 h-[2px] bg-orange-500 md:hidden"></span>
        </div>

        {/* ========================================== */}
        {/* DESKTOP VIEW: Clean Grid Layout */}
        {/* ========================================== */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          {logos.map((logo) => (
            <img 
              key={logo.id} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>

        {/* ========================================== */}
        {/* MOBILE VIEW: Infinite Scrolling Marquee */}
        {/* ========================================== */}
        <div className="md:hidden relative w-full flex overflow-hidden">
          {/* Transparent gradients to fade the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* The Track: We duplicate the logos array so it loops seamlessly */}
          <div className="flex items-center gap-10 animate-mobile-marquee w-max pl-4">
            {[...logos, ...logos].map((logo, idx) => (
              <img 
                key={idx} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-8 w-auto object-contain opacity-60 grayscale"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}