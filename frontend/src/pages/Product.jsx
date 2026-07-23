import ServiceHero from '../components/Services/ServiceHero';
import ProductShowcase from '../components/Services/ProductShowcase';
import TrustedMarkets from '../components/TrustedMarkets'
import FMCGShowcase from '../components/Services/FMCGShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import PersonalCareSolutions from '../components/PersonalCareSolutions';


export default function PersonalCarePage() {
  return (
    <div>
      <ServiceHero category="personal-care" />
       <TrustedMarkets />
       <FMCGShowcase />
      <ProductShowcase />
      <PersonalCareSolutions />
      <WhyChooseUs />
      
      {/* The rest of your page content goes here */}
    </div>
  )
}