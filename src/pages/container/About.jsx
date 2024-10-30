import React from "react";
import three from "../../assets/profile.jpeg";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="bg-black h-full flex justify-center items-center"
      id="about"
    >
      <div className="w-full px-6 md:px-[50px] py-10">
        <h1 className="text-gray-200 font-bold text-xl md:text-2xl text-start mb-5">
          About Me
        </h1>
        <hr className="mb-10 border-b border-gray-600" />
        <div className="flex justify-center items-center bg-black md:bg-opacity-50 md:border md:border-gray-800 md:shadow-md md:shadow-gray-800 md:rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-1/3 p-5 md:hidden">
              <div className="flex items-center justify-center md:w-[300px]">
                <img src={three} alt="" className="rounded-md w-full" />
              </div>
            </div>
            <div className="w-full md:w-2/3 md:p-5">
              <div className="flex flex-col md:pr-5">
                <h1 className="text-gray-300 font-bold text-xl">
                  Hi, my name is Bersi
                </h1>
                <p className="text-gray-300 leading-6 text-base mt-3">
                  I am a dedicated frontend developer with a background in
                  Computer Science. I honed my skills through various online
                  courses and practical projects, constantly striving to stay
                  up-to-date with the latest technologies and trends in web
                  development. My expertise includes HTML, CSS, JavaScript, and
                  the MERN stack, allowing me to create dynamic and responsive
                  web applications. When I'm not coding, I enjoy exploring new
                  design techniques, participating in coding challenges, and
                  contributing to open-source projects. I am passionate about
                  creating intuitive user experiences and continuously learning
                  to enhance my skill set.
                </p>
              </div>
            </div>
            <hr className="hidden md:flex border-r border-gray-800 h-[200px]" />
            <div className="hidden md:flex w-full md:w-1/3 p-5">
              <div className="flex items-center justify-center md:w-[300px]">
                <img src={three} alt="" className="rounded-md w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
