import React from "react";

const OpportunityCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-white/60 shadow-lg rounded-lg p-6 flex flex-col items-center text-center backdrop-blur-sm border border-white/20 h-64 w-full cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-lg"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default OpportunityCard;
