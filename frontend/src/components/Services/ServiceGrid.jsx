import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productData } from '../../data/ProductData';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceGrid({ category = "personal-care" }) {
  const containerRef = useRef(null);
  const data = productData[category]?.showcase;
  const categories = data?.categories;

  useEffect(() => {
    if (!categories) return;
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.cat-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 85%' } }
      );
      
      // Staggered Card Reveal (Including the dynamic CTA card)
      gsap.fromTo('.cat-card', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.cat-grid-trigger', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [categories]);

  if (!categories) return null;

  // Logic to determine if we need the wide CTA block
  const isFourItems = categories.length === 4;

  return (
    <section ref={containerRef} className="cat-grid-trigger w-full bg-[#f8fafc] py-24 md:py-32 overflow-hidden font-sans brand-section">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* Section Header (Matched to your image design) */}
        <div className="cat-header flex flex-col items-center text-center mb-16">
          <h4 className="brand-kicker mb-4 text-orange-500">
            Explore Our Range
          </h4>
          <h2 className="brand-title text-3xl md:text-4xl font-extrabold text-[#0B1E3A] tracking-tight mb-4">
            {category === 'personal-care' ? 'Personal Care Categories' : 
             category === 'perfumery' ? 'Fragrance Categories' : 
             'Automotive Categories'}
          </h2>
          <p className="brand-lead max-w-2xl">
            Explore our wide range of premium solutions tailored for global markets and specific business needs.
          </p>
        </div>
        
        {/* Fixed 3-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Map through the dynamic products */}
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="cat-card group flex flex-col bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer"
            >
              {/* Top Image */}
              <div className="w-full h-56 overflow-hidden bg-slate-100">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Bottom Text Content */}
              <div className="p-4 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold text-[#0B1E3A] mb-3 tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed  line-clamp-3 mb-6 pr-8">
                  {cat.desc}
                </p>
   {/* Independent Circular Arrow Icon */}
<div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-orange-200 bg-white flex items-center justify-center text-[#f3790a] transition-all duration-300 group-hover:bg-[#f3790a] group-hover:text-white group-hover:border-[#f3790a] shadow-sm group-hover:shadow-md group-hover:scale-110">
  <svg className="w-4 h-4 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
</div>
              </div>
            </div>
          ))}

          {/* Conditional 2-Column Wide CTA Box for 4-item grids */}
          {isFourItems && (
            <div className="cat-card lg:col-span-2 group relative bg-[#0B1E3A] rounded-[1.5rem] overflow-hidden shadow-lg flex flex-col justify-center p-10 md:p-12">
              {/* Subtle background glow/texture for the dark box */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 max-w-xl">
                <h4 className="brand-kicker text-orange-500 mb-3">
                  Custom Requirements
                </h4>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Looking for something specific?
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  We offer bespoke sourcing, private label manufacturing, and dedicated supply chain solutions to meet your exact market demands. Connect with our global trade desk today.
                </p>
                
                <Link 
                  to="/contact" 
                  className="brand-button brand-button-primary"
                >
                  Discuss Your Needs
                  <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}