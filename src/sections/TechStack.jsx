import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Img1 from '../../public/1.png';
import Img2 from '../../public/2.png';
import Img3 from '../../public/3.png';
import Img4 from '../../public/4.png';
import Img5 from '../../public/5.png';
import Img6 from '../../public/6.png';
import Img7 from '../../public/7.png';
import Img8 from '../../public/8.png';
import Img9 from '../../public/9.png';
import Img10 from '../../public/10.png';
import TechStackLogo from '../../public/TechStackLogo.png';

gsap.registerPlugin(MotionPathPlugin);

const TechStack = () => {
    useEffect(() => {
        // GSAP animation for the icons and central element
        gsap.fromTo('.skill-icon',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
        );
        gsap.fromTo('.central-icon',
            { scale: 0 },
            { scale: 1, duration: 1.5, ease: 'bounce' }
        );

        // Mouse hover effect with shining shadow
        gsap.utils.toArray('.skill-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, { scale: 1.2, rotation: 10, duration: 0.3 });
                gsap.to(icon, { boxShadow: '0px 0px 20px 10px rgba(255, 255, 255, 0.8)', duration: 0.3 });
            });
            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
                gsap.to(icon, { boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)', duration: 0.3 });
            });
        });

        // Separate circular movement for each skill icon
        gsap.to('.skill-icon-0', {
            duration: 8,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 0, y: -150 }, { x: 130, y: -75 }, { x: 150, y: 0 }, { x: 130, y: 75 },
                    { x: 0, y: 150 }, { x: -130, y: 75 }, { x: -150, y: 0 }, { x: -130, y: -75 },
                    { x: 0, y: -150 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-1', {
            duration: 10,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 0, y: 150 }, { x: -130, y: 75 }, { x: -150, y: 0 }, { x: -130, y: -75 },
                    { x: 0, y: -150 }, { x: 130, y: -75 }, { x: 150, y: 0 }, { x: 130, y: 75 },
                    { x: 0, y: 150 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-2', {
            duration: 12,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 150, y: 0 }, { x: 130, y: 75 }, { x: 0, y: 150 }, { x: -130, y: 75 },
                    { x: -150, y: 0 }, { x: -130, y: -75 }, { x: 0, y: -150 }, { x: 130, y: -75 },
                    { x: 150, y: 0 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-3', {
            duration: 9,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: -150, y: 0 }, { x: -130, y: -75 }, { x: 0, y: -150 }, { x: 130, y: -75 },
                    { x: 150, y: 0 }, { x: 130, y: 75 }, { x: 0, y: 150 }, { x: -130, y: 75 },
                    { x: -150, y: 0 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-4', {
            duration: 11,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 0, y: -130 }, { x: 110, y: -65 }, { x: 130, y: 0 }, { x: 110, y: 65 },
                    { x: 0, y: 130 }, { x: -110, y: 65 }, { x: -130, y: 0 }, { x: -110, y: -65 },
                    { x: 0, y: -130 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-5', {
            duration: 13,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 150, y: -50 }, { x: 130, y: 25 }, { x: 150, y: 50 }, { x: 130, y: -25 },
                    { x: -150, y: 50 }, { x: -130, y: -25 }, { x: -150, y: -50 }, { x: -130, y: 25 },
                    { x: 150, y: -50 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-6', {
            duration: 14,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: -100, y: -100 }, { x: 50, y: -50 }, { x: 100, y: 100 }, { x: -50, y: 50 },
                    { x: -100, y: -100 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-7', {
            duration: 15,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 100, y: -100 }, { x: -50, y: -50 }, { x: -100, y: 100 }, { x: 50, y: 50 },
                    { x: 100, y: -100 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-8', {
            duration: 16,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 100, y: 0 }, { x: 0, y: 100 }, { x: -100, y: 0 }, { x: 0, y: -100 },
                    { x: 100, y: 0 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

        gsap.to('.skill-icon-9', {
            duration: 17,
            repeat: -1,
            ease: 'none',
            motionPath: {
                path: [
                    { x: 0, y: 100 }, { x: 100, y: 0 }, { x: 0, y: -100 }, { x: -100, y: 0 },
                    { x: 0, y: 100 }
                ],
                alignOrigin: [0.5, 0.5]
            }
        });

    }, []);

    return (
        <div className='pt-10 px-5'>
            <div className='relative z-20 gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center pb-40'>
                Powering Success with Technologies

            </div>
            <div className="relative flex flex-col items-center justify-center h-[300px] md:h-[350px] text-white z-10">
                {/* Central Icon */}
                <div className="central-icon xl:w-2/5 md:w-3/5 w-4/5 rounded-full flex items-center justify-center">
                    <img src={TechStackLogo} alt="Central Icon" />
                </div>

                {/* Skill Icons */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center mt-10 sm:mt-20 md:mt-10">
                    {[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10].map((imgSrc, index) => (
                        <div key={index} className={`skill-icon skill-icon-${index} md:w-16 md:h-16 w-12 h-12 m-4 rounded-full flex items-center justify-center`}>
                            <img src={imgSrc} alt={`Skill ${index + 1}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default TechStack;
