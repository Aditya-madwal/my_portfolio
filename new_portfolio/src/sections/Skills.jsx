import React from "react";
import { techskills } from "../assets/data.js";
function Skills() {
  return (
    <div className="px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1d] text-center mb-12">
          MY TECHNICAL SKILLS
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 max-w-6xl mx-auto">
          {techskills.map((skill, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-[#1d1d1d] rounded-full px-6 py-3 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0_0_black] cursor-pointer">
              <span className="text-[#1d1d1d] font-medium text-sm lg:text-base">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
