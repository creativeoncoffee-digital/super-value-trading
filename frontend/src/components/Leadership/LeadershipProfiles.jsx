import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Import images
import smritiImg from '../../assets/img/smriti-attrey.jpg';
import tinaImg from '../../assets/img/tina-sharma.jpg';
import pankajImg from '../../assets/img/pankaj-attrey.jpg';
import anoushkaImg from '../../assets/img/anoushka-bhagat.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipProfiles() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Hero Text Reveal
      gsap.fromTo('.hero-text',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );

      // 2. Scroll Reveal for all text blocks and images
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
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

      // 3. Staggered reveal for Co-Founder cards
      gsap.fromTo('.founder-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.founders-section',
            start: 'top 80%'
          }
        }
      );

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0f172a] text-white pt-32 pb-24 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="hero-text flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                Ownership & Management
              </p>
            </div>
            <h1 className="hero-text text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              The people behind <br/><span className="text-orange-500">Super Value.</span>
            </h1>
            <p className="hero-text text-slate-300 text-lg leading-relaxed max-w-2xl">
              An equal ownership partnership, backed by a leadership team with decades of experience across FMCG, perfumery, cosmetics, food commodities and automotive trade[cite: 6].
            </p>
          </div>
        </div>
      </section>

      {/* --- CO-FOUNDERS SECTION --- */}
      <section className="founders-section py-24 px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 reveal-up">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Corporate Structure
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Owned by two equal partners
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-slate-500 text-lg">
                Super Value General Trading LLC is owned by two shareholders in equal partnership[cite: 6].
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            
            {/* Founder 1 */}
            <div className="founder-card group cursor-default">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-8 bg-slate-100">
                <img 
                  src={smritiImg} 
                  alt="Smriti Attrey" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Smriti Attrey</h3>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Co-Founder — 50% Ownership</p>
              <p className="text-slate-500 leading-relaxed">
                Indian national. Co-founder and equal partner in Super Value General Trading LLC since incorporation in 2018[cite: 6].
              </p>
            </div>

            {/* Founder 2 */}
            <div className="founder-card group cursor-default">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-8 bg-slate-100">
                <img 
                  src={tinaImg} 
                  alt="Tina Sharma" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Tina Sharma</h3>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Co-Founder — 50% Ownership</p>
              <p className="text-slate-500 leading-relaxed">
                Indian national. Co-founder and equal partner in Super Value General Trading LLC[cite: 6].
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CEO SECTION (Alternate Layout) --- */}
      <section className="py-24 px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Left */}
          <div className="w-full lg:w-5/12 reveal-up relative">
            {/* Decorative background block */}
            <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src={pankajImg} 
                alt="Mr. Pankaj Attrey" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-7/12 lg:pl-10">
            <div className="reveal-up">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Leadership Profile — CEO
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Mr. Pankaj Attrey</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Leads sales and business development with over 24 years of international experience spanning 90 countries worldwide[cite: 6].
              </p>
            </div>

            <div className="space-y-6 reveal-up">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors group">
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Global sales leadership</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Former General Manager at Swiss Arabian Perfumes Group and Business Head at Eurostar Group, driving brand distribution and value chain management[cite: 6].
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors group">
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Industry expertise</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Proven expertise in FMCG, perfumes & cosmetics, food commodities and automotive sectors, with a strategic vision for market expansion[cite: 6].
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- BDM SECTION (Reverse Layout) --- */}
      <section className="py-24 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Text Left */}
          <div className="w-full lg:w-7/12 lg:pr-10">
            <div className="reveal-up">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Business Development Manager
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Anoushka Bhagat</h2>
              
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  A young entrepreneur and business development professional with a strong foundation in commerce, law and international business. Anoushka holds a B.Com (Hons) from the University of Delhi, an LL.B. degree, and a postgraduate qualification from Canada[cite: 6].
                </p>
                <p>
                  With experience in strategic partnerships, business growth, corporate relations and international markets, she is passionate about building meaningful business connections and creating opportunities across industries. Her multidisciplinary background, combined with a global outlook, enables her to drive sustainable growth and foster long-term business success[cite: 6].
                </p>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-5/12 reveal-up relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform rotate-3 transition-transform duration-500 hover:rotate-0"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src={anoushkaImg} 
                alt="Anoushka Bhagat" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-[#0f172a] py-20 px-8 text-center text-white border-t border-slate-800">
        <div className="max-w-3xl mx-auto reveal-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Want to work with our team directly?</h2>
          <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded transition-colors inline-block">
            Get in touch
          </Link>
        </div>
      </section>

    </main>
  );
}