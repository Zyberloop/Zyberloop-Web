import React, { useRef } from "react";
import { FaChevronRight } from "react-icons/fa"; // Font Awesome for arrow icon

const OpportunityCard = ({ title, description, onClick }) => {
  const rippleRef = useRef(null);

  const handleClick = (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // Get the dimensions and coordinates of the card
    const { offsetWidth: width, offsetHeight: height } = rippleRef.current;
    const { clientX: x, clientY: y } = e;

    // Calculate ripple position
    const rect = rippleRef.current.getBoundingClientRect();
    const rippleX = x - rect.left - width / 2;
    const rippleY = y - rect.top - height / 2;

    // Style the ripple
    ripple.style.width = `${Math.max(width, height)}px`;
    ripple.style.height = `${Math.max(width, height)}px`;
    ripple.style.left = `${rippleX}px`;
    ripple.style.top = `${rippleY}px`;

    // Append the ripple to the ripple container
    rippleRef.current.appendChild(ripple);

    // Remove the ripple after animation
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div
      onClick={(e) => {
        handleClick(e);
        if (onClick) onClick(e);
      }}
      className="relative bg-[#3A2B66] shadow-lg rounded-xl p-6 flex items-center justify-between cursor-pointer transition-transform transform hover:scale-105 ripple-container overflow-hidden"
      ref={rippleRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-xl"></div>

      {/* Left side with arrow and text */}
      <div className="relative z-10 flex items-center space-x-4">
        {/* Arrow Icon */}
        <FaChevronRight className="text-[#7F5283] text-lg" />
        <div>
          <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Urgently
          </span>
          <h2 className="text-white text-lg font-bold">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>

      {/* Right side with job details */}
      <div className="relative z-10 text-right text-gray-300">
        <p className="text-sm">Remote: Full Time</p>
        <p className="text-xs">1d ago</p>
      </div>

      {/* Ripple effect */}
      <div
        ref={rippleRef}
        className="ripple-effect relative overflow-hidden"
      ></div>
    </div>
  );
};

export default OpportunityCard;
