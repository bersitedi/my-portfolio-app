import React from "react";
import three from "../../assets/image6.jpg";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row items-center px-10">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "250px" }}
            >
              <div
                className="pb-3 relative rounded-md"
                style={{
                  backgroundImage: `url(${three})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="absolute bottom-0 leftt-0 w-full bg-opacity-90 px-4 py-5 text-lg font-semibold text-gray-200 dark:text-white">
                  <div className="flex items-center justify-center space-x-10">
                    <FaGithub className="mr-2" />
                    <FaFacebook className="mr-2" />
                    <FaEnvelope />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 md:p-8">
            <p className="text-2xl font-bold mb-4 pr-2 text-white">
              I’m John Smith. I’m passionate about crafting exceptional
              websites. With a blend of design skills and coding expertise, I
              create unique online experiences that captivate users.
            </p>
            <p className="text-md mb-4 text-gray-300">
              Looking for a top-notch web developer to revamp your hotel’s
              website? Look no further than John Smith. With years of experience
              and a keen eye for design, John can take your site to the next
              level, helping you attract more visitors and boost your bookings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
