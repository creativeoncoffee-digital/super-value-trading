import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';       // IMPORT NEW COMPONENT
import ServiceGrid from '../components/Services/ServiceGrid'; 
import ProductShowcase from '../components/Services/ProductShowcase';
import PersonalCareSolutions from '../components/PersonalCareSolutions';
import BikeShowcase from '../components/BikeShowcase';
import CarShowcase from '../components/CarShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/FAQ/Faq';
import ServiceCTA from '../components/CTABanner';
import AestheticShowcase from '../components/Services/AestheticShowcase';
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
       
  
      {/* <PersonalCareSolutions category={category} /> */}
      
      {/* Custom Automobile Components */}
      {/* <BikeShowcase category={category} />
      <CarShowcase category={category} /> */}
      
      {/* <WhyChooseUs category={category} /> */}
      <WhatWeOffer category={category} />
      <ServiceGallery category={category} />
      
      {/* FAQ for Automobiles */}
       <ServiceCTA category={category} />
       {/* <AestheticShowcase /> */}
      <Faq page="automobiles" />
    </main>
  );
}