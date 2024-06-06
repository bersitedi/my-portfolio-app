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
      title: "Spring Consulting Architects and Engineers",
      description:
        "This is a Mern stack website that I made for an Engineering and Architects company to showcase their various projects and services. In this project there is an admin panel so they could be able to post, edit and delete their post and showcase their projects and other media related things that they want to share. It took me longer than I expected as it was my first time doing a fullstack project but I learnt so much from it and am finally happy to share it.",
      image: springsmall,
      githubLink: "https://github.com/username/spring-consulting",
      websiteLink: "https://springconsulting.com",
      tags: ["MERN Stack", "Admin Panel", "Fullstack Project"],
    },
    {
      title: "Addis Ma'ed Blogging Website",
      description:
        "This is a sample of a blogging website that I made for a friend of mine who is an aspriging junior chef and wants to showcase her works and creativity with other people and also potential employers. I took inspiration and also tutorials from youtube to complete this project and make it as simple as possible while still having the functionality to be able to write blogs, edit and delete meanwhile being able to comment and like the blogs and keep track of the views and notifications in her admin panel.",
      image: addismaed,
      githubLink: "https://github.com/username/addis-maed",
      websiteLink: "https://addismaed.com",
      tags: ["Blogging", "Admin Panel", "User Interaction"],
    },
    {
      title: "Cerera Coffee",
      description:
        "This is another sample website that i made for a coffee import export company which is under my github with the name beza coffee. this is just a simple profile website for the company as they are starting fresh and does not have much products and contents to showcase, this was made for the purpose of being professional and expanding their networks.",
      image: cerera,
      githubLink: "https://github.com/username/cerera-coffee",
      websiteLink: "https://cereracoffee.com",
      tags: ["Profile Website", "Coffee Export", "Professional Network"],
    },
  ];

  const smallProjects = [
    {
      title: "Simple Landing Page",
      description:
        "This is a landing paage that i did as trying to improve and focus on the design and outlay of a websites",
      image: semester,
      githubLink: "https://github.com/username/simple-landing-page",
      websiteLink: "https://simplelandingpage.com",
      tags: ["Landing Page", "Design Focus"],
    },
    {
      title: "My own Portfolio",
      description: "",
      image: myportfolio,
      githubLink: "https://github.com/username/my-portfolio",
      websiteLink: "https://myportfolio.com",
      tags: ["Portfolio", "Personal Website"],
    },
    {
      title: "Shecodes Portfolio",
      description:
        "This is one of the first Html websites that i made when I started coding and training uder Shecodes bootcamp. I am sharing this to show the progress i have made since i started coding.",
      image: shecodes,
      githubLink: "https://github.com/username/shecodes-portfolio",
      websiteLink: "https://shecodesportfolio.com",
      tags: ["HTML", "Portfolio", "Bootcamp"],
    },
    {
      title: "Weather App",
      description:
        "this is also one of the small execsise that I had back when I started coding.",
      image: weather,
      githubLink: "https://github.com/username/weather-app",
      websiteLink: "https://weatherapp.com",
      tags: ["Weather App", "API Integration", "Beginner Project"],
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
            className="flex flex-col md:flex-row items-center justify-start"
          >
            <div className="w-full md:w-1/3">
              <div className="flex items-start justify-start">
                <img src={project.image} alt="" className="w-full rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col py-3 md:py-0 md:p-5">
                <h1 className="text-white font-bold text-xl">
                  {project.title}
                </h1>
                <p className="text-white text-base mt-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Live Website
                  </a>
                </div>
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
        <h1 className="text-gray-200 font-bold text-xl md:text-2xl text-start mb-5">
          My Projects
        </h1>
        <hr className="mb-7" />
        <div className="flex justify-center space-x-8 mb-10">
          <div
            className={`cursor-pointer bg-gray-900 bg-opacity-50 border border-gray-800 shadow-xl shadow-gray-800 rounded-lg px-4 text-xl ${
              selectedCategory === "Main Projects"
                ? "text-orange-600 border-b-2 border-b-orange-600"
                : "text-gray-400"
            }`}
            onClick={() => handleCategoryChange("Main Projects")}
          >
            Main Projects
          </div>
          <div
            className={`cursor-pointer bg-gray-900 bg-opacity-50 border border-gray-800 shadow-xl shadow-gray-800 rounded-lg px-4 text-xl ${
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
