import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Keep your local imports
import extra from "../../assets/extra.png";
import autoextra from "../../assets/autoextra.png";
import perfuextra from "../../assets/perfuextra.png";

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// Fixed the image array bug (changed [extra] to extra) so images render properly.
// ============================================================================

const gridDataStore = {
  "personal-care": {
    kicker: "OUR CATEGORIES",
    title: "Explore Our Product Categories",
    items: [
      { title: "Cosmetics", desc: "Premium cosmetics for every beauty need.", img: extra },
      { title: "Skincare", desc: "Nourish, protect & glow with our skincare range.", img: extra },
      { title: "Haircare", desc: "Stronger, healthier hair every day.", img: extra },
      { title: "Stationery", desc: "Quality stationery for school & businesses.", img: extra },
      { title: "Personal Care", desc: "Daily essentials for a confident you.", img: extra },
      { title: "Packaging", desc: "Innovative packaging for every industry.", img: extra },
    ]
  },
  "automobiles": {
    kicker: "OUR CATEGORIES",
    title: "Explore Automotive Solutions",
    items: [
      { title: "Two Wheelers", desc: "High-performance bikes and scooters.", img: autoextra },
      { title: "Three Wheelers", desc: "Reliable commercial transport units.", img: autoextra },
      { title: "Electric Vehicles", desc: "Modern, eco-friendly mobility solutions.", img: autoextra },
      { title: "Tires & Tubes", desc: "Durable all-weather automotive tires.", img: autoextra },
      { title: "Spare Parts", desc: "Genuine OEM parts and accessories.", img: autoextra },
      { title: "Batteries & Lubricants", desc: "Long-lasting power and lubricant  for all vehicles.", img: autoextra },
      { title: "Batteries & Lubricants", desc: "Long-lasting power and lubricant  for all vehicles.", img: autoextra },
      
    ]
  },
  "perfumery": {
    kicker: "OUR CATEGORIES",
    title: "Explore Fragrance Collections",
    items: [
      { title: "Luxury Perfumes", desc: "Signature scents for the elite market.", img: perfuextra },
      { title: "Everyday Fragrance", desc: "Accessible scents for daily wear.", img: perfuextra },
      { title: "Perfume Oils", desc: "Highly concentrated, lasting attars.", img: perfuextra },
      { title: "Deodorants", desc: "Refreshing aerosol body sprays.", img: perfuextra },
      { title: "Body Mists", desc: "Light, breezy sprays for quick refreshment.", img: perfuextra },
      { title: "Raw Extracts", desc: "Base notes for custom blending.", img: perfuextra },
    ]
  },
  "silvermax": {
    kicker: "OUR CATEGORIES",
    title: "Explore Grooming Solutions",
    items: [
      { title: "Super Platinum", desc: "Advanced cryogenic coating for smooth shaves.", img: extra },
      { title: "Platinum", desc: "Multi-layered platinum for enhanced comfort.", img: extra },
      { title: "Stainless Steel", desc: "Built for everyday shaving performance.", img: extra },
      { title: "Metal Razors", desc: "Classic, durable metal build for control.", img: extra },
      { title: "Shaving Cream", desc: "Rich lather for the ultimate smooth glide.", img: extra },
      { title: "OEM Blades", desc: "Custom manufactured for your brand.", img: extra },
       { title: "OEM Blades", desc: "Custom manufactured for your brand.", img: extra },
    ]
  }
};

export default function ServiceGrid({ category = "personal-care" }) {
  const containerRef = useRef(null);
  
  // Safely format category to lowercase to prevent capitalization bugs
  const safeCategory = category ? category.toLowerCase().trim() : "personal-care";
  const data = gridDataStore[safeCategory] || gridDataStore["personal-care"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.cat-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      // Staggered Card Reveal with a slight scale effect
      gsap.fromTo('.cat-card', 
        { opacity: 0, y: 50, scale: 0.98 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.cat-grid-wrapper', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-[#f8fafc] py-24 md:py-32 font-sans border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* ======================================================= */}
        {/* SECTION HEADER                                          */}
        {/* ======================================================= */}
        <div className="cat-header flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              {data.kicker}
            </h4>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0B1E3A] tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl">
            We provide high-end, beautiful products tailored to your market needs. Discover our premium collections below.
          </p>
        </div>
        
        {/* ======================================================= */}
        {/* 12-COLUMN DYNAMIC GRID SYSTEM                           */}
        {/* ======================================================= */}
        <div className="cat-grid-wrapper w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {data.items.map((cat, index) => {
            // Standard product items take 3 columns each (4 per row on desktop)
            const gridClass = 'md:col-span-6 lg:col-span-3';

            return (
              <div 
                key={index} 
                className={`cat-card group relative bg-white border border-slate-200/60 rounded-[2rem] p-6 lg:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,30,58,0.08)] hover:border-orange-500/20 cursor-pointer overflow-hidden z-10 ${gridClass}`}
              >
                {/* Subtle Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Product Image Container */}
                <div className="w-full h-48 md:h-56 mb-8 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white group-hover:from-orange-50/40 group-hover:to-white transition-colors duration-500 border border-slate-100/50 group-hover:border-orange-100/50">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    // mix-blend-multiply removes white backgrounds from images seamlessly
                    className="w-[80%] h-[80%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pr-12 relative flex-grow">
                  <h3 className="text-[#0B1E3A] font-bold text-lg md:text-xl mb-3 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Interactive Animated Arrow Button */}
                <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 w-10 h-10 md:w-12 md:h-12 bg-white border border-slate-200 group-hover:bg-orange-500 group-hover:border-orange-500 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            );
          })}

          {/* ======================================================= */}
          {/* THE NEW DYNAMIC CTA BLOCK (Fills the remaining space)     */}
          {/* Since there are 6 items, they leave exactly 2 empty       */}
          {/* boxes (col-span-6). We perfectly fill this empty space!   */}
          {/* ======================================================= */}
          <div className="cat-card md:col-span-12 lg:col-span-3 relative bg-[#111111]/90 rounded-[2rem] p-8 md:p-8 flex flex-col justify-center items-start transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(243,121,10,0.3)] overflow-hidden group">
            
            {/* Animated Glow Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-500/30  duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="relative z-10 w-full">
              
              {/* Message Icon */}
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-orange-500 backdrop-blur-md border border-white/10 group-hover:scale-110  group-hover:text-white transition-all duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              
              <h3 className="text-white font-extrabold text-2xl  mb-4 leading-tight">
                Looking for a <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Custom Solution?</span>
              </h3>
              
              <p className="text-slate-300 text-sm md:text-sm  leading-relaxed mb-8 md:mb-10 max-w-md">
                Don't see what you need? Send us a direct enquiry for custom manufacturing, bulk wholesale orders, or to explore our complete, unlisted catalog.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm md:text-base py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(243,121,10,0.4)] hover:shadow-[0_6px_25px_rgba(243,121,10,0.6)] group/btn"
              >
                Send an Enquiry
                <svg className="w-5 h-5 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}