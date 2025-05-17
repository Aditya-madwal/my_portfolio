// src/components/Footer.jsx
import React from "react";

const Footer = ({ name }) => {
  return (
    <footer className="mt-32 py-8 border-t border-black/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {name}
          </p>
          <div className="flex gap-6">
            {/* Footer links can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
