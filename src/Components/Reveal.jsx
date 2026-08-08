import React, { useEffect, useRef, useState } from "react";

export const Reveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-10 scale-[0.98]";
      case "down":
        return "-translate-y-10 scale-[0.98]";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${getInitialTransform()} pointer-events-none`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
