import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// All data is stored here. 
// Features the exact data from your Silvermax screenshots, plus 
// relevant dummy data for the other categories.
// ============================================================================

const manufacturingDataStore = {
  "silvermax": {
    kicker: "MODERN MANUFACTURING",
    title: "Empowering sustainable\ngrowth in industry",
    description: "We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.",
    bgImage: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop", // Industrial factory background
    tabs: [
      {
        name: "Super Platinum",
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
        desc: "Precision-coated with multiple layers of platinum for enhanced comfort and longer blade life.",
        bullets: [
          "SMP900 – Durable, comfort-focused blade",
          "DE1P306 – Sharp and balanced daily use",
          "SMP400L – Long blade with smooth glide",
          "SMP400 – Platinum-coated for consistency",
          "SMP300 – Comfort edge with control",
          "SMP200 – Reliable entry-level precision",
          "SE1P305 – Slim blade for fine detailing",
          "SE1P306 – Edge-retaining platinum layer"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Stainless Steel",
        desc: "Built for everyday shaving performance, these blades offer clean, consistent results with corrosion resistance.",
        bullets: [
          "SMS100 – Reliable stainless daily blade",
          "DE1S315 – Cost-efficient bulk performer",
          "DE1S306 – Rust-resistant for humid use",
          "DE1S307 – Smooth, skin-safe precision",
          "DE1S316 – Long-lasting edge retention",
          "SE1S301 – Compact, lightweight design"
        ],
        image: "https://images.unsplash.com/photo-1494412519320-aa3da6751270?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Accessories",
        desc: "From reusable 3-piece metal razors to ergonomic disposables, Silvermax razors are built for grip, control, and comfort.",
        bullets: [
          "3-Piece Metal Razor – Classic, durable metal build",
          "Click Razor – Cartridge-ready with ergonomic grip"
        ],
        image: "https://images.unsplash.com/photo-1573511860302-28c5243198e6?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Toiletteries",
        desc: "Premium grooming essentials formulated to complement your daily shaving experience.",
        bullets: [
          "Shaving Cream – Rich lather for smooth glide",
          "Aftershave Balm – Soothing post-shave protection",
          "Alum Block – Natural astringent for minor nicks"
        ],
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  "automobiles": {
    kicker: "AUTOMOTIVE MANUFACTURING",
    title: "Precision engineering\nfor modern mobility",
    description: "Delivering high-performance automotive components and fully assembled units. Our manufacturing processes ensure strict adherence to international safety and quality standards.",
    bgImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop",
    tabs: [
      {
        name: "Two Wheelers",
        desc: "High-performance motorcycles and scooters built for urban mobility and long-distance endurance.",
        bullets: [
          "Street Bikes – Optimized for daily commuting",
          "Sport Models – High RPM and aerodynamic design",
          "Scooters – Maximum fuel efficiency"
        ],
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Three Wheelers",
        desc: "Reliable commercial and passenger three-wheelers designed for heavy payloads and rough terrains.",
        bullets: [
          "Cargo Units – Heavy-duty suspension systems",
          "Passenger Auto – Comfortable seating capacity",
          "Electric Auto – Zero emissions transport"
        ],
        image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Spare Parts",
        desc: "OEM-standard spare parts manufactured under strict quality control for all vehicle types.",
        bullets: [
          "Brake Pads – High friction, low wear materials",
          "Filters – Oil, air, and cabin filtration",
          "Suspension Kits – Durable shock absorbers"
        ],
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  "perfumery": {
    kicker: "FRAGRANCE PRODUCTION",
    title: "Mastering the art\nof luxury perfumery",
    description: "From ingredient sourcing to final bottling, our state-of-the-art facilities produce world-class fragrances for retail and private label markets.",
    bgImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop",
    tabs: [
      {
        name: "Luxury Perfumes",
        desc: "High-concentration Eau de Parfum crafted with rare, globally sourced ingredients.",
        bullets: [
          "Oud Collection – Rich, woody middle eastern profiles",
          "Floral Series – Delicate and long-lasting sillage",
          "Citrus Blends – Fresh, vibrant top notes"
        ],
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Perfume Oils",
        desc: "Pure, undiluted fragrance oils (Attars) designed for a deeper, more intimate scent experience.",
        bullets: [
          "Sandalwood Extracts – Pure and ethically sourced",
          "Musk Oils – Deep, animalic base notes",
          "Roll-on Applications – Convenient and travel-friendly"
        ],
        image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  "personal-care": {
    kicker: "FMCG PRODUCTION",
    title: "Formulating safety\nand everyday wellness",
    description: "State-of-the-art manufacturing of cosmetics, skincare, and daily hygiene products ensuring absolute safety, efficacy, and global compliance.",
    bgImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop",
    tabs: [
      {
        name: "Skincare",
        desc: "Dermatologically tested creams, lotions, and serums for all skin types.",
        bullets: [
          "Moisturizing Lotions – 24-hour hydration formulas",
          "Anti-Aging Creams – Peptide and retinol blends",
          "Sun Protection – Broad spectrum SPF50+"
        ],
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Haircare",
        desc: "Advanced shampoos and conditioners formulated to nourish, protect, and repair.",
        bullets: [
          "Sulfate-Free Shampoos – Gentle daily cleansing",
          "Deep Conditioners – Keratin repair technology",
          "Styling Gels – Strong hold without flaking"
        ],
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
};

export default function ManufacturingShowcase({ category = "silvermax" }) {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  
  // Safely grab the data based on the category passed in
  const data = manufacturingDataStore[category] || manufacturingDataStore["silvermax"];
  const currentTab = data.tabs[activeTab];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Background and Header Reveal
      gsap.fromTo('.manu-header', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
      
      // White Container Reveal
      gsap.fromTo('.manu-container', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 60%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  // Simple animation when switching tabs
  useEffect(() => {
    gsap.fromTo('.tab-content-anim',
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [activeTab]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="relative w-full bg-[#111111] font-sans pt-24 md:pt-32">
      
      {/* ======================================================= */}
      {/* BACKGROUND IMAGE & HEADER AREA                          */}
      {/* ======================================================= */}
      <div className="absolute top-0 left-0 w-full h-[60%] lg:h-[70%] z-0">
        <img 
          src={data.bgImage} 
          alt="Manufacturing Background" 
          className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111]/80 to-[#111111]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] mb-12 lg:mb-20">
        <div className="manu-header flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Left Title */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              {/* Gear Icon */}
              <svg className="w-5 h-5 text-[#f04f36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                {data.kicker}
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] whitespace-pre-line">
              {data.title}
            </h2>
          </div>
          
          {/* Right Description */}
          <div className="w-full lg:w-[40%]">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================= */}
      {/* MAIN WHITE CONTAINER & TABS                             */}
      {/* ======================================================= */}
      <div className="manu-container relative z-20 max-w-[1400px] mx-auto px-[clamp(1rem,3vw,4rem)] pb-20">
        <div className="w-full bg-white rounded-t-[1.5rem] md:rounded-t-[2.5rem] rounded-b-[1.5rem] md:rounded-b-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
          
          {/* TABS ROW */}
          <div className="flex w-full overflow-x-auto no-scrollbar border-b border-slate-200">
            {data.tabs.map((tab, index) => {
              const isActive = index === activeTab;
              return (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-[140px] md:min-w-0 py-5 md:py-6 px-4 font-bold text-sm md:text-lg text-center transition-all duration-300 border-r border-slate-100 last:border-none
                    ${isActive 
                      ? 'bg-orange-500 text-white shadow-inner' 
                      : 'bg-white text-[#1c2331] hover:bg-slate-50'
                    }
                  `}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* TAB CONTENT AREA */}
          <div className="tab-content-anim flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 md:p-12 lg:p-16">
            
            {/* Left: Text & Bullets */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10">
                {currentTab.desc}
              </p>
              
              <ul className="flex flex-col gap-5 w-full">
                {currentTab.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    {/* Custom Orange Seal/Checkmark Icon (Matched to screenshot) */}
                    <svg className="w-6 h-6 text-[#f59e0b] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l2.4 2.4 3.2-.8.8 3.2 2.4 2.4-2.4 2.4-.8 3.2-3.2-.8-2.4 2.4-2.4-2.4-3.2.8-.8-3.2-2.4-2.4 2.4-2.4.8-3.2 3.2.8L12 2z" />
                    </svg>
                    <span className="text-[#1c2331] font-medium text-sm md:text-base leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image Carousel Mockup */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 group shadow-lg border border-slate-100">
                
                {/* Image */}
                <img 
                  src={currentTab.image} 
                  alt={currentTab.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay for Arrows */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                {/* Left Arrow */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                </button>

                {/* Right Arrow */}
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </button>

                {/* Carousel Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}