import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSectionErp from '../sections/HeroSectionErp';
import CardSectionErp from '../sections/CardSectionErp';
import IntroSection from '../sections/IntroSection';

export default function ErpProject() {
    return (
        <div className="w-full bg-primary">
            <Navbar />
            <HeroSectionErp />
            <IntroSection/>
            <CardSectionErp/>
            
            <Footer />
        </div>
    );
}
