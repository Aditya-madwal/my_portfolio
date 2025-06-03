import React from "react";
import { expData } from "../assets/data.js";
import { ArrowRight } from "lucide-react";

function WorkExperience() {
  return (
    <div>
      {/* Work Experience Section */}
      <div className="py-12 px-6 mt-4" id="experience">
        <div className="mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1d] text-center mb-12">
            WORK EXPERIENCE
          </h2>

          {/* Experience Cards */}
          {expData.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              points={exp.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, duration, points }) {
  const firstLetter = company.charAt(0).toUpperCase();

  return (
    <div className="space-y-6 max-w-6xl mx-auto my-4">
      <div className="bg-[#1d1d1d] rounded-xl p-8 flex flex-col lg:flex-row items-start gap-6 justify-center">
        {/* Logo and Date */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[20%]">
          <div className="w-36 h-36 bg-[#FFFFFF] rounded-full flex items-center justify-center mb-4">
            <span className="text-8xl font-bold text-[#1d1d1d]">
              {firstLetter}
            </span>
          </div>
          <span className="text-[#FFFFFF] font-medium text-sm">{duration}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">{title}</h3>
          <p className="text-[#FFFFFF] mb-4">{company}</p>

          <div className="space-y-3">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <ArrowRight className="text-white mt-1 w-4 h-4" />

                <p className="text-[#FFFFFF]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
