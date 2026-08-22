import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// Category-specific data for the "Create Your Own Brand" section.
// Automatically renders the correct data based on the category prop.
// ============================================================================

const privateLabelDataStore = {
  "perfumery": {
    title: "Create Your Own\nPerfume Brand With Us",
    desc: "Whether you're starting small or aiming big, we make it possible. From just $1 perfumes to luxury premium collections – the choice is yours.",
    bullets: [
      "Low MOQ – Start from just 100 units",
      "Custom Fragrance Development",
      "Custom Packaging & Bottle Design",
      "Premium Ingredients from Around the World",
      "Fast Turnaround & On-time Delivery"
    ],
    btnText: "Start Your Brand Journey",
    btnLink: "/contact",
    bgImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop" 
  },
  "automobiles": {
    title: "Build Your Own\nAutomotive Parts Brand",
    desc: "Whether you're expanding your local dealership or launching a global parts network, we provide complete private label manufacturing for tires, tubes, and spare parts.",
    bullets: [
      "Low MOQ – Flexible starting quantities",
      "Custom Product Engineering",
      "Custom Packaging & Branding",
      "OEM Standard Manufacturing",
      "Fast Turnaround & Global Shipping"
    ],
    btnText: "Start Your Brand Journey",
    btnLink: "/contact",
    bgImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop" 
  },
  "personal-care": {
    title: "Launch Your Own\nPersonal Care Brand",
    desc: "From daily essentials to premium cosmetics, we help you formulate, design, and manufacture your own line of personal care and FMCG products.",
    bullets: [
      "Low MOQ – Perfect for market testing",
      "Custom Formulation & Mixing",
      "Custom Packaging & Label Design",
      "Premium & Safe Ingredients",
      "Fast Turnaround & On-time Delivery"
    ],
    btnText: "Start Your Brand Journey",
    btnLink: "/contact",
    bgImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop" 
  },
  "silvermax": {
    title: "Create Your Own\nPremium Grooming Brand",
    desc: "Step into the grooming market with your own brand of high-precision blades and shaving systems, manufactured to global standards.",
    bullets: [
      "Low MOQ – Scalable production",
      "Precision Blade Engineering",
      "Custom Packaging & Blister Cards",
      "High-Grade Stainless Steel",
      "Fast Turnaround & On-time Delivery"
    ],
    btnText: "Start Your Brand Journey",
    btnLink: "/contact",
    bgImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop" 
  }
};

export default function CreateYourBrand({ category = "perfumery" }) {
  const containerRef = useRef(null);
  
  // Safely grab the data based on the category passed in
  const data = privateLabelDataStore[category] || privateLabelDataStore["perfumery"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Content Reveal Animation
      gsap.fromTo('.brand-anim', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-[#111111] flex flex-col lg:flex-row items-stretch font-sans overflow-hidden">
      
      {/* ======================================================= */}
      {/* LEFT SIDE: TEXT CONTENT                                 */}
      {/* ======================================================= */}
      <div className="w-full lg:w-[45%] flex justify-center lg:justify-end py-20 px-8 lg:pr-16 xl:pr-24">
        <div className="w-full max-w-[500px] flex flex-col items-start">
          
          {/* Title */}
          <h2 className="brand-anim text-3xl md:text-[40px] font-bold text-white leading-[1.2] tracking-tight whitespace-pre-line">
            {data.title}
          </h2>
          
          {/* Red Divider Line */}
          <div className="brand-anim w-12 h-1 bg-[#e84e36] mt-6 mb-6"></div>
          
          {/* Description */}
          <p className="brand-anim text-slate-300 text-sm md:text-base leading-relaxed mb-8">
            {data.desc}
          </p>

          {/* Bullet Points List */}
          <ul className="brand-anim flex flex-col gap-4 mb-10 w-full">
            {data.bullets.map((bullet, index) => (
              <li key={index} className="flex items-center gap-3">
                
                {/* Gold/Yellow Outline Checkmark Icon */}
                <svg className="w-5 h-5 text-[#d4af37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12.5l3 3 5-6" />
                </svg>
                
                <span className="text-white font-medium text-sm md:text-[15px]">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Action Button (Olive Green/Gold Outline) */}
          <div className="brand-anim">
            <Link 
              to={data.btnLink}
              className="inline-flex items-center gap-3 bg-[#242918] border border-[#7a6a43] text-white text-sm font-semibold py-3 px-6 rounded-md hover:bg-[#2d3319] hover:border-[#a68c53] transition-all duration-300"
            >
              {data.btnText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* ======================================================= */}
      {/* RIGHT SIDE: FULL HEIGHT IMAGE                           */}
      {/* ======================================================= */}
      <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
        
        {/* The Image */}
        <img 
          src={data.bgImage} 
          alt={data.title.replace('\n', ' ')} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional gradient to seamlessly blend the left dark background into the right image on large screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/40 to-transparent w-48 hidden lg:block"></div>
        {/* Optional gradient for mobile to blend top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111]/40 to-transparent h-32 block lg:hidden"></div>
      </div>

    </section>
  );
}