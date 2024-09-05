import React, { useRef } from "react";

const OpportunityCard = ({ title, description, onClick }) => {
  const rippleRef = useRef(null);

  const handleClick = (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const { offsetWidth: width, offsetHeight: height } = rippleRef.current;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const rippleX = x - width / 2;
    const rippleY = y - height / 2;

    ripple.style.width = `${width}px`;
    ripple.style.height = `${height}px`;
    ripple.style.left = `${rippleX}px`;
    ripple.style.top = `${rippleY}px`;

    rippleRef.current.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600); // Remove the ripple after animation
  };

  return (
    <div
      onClick={(e) => {
        handleClick(e);
        if (onClick) onClick(e);
      }}
      className="relative bg-white/60 shadow-lg rounded-lg p-6 flex flex-col items-center text-center backdrop-blur-sm border border-white/20 h-64 w-full cursor-pointer transition-transform transform hover:scale-105 ripple-container"
      ref={rippleRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-lg"></div>
      <div className="relative z-10 overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default OpportunityCard;
