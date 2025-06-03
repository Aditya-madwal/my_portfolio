import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { projectData } from "../assets/data.js";

function ProjectCard({ project }) {
  return (
    <div className="flex justify-center py-3">
      <div className="flex flex-col bg-white rounded-xl overflow-hidden w-full max-w-6xl border-[#1d1d1d] border-2">
        <div className="p-6">
          {/* Project Name and GitHub Link */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-[#1d1d1d]">
              {project.name}
            </h3>
            <a
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0_0_black] cursor-pointer hover:text-black hover:bg-purple-400 hover:border-black hover:border"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#1d1d1d] text-white text-sm rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="px-6 pb-12" id="projects">
      <div className="mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1d] text-center mb-12">
          FEATURED PROJECTS
        </h2>
      </div>
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}

      <div className="flex justify-center mt-4">
        <button className="bg-[#1d1d1d] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors w-fit">
          VIEW MY GITHUB
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
}

export default Project;
