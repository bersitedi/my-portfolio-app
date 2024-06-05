import React from "react";
import { Element } from "react-scroll";
import HeroPage from "./container/HeroPage";
import About from "./container/About";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import ContactPage from "./container/ContactPage";

const HomePage = () => {
  return (
    <div className="">
      <Element name="hero">
        <HeroPage />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <ContactPage />
      </Element>
    </div>
  );
};

export default HomePage;
