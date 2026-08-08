import React, { useRef, useState } from "react";

export const Card3D = ({ children, className = "", maxTilt = 12, glare = true }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-1 to +1)
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    // Calculate 3D tilt angle
    const tiltX = -mouseY * maxTilt;
    const tiltY = mouseX * maxTilt;

    setTilt({ x: tiltX, y: tiltY, scale: 1.02 });

    // Glare position percentage
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;

    setGlarePos({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, scale: 1 });
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="inline-block w-full h-full"
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
        }}
        className={`relative h-full ${className}`}
      >
        {children}

        {/* 3D Glare Light Reflection Overlay */}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)`,
              opacity: glarePos.opacity,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card3D;
