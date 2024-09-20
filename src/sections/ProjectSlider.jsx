import React from 'react';
import Slider from 'react-slick';
import image1 from '../assets/image1.png';

const projects = [
    {
        title: 'PearlX',
        description: 'Innovative web solution for venue booking with an intuitive platform.',
        imgSrc:'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174543/Young-India-Fellowship.jpg', 
    },
    {
        title: 'POS System for Schoolpaperbank.lk',
        description: 'Custom ERP solution for business management.',
        imgSrc: 'https://blog.magmalabs.io/wp-content/uploads/2021/01/The-Tale-of-TeamWork_Mesa-de-trabajo-1.png', 
    },
    {
        title: 'Entrix Lanka.lk',
        description: 'Showcases their solar energy solutions through an innovative website, highlighting sustainability.',
        imgSrc: 'https://img.freepik.com/premium-photo/generative-ai-photovoltaic-solar-panel-station_108985-2333.jpg', 
    },
    
];

const ProjectSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='flex flex-col items-center py-12'>
            <div className='w-full max-w-[1200px] px-4'>
                <div className='text-2xl font-semibold text-center mb-6 gradient-text sm:text-2xl md:text-3xl lg:text-3xl  max-w-6xl'>
                    Our Recent Projects
                </div>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className='relative'>
                            <img src={project.imgSrc} alt={project.title} className='w-full h-80 object-cover rounded-lg' />
                            <div className='absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 rounded-lg'>
                                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                                <p className='text-sm text-center'>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProjectSlider;
