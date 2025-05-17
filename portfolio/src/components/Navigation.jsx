// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ name }) => {
  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 backdrop-blur-sm rounded-lg w-[80vw] border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-semibold text-[1.5rem]">{name}</span>
        <div className="flex items-center gap-8">
          <a href="#experience" className="text-sm transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-sm transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm transition-colors">
            About
          </a>
          <a
            href="mailto:adityamadwal@gmail.com"
            className="text-sm px-4 py-2 bg-primary rounded-full transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
