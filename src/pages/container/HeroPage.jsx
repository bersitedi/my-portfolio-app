import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1714935757124.json";
import { useRef } from "react";
import backgroundImage from "../../assets/newback.jpg";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import cvPDF from "../../assets/CV.pdf";

const HeroPage = () => {
  const phoneAnimation = useRef();
  const [text] = useTypewriter({
    words: ["Web developer based in Warsaw"],
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="relative h-full md:h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-[#030303c9] z-10"></div>
        <Header />
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="w-full mx-auto px-4 py-8 lg:py-0 relative z-20">
          <div className="flex flex-col md:flex-row items-center mt-32 md:mt-16 lg:mt-0">
            <div className="w-full md:w-1/2 md:pl-8 lg:mt-10 text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl md:leading-[55px] font-bold mb-3">
                {text}
              </h1>
              <p className="text-base md:text-xl mb-4">
                Aspiring Frontend Developer passionate about creating intuitive
                and dynamic user experiences.
              </p>
              <div className="flex gap-3">
                <a
                  href={cvPDF}
                  download="CV.pdf"
                  className="px-6 py-3 text-white border-2 hover:bg-gray-50 hover:bg-opacity-20"
                >
                  Download CV
                </a>
                <ScrollLink
                  smooth={true}
                  duration={500}
                  to="projects"
                  className="px-6 py-3 text-white cursor-pointer border-2 border-blue-300 hover:bg-blue-50 hover:bg-opacity-20"
                >
                  Check My Work
                </ScrollLink>
              </div>
            </div>
            <div className="hidden md:flex md:w-1/2 pb-4 md:mb-0 lg:mt-10 md:mt-0 w-[300px]">
              <Lottie
                lottieRef={phoneAnimation}
                animationData={animationData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
