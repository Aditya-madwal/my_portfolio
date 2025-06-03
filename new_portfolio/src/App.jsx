import "./App.css";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import Education from "./sections/Education";
import Project from "./sections/Project";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <div className="bg-beige-200 scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <WorkExperience />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
