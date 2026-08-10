import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      // Force3D pushes the animation to the GPU to stop lagging
      gsap.fromTo('.trade-image-left', 
        { opacity: 0, x: -50 }, // Shortened distance for smoother rendering
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', force3D: true, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );

      // Animate the right list items stagger
      gsap.fromTo('.trade-list-item', 
        { opacity: 0, x: 50 }, // Shortened distance
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', force3D: true, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );

      // Added animation for the button to match the flow
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
    <section ref={sectionRef} className="w-full bg-slate-50 py-15 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Title */}
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] mb-4">What We Trade</h2>
          <p className=" text-slate-700 text-md leading-relaxed mb-8">
            Our core focus is delivering high-demand consumer products with efficiency, reliability, and trust. With a sharp eye on compliance, we ensure seamless transactions that keep global markets supplied.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-22 items-center">
          
          {/* Left Large Image */}
          <div className="trade-image-left w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl relative">
            <img src={mainImage} alt="Global Trading" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/40 to-transparent"></div>
          </div>

          {/* Right List */}
          <div className="flex flex-col gap-4">
            {tradeItems.map((item, index) => (
              <div key={index} className="trade-list-item flex items-center bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group cursor-pointer">
                
                {/* Icon Placeholder (or small image) */}
                <div className="w-16 h-16 rounded-xl bg-orange-50 flex-shrink-0 flex items-center justify-center overflow-hidden">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 px-6">
                  <h3 className="text-xl font-bold text-[#0B1E3A] mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>

                {/* Arrow Icon */}
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            ))}

             <div className="slide-anim flex flex-col mt-4">
                <span className="brand-button bg-orange-500 w-max cursor-pointer">
                  Discuss A Trade
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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