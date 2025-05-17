// src/components/Hero.jsx
import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = ({ personalInfo }) => {
  const { name, tagline, description, contacts } = personalInfo;

  const contactIcons = {
    phone: <Phone size={18} />,
    email: <Mail size={18} />,
    linkedin: <Linkedin size={18} />,
    github: <Github size={18} />,
  };

  return (
    <header className="pt-32 pb-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display font-bold leading-[1.1] mb-8 animate-fade-in text-[5rem]">
            Hey<span className="text-purple-500">!</span> I am <br />
            {name}
            <span className="text-purple-500">;</span>
          </h1>
          <p className="text-lg max-w-2xl mb-12 animate-slide-up delay-200">
            {description}
          </p>
          <div className="flex flex-wrap gap-6 animate-slide-up delay-300">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target={
                  contact.type === "linkedin" || contact.type === "github"
                    ? "_blank"
                    : ""
                }
                rel={
                  contact.type === "linkedin" || contact.type === "github"
                    ? "noopener noreferrer"
                    : ""
                }
                className="flex items-center gap-2 hover:text-accent transition-colors">
                {contactIcons[contact.type]} {contact.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
