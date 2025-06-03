import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

function About() {
  return (
    <div>
      <div className="bg-[#1d1d1d] text-[#FFFFFF] py-16 px-6 mt-4" id="about">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-[##FFFFFF] mb-8">
            ABOUT ME
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-[#FFFFFF] leading-relaxed mb-12 max-w-7xl mx-auto">
            I am a Computer Science Engineering undergraduate at K.I.E.T Group
            of Institutions. With a strong passion for web development, I enjoy
            turning ideas into interactive, user-focused digital experiences. I
            find joy in learning new technologies, building projects that solve
            real-world problems, and continuously improving my skills. My
            journey in tech is driven by curiosity, creativity, and a commitment
            to making an impact through clean and purposeful code.
          </p>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-lg">+91 8130492789</span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-3 ">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-lg">Vasundhara, Ghaziabad</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-lg">adityamadwal@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
