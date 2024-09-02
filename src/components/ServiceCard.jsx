import React from "react";

const ServiceCard = ({ imageSrc, title, description, flipped }) => {
    return (
        <div className={`flex ${flipped ? 'flex-row-reverse' : 'flex-row'} items-center bg-white shadow-md rounded-lg overflow-hidden`}>
            <div className="w-full md:w-1/2">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
