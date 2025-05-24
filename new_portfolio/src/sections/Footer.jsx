import React from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Aditya Madwal</h3>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a
            href="https://t.me/yourtelegram"
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
