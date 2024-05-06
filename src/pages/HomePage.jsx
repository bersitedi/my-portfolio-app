import React from "react";
import HeroPage from "./container/HeroPage";
import About from "./container/About";
import Skills from "./container/Skills";
import Projects from "./container/Projects";

const HomePage = () => {
  return (
    <div className="">
      <HeroPage />
      <Skills />
      <Projects />
      <About />
    </div>
  );
};

export default HomePage;
