import { Link } from 'react-router-dom';
import sv1 from '../assets/CTA/AutoCTA.png';
import sv2 from '../assets/CTA/CareCTA.png';
import sv3 from '../assets/CTA/SilvermaxCTA.png';
import sv4 from '../assets/CTA/SilvermaxCTA2.png';

const bannerMap = {
  "automobiles": sv1,
  "personal-care": sv2,
  "silvermax": sv3,
  "perfumery": sv4
};

export default function CTABanner({ category }) {
  // Finds the correct image based on the category passed from the page.
  const currentBanner = bannerMap[category] || sv3;

  return (
    <section className="relative w-full h-[300px] md:h-[550px] bg-[#0A101D] overflow-hidden font-sans group cursor-pointer border-t border-slate-100">
      <Link to="/contact" className="absolute inset-0 w-full h-full block">
        <img 
          src={currentBanner} 
          alt={`${category} Promotional Banner`} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
      </Link>
    </section>
  );
}