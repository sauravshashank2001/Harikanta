import React from 'react';

const PetFriendlySection = () => {
  return (
    <div className="w-full bg-stone-50 py-8 md:py-16">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-[#d5d3cc] rounded-lg p-8 flex items-center gap-12" style={{border:"1px solid #b4936f"}}>
            <div className="w-1/2">
              <img
                src="/public/dog.webp"
                alt="Dog relaxing on hotel bed"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 space-y-6">
              <h2 className="text-4xl font-mono uppercase tracking-wider">
                Furry Friends Welcome
              </h2>
              <div className="w-12 h-px bg-stone-300" />
              <p className="font-mono text-stone-600 leading-relaxed">
                Every guest of Hrikanta resort receives the red-carpet
                treatment, including our four-legged friends. From
                gourmet treats at check-in to fluffy beds, it's easy to
                bring your furry friend.
              </p>
              <button className="font-mono uppercase text-sm tracking-wider hover:text-stone-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4">
        <div className="bg-white rounded-lg p-6 space-y-6">
          <img
            src="/public/gym.webp"
            alt="Dog relaxing on hotel bed"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-mono uppercase tracking-wider">
              Furry Friends Welcome
            </h2>
            <p className="font-mono text-sm text-stone-600 leading-relaxed">
              Every guest of Thompson Hollywood receives the red-carpet
              treatment, including our four-legged friends. From
              gourmet treats at check-in to fluffy beds, it's easy to
              bring your furry friend.
            </p>
            <button className="font-mono uppercase text-sm tracking-wider hover:text-stone-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetFriendlySection;