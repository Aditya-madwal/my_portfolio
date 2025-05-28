import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Academics", "Experience", "Projects"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveTab(item);
    setIsMenuOpen(false); // Close menu when item is clicked on mobile
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col py-12 rounded-lg items-center w-full px-4">
        <h1 className="text-6xl font-bold text-black text-center mb-8 lg:text-9xl md:text-7xl">
          Aditya Madwal
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex rounded-full p-1 space-x-1 border border-black w-full space-around justify-between">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === item
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-black hover:bg-[#1d1d1d] hover:text-white"
              }`}>
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full">
          {/* Hamburger Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-10 h-10 space-y-1 border border-black rounded-lg bg-white hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu">
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
            <div className="flex flex-col space-y-2 border border-black rounded-lg p-2 bg-white">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                    activeTab === item
                      ? "bg-black text-white"
                      : "text-gray-700 hover:text-black hover:bg-gray-100"
                  }`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
