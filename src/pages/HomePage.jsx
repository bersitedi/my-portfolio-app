import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import HeroPage from "./container/HeroPage";
import About from "./container/About";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import ContactPage from "./container/ContactPage";
import Certification from "./container/Certification";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="relative min-h-screen">
     
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg transition-opacity duration-500">
          <div className="text-center text-white">
            <p className="text-xl font-semibold animate-pulse">Loading...</p>
          </div>
        </div>
      )}

      
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Element name="hero">
          <HeroPage />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="certificate">
          <Certification />
        </Element>
        <Element name="contact">
          <ContactPage />
        </Element>
      </div>
    </div>
  );
};

export default HomePage;
