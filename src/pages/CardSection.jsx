import React from 'react';
import Card from '../components/card';
import { Layers2 } from 'lucide-react';

const CardSection = () => {
    return (
        <div className='flex flex-col gap-10 py-10'>
            <div className="flex justify-center items-center gap-10 ">
                <Card
                    icon={<Layers2 size={90} />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 size={90} />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 size={90} />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />

            </div>

            <div className="flex justify-center items-center gap-10 ">
                <Card
                    icon={<Layers2 size={90} />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 size={90} />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 size={90} />}
                    title="Create"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started" />

            </div>
        </div>


    );
}

export default CardSection;
