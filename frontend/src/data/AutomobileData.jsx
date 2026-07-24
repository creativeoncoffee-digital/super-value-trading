// IMPORT YOUR IMAGES HERE
import bikeImg from '../assets/Products/bike-top.png'; // Adjust path
import carImg from '../assets/Products/car-top.png';   // Adjust path

export const automobileShowcaseData = [
  {
    id: "scooter",
    titlePart1: "High-Performance",
    titlePart2: "Mobility.",
    description: "Premium two-wheeler and automotive solutions engineered for the modern road. Distributed across our global network to keep your business moving forward.",
    highlight: "Uncompromising quality and endurance.",
    image: bikeImg,
    maxWidth: "max-w-[400px]", // Bikes are narrower
  },
  {
    id: "car",
    titlePart1: "Next-Gen",
    titlePart2: "Automotive.",
    description: "Advanced four-wheeler solutions built for comfort, speed, and absolute reliability. We source and distribute top-tier vehicles for global markets.",
    highlight: "Driving the future of transportation.",
    image: carImg,
    maxWidth: "max-w-[600px]", // Cars need to be wider
  }
];