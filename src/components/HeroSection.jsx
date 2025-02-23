import React from 'react'
import Carousel from './subComponent/Carousel';

function HeroSection() {
  const images = [
    "/heroImge.jpg",
    "/info_image1.webp",
    "/peek1.webp",
    "/peek2.webp",
    // "/cottage_4.jpeg"
    
  ];
  return (
    <div>
      <main className="flex justify-center items-center bg-gray-100">
        <Carousel images={images} />
      </main>
    </div>
  )
}

export default HeroSection
