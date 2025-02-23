import { hexToRgb } from '@mui/material'
import React from 'react'
import "./common.css"

function IntroJim() {
  return (
    <div className="relative w-full pt-5 bg-amber-50">
      {/* Background Image */}
      <img  style={{border: "2px solid #b4936f"}} src="/public/jim_corbett.jpg" alt="Jim Corbett" className="w-full h-[70vh] object-cover opacity-50" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="cursive-font text-black-200 text-6xl md:text-8xl font-bold text-center drop-shadow-lg" >
          Jim Corbett
        </div>
      </div>
      <div>
      <div className="relative custom-font h-40 pt-10 pl-8">
  {/* Background with opacity */}
  <div 
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/public/pattern-gold.svg.png')",
      backgroundSize: "105px 105px",
      backgroundRepeat: "repeat",
      backgroundColor: "#e0dfdb",
      opacity: 0.5, // Only applies to background
      zIndex: 0,
    }}
  ></div>

  {/* Text (keeps full opacity) */}
  <h1 className="relative text-black z-10 text-3xl font-normal">
    DISCOVER JIM CORBETT FROM <br/>OUR LUXURY HOTEL
  </h1>
</div>

      
      
      </div>
      

    </div>
  );
}

export default IntroJim;


