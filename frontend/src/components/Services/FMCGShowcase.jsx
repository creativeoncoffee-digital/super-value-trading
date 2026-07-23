import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FMCGShowcase() {
  const containerRef = useRef(null);
  
  // Data array for the categories grid
  const categories = [
    {
      title: "Hair Care Solutions",
      desc: "Shampoos, conditioners, oils, styling & treatment products.",
      img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop" // Placeholder: Shampoo bottles
    },
    {
      title: "Skin Care Essentials",
      desc: "Face care, body lotions, creams & skincare treatments.",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" // Placeholder: Skincare products
    },
    {
      title: "Bath & Shower Products",
      desc: "Soaps, body washes, scrubs & bathing essentials.",
      img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop" // Placeholder: Shower setting
    },
    {
      title: "Oral Care Products",
      desc: "Toothpaste, toothbrushes, mouthwash & dental care.",
      img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop" // Placeholder: Toothbrushes
    },
    {
      title: "Men's Grooming",
      desc: "Shaving, beard care, deodorants & men's personal care.",
      img: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?q=80&w=800&auto=format&fit=crop" // Placeholder: Shaving kit
    },
    {
      title: "Feminine Care Products",
      desc: "Hygiene, intimate care & daily comfort solutions.",
      img: "https://images.unsplash.com/photo-1584305574647-0cc9ec5ee60a?q=80&w=800&auto=format&fit=crop" // Placeholder: Feminine hygiene
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. About Section Animations
      gsap.fromTo('.fmcg-img',
        { opacity: 0, x: -50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.fmcg-about-trigger', start: 'top 80%' } }
      );

      gsap.fromTo('.fmcg-text-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.fmcg-about-trigger', start: 'top 80%' } }
      );

      // 2. Categories Header Animation
      gsap.fromTo('.cat-header',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 85%' } }
      );

      // 3. Categories Cards Staggered Reveal
      gsap.fromTo('.cat-card',
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, y: 0, scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'back.out(1.2)', 
          scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 80%' } 
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#f8fafc] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* =========================================
          SECTION 1: ABOUT FMCG PARTNER
      ========================================= */}
      <div className="fmcg-about-trigger max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-32 md:mb-40">
        
        {/* Left Side: Premium Image Container */}
        <div className="fmcg-img w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[600px] aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50 group">
            {/* Replace this placeholder with your Razor Image */}
            <img 
              src="https://images.unsplash.com/photo-1621607505833-616916c46a25?q=80&w=1000&auto=format&fit=crop" 
              alt="Premium Razor" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle inner shadow for premium feel */}
            <div className="absolute inset-0 border border-black/5 rounded-[2.5rem] pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          <div className="fmcg-text-item flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h3 className="text-[#0B1E3A] font-bold uppercase tracking-[0.15em] text-sm">
              About Super Value
            </h3>
          </div>

          <h2 className="fmcg-text-item text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1E3A] leading-tight mb-6 tracking-tight">
            Your Trusted <span className="text-orange-500">FMCG Partner</span>
          </h2>

          <p className="fmcg-text-item text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Super Value is committed to delivering high-quality personal care and grooming products that enhance everyday life. With a strong distribution network and customer-first approach, we ensure the best global brands reach you with trust and reliability.
          </p>

          {/* Stats Bar */}
          <div className="fmcg-text-item w-full bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-slate-100 shadow-sm mb-10 gap-6 md:gap-0">
            <div className="flex-1 flex flex-col items-center justify-center w-full text-center">
              <span className="text-3xl font-bold text-orange-500 mb-1">10+</span>
              <span className="text-slate-400 text-sm font-medium">Years Experience</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full text-center">
              <span className="text-3xl font-bold text-orange-500 mb-1">50+</span>
              <span className="text-slate-400 text-sm font-medium">Countries</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full text-center">
              <span className="text-3xl font-bold text-orange-500 mb-1">1000+</span>
              <span className="text-slate-400 text-sm font-medium">Retail Partners</span>
            </div>
          </div>

          <div className="fmcg-text-item">
            <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:-translate-y-1 group">
              Know More 
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>

        </div>
      </div>

      {/* =========================================
          SECTION 2: PRODUCT CATEGORIES GRID
      ========================================= */}
      <div className="cat-grid-trigger max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* Header */}
        <div className="cat-header flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1E3A] tracking-tight">
              Our Product Categories
            </h2>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl">
            A comprehensive range of high-quality personal care and FMCG products sourced from top global brands.
          </p>
        </div>

        {/* 3x2 CSS Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="cat-card group relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-[#0B1E3A]"
            >
              
              {/* Background Image with Hover Scale */}
              <img 
                src={category.img} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/90 via-[#0B1E3A]/30 to-transparent transition-opacity duration-500 group-hover:from-[#0B1E3A]"></div>

              {/* Card Content Layout */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between gap-4">
                  
                  {/* Text Block */}
                  <div className="flex flex-col gap-2 max-w-[80%]">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed transform transition-all duration-500 opacity-90 group-hover:opacity-100">
                      {category.desc}
                    </p>
                  </div>

                  {/* Animated Arrow Icon */}
                  <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-orange-500">
                    <svg className="w-5 h-5 text-orange-500 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>

                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}