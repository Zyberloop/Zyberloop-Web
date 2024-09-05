// PricingCard.jsx
import React from 'react';

const PricingCard = ({ title, price, description, features, buttonLabel, onClick }) => {
    return (
        <div className="bg-gradient-to-br from-card_color via-purple-950 to-Card_Button hover:outline outline-Card_Button rounded-xl relative overflow-hidden transition-all">
            <div className="p-6 pb-20">
                <div className="text-left text-white">
                    <h4 className=" text-xl mb-4 font-semibold">{title}</h4>
                    <h3 className=" text-4xl font-semibold">Rs {price}</h3>
                    <p className=" text-sm mt-4">{description}</p>
                </div>

                <div className="mt-8">
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="text-white flex items-center text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    className="mr-4 bg-Card_Button fill-white rounded-full p-[3px]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <button
                type="button"
                className="w-full absolute bottom-0 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-orange-500"
                onClick={onClick}
            >
                {buttonLabel}
            </button> */}
        </div>
    );
};

export default PricingCard;
