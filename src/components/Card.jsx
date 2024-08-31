import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const Card = ({ title, title2, description, buttonText, icon }) => {
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
            <div
                ref={backgroundBoxRef}
                className="absolute inset-0 bg-Card_Button w-100% h-100% rounded-3xl z-0"
                style={{ transform: "rotate(0deg)" }}
            ></div>

            <div className=" flex flex-col justify-center bg-gradient-to-r from-card_color via-black to-card_color p-6 xl:gap-2 md:gap-1 gap-0 rounded-2xl text-center space-y-2 md:space-y-4 text-white shadow-lg 
            
                w-[280px] h-[280px]  
                lg:w-[320px] lg:h-[320px]  
                xl:w-[360px] xl:h-[360px]  

             mx-auto z-10" >
                {/* Background Box */}


                <div className="flex justify-center  text-Card_Button  ">
                    {icon}
                </div>
                <div>
                    <h2 className="xl:text-4xl  md:text-3xl text-2xl  font-LexendDecaBold  ">{title}</h2>
                    <h2 className="xl:text-4xl  md:text-3xl text-2xl  font-LexendDecaBold  ">{title2}</h2>

                </div>

                <p className="  xl:text-base  md:text-sm text-sm font-LexendDecaLigh">{description}</p>
                <button className="text-Card_Button text-base font-medium hover:underline flex justify-center items-center">
                    {buttonText}
                    <ArrowRight className="h-4 ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Card;
