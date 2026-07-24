import ServiceHero from '../components/Services/ServiceHero';;
import TrustedMarkets from '../components/TrustedMarkets'
import FMCGShowcase from '../components/Services/FMCGShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import PersonalCareSolutions from '../components/PersonalCareSolutions';
import BikeShowcase from '../components/BikeShowcase.jsx'
  import CarShowcase from '../components/CarShowcase.jsx'


export default function PersonalCarePage() {
  return (
    <div>
      <ServiceHero category="personal-care" />
       <TrustedMarkets />
       <FMCGShowcase />
      <PersonalCareSolutions />
      <BikeShowcase />
      <CarShowcase />
    
      <WhyChooseUs />
      
      {/* The rest of your page content goes here */}
    </div>
  )
}



