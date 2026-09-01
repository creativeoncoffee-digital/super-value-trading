import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import S1 from "../../assets/Products/Sub/SV1.webp";
import S2 from "../../assets/Products/Sub/SV2.webp";
import S3 from "../../assets/Products/Sub/SV3.webp";
import S4 from "../../assets/Products/Sub/SV3.png";
import S5 from "../../assets/Products/Sub/SV5.png";
import S6 from "../../assets/Products/Sub/SV6.webp";



// perfume
import PsubOil from "../../assets/Products/Sub/PsubOil.png";
import PsubManufacturing from "../../assets/Products/Sub/PsubManufacturing.png";
import PsubPerfume from "../../assets/Products/Sub/PsubPerfume.png";
import PsubEssentialOil from "../../assets/Products/Sub/PsubEssentialOil.png";
import PsubSpray from "../../assets/Products/Sub/PsubSpray.png";


//personal care
  import c1 from "../../assets/Products/Sub/supervalue edible oil.png";
import c2 from "../../assets/Products/Sub/supervalue facewash.png";
import c3 from "../../assets/Products/Sub/supervalue hair oil.png";
import c4 from "../../assets/Products/Sub/supervalue handwash.png";
import c6 from "../../assets/Products/Sub/supervalue shampoo.png";


//Automobile
// import A1 from "../../assets/Products/Sub/carSub.png";
import A2 from "../../assets/Products/Sub/evSub.png";
import A3 from "../../assets/Products/Sub/partsSub.png";
import A4 from "../../assets/Products/Sub/threeSub.png";
import A5 from "../../assets/Products/Sub/tierSub.png";

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE FOR ALL 4 SERVICES
// ============================================================================
const featureDataStore = {
  "silvermax": {
    eyebrow: "SILVERMAX BLADES",
    title: "Build Your Brand",
    highlight: "Silvermax & Stainless Steel Blades",
    description: "Engineered for a smoother, safer and more comfortable shave. Silvermax combines stainless steel precision with lasting sharpness for everyday confidence.",
    features: [
      {
        title: "Premium Stainless Steel",
        desc: "Strong, durable & rust resistant.",
        icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      },
      {
        title: "Ultra Sharp Edges",
        desc: "For a clean and smooth shave.",
        icon: "M14.121 14.121L19 19m-7-7l3-3m-6 6l-3 3m-5-5l5-5m2 2l-7 7m16-16l-7 7"
      },
      {
        title: "Reliable & Safe",
        desc: "Comfort in every stroke.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      }
    ],
    ctaLabel: "Explore Products",
    ctaLink: "/contact",
    images: [
      S1,
      S2,
      S3,
      S4,
      S5,
      S6
    ]
  },
  "personal-care": {
    eyebrow: "Personal Care Solutions",
    title: "Build Your Brand",
    highlight: "Personal Care & FMCG Products",
    description: "Delivering trusted grooming, hygiene, and daily care products formulated for safety and global distribution.",
    features: [
      {
        title: "Global Standards",
        desc: "Strict quality control across all lines.",
        icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      },
      {
        title: "High Demand Formulas",
        desc: "Sourced for modern consumer needs.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      },
      {
        title: "Private Label Ready",
        desc: "Customizable for your market brand.",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      }
    ],
    ctaLabel: "View Personal Care",
    ctaLink: "/contact",
    images: [
         c1,
          c2,
           c3,
          c4,
            c6
    ]
  },
  "perfumery": {
    eyebrow: "PERFUMERY SOLUTIONS",
   title: "Build Your Brand",
     highlight: "Perfumes, Oils & Fragrances",
    description: "From raw ingredients and perfume oils to fully packaged retail products, we develop and distribute world-class fragrance lines.",
    features: [
      {
        title: "Master Formulations",
        desc: "Expertly crafted and long-lasting.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      },
      {
        title: "Bespoke Packaging",
        desc: "Premium bottles and unboxing experience.",
        icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      },
      {
        title: "OEM Manufacturing",
        desc: "End-to-end private label solutions.",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      }
    ],
    ctaLabel: "Explore Perfumery",
    ctaLink: "/contact",
    images: [
      PsubOil,
      PsubManufacturing,
      PsubSpray,
      PsubPerfume,
      PsubEssentialOil
    ]
  },
  "automobiles": {
    eyebrow: "AUTOMOTIVE SOLUTIONS",
    title: "Build Your Brand",
     highlight: "Automotive Parts and Vehicles",
    description: "Supplying the modern road. From Piaggio and TVS vehicles to high-performance tires and premium spare parts.",
    features: [
      {
        title: "Authorized Distributor",
        desc: "Genuine vehicles from top manufacturers.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      },
      {
        title: "Supervalue Brand",
        desc: "Our exclusive line of tires and tubes.",
        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      },
      {
        title: "Wholesale Logistics",
        desc: "Secure transit for heavy cargo.",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      }
    ],
    ctaLabel: "View Automotive",
    ctaLink: "/contact",
    images: [
    A2,
    A3,
    A4,
    A5

    ]
  }
};


export default function AdvancedFeature({ category = "silvermax" }) {
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Safely grab the data based on the category
  const safeCategory = category ? category.toLowerCase().trim() : "silvermax";
  const data = featureDataStore[safeCategory] || featureDataStore["silvermax"];

  // ==========================================
  // AUTO-SLIDER LOGIC
  // ==========================================
  useEffect(() => {
    if (!data.images || data.images.length <= 1) return;
    
    // Change image every 4 seconds
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [data.images]);

  // ==========================================
  // GSAP SCROLL ANIMATIONS
  // ==========================================
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text sliding in from the left
      gsap.fromTo('.adv-text-anim',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // Image sliding in from the right
      gsap.fromTo('.adv-img-anim',
        { opacity: 0, x: 40, scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [category]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-13 md:py-16 px-[clamp(1.5rem,5vw,4rem)] overflow-hidden font-sans border-t border-slate-100">
      {/* FIX: Changed gap-14 lg:gap-20 to exactly gap-10 on desktop to reduce the visual space */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-10">
        
        {/* ======================================================= */}
        {/* LEFT SIDE: TEXT & FEATURES                              */}
        {/* ======================================================= */}
        <div className="w-full md:ml-17 md:w-1/2 flex flex-col items-start">
          
          {/* Eyebrow */}
          <div className="adv-text-anim flex items-center gap-4 mb-4">
            <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              {data.eyebrow}
            </h4>
      
          </div>

          {/* Title */}
          <p className="adv-text-anim text13xl md:text-2xl  font-semibold text-[#0B1E3A] tracking-tight leading-[1.1] mb-1 whitespace-pre-line">
            {data.title}
          </p>
            <h2 className="adv-text-anim text-3xl md:text-5xl  font-semibold text-[#0B1E3A] tracking-tight leading-[1.1] mb-6 whitespace-pre-line">
            {data.highlight}
          </h2>

          {/* Description */}
          <p className="adv-text-anim text-slate-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            {data.description}
          </p>

          {/* Features List */}
          <div className="adv-text-anim flex flex-col gap-6 mb-12 w-full">
            {data.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                
           {/* FIX: Forced the SVG stroke and text explicitly to white on group-hover */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-100 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_4px_15px_rgba(243,121,10,0.3)] transition-all duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:stroke-white group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon}></path>
                  </svg>
                </div>
                
                {/* Feature Text */}
                <div className="flex flex-col justify-center pt-1">
                  <h4 className="text-[#0B1E3A] font-bold text-base md:text-lg mb-0.5">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-sm md:text-[15px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="adv-text-anim">
            <Link 
              to={data.ctaLink} 
              className="inline-flex items-center gap-3 bg-[#f3790a] hover:bg-[#d9660a] text-white font-bold text-sm md:text-base py-4 px-8 rounded-xl shadow-[0_4px_20px_rgba(243,121,10,0.3)] hover:shadow-[0_6px_25px_rgba(243,121,10,0.5)] transition-all duration-300 hover:-translate-y-1 group"
            >
              {data.ctaLabel}
              <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

        </div>

        {/* ======================================================= */}
        {/* RIGHT SIDE: AUTO-FADING MULTI-IMAGE SLIDER              */}
        {/* ======================================================= */}
        {/* FIX: Removed lg:justify-end and used justify-center to close the gap cleanly */}
        <div className="adv-img-anim md:mr-17 w-full md:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0">
          
          {/* Main Image Container */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
            
            {data.images.map((imgSrc, index) => {
              const isActive = index === currentImageIndex;
              return (
                <img 
                  key={index}
                  src={imgSrc} 
                  alt={`${data.title} product view ${index + 1}`} 
                  // Smooth Crossfade Logic
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              );
            })}

            {/* Pagination Dots (Inside the image at the bottom) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
              {data.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentImageIndex 
                      ? 'w-8 h-2.5 bg-orange-500 shadow-md' 
                      : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}