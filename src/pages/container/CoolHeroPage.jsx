import React, { useState, useEffect, useRef } from "react";
import myImage from "../../assets/cool.png"; 
import InteractiveEyes from "../../components/InteractiveEyes";
import CursorTrackStar from "../../components/CursorTrackStar";


const CoolHeroPage = () => {


  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-gray-900 text-white">
    
      <div className="md:w-1/2 text-center md:text-left">
        <InteractiveEyes />
      
      </div>

    
      <div className="md:w-1/2 flex flex-col items-center relative mt-6 md:mt-0">
        
        <img
          
          src={myImage}
          alt="Cool Hero"
          className="w-60 md:w-80 mt-10 relative z-0"
        />
        
     
      </div>
    </div>
  );
};

export default CoolHeroPage;