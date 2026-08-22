import React from 'react'
import ServicesHero from '../components/Services/ServiceHero'
import WhatWeOffer from '../components/Services/WhatWeOffer'
import ProductShowcase from '../components/Services/ProductShowcase';
import ManufacturingShowcase from '../components/Services/ManufacturingShowcase';


export default function Silvermax() {
    const category = "silvermax";

  return (
    <div>
        <ServicesHero category="silvermax" /> 
        <ProductShowcase category="personal-care" />
        <ManufacturingShowcase />
        <WhatWeOffer category={category} />
      
    </div>
  )
}
