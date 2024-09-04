// PricingPlans.jsx
import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';

const PricingPlans = () => {
    const [selectedCategory, setSelectedCategory] = useState('Web Development');

    const webDevelopmentPlans = [
        {
            title: 'Basic',
            price: '10.00',
            description: 'For starters',
            features: ['Responsive Design', 'SEO Optimization', '5 Pages'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Web Development Basic Plan Selected'),
        },
        {
            title: 'Pro',
            price: '30.00',
            description: 'For professionals',
            features: ['All Basic Features', '10 Pages', 'Custom Features'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Web Development Pro Plan Selected'),
        },
        {
            title: 'Enterprise',
            price: '50.00',
            description: 'For enterprises',
            features: ['All Pro Features', 'Unlimited Pages', 'Premium Support'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Web Development Enterprise Plan Selected'),
        },
    ];

    const socialMediaMarketingPlans = [
        {
            title: 'Starter',
            price: '15.00',
            description: 'For beginners',
            features: ['Social Media Setup', 'Content Creation', '2 Posts/Week'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Social Media Marketing Starter Plan Selected'),
        },
        {
            title: 'Growth',
            price: '35.00',
            description: 'For growing businesses',
            features: ['All Starter Features', '5 Posts/Week', 'Basic Analytics'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Social Media Marketing Growth Plan Selected'),
        },
        {
            title: 'Scale',
            price: '55.00',
            description: 'For scaling businesses',
            features: ['All Growth Features', 'Daily Posts', 'Advanced Analytics'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Social Media Marketing Scale Plan Selected'),
        },
    ];

    const currentPlans = selectedCategory === 'Web Development' ? webDevelopmentPlans : socialMediaMarketingPlans;

    return (
        <div className=" px-4 py-8">
            <div className="max-w-5xl mx-auto space-y-5">
                <div className="text-center flex flex-col items-center space-y-5">
                    <div className='gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl'>
                        Pricing
                    </div>

                    <div className="h-[2px] w-full sm:w-3/5 md:w-2/5 bg-gradient-to-r from-primary via-Card_Button to-primary"></div>
                    <div className='text-white text-lg sm:text-xl md:text-2xl text-center'>
                        You can customize those plans according your needs
                    </div>

                </div>

                <div className="flex mx-auto  bg-card_color rounded-full w-max">
                    <button
                        onClick={() => setSelectedCategory('Web Development')}
                        className={`text-sm font-semibold tracking-wide py-2.5 px-5 rounded-full ${selectedCategory === 'Web Development' ? 'bg-gradient-to-bl from-Card_Button via-purple-950 to-card_color text-white' : 'text-Card_Button'}`}
                    >
                        Web Development
                    </button>
                    <button
                        onClick={() => setSelectedCategory('Social Media Marketing')}
                        className={`text-sm font-semibold tracking-wide py-2.5 px-5 rounded-full ${selectedCategory === 'Social Media Marketing' ? 'bg-gradient-to-br from-Card_Button via-purple-950 to-card_color text-white' : 'text-Card_Button'}`}
                    >
                        Social Media Marketing
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 max-md:max-w-sm max-md:mx-auto">
                    {currentPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            title={plan.title}
                            price={plan.price}
                            description={plan.description}
                            features={plan.features}
                            buttonLabel={plan.buttonLabel}
                            onClick={plan.onClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;
