import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/portfolio" },
    { name: "Experience", href: "/experience" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full border-gray-200 z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-[180px] md:-mt-3" />
        </div>
        <div className="hidden md:flex items-center lg:space-x-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`py-2 px-3 rounded text-lg font-bold hover:text-white hover:bg-gray-50 hover:bg-opacity-30 ${
                location.pathname === item.href
                  ? "text-orange-400"
                  : "text-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex flex-col items-end justify-end">
            <Link className="text-white border-2 border-gray-200 py-2 px-4 hover:text-white hover:bg-gray-50 hover:bg-opacity-20 hover:border-gray-50 hover:border-1 shadow-sm shadow-gray-300">
              Let's Connect
            </Link>
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
        className={`${navIsVisible ? "block" : "hidden"} md:hidden bg-content p-4`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`block py-2 px-3 rounded text-lg font-bold ${
              location.pathname === item.href
                ? "text-blue-500"
                : "text-gray-900"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link className="block text-gray-900 py-2 px-3 rounded text-lg font-bold">
          Let's Connect
        </Link>
      </div>
    </nav>
  );
};

export default Header;
