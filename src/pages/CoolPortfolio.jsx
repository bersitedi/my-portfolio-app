import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import CoolHeroPage from "./container/CoolHeroPage";

const CoolPortfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="relative min-h-screen">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg transition-opacity duration-500">
          <div className="text-center text-white">
            <p className="text-xl font-semibold animate-pulse">Loading...</p>
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Element name="heropage">
          <CoolHeroPage /> 
        </Element>
      </div>
    </div>
  );
};

export default CoolPortfolio;
