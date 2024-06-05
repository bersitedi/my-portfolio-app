import React from "react";
import three from "../../assets/image6.jpg";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="bg-black h-full flex justify-center items-center"
      id="about"
    >
      <div className="w-full px-6 md:px-[50px] py-10">
        <h1 className="text-gray-200 font-bold text-2xl text-start mb-5">
          About Me
        </h1>
        <hr className="mb-10" />
        <div className="flex justify-center items-center bg-gray-950 bg-opacity-50 border border-gray-800 shadow-lg shadow-gray-800 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-1/3 p-5">
              <div className="flex items-start justify-start">
                <img src={three} alt="" className="rounded-md w-full" />
              </div>
            </div>
            <div className="hidden md:flex border border-gray-700 h-[200px]"></div>
            <div className="w-full md:w-1/2 p-5">
              <div className="flex flex-col pr-5">
                <h1 className="text-gray-300 font-bold text-xl">
                  Hi, my name is Bersi
                </h1>
                <p className="text-gray-400 leading-6 text-sm mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut libero et ex vehicula bibendum. Aliquam erat volutpat.
                  Fusce eget gravida elit. Nulla eu justo vestibulum, convallis
                  urna at, lacinia odio. Curabitur consectetur libero at justo
                  gravida, nec faucibus diam aliquet. Phasellus euismod lorem eu
                  odio gravida, sit amet dapibus mi condimentum. Vestibulum eget
                  condimentum velit. Duis tristique, elit et aliquet tristique,
                  ipsum dui tempor dolor, eget dictum odio arcu at sem. Nulla
                  facilisi. In ultricies ligula id leo ullamcorper, a aliquet
                  eros tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
