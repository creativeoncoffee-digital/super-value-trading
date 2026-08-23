import React from 'react'
import ServicesHero from '../components/Services/ServiceHero'
import WhatWeOffer from '../components/Services/WhatWeOffer'
import ProductShowcase from '../components/Services/ProductShowcase';
import ManufacturingShowcase from '../components/Services/ManufacturingShowcase';
import ServiceSteps from '../components/Services/ServiceSteps'; 
import ServiceGrid from '../components/Services/ServiceGrid';
import ServiceGallery from '../components/Services/ServiceGallery';
import Breadcrumb from '../components/Breadcrumb';



export default function Silvermax() {
    const category = "silvermax";

  return (
    <div>
      <Breadcrumb 
        textColor="text-slate-300" 
        activeColor="text-white" 
        hoverColor="hover:text-orange-500" 
      />
        <ServicesHero category="silvermax" /> 
        <ServiceSteps category={category} />
        <ServiceGrid category={category} />
        <ProductShowcase category="personal-care" />
        <ManufacturingShowcase category="silvermax"  />
        <WhatWeOffer category={category} />
        <ServiceGallery category={category} />
      
    </div>
  )
}
