import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import mainImage from '../../assets/Home/WeTradePic.png';
import icon1 from '../../assets/img/grooming-flatlay.jpg';
import icon2 from '../../assets/img/perfume-red.jpg';
import icon3 from '../../assets/img/perfume-oils.jpg';
import icon4 from '../../assets/img/tires.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeTrade() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.trade-image-left', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', force3D: true, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );

      gsap.fromTo('.trade-list-item', 
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', force3D: true, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );

      gsap.fromTo('.slide-anim', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out', force3D: true, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tradeItems = [
    { title: "FMCG & Personal Care", desc: "Razor blades, grooming systems, skincare, and everyday FMCG products for reliable trade supply.", img: icon1 },
    { title: "Perfumery & Fragrances", desc: "Luxury perfumes, perfume oils, and private-label fragrance development for global markets.", img: icon2 },
    { title: "Consumer Goods", desc: "A diverse portfolio spanning specialty cosmetics, beauty goods, and private-label opportunities.", img: icon3 },
    { title: "Automobiles & Parts", desc: "Two-wheelers, three-wheelers, EVs, tires, tubes, and automotive parts across trade corridors.", img: icon4 },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-slate-50 py-16 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
        
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] mb-4 tracking-tight">What We Trade</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 md:mb-8 max-w-3xl">
            Our core focus is delivering high-demand consumer products with efficiency, reliability, and trust. With a sharp eye on compliance, we ensure seamless transactions that keep global markets supplied.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          
          <div className="trade-image-left w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img src={mainImage} alt="Global Trading" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/40 to-transparent"></div>
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {tradeItems.map((item, index) => (
              <div key={index} className="trade-list-item p-5 md:p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group cursor-pointer">
                
                {/* FIX: Highly responsive wrapper to align image and title on mobile */}
                <div className="flex items-start md:items-center gap-4">
                  
                  {/* Image/Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden shadow-inner">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Text & Arrows */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-6">
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-center w-full">
                        <h3 className="text-lg md:text-xl font-bold text-[#0B1E3A] md:mb-1">{item.title}</h3>
                        
                        {/* Mobile-only Arrow (appears next to title) */}
                        <div className="md:hidden w-8 h-8 rounded-full bg-slate-50 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mt-1 md:mt-0 pr-2 md:pr-0">{item.desc}</p>
                    </div>

                    {/* Desktop-only Arrow (appears on the far right) */}
                    <div className="hidden md:flex w-10 h-10 rounded-full bg-slate-50 flex-shrink-0 items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>

                  </div>
                </div>

              </div>
            ))}

            <div className="slide-anim flex flex-col mt-2 md:mt-4">
              <span className="brand-button bg-orange-500 text-white w-max cursor-pointer shadow-lg shadow-orange-500/20 px-6 py-3">
                Discuss A Trade
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 12h15"></path>
                </svg>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}