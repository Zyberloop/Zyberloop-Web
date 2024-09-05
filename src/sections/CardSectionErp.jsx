import React from 'react';
import { PanelsTopLeft, TabletSmartphone, ChartNetwork, ShieldHalf } from 'lucide-react';

const CardSectionErp = () => {
    return (
        <div className='flex flex-col items-center justify-center py-12'>
            <div className='w-full max-w-[1200px] px-4'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
                    
                <div className='relative group h-64 flex flex-col  justify-center p-6 bg-gray-800 rounded-lg'>
                        <PanelsTopLeft className='h-auto lg:w-16 md:w-14 w-10 text-blue-600' />
                        <h3 className='text-lg font-semibold text-white mt-4'>
                            Responsive Web Development
                        </h3>
                        <p className='text-sm mt-2 text-white'>
                            Zyberloop specializes in creating robust, user-friendly websites to enhance businesses' online presence, tailored for the local market.
                        </p>
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                   
                    <div className='relative group h-64 flex flex-col  justify-center p-6 bg-gray-800 rounded-lg'>
                        <TabletSmartphone className='h-auto lg:w-16 md:w-14 w-10 text-green-600' />
                        <h3 className='text-lg font-semibold text-white mt-4'>
                            Mobile App Development
                        </h3>
                        <p className='text-sm mt-2 text-white'>
                            We design and develop mobile apps to engage customers and improve usability, focusing on functionality and performance.
                        </p>
                        <div className='absolute inset-0 bg-gradient-to-t from-green-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                   
                    <div className='relative group h-64 flex flex-col  justify-center p-6 bg-gray-800 rounded-lg'>
                        <ChartNetwork className='h-auto lg:w-16 md:w-14 w-10 text-yellow-600' />
                        <h3 className='text-lg font-semibold text-white mt-4'>
                            Custom ERP Solutions
                        </h3>
                        <p className='text-sm mt-2 text-white'>
                            We deliver tailored ERP solutions to streamline operations, boost efficiency, and scale your business.
                        </p>
                        <div className='absolute inset-0 bg-gradient-to-t from-yellow-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                   
                    <div className='relative group h-64 flex flex-col  justify-center p-6 bg-gray-800 rounded-lg'>
                        <ShieldHalf className='h-auto lg:w-16 md:w-14 w-10 text-red-600' />
                        <h3 className='text-lg font-semibold text-white mt-4'>
                            Branding & Logo Design
                        </h3>
                        <p className='text-sm mt-2 text-white'>
                            Zyberloop creates unique logos and brand identities that establish a strong, memorable presence for your business.
                        </p>
                        <div className='absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardSectionErp;
