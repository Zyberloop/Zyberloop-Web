import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles

import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {opportunities.map((opportunity, index) => (
          <SwiperSlide key={index}>
            <OpportunityCard
              title={opportunity.title}
              description={opportunity.description}
              onClick={() => handleCardClick(opportunity.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        jobType={selectedJobType}
      />
    </div>
  );
};

export default OpportunityCarousel;
