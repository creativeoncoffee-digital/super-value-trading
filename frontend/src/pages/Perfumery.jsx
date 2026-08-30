import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';
import ServiceGrid from '../components/Services/ServiceGrid';
import Faq from '../components/FAQ/Faq';
import Breadcrumb from '../components/Breadcrumb';
import ServiceSteps from '../components/Services/ServiceSteps';
import ServiceGallery from '../components/Services/ServiceGallery';
import ServiceCTA from '../components/CTABanner';
import WhyPartner from '../components/WhyPartner';
import HeroMarquee from '../components/HeroMarquee';
import AdvancedFeature from '../components/Services/AdvancedFeature';

export default function Perfumery() {
  const category = "perfumery";

  return (
    <main className="w-full">
      <Breadcrumb 
             textColor="text-slate-300" 
             activeColor="text-white" 
             hoverColor="hover:text-orange-500" 
           />
      
      <ServiceHero category={category} />
      <HeroMarquee  />
      <ServiceSteps category={category} />
      <TrustedMarkets category={category} />
        <ServiceAbout category={category} />
          <ServiceGrid category={category} />
             <AdvancedFeature category={category} />
          <WhyPartner />
           <ServiceCTA/>
      <ServiceGallery category={category} />
     <Faq page={category} />
    </main>
  );
}   