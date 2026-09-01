import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';       // IMPORT NEW COMPONENT
import ServiceGrid from '../components/Services/ServiceGrid'; 
import Faq from '../components/FAQ/Faq';
import ServiceCTA from '../components/CTABanner';
import Breadcrumb from '../components/Breadcrumb';
import ServiceSteps from '../components/Services/ServiceSteps';
import ServiceGallery from '../components/Services/ServiceGallery';
import HeroMarquee from '../components/HeroMarquee';
import AdvancedFeature from '../components/Services/AdvancedFeature';
import WhyPartner from '../components/WhyPartner';


export default function Automobiles() {
  const category = "automobiles";

  return (
    <main className="w-full">
    <Breadcrumb 
           textColor="text-slate-300" 
           activeColor="text-white" 
           hoverColor="hover:text-orange-500" 
         />
      <ServiceHero category={category} />
      <HeroMarquee/>
      <ServiceSteps category={category} />
       <ServiceAbout category={category} />
       <TrustedMarkets category={category} />
      <ServiceGrid category={category} />
      <AdvancedFeature category={category} />
      <WhyPartner />
       <ServiceCTA category={category}/>
      <ServiceGallery category={category} />
      <Faq page={category} />
    </main>
  );
}