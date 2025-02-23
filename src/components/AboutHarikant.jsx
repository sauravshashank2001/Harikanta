import React from 'react';

const AboutHarikanta = () => {
  return (
    <div className="relative min-h-screen bg-[#e0dfdb]">
      {/* Main content container */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left column - Text content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center">
          <div className="max-w-xl">
            <p className="text-stone-700 leading-relaxed mb-6">
              Harikanta Resort is a sophisticated lifestyle hotel 
              near Jim Corbett that brings a global sensibility, 
              elevated service and laidback California cool to the 
              heart of Jim Corbett. 
              The hotel features 11 sophisticated guest rooms and 4 
              luxury suites, a rooftop pool with sweeping views of 
              Jim Corbett and the iconic Tiger sign, 1,000 
              square feet of meeting and event space and a state-
              of-the-art fitness center.
            </p>
            
            <p className="text-stone-700 leading-relaxed">
              Our world-class culinary and nightlife destinations offer outdoor dining and 
              drinks at the rooftop lounge Bar Lis, a French-
              inspired brasserie at Mes Amis in the lobby and 
              European fare paired with Jugle views at The 
              Terrace.
            </p>
          </div>
        </div>
        
        {/* Right column - Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            style={{objectFit:"cover"}}
            src="/infoImage_large.webp"
            alt="Hotel exterior view"
            className="w-full md:w-[90%] h-full object-cover md:mt-[-10vw]"
          />
          <div className="absolute inset-0 bg-[#e0dfdb]-900/20" />
        </div>
      </div>
    </div>
  );
};

export default AboutHarikanta;

