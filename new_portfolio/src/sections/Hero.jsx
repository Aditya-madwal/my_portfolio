import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import Profile from "../assets/me_linkedin.png";

function Hero() {
  return (
    <div>
      <div className="px-6 lg:py-12 max-w-7xl mx-auto" id="home">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 flex flex-col">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              Hey! I am <span className="text-gray-700">Aditya Madwal</span>, a
              dedicated and productive engineering undergrad passionate about
              building meaningful digital experiences and solving real problems.
            </h2>

            <a
              href="/Aditya_Madwal_resume.pdf"
              download
              className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 w-fit transition-all duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0_0_black] cursor-pointer hover:text-black hover:bg-white hover:border-black hover:border">
              DOWNLOAD MY RESUME
              <ExternalLink size={18} />
            </a>
            <div className="flex space-x-4">
              <a
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0_0_black] cursor-pointer hover:text-black hover:bg-yellow-400 hover:border-black hover:border"
                href="mailto:adityamadwal@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
              <a
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0_0_black] cursor-pointer hover:text-black hover:bg-blue-400 hover:border-black hover:border"
                href="http://linkedin.com/in/aditya-madwal-118525257">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0_0_black] cursor-pointer hover:text-black hover:bg-purple-400 hover:border-black hover:border"
                href="http://github.com/aditya-madwal/">
                <Github className="w-5 h-5" />
              </a>
              <a
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0_0_black] cursor-pointer hover:text-black hover:bg-green-400 hover:border-black hover:border"
                href="https://wa.me/8130492789">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center lg:items-end h-full w-full">
            <div className="h-full w-full">
              <img
                src={Profile}
                alt="Profile"
                className="h-full w-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
