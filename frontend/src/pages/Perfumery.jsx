import ServiceHero from '../components/Services/ServiceHero';
import TrustedMarkets from '../components/TrustedMarkets';
import ServiceAbout from '../components/Services/ServiceAbout';
// import PerfumeryPrivateLabelShowcase from '../components/Services/PerfumeryPrivateLabelShowcase';
// import PerfumeryPrivateLabelProcess from '../components/Services/PerfumeryPrivateLabelProcess';
import ProductShowcase from '../components/Services/ProductShowcase';
// import PerfumeryVisualStory from '../components/Services/PerfumeryVisualStory';
// import PerfumeryCapabilities from '../components/Services/PerfumeryCapabilities';
import ServiceGrid from '../components/Services/ServiceGrid';
// import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/FAQ/Faq';
// import ServiceCTA from '../components/CTABanner';
import Breadcrumb from '../components/Breadcrumb';
import WhatWeOffer from '../components/Services/WhatWeOffer';
import CreateYourBrand from '../components/Services/CreateYourBrand';
import ServiceSteps from '../components/Services/ServiceSteps';
// import ManufacturingShowcase from '../components/Services/ManufacturingShowcase';
import ServiceGallery from '../components/Services/ServiceGallery';
import CTABanner from '../components/CTABanner';
import WhyPartner from '../components/WhyPartner';
import HeroMarquee from '../components/HeroMarquee';

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
          <WhyPartner />
    
      
      {/* Conditionally render the Private Label Showcase instead of standard ServiceGrid */}
      
        {/* <PerfumeryPrivateLabelShowcase category={category} /> */}
    
    
    

      {/* <PerfumeryPrivateLabelProcess category={category} /> */}
      
      {/* Product Showcase acts as the distinct "Super Value - Our Own Brand" section based on data */}
      <ProductShowcase category={category} />
      
      {/* <PerfumeryVisualStory category={category} />
      <PerfumeryCapabilities category={category} />
       */}
       <CreateYourBrand category={category} />
      {/* <WhyChooseUs category={category} /> */}
      <WhatWeOffer category={category} />
      <ServiceGallery category={category} />
      <CTABanner />
      <Faq page="perfumery" />
    </main>
  );
}   