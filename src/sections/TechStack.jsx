import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Img1 from "../assets/images/1.png";
import Img2 from "../assets/images/2.png";
import Img3 from "../assets/images/3.png";
import Img4 from "../assets/images/4.png";
import Img5 from "../assets/images/5.png";
import Img6 from "../assets/images/6.png";
import Img7 from "../assets/images/7.png";
import Img8 from "../assets/images/8.png";
import Img9 from "../assets/images/9.png";
import Img10 from "../assets/images/10.png";
import TechStackLogo from "../assets/images/TechStackLogo.png";

gsap.registerPlugin(MotionPathPlugin);

const TechStack = () => {
  useEffect(() => {
    // GSAP animation for the icons and central element
    gsap.fromTo(
      ".skill-icon",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
    gsap.fromTo(
      ".central-icon",
      { scale: 0 },
      { scale: 1, duration: 1.5, ease: "bounce" }
    );

    // Mouse hover effect with shining shadow
    gsap.utils.toArray(".skill-icon").forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.2, rotation: 10, duration: 0.3 });
        gsap.to(icon, {
          boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.8)",
          duration: 0.3,
        });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
        gsap.to(icon, {
          boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
          duration: 0.3,
        });
      });
    });

    // GSAP motionPath animations for each skill icon
    const paths = [
      // Paths for each icon
      [
        { x: 0, y: -150 },
        { x: 130, y: -75 },
        { x: 150, y: 0 },
        { x: 130, y: 75 },
        { x: 0, y: 150 },
        { x: -130, y: 75 },
        { x: -150, y: 0 },
        { x: -130, y: -75 },
        { x: 0, y: -150 },
      ],
      [
        { x: 0, y: 150 },
        { x: -130, y: 75 },
        { x: -150, y: 0 },
        { x: -130, y: -75 },
        { x: 0, y: -150 },
        { x: 130, y: -75 },
        { x: 150, y: 0 },
        { x: 130, y: 75 },
        { x: 0, y: 150 },
      ],
      [
        { x: 0, y: -120 },
        { x: 110, y: -60 },
        { x: 120, y: 0 },
        { x: 110, y: 60 },
        { x: 0, y: 120 },
        { x: -110, y: 60 },
        { x: -120, y: 0 },
        { x: -110, y: -60 },
        { x: 0, y: -120 },
      ],
      [
        { x: 0, y: 120 },
        { x: -110, y: 60 },
        { x: -120, y: 0 },
        { x: -110, y: -60 },
        { x: 0, y: -120 },
        { x: 110, y: -60 },
        { x: 120, y: 0 },
        { x: 110, y: 60 },
        { x: 0, y: 120 },
      ],
      [
        { x: 0, y: -100 },
        { x: 90, y: -50 },
        { x: 100, y: 0 },
        { x: 90, y: 50 },
        { x: 0, y: 100 },
        { x: -90, y: 50 },
        { x: -100, y: 0 },
        { x: -90, y: -50 },
        { x: 0, y: -100 },
      ],
      [
        { x: 0, y: 100 },
        { x: -90, y: 50 },
        { x: -100, y: 0 },
        { x: -90, y: -50 },
        { x: 0, y: -100 },
        { x: 90, y: -50 },
        { x: 100, y: 0 },
        { x: 90, y: 50 },
        { x: 0, y: 100 },
      ],
      [
        { x: 0, y: -80 },
        { x: 70, y: -40 },
        { x: 80, y: 0 },
        { x: 70, y: 40 },
        { x: 0, y: 80 },
        { x: -70, y: 40 },
        { x: -80, y: 0 },
        { x: -70, y: -40 },
        { x: 0, y: -80 },
      ],
      [
        { x: 0, y: 80 },
        { x: -70, y: 40 },
        { x: -80, y: 0 },
        { x: -70, y: -40 },
        { x: 0, y: -80 },
        { x: 70, y: -40 },
        { x: 80, y: 0 },
        { x: 70, y: 40 },
        { x: 0, y: 80 },
      ],
      [
        { x: 0, y: -60 },
        { x: 50, y: -30 },
        { x: 60, y: 0 },
        { x: 50, y: 30 },
        { x: 0, y: 60 },
        { x: -50, y: 30 },
        { x: -60, y: 0 },
        { x: -50, y: -30 },
        { x: 0, y: -60 },
      ],
      [
        { x: 0, y: 60 },
        { x: -50, y: 30 },
        { x: -60, y: 0 },
        { x: -50, y: -30 },
        { x: 0, y: -60 },
        { x: 50, y: -30 },
        { x: 60, y: 0 },
        { x: 50, y: 30 },
        { x: 0, y: 60 },
      ],
    ];

    // Apply motion path animation to each skill icon
    paths.forEach((path, index) => {
      gsap.to(`.skill-icon-${index}`, {
        duration: 8 + index,
        repeat: -1,
        ease: "none",
        motionPath: {
          path,
          alignOrigin: [0.5, 0.5],
        },
      });
    });
  }, []);

  return (
    <div className="pt-10 px-5 py-20">
      <div className="relative z-20 gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center md:pb-32 pb-5">
        Powering Success with Technologies
      </div>
      <div className="relative flex flex-col items-center justify-center h-[300px] md:h-[350px] text-white z-10">
        {/* Central Icon */}
        <div className="central-icon xl:w-2/5 md:w-3/5 w-4/5 rounded-full flex items-center justify-center pt-40 md:mt-0">
          <img src={TechStackLogo} alt="Central Icon" />
        </div>

        {/* Skill Icons */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center mt-10 sm:mt-20 md:mt-10">
          {[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10].map(
            (imgSrc, index) => (
              <div
                key={index}
                className={`skill-icon skill-icon-${index} 
                        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 m-4 rounded-full flex items-center justify-center`}
              >
                <img
                  src={imgSrc}
                  alt={`Skill ${index + 1}`}
                  className="w-full h-full rounded-full"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
