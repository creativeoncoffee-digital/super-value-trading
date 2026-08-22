import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================================================
// INTERNAL DATA STORE
// All hero data is now managed directly inside this file.
//
// HOW TO USE VIDEOS OR MULTIPLE BANNERS:
// - Image: { type: 'image', src: 'url_here.jpg' }
// - Video: { type: 'video', src: 'url_here.mp4' }
// - If you put MORE THAN ONE item in the 'banners' array, they will 
//   automatically auto-rotate every 5 seconds!
// ============================================================================

const heroDataStore = {
  "automobiles": {
 
    titleHighlight: "Automobiles",     // This will be Orange
    titleWhite: "Parts & Accessories", // This will be White
    description: "Reliable parts. Trusted brands. Powerful performance. Your one-stop destination for two & three wheelers and all kinds of spare parts.",
    // buttons: [
    //   { label: "Two & Three Wheelers", link: "/contact", style: "bg-gradient-to-r from-orange-500 to-orange-400 text-white border-none", icon: true },
    //   { label: "Spare Parts & Accessories", link: "/contact", style: "bg-transparent border border-white/20 text-white hover:bg-white/5", icon: true }
    // ],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop' },
      // Example of adding a video or second image for auto-rotation:
      // { type: 'video', src: 'https://www.yourwebsite.com/car-video.mp4' }
    ],
    features: [
      { title: "Wide Product Range", desc: "Thousands of parts under one roof" },
      { title: "Trusted Brands", desc: "Genuine products from top manufacturers" },
      { title: "Bulk Supply", desc: "Wholesale pricing for dealers & distributors" },
      { title: "Fast Delivery", desc: "On-time delivery across the globe" }
    ]
  },

  "perfumery": {
 
    titleHighlight: "PERFUMERY",
    titleWhite: "Create Your Perfume",
    description: "From accessible everyday to Luxury Premium — we help you create your own perfume brand that defines your identity.",
    buttons: [],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop' }
    ],
    features: [
      { title: "Premium Quality Ingredients", desc: "Sourced globally for the best scent" },
      { title: "Custom Fragrance Development", desc: "Signature scent profiles" },
      { title: "Worldwide Delivery", desc: "Secure and insured transit" },
           { title: "Global Supply", desc: "Worldwide export capabilities" }
    ]
  },

  "personal-care": {
    titleHighlight: "FMCG &", 
    titleWhite: "Personal Care",
    description: "Premium quality products. Trusted brands. Endless possibilities.",
    buttons: [],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop' }
    ],
    features: [
      { title: "Wide Range of Products", desc: "Thousands of items available" },
      { title: "Trusted Partner Brands", desc: "Genuine and verified products" },
      { title: "Quality Assured", desc: "100% authentic supply chain" },
      { title: "Global Supply", desc: "Worldwide export capabilities" }
    ]
  },

  "silvermax": {
   
    titleHighlight: "SILVERMAX",
    titleWhite: "Precision Grooming Solutions",
    description: "Authorized distribution and global supply of premium blades and grooming solutions engineered for absolute precision and comfort.",
    buttons: [
      { label: "Explore Blades", link: "/contact", style: "bg-orange-500 text-white border-none hover:bg-orange-600", icon: false }
    ],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop' }
    ],
    features: [
      { title: "Precision Engineering", desc: "High-grade stainless steel" },
      { title: "Trusted Brand", desc: "Global grooming standard" },
      { title: "Bulk Wholesale", desc: "Optimized for distributors" },
      { title: "Global Logistics", desc: "Fast worldwide shipping" }
    ]
  }
};

// Generic icons for the bottom strip
const genericIcons = [
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
];

export default function ServiceHero({ category = "automobiles" }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Safely grab the data based on the category passed in, default to automobiles if missing
  const data = heroDataStore[category] || heroDataStore["automobiles"];

  // =========================================================
  // AUTO-ROTATING BANNER LOGIC
  // =========================================================
  useEffect(() => {
    // Only run the interval if there is more than 1 banner (Image or Video)
    if (data.banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.banners.length);
    }, 5000); // Rotates every 5 seconds

    return () => clearInterval(interval);
  }, [data.banners.length]);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[80vh] flex flex-col justify-end bg-[#07101E] overflow-hidden font-sans pt-32 pb-6">
      
      {/* ========================================================= */}
      {/* BACKGROUND SLIDER (Images & Videos)                       */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0">
        {data.banners.map((banner, index) => {
          const isActive = index === currentSlide;
          
          return (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {/* Renders a video if type is 'video', otherwise renders an image */}
              {banner.type === 'video' ? (
                <video 
                  src={banner.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover object-right lg:object-center"
                />
              ) : (
                <img 
                  src={banner.src} 
                  alt="Hero Background" 
                  className="w-full h-full object-cover object-right lg:object-center"
                />
              )}

              {/* Seamless Dark Gradients: Fades the image perfectly into the dark blue background on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07101E] via-[#07101E]/90 to-transparent lg:w-[70%]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/40 to-transparent"></div>
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* MAIN TEXT CONTENT                                         */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col justify-end h-full">
        
        <div className="w-full lg:w-[65%] xl:w-[55%] mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Eyebrow */}
          <p className="text-slate-300 text-xs md:text-sm font-medium tracking-wide mb-6">
            {data.eyebrow}
          </p>

          {/* Title Area */}
          <h1 className="text-4xl md:text-5xl  font-bold tracking-tight leading-[1.1] mb-6 whitespace-pre-line">
            {data.titleHighlight && (
              <span className="text-orange-500 block mb-2">
                {data.titleHighlight}
              </span>
            )}
            <span className="text-white">
              {data.titleWhite}
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            {data.description}
          </p>

          {/* Buttons Area */}
          {data.buttons && data.buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {data.buttons.map((btn, i) => (
                <Link 
                  key={i} 
                  to={btn.link} 
                  className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${btn.style}`}
                >
                  {btn.icon && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                  )}
                  {btn.label}
                </Link>
              ))}
            </div>
          )}

        </div>

        {/* ========================================================= */}
        {/* BOTTOM FEATURES STRIP                                     */}
        {/* ========================================================= */}
        <div className="w-full border-t border-white/10 pt-8 pb-4 animate-in fade-in duration-1000 delay-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {data.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-4">
                
                {/* Hexagon Outline Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-orange-500/40 flex items-center justify-center text-orange-500 shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {genericIcons[i % genericIcons.length]}
                  </svg>
                </div>
                
                {/* Feature Text */}
                <div className="flex flex-col">
                  <h4 className="text-white font-bold text-sm leading-tight mb-1">{feat.title}</h4>
                  <p className="text-slate-400 text-xs leading-snug">{feat.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}