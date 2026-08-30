import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMPORT YOUR IMAGES HERE
import BladeImg from '../../assets/Products/Blade.png';
import PerfumeBottleImg from '../../assets/Products/PerfumeBottle.png';
import TireImg from '../../assets/Products/Tire.png';
import CareImg from '../../assets/perfuextra.png'; // Placeholder transparent PNG for Personal Care

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INTERNAL DATA STORE
// You can now safely delete 'productShowcase' from your ProductData.jsx file.
// ============================================================================
const showcaseDataStore = {
  "personal-care": {
    image: CareImg,
    imageAlt: "Personal care showcase",
    backgroundClass: 'bg-white',
    glowClass: 'bg-[#0a53a6]/12',
    accentClass: 'bg-[#0a53a6]',
    ctaClass: 'bg-[#0a53a6] hover:bg-[#0e67cd] shadow-[#0a53a6]/30',
    panels: {
      left: {
        eyebrow: 'Premium FMCG',
        description: 'High-quality everyday essentials formulated for safety, efficacy, and global standards.',
        ctaLabel: 'Inquiry Now',
        ctaHref: '/contact',
      },
      right: {
        eyebrow: 'Trusted Supply Chain',
        description: 'We ensure consistent availability and distribution of personal care products to markets worldwide.',
        ctaLabel: 'Explore Range',
        ctaHref: '/contact',
      },
      bottom: {
        title: 'Distributed globally by Super Value',
        description: 'Your trusted partner for consumer goods and private-label personal care solutions.',
      },
    },
  },
  "perfumery": {
    image: PerfumeBottleImg,
    imageAlt: 'Perfumery showcase',
    backgroundClass: 'bg-[#f8fafc]',
    glowClass: 'bg-orange-500/10',
    accentClass: 'bg-[#0a53a6]',
    ctaClass: 'bg-orange-500 hover:bg-orange-600',
    panels: {
      left: {
        eyebrow: 'SUPER VALUE',
        description: 'Our Own Brand. Alongside private-label manufacturing, we distribute our own exclusive Super Value fragrance lines designed for scalable market entry.',
        ctaLabel: 'View Our Line',
        ctaHref: '/contact',
      },
      right: {
        eyebrow: 'Wholesale Distribution',
        description: 'From concentrated oils to ready-to-sell perfumes, our lines are built for scale, consistency, and global export.',
        ctaLabel: 'Talk to an Expert',
        ctaHref: '/contact',
      },
      bottom: {
        title: 'Distributed globally by Super Value',
        description: 'Delivering premium fragrance solutions across retail and wholesale channels.',
      },
    },
  },
  "automobiles": {
    image: TireImg,
    imageAlt: 'Automotive spare parts showcase',
    backgroundClass: 'bg-white',
    glowClass: 'bg-[#0a53a6]/12',
    accentClass: 'bg-[#0a53a6]',
    ctaClass: 'bg-[#0a53a6] hover:bg-[#0e67cd] shadow-[#0a53a6]/30',
    panels: {
      left: {
        eyebrow: 'Supervalue Brand',
        description: 'Take advantage of our custom private label capabilities. We manufacture and supply premium tires, tubes, and spare parts under our trusted Supervalue name.',
        ctaLabel: 'Start Sourcing',
        ctaHref: '/contact',
      },
      right: {
        eyebrow: 'Piaggio, TVS, Hero',
        description: 'We are proud exporters of the world’s leading two and three wheeler brands, including traditional combustion engines and modern Electronic Vehicles.',
        ctaLabel: 'View Vehicle Range',
        ctaHref: '/contact',
      },
      bottom: {
        title: 'Distributed globally by Super Value',
        description: 'Your premier source for bikes, three-wheelers, and high-quality spare parts.',
      },
    },
  },
  "silvermax": {
    image: BladeImg,
    imageAlt: "Silvermax blade showcase",
    backgroundClass: 'bg-white',
    glowClass: 'bg-[#0a53a6]/12',
    accentClass: 'bg-[#0a53a6]',
    ctaClass: 'bg-[#0a53a6] hover:bg-[#0e67cd] shadow-[#0a53a6]/30',
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
        description: 'Supplying regional markets with trusted grooming systems, consumer goods, and private-label opportunities.',
      },
    },
  }
};

export default function ProductShowcase({ category = 'personal-care' }) {
  const containerRef = useRef(null);
  
  // Safely grab the data based on category, default to personal-care
  const safeCategory = category ? category.toLowerCase().trim() : "personal-care";
  const data = showcaseDataStore[safeCategory] || showcaseDataStore["personal-care"];

  useEffect(() => {
    if (!data) return;

    let ctx = gsap.context(() => {
      // Set up responsive GSAP matchMedia
      let mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP ANIMATION (min-width: 768px)
      // ==========================================
      mm.add("(min-width: 768px)", () => {
        const desktopTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=2500', 
            scrub: 1.5,
            pin: true, 
            anticipatePin: 1,
          },
        });

        // Desktop Initial State
        gsap.set('.showcase-img-anim', { x: '25vw', y: '0vh', rotation: 5, rotationY: -15, scale: 1, transformPerspective: 1000 });
        gsap.set('.glow-anim', { x: '25vw', y: '0vh', scale: 1 });
        gsap.set('.text-1-anim', { opacity: 1, x: 0, y: 0 });
        gsap.set('.text-2-anim', { opacity: 0, x: 50, y: 0 });
        gsap.set('.text-3-anim', { opacity: 0, y: 50, x: 0 });

        // Desktop Timeline Sequence
        desktopTl
          .to('.text-1-anim', { opacity: 0, x: -50, duration: 1 }, 0)
          .to('.showcase-img-anim', { x: '-25vw', rotation: -5, rotationY: 15, duration: 2, ease: 'power1.inOut' }, 0)
          .to('.glow-anim', { x: '-25vw', duration: 2, ease: 'power1.inOut' }, 0)
          .to('.text-2-anim', { opacity: 1, x: 0, duration: 1 }, 1) 
          .to({}, { duration: 0.5 }) // Pause
          .to('.text-2-anim', { opacity: 0, x: 50, duration: 1 }, 3.5)
          .to('.showcase-img-anim', { scale: 0.85, x: '0vw', y: '-22vh', rotation: 0, rotationY: 0, duration: 2, ease: 'power1.inOut' }, 3.5)
          .to('.glow-anim', { x: '0vw', scale: 1.5, duration: 2, ease: 'power1.inOut' }, 3.5)
          .to('.text-3-anim', { opacity: 1, y: 0, duration: 1 }, 4.5);
      });

      // ==========================================
      // MOBILE ANIMATION (max-width: 767px)
      // ==========================================
      mm.add("(max-width: 767px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=2000', 
            scrub: 1.5,
            pin: true, 
            anticipatePin: 1,
          },
        });

        // Mobile Initial State
        // Image fixed top-center
        gsap.set('.showcase-img-anim', { x: '0vw', y: '-20vh', rotation: 0, rotationY: 0, scale: 1, transformPerspective: 1000 });
        gsap.set('.glow-anim', { x: '0vw', y: '-20vh', scale: 1 });
        
        // Text fades in/out directly below the image
        gsap.set('.text-1-anim', { opacity: 1, x: 0, y: 0 });
        gsap.set('.text-2-anim', { opacity: 0, x: 0, y: 30 });
        gsap.set('.text-3-anim', { opacity: 0, x: 0, y: 30 });

        // Mobile Timeline Sequence
        mobileTl
          // PHASE 1: Image rotates 360, Text 1 fades out, Text 2 fades in
          .to('.text-1-anim', { opacity: 0, y: -30, duration: 1 }, 0)
          .to('.showcase-img-anim', { rotation: 360, duration: 2, ease: 'power2.inOut' }, 0)
          .to('.text-2-anim', { opacity: 1, y: 0, duration: 1 }, 1) 
          
          .to({}, { duration: 0.5 }) // Pause
          
          // PHASE 2: Image rotates another 360 (to 720). Gap reduces!
          .to('.text-2-anim', { opacity: 0, y: -30, duration: 1 }, 3.5)
          // Shifting 'y' from '-20vh' to '-14vh' visually closes the gap between the image and the 3rd text block
          .to('.showcase-img-anim', { rotation: 720, y: '-14vh', scale: 0.9, duration: 2, ease: 'power2.inOut' }, 3.5)
          .to('.glow-anim', { y: '-14vh', scale: 1.2, duration: 2, ease: 'power2.inOut' }, 3.5)
          .to('.text-3-anim', { opacity: 1, y: 0, duration: 1 }, 4.5);
      });

    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) return null;

  return (
    <section ref={containerRef} className={`relative w-full h-[80vh] ${data.backgroundClass || 'bg-white'} font-sans`}>
      <div className="relative w-full h-[75vh] overflow-hidden flex items-center justify-center">
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className={`glow-anim w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] ${data.glowClass || 'bg-orange-500/10'} rounded-full blur-[80px] md:blur-[120px]`}></div>
        </div>

        {/* IMAGE WRAPPER (GSAP handles the specific mobile vs desktop Y translations) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full max-w-[800px] flex justify-center">
          <div className="showcase-img-anim w-full flex justify-center">
            <img
              src={data.image}
              alt={data.imageAlt || 'Product showcase'}
              className="w-[65%] md:w-[50%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

        {/* TEXT 1: Center-aligned on Mobile, Left-aligned on Desktop */}
        <div className="absolute left-1/2 md:left-[10%] top-[60%] md:top-1/2 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] z-40 pointer-events-auto">
          <div className="text-1-anim flex flex-col items-center md:items-start text-center md:text-left justify-center">
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="w-6 md:w-8 h-[2px] bg-orange-500"></span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
                {data.panels?.left?.eyebrow}
              </h2>
            </div>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-6 md:mb-10 px-4 md:px-0">
              {data.panels?.left?.description}
            </p>
            <div>
              <Link
                to={data.panels?.left?.ctaHref || '/contact'}
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                {data.panels?.left?.ctaLabel || 'Inquiry Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* TEXT 2: Center-aligned on Mobile, Right-aligned on Desktop */}
        <div className="absolute left-1/2 md:left-auto md:right-[10%] top-[60%] md:top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-[40%] z-40 pointer-events-auto">
          <div className="text-2-anim flex flex-col items-center md:items-start text-center md:text-left justify-center">
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="w-6 md:w-8 h-[2px] bg-orange-500"></span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#0B1E3A] tracking-tight">
                {data.panels?.right?.eyebrow}
              </h2>
            </div>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-6 md:mb-10 px-4 md:px-0">
              {data.panels?.right?.description}
            </p>
            <div>
              <Link
                to={data.panels?.right?.ctaHref || '/contact'}
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30 text-white font-bold py-[clamp(0.8rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,2.5rem)] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                {data.panels?.right?.ctaLabel || 'Inquiry Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* TEXT 3: Bottom Center on Desktop, Middle Center on Mobile */}
        <div className="absolute left-1/2 md:left-1/2 top-[60%] md:top-auto md:bottom-[10%] -translate-x-1/2 -translate-y-1/2 md:translate-y-0 w-[90%] max-w-xl z-40 pointer-events-auto">
          <div className="text-3-anim text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl font-bold text-[#0B1E3A] leading-tight mb-3 md:mb-4 tracking-tight">
              {data.panels?.bottom?.title}
            </h2>
            <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium px-4 md:px-0">
              {data.panels?.bottom?.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}