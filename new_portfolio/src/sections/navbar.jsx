import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ["Home", "About", "Academics", "Experience", "Projects"];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col py-12 rounded-lg items-center">
        <h1 className="text-6xl font-bold text-black text-center mb-8 lg:text-9xl md:text-7xl">
          Aditya Madwal
        </h1>

        <div className="flex rounded-full p-1 space-x-1 border border-black w-full space-around justify-between">
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
      </div>
    </div>
  );
};

export default Navbar;
