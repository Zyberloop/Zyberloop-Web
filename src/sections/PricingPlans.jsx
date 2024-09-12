// PricingPlans.jsx
import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';

const PricingPlans = () => {
    const [selectedCategory, setSelectedCategory] = useState('Web Development');

    const webDevelopmentPlans = [
        {
            title: 'Basic Plan',
            price: '25000.00 ',
            description: 'For starters (One-Time Fee)',
            features: ['Up to 5 Pages (Home, About, Services, Contact, Blog)', 'Responsive Design (Mobile & Desktop Friendly)', 'Basic SEO Optimization','Contact Form','1 Design Revision','1 Month of Free Support','Ideal For: Startups, Small Businesses, Personal Websites'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Web Development Basic Plan Selected'),
        },
        {
            title: 'Pro Plan',
            price: '35000.00',
            description: 'For professionals (One-Time Fee)',
            features: ['Up to 10 Pages', 'Custom Design and Branding', 'Advanced SEO Optimization','E-Commerce Integration (Up to 20 Products)','Blog/Content Management System (CMS)','Google Analytics & SEO Reporting','3 Design Revisions','3 Months of Free Support','Ideal For: Medium-Sized Businesses, E-Commerce Stores, Professional Blogs'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Web Development Pro Plan Selected'),
        },
        {
            title: 'Enterprise Plan',
            price: '150000.00 +',
            description: 'For enterprises  (Custom Pricing)',
            features: ['Unlimited Pages', 'Fully Custom Design & Functionality', 'Membership/Subscription Features','Advanced Custom Web Applications','API Integrations','Ongoing SEO Management','Priority Support & Maintenance (12 Months)','Regular Performance & Security Audits','Custom Reporting & Analytics','Ideal For: Large Enterprises, Complex Web Solutions, High-Traffic Websites'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Web Development Enterprise Plan Selected'),
        },
    ];

    const mobileDevelopmentPlans = [
        {
            title: 'Basic Plan',
            price: '25000.00 ',
            description: 'For starters (One-Time Fee)',
            features: ['Basic App Design', 'Up to 5 Screens', 'Cross-Platform Development (iOS & Android)', 'Basic Backend Setup', '1 Design Revision', '1 Month of Free Support', 'Ideal For: Small Startups, Personal Apps'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Mobile Development Basic Plan Selected'),
        },
        {
            title: 'Pro Plan',
            price: '40000.00',
            description: 'For professionals (One-Time Fee)',
            features: ['Custom App Design', 'Up to 15 Screens', 'Cross-Platform Development', 'Database Integration', 'API Integration', '3 Design Revisions', '3 Months of Free Support', 'Ideal For: Mid-Sized Businesses, E-Commerce Apps, Service Apps'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Mobile Development Pro Plan Selected'),
        },
        {
            title: 'Enterprise Plan',
            price: '100000.00 +',
            description: 'For enterprises (Custom Pricing)',
            features: ['Fully Custom App Development', 'Unlimited Screens', 'Advanced API Integrations', 'Custom Backend and Database Solutions', 'Ongoing Maintenance & Support', 'Priority Support (12 Months)', 'Regular Performance & Security Audits', 'Ideal For: Large Enterprises, Complex App Solutions'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Mobile Development Enterprise Plan Selected'),
        },
    ];

    const socialMediaMarketingPlans = [
        {
            title: 'Starter',
            price: '10000.00',
            description: 'For beginners / month',
            features: ['Social Media Setup', 'Content Creation (Graphics + Text)', '2 Posts/Week', 'Management on 1 Platform', 'Basic Social Media Strategy', '1 Design Revision', 'Basic Post Scheduling', 'Ideal for: Small businesses starting out on social media.'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Social Media Marketing Starter Plan Selected'),
        },
        {
            title: 'Growth',
            price: '30000.00',
            description: 'For growing businesses / month',
            features: ['All Starter Features', '5 Posts/Week', 'Management on 2 Platforms', 'Basic Analytics & Reporting', '2 Design Revisions', 'Engagement Monitoring', 'Social Media Calendar Creation', 'Ideal for: Businesses looking to boost engagement and build a following.'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Social Media Marketing Growth Plan Selected'),
        },
        {
            title: 'Scale',
            price: '50000.00',
            description: 'For scaling businesses / month',
            features: ['All Growth Features', 'Daily Posts', 'Management on 3 Platforms', 'Advanced Analytics & Reporting', '3 Design Revisions', 'Community Management', 'Paid Ad Strategy and Setup', 'Social Listening Tools', 'Ideal for: Businesses aiming to scale and boost conversions.'],
            buttonLabel: 'Get started today',
            onClick: () => alert('Social Media Marketing Scale Plan Selected'),
        },
    ];

    const currentPlans = selectedCategory === 'Web Development'
        ? webDevelopmentPlans
        : selectedCategory === 'Mobile Development'
        ? mobileDevelopmentPlans
        : socialMediaMarketingPlans;
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

                <div className="mx-auto  bg-card_color rounded-full w-max flex flex-col md:flex-row">
                    <button
                        onClick={() => setSelectedCategory('Web Development')}
                        className={`text-sm font-semibold tracking-wide py-2.5 px-5 rounded-full ${selectedCategory === 'Web Development' ? 'bg-gradient-to-bl from-Card_Button via-purple-950 to-card_color text-white' : 'text-Card_Button'}`}
                    >
                        Web Development
                    </button>
                    <button
                        onClick={() => setSelectedCategory('Mobile Development')}
                        className={`text-sm font-semibold tracking-wide py-2.5 px-5 rounded-full ${selectedCategory === 'Mobile Development' ? 'bg-gradient-to-bl from-Card_Button via-purple-950 to-card_color text-white' : 'text-Card_Button'}`}
                    >
                        Mobile Development
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
