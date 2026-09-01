import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Keep your local imports
import extra from "../../assets/extra.png";
import autoextra from "../../assets/autoextra.png";
import perfuextra from "../../assets/perfuextra.png";

// subcategory images 
// auto
import car from "../../assets/Products/Sub/carSub.png";
import ev from "../../assets/Products/Sub/evSub.png";
import parts from "../../assets/Products/Sub/partsSub.png";
import threeWheel from "../../assets/Products/Sub/threeSub.png";
import tier from "../../assets/Products/Sub/tierSub.png";

//silver
import S1 from "../../assets/Products/Sub/SV1.webp";
import S2 from "../../assets/Products/Sub/SV2.webp";
import S3 from "../../assets/Products/Sub/SV3.png";
import S4 from "../../assets/Products/Sub/SV4.webp";
import S5 from "../../assets/Products/Sub/SV5.png";
import S6 from "../../assets/Products/Sub/SV6.webp";
import S7 from "../../assets/Products/Sub/SV7.png";
import S8 from "../../assets/Products/Sub/SV8.png";
import S9 from "../../assets/Products/Sub/SV9.png";

//Perfume
import PsubDeodorant from "../../assets/Products/Sub/PsubDeodorant.png";
import PsubEssentialOil from "../../assets/Products/Sub/PsubEssentialOil.png";
import PsubManufacturing from "../../assets/Products/Sub/PsubManufacturing.png";
import PsubPerfume from "../../assets/Products/Sub/PsubPerfume.png";
import PsubSpray from "../../assets/Products/Sub/PsubSpray.png";
import PsubOil from "../../assets/Products/Sub/PsubOil.png";

// personal care
import c1 from "../../assets/Products/Sub/supervalue edible oil.png";
import c2 from "../../assets/Products/Sub/supervalue facewash.png";
import c3 from "../../assets/Products/Sub/supervalue hair oil.png";
import c4 from "../../assets/Products/Sub/supervalue handwash.png";
import c5 from "../../assets/Products/Sub/supervalue persume.png"
import c6 from "../../assets/Products/Sub/supervalue shampoo.png";

gsap.registerPlugin(ScrollTrigger);

const gridDataStore = {
  "personal-care": {
    kicker: "OUR CATEGORIES",
    title: "Explore Our Product Categories",
    items: [
      { title: "Perfume/Fragrance", desc: "Discover a world of captivating scents.", img: c5 },
      { title: "Shampoo", desc: "Clean and nourish your hair with our range.", img: c6 },
      { title: "Hair Oil", desc: "Natural oils for healthy, strong hair.", img: c3 },
      { title: "Face Wash", desc: "Gentle cleansing for your daily routine.", img: c2 },
      { title: "Body Lotion", desc: "Moisturize and protect your skin with our range.", img: c1 },
      { title: "Hand Wash", desc: "Gentle cleansing for your hands.", img: c4 },
      { title: "Shaving Form", desc: "Premium shaving cream for a smooth shave.", img: S5 },
    ]
  },
  "automobiles": {
    kicker: "OUR CATEGORIES",
    title: "Explore Automotive Solutions",
    items: [
      { title: "Cars", desc: "Reliable passenger vehicles engineered for global markets and commercial fleets.", img: car },
      { title: "Two Wheelers", desc: "High-performance bikes and scooters for efficient daily mobility.", img: autoextra },
      { title: "Three Wheelers", desc: "Heavy-duty, reliable three-wheelers built for commercial supply chains.", img: threeWheel },
      { title: "Electric Vehicles", desc: "Modern, eco-friendly EVs driving the future of sustainable transport.", img: ev },
      { title: "Tires & Tubes", desc: "Durable, high-traction tires and tubes for all-weather performance.", img: tier },
      { title: "Spare Parts", desc: "Genuine OEM and premium aftermarket automotive components.", img: parts }
    ]
  },
  "perfumery": {
    kicker: "OUR CATEGORIES",
    title: "Explore Fragrance Collections",
    items: [
      { title: "Perfumes", desc: "Signature scents for the elite market.", img: PsubPerfume },
      { title: "Spray Perfume", desc: "Convenient and easy-to-use fragrance solution.", img: PsubSpray },
      { title: "Perfume Oils", desc: "Highly concentrated, lasting attars.", img: PsubOil },
      { title: "Deodorants", desc: "Effective odor protection for all-day freshness.", img: PsubDeodorant },
      { title: "Essential Oils", desc: "Natural oils for aromatherapy and wellness.", img: PsubEssentialOil },
      { title: "Perfume Manufacturing", desc: "Custom fragrance creation and production.", img: PsubManufacturing },
    ]
  },
  "silvermax": {
    kicker: "OUR CATEGORIES",
    title: "Explore Grooming Solutions",
    items: [
      { title: "Super Platinum", desc: "Advanced cryogenic coating for smooth shaves.", img: S2 },
      { title: "Platinum", desc: "Multi-layered platinum for enhanced comfort.", img: S6 },
      { title: "Stainless Steel", desc: "Built for everyday shaving performance.", img: S3 },
      { title: "Double Edge Razors", desc: "Classic, durable metal build for control.", img: S9 },
      { title: "Shaving Foams", desc: "Rich lather for the ultimate smooth glide.", img: S5 },
      { title: "Non Foaming Gels", desc: "Smooth, non-foaming gel for a clean shave.", img: S8 },
      { title: "Shaving creme", desc: "Luxurious cream for a premium shaving experience.", img: S7 },
    ]
  }
};

export default function ServiceGrid({ category = "personal-care" }) {
  const containerRef = useRef(null);
  
  const safeCategory = category ? category.toLowerCase().trim() : "personal-care";
  const data = gridDataStore[safeCategory] || gridDataStore["personal-care"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      gsap.fromTo('.cat-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      gsap.fromTo('.cat-card', 
        { opacity: 0, y: 50, scale: 0.98 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.cat-grid-wrapper', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-[#f8fafc] py-15 md:py-18 font-sans border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        <div className="cat-header flex flex-col items-center text-center mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <h4 className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
              {data.kicker}
            </h4>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-[#071326] tracking-tight leading-[1.1] mb-4">
            {data.title}
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl">
            We provide high-end, beautiful products tailored to your market needs. Discover our premium collections below.
          </p>
        </div>
        
        <div className="cat-grid-wrapper w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {data.items.map((cat, index) => {
            const gridClass = 'md:col-span-6 lg:col-span-3';

            return (
              <div 
                key={index} 
                className={`cat-card group relative bg-white border border-slate-200/60 rounded-[2rem] p-6 lg:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,30,58,0.08)] hover:border-orange-500/20 cursor-pointer overflow-hidden z-10 ${gridClass}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* FIX: Reset margins to 0 on mobile (mx-0) to prevent overflow, but kept them negative on desktop (lg:-mx-8) */}
                <div className="mx-0 -mt-6 lg:-mt-8 lg:-mx-8 h-48 md:h-56 mb-8 flex items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-100/50 rounded-t-[1.5rem] lg:rounded-t-[2rem]">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    // Adjusted w-full to prevent ugly zooming on mobile
                    className="w-full h-full object-cover mix-blend-multiply" 
                  />
                </div>
                
                {/* Text Content - UNTOUCHED padding exactly as requested */}
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

          <div className="cat-card md:col-span-12 lg:col-span-3 relative bg-[#111111]/90 rounded-[2rem] p-8 md:p-8 flex flex-col justify-center items-start transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(243,121,10,0.3)] overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-500/30  duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="relative z-10 w-full">
              
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