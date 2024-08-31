import React from 'react';

export default function HeroSection() {
    return (
        <div className='flex items-center justify-center z-20'>
            <div className='flex flex-col justify-center items-center mt-16 space-y-4 px-4 max-w-[1600px]'>
                <div className='gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>
                    Secure a bright future for your
                </div>
                <div className='text-Card_Button text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>
                    Business
                </div>
                <div className="h-[0.7px] w-full sm:w-3/5 md:w-2/5 bg-gradient-to-r from-primary via-Card_Button to-primary"></div>
                <div className='text-white text-lg sm:text-xl md:text-2xl text-center'>
                    Experience exponential growth with Zyberloop's innovative <br className='hidden md:block' /> web development solutions.
                </div>
            </div>
        </div>
    );
}
