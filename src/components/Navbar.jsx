import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./common.css"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#e0dfdb] tex-black custom-font p-4" style={{width: "100%"}}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        
        <div style={{width: "100%"}} className="hidden md:flex justify-between">
          <div className="cursor-pointer text-black-800">HARIKANTA RESORTS</div>
          <div to="Rooms" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Rooms</div>
          <div className="cursor-pointer hover:text-yellow-400">Dining</div>
          <div className="cursor-pointer hover:text-yellow-400">Gallery</div>
          <div className="cursor-pointer hover:text-yellow-400">Wedding</div>
          <div className="cursor-pointer hover:text-yellow-400">Facilities</div>
          <div className="cursor-pointer hover:text-yellow-400">Jim Corbett</div>
          <div className="cursor-pointer hover:text-yellow-400">Contact</div>
        </div>
        <div className="md:hidden cursor-pointer hover:text-yellow-400">Harikanta</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#e0dfdb] p-5 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
        style={{zIndex:"10"}}
      >
        {/* Close Button */}
        <button className="absolute text-black top-5 right-5" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        {/* Mobile Menu Links */}
        <div className="mt-10 space-y-6 text-lg">
          <div className="cursor-pointer hover:text-yellow-400">Rooms</div>
          <div className="cursor-pointer hover:underline">Dining</div>
          <div className="cursor-pointer hover:underline">Gallery</div>
          <div className="cursor-pointer hover:underline">Wedding</div>
          <div className="cursor-pointer hover:underline">Facilities</div>
          <div className="cursor-pointer hover:underline">Jim Corbett</div>
          <div className="cursor-pointer hover:underline">Contact</div>
        </div>
      </div>
    </nav>
  );
}
