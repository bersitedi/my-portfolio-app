import React, { useState } from "react";
import springsmall from "../../assets/spriing.jpeg";
import addismaed from "../../assets/addismaed.jpeg";
import cerera from "../../assets/cerera.jpeg";
import semester from "../../assets/semestersmall.png";
import shecodes from "../../assets/shecodessmall.png";
import weather from "../../assets/weather.png";
import myportfolio from "../../assets/myportfolio.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Main Projects");

  const mainProjects = [
    {
      title: "Title of the Main Project 1",
      description:
        "Description of the Main Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: springsmall,
    },
    {
      title: "Title of the Main Project 2",
      description:
        "Description of the Main Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: addismaed,
    },
    {
      title: "Title of the Main Project 3",
      description:
        "Description of the Main Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: cerera,
    },
  ];

  const smallProjects = [
    {
      title: "Title of the Small Project 1",
      description:
        "Description of the Small Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: semester,
    },
    {
      title: "Title of the Small Project 2",
      description:
        "Description of the Small Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: shecodes,
    },
    {
      title: "Title of the Small Project 3",
      description:
        "Description of the Small Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: weather,
    },
    {
      title: "Title of the Small Project 4",
      description:
        "Description of the Small Project 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: myportfolio,
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderProjects = (projects) => {
    return (
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-start "
          >
            <div className="w-full md:w-1/3">
              <div className="flex items-start justify-start">
                <img src={project.image} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col py-3 md:py-0 md:p-5">
                <h1 className="text-white font-bold text-xl">
                  {project.title}
                </h1>
                <p className="text-white text-sm mt-3">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black h-full flex justify-center items-center">
      <div className="w-full px-6 md:px-[50px] py-10">
        <h1 className="text-gray-200 font-bold text-2xl text-start mb-5">
          My Projects
        </h1>
        <hr className="mb-7" />
        <div className="flex justify-center space-x-8 mb-10">
          <div
            className={`cursor-pointer bg-gray-900 bg-opacity-50 border border-gray-800 shadow-lg shadow-gray-800 rounded-lg px-4 text-xl ${
              selectedCategory === "Main Projects"
                ? "text-orange-600 border-b-2 border-b-orange-600"
                : "text-gray-400"
            }`}
            onClick={() => handleCategoryChange("Main Projects")}
          >
            Main Projects
          </div>
          <div
            className={`cursor-pointer bg-gray-900 bg-opacity-50 border border-gray-800 shadow-lg shadow-gray-800 rounded-lg px-4 text-xl ${
              selectedCategory === "Small Projects"
                ? "text-orange-600 border-b-2 border-b-orange-600"
                : "text-gray-400"
            }`}
            onClick={() => handleCategoryChange("Small Projects")}
          >
            Small Projects
          </div>
        </div>
        {selectedCategory === "Main Projects" && renderProjects(mainProjects)}
        {selectedCategory === "Small Projects" && renderProjects(smallProjects)}
      </div>
    </div>
  );
};

export default Projects;
