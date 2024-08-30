import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-32 bg-navbar-gradient">
      <div className="max-w-max w-full mx-auto h-32 flex justify-between items-center relative px-4">
        <img src={"cloud.webp"} className="absolute inset-0" alt="cloud background" />
        <div className="flex items-center">
          <img src={"/ZL.webp"} className="w-48 md:w-64 h-16" alt="logo" />
        </div>

        <div className="hidden md:flex gap-8 items-center text-xl text-white">
          <div>Home</div>
          <div>Discover</div>
          <div>Marketplace</div>
          <div>Careers</div>
          <div>Community</div>
        </div>

        <div className="hidden md:flex items-center relative">
          <button className="bg-button_base h-12 md:h-16 w-36 md:w-48 rounded-full text-lg text-white">
            Contact Us
          </button>
          <img src={"stars.webp"} className="absolute w-6 h-8 md:w-9 md:h-12 -left-6 md:-left-8 top-3 md:top-4 -z-10" alt="stars" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
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
          <div className="md:hidden absolute top-full left-0 w-full bg-navbar-gradient text-white flex flex-col items-center gap-4 py-4 z-50">
            <div>Home</div>
            <div>Discover</div>
            <div>Marketplace</div>
            <div>Careers</div>
            <div>Community</div>
            <button className="bg-button_base h-12 w-48 rounded-full text-lg">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
