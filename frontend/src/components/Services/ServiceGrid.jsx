import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceGrid({ category = "personal-care" }) {
  const containerRef = useRef(null);
  const categories = productData[category]?.showcase?.categories;

  useEffect(() => {
    if (!categories) return;
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.cat-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 85%' } }
      );
      
      // Staggered Card Reveal
      gsap.fromTo('.cat-card', 
        { opacity: 0, y: 60, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [categories]);

  if (!categories) return null;

  // ==========================================
  // SMART DYNAMIC LAYOUT LOGIC
  // ==========================================
  const isFourItems = categories.length === 4;
  
  // If 4 items, constrain width to 5xl so they don't stretch too wide. If 6, use the full 1400px width.
  const maxWidthClass = isFourItems ? 'max-w-6xl' : 'max-w-[1400px]';
  
  // If 4 items, use exactly 2 columns. If 6 items, use 3 columns.
  const gridClass = isFourItems ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section ref={containerRef} className="cat-grid-trigger w-full bg-[#f8fafc] py-24 md:py-20 overflow-hidden font-sans">
      <div className={`${maxWidthClass} mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center transition-all duration-300`}>
        
        {/* Section Header */}
        <div className="cat-header flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-orange-500"></span>
            <h2 className="text-sm md:text-base font-bold text-orange-500 tracking-[0.2em] uppercase">
              Premium Solutions
            </h2>
            <span className="w-12 h-[2px] bg-orange-500"></span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] tracking-tight">
            Our Product Categories
          </h3>
        </div>
        
        {/* Dynamic Grid */}
        <div className={`w-full grid grid-cols-1 ${gridClass} gap-6 md:gap-8`}>
          {categories.map((cat, index) => (
            <div 
              key={index} 
              // Enforced a strict height so cards look identical regardless of screen stretch
              className="cat-card group relative justify-center items-center w-full h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#0B1E3A]"
            >
              {/* Background Image with slow zoom on hover */}
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" 
              />
              
              {/* Dual Gradient Overlay: Darkens on hover to make text pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09152a] via-[#09152a]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              {/* Text Content Container */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                
                {/* The text block slides up slightly on hover */}
                <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
                    {cat.title}
                  </h4>
                  
                  {/* Animated Accent Line that draws itself on hover */}
                  <div className="w-12 h-1 bg-orange-500 mb-4 transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100"></div>
                  
                  {/* Description fades in smoothly */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {cat.desc}
                  </p>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}