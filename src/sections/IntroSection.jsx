import React from 'react';

const IntroSection = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10'>
            <div className='w-full max-w-6xl'>
                <img
                    src="https://bpapos.com/email/img/retailpos.jpg" 
                    alt="Point of Sale System"
                    className='w-full h-auto object-cover rounded-lg shadow-lg'
                />
            </div>
            <div className='px-10 max-w-6xl mt-12'>
                <p className='text-base font-medium text-white mb-4'>
                    For as long as the human race has existed, people have loved a good story.
                </p>
                <p className='text-base font-medium text-white mb-4'>
                    Even today, in our fast-paced, digital world, we’re drawn towards narratives that are compelling, educational, moving and meaningful – but the most impactful long-form content examples contain far more than just words.
                </p>
                <p className='text-base font-medium text-white'>
                    Today, web design is just as important as the written content itself, and to get the best results, it’s helpful to stop viewing content and web design as two separate entities. Instead, try to see them as a vital duo that work together, ensuring your finished product is both memorable and meaningful.
                </p>
                <p className='text-base font-medium text-white mt-4'>
                    This is actually a huge focus for us at Vev—we want to make it easy for web designers and content managers to create amazing web content together. To explore just how critical web design can be in the world of content, let’s take a look at some of the most effective long-form content examples and the web design choices that make them sing.
                </p>
            </div>
        </div>
    );
}

export default IntroSection;
