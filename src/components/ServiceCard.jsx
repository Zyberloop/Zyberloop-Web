import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ServiceCard = ({ imageSrc, title, description, flipped }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%", // Start animation when top of the element is 80% from the top of the viewport
                end: "bottom 20%", // End animation when bottom of the element is 20% from the top of the viewport
                scrub: true, // Smooth scroll animation
                toggleActions: "play none none reverse",
            },
        });

        // Animate the image
        tl.fromTo(
            imageRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // Animate the text content
        tl.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "0.1" // Overlaps with the image animation by 0.5 seconds
        );
    }, []);

    return (
        <div
            ref={cardRef}
            className={`flex ${flipped ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'} items-center  shadow-md rounded-lg overflow-hidden`}
        >
            <div className="w-full md:w-1/2 flex justify-center ">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-[400px] h-full object-cover"
                    ref={imageRef}
                />
            </div>
            <div className="w-full md:w-1/2 md:p-6 p-2 py-6" ref={textRef}>
                <h2 className="text-3xl font-bold gradient-text2 mb-4">{title}</h2>
                <p className="text-white  bg-white/10 backdrop-blur-md p-5 rounded-2xl">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
