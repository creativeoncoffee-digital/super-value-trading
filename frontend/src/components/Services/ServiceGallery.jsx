import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryData } from '../../data/GalleryData';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceGallery({ category = "perfumery" }) {
  const containerRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 1. Filter images for this specific category
  const baseImages = galleryData.filter(img => img.category === category);

  // Entrance Animations
  useEffect(() => {
    if (baseImages.length === 0) return;
    let ctx = gsap.context(() => {
      gsap.fromTo('.gallery-header-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [category, baseImages.length]);

  if (baseImages.length === 0) return null;

  // ============================================================================
  // OPTIMIZED INFINITE MARQUEE LOGIC
  // ============================================================================
  
  // Create a base track that is just long enough to fill the screen to prevent DOM bloat
  let baseTrack = [...baseImages];
  while (baseTrack.length < 8) {
    baseTrack = [...baseTrack, ...baseImages];
  }

  // Duplicate exactly once for the -50% translation loop
  const row1Images = [...baseTrack, ...baseTrack];
  
  // Reverse the track for row 2 to give visual variety
  const reversedTrack = [...baseTrack].reverse();
  const row2Images = [...reversedTrack, ...reversedTrack];

  // Lightbox Handlers
  const openLightbox = (index) => {
    setCurrentIndex(index % baseImages.length);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % baseImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? baseImages.length - 1 : prev - 1));
  };

  return (
    <section ref={containerRef} className="w-full bg-white py-13 md:py-16 font-sans border-t border-slate-100 overflow-hidden">
      
      {/* PERFORMANCE FIX: Using translate3d forces GPU Hardware Acceleration for buttery smooth 60fps scrolling */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-scroll-fast {
            animation: scrollLeft 40s linear infinite;
            will-change: transform;
          }
          .animate-scroll-slow {
            animation: scrollLeft 55s linear infinite;
            will-change: transform;
          }
          /* Pauses the animation when the user hovers over the row */
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        {/* Header */}
        <div className="gallery-header-anim flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3">
              Our Work
            </h4>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0B1E3A] capitalize tracking-tight">
              {category.replace('-', ' ')} Gallery
            </h2>
          </div>
          <Link 
            to="/gallery" 
            className="w-fit bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 md:px-8 md:py-4 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(243,121,10,0.3)] hover:-translate-y-1"
          >
            View Full Gallery 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* ======================================================= */}
      {/* INFINITE SCROLLING ROWS                                   */}
      {/* ======================================================= */}
      <div className="w-full flex flex-col gap-6 md:gap-8 relative">
        
        {/* Transparent edge gradients to make images fade in/out smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* ROW 1 (Faster) */}
        <div className="flex w-max animate-scroll-fast pause-on-hover gap-6 md:gap-8 px-3">
          {row1Images.map((img, index) => (
            <div 
              key={`r1-${index}`} 
              onClick={() => openLightbox(index)}
              // DESIGN FIX: Added a fixed width and background, using padding so the image stays contained
              className="relative h-[220px] md:h-[280px] lg:h-[320px] w-[280px] md:w-[380px] lg:w-[450px] rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 shrink-0 bg-slate-50 border border-slate-100 p-6 flex items-center justify-center"
            >
              {/* DESIGN FIX: Changed to object-contain so images never get cropped */}
              <img 
                src={img.src} 
                alt={img.title} 
                loading="lazy"
                className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105 will-change-transform drop-shadow-md" 
              />
              
              <div className="absolute inset-0 bg-[#0B1E3A]/0 group-hover:bg-[#0B1E3A]/10 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg text-[#0B1E3A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2 (Slower & Reversed Data) */}
        <div className="flex w-max animate-scroll-slow pause-on-hover gap-6 md:gap-8 px-3">
          {row2Images.map((img, index) => (
            <div 
              key={`r2-${index}`} 
              onClick={() => openLightbox(index)}
              className="relative h-[220px] md:h-[280px] lg:h-[320px] w-[280px] md:w-[380px] lg:w-[450px] rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 shrink-0 bg-slate-50 border border-slate-100 p-6 flex items-center justify-center"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                loading="lazy"
                className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105 will-change-transform drop-shadow-md" 
              />
              
              <div className="absolute inset-0 bg-[#0B1E3A]/0 group-hover:bg-[#0B1E3A]/10 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg text-[#0B1E3A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ======================================================= */}
      {/* CINEMATIC LIGHTBOX MODAL                                  */}
      {/* ======================================================= */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07101E]/95 backdrop-blur-xl" onClick={closeLightbox}>
          
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-orange-500 p-2 transition-colors">
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <button onClick={prevImage} className="absolute left-2 md:left-10 text-white/30 hover:text-white p-4 transition-colors">
            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <div className="relative w-[90%] max-w-6xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl">
              <img 
                src={baseImages[currentIndex].src} 
                alt={baseImages[currentIndex].title} 
                className="w-full h-auto max-h-[60vh] object-contain" 
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-white font-bold text-xl md:text-2xl mb-1 tracking-wide">{baseImages[currentIndex].title}</h3>
              <p className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm">
                {baseImages[currentIndex].category.replace('-', ' ')}
              </p>
            </div>
          </div>

          <button onClick={nextImage} className="absolute right-2 md:right-10 text-white/30 hover:text-white p-4 transition-colors">
            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      )}
    </section>
  );
}