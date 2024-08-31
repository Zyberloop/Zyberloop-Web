import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true, // Add this line
        centerPadding: '0', // Adjust as needed
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true, // Add this line
                    centerPadding: '0', // Adjust as needed
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true, // Add this line
                    centerPadding: '0', // Adjust as needed
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true, // Add this line
                    centerPadding: '0', // Adjust as needed
                }
            }
        ]
    };


    return (
        <div className='flex flex-col justify-center items-center max-w-max mx-auto space-y-10 py-5 px-10 '>
            <div className=" mx-auto text-center flex flex-col justify-center items-center">
                <h2 className="text-6xl font-extrabold gradient-text ">What our happy client say</h2>
                <p className="text-sm md:text-base mt-4  text-white max-w-2xl ">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in</p>
            </div>

            <Slider {...settings} className='w-full'>
                <div className='px-2 py-10'>

                    <TestimonialCard
                        name="Alice Johnson"
                        title="Marketing Manager, XYZ Corp"
                        image="https://readymadeui.com/team-2.webp"
                        testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                        rating={4}
                    />
                </div>

                <div className='px-2 py-10'>

                    <TestimonialCard
                        name="Alice Johnson"
                        title="Marketing Manager, XYZ Corp"
                        image="https://readymadeui.com/team-2.webp"
                        testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                        rating={4}
                    />
                </div>

                <div className='px-2 py-10'>

                    <TestimonialCard
                        name="Alice Johnson"
                        title="Marketing Manager, XYZ Corp"
                        image="https://readymadeui.com/team-2.webp"
                        testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                        rating={4}
                    />
                </div>
                <div className='px-2 py-10'>

                    <TestimonialCard
                        name="Alice Johnson"
                        title="Marketing Manager, XYZ Corp"
                        image="https://readymadeui.com/team-2.webp"
                        testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                        rating={4}
                    />
                </div>
                <div className='px-2 py-10'>

                    <TestimonialCard
                        name="Alice Johnson"
                        title="Marketing Manager, XYZ Corp"
                        image="https://readymadeui.com/team-2.webp"
                        testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                        rating={4}
                    />
                </div>



            </Slider>
        </div>
    )
}
