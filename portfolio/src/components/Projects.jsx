import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, ChevronRight } from "lucide-react";

const ProjectShowcase = ({ project }) => {
  return (
    // <div className="flex flex-col lg:flex-row gap-8 items-center p-8">
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 my-12">
      {/* Left: Image */}
      {/* <div className="lg:w-1/2 overflow-hidden rounded-xl">
        <img
          src={
            project.image ||
            "https://images.unsplash.com/photo-1745990652119-f13cced69b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
          }
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="md:w-32 flex-shrink-0">
        <span className="text-sm">{project.period}</span>
      </div>

      {/* Right: Project Details */}
      <div className="w-fit">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-purple-500 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        {/* Features */}
        <div className="space-y-3 mb-8">
          <h4 className="font-semibold text-gray-800">Key Features:</h4>
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <ArrowUpRight size={16} className="mt-1 text-blue-500" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* <button className="px-6 py-2 bg-purple-200 text-purple-700 rounded-lg hover:bg-transparent hover:text-purple hover:underline transition-colors flex items-center gap-2">
          Explore Project
          <ExternalLink size={16} className="text-white" />
        </button> */}
      </div>
    </div>
  );
};

const Projects = ({ projectsData }) => {
  // Featured project is the first one in the array
  const featuredProject = projectsData;

  return (
    <section id="projects" className=" bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Projects
          </h2>
        </div>
        {featuredProject.map((project, index) => (
          <ProjectShowcase key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
