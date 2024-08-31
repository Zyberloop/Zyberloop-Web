import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        interest: 'Web design', // Default selection
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleInterestChange = (interest) => {
        setFormData((prevData) => ({ ...prevData, interest }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you can add your form submission logic (e.g., API call)
    };

    return (
        <div>
            <div className="mt-6 max-w-max mx-auto rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-LexendDecaLigh">
                    <div>
                        <h1 className="text-4xl font-bold text-white font-LexendDecaBold">Contact Us</h1>
                        <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                            Have some big idea or brand to develop and need help? Then reach out, we'd love to hear about your project and provide help.
                        </p>

                        <ul className="mt-12 space-y-8">
                            <li className="flex items-center">
                                <Mail className="text-white" />
                                <a href="mailto:info@zyberloop.net" className="text-white text-sm ml-4">
                                    info@zyberloop.net
                                </a>
                            </li>
                            <li className="flex items-center">
                                <PhoneCall className="text-white" />
                                <a href="tel:+158996888" className="text-white text-sm ml-4">
                                    +158 996 888
                                </a>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="text-white" />
                                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-white text-sm ml-4">
                                    123 Street 256 House
                                </a>
                            </li>
                        </ul>

                        <ul className="flex mt-12 space-x-4">
                            <li className="bg-card_color hover:bg-Card_Button h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="text-white" />
                                </a>
                            </li>
                            <li className="bg-card_color hover:bg-Card_Button h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="text-white" />
                                </a>
                            </li>
                            <li className="bg-card_color hover:bg-Card_Button h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="text-white" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-card_color via-black to-card_color p-6 rounded-lg font-LexendDecaLigh">
                        <p className="text-sm font-semibold text-white">I'm interested in...</p>

                        <div className="space-y-4 max-lg:mt-4">
                            <button
                                type="button"
                                onClick={() => handleInterestChange('Web design')}
                                className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 mr-4 ${formData.interest === 'Web design'
                                    ? 'bg-card_color text-white border-card_color'
                                    : 'bg-transparent text-white border-none'
                                    }`}
                            >
                                Web design
                            </button>
                            <button
                                type="button"
                                onClick={() => handleInterestChange('Graphic design')}
                                className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 mr-4 ${formData.interest === 'Graphic design'
                                    ? 'bg-card_color text-white border-card_color'
                                    : 'bg-transparent text-white border-none'
                                    }`}
                            >
                                Graphic design
                            </button>
                            <button
                                type="button"
                                onClick={() => handleInterestChange('Design system')}
                                className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 ${formData.interest === 'Design system'
                                    ? 'bg-card_color text-white border-card_color'
                                    : 'bg-transparent text-white border-none'
                                    }`}
                            >
                                Design system
                            </button>
                        </div>

                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-none"
                            />
                            <button
                                type="submit"
                                className="text-white bg-card_color hover:bg-Card_Button tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full mt-6"
                            >
                                <Send className="mr-2 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
