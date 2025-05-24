import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

function ProjectCard() {
  return (
    <div className="flex justify-center py-3">
      <div className="flex  flex-col bg-[white] rounded-xl overflow-hidden w-full max-w-6xl border border-black border-2">
        {/* <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white text-lg font-medium">Project Image</span>
        </div> */}

        {/* Card Content */}
        <div className="p-6">
          {/* Project Name and GitHub Link */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-black">
              E-Commerce Platform
            </h3>
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <Github className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A full-stack e-commerce platform built with Django and React.
            Features include user authentication, product catalog, shopping
            cart, and payment integration with secure checkout process.
          </p>

          {/* Tech Stack */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-[#1d1d1d] text-white text-sm rounded-full font-medium">
                Django
              </span>
              <span className="px-4 py-2 bg-[#1d1d1d] text-white text-sm rounded-full font-medium">
                Django
              </span>
              <span className="px-4 py-2 bg-[#1d1d1d] text-white text-sm rounded-full font-medium">
                Django
              </span>
              <span className="px-4 py-2 bg-[#1d1d1d] text-white text-sm rounded-full font-medium">
                Django
              </span>
              <span className="px-4 py-2 bg-[#1d1d1d] text-white text-sm rounded-full font-medium">
                Django
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="px-6 pb-12">
      <div className="mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-12">
          FEATURED PROJECTS
        </h2>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <div className="flex justify-center mt-4">
        <button className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors w-fit">
          VIEW MY GITHUB
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
}

export default Project;
