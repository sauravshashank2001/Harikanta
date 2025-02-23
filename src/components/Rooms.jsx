import React, { useState, useRef, useEffect } from 'react';
import {  ArrowLeftCircle , ArrowRightCircle  } from 'lucide-react';
import "./common.css"
const images = [
  {
    url: '/public/gym.webp',
    title: 'POOLSIDE RELAXATION',
    index: 1
  },
  {
    url: '/public/peek1.webp',
    title: 'CHIC DINING EXPERIENCES',
    index: 2
  },
  {
    url: '/public/peek2.webp',
    title: 'HOLLYWOOD FITNESS CENTER',
    index: 3
  },
  {
    url: '/public/peek1.webp',
    title: 'LUXURY AMENITIES',
    index: 4
  }
];

const Rooms = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with second image
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigate = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === 'next') {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left
      navigate('next');
    } else {
      // Swiped right
      navigate('prev');
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const getPrevIndex = () => (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="w-full relative bg-stone-100">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8f8f8_25%,transparent_25%,transparent_75%,#f8f8f8_75%,#f8f8f8),linear-gradient(45deg,#f8f8f8_25%,transparent_25%,transparent_75%,#f8f8f8_75%,#f8f8f8)] bg-[length:40px_40px] bg-[position:0_0,20px_20px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Script Text */}
        <h2 className="text-6xl custom-font md:text-8xl font-serif cursive-font text-stone-800 mb-6 px-6">
        Rooms
        </h2>

        <div className='mb-6'>Designed by renowned London-based interior architecture studio Tara Bernerd & Partners, the luxuriously appointed guest rooms and suites reflect West Coast Modernism, with bold lines, retro accents and sweeping views of the iconic Hollywood sign and Los Angeles beyond. Floor-to-ceiling windows drench the rooms in California light, while jewel-toned furnishings, mid-century inspired light fixtures and rich terrazzo surfaces evoke Hollywood glamour. </div>

        {/* Desktop Carousel */}
        {!isMobile && (
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-between">
              {/* Previous Image Preview */}
              {/* <div className="w-1/6 opacity-50 hover:opacity-75 transition-opacity cursor-pointer"
                   onClick={() => navigate('prev')}>
                <img
                  src={images[getPrevIndex()].url}
                  alt="Previous"
                  className="w-full h-32 object-cover rounded"
                />
              </div> */}

              {/* Main Image */}
              <div className="w-5/6 mx-4">
                <div className="aspect-[16/9] relative">
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].title}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-white/90">
                    <span className="uppercase tracking-wider text-sm text-stone-800">
                      {images[currentIndex].title}
                    </span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-stone-600">
                        {currentIndex + 1} / {images.length}
                      </span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => navigate('prev')}
                          className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                        >
                          <ArrowLeftCircle className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => navigate('next')}
                          className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                        >
                          <ArrowRightCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Image Preview */}
              <div className="w-1/6 opacity-50 hover:opacity-75 transition-opacity cursor-pointer"
                   onClick={() => navigate('next')}>
                    
                    <img
                        src={images[getNextIndex()].url}
                        alt="Next"
                        className="w-full h-full object-cover rounded"
                        />
                  
                
              </div>
            </div>
          </div>
        )}

        {/* Mobile Swipeable Carousel */}
        {isMobile && (
          <div 
            ref={containerRef}
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="w-full">
              <div className="aspect-[4/3] relative">
                <img
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90">
                  <p className="uppercase tracking-wider text-sm text-stone-800">
                    {images[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>
            {/* Mobile indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-stone-800' : 'w-2 bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;