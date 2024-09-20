import React, { useState } from "react";
import OpportunityCard from "./OpportunityCard";
import Popup from "../../components/Popup";

const OpportunityCarousel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState("");

  const opportunities = [
    {
      title: "Frontend Developers",
      description: "React JS (JavaScript and TypeScript)",
    },
    {
      title: "Backend Developers",
      description: "Node JS, Next.js or Spring Boot",
    },
    {
      title: "WordPress Developers",
      description: "Build and manage WordPress sites",
    },
    { title: "QA", description: "Quality Assurance and Testing" },
    { title: "UI/UX", description: "Design user interfaces and experiences" },
  ];

  const handleCardClick = (title) => {
    setSelectedJobType(title);
    setIsPopupOpen(true);
  };

  return (
    <div className="w-full flex flex-col items-center mt-10">
      {/* List opportunities in a row */}
      <div className="flex flex-col space-y-6 w-full">
        {opportunities.map((opportunity, index) => (
          <OpportunityCard
            key={index}
            title={opportunity.title}
            description={opportunity.description}
            onClick={() => handleCardClick(opportunity.title)}
          />
        ))}
      </div>

      {/* Popup component */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        jobType={selectedJobType}
      />
    </div>
  );
};

export default OpportunityCarousel;
