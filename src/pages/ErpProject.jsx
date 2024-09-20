import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSectionErp from "../sections/HeroSectionErp";

import IntroSection from "../sections/IntroSection";
import ErpSlider from "../sections/ErpSlider";
import ContactForm from "../sections/ContactForm";
import CardSectionErp from "../sections/CardSectionErp";
export default function ErpProject() {
  return (
    <div className="w-full bg-primary">
      <HeroSectionErp />
      <ErpSlider />
      <IntroSection />
      <CardSectionErp />
      <ContactForm />
    </div>
  );
}
