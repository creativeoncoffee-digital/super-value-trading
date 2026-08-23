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
  // INFINITE MARQUEE LOGIC
  // We need enough images to fill the screen, so we duplicate the base images.
  // Then we duplicate THAT array again to create a perfect 50% loop track.
  // ============================================================================
  
  // Create a block of images guaranteed to be wider than the screen
  const expandedBlock1 = [...baseImages, ...baseImages, ...baseImages];
  const expandedBlock2 = [...baseImages, ...baseImages, ...baseImages].reverse(); // Reversed for visual variety

  // Double them so we can translate exactly -50% for a seamless infinite loop
  const row1Images = [...expandedBlock1, ...expandedBlock1];
  const row2Images = [...expandedBlock2, ...expandedBlock2];

  // Lightbox Handlers
  // We use modulo (%) so even if they click image #45 in the duplicated track, it opens the correct base image
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
    <section ref={containerRef} className="w-full bg-white py-20 md:py-28 font-sans border-t border-slate-100 overflow-hidden">
      
      {/* Dynamic CSS Keyframes for Infinite Scroll */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-fast {
            animation: scrollLeft 45s linear infinite;
          }
          .animate-scroll-slow {
            animation: scrollLeft 55s linear infinite;
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] capitalize tracking-tight">
              {category.replace('-', ' ')} Gallery
            </h2>
          </div>
          <Link 
            to="/gallery" 
            className="w-fit bg-orange-500 hover:bg-orange-500 text-white font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 shadow-lg"
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
      <div className="w-full flex flex-col gap-4 md:gap-6 relative">
        
        {/* Transparent edge gradients to make images fade in/out smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* ROW 1 (Faster) */}
        <div className="flex w-max animate-scroll-fast pause-on-hover gap-4 md:gap-6 px-2 md:px-3">
          {row1Images.map((img, index) => (
            <div 
              key={`r1-${index}`} 
              onClick={() => openLightbox(index)}
              className="relative h-[200px] md:h-[280px] lg:h-[340px] aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 shrink-0 bg-slate-100"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-[#0B1E3A]/0 group-hover:bg-[#0B1E3A]/40 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2 (Slower & Reversed Data) */}
        <div className="flex w-max animate-scroll-slow pause-on-hover gap-4 md:gap-6 px-2 md:px-3">
          {row2Images.map((img, index) => (
            <div 
              key={`r2-${index}`} 
              onClick={() => openLightbox(index)}
              className="relative h-[200px] md:h-[280px] lg:h-[340px] aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 shrink-0 bg-slate-100"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-[#0B1E3A]/0 group-hover:bg-[#0B1E3A]/40 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
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
            <img 
              src={baseImages[currentIndex].src} 
              alt={baseImages[currentIndex].title} 
              className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-2xl" 
            />
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