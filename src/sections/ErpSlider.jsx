import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './ErpSlider.css';  // Import custom CSS

const ErpSlider = () => {
    const slides = [
      { id: 1, image: "../assets/images/erp-1.webp", alt: "Slide 1" },
      { id: 2, image: "../assets/images/erp-2.webp", alt: "Slide 2" },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto ">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex justify-center items-center">
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-[650px] p-10 h-auto object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ErpSlider;
