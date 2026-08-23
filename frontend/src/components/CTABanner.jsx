import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const ctaSlidesDataStore = {
  "perfumery": [
    {
      title: "Ready to Create Your\nPerfume Brand?",
      desc: "Let's turn your vision into a successful fragrance brand.\nFrom concept to creation – we're with you all the way.",
      btnText: "Start Your Brand Journey",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Elevate Your Signature\nScent Today.",
      desc: "Access premium ingredients and world-class manufacturing.\nLaunch a luxury collection under your own name.",
      btnText: "Explore Private Label",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  "automobiles": [
    {
      title: "Ready to Scale Your\nAutomotive Brand?",
      desc: "Partner with us for world-class manufacturing, OEM parts, and reliable two & three wheeler distribution.",
      btnText: "Start Sourcing Now",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Expand Your Private\nLabel Portfolio.",
      desc: "We manufacture premium tires, tubes, and spare parts packaged entirely under your brand identity.",
      btnText: "Explore Private Label",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  "silvermax": [
    {
      title: "Ready to Distribute\nPremium Blades?",
      desc: "Partner with us for world-class grooming solutions and high-margin wholesale distribution.",
      btnText: "Become a Distributor",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Manufacture Your Own\nGrooming Line.",
      desc: "Utilize our state-of-the-art facilities to create precision blades packaged entirely under your brand.",
      btnText: "Start OEM Project",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  "personal-care": [
    {
      title: "Ready to Launch Your\nPersonal Care Brand?",
      desc: "From daily essentials to premium cosmetics. Build a brand that stands out on the shelves.",
      btnText: "Start Your Brand Journey",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Scale Your FMCG\nDistribution Worldwide.",
      desc: "Tap into our massive global supply chain to source reliable, high-quality daily care products.",
      btnText: "Become a Partner",
      btnLink: "/contact",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop"
    }
  ]
};

export default function CTABanner({ category = "perfumery" }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = ctaSlidesDataStore[category] || ctaSlidesDataStore["perfumery"];

  useEffect(() => {
    if (data.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [data.length]);

  if (!data) return null;

  return (
    <section className="relative w-full h-[400px] bg-[#0A101D] overflow-hidden font-sans">
      
      {data.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title.replace('\n', ' ')} 
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${isActive ? 'scale-105' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07101E] via-[#07101E]/80 to-transparent lg:w-[70%]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101E]/80 via-transparent to-transparent md:hidden"></div>
            </div>

            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
              <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.1] mb-6 whitespace-pre-line drop-shadow-lg">
                  {slide.title}
                </h2>
                
                <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-10 whitespace-pre-line drop-shadow-md">
                  {slide.desc}
                </p>
                
                <Link 
                  to={slide.btnLink}
                  className="inline-flex items-center gap-3 bg-[#f3790a] hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded transition-all duration-300 shadow-[0_4px_20px_rgba(243,121,10,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(243,121,10,0.6)]"
                >
                  {slide.btnText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>

              </div>
            </div>
          </div>
        );
      })}

    </section>
  );
}