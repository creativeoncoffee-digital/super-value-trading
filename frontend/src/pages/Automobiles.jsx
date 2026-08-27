import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';       // IMPORT NEW COMPONENT
import ServiceGrid from '../components/Services/ServiceGrid'; 
import ProductShowcase from '../components/Services/ProductShowcase';
import Faq from '../components/FAQ/Faq';
import ServiceCTA from '../components/CTABanner';
import Breadcrumb from '../components/Breadcrumb';
import AutomotiveBrandFocus from '../components/Services/AutomotiveBrandFocus';
import WhatWeOffer from '../components/Services/WhatWeOffer';
import CreateYourBrand from '../components/Services/CreateYourBrand';
import ServiceSteps from '../components/Services/ServiceSteps';
import ServiceGallery from '../components/Services/ServiceGallery';
import HeroMarquee from '../components/HeroMarquee';


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
      <ServiceGrid category={category} />
        <TrustedMarkets category={category} />
      <AutomotiveBrandFocus />
      <CreateYourBrand category={category} />
    
       <ProductShowcase category={category} />
       
      <WhatWeOffer category={category} />
      <ServiceGallery category={category} />
       <ServiceCTA category={category} />
      <Faq page="automobiles" />
    </main>
  );
}