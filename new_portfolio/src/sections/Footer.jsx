import React from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] text-white py-10 m-3 rounded-lg">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Aditya Madwal</h3>
          <p className="text-sm text-gray-400">+91 8130492789</p>
          <p className="text-sm text-gray-400">adityamadwal@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:adityamadwal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
          <a
            href="http://github.com/aditya-madwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a
            href="http://linkedin.com/in/aditya-madwal-118525257"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a
            href="https://wa.me/8130492789"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
