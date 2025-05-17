// src/App.jsx
import React from "react";
import Navbar from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects.jsx";
import About from "./components/About";
import Footer from "./components/Footer";

import {
  personalInfo,
  experienceData,
  projectsData,
  educationData,
  certificationsData,
  skillsData,
} from "./data";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar name={personalInfo.name} />
      <Hero personalInfo={personalInfo} />

      <main className="container mx-auto px-4 space-y-32">
        <About
          educationData={educationData}
          certificationsData={certificationsData}
          skillsData={skillsData}
        />
        <Experience experienceData={experienceData} />
        <Projects projectsData={projectsData} />
      </main>

      <Footer name={personalInfo.name} />
    </div>
  );
}

export default App;
