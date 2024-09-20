import React from 'react';

export default function HeroSectionProjects() {
    return (
        <div className='flex items-center justify-center z-20 bg-gray-900 py-16'>
            <div className='flex flex-col justify-center items-center space-y-5 px-4 max-w-[1600px]'>
                <div className='gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl'>
                    Transform Your Ideas into Stunning Projects
                </div>

                <div className="h-[2px] w-full sm:w-3/5 md:w-2/5 bg-gradient-to-r from-primary via-Card_Button to-primary"></div>
                <div className='text-white text-lg sm:text-xl md:text-2xl text-center'>
                At Zyberloop, we bring your visions to life with expert software solutions, crafting projects with dedication <br className='hidden md:block' /> Explore our portfolio and see how we can make a difference for your business.
                </div>
            </div>
        </div>
    );
}
