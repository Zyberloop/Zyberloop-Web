import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ tag, name, description, link, flipped }) => {
  const contentRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    timeline.fromTo(
      contentRef.current,
      { x: flipped ? 100 : -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    timeline.fromTo(
      iframeRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.8" // This will overlap with the previous animation
    );
  }, [flipped]);

  return (
    <div
      className={`relative w-full h-full mt-10 flex ${
        flipped ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Left Side (Content) */}
      <div
        ref={contentRef}
        className={`w-2/3 mb-10 h-full p-4 text-[#CCD6F6] z-10 ${
          flipped ? "-ml-16" : "-mr-16"
        }`}
      >
        <p
          className={`bg-gradient-to-br from-[#7879F1] to-[#45468B] bg-clip-text text-transparent text-xl my-2 ${
            flipped ? "text-end" : "text-start"
          }`}
        >
          {tag}
        </p>
        <h1
          className={`text-2xl font-bold mb-4 ${
            flipped ? "text-end" : "text-start"
          }`}
        >
          {name}
        </h1>
        <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-lg text-sm">
          {description}
        </div>
      </div>

      {/* Right Side (Link as iframe) */}
      <div className="w-2/3 p-4 z-0">
        <img
          ref={iframeRef}
          src={link}
          className="w-full h-full border-0 rounded-xl"
        />
        {/*<iframe
          ref={iframeRef}
          src={link}
          title={name}
          className="w-full h-full border-0 rounded-xl"
          loading="lazy"
        ></iframe>*/}
      </div>
    </div>
  );
};

export default ProjectCard;
