import React, { useState } from "react";
import springsmall from "../../assets/springss.jpeg";
import addismaed from "../../assets/addismaedss.jpeg";
import cerera from "../../assets/cererass.jpeg";
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
        "This is a MERN stack website that I made for an Engineering and Architects company to showcase their various projects and services. In this project, there is an admin panel so they could be able to post, edit, and delete their posts and showcase their projects and other media-related things that they want to share. It took me longer than I expected as it was my first time doing a full-stack project, but I learned so much from it and am finally happy to share it.",
      image: springsmall,
      githubLink: "https://github.com/bersitedi/SPRING",
      websiteLink: "https://springconsultinget.com/",
      tags: ["MERN Stack", "Admin Panel", "Fullstack Project", "Tailwind Css"],
    },
    {
      title: "Addis Ma'ed Blogging Website",
      description:
        "This is a sample of a blogging website that I made for a friend of mine who is an aspiring junior chef and wants to showcase her works and creativity with other people and also potential employers. I took inspiration and tutorials from YouTube to complete this project and made it as simple as possible while still having the functionality to be able to write blogs, edit and delete them, and also being able to comment and like the blogs while keeping track of the views and notifications in her admin panel.",
      image: addismaed,
      githubLink: "https://github.com/bersitedi/Addis-Maed-Blog-App",
      websiteLink: "https://addismaed.online/",
      tags: [
        "Blogging",
        "Admin Panel",
        "User Interaction",
        "MERN Stack",
        "Tailwind Css",
      ],
    },
    {
      title: "Cerera Coffee",
      description:
        "This is another sample website that I made for a coffee import-export company which is under my GitHub with the name Eden Coffee. This is just a simple profile website for the company as they are starting fresh and do not have many products and contents to showcase. This was made for the purpose of being professional and expanding their networks.",
      image: cerera,
      githubLink: "https://github.com/bersitedi/EDEN-COFFEE",
      websiteLink: "https://cereracoffee.online/",
      tags: [
        "Profile Website",
        "Coffee Export",
        "Professional Network",
        "Tailwind Css",
      ],
    },
  ];

  const smallProjects = [
    {
      title: "Simple Landing Page",
      description:
        "This is a landing page that I did as an exercise trying to improve and focus on the design and layout of a website.",
      image: semester,
      githubLink:
        "https://github.com/bersitedi/second-version-semester-project",
      websiteLink: "https://idyllic-tanuki-b42941.netlify.app/",
      tags: ["Landing Page", "Design Focus", "React", "Tailwind Css"],
    },
    {
      title: "My own Portfolio",
      description: "",
      image: myportfolio,
      githubLink: "https://github.com/bersitedi/my-portfolio-app",
      websiteLink: "https://bersitedi421.online/",
      tags: ["Portfolio", "Personal Website", "Tailwind Css"],
    },
    {
      title: "Shecodes Portfolio",
      description:
        "This is one of the first HTML websites that I made when I started coding and training under Shecodes bootcamp. I am sharing this to show the progress I have made since I started coding.",
      image: shecodes,
      githubLink: "https://github.com/bersitedi/Portfolio-Project",
      websiteLink: "https://zesty-medovik-5bd369.netlify.app/about",
      tags: ["HTML", "Portfolio", "Bootcamp", "CSS"],
    },
    {
      title: "Weather App",
      description:
        "This is also one of the small exercises that I had back when I started coding.",
      image: weather,
      githubLink: "https://github.com/bersitedi/vanilla-project",
      websiteLink: "https://neon-mochi-062ca9.netlify.app/",
      tags: [
        "Weather App",
        "API Integration",
        "Beginner Project",
        "HTML",
        "Javascript",
        "CSS",
      ],
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderProjects = (projects) => {
    return (
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <div className="w-full mb-3 md:mb-0 md:w-1/2 lg:w-1/3">
                <div className="flex items-start justify-start">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col py-3 md:py-0 md:p-5">
                  <h1 className="text-white font-bold text-xl">
                    {project.title}
                  </h1>
                  <p className="text-gray-300 text-base mt-3">
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
            {index !== projects.length - 1 && (
              <hr className="mb-7 mt-7 border-t border-gray-800" />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black h-full flex justify-center items-center md:pb-10">
      <div className="w-full px-6 md:px-[50px] py-10">
        <h1 className="text-gray-200 font-bold text-xl md:text-2xl text-start mb-5">
          My Projects
        </h1>
        <hr className="mb-10 border-b border-gray-600" />
        <div className="flex justify-center space-x-8 mb-10 md:mb-[55px]">
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
