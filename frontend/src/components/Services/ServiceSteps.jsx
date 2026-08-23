import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// All 4 categories currently use the exact same data from your screenshot.
// You can update the text for automobiles, silvermax, and personal-care later.
// ============================================================================

const stepsDataStore = {
  "perfumery": [
    {
      step: "01",
      title: "Direct Supply",
      desc: "Purchase premium perfumes, oils, sprays, deodorants and other perfumery products directly from us.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    },
    {
      step: "02",
      title: "Distribution &\nGlobal Partnerships",
      desc: "Expand your reach with our global distribution network across UAE and international markets.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      step: "03",
      title: "Private Label / OEM\nManufacturing",
      desc: "Launch your own brand with customized products and packaging tailored to your market needs.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    }
  ],
  "automobiles": [
    {
      step: "01",
      title: "Direct Supply",
      desc: "Purchase premium perfumes, oils, sprays, deodorants and other perfumery products directly from us.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    },
    {
      step: "02",
      title: "Distribution &\nGlobal Partnerships",
      desc: "Expand your reach with our global distribution network across UAE and international markets.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      step: "03",
      title: "Private Label / OEM\nManufacturing",
      desc: "Launch your own brand with customized products and packaging tailored to your market needs.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    }
  ],
  "silvermax": [
    {
      step: "01",
      title: "Direct Supply",
      desc: "Purchase premium perfumes, oils, sprays, deodorants and other perfumery products directly from us.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    },
    {
      step: "02",
      title: "Distribution &\nGlobal Partnerships",
      desc: "Expand your reach with our global distribution network across UAE and international markets.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      step: "03",
      title: "Private Label / OEM\nManufacturing",
      desc: "Launch your own brand with customized products and packaging tailored to your market needs.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    }
  ],
  "personal-care": [
    {
      step: "01",
      title: "Direct Supply",
      desc: "Purchase premium perfumes, oils, sprays, deodorants and other perfumery products directly from us.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    },
    {
      step: "02",
      title: "Distribution &\nGlobal Partnerships",
      desc: "Expand your reach with our global distribution network across UAE and international markets.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      step: "03",
      title: "Private Label / OEM\nManufacturing",
      desc: "Launch your own brand with customized products and packaging tailored to your market needs.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    }
  ]
};

export default function ServiceSteps({ category = "perfumery" }) {
  const containerRef = useRef(null);
  
  // Safely grab the data based on the category passed in
  const data = stepsDataStore[category] || stepsDataStore["perfumery"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Staggered reveal for the columns
      gsap.fromTo('.step-col', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-24 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          
          {data.map((item, index) => (
            <div key={index} className="step-col relative flex flex-col items-start pt-6">
              
              {/* Giant Faded Number Background (Exact match to the screenshot's style) */}
              <div className="absolute -left-6 md:left-20 top-[-1.5rem] md:top-[-2.5rem] text-[80px] md:text-[100px] font-black text-black/[0.03] select-none z-0 leading-none tracking-tighter">
                {item.step}
              </div>

              {/* Content Wrapper (Sits above the giant number) */}
              <div className="relative z-10 flex flex-col">
                
                {/* Outline Icon */}
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#111111] mb-6 md:mb-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>

                {/* Bold Title */}
                <h3 className="text-xl md:text-[22px] font-bold text-black leading-snug mb-4 whitespace-pre-line">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-800 text-sm md:text-[15px] leading-relaxed max-w-sm">
                  {item.desc}
                </p>
                
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}