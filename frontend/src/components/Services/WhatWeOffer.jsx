import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// Category-specific data for the "What We Offer" section.
// Automatically renders the correct data based on the category prop.
// ============================================================================

const offerDataStore = {
  "personal-care": {
    kicker: "OUR SERVICES",
    title: "What We Offer",
    cards: [
      {
        title: "Distribution & Global Partnerships",
        desc: "Partner with us to expand your business. We connect your brand to the right markets across UAE & globally.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Handshake
        bullets: [
          "Market Expansion",
          "Strong Distribution Network",
          "Brand Growth Support"
        ],
        btnText: "Partner With Us",
        btnLink: "/contact"
      },
      {
        title: "Private Label / OEM Manufacturing",
        desc: "Launch your own brand with our end-to-end manufacturing solutions.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Lab/Manufacturing
        bullets: [
          "Custom Formulation",
          "Premium Packaging",
          "Quality Assurance",
          "Flexible MOQ"
        ],
        btnText: "Start Your Brand",
        btnLink: "/contact"
      },
      {
        title: "Export & Global Sourcing",
        desc: "We source the best products and deliver them to global markets.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Cargo Ship
        bullets: [
          "Global Sourcing",
          "Export Expertise",
          "Timely Delivery"
        ],
        btnText: "Explore Global Solutions",
        btnLink: "/contact"
      }
    ]
  },

  "automobiles": {
    kicker: "OUR SERVICES",
    title: "What We Offer",
    cards: [
      {
        title: "Dealership & Distribution",
        desc: "Partner with us for reliable automotive supply. We distribute leading two and three wheeler brands globally.",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop", 
        bullets: [
          "Fleet Supply Solutions",
          "Wholesale Pricing",
          "Dealership Growth Support"
        ],
        btnText: "Become a Dealer",
        btnLink: "/contact"
      },
      {
        title: "OEM & Private Label Parts",
        desc: "High-quality components and exclusive private label manufacturing under the Supervalue brand.",
        img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Supervalue Brand Parts",
          "Custom Packaging",
          "Strict Quality Control",
          "Bulk Availability"
        ],
        btnText: "Source Parts",
        btnLink: "/contact"
      },
      {
        title: "Global Automotive Export",
        desc: "Delivering vehicles, tires, and spare parts to international markets with complete security.",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Secure Transit Logistics",
          "Export Documentation",
          "Fast & Reliable Delivery"
        ],
        btnText: "Explore Logistics",
        btnLink: "/contact"
      }
    ]
  },

  "perfumery": {
    kicker: "OUR SERVICES",
    title: "What We Offer",
    cards: [
      {
        title: "Luxury Retail Distribution",
        desc: "Expand your fragrance brand globally. We connect premium scents to high-end retail and wholesale buyers.",
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Retail Placement",
          "Market Penetration",
          "Brand Scaling"
        ],
        btnText: "Partner With Us",
        btnLink: "/contact"
      },
      {
        title: "Private Label Fragrances",
        desc: "Create your signature scent from scratch. We offer end-to-end luxury perfume manufacturing.",
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Scent Development",
          "Premium Bottle Selection",
          "Custom Packaging",
          "End-to-End OEM"
        ],
        btnText: "Start Your Brand",
        btnLink: "/contact"
      },
      {
        title: "Raw Material Sourcing",
        desc: "Sourcing the absolute finest fragrance ingredients, essential oils, and extracts for manufacturers.",
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Essential Oils & Attars",
          "Rare Extracts",
          "Ethical Sourcing"
        ],
        btnText: "Explore Sourcing",
        btnLink: "/contact"
      }
    ]
  },

  "silvermax": {
    kicker: "OUR SERVICES",
    title: "What We Offer",
    cards: [
      {
        title: "Wholesale Distribution",
        desc: "High-volume supply of premium blades and grooming products for international distribution channels.",
        img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Global Market Reach",
          "Distributor Margins",
          "Marketing Support"
        ],
        btnText: "Become a Distributor",
        btnLink: "/contact"
      },
      {
        title: "OEM / Private Label Blades",
        desc: "Custom manufactured grooming solutions designed, engineered, and packaged for your brand.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Precision Engineering",
          "Custom Packaging",
          "High Quality Steel",
          "Scalable Production"
        ],
        btnText: "Start Manufacturing",
        btnLink: "/contact"
      },
      {
        title: "Export & Logistics",
        desc: "Reliable global shipping infrastructure ensuring your bulk orders arrive safely and on time.",
        img: "https://images.unsplash.com/photo-1494412519320-aa3da6751270?q=80&w=800&auto=format&fit=crop",
        bullets: [
          "Timely Delivery",
          "Secure Packaging",
          "Export Expertise"
        ],
        btnText: "View Logistics",
        btnLink: "/contact"
      }
    ]
  }
};

export default function WhatWeOffer({ category = "personal-care" }) {
  const containerRef = useRef(null);
  
  // Safely grab the data based on the category passed in, default to personal-care
  const data = offerDataStore[category] || offerDataStore["personal-care"];

  useEffect(() => {
    if (!data) return;
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.offer-header', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      // Staggered Card Reveal
      gsap.fromTo('.offer-card', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.offer-grid', start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className="w-full bg-[#fcfcfc] py-20 md:py-28 font-sans">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center">
        
        {/* ======================================================= */}
        {/* SECTION HEADER                                          */}
        {/* ======================================================= */}
        <div className="offer-header flex flex-col items-center text-center mb-12 md:mb-16">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
            {data.kicker}
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c2331] tracking-tight">
            {data.title}
          </h2>
        </div>
        
        {/* ======================================================= */}
        {/* 3-COLUMN CARDS GRID                                     */}
        {/* ======================================================= */}
        <div className="offer-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {data.cards.map((card, index) => (
            <div 
              key={index} 
              className="offer-card flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Top Image */}
              <div className="w-full h-[220px] overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
              
              {/* Bottom Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                
                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-[#1c2331] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {/* Custom Green Checkmark Icon matching the screenshot */}
                      <svg className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l4.5-6.25z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#1c2331] font-semibold text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Olive Green Button */}
                <Link 
                  to={card.btnLink}
                  className="w-fit bg-orange-500 hover:bg-orange-500 text-white text-sm font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  {card.btnText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}