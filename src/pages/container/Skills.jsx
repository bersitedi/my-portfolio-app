import React from "react";
import htmlimg from "../../assets/html.svg";
import cssimg from "../../assets/css.svg";
import reactimg from "../../assets/reactt.svg";
import nodeimg from "../../assets/nodejs.svg";
import mongoimg from "../../assets/mongodb.svg";
import jsimg from "../../assets/js.svg";
import gitimg from "../../assets/github.svg";
import python from "../../assets/python.svg";
import devimg from "../../assets/devtools.svg";
import tailimg from "../../assets/tailwind.svg";
import sqlImg from "../../assets/db.svg";
import responsiveimg from "../../assets/responsive.svg";
import { RiArrowRightSLine } from "react-icons/ri";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", image: htmlimg },
    { name: "CSS", image: cssimg },
    { name: "React", image: reactimg },
    { name: "JavaScript", image: jsimg },
    { name: "Tailwind CSS", image: tailimg },
    { name: "Responsive Design", image: responsiveimg },
  ];

  const backendSkills = [
    { name: "Node.js", image: nodeimg },
    { name: "MongoDB", image: mongoimg },
    { name: "Python", image: python },
    { name: "SQL", image: sqlImg }
  ];

  const otherSkills = [
    { name: "Git/GitHub", image: gitimg },
    { name: "Developer Tools", image: devimg },
  ];

  const skills = [
    {
      category: "Frontend Development",
      description:
        "I specialize in building user interfaces using modern web technologies such as HTML, CSS, and JavaScript. I'm proficient in popular frontend frameworks like React, and I have experience in responsive design and styling with Tailwind CSS.",
      list: frontendSkills,
    },
    {
      category: "Backend Development",
      description:
        "I have expertise in server-side development using Node.js, basic understanding of python and c++ and database management with MongoDB and SQL. I'm familiar with building RESTful APIs, handling authentication, and implementing data persistence.",
      list: backendSkills,
    },
    {
      category: "Other Skills",
      description:
        "In addition to frontend and backend development, I'm proficient in using Git/GitHub for version control and collaboration. I also utilize various developer tools for debugging, testing, and optimizing code.",
      list: otherSkills,
    },
  ];

  return (
    <div className="bg-black h-full flex justify-center items-center">
      <div className="w-full px-6 md:px-[50px] py-10">
        <h1 className="text-gray-200 font-bold text-xl md:text-2xl text-start mb-5">
          My Skills
        </h1>
        <hr className="mb-10 border-b border-gray-600" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <h2 className="font-bold text-orange-600 mb-5 bg-gray-900 bg-opacity-50 border border-gray-800 shadow-lg shadow-gray-800 rounded-lg text-xl">
                {skill.category}
              </h2>
              <p className="text-gray-300 text-base text-left mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap justify-start">
                <div className="flex flex-col items-start mx-2">
                  {skill.list.map((item, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <RiArrowRightSLine className="text-orange-600 mr-2" />
                      <p className="text-base text-gray-300">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap justify-start">
                <div className="flex flex-row items-start mx-2">
                  {skill.list.map((item, index) => (
                    <div key={index} className="flex items-center mt-4">
                      <img src={item.image} className="h-10 w-10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
