import React from 'react';

// IMPORT YOUR IMAGES HERE (This fixes the broken image issue)
import BladeImg from '../assets/Products/Blade.png';
import PerfumeBottleImg from '../assets/Products/PerfumeBottle.png'; // Make sure to add this image
import PerfumeWhyChooseUsImg from '../assets/Products/PerfumeBottle.png';
import TireImg from '../assets/Products/Tire.png';
import BikeTopImg from '../assets/Products/bike-top.png';
import CarTopImg from '../assets/Products/car-top.png';
// import BannerImg from '../assets/Products/Banner.jpg';
import one from '../assets/Products/one.png'; 
import two from '../assets/Products/two.png';
import three from '../assets/Products/three.png';
import four from '../assets/Products/four.png';
import five from '../assets/Products/five.png';
import six from '../assets/Products/six.png';

const createSectionOrder = (...keys) => keys.map((key) => ({ key }));

const sharedWhyChooseUsStats = [
  {
    number: "500+",
    title: "Products",
    desc: "Wide range of trusted trade essentials",
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

const sharedWhyChooseUsFeatures = [
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

const createWhyChooseUs = ({ headlinePrefix, headlineEmphasis, description, image, imageAlt, cardTitle, cardDescription, cardCtaLabel }) => ({
  headlinePrefix,
  headlineEmphasis,
  description,
  image,
  imageAlt,
  cardTitle,
  cardDescription,
  cardCtaLabel,
  stats: sharedWhyChooseUsStats,
  features: sharedWhyChooseUsFeatures,
});

const createProductShowcase = ({
  image,
  imageAlt,
  backgroundClass,
  glowClass,
  accentClass,
  ctaClass,
  panels,
}) => ({
  image,
  imageAlt,
  backgroundClass,
  glowClass,
  accentClass,
  ctaClass,
  panels,
});

const createVehicleShowcase = ({
  image,
  imageAlt,
  title,
  description,
  backgroundClass,
  glowClass,
  accentClass,
  ctaLabel,
  ctaHref,
  ctaClass,
}) => ({
  image,
  imageAlt,
  title,
  description,
  backgroundClass,
  glowClass,
  accentClass,
  ctaLabel,
  ctaHref,
  ctaClass,
});


export const productData = {
  
  // ==========================================
  // 1. FMCG & PERSONAL CARE
  // ==========================================
  "personal-care": {
    useCustomVehicleShowcase: false, // Flag to hide standard showcase and show custom one
    hero: {
      title: "Personal Care & Grooming",
      subtitle: "Precision & Performance",
      description: "Authorized distributors of premium grooming systems, razors, and blades, ensuring top-tier quality for regional and global markets.",
      leftImg: BladeImg,
      rightImg: BladeImg,
      bgBanner: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop",
      themeFrom: "from-[#0B1E3A]",
      themeTo: "to-[#041428]",
      accent: "text-orange-500"
    },
    sections: createSectionOrder('trustedMarkets', 'fmcgShowcase', 'productShowcase', 'solutions', 'whyChooseUs'),
    trustedMarkets: {
      title: "Trusted By Global Markets",
    logos: [
        { id: 1, name: "Michelin", src: one },
        { id: 2, name: "Bridgestone", src:two  },
        { id: 3, name: "Pirelli", src: three },
        { id: 4, name: "Goodyear", src: four },
        { id: 5, name: "Continental", src: five },
        { id: 6, name: "Dunlop", src: six }
      ]
    },
    showcase: {
      about: {
        title: "About Super Value",
        highlight: "FMCG Partner",
        headline: "Your Trusted",
        description: "Super Value is committed to delivering high-quality personal care and grooming products that enhance everyday life. With a strong distribution network, we ensure the best global brands reach you with reliability.",
        image: "https://images.unsplash.com/photo-1621607505833-616916c46a25?q=80&w=1000&auto=format&fit=crop",
        stats: [
          { value: "10+", label: "Years Experience" },
          { value: "50+", label: "Countries" },
          { value: "1000+", label: "Retail Partners" }
        ]
      },
      categories: [
        { title: "Hair Care", desc: "Shampoos, conditioners & styling products.", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop" },
        { title: "Skin Care", desc: "Face care, body lotions & daily creams.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" },
        { title: "Bath & Shower", desc: "Soaps, body washes & bathing essentials.", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop" },
        { title: "Oral Care", desc: "Toothpaste, brushes & complete dental care.", img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop" },
        { title: "Men's Grooming", desc: "Shaving systems, beard care & deodorants.", img: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?q=80&w=800&auto=format&fit=crop" },
        { title: "Feminine Care", desc: "Premium hygiene & intimate care solutions.", img: "https://images.unsplash.com/photo-1584305574647-0cc9ec5ee60a?q=80&w=800&auto=format&fit=crop" }
      ]
    },
    productShowcase: createProductShowcase({
      image: BladeImg,
      imageAlt: "Personal care blade showcase",
      backgroundClass: 'bg-white',
      glowClass: 'bg-orange-500/10',
      accentClass: 'bg-orange-500',
      ctaClass: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30',
      panels: {
        left: {
          eyebrow: 'Precision Engineering',
          description: 'Crafted from high-grade stainless steel, ensuring maximum durability and performance for the premium global grooming market.',
          ctaLabel: 'Inquiry Now',
          ctaHref: '/contact',
        },
        right: {
          eyebrow: 'Advanced Coating',
          description: 'Our authorized personal care products utilize multi-layered coating technology to dramatically extend product lifespan.',
          ctaLabel: 'Explore Range',
          ctaHref: '/contact',
        },
        bottom: {
          title: 'Distributed globally by Super Value',
          description: 'Seamlessly supplying regional markets with top-tier grooming systems.',
        },
      },
    }),
    solutions: {
      headline: "Trusted Personal Care Solutions for Every Lifestyle",
      description: "From daily essentials to premium care, we deliver a wide range of personal care products that meet the highest standards of quality, safety and value.",
      cards: [
        { title: "Hair Care", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
        { title: "Skin Care", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg> },
        { title: "Bath & Shower", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7.5V5.25m0 0a2.25 2.25 0 10-4.5 0v2.25m4.5 0a2.25 2.25 0 11-4.5 0m4.5 0h.008v.008H15V7.5zm-4.5 0h.008v.008H10.5V7.5zm-2.25 3h10.5c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5H8.25c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5z" /></svg> },
        { title: "Oral Care", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.43 3 12c0 4.556 4.03 8.25 9 8.25z" /></svg> }
      ]
    },
    whyChooseUs: createWhyChooseUs({
      headlinePrefix: 'Why Businesses Choose',
      headlineEmphasis: 'Super Value',
      description: 'We are committed to providing businesses with reliable products, seamless supply and unbeatable value.',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Personal care products',
      cardTitle: 'Partner with us for lasting success',
      cardDescription: 'We empower your business with premium products, trusted service and long-term growth.',
      cardCtaLabel: 'Become a Partner',
    })
  },

  // ==========================================
  // 2. PERFUMERY & FRAGRANCES
  // ==========================================
  "perfumery": {
    useCustomVehicleShowcase: false, 
    hero: {
      title: "Perfumery & Fragrances",
      subtitle: "The Essence of Luxury",
      description: "Premium fragrance solutions, spanning luxury perfumes, concentrated oils, and bespoke signature scent profiles sourced globally.",
      leftImg: PerfumeBottleImg, // Transparent PNG of a perfume bottle
      rightImg: PerfumeBottleImg,
      bgBanner: "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=2000&auto=format&fit=crop", // Moody perfume background
      themeFrom: "from-[#2A1B18]", 
      themeTo: "to-[#140C0B]",
      accent: "text-[#D4AF37]" // Gold Accent
    },
    sections: createSectionOrder('trustedMarkets', 'fmcgShowcase', 'productShowcase', 'solutions', 'whyChooseUs'),
    trustedMarkets: {
      title: "Distributing Excellence Globally",
    logos: [
        { id: 1, name: "Michelin", src: one },
        { id: 2, name: "Bridgestone", src:two  },
        { id: 3, name: "Pirelli", src: three },
        { id: 4, name: "Goodyear", src: four },
        { id: 5, name: "Continental", src: five },
        { id: 6, name: "Dunlop", src: six }
      ]
    },
    showcase: {
      about: {
        title: "About Our Fragrance House",
        highlight: "Scent Architects",
        headline: "Mastering the Art of",
        description: "We are curators of olfactory elegance. From rare raw materials to fully branded retail ready perfumes, we bridge the gap between traditional perfumery techniques and modern mass-market distribution.",
        image:PerfumeWhyChooseUsImg,
        stats: [
          { value: "500+", label: "Unique Notes" },
          { value: "20+", label: "Master Blends" },
          { value: "100%", label: "Authenticity" }
        ]
      },
      categories: [
        { 
          title: "Perfumes", 
          desc: "A curated selection of premium luxury perfumes offering sophisticated profiles and long-lasting sillage.", 
          img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop" 
        },
        { 
          title: "Perfume Oils", 
          desc: "Highly concentrated, pure attars and perfume oils crafted for deep, enduring fragrance experiences without alcohol.", 
          img: PerfumeWhyChooseUsImg ,
        },
        { 
          title: "Fine Fragrances & Private Label", 
          desc: "Custom perfume manufacturing from UAE and India. Make your own signature perfumes with our comprehensive private label services.", 
          img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" 
        },
        { 
          title: "Sandalwood & Operculum", 
          desc: "Rare, exotic raw materials. Sustainably sourced sandalwood and authentic operculum for traditional incense and perfumery.", 
          img: PerfumeWhyChooseUsImg,
        }
      ]
    },
    solutions: {
      headline: "Crafting Signature Profiles for Every Market",
      description: "Whether you require raw botanical extracts, concentrated oils, or fully branded retail lines, we supply the finest aromatic solutions to elevate your brand presence globally.",
      cards: [
        { title: "Luxury Retail", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
        { title: "Bespoke Blends", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
        { title: "Private Label", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
        { title: "Raw Extracts", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
      ]
    },
    productShowcase: createProductShowcase({
      image: PerfumeBottleImg,
      imageAlt: 'Perfumery showcase',
      backgroundClass: 'bg-white',
      glowClass: 'bg-[#D4AF37]/10',
      accentClass: 'bg-[#D4AF37]',
      ctaClass: 'bg-[#D4AF37] hover:bg-[#c09b2e] shadow-[#D4AF37]/30',
      panels: {
        left: {
          eyebrow: 'Scent Architecture',
          description: 'We curate fragrance solutions from raw materials to branded retail-ready perfumes for premium markets.',
          ctaLabel: 'Talk to an Expert',
          ctaHref: '/contact',
        },
        right: {
          eyebrow: 'Luxury Distribution',
          description: 'From concentrated oils to bespoke signature scent profiles, our perfumery lines are built for scale and consistency.',
          ctaLabel: 'View Fragrance Line',
          ctaHref: '/contact',
        },
        bottom: {
          title: 'Distributed globally by Super Value',
          description: 'Delivering premium fragrance solutions across luxury retail and private label channels.',
        },
      },
    }),
    whyChooseUs: createWhyChooseUs({
      headlinePrefix: 'Why Luxury Buyers Choose',
      headlineEmphasis: 'Super Value',
      description: 'We supply fragrance programs with reliable sourcing, premium presentation and market-ready consistency.',
      image: PerfumeWhyChooseUsImg,
      imageAlt: 'Luxury fragrances',
      cardTitle: 'Fragrance programs built to scale',
      cardDescription: 'We bridge raw materials, private label development and global distribution.',
      cardCtaLabel: 'Start a Project',
    })
  },

  // ==========================================
  // 3. AUTOMOBILES & TIRE TRADING
  // ==========================================
  "automobiles": {
    // Setting this to true means you can conditionally hide the standard showcase 
    // and show your custom Bike/Car showcase components on the Automobile page!
    useCustomVehicleShowcase: true, 
    
    hero: {
      title: "Automotive Solutions",
      subtitle: "Global Mobility & Tires",
      description: "Seamless cross-border trade and logistics management of premium tires, vehicles, and high-performance automotive spare parts.",
      leftImg: TireImg, // Transparent PNG of a Tire or Car
      rightImg: TireImg,
      bgBanner: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop", // Dark automotive background
      themeFrom: "from-[#0F172A]",
      themeTo: "to-[#020617]",
      accent: "text-blue-500" // Blue Accent for Automotives
    },
    sections: createSectionOrder('trustedMarkets', 'fmcgShowcase', 'productShowcase', 'solutions', 'bikeShowcase', 'carShowcase', 'whyChooseUs'),
    trustedMarkets: {
      title: "Partnered with Leading Manufacturers",
   logos: [
        { id: 1, name: "Michelin", src: one },
        { id: 2, name: "Bridgestone", src:two  },
        { id: 3, name: "Pirelli", src: three },
        { id: 4, name: "Goodyear", src: four },
        { id: 5, name: "Continental", src: five },
        { id: 6, name: "Dunlop", src: six }
      ]
    },
    showcase: {
      about: {
        title: "Automotive Trading",
        highlight: "Tire Supply",
        headline: "Leaders in Global",
        description: "Specializing in the high-volume export and import of premium automotive tires, two-wheelers, and commercial vehicles. We provide robust supply chain solutions tailored to the rigorous demands of the global automotive sector.",
        image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1000&auto=format&fit=crop", // Tire warehouse or logistics
        stats: [
          { value: "10k+", label: "Tires Shipped" },
          { value: "40+", label: "Trade Routes" },
          { value: "100%", label: "Safety Audited" }
        ]
      },
      categories: [
        { 
          title: "Passenger Car Tires", 
          desc: "High-performance, all-season, and touring tires engineered for safety and comfort.", 
          img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" 
        },
        { 
          title: "Commercial & TBR Tires", 
          desc: "Heavy-duty truck and bus radial tires built for extreme endurance and heavy loads.", 
          img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" 
        },
        { 
          title: "Two-Wheeler Trading", 
          desc: "Export and distribution of premium motorcycles and high-efficiency scooters.", 
          img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop" 
        },
        { 
          title: "Automotive Parts", 
          desc: "Essential OEM and aftermarket spare parts, batteries, and lubricants.", 
          img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" 
        }
      ]
    },
    solutions: {
      headline: "End-to-End Automotive Logistics",
      description: "From factory procurement to final delivery, our dedicated automotive trading division ensures maximum efficiency, competitive pricing, and secure transit for heavy cargo and tires.",
      cards: [
        { title: "Tire Procurement", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg> },
        { title: "Global Shipping", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { title: "Quality Checks", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
        { title: "Fleet Supply", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> }
      ]
    },
    productShowcase: createProductShowcase({
      image: TireImg,
      imageAlt: 'Automotive tire showcase',
      backgroundClass: 'bg-white',
      glowClass: 'bg-blue-500/10',
      accentClass: 'bg-blue-500',
      ctaClass: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
      panels: {
        left: {
          eyebrow: 'Global Mobility',
          description: 'We connect premium automotive tires, vehicles and parts with dependable trade and logistics support.',
          ctaLabel: 'Start Sourcing',
          ctaHref: '/contact',
        },
        right: {
          eyebrow: 'Tire Trading Network',
          description: 'From commercial fleets to passenger products, our supply chain is built to handle high-volume export and import.',
          ctaLabel: 'See Tire Range',
          ctaHref: '/contact',
        },
        bottom: {
          title: 'Distributed globally by Super Value',
          description: 'Secure transit and competitive pricing for high-demand automotive categories.',
        },
      },
    }),
    bikeShowcase: createVehicleShowcase({
      image: BikeTopImg,
      imageAlt: 'Automobile bike showcase',
      title: 'High-Performance Mobility.',
      description: 'Premium two-wheeler solutions engineered for the modern road. Uncompromising quality and endurance distributed across our global network.',
      backgroundClass: 'bg-[#0A101D]',
      glowClass: 'bg-blue-500/10',
      accentClass: 'bg-blue-500',
      ctaLabel: 'Explore Solutions',
      ctaHref: '/contact',
      ctaClass: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
    }),
    carShowcase: createVehicleShowcase({
      image: CarTopImg,
      imageAlt: 'Automobile car showcase',
      title: 'Commercial Vehicle Supply.',
      description: 'Automotive vehicle sourcing, fleet support and spare parts distribution for regional and international buyers.',
      backgroundClass: 'bg-[#0A101D]',
      glowClass: 'bg-blue-500/10',
      accentClass: 'bg-blue-500',
      ctaLabel: 'Request a Quote',
      ctaHref: '/contact',
      ctaClass: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
    }),
    whyChooseUs: createWhyChooseUs({
      headlinePrefix: 'Why Automotive Buyers Choose',
      headlineEmphasis: 'Super Value',
      description: 'We support tire and vehicle trading with trusted logistics, consistent quality and competitive pricing.',
      image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Automotive logistics',
      cardTitle: 'Fleet supply that stays on schedule',
      cardDescription: 'We keep automotive buyers moving with vetted sourcing and secure transit.',
      cardCtaLabel: 'Partner With Us',
    })
  }
};