import React, { useState } from 'react';
import "./common.css"
const diningVenues = [
  {
    title: "THE TERRACE",
    description: "The Terrace offers sweeping views of Hollywood Hills and a bustling downtown Los Angeles. The casual menu features light bites inspired by coastal California fare and sharable dishes for friends gathered together. The cocktail program complements sunny days with an extensive rosé program and freshly crafted drinks. With lush surroundings and intimate seating, The Terrace is perfect for a lovely breakfast, a solo work lunch or sunset.",
    image: "/peek1.webp"
  },
  {
    title: "BAR LIS",
    description: "A sophisticated rooftop lounge inspired by the French Riviera.The casual menu features light bites inspired by coastal California fare and sharable dishes for friends gathered together. The cocktail program complements sunny days with an extensive rosé program and freshly crafted drinks. With lush surroundings and intimate seating, The Terrace is perfect for a lovely breakfast, a solo work lunch or sunset.",
    image: "/peek2.webp"
  },
  {
    title: "LOBBY BAR",
    description: "Elegant craft cocktails in a sophisticated setting.The casual menu features light bites inspired by coastal California fare and sharable dishes for friends gathered together. The cocktail program complements sunny days with an extensive rosé program and freshly crafted drinks. With lush surroundings and intimate seating, The Terrace is perfect for a lovely breakfast, a solo work lunch or sunset.",
    image: "/peek1.webp"
  }
];
const diningVenues1 = []

const Dine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    
    if (diff > 50) {
      handleNext();
      setTouchStart(0);
    } else if (diff < -50) {
      handlePrev();
      setTouchStart(0);
    }
  };

  const handleNext = () => setCurrentIndex(prev => (prev + 1) % diningVenues.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + diningVenues.length) % diningVenues.length);
  const headings = ["Dine with us","Jungle Safari", "Rooftop Escape", "Elegant Evenings"];
  return (
    <div className="bg-teal-950 relative px-4 py-8 md:p-12">
  {/* Script title */}
  <h1 className="cursive-font text-5xl md:text-7xl font-serif italic text-amber-200/90 absolute top-6 right-12">
    {headings[currentIndex]}
  </h1>

  {!isMobile ? (
    // Desktop Layout
    <div className="max-w-5xl mx-auto mt-20">
      <div className="flex gap-10 items-center">
        {/* Circular image */}
        <div className="w-1/2 flex justify-center">
          <div className="aspect-square rounded-full overflow-hidden max-h-[350px]">
            <img 
              src={diningVenues[currentIndex].image}
              alt={diningVenues[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content side */}
        <div className="w-1/2 relative">
          {/* Main content card */}
          <div className="bg-stone-100 p-6 rounded relative">
            <h2 className="text-lg md:text-xl tracking-widest mb-4 text-stone-800">
              {diningVenues[currentIndex].title}
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base">
              {diningVenues[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6 mt-8 text-amber-200/90">
        <button onClick={handlePrev} className="hover:text-amber-200 hover:cursor-pointer">←</button>
        <span className="font-mono text-lg">{String(currentIndex + 1).padStart(2, '0')}</span>
        <button onClick={handleNext} className="hover:text-amber-200 hover:cursor-pointer">→</button>
      </div>
    </div>
  ) : (
    // Mobile Layout
    <div 
      className="mt-16 py-10"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="relative">
        <h2 className="text-lg md:text-xl tracking-widest text-white mb-3">
          {diningVenues[currentIndex].title}
        </h2>
        
        <div className="relative">
          <img 
            src={diningVenues[currentIndex].image}
            alt={diningVenues[currentIndex].title}
            className="max-w-[100%] object-cover rounded h-[280px] md:h-[320px]"
          />
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default Dine;