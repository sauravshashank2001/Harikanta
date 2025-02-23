// import React, { useState, useEffect } from 'react';
// import { ChevronLeft,ChevronRight } from "lucide-react";
import {  ArrowLeftCircle , ArrowRightCircle  } from 'lucide-react';

// const Carousel = ({ images, autoSlide = true, autoSlideInterval = 10000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (autoSlide) {
//       const slideInterval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, autoSlideInterval);
//       return () => clearInterval(slideInterval);
//     }
//   }, [autoSlide, autoSlideInterval, images.length]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full mx-auto">
//       <div className="overflow-hidden relative h-120">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-transform transform ${
//               index === currentIndex ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 hover:cursor-pointer"
//         onClick={prevSlide}
//       >
//         <ArrowLeftCircle size={26} color="#00264d"/>

//       </button>
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 hover:cursor-pointer"
//         onClick={nextSlide}
//       >
//          <ArrowRightCircle size={26} color="#00264d"/>

//       </button>
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 ">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from 'react';
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Carousel = ({ images, autoSlide = true, autoSlideInterval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative h-120 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="w-full h-full object-cover flex-shrink-0" />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2  rounded-full p-2 shadow-lg hover:bg-gray-200"
        onClick={prevSlide}
      >
        <ArrowLeftCircle size={32} className="text-gray-800" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full p-2 shadow-lg hover:bg-gray-200"
        onClick={nextSlide}
      >
        <ArrowRightCircle size={32} className="text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-gray-800 scale-110' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
