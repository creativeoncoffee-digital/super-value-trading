import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// ============================================================================

const manufacturingDataStore = {
  "silvermax": {
    kicker: "MODERN MANUFACTURING",
    title: "Empowering sustainable\ngrowth in industry",
    bgImage: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop",
    headerFeatures: [
      { title: "Precision\nManufacturing", desc: "High-quality, accurate\nproduction every time.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
      { title: "Advanced\nAutomation", desc: "Smart technology\nfor higher efficiency.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
      { title: "Custom Product\nDesign", desc: "Tailored solutions\nbuilt for your needs.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
      { title: "Efficient\nLogistics", desc: "Reliable delivery\nacross the globe.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ],
    tabs: [
      {
        name: "Super Platinum",
        kicker: "OUR MOST ADVANCED LINE",
        heading: "Super Platinum\nExcellence",
        desc: "Our most advanced line, combining special steel and cryogenic coating for ultra-smooth, irritation-free shaves.",
        bullets: [
          "DE1P317 – Ultra-Durable | Clean Cut | Razor-Sharp Edge",
          "DE1P314 – Platinum Finish | Superior Smoothness",
          "SE1P304 – Enhanced Grip | Balanced Sharpness"
        ],
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Platinum",
        kicker: "RELIABLE PRECISION",
        heading: "Platinum Coated\nDurability",
        desc: "Precision-coated with multiple layers of platinum for enhanced comfort and longer blade life.",
        bullets: [
          "SMP900 – Durable, comfort-focused blade",
          "DE1P306 – Sharp and balanced daily use",
          "SMP400 – Platinum-coated for consistency"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Stainless Steel",
        kicker: "EVERYDAY PERFORMANCE",
        heading: "Stainless Steel\nReliability",
        desc: "Built for everyday shaving performance, these blades offer clean, consistent results with corrosion resistance.",
        bullets: [
          "SMS100 – Reliable stainless daily blade",
          "DE1S315 – Cost-efficient bulk performer",
          "SE1S301 – Compact, lightweight design"
        ],
        image: "https://images.unsplash.com/photo-1494412519320-aa3da6751270?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Accessories",
        kicker: "COMPLETE GROOMING",
        heading: "Ergonomic Razors\n& Handles",
        desc: "From reusable 3-piece metal razors to ergonomic disposables, Silvermax razors are built for grip, control, and comfort.",
        bullets: [
          "3-Piece Metal Razor – Classic, durable metal build",
          "Click Razor – Cartridge-ready with ergonomic grip"
        ],
        image: "https://images.unsplash.com/photo-1573511860302-28c5243198e6?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },

};

export default function ManufacturingShowcase({ category = "silvermax" }) {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  
  // FIX 1: Safely format category to lowercase to prevent capitalization bugs
  const safeCategory = category ? category.toLowerCase().trim() : "silvermax";
  const data = manufacturingDataStore[safeCategory] || manufacturingDataStore["silvermax"];

  // FIX 2: Reset the active tab to 0 whenever the category changes.
  // This prevents crashes if you switch from a 4-tab category to a 2-tab category.
  useEffect(() => {
    setActiveTab(0);
  }, [safeCategory]);

  // Safely grab the current tab to render, falling back to tab 0 if out of bounds
  const currentTab = data.tabs[activeTab] || data.tabs[0];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      gsap.fromTo('.manu-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
      
      gsap.fromTo('.floating-tab',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: containerRef.current, start: 'top 60%' } }
      );

      gsap.fromTo('.manu-container', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 60%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  useEffect(() => {
    gsap.fromTo('.tab-content-anim',
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [activeTab]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="relative w-full bg-[#0A101D] font-sans pt-24 md:pt-32 pb-24">
      
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-[70vh] z-0">
        <img 
          src={data.bgImage} 
          alt="Manufacturing Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A101D] via-[#0A101D]/80 to-[#0A101D]"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] mb-16 lg:mb-24">
        <div className="manu-header flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Title */}
          <div className="flex flex-col items-start w-full lg:w-[45%]">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                {data.kicker}
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6 whitespace-pre-line">
              {data.title}
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg">
              We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing to custom product design and efficient logistics.
            </p>
          </div>
          
          {/* Right 4-Column Icons Grid (Safely maps only if array exists) */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {data.headerFeatures?.map((feat, i) => (
              <div key={i} className="flex flex-col items-start md:items-center text-left md:text-center border-l-2 md:border-l-0 md:border-t-2 border-orange-500/30 pl-4 md:pl-0 md:pt-4">
                <svg className="w-8 h-8 text-orange-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feat.icon}></path>
                </svg>
                <h4 className="text-white font-bold text-sm leading-tight mb-2 whitespace-pre-line">{feat.title}</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed whitespace-pre-line">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Tabs */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] mb-8">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {data.tabs.map((tab, index) => {
            const isActive = index === activeTab;
            return (
              <button 
                key={index}
                onClick={() => setActiveTab(index)}
                className={`floating-tab flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 border
                  ${isActive 
                    ? 'bg-orange-500 border-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.4)]' 
                    : 'bg-[#162032] border-white/5 text-slate-300 hover:text-white hover:bg-[#1E2B41] hover:border-white/10'
                  }
                `}
              >
                <svg className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l3 5 5 3-5 3-3 5-3-5-5-3 5-3 3-5z" /></svg>
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main White Container */}
      <div className="manu-container relative z-20 max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="w-full bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 md:p-12 lg:p-16 border border-slate-100">
          <div className="tab-content-anim flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <h4 className="text-[#2b6cb0] font-bold uppercase tracking-widest text-xs mb-3">
                {currentTab?.kicker}
              </h4>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1E3A] leading-[1.1] mb-6 whitespace-pre-line tracking-tight">
                {currentTab?.heading}
              </h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                {currentTab?.desc}
              </p>
              <ul className="flex flex-col gap-4 w-full mb-10">
                {currentTab?.bullets?.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="text-[#0B1E3A] font-semibold text-sm md:text-base leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="bg-[#0B1E3A] hover:bg-orange-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors duration-300 flex items-center gap-2 shadow-lg">
                Explore Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-100 group">
                <img 
                  src={currentTab?.image} 
                  alt={currentTab?.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D]/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}