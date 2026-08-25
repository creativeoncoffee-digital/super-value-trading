import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Import & Export Management",
    desc: "Seamless handling of global trade operations with compliance and efficiency.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "International Product Sourcing",
    desc: "We source the right products from the right markets for your business.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    title: "Business Setup & Market Entry",
    desc: "Helping you establish your presence in new international markets.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  },
  {
    title: "Distributor Search & Appointment",
    desc: "Connect with trusted distributors and channel partners globally.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    title: "Product Launch & Go-to-Market",
    desc: "End-to-end support to launch your product successfully in new markets.",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  },
  {
    title: "Sales Strategy & Development",
    desc: "Strategic planning and execution to grow your sales and market share.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Team Recruitment & Sales Setup",
    desc: "Build high-performing teams on the ground to drive your business forward.",
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
  },
  {
    title: "Risk Management & Consulting",
    desc: "Mitigate risks and make informed decisions with expert guidance.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Logistics & Supply Partner Selection",
    desc: "Reliable logistics and supply chain partners for smooth operations.",
    icon: "M8 14H5V6h10v8h-1m-2 0v-2h4v2m-4 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0m10-2h3l2 3v3h-2M15 10h4l1 2v2M19 14a2 2 0 11-4 0m4 0a2 2 0 10-4 0"
  },
  {
    title: "End-to-End Trade Support",
    desc: "Complete support across documentation, compliance, operations & more.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  }
];

export default function OurServices() {
  const sectionRef = useRef(null);

  // State to track the auto-hover wave
  const [autoHoverIndex, setAutoHoverIndex] = useState(-1);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.services-header-anim',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // Staggered Cards Reveal
      gsap.fromTo('.service-card-anim',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.services-grid', start: 'top 85%' } }
      );

      // AUTO-HOVER WAVE LOGIC
      ScrollTrigger.create({
        trigger: '.services-grid',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          setTimeout(() => {
            servicesData.forEach((_, i) => {
              // Trigger hover ON
              setTimeout(() => setAutoHoverIndex(i), i * 150);
              // Trigger hover OFF slightly later
              setTimeout(() => {
                setAutoHoverIndex(prev => prev === i ? -1 : prev);
              }, i * 150 + 350); 
            });
          }, 1200); // Wait for the fade-in animation to complete
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8fafc] py-10 md:pb-15  font-sans  overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* ======================================================= */}
        {/* HEADER SECTION                                          */}
        {/* ======================================================= */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl">
          <div className="services-header-anim flex items-center gap-4 mb-4">
            {/* <span className="w-8 h-[2px] bg-orange-500"></span> */}
            <h4 className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-xs">
              Our Services
            </h4>
            {/* <span className="w-8 h-[2px] bg-orange-500"></span> */}
          </div>

          <h2 className="services-header-anim text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#0B1E3A] tracking-tight leading-tight">
            Comprehensive Solutions for Global Business
          </h2>
        </div>

        {/* ======================================================= */}
        {/* 5-COLUMN SERVICES GRID                                  */}
        {/* ======================================================= */}
        <div className="services-grid w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {servicesData.map((service, index) => {
            const isAutoHovered = autoHoverIndex === index;

            return (
              <div 
                key={index}
                className={`service-card-anim group bg-white rounded-[1.25rem] p-5 lg:p-6 border border-slate-100 transition-all duration-300 ease-out flex flex-col cursor-default
                  ${isAutoHovered 
                    ? '-translate-y-1.5 shadow-[0_15px_35px_rgba(11,30,58,0.08)]' 
                    : 'shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(11,30,58,0.08)] hover:-translate-y-1.5'
                  }
                `}
              >
                
                <div className="flex lg:flex-col items-start gap-4 mb-4 lg:mb-5">
                  {/* FIX: Explicit transition classes ensuring perfect contrast on hover */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm
                    ${isAutoHovered 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white'
                    }
                  `}>
                    <svg 
                      className={`w-6 h-6 transition-colors duration-300
                        ${isAutoHovered 
                          ? 'text-white stroke-white' 
                          : 'text-orange-500 group-hover:text-white group-hover:stroke-white'
                        }
                      `} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                    </svg>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className={`font-bold text-[14px] md:text-[15px] leading-snug transition-colors duration-300 self-center lg:self-start pt-1 lg:pt-0
                    ${isAutoHovered ? 'text-orange-500' : 'text-[#0B1E3A] group-hover:text-orange-500'}
                  `}>
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <p className="text-slate-500 text-xs md:text-[13px] leading-relaxed">
                  {service.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}