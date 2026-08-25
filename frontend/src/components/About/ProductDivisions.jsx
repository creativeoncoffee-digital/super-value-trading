import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Use external HD Unsplash images or replace these with your own local imports later
const divisionsData = [
  {
    title: "Personal Care & FMCG",
    desc: "Razor blades, grooming essentials, skincare, and everyday FMCG products built for reliable global supply.",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    link: "/personal-care",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    title: "Perfumery & Scents",
    desc: "Luxury perfumes, perfume oils, deodorants, and end-to-end private-label fragrance development.",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    link: "/perfumery",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  },
  {
    title: "Automotive Solutions",
    desc: "Two-wheelers, three-wheelers, EVs, tires, tubes, and OEM automotive parts with private-label potential.",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    link: "/automobiles",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  },
  {
    title: "Silvermax Blades",
    desc: "Precision engineered grooming solutions, razor blades, and custom OEM manufacturing standards.",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    link: "/silvermax",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
];

gsap.registerPlugin(ScrollTrigger);

export default function ProductDivisions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Fade In
      gsap.fromTo('.pd-header', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      );
      
      // Staggered Cards Reveal with Scale effect
      gsap.fromTo('.pd-card',
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.pd-grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f8fafc] py-10 md:py-15 overflow-hidden border-t border-slate-100">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* ======================================================= */}
        {/* SECTION HEADER                                          */}
        {/* ======================================================= */}
        <div className="pd-header text-center mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
              Our Product Divisions
            </h3>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0B1E3A] mb-5 tracking-tight">
            Diverse Products. <br />
            One Commitment.
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            We support multiple sectors with category-specific sourcing, distribution, and private-label growth.
          </p>
        </div>

        {/* ======================================================= */}
        {/* 4-COLUMN CARD GRID                                      */}
        {/* ======================================================= */}
        <div className="pd-grid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {divisionsData.map((card, idx) => (
            <Link 
              to={card.link} 
              key={idx} 
              className="pd-card group relative flex flex-col bg-white rounded-[1.5rem] shadow-sm hover:shadow-[0_20px_50px_rgba(11,30,58,0.08)] transition-all duration-500 hover:-translate-y-2 border border-slate-200 cursor-pointer z-10"
            >
              
              {/* Image Section */}
              <div className="relative w-full h-[220px] bg-slate-100 overflow-hidden rounded-t-[1.5rem]">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* FIX: Floating Icon Explicitly Positioned & Z-Indexed */}
              <div className="absolute top-[220px] -translate-y-1/2 left-6 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 group-hover:bg-[#0B1E3A] transition-all duration-400 z-20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon}></path>
                </svg>
              </div>

              {/* Text Section */}
              <div className="p-6 pt-10 flex flex-col flex-grow relative bg-white rounded-b-[1.5rem] z-10">
                
                {/* Subtle Hover Gradient Inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 rounded-b-[1.5rem]"></div>

                <h4 className="text-[#0B1E3A] font-bold text-lg md:text-xl mb-3 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-slate-500 text-[14px] leading-relaxed mb-3">
                  {card.desc}
                </p>
                
                {/* FIX: Rebuilt, Highly Animated Premium CTA Footer */}
                <div className="mt-auto pt-1 border-t border-slate-100 flex items-center justify-between">
                  
                  {/* Sliding Underline Text */}
                  <span className="relative py-1 text-orange-500 font-bold text-[13px] uppercase tracking-widest transition-colors duration-300">
                    Explore
                    {/* Navy Blue underline that slides in on hover */}
                       </span>
                  
                  {/* Glowing Fill Arrow Button */}
                  <div className="w-9 h-9 rounded-full bg-orange-50 border border-orange-100 text-orange-500  group-hover:shadow-[0_6px_15px_rgba(243,121,10,0.4)] group-hover:text-white flex items-center justify-center transition-all duration-400">
                    <svg className="w-4 h-4 transform transition-transform duration-400 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>

                </div>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}