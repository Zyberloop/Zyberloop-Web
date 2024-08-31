import { Facebook, Instagram, Linkedin, LinkedinIcon } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (

        <div class="bg-card_color font-LexendDecaLigh tracking-wide relative overflow-hidden ">

            <div class="my-8 px-12 flex flex-wrap sm:justify-between gap-6 relative z-20 max-w-max mx-auto">
                <div class="flex space-x-5">
                    <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-base transition-all">
                        <Facebook />
                    </a>
                    <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-base transition-all">
                        <Linkedin />
                    </a>
                    <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-base transition-all">
                        <Instagram />
                    </a>
                </div>

                <p class='text-gray-300 text-sm'>© Zyberloop.net. All rights reserved.
                </p>
            </div>

            <img src="https://readymadeui.com/bg-image.webp" class="absolute w-full inset-0 object-cover opacity-5 -z-0" />
        </div>

    )
}
