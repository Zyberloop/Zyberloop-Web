import React from 'react';
import Card from '../components/Card';
import { Layers2 } from 'lucide-react';

const CardSection = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 py-10 px-10 max-w-[1600px]'>

                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Web Development"
                    description="Zyberloop creates robust, user-friendly websites to enhance businesses' online presence, tailored for local markets."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Mobile App Development"
                    description="We develop mobile apps that enhance customer engagement, focusing on usability, functionality, and performance."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="ERP Solutions"
                    description="We provide customized ERP solutions to streamline operations and improve business efficiency."
                    buttonText="Get Started" />




                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Logos & Brand Designing"
                    description="Zyberloop creates impactful logos and brand designs to establish a strong, memorable identity for businesses."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Cloud Solutions"
                    description="We offer scalable cloud solutions to enhance data security, accessibility, and business agility."
                    buttonText="Get Started" />
                <Card
                    icon={<Layers2 className='h-auto xl:w-20  md:w-14 w-10' />}
                    title="Social Media Management"
                    description="We manage social media platforms to boost brand visibility, engage audiences, and drive business growth."
                    buttonText="Get Started" />


            </div>

        </div>


    );
}

export default CardSection;
