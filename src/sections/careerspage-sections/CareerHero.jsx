import OpportunityCarousel from "./OpportunityCarousel";

const CareerHero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-primary">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-5 px-4 max-w-4xl mt-16">
        <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Build Your Career with Us
        </h1>
        <div className="h-[2px] w-full sm:w-3/5 md:w-2/5 mx-auto bg-gradient-to-r from-primary via-Card_Button to-primary"></div>
        <p className="text-white text-lg sm:text-xl md:text-2xl">
          Join a team that's transforming the future with cutting-edge
          <br className="hidden md:block" />
          technology and innovation.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="w-full max-w-4xl h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-xl bg-cover bg-center mt-10"
        style={{
          backgroundImage: `url("/careersbg.webp")`,
        }}
      ></div>

      {/* Join with Us Section */}
      <div className="mt-16 mb-20 text-center space-y-5 px-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl">
          Join with Us
        </h2>
        <p className="text-white text-lg sm:text-xl md:text-2xl">
          Be part of a dynamic and innovative team dedicated to driving success
          and growth. Explore our exciting opportunities and take your career to
          the next level with Zyberloop.
        </p>
        <a
          href="/careers"
          className="inline-block mt-5 px-8 py-3 text-lg font-semibold text-white bg-Card_Button rounded-full hover:bg-primary transition duration-300"
        >
          Explore Opportunities
        </a>
      </div>

      {/* Opportunities Section */}
      <div className="w-full px-4 max-w-4xl mb-20">
        <OpportunityCarousel />
      </div>
    </div>
  );
};

export default CareerHero;
