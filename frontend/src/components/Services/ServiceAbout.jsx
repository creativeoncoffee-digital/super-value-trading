import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CareAbout from '../../assets/Products/ServicePage/CareAbout.png';
import SilverAbout from '../../assets/Products/ServicePage/SilverAbout.png';
import AutomobileAbout from '../../assets/Products/ServicePage/AutomobileAbout.png';
import PerfumeAbout from '../../assets/Products/ServicePage/PerfumeAbout.png';
import PersonalAbout from '../../assets/Products/ServicePage/PersonalAbout.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// All data for the 4 categories is now stored directly here.
// Every category now uses the premium 3-block "positioning" design.
// ============================================================================

const aboutDataStore = {
  "perfumery": {
    title: "ABOUT PERFUMERY",
    headline: "Your Trusted",
    highlight: "Perfume & Scents Brand Builder Partner",
    description: "We help you create your own perfume brand with product options designed around your target audience, market positioning and desired presentation.",
    image: PerfumeAbout,
    bullets: [
      "Uncompromising quality and safety standards",
      "Seamless global export and logistics infrastructure",
      "Tailored private label and OEM manufacturing solutions"
    ],
    positioning: [
      { title: "VALUE", desc: "Everyday Fragrance" },
      { title: "PREMIUM", desc: "Refined Lifestyle Fragrance" },
      { title: "LUXURY", desc: "Signature Luxury Fragrance" }
    ]
  },
  
  "automobiles": {
    title: "About Automoblies",
    headline: "Your Trusted",
    highlight: "Automotive Brand Builder Partner ",
    description: "Our automotive division operates with a sharp focus on two primary categories: Vehicles (Two and Three Wheelers) and Spare Parts. We are an authorized distribution partner for global names like Piaggio, TVS, and Hero.",
    image: AutomobileAbout,
    bullets: [
      "Authorized distribution for Piaggio, TVS, and Hero",
      "Extensive catalog of OEM and aftermarket spare parts",
      "Exclusive Supervalue private label components"
    ],
    positioning: [
      { title: "VEHICLES", desc: "Two & Three Wheelers" },
      { title: "EVs", desc: "Modern Mobility Solutions" },
      { title: "PARTS", desc: "Supervalue Private Label" }
    ]
  },

  "personal-care": {
    title: "ABOUT FMCG",
    headline: "Your Trusted",
    highlight: " FMCG & Personal Care Brand Builder Partner",
    description: "Super Value supplies grooming and personal care essentials across international markets, combining dependable sourcing, private-label support, and long-term distribution expertise.",
    image: PersonalAbout,
    bullets: [
      "International standards of quality and safety",
      "End-to-end private label and OEM capabilities",
      "Secure global logistics and supply chain"
    ],
    positioning: [
      { title: "ESSENTIALS", desc: "Daily Grooming & Care" },
      { title: "COSMETICS", desc: "Premium Beauty Lines" },
      { title: "OEM", desc: "Custom Formulation & Packaging" }
    ]
  },

  "silvermax": {
    title: "ABOUT SILVERMAX",
    headline: "Your Trusted",
    highlight: "Silvermax Blades Brand Building Partner",
    description: "Authorized distribution and global supply of premium blades and grooming solutions engineered for absolute precision and comfort in every shave.",
    image: SilverAbout,
    bullets: [
      "High-grade stainless steel engineering",
      "Platinum-coated edges for ultimate comfort",
      "Scalable bulk and wholesale distribution"
    ],
    positioning: [
      { title: "PLATINUM", desc: "Premium Multi-Coated Blades" },
      { title: "STAINLESS", desc: "Reliable Everyday Performance" },
      { title: "CUSTOM", desc: "OEM Blister & Packaging" }
    ]
  }
};

export default function ServiceAbout({ category = "perfumery" }) {
  const containerRef = useRef(null);
  
  // Safely grab the correct data block, defaulting to perfumery if none is found
  const data = aboutDataStore[category] || aboutDataStore["perfumery"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Image smooth slide in
      gsap.fromTo('.about-img-wrapper', 
        { opacity: 0, x: -40 }, 
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
      );
      // Text content staggered reveal
      gsap.fromTo('.about-text-anim', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-24 md:py-15 font-sans overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        
        {/* ========================================== */}
        {/* LEFT: IMAGE SHOWCASE                       */}
        {/* ========================================== */}
        <div className="about-img-wrapper w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          
          
          {/* Main Image Container */}
          <div className="relative w-full max-w-[550px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(7,19,38,0.08)] group bg-slate-100">
            <img 
              src={data.image} 
              alt={data.highlight} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
            />
            {/* Subtle Luxury Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT: TEXT & CONTENT                      */}
        {/* ========================================== */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          {/* Eyebrow */}
          <div className="about-text-anim flex items-center gap-4 mb-4">
            <h3 className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-xs md:text-xs">
              {data.title}
            </h3>
          </div>
{/* Headline with Gradient Highlight */}
          <h2 className="about-text-anim flex flex-col gap-1 md:gap-2 mb-4">
            
            {/* "Your Trusted" - Smaller, medium weight */}
            <span className="text-xl md:text-3xl font-medium  -mb-2 text-[#071326] tracking-tight">
              {data.headline}
            </span>
            
            {/* The Highlight Text */}
            <span className="text-3xl md:text-5xl font-semibold text-[#071326] leading-[1.2] tracking-tight pb-1">
              
              {/* Logic to color ONLY the last two words */}
              {data.highlight && data.highlight.split(' ').length > 2 ? (
                <>
                  {/* Part 1: Everything EXCEPT the last two words stays dark */}
                  {data.highlight.split(' ').slice(0, -3).join(' ')}{' '}
                  
                  {/* Part 2: ONLY the last two words get the orange gradient */}
                  {/* FIX: Added py-1 so the bottom of the 'g' never gets clipped by bg-clip-text */}
                  <span className="text-transparent bg-clip-text bg-orange-500  py-1">
                    {data.highlight.split(' ').slice(-3).join(' ')}
                  </span>
                </>
              ) : (
                
                /* Fallback if the highlight is 2 words or fewer */
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 py-1">
                  {data.highlight}
                </span>
              )}

            </span>
          </h2>

          {/* Description */}
          <p className="about-text-anim text-slate-500 text-base md:text-lg leading-snug mb-6 max-w-xl">
            {data.description}
          </p>

          {/* Elegant Bullet Points */}
          <ul className="about-text-anim flex flex-col gap-4 mb-8 w-full">
            {data.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0 border border-orange-100">
                  <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#071326] font-semibold text-sm md:text-base leading-snug">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

        {/* UNIFIED DESIGN: The 3-Block "Positioning" Style for EVERY category */}
          <div className="about-text-anim w-full mb-8">
            {/* FIX: Changed gap-2 to gap-5 on mobile to separate the stacked items */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm">
              {data.positioning.map((pos, i) => (
                <div key={i} className="flex flex-col border-l-2 border-orange-400 pl-4 py-1">
                  <span className="text-[#071326] font-bold text-xs uppercase tracking-widest mb-1">
                    {pos.title}
                  </span>
                  {/* Removed mt-1 so it sits cleanly under the title with natural spacing */}
                  <span className="text-slate-600  text-[9px] md:text-xs font-medium leading-relaxed">
                    {pos.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        {/* CTA Button */}
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-[#d9660a] text-white font-bold text-sm py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group w-fit"
          >
            Discover More
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}