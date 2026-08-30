import ServicesHero from '../components/Services/ServiceHero'
import ServiceSteps from '../components/Services/ServiceSteps'; 
import ServiceGrid from '../components/Services/ServiceGrid';
import ServiceGallery from '../components/Services/ServiceGallery';
import Breadcrumb from '../components/Breadcrumb';
import HeroMarquee from '../components/HeroMarquee';
import ServiceAbout from '../components/Services/ServiceAbout';
import TrustedMarkets from '../components/TrustedMarkets';
import AdvancedFeature from '../components/Services/AdvancedFeature';
import Faq from '../components/FAQ/Faq';
import WhyPartner from '../components/WhyPartner';
import ServiceCTA from '../components/CTABanner';




export default function Silvermax() {
    const category = "silvermax";
  //   const silvermaxHighlights = [
  //   "Cryogenic Coated Blades",
  //   "Platinum Edges",
  //   "Precision Engineering",
  //   "Global Barber Choice",
  //   "OEM Capable"
  // ];

  return (
    <div>
      <Breadcrumb 
        textColor="text-slate-300" 
        activeColor="text-white" 
        hoverColor="hover:text-orange-500" 
      />
        <ServicesHero category="silvermax" /> 
        <HeroMarquee/>
        <ServiceSteps category={category} />
        <ServiceAbout category={category} />
        <TrustedMarkets category={category} />
        <ServiceGrid category={category} />
        <AdvancedFeature category={category} />
        <WhyPartner/>
         <ServiceCTA/>
        <ServiceGallery category={category} />
       <Faq page={category} />
      
    </div>
  )
}
