import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import TechStack from "../sections/TechStack";
import CardSection from "./CardSection";

const Home = () => {
  return (
    <div className="w-full  bg-primary">
      <Navbar />
      <HeroSection />
      <CardSection />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Home;
