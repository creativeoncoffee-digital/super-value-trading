import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Import your components
import HomeHero from '../components/Home/HomeHero';
import HomeStats from '../components/Home/HomeStats';
import pic from '../assets/img/office-interior.jpg';
import grooming from '../assets/img/grooming-flatlay.jpg';
import perfumery from '../assets/img/perfume-stones.jpg';
import consumerGoods from '../assets/img/warehouse.jpg';
import automobiles from '../assets/img/tires.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll reveal for the other elements (Who We Are & Sectors Grid)
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. New Animated Stats Component */}
      <HomeStats />

      {/* 3. Who We Are */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 reveal-up">
            <img src={pic} alt="Office in Business Bay" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
          <div className="w-full md:w-1/2 reveal-up">
            <p className="text-orange-500 font-semibold uppercase tracking-wide text-md mb-4">Who we are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A trading house built on compliance and reach.</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Operating from Business Bay, one of Dubai's premier commercial districts, Super Value General Trading LLC sources, distributes and trades high-demand commodities and consumer goods across international markets.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Every engagement is backed by full compliance with UAE commercial regulations and international trade standards — and by direct access to Jebel Ali Port, the region's busiest trade hub.
            </p>
            <Link to="/about" className="inline-block border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white  py-3 px-8 rounded transition-colors">
              Read our full story
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-md mb-4">What we trade</p>
              <h2 className="text-3xl md:text-4xl max-w-2xl font-bold text-slate-900">Four core sectors, one accountable supply chain</h2>
            </div>
            <Link to="/business" className="mt-6 md:mt-0 inline-block border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold py-3 px-8 rounded transition-colors">
              All business activities
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sector 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md reveal-up">
              <img src={grooming} alt="Personal Care" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">01 — Personal Care</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Blades & Grooming</h3>
                <p className="text-slate-600 text-sm">Authorised distribution of premium razors and grooming systems for regional markets.</p>
              </div>
            </div>
            {/* Sector 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md reveal-up" style={{ transitionDelay: '100ms' }}>
              <img src={perfumery} alt="Perfumery" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">02 — Perfumery</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fragrances & Perfume Oils</h3>
                <p className="text-slate-600 text-sm">Premium perfumes and fragrance products sourced for global markets.</p>
              </div>
            </div>
            {/* Sector 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md reveal-up" style={{ transitionDelay: '200ms' }}>
              <img src={consumerGoods} alt="Consumer Goods" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">03 — Consumer Goods</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Specialty & Cosmetic</h3>
                <p className="text-slate-600 text-sm">A diverse portfolio spanning sandalwood-based products, cosmetics and beauty goods.</p>
              </div>
            </div>
            {/* Sector 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md reveal-up" style={{ transitionDelay: '300ms' }}>
              <img src={automobiles} alt="Automobiles" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">04 — Automobiles</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Vehicles & Auto Parts</h3>
                <p className="text-slate-600 text-sm">Cross-border trade and logistics management of vehicles and automotive parts.</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </main>
  );
}