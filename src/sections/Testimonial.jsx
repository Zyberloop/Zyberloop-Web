import React from 'react'
import TestimonialCard from '../components/TestimonialCard'

export default function Testimonial() {
    return (
        <div className='flex flex-col justify-center items-center max-w-max mx-auto space-y-10 py-5 px-10'>

            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-white">What our happy client say</h2>
                <p class="text-sm mt-4 leading-relaxed text-white">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in</p>
            </div>
            <div className='grid md:grid-cols-3 items-center justify-center gap-10'>

                <TestimonialCard
                    name="Alice Johnson"
                    title="Marketing Manager, XYZ Corp"
                    image="https://readymadeui.com/team-2.webp"
                    testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                    rating={4}
                />

                <TestimonialCard
                    name="Alice Johnson"
                    title="Marketing Manager, XYZ Corp"
                    image="https://readymadeui.com/team-2.webp"
                    testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                    rating={5}
                />
                <TestimonialCard
                    name="Alice Johnson"
                    title="Marketing Manager, XYZ Corp"
                    image="https://readymadeui.com/team-2.webp"
                    testimonial="Their creativity and attention to detail were incredible. I am thrilled with the outcome."
                    rating={5}
                />


            </div>

        </div>
    )
}




