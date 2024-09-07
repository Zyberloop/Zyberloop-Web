import CarouselX from "../../components/Carousel";
import OpportunityCarousel from "./OpportunityCarousel";

const CareerHero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-primary">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-5 px-4 max-w-4xl mt-16">
        <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Build Your Career with us
        </h1>
        <div className="h-[2px] w-full sm:w-3/5 md:w-2/5 mx-auto bg-gradient-to-r from-primary via-Card_Button to-primary"></div>
        <p className="text-white text-opacity-50 text-lg sm:text-xl md:text-2xl">
          Join a team that's transforming the future with cutting-edge
          <br className="hidden md:block" />
          technology and innovation.
        </p>
        <div className="w-full h-[300px] relative">
          <div className="absolute w-full h-full z-10">
            <CarouselX />
          </div>
          <img src={"/caro/line1.png"} className="absolute" />
          <img src={"/caro/line2.png"} className="absolute" />
        </div>
      </div>

      {/* Join with Us Section */}
      <div className="mt-16 mb-20 text-center space-y-5 px-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl">
          Be a Part of Our Journey
        </h2>
      </div>

      {/* Opportunities Section */}
      <div className="w-full px-4 max-w-4xl mb-20">
        <OpportunityCarousel />
      </div>
    </div>
  );
};

export default CareerHero;
