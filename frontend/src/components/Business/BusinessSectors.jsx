import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import groomingImg from '../../assets/img/grooming-flatlay.jpg';
import perfumeImg from '../../assets/img/perfume-red.jpg'; 
import consumerImg from '../../assets/img/perfume-oils.jpg';
import autoImg from '../../assets/img/tires.jpg';
import warehouseImg from '../../assets/img/warehouse.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function BusinessSectors() {
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const modalBoxRef = useRef(null);
  
  // State to manage the currently selected sector for the modal
  const [selectedSector, setSelectedSector] = useState(null);

  // Expanded Data array for the modal deep-dive
  const sectors = [
    {
      id: "01",
      category: "Blades & Personal Care",
      title: "Grooming & Shaving Systems",
      shortDesc: "Authorised distributor of premium razors and personal care products, including grooming systems built for regional markets.",
      detailedDesc: "We are engaged in the trading and distribution of shaving, grooming and personal care products. Our portfolio includes razors, blades, grooming systems and selected personal care categories designed to serve evolving consumer markets.",
      tags: ["Dorco", "Silvermax", "Gillette", "Inatur"],
      img: groomingImg
    },
    {
      id: "02",
      category: "Perfumery & Fragrances",
      title: "Premium Perfumes & Perfume Oils",
      shortDesc: "Premium fragrance solutions for global markets, spanning perfumes, perfume oils and fragrance-based products.",
      detailedDesc: "The fragrance industry combines culture, identity and evolving consumer preferences. Our perfumery business focuses on the international trading of perfumes, perfume oils and fragrance products. With industry knowledge and international market experience, we explore opportunities across established and emerging fragrance markets.",
      tags: ["Perfumes", "Perfume Oils", "Fragrance Products"],
      img: perfumeImg
    },
    {
      id: "03",
      category: "Consumer Goods & Specialty",
      title: "Diverse Trading Portfolio",
      shortDesc: "A broad category range including sandalwood and sandalwood-based products, plus cosmetics and beauty products for regional distribution.",
      detailedDesc: "We trade across selected consumer and specialty product categories based on market demand and business opportunities. Our portfolio includes beauty products, cosmetics, sandalwood and sandalwood-based products. Our approach is selective and market-focused — identifying products with commercial potential.",
      tags: ["Sandalwood", "Cosmetics", "Beauty Products"],
      img: consumerImg
    },
    {
      id: "04",
      category: "Automobiles",
      title: "Vehicles & Auto Parts",
      shortDesc: "Cross-border trade and logistics management of vehicles and automotive parts, facilitating import and export operations across multiple continents.",
      detailedDesc: "Our automotive activities cover international trading opportunities across vehicles and automotive products. We work with cross-border business requirements involving two-wheelers, three-wheelers, tyres, vehicles and selected automotive products.",
      tags: ["TVS", "Hero", "Piaggio", "Tires"],
      img: autoImg
    }
  ];

  // 1. Initial Page Scroll Animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.sector-card').forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });

      gsap.fromTo('.warehouse-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.warehouse-section', start: 'top 80%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Modal Entrance Animation Effect
  useEffect(() => {
    if (selectedSector) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      gsap.fromTo(modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(modalBoxRef.current,
        { scale: 0.9, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.5)', delay: 0.1 }
      );
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }
  }, [selectedSector]);

  // 3. Modal Exit Animation Function
  const handleCloseModal = () => {
    gsap.to(modalBoxRef.current, { 
      scale: 0.95, y: 20, opacity: 0, duration: 0.2, ease: 'power2.in' 
    });
    gsap.to(modalRef.current, { 
      opacity: 0, duration: 0.3, ease: 'power2.in', 
      onComplete: () => setSelectedSector(null) // Unmount after animation finishes
    });
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col relative">
      
      {/* --- SECTORS GRID SECTION --- */}
      <section className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {sectors.map((sector) => (
              <div 
                key={sector.id} 
                onClick={() => setSelectedSector(sector)}
                className="sector-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Premium Image Container */}
                <div className="w-full h-[280px] bg-slate-900 overflow-hidden relative">
                  <img 
                    src={sector.img} 
                    alt={sector.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  {/* Subtle overlay button to indicate clickability */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-orange-500 text-white text-sm font-semibold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Read More
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-[2px] bg-orange-500"></span>
                    <p className="text-orange-500 font-bold uppercase tracking-[0.15em] text-[10px]">
                      {sector.id} — {sector.category}
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-orange-600 transition-colors">
                    {sector.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed mb-6 flex-grow text-sm">
                    {sector.shortDesc}
                  </p>

                  {/* Interactive Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                    {sector.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="border border-slate-200 text-slate-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm cursor-default"
                        onClick={(e) => e.stopPropagation()} // Prevents tag click from opening the modal if they just hover/click tags
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- WAREHOUSING & DISTRIBUTION SECTION --- */}
      <section className="warehouse-section bg-[#0f172a] py-24 px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Header Split */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="max-w-xl warehouse-reveal">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                  Warehousing & Distribution
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Built to move product, not just source it
              </h2>
            </div>
            <div className="max-w-md warehouse-reveal">
              <p className="text-slate-300 leading-relaxed">
                Every sector is supported by comprehensive warehousing and last-mile delivery services across our logistics network.
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="w-full h-[400px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl warehouse-reveal bg-black">
            <img 
              src={warehouseImg} 
              alt="Warehousing and distribution facility" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE MODAL COMPONENT --- */}
      {selectedSector && (
        <div 
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          onClick={handleCloseModal} // Clicking background closes modal
        >
          {/* Modal Box */}
          <div 
            ref={modalBoxRef}
            className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row relative max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md hover:bg-orange-500 hover:text-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm"
            >
              ✕
            </button>

            {/* Left Side: Image */}
            <div className="w-full md:w-5/12 h-64 md:h-auto bg-slate-900 relative">
              <img 
                src={selectedSector.img} 
                alt={selectedSector.title} 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2">
                  Sector {selectedSector.id}
                </p>
                <h3 className="text-2xl font-bold leading-tight">{selectedSector.title}</h3>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  {selectedSector.category}
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sector Overview</h2>
              
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {selectedSector.detailedDesc}
              </p>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Core Portfolio Categories</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedSector.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-slate-50 border border-slate-200 text-slate-600 font-semibold px-4 py-2 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}