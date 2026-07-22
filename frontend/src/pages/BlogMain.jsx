import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogData, categories } from '../data/BlogData';

gsap.registerPlugin(ScrollTrigger);

export default function BlogMain() {
  const pageRef = useRef(null);
  const gridRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter grid posts based on category
  const filteredPosts = activeCategory === "All Categories" 
    ? blogData.gridPosts 
    : blogData.gridPosts.filter(post => post.category === activeCategory);

  // Initial Page Animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal the top Latest News section
      gsap.fromTo('.reveal-top',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // Re-trigger grid animation when category changes
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.grid-card',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  // Modal Scroll Lock effect
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedPost]);

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  return (
    <main ref={pageRef} className="w-full bg-[#f8fafc] min-h-screen pb-24 font-sans">
      
      {/* --- TOP SECTION: LATEST NEWS --- */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-16">
        <h1 className="reveal-top text-4xl md:text-5xl font-bold text-[#0B1E3A] mb-12">
          Latest News
        </h1>

        {/* Big Featured Post */}
        <div 
          onClick={() => openModal(blogData.featured)}
          className="reveal-top flex flex-col lg:flex-row gap-8 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer mb-8 group"
        >
          {/* Image Left */}
          <div className="w-full lg:w-[65%] h-[300px] md:h-[400px] overflow-hidden">
            <img 
              src={blogData.featured.img} 
              alt={blogData.featured.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          {/* Content Right */}
          <div className="w-full lg:w-[35%] p-8 md:p-12 flex flex-col justify-center">
            <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">
              {blogData.featured.category}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0B1E3A] leading-tight mb-6 group-hover:text-[#084ea3] transition-colors">
              {blogData.featured.title}
            </h2>
            <div className="mt-auto">
              <p className="text-slate-500 text-sm font-medium">
                {blogData.featured.author} • {blogData.featured.date}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Featured Row (3 items) */}
        <div className="reveal-top grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.subFeatured.map((post) => (
            <div 
              key={post.id} 
              onClick={() => openModal(post)}
              className="flex gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-1">
                  {post.category}
                </p>
                <h3 className="text-[#0B1E3A] font-bold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[#084ea3] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-xs font-medium">
                  {post.author} • {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MIDDLE SECTION: FILTERS & GRID --- */}
      <section className="max-w-7xl mx-auto px-8 pt-12">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] mb-8">
            Industry Insights, Market Trends, <br className="hidden md:block"/> and Logistics
          </h2>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-[#0B1E3A] text-white border-[#0B1E3A] shadow-lg' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => openModal(post)}
              className="grid-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* Image Top */}
              <div className="w-full h-56 overflow-hidden bg-slate-100">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Content Bottom */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-3">
                  {post.category}
                </p>
                <h3 className="text-xl font-bold text-[#0B1E3A] leading-snug mb-6 group-hover:text-[#084ea3] transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-slate-500 text-xs font-medium flex items-center justify-between">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- READING MODAL (7XL) --- */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-md transition-opacity">
          
          {/* Modal Container */}
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-colors text-slate-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Modal Hero Image */}
            <div className="w-full h-[40vh] md:h-[50vh] relative bg-slate-900">
              <img 
                src={selectedPost.img} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* Modal Content */}
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 -mt-32 relative z-10 bg-white rounded-t-3xl md:rounded-t-none md:bg-transparent md:-mt-0">
              
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                {selectedPost.category}
              </p>
              
              <h1 className="text-3xl md:text-5xl font-bold text-[#0B1E3A] leading-tight mb-6">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-full bg-[#084ea3] flex items-center justify-center text-white font-bold text-xl">
                  {selectedPost.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#0B1E3A]">{selectedPost.author}</p>
                  <p className="text-slate-500 text-sm">{selectedPost.date}</p>
                </div>
              </div>

              {/* Injected HTML Content */}
              <div 
                className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              ></div>

            </div>
          </div>
          
          {/* Click outside to close (Invisible background overlay) */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}

    </main>
  );
}