// src/components/About.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const Education = ({ educationData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-8">Education</h3>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="group">
            <h4 className="font-medium group-hover:text-accent transition-colors">
              {edu.institution}
            </h4>
            <p className="text-muted">{edu.degree}</p>
            <p className="text-sm text-accent">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Certifications = ({ certificationsData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-16 mb-8">Certifications</h3>
      <ul className="space-y-4">
        {certificationsData.map((cert, index) => (
          <li key={index} className="group flex items-center gap-2">
            <ExternalLink size={16} className="text-accent" />
            <span className="group-hover:text-accent transition-colors">
              {cert.name}
            </span>
            <span className="text-muted text-sm">({cert.platform})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = ({ skillsData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-8">Skills</h3>
      <div className="space-y-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h4 className="text-muted mb-4">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-xl border border-black/5 hover:border-accent/20 hover:bg-accent/5 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = ({ educationData, certificationsData, skillsData }) => {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16">About</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Education educationData={educationData} />
            <Certifications certificationsData={certificationsData} />
          </div>
          <div>
            <Skills skillsData={skillsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
