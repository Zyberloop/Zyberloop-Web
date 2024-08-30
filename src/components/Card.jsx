import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const Card = ({ title, description, buttonText, icon }) => {
    const cardRef = useRef(null);
    const backgroundBoxRef = useRef(null);

    useEffect(() => {
        // GSAP animation on hover
        const cardElement = cardRef.current;
        const backgroundBoxElement = backgroundBoxRef.current;

        const hoverAnimation = gsap.to(backgroundBoxElement, {
            rotation: 6,
            duration: 0.5,
            ease: "power2.inOut",
            paused: true,
            transformOrigin: "center",
        });

        const onMouseEnter = () => hoverAnimation.play();
        const onMouseLeave = () => hoverAnimation.reverse();

        cardElement.addEventListener("mouseenter", onMouseEnter);
        cardElement.addEventListener("mouseleave", onMouseLeave);

        return () => {
            cardElement.removeEventListener("mouseenter", onMouseEnter);
            cardElement.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <div className='flex relative' ref={cardRef}>
            {/* <div
                ref={backgroundBoxRef}
                className="absolute inset-0 bg-Card_Button w-100% h-100% rounded-3xl z-0"
                style={{ transform: "rotate(0deg)" }}
            ></div> */}

            <div className=" flex flex-col justify-center bg-card_color p-6 xl:gap-2 md:gap-1 gap-0 rounded-3xl text-center  text-white shadow-lg 
             w-[280px] h-[286px]
            md:w-[280px] md:h-[286px]
            xl:w-[380px] xl:h-[346px] mx-auto z-10" >
                {/* Background Box */}


                <div className="flex justify-center mb-4 text-Card_Button  ">
                    {icon}
                </div>
                <h2 className="xl:text-4xl  md:text-3xl text-xl  font-LexendDecaBold mb-2">{title}</h2>
                <p className=" mb-4 xl:text-base  md:text-sm text-xs font-LexendDecaLigh">{description}</p>
                <button className="text-Card_Button text-base font-medium hover:underline flex justify-center items-center">
                    {buttonText}
                    <ArrowRight className="h-4 ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Card;
