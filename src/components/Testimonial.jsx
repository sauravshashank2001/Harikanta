import React, { useEffect, useRef } from "react";
import "./Testimonial.css";
import "./common.css"
const testimonials = [
  { name: "Jon Doe1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Jon Doe2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Jon Doe3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Jon Doe4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Jon Doe5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  
];

const TestimonialCard = ({ name, description }) => (
  <div className="testimonial-card flex-shrink-0 w-64 h-80 bg-gray-100 p-10 rounded-lg shadow-md mx-4">
    <div className="flex items-center mb-5">
      <img alt="testimonial" src="/public/dog.webp" className="w-12 h-12 rounded-full object-cover" />
      <div className="pl-4">
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-gray-500 text-sm">Designer</p>
      </div>
    </div>
    <div className="leading-relaxed mb-4 overflow-scroll h-45 flex flex-wrap overflow-x-hidden testimonialDescription">{description}</div>
    
  </div>
);

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollAmount = 1; // Speed of scrolling

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Reset to the start for infinite scrolling
        }
      }
    };

    const interval = setInterval(scroll, 30); // Smooth scrolling interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="cursive-font text-6xl font-medium text-gray-900 mb-12 text-center">Happy Customers</h1>
        <div
          className="scroll-container overflow-hidden whitespace-nowrap relative"
          ref={scrollContainerRef}
        >
          <div className="flex w-max">
            {/* Duplicate testimonials for seamless scrolling */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} name={testimonial.name} description={testimonial.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
