import { useState, useEffect } from 'react';
import { galleryData } from '../data/GalleryData';
import Breadcrumb from '../components/Breadcrumb';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState(galleryData);

  const categories = ['All', ...new Set(galleryData.map(img => img.category))];

  useEffect(() => {
    if (activeFilter === 'All') {
      setDisplayedImages(galleryData);
    } else {
      setDisplayedImages(galleryData.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  const openLightbox = (index, imagesArray) => {
    setDisplayedImages(imagesArray);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % displayedImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1));
  };

  const renderGrid = (images, title, showViewAll = false) => {
    if (images.length === 0) return null;
    return (
      <div className="mb-16">
        {title && (
          <div className="flex items-end justify-between border-b border-slate-200 pb-4 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#0B1E3A] capitalize">{title}</h3>
            {showViewAll && (
              <button onClick={() => setActiveFilter(title.toLowerCase().replace(' ', '-'))} className="text-orange-500 hover:text-orange-600 font-bold text-xs md:text-sm flex items-center gap-1 transition-colors">
                View All <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div 
              key={img.id} 
              onClick={() => openLightbox(idx, images)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-slate-100"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-sans pt-32 pb-24 relative">
      
      {/* FIX: Breadcrumb added here! */}
      <Breadcrumb 
             textColor="text-gray-800" 
             activeColor="text-black" 
             hoverColor="hover:text-orange-500" 
           />

      <div className="max-w-[1500px] mx-auto px-[clamp(1.5rem,5vw,4rem)] text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1E3A] mb-3">The Story Behind Our Work</h1>
        <p className="text-slate-400 text-sm md:text-base">Moments that reflect our dedication.</p>
      </div>

      <div className="max-w-[1500px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2  cursor-pointer rounded-full text-xs md:text-sm font-bold transition-all duration-300 capitalize border ${
              activeFilter === cat 
                ? 'bg-orange-500 text-white border-orange-500 shadow-md' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-orange-500 hover:text-orange-500'
            }`}
          >
            {cat.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="max-w-[1500px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        {activeFilter === 'All' ? (
          <>
            {renderGrid(galleryData.slice(0, 8), "Recent Updates")}
            {categories.filter(c => c !== 'All').map(category => {
              const categoryImages = galleryData.filter(img => img.category === category).slice(0, 4); 
              return renderGrid(categoryImages, category.replace('-', ' '), true);
            })}
          </>
        ) : (
          renderGrid(displayedImages, null)
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <button onClick={prevImage} className="absolute left-4 md:left-10 text-white/50 hover:text-white p-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <div className="relative w-[90%] max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={displayedImages[currentImageIndex].src} alt={displayedImages[currentImageIndex].title} className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <p className="text-white/80 font-bold tracking-widest uppercase text-sm mt-6">
              {displayedImages[currentImageIndex].category.replace('-', ' ')}
            </p>
          </div>
          <button onClick={nextImage} className="absolute right-4 md:right-10 text-white/50 hover:text-white p-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      )}
    </main>
  );
}