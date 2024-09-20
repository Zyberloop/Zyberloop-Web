import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ tag, name, description, link, flipped }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // Animate the content area
    timeline.fromTo(
      contentRef.current,
      { x: flipped ? 100 : -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate the iframe (image area)
    timeline.fromTo(
      iframeRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.8" // Overlaps with the previous animation by 0.8 seconds
    );
  }, [flipped]);

  return (
    <div
      ref={cardRef}
      className={`relative w-full h-full mt-10 flex flex-col md:flex-row ${flipped ? "md:flex-row-reverse" : "md:flex-row"
        }`}
    >
      {/* Left Side (Content) */}
      <div
        ref={contentRef}
        className={`w-full md:w-2/3 mb-10 h-full p-4 text-[#CCD6F6] z-10 ${flipped ? "md:-ml-16" : "md:-mr-16"
          }`}
      >
        <p
          className={`bg-gradient-to-br from-[#7879F1] to-[#45468B] bg-clip-text text-transparent text-xl my-2 ${flipped ? "text-end" : "text-start"
            }`}
        >
          {tag}
        </p>
        <h1
          className={`text-2xl font-bold mb-4 ${flipped ? "text-end" : "text-start"
            }`}
        >
          {name}
        </h1>
        <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-lg text-sm">
          {description}
        </div>
      </div>

      {/* Right Side (Image) */}
      <div ref={iframeRef} className="w-full md:w-2/3 p-4 z-0">
        <img
          src={link}
          alt={name}
          className="w-full h-full border-0 rounded-xl"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /*<iframe
          src={link}
          title={name}
          className="w-full h-full border-0 rounded-xl"
          loading="lazy"
        ></iframe>*/
}
