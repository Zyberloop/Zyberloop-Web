import ContactForm from "../sections/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import TechStack from "../sections/TechStack";
import CardSection from "../sections/CardSection";
import Testimonial from "../sections/Testimonial";
import ProjectSection from "../sections/ProjectSection";

const Home = () => {
  return (
    <div className="w-full  bg-primary">
      <Navbar />
      <HeroSection />
      <CardSection />
      <ProjectSection />
      <TechStack />
      <Testimonial />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Home;
