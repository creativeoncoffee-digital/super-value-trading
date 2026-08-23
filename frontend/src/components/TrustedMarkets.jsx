import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logo1 from '../assets/Products/one.png'; 
import logo2 from '../assets/Products/two.png';
import logo3 from '../assets/Products/three.png';
import logo4 from '../assets/Products/four.png';
import logo5 from '../assets/Products/five.png';
import logo6 from '../assets/Products/six.png';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// Category-specific data for the "Trusted Brands" section.
// All 4 categories have distinct brands and hover descriptions.
// ============================================================================

const brandsDataStore = {
    "home": {
    kicker: "TRUSTED BRANDS",
    title: "Top Brands We Deal In",
    brands: [
      { name: "PIAGGIO", desc: "Global leader in light commercial vehicles and premium utility three-wheelers.", img: logo2 },
      { name: "TVS", desc: "Top-tier manufacturer of high-performance two and three-wheelers for global markets.", img: logo3 },
      { name: "HERO", desc: "The world's largest manufacturer of reliable, high-mileage motorcycles and EVs.", img: logo4 },
      { name: "SUPERVALUE", desc: "Our exclusive private-label brand for premium OEM automotive spare parts.", img: logo5 } 
    ]
  },
  "automobiles": {
    kicker: "TRUSTED BRANDS",
    title: "Top Brands We Deal In",
    brands: [
      { name: "PIAGGIO", desc: "Global leader in light commercial vehicles and premium utility three-wheelers.", img: logo2 },
      { name: "TVS", desc: "Top-tier manufacturer of high-performance two and three-wheelers for global markets.", img: logo3 },
      { name: "HERO", desc: "The world's largest manufacturer of reliable, high-mileage motorcycles and EVs.", img: logo4 },
      { name: "SUPERVALUE", desc: "Our exclusive private-label brand for premium OEM automotive spare parts.", img: logo5 } 
    ]
  },
  "perfumery": {
    kicker: "TRUSTED PARTNERS",
    title: "Our Fragrance Houses",
    brands: [
      { name: "SANTALUXE", desc: "Premium luxury collections crafted from pure, ethically sourced organic extracts.", img: logo1 },
      { name: "NUBIA", desc: "Award-winning fragrance house specializing in deep, complex oriental scent profiles.", img: logo2 },
      { name: "DUBEY", desc: "Master perfumers creating world-class attars, essential oils, and concentrates.", img: logo3 },
      { name: "YOUR BRAND", desc: "We provide complete end-to-end private label manufacturing for your own brand.", img: logo4 },
      { name: "DUBEY", desc: "Master perfumers creating world-class attars, essential oils, and concentrates.", img: logo6 },
      { name: "YOUR BRAND", desc: "We provide complete end-to-end private label manufacturing for your own brand.", img: logo5 }
    ]
  },
  "personal-care": {  
    kicker: "FMCG PARTNERS",
    title: "Premium Care Brands",
    brands: [
      { name: "NIVEA", desc: "Globally recognized daily skincare, lotions, and deep moisturizing body washes.", img: logo1 },
      { name: "DOVE", desc: "Gentle, clinically proven personal care and hygiene essentials for all skin types.", img: logo2 },
      { name: "GILLETTE", desc: "The worldwide standard in men's grooming, razors, and advanced shaving systems.", img: logo3 },
      { name: "SUPERVALUE", desc: "Custom private-label formulation and manufacturing for modern personal care.", img: logo4 }
    ]
  },
  "silvermax": {
    kicker: "MANUFACTURING STANDARDS",
    title: "Our Core Product Lines",
    brands: [
      { name: "SUPER PLATINUM", desc: "Our most advanced line, combining special steel and cryogenic coating for smooth shaves.", img: logo5 },
      { name: "PLATINUM", desc: "Precision-coated with multiple layers of platinum for enhanced comfort and longer life.", img: logo6 },
      { name: "STAINLESS STEEL", desc: "Built for everyday performance, offering clean results with high corrosion resistance.", img: logo2 },
      { name: "OEM BLADES", desc: "Fully customizable blade manufacturing engineered and packaged for your brand.", img: logo3 }
    ]
  }
};

export default function TrustedMarkets({ category = "automobiles" }) {
  const containerRef = useRef(null);
  
  // Safely grab the data based on the category passed in
  const data = brandsDataStore[category] || brandsDataStore["automobiles"];

  // DYNAMIC GRID CALCULATION
  // Automatically adjust the columns so all brands fit on a single line on desktop
  const numBrands = data.brands.length;
  const desktopGridClass = 
    numBrands === 3 ? 'lg:grid-cols-3' :
    numBrands === 5 ? 'lg:grid-cols-5' :
    numBrands === 6 ? 'lg:grid-cols-6' :
    'lg:grid-cols-4'; // Default fallback

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.brand-header-anim', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      // Staggered Card Reveal
      gsap.fromTo('.brand-card', 
        { opacity: 0, y: 40, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.brand-grid', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-10 md:py-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* ======================================================= */}
        {/* SECTION HEADER                                          */}
        {/* ======================================================= */}
        <div className="brand-header-anim flex flex-col items-center text-center mb-16">
          <h4 className="text-[#f3790a] font-bold uppercase tracking-widest text-xs md:text-sm mb-3">
            {data.kicker}
          </h4>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#1c2331] tracking-tight mb-4">
            {data.title}
          </h2>
          {/* Orange underline matching the screenshot */}
          <div className="w-10 h-[3px] bg-[#f3790a] rounded-full"></div>
        </div>

        {/* ======================================================= */}
        {/* DYNAMIC BRAND GRID WITH ADVANCED HOVER EFFECTS          */}
        {/* ======================================================= */}
        <div className={`brand-grid w-full grid grid-cols-2 md:grid-cols-3 ${desktopGridClass} gap-4 md:gap-6`}>
          
          {data.brands.map((brand, index) => (
            <div 
              key={index} 
              className="brand-card group relative bg-white border border-slate-200/80 rounded-xl h-[140px] md:h-[160px] flex items-center justify-center overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            >
              
              {/* --- DEFAULT STATE: THE LOGO --- */}
              {/* Image size reduced slightly (w-[55%] md:w-[60%]) so 6 logos fit beautifully side-by-side */}
              <div className="w-[55%] md:w-[60%] h-10 md:h-12 flex items-center justify-center transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6 md:group-hover:-translate-y-8">
                {brand.img ? (
                  <img 
                    src={brand.img} 
                    alt={brand.name} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                ) : (
                  // Highly professional text fallback if no image is provided yet
                  <h3 className="text-[#1c2331] font-black text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-center leading-tight">
                    {brand.name}
                  </h3>
                )}
              </div>

              {/* --- HOVER STATE: THE DETAIL BOX --- */}
              {/* This sleek dark box glides up from the bottom seamlessly on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-[#111111] p-4 md:p-5 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center border-t border-orange-500/30">
                <h4 className="text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-1.5 truncate">
                  {brand.name}
                </h4>
                {/* Text slightly smaller so it never overflows when packed into 6 columns */}
                <p className="text-white text-[10px] md:text-[11px] leading-snug md:leading-relaxed line-clamp-3">
                  {brand.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}