import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  // Data for the Top Dark Statistics Bar
  const stats = [
    {
      number: "500+",
      title: "Products",
      desc: "Wide range of trusted personal care essentials",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      number: "50+",
      title: "Global Brands",
      desc: "Partnered with world leading brands",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      number: "30+",
      title: "Countries",
      desc: "Delivering to global markets efficiently",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      number: "100%",
      title: "Quality Assured",
      desc: "Guaranteed authenticity and safety",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  // Data for the Left Column Feature List
  const features = [
    {
      title: "Consistent Product Quality",
      desc: "Every product meets strict quality and safety standards.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    {
      title: "Reliable Supply Chain",
      desc: "On-time delivery with secure and efficient logistics.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    },
    {
      title: "Competitive Pricing",
      desc: "Best value products to maximize your business profit.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: "Customer Focused",
      desc: "Dedicated support for all your business needs.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Stats Bar Reveal
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.stats-bar', start: 'top 90%' } }
      );

      // 2. Left Content Reveal
      gsap.fromTo('.left-content',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } }
      );

      // 3. Right Image Reveal
      gsap.fromTo('.right-img',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } }
      );

      // 4. Floating Card Pop-in
      gsap.fromTo('.floating-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.main-content', start: 'top 80%' } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white font-sans overflow-hidden">
      
      {/* =========================================
          TOP SECTION: DARK STATS BAR
      ========================================= */}
      <div className="stats-bar w-full bg-[#071326] py-12 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-700/50">
          
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex items-start gap-4 px-0 lg:px-8 first:pl-0">
              <div className="text-orange-500 flex-shrink-0 mt-1">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl md:text-3xl leading-none mb-1">
                  {stat.number}
                </span>
                <span className="text-orange-500 font-semibold text-sm mb-2">
                  {stat.title}
                </span>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* =========================================
          BOTTOM SECTION: CONTENT & IMAGE
      ========================================= */}
      <div className="main-content max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-24 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center lg:items-start">
        
        {/* LEFT COLUMN: Text & Features */}
        <div className="w-full lg:w-5/12 flex flex-col pr-0 lg:pr-8">
          
          <h2 className="left-content text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1E3A] leading-tight mb-6">
            Why Businesses Choose <br />
            <span className="inline-block w-8 h-[2px] bg-orange-500 mr-3 align-middle"></span>
            Super Value
          </h2>
          
          <p className="left-content text-slate-500 text-base leading-relaxed mb-10 max-w-md">
            We are committed to providing businesses with reliable products, seamless supply and unbeatable value.
          </p>

          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <div key={index} className="left-content flex items-start gap-5">
                {/* Minimalist Grey Icon */}
                <div className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#0B1E3A] font-bold text-base mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Image & Floating Card */}
        <div className="w-full lg:w-7/12 relative mt-8 lg:mt-0 pb-16 lg:pb-0">
          
          {/* Main Image */}
          <div className="right-img w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Replace with your actual cosmetics/bottles image */}
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop" 
              alt="Premium personal care and cosmetic products" 
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>

          {/* Overlapping White Floating Card */}
          <div className="floating-card absolute bottom-0 left-4 md:left-10 lg:-left-12 translate-y-12 lg:translate-y-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 max-w-[360px] md:max-w-[400px] border border-slate-50 z-10">
            <h3 className="text-2xl font-bold text-[#0B1E3A] leading-tight mb-4">
              Partner with us for lasting success
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              We empower your business with premium products, trusted service and long-term growth.
            </p>
            
            <button className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 group shadow-lg shadow-orange-500/20 w-fit">
              Become a Partner
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}