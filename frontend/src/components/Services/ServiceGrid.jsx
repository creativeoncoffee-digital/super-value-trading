import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import extra from "../../assets/extra.png"
import autoextra from "../../assets/autoextra.png"
import perfuextra from "../../assets/perfuextra.png"

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// All grid data is now managed directly inside this file.
// The layout automatically creates a 4-item top row and 3-item bottom row
// based on exactly 7 items per category.
// ============================================================================

const gridDataStore = {
  "personal-care": {
    kicker: "OUR CATEGORIES",
    title: "Explore Our Product Categories",
    items: [
      { title: "Cosmetics", desc: "Premium cosmetics for every beauty need.", img: [extra] },
      { title: "Skincare", desc: "Nourish, protect & glow with our skincare range.", img: [extra] },
      { title: "Haircare", desc: "Stronger, healthier hair every day.", img: [extra] },
      { title: "Hand Lotion", desc: "Soft, smooth & hydrated hands all day.", img: [extra] },
      { title: "Stationery Products", desc: "Quality stationery for school, office & businesses.", img: [extra] },
      { title: "Beauty & Personal Care", desc: "Daily essentials for a confident you.", img: [extra] },
      { title: "Packaging Solutions", desc: "Innovative packaging for every industry.", img: [extra] },
    ]
  },
  "automobiles": {
    kicker: "OUR CATEGORIES",
    title: "Explore Automotive Solutions",
    items: [
      { title: "Two Wheelers", desc: "High-performance bikes and scooters.", img: [autoextra] },
      { title: "Three Wheelers", desc: "Reliable commercial transport units.", img: [autoextra] },
      { title: "Electric Vehicles", desc: "Modern, eco-friendly mobility solutions.", img: [autoextra] },
      { title: "Tires & Tubes", desc: "Durable all-weather automotive tires.", img: [autoextra] },
      { title: "Spare Parts", desc: "Genuine OEM parts and accessories.", img: [autoextra] },
      { title: "Batteries", desc: "Long-lasting power for all vehicles.", img: [autoextra] },
      { title: "Lubricants", desc: "Premium oils for engine protection.", img: [autoextra] }, 
    ]
  },
  "perfumery": {
    kicker: "OUR CATEGORIES",
    title: "Explore Fragrance Collections",
    items: [
      { title: "Luxury Perfumes", desc: "Signature scents for the elite market.", img: [extra] },
      { title: "Everyday Fragrance", desc: "Accessible scents for daily wear.", img: [extra] },
      { title: "Perfume Oils", desc: "Highly concentrated, lasting attars.", img: [extra] },
      { title: "Deodorants", desc: "Refreshing aerosol body sprays.", img: [extra] },
      { title: "Gift Sets", desc: "Premium boxed fragrance collections.", img: [extra] },
      { title: "Body Mists", desc: "Light, breezy sprays for quick refreshment.", img: [extra] },
      { title: "Raw Extracts", desc: "Base notes for custom blending.", img: [extra] },
    ]
  }
};

export default function ServiceGrid({ category = "personal-care" }) {
  const containerRef = useRef(null);
  
  // Safely grab the data based on the category passed in, default to personal-care
  const data = gridDataStore[category] || gridDataStore["personal-care"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.cat-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      // Staggered Card Reveal
      gsap.fromTo('.cat-card', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.cat-grid-wrapper', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-24 md:py-32 font-sans border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* ======================================================= */}
        {/* SECTION HEADER (Matched exactly to screenshot)            */}
        {/* ======================================================= */}
        <div className="cat-header flex flex-col items-center text-center mb-16">
          <h4 className="text-[#e85a4f] font-extrabold uppercase tracking-wider text-xs md:text-sm mb-3">
            {data.kicker}
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1c2331] tracking-tight mb-4">
            {data.title}
          </h2>
          <div className="w-12 h-1 bg-[#e85a4f] rounded-full"></div>
        </div>
        
        {/* ======================================================= */}
        {/* 12-COLUMN GRID SYSTEM                                     */}
        {/* Precisely builds the 4-top / 3-bottom layout              */}
        {/* ======================================================= */}
        <div className="cat-grid-wrapper w-full grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {data.items.map((cat, index) => {
            // Layout Logic:
            // First 4 items take up 3 columns each (12/3 = 4 items per row on desktop)
            // Last 3 items take up 4 columns each (12/4 = 3 items per row on desktop)
            const gridClass = index < 4 
              ? 'md:col-span-6 lg:col-span-3' 
              : 'md:col-span-6 lg:col-span-4';

            return (
              <div 
                key={index} 
                className={`cat-card group relative bg-white border border-slate-200/80 rounded-[1.5rem] p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${gridClass}`}
              >
                {/* Product Image */}
                <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl">
                  {/* mix-blend-multiply ensures white-background images blend cleanly into the card */}
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pr-10">
                  <h3 className="text-[#1c2331] font-bold text-lg mb-2 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-snug">
                    {cat.desc}
                  </p>
                </div>

                {/* Bottom Right Arrow Icon (Matched to screenshot) */}
                <div className="absolute bottom-6 right-6 w-8 h-8 bg-[#2d3319] group-hover:bg-[#e85a4f] rounded-full flex items-center justify-center text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}