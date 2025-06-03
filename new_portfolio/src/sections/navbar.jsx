import React, { useState } from "react";
import { navItems } from "../assets/data.js";
import { Home, User, BookOpen, Briefcase, Folder } from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleItemClick = (item) => {
    setActiveTab(item);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:py-12 rounded-lg items-center w-full px-4 py-4">
        <h1 className="text-7xl font-bold text-black text-center md:mb-8 mb-4 lg:text-9xl md:text-7xl">
          Aditya Madwal
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex rounded-full p-1 space-x-1 border border-black w-full space-around justify-between max-w-7xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`flex gap-2 justify-center items-center px-6 py-2 rounded-full text-md font-medium transition-all duration-200 ${
                activeTab === item.name
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-[#1d1d1d] hover:text-white"
              }`}>
              <item.icon className="w-6 h-6" />
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="w-full">
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden max-h-96 opacity-100 mb-0`}>
            <div className="flex justify-center items-center bg-white border w-fit mx-auto p-1 border-black rounded-full md:hidden">
              {navItems.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => handleItemClick(name)}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    activeTab === name ? "bg-black text-white" : "text-black"
                  }`}>
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
