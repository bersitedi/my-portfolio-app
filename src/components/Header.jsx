import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  const navItems = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full border-gray-200 z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-[180px] md:-mt-3" />
        </div>
        <div className="hidden md:flex items-center lg:space-x-10">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.href}
              smooth={true}
              duration={500}
              className="cursor-pointer py-2 px-3 rounded text-lg font-bold text-gray-100 hover:text-white hover:bg-gray-50 hover:bg-opacity-30"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex flex-col items-end justify-end">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white border-2 border-gray-200 py-2 px-4 hover:text-white hover:bg-gray-50 hover:bg-opacity-20 hover:border-gray-50 hover:border-1 shadow-sm shadow-gray-300"
            >
              Let's Connect
            </ScrollLink>
          </div>
          <div className="md:hidden text-white border-2 border-white p-1 rounded-md">
            {navIsVisible ? (
              <AiOutlineClose
                className="w-6 h-6 cursor-pointer"
                onClick={navVisibilityHandler}
              />
            ) : (
              <AiOutlineMenu
                className="w-6 h-6 cursor-pointer"
                onClick={navVisibilityHandler}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${navIsVisible ? "block" : "hidden"} md:hidden bg-black p-4`}
      >
        {navItems.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.href}
            smooth={true}
            duration={500}
            className="cursor-pointer block py-2 px-3 rounded text-lg font-bold text-gray-300"
            onClick={navVisibilityHandler}
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default Header;
