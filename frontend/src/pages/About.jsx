import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Import your components and assets
import Hero from '../components/About/AboutHero';
import handshakeImg from '../assets/img/office-interior.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll reveal for all elements with the 'reveal-up' class
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power2.out',
            scrollTrigger: { 
              trigger: el, 
              start: 'top 85%' 
            }
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full">
      {/* 1. The custom About Hero (includes Hero, Our Company, and Stats) */}
      <Hero />

      {/* 2. Mission, Vision & Values Section */}
      <section className="py-24 px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 reveal-up">
            <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-4">Mission, vision & values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What guides every shipment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Mission */}
            <div className="reveal-up">
              <div className="text-slate-200 font-bold text-6xl mb-4 font-mono">01</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Streamlining international trade</h4>
              <p className="text-slate-600 leading-relaxed">
                To streamline international trade by sourcing and delivering high-quality products from leading manufacturers and brands around the world, at competitive value.
              </p>
            </div>

            {/* Vision */}
            <div className="reveal-up" style={{ transitionDelay: '100ms' }}>
              <div className="text-slate-200 font-bold text-6xl mb-4 font-mono">02</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">A global trading powerhouse</h4>
              <p className="text-slate-600 leading-relaxed">
                To become a top-tier global trading powerhouse connecting the world's finest brands, products and opportunities across international markets.
              </p>
            </div>

            {/* Values */}
            <div className="reveal-up" style={{ transitionDelay: '200ms' }}>
              <div className="text-slate-200 font-bold text-6xl mb-4 font-mono">03</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Integrity, value and commitment</h4>
              <p className="text-slate-600 leading-relaxed">
                Integrity & reliability in upholding ethical standards and compliance; value optimisation through efficient supply chains; and customer commitment built on trust and performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Corporate Structure Section */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          
          <div className="w-full md:w-1/2 reveal-up">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src={handshakeImg} 
                alt="Business partnership handshake" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 reveal-up">
            <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-4">Corporate structure</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Owned and led by an experienced, hands-on team.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Super Value General Trading LLC is owned by two shareholders in equal partnership, supported by a leadership team with decades of combined experience across FMCG, perfumes, cosmetics, food commodities and automotive trade.
            </p>
            <Link to="/leadership" className="inline-block border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold py-3 px-8 rounded transition-colors">
              Meet the leadership team
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Bottom Call to Action Band */}
      <section className="bg-[#0f172a] py-20 px-8 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 reveal-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Want to see what we trade?</h2>
          <Link to="/business" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded transition-colors inline-block">
            View business activities
          </Link>
        </div>
      </section>

    </main>
  );
}