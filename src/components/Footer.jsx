import React from 'react';
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div>
      <div className="mt-8 bg-[#00264d] pt-4">
        <div className="mx-auto w-full px-4 xl:px-0 flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row justify-between w-full p-4 md:p-10">
            
            {/* Main Brand Section */}
            <div className="md:w-[600px] md:mr-15">
              <h1 className="text-white font-extrabold text-xl">
                <span className="text-white-600">HariKanta</span>
              </h1>
              <p className="mt-4 text-sm font-normal text-white/[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio facere officiis enim animi placeat eaque nesciunt alias beatae id, at dicta.
              </p>
            </div>

            {/* Contact & Links Wrapper (Stacked on Mobile) */}
            <div className="flex flex-row md:flex-row w-full md:w-auto mt-6 md:mt-0 md:ml-[200px]">
              
              {/* Contact Section */}
              <div className="md:w-[316px]">
                <div className="text-white font-medium ml-1 mb-3">Contact Us</div>
                <div className="flex mb-3">
                  <a className="mr-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                  </a>
                  <a className="mr-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-6 h-6 text-blue-500 hover:text-blue-700" />
                  </a>
                </div>
                <div className="text-white mb-0 md:mb-3">+9100010202</div>
                <div className="text-white">info@harikanta.com</div>
              </div>

              {/* Links Section */}
              <div className="ml-6 md:mt-0 md:w-[316px] md:flex md:justify-end">
                <ul className="text-sm font-medium text-white">
                  <li className="mb-2"><a href="#">About Us</a></li>
                  <li className="mb-2"><a href="#">Privacy Policy</a></li>
                  <li className="mb-2"><a href="#">info@harikanta.com</a></li>
                  <li className="mb-2"><a href="#">Contact Us</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
