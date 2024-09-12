import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const starRef = useRef(null);
  const navItemRefs = useRef([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    gsap.to(starRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1,
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.clientX - button.offsetLeft - size / 2;
    const y = event.clientY - button.offsetTop - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    gsap.to(ripple, {
      scale: 2,
      opacity: 0,
      duration: 0.6,
      ease: "power1.out",
      onComplete: () => {
        ripple.remove();
      },
    });
  };

  const handleMouseEnter = (index, event) => {
    createRipple(event);
    gsap.to(navItemRefs.current[index], {
      scale: 1.05,
      y: -5,
      duration: 0.3,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(navItemRefs.current[index], {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: "power1.in",
    });
  };

  const handleClick = (index) => {
    // Navigate to the desired route based on the index
    const routes = ["/", "/services", "/pricing", "/careers"];
    navigate(routes[index]);
  };

  return (
    <div ref={navbarRef} className="w-full h-20 bg-navbar-gradient">
      <div className="max-w-max w-full mx-auto h-20 flex justify-between items-center relative px-4">
        <img
          src={"cloud.webp"}
          className="absolute inset-0 object-cover w-full h-full"
          alt="cloud background"
        />
        <div className="flex items-center z-10">
          <img src={"/ZL.webp"} className="w-48 md:w-64 h-16" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-0 xl:gap-8 items-center text-sm lg:text-xl text-white z-10">
          {["Home", "Services", "Pricing", "Careers"].map((item, index) => (
            <div
              key={item}
              ref={(el) => (navItemRefs.current[index] = el)}
              className="ripple-container hover:text-opacity-80 hover:text-pink-300 transition duration-300 cursor-pointer px-4 py-2 rounded-lg"
              onMouseEnter={(event) => handleMouseEnter(index, event)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center relative z-10">
          <button
            className="ripple-container bg-button_base h-10 md:h-12 w-32 md:w-40 lg:h-16 lg:w-48 rounded-full text-md lg:text-lg text-white hover:bg-opacity-90 transition duration-300"
            onMouseEnter={createRipple}
          >
            Contact Us
            <span
              ref={starRef}
              className="absolute w-6 h-8 md:w-9 md:h-12 -left-6 md:-left-8 top-3 md:top-4 -z-10"
            >
              <img src={"/stars.webp"} alt="stars" />
            </span>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center z-10">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/30 backdrop-blur-md text-white flex flex-col items-center gap-1 py-4 z-50 border border-white/20 rounded-lg">
            {["Home", "Services", "Pricing", "Careers"].map((item, index) => (
              <div
                key={item}
                ref={(el) => (navItemRefs.current[index] = el)}
                className="ripple-container hover:text-opacity-80 transition duration-300 cursor-pointer w-48 h-12 text-center rounded-full flex items-center justify-center"
                onMouseEnter={(event) => handleMouseEnter(index, event)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            ))}
            <button
              className="ripple-container bg-button_base h-12 w-48 rounded-full text-lg hover:bg-opacity-90 transition duration-300"
              onMouseEnter={createRipple}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
