import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1714935757124.json";
import { useRef } from "react";
import backgroundImage from "../../assets/newback.jpg";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const HeroPage = () => {
  const phoneAnimation = useRef();
  const [text] = useTypewriter({
    words: ["Freelance web developer based in New York"],
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-[#030303c9] z-10"></div>
        <Header />
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="max-w-screen-xl mx-auto px-4 py-8 relative z-20">
          <div className="flex flex-col md:flex-row items-center mt-10">
            <div className="md:w-1/2 md:pl-8 text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                {text} {/* Render the typewriter text here */}
              </h1>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              </p>
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 text-white border-2 hover:bg-gray-50 hover:bg-opacity-20"
                >
                  Let's Connect
                </Link>
                <Link
                  to="/project"
                  className="px-6 py-3 text-white   border-2 border-blue-300 hover:bg-blue-50 hover:bg-opacity-20"
                >
                  Check My Work
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 pb-4 md:mb-0 mt-10 md:mt-0 w-[300px]">
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
