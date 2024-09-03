import React from 'react';
import Card from '../components/Card';
import { PanelsTopLeft, TabletSmartphone, ChartNetwork, ShieldHalf } from 'lucide-react';

const CardSectionErp = () => {
    return (
        <div className='flex flex-col items-center justify-center py-16 bg-gray-100'>
            <div className='w-full max-w-[1600px] px-6'>
                <div className='grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
                    
                    <div className='relative group'>
                        <Card
                            icon={<PanelsTopLeft className='h-auto xl:w-200 md:w-16 w-12 text-blue-600' />}
                            title="Responsive UI"
                            description="Zyberloop creates robust, user-friendly websites that enhance businesses' online presence, tailored to local markets."
                            
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                    <div className='relative group'>
                        <Card
                            icon={<TabletSmartphone className='h-auto xl:w-20 md:w-16 w-12 text-green-600' />}
                            title="Responsive UI"
                            description="We develop mobile apps to enhance customer engagement, focusing on usability, functionality, and performance."
                           
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-green-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                    <div className='relative group'>
                        <Card
                            icon={<ChartNetwork className='h-auto xl:w-20 md:w-16 w-12 text-yellow-600' />}
                            title="Responsive UI"
                            description="We provide customized ERP solutions to streamline operations and improve business efficiency."
                        
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-yellow-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                    <div className='relative group'>
                        <Card
                            icon={<ShieldHalf className='h-auto xl:w-20 md:w-16 w-12 text-red-600' />}
                            title="Responsive UI"
                            description="Zyberloop creates impactful logos and brand designs to establish a strong, memorable identity for businesses."
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-lg'></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardSectionErp;
