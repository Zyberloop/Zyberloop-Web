import React from 'react';
import Card from '../components/Card';
import { Layers2 } from 'lucide-react';

const CardSection = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 py-10 px-10 max-w-[1600px]'>

                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />




                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />


            </div>

        </div>


    );
}

export default CardSection;
