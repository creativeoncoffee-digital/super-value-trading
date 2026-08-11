import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

// Premium fallback images to prevent the broken image issue shown in your screenshot
const fallbackImages = [
  "https://images.unsplash.com/photo-1616949755610-8c9bac08f9f8?q=80&w=1000",
  "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=1200",
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1600"
];

const fallbackDescriptions = [
  "Defining the olfactory direction and lifestyle mood.",
  "Selecting the perfect silhouette and glass weight.",
  "Tactile elements: caps, atomizers, and finishes.",
  "Integrating your logo and brand essence flawlessly.",
  "Elevating presentation for luxury retail markets.",
  "The final product, ready for global distribution."
];

// Strict 12-column layout to guarantee perfect symmetry
const gridLayoutClasses = [
  "col-span-1 md:col-span-5 h-[400px] lg:h-[450px]",  // 01: Tall Left
  "col-span-1 md:col-span-7 h-[400px] lg:h-[450px]",  // 02: Wide Right
  "col-span-1 md:col-span-4 h-[350px] lg:h-[400px]",  // 03: Thirds Left
  "col-span-1 md:col-span-4 h-[350px] lg:h-[400px]",  // 04: Thirds Center
  "col-span-1 md:col-span-4 h-[350px] lg:h-[400px]",  // 05: Thirds Right
  "col-span-1 md:col-span-12 h-[450px] lg:h-[600px]"  // 06: Full Width Bottom
];

export default function PerfumeryVisualStory({ category = "perfumery" }) {
  const containerRef = useRef(null);
  const data = productData[category]?.visualStory;

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.story-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      // Staggered Grid Reveal
      gsap.fromTo('.story-card', 
        { opacity: 0, y: 60, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.story-grid', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-24 md:py-32 font-sans border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        {/* HEADER */}
        <div className="story-header text-center mb-16 md:mb-20">
          <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            The Creative Process
          </h4>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#0B1E3A] tracking-tight">
            THE ART OF BUILDING YOUR BRAND
          </h2>
        </div>

        {/* FLAWLESS BENTO GRID */}
        <div className="story-grid grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {data.map((item, i) => {
            // Guarantee layout even if data length varies
            const gridClass = gridLayoutClasses[i % 6];
            // Fix broken image links by using a fallback if the source isn't valid
            const imgSrc = item.img && item.img.length > 10 ? item.img : fallbackImages[i % 6];
            const desc = fallbackDescriptions[i % 6];

            return (
              <div 
                key={i} 
                className={`story-card relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500 bg-[#0B1E3A] ${gridClass}`}
              >
                {/* Image */}
                <img 
                  src={imgSrc} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
                
                {/* Elegant Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/90 via-[#0B1E3A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
                  
                  {/* Step ID & Line */}
                  <div className="flex items-center gap-3 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-orange-500 font-bold text-lg">{item.id}</span>
                    <span className="w-6 h-[2px] bg-orange-500"></span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                  
                  {/* Description (Fades in on hover) */}
                  <p className="text-slate-300 text-sm font-medium leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 max-w-sm">
                    {desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}