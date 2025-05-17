// src/components/Experience.jsx
import React from "react";
import { ArrowUpRight } from "lucide-react";

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  achievements,
}) => {
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-32 flex-shrink-0">
          <span className="text-sm">{period}</span>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 transition-colors">
            {role}
          </h3>
          <p className="mb-4">{company}</p>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <ArrowUpRight size={16} className="mt-1 text-accent" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ experienceData }) => {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16">Experience</h2>
        <div className="space-y-12">
          {experienceData.map((experience, index) => (
            <ExperienceItem
              key={index}
              role={experience.role}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              achievements={experience.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
