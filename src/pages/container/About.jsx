import React from "react";
import three from "../../assets/image6.jpg";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black h-full flex justify-center items-center">
      <div className="max-w-screen-xl px-[50px] py-10">
        <h1 className="text-gray-200 font-bold text-2xl text-start mb-5">
          About Me
        </h1>
        <hr className="mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-start">
          <div className="w-1/2">
            <div className="flex flex-col pr-5">
              <h1 className="text-white font-bold text-xl">
                Title of the Project
              </h1>
              <p className="text-white text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                libero et ex vehicula bibendum. Aliquam erat volutpat. Fusce
                eget gravida elit. Nulla eu justo vestibulum, convallis urna at,
                lacinia odio. Curabitur consectetur libero at justo gravida, nec
                faucibus diam aliquet. Phasellus euismod lorem eu odio gravida,
                sit amet dapibus mi condimentum. Vestibulum eget condimentum
                velit. Duis tristique, elit et aliquet tristique, ipsum dui
                tempor dolor, eget dictum odio arcu at sem. Nulla facilisi. In
                ultricies ligula id leo ullamcorper, a aliquet eros tristique.
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex items-start justify-start">
              <img
                src={three}
                alt=""
                className="w-[200px] h-[200px] object-cover border-2 border-orange-600 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
