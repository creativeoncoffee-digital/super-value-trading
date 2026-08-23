import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// ============================================================================
// INTERNAL DATA STORE
// All hero data is now managed directly inside this file.
//
// VIDEO & MULTIPLE BANNER INSTRUCTIONS:
// - To use an image: { type: 'image', src: 'url_here.jpg' }
// - To use a video: { type: 'video', src: 'url_here.mp4' }
// - If you add MORE THAN ONE object to the 'banners' array, the component 
//   will automatically start a continuous rotating slideshow.
// ============================================================================

const heroDataStore = {
  "perfumery": {
    kicker: "CREATE YOUR SIGNATURE",
    titleWhite: "Perfume Brand\nWith Us",
    titleOrange: "",
    description: "From just $1 to Luxury Premium - we help you create your own perfume brand that defines your identity.",
    buttons: [
      { label: "Start Your Brand Journey", link: "/contact", primary: true, arrow: true },
      { label: "Explore Products", link: "/contact", primary: false, arrow: false }
    ],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop' }
    ],
    features: [
      { title: "Premium", desc: "Quality Ingredients" },
      { title: "Custom", desc: "Fragrance Development" },
      { title: "Worldwide", desc: "Delivery" },
      { title: "Low MOQ", desc: "Flexible Orders" }
    ]
  },

  "automobiles": {
    kicker: "GLOBAL MOBILITY & TIRES",
    titleWhite: "Parts &\nAccessories",
    titleOrange: "",
    description: "Reliable parts. Trusted brands. Powerful performance. Your one-stop destination for two & three wheelers and all kinds of spare parts.",
    buttons: [
      { label: "Two & Three Wheelers", link: "/contact", primary: true, arrow: true },
      { label: "Spare Parts & Accessories", link: "/contact", primary: false, arrow: false }
    ],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop' }
    ],
    features: [
      { title: "Wide Range", desc: "Thousands of parts" },
      { title: "Trusted", desc: "Genuine top brands" },
      { title: "Bulk Supply", desc: "Wholesale pricing" },
      { title: "Fast Delivery", desc: "On-time shipping" }
    ]
  },

  "personal-care": {
    kicker: "PREMIUM PERSONAL CARE",
    titleWhite: "FMCG &\nPersonal Care",
    titleOrange: "",
    description: "Premium quality products. Trusted brands. Endless possibilities. Formulated for safety and everyday wellness.",
    buttons: [
      { label: "Explore Range", link: "/contact", primary: true, arrow: true },
      { label: "Partner With Us", link: "/contact", primary: false, arrow: false }
    ],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop' }
    ],
    features: [
      { title: "Wide Range", desc: "Extensive product line" },
      { title: "Trusted", desc: "Partner brands" },
      { title: "Quality", desc: "100% Assured" },
      { title: "Global", desc: "Supply chain" }
    ]
  },

  "silvermax": {
    kicker: "PRECISION GROOMING",
    titleWhite: "Advanced Blade\nManufacturing",
    titleOrange: "",
    description: "Authorized distribution and global supply of premium blades and grooming solutions engineered for absolute precision and comfort.",
    buttons: [
      { label: "Explore Blades", link: "/contact", primary: true, arrow: true },
      { label: "OEM Manufacturing", link: "/contact", primary: false, arrow: false }
    ],
    banners: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop' }
    ],
    features: [
      { title: "Precision", desc: "Engineering" },
      { title: "Trusted", desc: "Global standard" },
      { title: "Wholesale", desc: "Bulk optimized" },
      { title: "Logistics", desc: "Fast shipping" }
    ]
  }
};

// Generic Outline Icons matching the style of the screenshot
const genericIcons = [
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
];

export default function ServiceHero({ category = "perfumery" }) {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Safely grab the data based on the category passed in, default to perfumery
  const data = heroDataStore[category] || heroDataStore["perfumery"];

  // =========================================================
  // AUTO-ROTATING BANNER LOGIC
  // =========================================================
  useEffect(() => {
    if (data.banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.banners.length);
    }, 5000); // Changes image/video every 5 seconds
    return () => clearInterval(interval);
  }, [data.banners.length]);

  // =========================================================
  // GSAP ENTRANCE ANIMATION
  // =========================================================
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-text-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.hero-feature-anim', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.8 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [category]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex flex-col justify-end bg-[#111111] overflow-hidden py-10 font-sans pt-20">
      
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
              {banner.type === 'video' ? (
                <video src={banner.src} autoPlay loop muted playsInline className="w-full h-full object-cover object-right lg:object-center" />
              ) : (
                <img src={banner.src} alt="Hero Background" className="w-full h-full object-cover object-right lg:object-center" />
              )}

              {/* Seamless Dark Gradients masking the left side and bottom */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111] to-transparent lg:w-[65%]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* MAIN FOREGROUND CONTENT                                   */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        {/* Top Text Content */}
        <div className="w-full lg:w-[65%] xl:w-[50%] mb-12">

          {/* <h4 className="hero-text-anim text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3">
            {data.kicker}
          </h4> */}

          <h1 className="hero-text-anim text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6 whitespace-pre-line">
            <span className="text-white block">{data.titleWhite}</span>
            <span className="text-orange-500">{data.titleOrange}</span>
          </h1>

          <p className="hero-text-anim text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            {data.description}
          </p>

          {/* Stacked Features (Icon on Top, Text Below) */}
          <div className="hero-text-anim grid grid-cols-2 md:grid-cols-4 gap-1 mb-8">
            {data.features.map((feat, i) => (
              <div key={i} className="flex flex-col items-start">
                <svg className="w-7 h-7 text-orange-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {genericIcons[i % genericIcons.length]}
                </svg>
                <h4 className="text-white font-bold text-sm leading-tight mb-1">{feat.title}</h4>
                <p className="text-slate-400 text-xs leading-snug">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons Area */}
          {data.buttons && data.buttons.length > 0 && (
            <div className="hero-text-anim flex flex-col sm:flex-row gap-4">
              {data.buttons.map((btn, i) => (
                <Link 
                  key={i} 
                  to={btn.link} 
                  className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded font-bold text-sm transition-all duration-300 ${
                    btn.primary 
                    ? 'bg-[#f3790a] hover:bg-orange-600 text-white' 
                    : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {btn.label}
                  {btn.arrow && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  )}
                </Link>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}