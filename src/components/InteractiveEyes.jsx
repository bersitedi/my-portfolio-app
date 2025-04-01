import React, { useState, useEffect, useRef } from "react";

const InteractiveEyes = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showBubble, setShowBubble] = useState(false);
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const getEyePosition = (eyeRef) => {
    if (!eyeRef.current) return { x: 0, y: 0 };
    const rect = eyeRef.current.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  };

  const calculatePupilMovement = (eyeRef) => {
    const eyePos = getEyePosition(eyeRef);
    const deltaX = mousePos.x - eyePos.x;
    const deltaY = mousePos.y - eyePos.y;
    const angle = Math.atan2(deltaY, deltaX);
    return { x: Math.cos(angle) * 10, y: Math.sin(angle) * 10 }; // Moves pupils within a limit
  };

  const eye1Move = calculatePupilMovement(eye1Ref);
  const eye2Move = calculatePupilMovement(eye2Ref);

  return (
    <div className="relative flex flex-col items-center space-y-4">
      {showBubble && (
        <div className="absolute -top-24 bg-gray-800 text-white px-8 py-6 text-2xl font-extrabold rounded-xl shadow-lg w-80 text-center border-4 border-white"
             style={{ borderRadius: "50% 50% 50% 10% / 1% 15% 58% 65%" }}> {/* Creates a cloud-like shape */}
          Welcome to my portfolio!
        </div>
      )}
      <div className="relative flex space-x-10">
        {/* Left Eye */}
        <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-black">
          <div
            ref={eye1Ref}
            className="w-12 h-12 bg-black rounded-full absolute"
            style={{ transform: `translate(${eye1Move.x}px, ${eye1Move.y}px)` }}
          ></div>
        </div>

        {/* Right Eye */}
        <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-black">
          <div
            ref={eye2Ref}
            className="w-12 h-12 bg-black rounded-full absolute"
            style={{ transform: `translate(${eye2Move.x}px, ${eye2Move.y}px)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveEyes;
