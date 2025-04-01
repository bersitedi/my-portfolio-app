import React from "react";
import springsmall from "../../assets/spring.jpeg";
import addismaed from "../../assets/addismaed.jpeg";
import cerera from "../../assets/cerera.jpeg";
import semester from "../../assets/semestersmall.png";
import shecodes from "../../assets/shecodessmall.png";
import weather from "../../assets/weather.png";
import fit from "../../assets/fit.jpeg";
import nutri from "../../assets/nutri.jpeg";
import robo from "../../assets/robotic.jpeg";
import myportfolio from "../../assets/myportfolio.png";

const projects = [
  {
    title: "Spring Consulting Architects and Engineers",
    image: springsmall,
    githubLink: "https://github.com/bersitedi/SPRING",
    websiteLink: "https://springconsultinget.com/",
    featured: true,
  },

  {
    title: "Robotic Lawnmower",
    image: robo,
    websiteLink: "https://robolawnmower.netlify.app",
  },
  {
    title: "NutriSwap",
    image: nutri,
    websiteLink: "https://nutriswap.netlify.app/",
  },
  {
    title: "FitTrack",
    image: fit,
    websiteLink: "https://yosworkout.netlify.app/",
  },
  {
    title: "Addis Ma'ed Blogging Website",
    image: addismaed,
    githubLink: "https://github.com/bersitedi/Addis-Maed-Blog-App",
    websiteLink: "https://addismaed.online/",
  },
  {
    title: "Cerera Coffee",
    image: cerera,
    githubLink: "https://github.com/bersitedi/EDEN-COFFEE",
    websiteLink: "https://cereracoffee.online/",
  },
  {
    title: "Simple Landing Page",
    image: semester,
    githubLink: "https://github.com/bersitedi/second-version-semester-project",
    websiteLink: "https://idyllic-tanuki-b42941.netlify.app/",
  },
  {
    title: "My Portfolio",
    image: myportfolio,
    githubLink: "https://github.com/bersitedi/my-portfolio-app",
    websiteLink: "https://bersitedi421.online/",
  },
  {
    title: "Shecodes Portfolio",
    image: shecodes,
    githubLink: "https://github.com/bersitedi/Portfolio-Project",
    websiteLink: "https://zesty-medovik-5bd369.netlify.app/about",
  },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-10 px-6 md:px-[50px]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg ${
              project.featured
                ? "lg:col-span-2 lg:row-span-2 lg:h-96"
                : "h-52"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h2 className="text-white font-bold text-lg mb-2 text-center px-2">
                {project.title}
              </h2>
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    GitHub
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    Live Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
