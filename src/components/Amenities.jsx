import React from 'react';
import { Waves, Wifi, UtensilsCrossed, Bell, Dumbbell, Dog, UserRound, Building } from 'lucide-react';
import "./common.css"
const Amenities = () => {
  const amenities = [
    { icon: <Waves size={24} />, name: 'POOL' },
    { icon: <Wifi size={24} />, name: 'FREE INTERNET ACCESS' },
    { icon: <UtensilsCrossed size={24} />, name: 'ON-SITE RESTAURANT' },
    { icon: <Bell size={24} />, name: 'ROOM SERVICE' },
    { icon: <Dumbbell size={24} />, name: 'FITNESS CENTER' },
    { icon: <Dog size={24} />, name: 'PET FRIENDLY' },
    { icon: <UserRound size={24} />, name: 'CONCIERGE' },
    { icon: <Building size={24} />, name: 'MEETING FACILITIES' }
  ];

  return (
    <div className="w-full bg-stone-50">
      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-16">
        <div className="flex">
          {/* Left side - Image */}
          <div className="w-1/2 pr-12">
            <h2 className="cursive-font text-6xl font-serif italic text-stone-800 mb-12">Amenities</h2>
            <img 
            
              src="/peek2.webp" 
              alt="Pool at night" 
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right side - Amenities Grid */}
          <div className="w-1/2 pt-24">
            <div className="grid grid-cols-2 gap-15 mt-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-stone-600">{amenity.icon}</span>
                  <span className="font-mono text-sm">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-10 md:px-4 py-8">
        <h2 className="text-6xl font-serif italic text-stone-800 mb-6 text-center cursive-font">Amenities</h2>
        {/* <img 
          src="/api/placeholder/600/400" 
          alt="Pool at night" 
          className="w-full h-48 object-cover rounded-lg shadow-lg mb-8"
        /> */}
        <div className="space-y-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-stone-600">{amenity.icon}</span>
              <span className="font-mono text-sm">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;