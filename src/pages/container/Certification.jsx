import React from "react";
import basic from "../../assets/basics.jpeg";
import plus from "../../assets/plus.jpeg";
import responsive from "../../assets/responsive.jpeg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Certification = () => {
  return (
    <div
      className="bg-black h-full flex justify-center items-center"
      id="certificate"
    >
      <div className="w-full px-6 md:px-[50px] py-5">
        <h1 className="text-gray-200 font-bold text-xl md:text-2xl text-start mb-5">
          Licenses & certifications
        </h1>
        <hr className="mb-10 border-b border-gray-600" />
        <div className="flex justify-center items-center ">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="flex items-start justify-start">
                <div className="flex flex-col pr-5">
                  <h1 className="text-gray-300 font-bold text-xl">
                    Certifications & Educational background
                  </h1>

                  <p className="text-gray-300 leading-6 text-base mt-3">
                    I am a first-year Computer Science student at WSB Merito
                    University in Warsaw. My passion for coding began when I
                    attended a bootcamp called SheCodes, which is dedicated to
                    teaching women how to code. During this bootcamp, I
                    developed a deep interest in creating beautiful and
                    responsive websites. I enjoy the process of building
                    interactive and engaging web applications and continuously
                    seek new ways to enhance my skills. The following are my
                    certifications from the SheCodes bootcamp.
                  </p>
                </div>
              </div>
            </div>
            <hr className="hidden md:flex border-r border-gray-800 h-[200px]" />
            <div className="w-full lg:w-1/2 mt-5 lg:pl-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Zoom>
                  <img
                    src={basic}
                    alt="Image 1"
                    className="w-full h-auto rounded-lg cursor-pointer"
                  />
                </Zoom>
                <Zoom>
                  <img
                    src={plus}
                    alt="Image 2"
                    className="w-full h-auto rounded-lg cursor-pointer"
                  />
                </Zoom>
                <Zoom>
                  <img
                    src={responsive}
                    alt="Image 3"
                    className="w-full h-auto rounded-lg cursor-pointer"
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
