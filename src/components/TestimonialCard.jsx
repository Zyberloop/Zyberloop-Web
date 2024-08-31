import { Star } from 'lucide-react';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function TestimonialCard({
    name = 'John Doe',
    title = 'CEO, Company',
    image = 'https://readymadeui.com/team-2.webp',
    testimonial = 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
    rating = 5 // Default rating is 5 stars
}) {
    const cardRef = useRef(null);

    useEffect(() => {
        const cardElement = cardRef.current;

        const onHover = () => {
            gsap.to(cardElement, {
                scale: 1.05,
                boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.6)',
                y: -10,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const onLeave = () => {
            gsap.to(cardElement, {
                scale: 1,
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        cardElement.addEventListener('mouseenter', onHover);
        cardElement.addEventListener('mouseleave', onLeave);

        return () => {
            cardElement.removeEventListener('mouseenter', onHover);
            cardElement.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <div ref={cardRef} className='flex flex-col max-w-[300px] text-center px-2 md:py-6 py-4 bg-gradient-to-r from-card_color via-black to-card_color rounded-xl transition-transform duration-300'>
            <div className="flex flex-col items-center">
                <img
                    src={image}
                    alt={`${name}`}
                    className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
                />
                <div className="mt-4">
                    <h4 className="text-sm font-extrabold text-white">{name}</h4>
                    <p className="text-xs text-white font-bold mt-1">{title}</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-sm leading-relaxed text-Card_Button">{testimonial}</p>
            </div>
            <div className="flex justify-center space-x-1 mt-4">
                {[...Array(rating)].map((_, index) => (
                    <Star key={index} className='text-Card_Button fill-Card_Button' />
                ))}
            </div>
        </div>
    );
}
