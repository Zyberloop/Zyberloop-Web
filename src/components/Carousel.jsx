import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  "/caro/1.png",
  "/caro/2.png",
  "/caro/3.png",
  "/caro/1.png",
  "/caro/5.png",
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselX = () => {
  return (
    <div className="carousel-container mx-auto my-8 max-w-screen-lg">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        className="rounded-xl overflow-hidden"
      >
        {images.map((image, index) => (
          <div key={index} className="image-slide px-2">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselX;
