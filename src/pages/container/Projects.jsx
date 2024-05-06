import React, { useState } from "react";
import image6 from "../../assets/image6.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Main Projects");

  const mainProjects = [
    {
      title: "Title of the Main Project 1",
      description:
        "Description of the Main Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image6,
    },
    {
      title: "Title of the Main Project 2",
      description:
        "Description of the Main Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image6,
    },
  ];

  const smallProjects = [
    {
      title: "Title of the Small Project 1",
      description:
        "Description of the Small Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image6,
    },
    {
      title: "Title of the Small Project 2",
      description:
        "Description of the Small Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image6,
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
            <div className="w-1/3">
              <div className="flex items-start justify-start">
                <img src={project.image} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col p-5">
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
      <div className="max-w-screen-xl px-[50px] py-10">
        <h1 className="text-gray-200 font-bold text-2xl text-start mb-5">
          My Projects
        </h1>
        <hr className="mb-7" />
        <div className="flex justify-center space-x-8 mb-10">
          <div
            className={`cursor-pointer text-xl ${
              selectedCategory === "Main Projects"
                ? "text-orange-600 border-b-2 border-b-orange-600"
                : "text-gray-400"
            }`}
            onClick={() => handleCategoryChange("Main Projects")}
          >
            Main Projects
          </div>
          <div
            className={`cursor-pointer text-xl ${
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
